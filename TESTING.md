# Testing Your Static Build Locally

Before deploying your site, you should test the `out` folder locally to ensure everything works correctly. Here are multiple methods:

## Method 1: Using the Serve Package (Recommended)

This is the easiest and most reliable method.

### Quick Test
```bash
npm run serve
```

This will serve your `out` folder on `http://localhost:3000`

### Build and Test in One Command
```bash
npm run test:build
```

This will:
1. Build your site
2. Automatically start serving it on `http://localhost:3000`

**Then test:**
- Open `http://localhost:3000` in your browser
- Navigate through all pages
- Test the mobile hamburger menu
- Click images in the gallery to test the modal
- Try the "Get Quote" button
- Check the console for any errors (F12 → Console tab)

Press `Ctrl+C` to stop the server when done.

---

## Method 2: Python Simple HTTP Server

If you have Python installed (pre-installed on Mac/Linux):

### Python 3:
```bash
cd out
python3 -m http.server 8000
```

### Python 2:
```bash
cd out
python -m SimpleHTTPServer 8000
```

**Then open:** `http://localhost:8000` in your browser

**Note:** Python's server doesn't handle routing as well as `serve`, so you might have issues with direct navigation to `/gallery/` or `/menu/`. This is normal and will work fine on the actual server with the `.htaccess` file.

---

## Method 3: PHP Built-in Server

If you have PHP installed:

```bash
cd out
php -S localhost:8000
```

**Then open:** `http://localhost:8000` in your browser

---

## Method 4: VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code
2. Right-click on `out/index.html`
3. Select "Open with Live Server"

**Note:** This may have routing issues similar to the Python server.

---

## Method 5: Using http-server (Node.js)

Install globally (one time):
```bash
npm install -g http-server
```

Then run:
```bash
cd out
http-server -p 8000
```

**Then open:** `http://localhost:8000` in your browser

---

## What to Test

Use this checklist when testing your build:

### Homepage Testing
- [ ] Page loads without errors
- [ ] Header is visible with logo
- [ ] Desktop navigation shows on large screens
- [ ] Mobile hamburger menu shows on small screens (resize browser)
- [ ] All images load correctly
- [ ] "Get Quote" button opens the modal
- [ ] Modal form is functional
- [ ] Smooth scrolling to sections works (Services, About, Contact)
- [ ] Footer is displayed correctly

### Mobile Menu Testing (resize browser to mobile size)
- [ ] Hamburger icon appears in header
- [ ] Clicking hamburger opens the menu
- [ ] Menu slides in from the right
- [ ] All navigation links are visible
- [ ] Clicking a link closes the menu
- [ ] Clicking outside the menu closes it
- [ ] "Get Quote" button in mobile menu works
- [ ] X icon closes the menu

### Gallery Page Testing
- [ ] Navigate to `/gallery/` (or click Gallery in menu)
- [ ] All images load correctly
- [ ] Filter tags work (All, Catering, Daily Lunches, etc.)
- [ ] Image count updates when filtering
- [ ] Clicking an image opens the modal
- [ ] Modal shows image in full size
- [ ] Previous/Next buttons work in modal
- [ ] Arrow keys navigate between images (← →)
- [ ] Escape key closes the modal
- [ ] Clicking outside closes the modal
- [ ] Image information displays (category, description, count)
- [ ] Mobile hamburger menu works on gallery page

### Menu Page Testing
- [ ] Navigate to `/menu/` (or click Menu in navigation)
- [ ] Page loads with all menu items
- [ ] Images display correctly
- [ ] "Get Quote" functionality works
- [ ] Mobile hamburger menu works on menu page

### Navigation Testing
- [ ] All internal links work
- [ ] Browser back button works
- [ ] Browser forward button works
- [ ] Direct URL navigation works (e.g., type `/gallery/` in address bar)
- [ ] Links open in same tab (not new tabs)

### Performance Testing
- [ ] Pages load quickly
- [ ] No console errors (F12 → Console)
- [ ] Images load without 404 errors
- [ ] JavaScript files load without 404 errors
- [ ] CSS files load without 404 errors

### Browser Testing
Test in multiple browsers:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile browsers (use browser dev tools to simulate)

### Console Check
Open browser console (F12 → Console tab) and verify:
- [ ] No red errors
- [ ] No 404 (Not Found) errors
- [ ] No JavaScript errors
- [ ] CSS is loaded correctly

---

## Common Issues During Local Testing

### Issue: Direct navigation to `/gallery/` shows 404
**This is expected** when using Python or PHP servers. The actual deployment with `.htaccess` will handle this correctly. Test by:
1. Starting at the homepage
2. Clicking the Gallery link in the navigation
3. Verifying it works that way

### Issue: Images don't load
Make sure you're serving the entire `out` folder, not just the HTML files.

### Issue: Styles are broken
1. Check the browser console for CSS 404 errors
2. Verify `out/_next/static/css/` files exist
3. Clear browser cache (Ctrl+Shift+Delete)
4. Do a hard reload (Ctrl+Shift+R)

### Issue: JavaScript doesn't work
1. Check console for JS errors
2. Verify `out/_next/static/chunks/` files exist
3. Make sure you're testing with a proper HTTP server (not file:// protocol)

---

## Before Deploying

Once local testing is complete:

1. **Run a fresh build:**
   ```bash
   npm run build
   ```

2. **Test the fresh build:**
   ```bash
   npm run serve
   ```

3. **Do a final checklist** (see "What to Test" above)

4. **Check file sizes:**
   ```bash
   ls -lh out/_next/static/chunks/
   ```
   Verify JavaScript files are present and reasonable sizes (not 0 bytes)

5. **Verify hidden files exist:**
   ```bash
   ls -la out/ | grep "^\."
   ```
   You should see `.htaccess` and `.nojekyll`

6. **Ready to deploy!** Upload the entire `out` folder contents to your server.

---

## Troubleshooting Tips

### Server won't start
- Check if port 3000 (or 8000) is already in use
- Try a different port: `npx serve out -p 3001`
- Make sure you're in the project root directory

### Changes not showing
- Stop the server (Ctrl+C)
- Rebuild: `npm run build`
- Start server again: `npm run serve`
- Hard reload browser (Ctrl+Shift+R)

### Permission denied errors
```bash
chmod -R 755 out
```

---

## Quick Reference Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Build the production site |
| `npm run serve` | Serve the `out` folder on port 3000 |
| `npm run test:build` | Build and serve in one command |
| `npm run dev` | Run development server (for making changes) |

---

## Next Steps

After successful local testing:
1. Read `DEPLOYMENT.md` for deployment instructions
2. Upload the `out` folder to your server
3. Test on the live site
4. Clear CDN/browser caches if needed

**Remember:** The local testing might have some routing limitations compared to the production server with `.htaccess`, but this is normal and expected.
