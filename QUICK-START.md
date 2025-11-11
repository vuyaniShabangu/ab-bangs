# Quick Start Guide - Bang's Kitchen Website

## Test Your Build Locally (Before Deploying)

### Option 1: Quick Test (Recommended)
```bash
npm run serve
```
Then open: **http://localhost:3000** in your browser

### Option 2: Build and Test Together
```bash
npm run test:build
```
This builds everything fresh and starts the server automatically.

---

## What to Test

Open your browser and check:

1. **Homepage** - http://localhost:3000
   - ✅ Mobile hamburger menu works
   - ✅ All sections scroll smoothly
   - ✅ "Get Quote" button opens modal

2. **Gallery** - http://localhost:3000/gallery/
   - ✅ Images load correctly
   - ✅ Filter tags work
   - ✅ Clicking an image opens modal
   - ✅ Arrow keys navigate between images

3. **Menu** - http://localhost:3000/menu/
   - ✅ All menu items display
   - ✅ Page loads without errors

4. **Browser Console** (Press F12 → Console)
   - ✅ No red errors
   - ✅ No 404 errors

---

## Deploy to Production

### 1. Build for production:
```bash
npm run build
```

### 2. Upload the `out` folder:
- Upload ALL files from the `out` directory to your server
- **Important:** Enable "Show hidden files" in your FTP client
- Verify `.htaccess` and `.nojekyll` are uploaded

### 3. Clear all caches:
- Browser cache (Ctrl+Shift+Delete)
- Server cache
- CDN cache (if using Cloudflare, etc.)

---

## Common Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Development server (for making changes) |
| `npm run build` | Build for production |
| `npm run serve` | Test the production build locally |
| `npm run test:build` | Build + test in one command |

---

## Need Help?

- **Testing issues?** Read `TESTING.md`
- **Deployment issues?** Read `DEPLOYMENT.md`
- **Console errors?** Press F12 and check the Console tab

---

## Files in `out` Folder

After building, your `out` folder contains:
```
out/
├── .htaccess          ← Server configuration (must be uploaded!)
├── .nojekyll          ← GitHub Pages config (must be uploaded!)
├── _next/             ← All JavaScript and CSS files
├── index.html         ← Homepage
├── gallery/           ← Gallery page
├── menu/              ← Menu page
└── [images]           ← All your photos
```

**Make sure ALL of these are uploaded to your server!**

---

## Quick Checklist

Before deploying:
- [ ] Run `npm run build`
- [ ] Test with `npm run serve`
- [ ] Check browser console (no errors)
- [ ] Test mobile menu
- [ ] Test gallery image modal
- [ ] Verify all pages load

After deploying:
- [ ] Check http://bangskitchen.co.za loads
- [ ] Verify JavaScript files load (no 404s)
- [ ] Test on mobile device
- [ ] Clear all caches if styles look wrong

---

## Pro Tips

✅ **Always test locally before deploying** - catch issues early!

✅ **Use `npm run serve` frequently** - it simulates production

✅ **Check hidden files** - `.htaccess` is required for proper routing

✅ **Clear caches** - old cached files can cause confusion

✅ **Test in multiple browsers** - Chrome, Firefox, Safari

---

## Your Site is Ready! 🎉

Once deployed, your site will have:
- ✅ Mobile-responsive design
- ✅ Hamburger menu on mobile
- ✅ Gallery with image modal viewer
- ✅ Fast loading times
- ✅ SEO-optimized pages

Good luck with your deployment!
