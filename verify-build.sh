#!/bin/bash

# Verify Build Script for Bang's Kitchen Website
# This script checks that all file references in HTML match actual files

echo "================================================"
echo "  Bang's Kitchen - Build Verification Tool"
echo "================================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if out directory exists
if [ ! -d "out" ]; then
    echo -e "${RED}❌ Error: 'out' directory not found!${NC}"
    echo "   Please run: npm run build"
    exit 1
fi

echo "✓ Found 'out' directory"
echo ""

# Function to check if a file exists
check_file() {
    local file=$1
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $file"
        return 0
    else
        echo -e "${RED}✗${NC} Missing: $file"
        return 1
    fi
}

# Check main HTML files
echo "📄 Checking HTML pages..."
echo "---"
check_file "out/index.html"
check_file "out/gallery/index.html"
check_file "out/menu/index.html"
echo ""

# Check essential config files
echo "⚙️  Checking configuration files..."
echo "---"
check_file "out/.htaccess"
check_file "out/.nojekyll"
echo ""

# Check CSS files
echo "🎨 Checking CSS files..."
echo "---"
css_count=$(ls out/_next/static/css/*.css 2>/dev/null | wc -l)
if [ $css_count -gt 0 ]; then
    echo -e "${GREEN}✓${NC} Found $css_count CSS file(s)"
    ls out/_next/static/css/*.css | xargs -n1 basename
else
    echo -e "${RED}✗${NC} No CSS files found!"
fi
echo ""

# Check JavaScript chunks
echo "📦 Checking JavaScript chunks..."
echo "---"
js_count=$(ls out/_next/static/chunks/*.js 2>/dev/null | wc -l)
if [ $js_count -gt 0 ]; then
    echo -e "${GREEN}✓${NC} Found $js_count JS chunk file(s)"
else
    echo -e "${RED}✗${NC} No JS chunk files found!"
fi
echo ""

# Verify HTML references match actual files
echo "🔍 Verifying HTML references..."
echo "---"

# Extract CSS reference from index.html
css_ref=$(grep -o '/_next/static/css/[^"]*\.css' out/index.html | head -1)
if [ -n "$css_ref" ]; then
    css_file="out${css_ref}"
    if [ -f "$css_file" ]; then
        echo -e "${GREEN}✓${NC} CSS reference matches: ${css_ref}"
    else
        echo -e "${RED}✗${NC} CSS reference broken: ${css_ref}"
        echo "   File not found: ${css_file}"
    fi
else
    echo -e "${YELLOW}⚠${NC}  No CSS reference found in index.html"
fi

# Check a few critical JS chunks
js_files=$(grep -o 'chunks/[^"]*\.js' out/index.html | sort -u)
missing_chunks=0
checked=0

for js_ref in $js_files; do
    js_file="out/_next/static/${js_ref}"
    if [ -f "$js_file" ]; then
        if [ $checked -lt 3 ]; then
            echo -e "${GREEN}✓${NC} JS chunk exists: $(basename $js_ref)"
            checked=$((checked + 1))
        fi
    else
        echo -e "${RED}✗${NC} JS chunk missing: $(basename $js_ref)"
        missing_chunks=$((missing_chunks + 1))
    fi
done

if [ $checked -ge 3 ]; then
    remaining=$(($(echo "$js_files" | wc -l) - checked))
    if [ $remaining -gt 0 ]; then
        echo -e "${GREEN}✓${NC} ... and $remaining more chunks verified"
    fi
fi
echo ""

# Check image directories
echo "🖼️  Checking image directories..."
echo "---"
for dir in catering daily-lunches kids-lunches platters; do
    if [ -d "out/$dir" ]; then
        img_count=$(ls out/$dir/*.{jpg,jpeg,png} 2>/dev/null | wc -l)
        echo -e "${GREEN}✓${NC} out/$dir/ ($img_count images)"
    else
        echo -e "${YELLOW}⚠${NC}  out/$dir/ not found"
    fi
done
echo ""

# Check logo and main images
echo "🏷️  Checking essential images..."
echo "---"
check_file "out/logo.svg"
check_file "out/hero-cooking.jpeg"
check_file "out/mission-catering.jpg"
echo ""

# Calculate total size
echo "📊 Build statistics..."
echo "---"
total_size=$(du -sh out 2>/dev/null | cut -f1)
echo "Total build size: $total_size"
js_size=$(du -sh out/_next/static/chunks 2>/dev/null | cut -f1)
echo "JavaScript size: $js_size"
img_size=$(du -sh out/{catering,daily-lunches,kids-lunches,platters} 2>/dev/null | awk '{sum+=$1} END {print sum"M"}')
echo "Images size: ~$img_size"
echo ""

# Final verdict
echo "================================================"
if [ $missing_chunks -eq 0 ] && [ -f "out/.htaccess" ] && [ -f "out/index.html" ]; then
    echo -e "${GREEN}✅ Build verification PASSED!${NC}"
    echo ""
    echo "Your build looks good. Ready to deploy!"
    echo ""
    echo "Next steps:"
    echo "  1. Test locally: npm run serve"
    echo "  2. Upload 'out' folder to your server"
    echo "  3. Don't forget hidden files (.htaccess, .nojekyll)"
    exit 0
else
    echo -e "${RED}❌ Build verification FAILED!${NC}"
    echo ""
    echo "Issues found. Please rebuild:"
    echo "  rm -rf out && npm run build"
    exit 1
fi
