# Deployment Guide for Bang's Kitchen Website

## Issue Resolution

The 404 errors for `_next/static/chunks/*.js` files have been resolved with the following fixes:

### 1. Tailwind CSS Configuration Fixed
- Changed `@apply border-border` to `border-color: hsl(var(--border))`
- Changed `@apply bg-background text-foreground` to direct CSS properties
- This resolves build-time Tailwind errors

### 2. Server Configuration Added

#### For Apache Servers (Most Shared Hosting)
A `.htaccess` file has been added to handle:
- Proper routing for Next.js static export
- Correct MIME types for JavaScript files
- HTTPS enforcement
- Gzip compression
- Static asset caching

#### For GitHub Pages
A `.nojekyll` file prevents Jekyll processing

#### For Vercel
A `vercel.json` file configures proper headers and caching

### 3. Build Process Updated
The build script now automatically:
1. Builds the Next.js application
2. Copies `.htaccess` to the `out` directory
3. Creates `.nojekyll` file in the `out` directory

## Deployment Instructions

### Building for Production
```bash
npm run build
```

This will create an optimized production build in the `out` directory.

### Deployment Options

#### Option 1: Traditional Web Hosting (Apache/cPanel)
1. Run `npm run build`
2. Upload the entire contents of the `out` directory to your web server's public directory (e.g., `public_html`)
3. Ensure `.htaccess` is uploaded (enable "Show Hidden Files" in your FTP client)
4. Verify all `_next` directory contents are uploaded

**Important for cPanel/FTP:**
- Make sure hidden files (starting with `.`) are visible in your FTP client
- Verify the `_next` folder structure is intact
- Check that folder permissions are correct (755 for folders, 644 for files)

#### Option 2: Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

#### Option 3: GitHub Pages
1. Run `npm run build`
2. Push the `out` directory contents to your GitHub Pages repository
3. Enable GitHub Pages in repository settings

#### Option 4: Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Deploy

### Troubleshooting

#### If you still see 404 errors for `_next` files:

1. **Check file upload**: Ensure ALL files in the `out/_next` directory are uploaded, including subdirectories

2. **Check .htaccess**: Verify the `.htaccess` file exists in your web root and your server supports it (Apache servers)

3. **Check server configuration**: Some servers require additional configuration:
   ```apache
   # If using Apache, ensure mod_rewrite is enabled
   # Contact your hosting provider if needed
   ```

4. **Clear cache**:
   - Clear your browser cache (Ctrl+Shift+Delete)
   - Clear your CDN cache if using one (Cloudflare, etc.)
   - Clear server-side cache if applicable

5. **Check file permissions**:
   ```bash
   # Files should be readable (644)
   # Directories should be executable (755)
   ```

6. **Verify MIME types**: Ensure your server is serving JavaScript files with correct content type:
   - JS files should be `application/javascript`
   - CSS files should be `text/css`

#### If styles are broken:

1. Check that CSS files in `out/_next/static/css/` are uploaded
2. Verify the CSS file referenced in your HTML matches the actual filename
3. Clear browser cache and hard reload (Ctrl+Shift+R)

### Server Requirements

- Apache 2.4+ with mod_rewrite enabled (for .htaccess support)
- OR Nginx with proper configuration
- OR Node.js hosting (Vercel, Netlify, etc.)
- PHP not required (this is a static site)

### Post-Deployment Checklist

- [ ] All pages load without 404 errors
- [ ] Navigation works correctly
- [ ] Images display properly
- [ ] Mobile hamburger menu functions
- [ ] Gallery image modal opens correctly
- [ ] Quote modal works
- [ ] Styles are applied correctly
- [ ] Links navigate to correct pages

### Custom Domain Configuration

If deploying to bangskitchen.co.za:

1. Ensure DNS is pointing to your hosting server
2. Verify SSL certificate is installed
3. Check that the `.htaccess` HTTPS redirect is working
4. Test all routes with and without trailing slashes

### Getting Help

If issues persist after following these steps:

1. Check browser console for specific error messages
2. Check server error logs (usually in cPanel or hosting control panel)
3. Verify file structure matches the expected Next.js export structure
4. Contact your hosting provider about Apache mod_rewrite or URL rewriting support

## Build Output Structure

The `out` directory should contain:
```
out/
├── .htaccess          # Apache configuration
├── .nojekyll          # GitHub Pages configuration
├── _next/             # Next.js assets
│   └── static/
│       ├── chunks/    # JavaScript bundles
│       ├── css/       # Stylesheets
│       └── media/     # Fonts and other media
├── gallery/           # Gallery page
├── menu/              # Menu page
├── catering/          # Image assets
├── daily-lunches/     # Image assets
├── kids-lunches/      # Image assets
├── platters/          # Image assets
├── index.html         # Home page
└── [other static assets]
```

## Notes

- This is a static site export - no server-side rendering
- All images are unoptimized for static hosting compatibility
- The site uses client-side routing for navigation
- Forms may require additional backend setup for email functionality
