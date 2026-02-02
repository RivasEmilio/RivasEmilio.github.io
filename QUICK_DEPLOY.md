# Quick Deployment Guide

## 🚀 Fastest Way to Deploy

### Step 1: Commit All Changes

```bash
# Add all files (including the new React app)
git add .

# Commit everything
git commit -m "Deploy new React portfolio"

# Push to your repository
git push origin master
```

### Step 2: Enable GitHub Pages

1. Go to: https://github.com/RivasEmilio/RivasEmilio.github.io/settings/pages
2. Under **Source**, select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
3. Click **Save**

### Step 3: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see a workflow running called "Deploy to GitHub Pages"
3. Wait 2-3 minutes for it to complete
4. Once it shows a green checkmark ✅, your site is live!

### Step 4: View Your Site

Your portfolio will be available at:
**https://rivasemilio.github.io/RivasEmilio.github.io/**

---

## 📝 Important Notes

- The workflow automatically runs when you push to `master` or `main` branch
- Your site will auto-update every time you push new changes
- The first deployment might take 3-5 minutes
- Check the Actions tab if something goes wrong

## 🔄 Making Updates

After making changes to your portfolio:

```bash
git add .
git commit -m "Update portfolio content"
git push origin master
```

That's it! GitHub Actions will automatically rebuild and redeploy your site.

## ❓ Troubleshooting

**If the site shows 404:**
- Wait a few more minutes (first deployment can be slow)
- Check the Actions tab for any errors
- Verify GitHub Pages is enabled in Settings > Pages

**If assets/images don't load:**
- Make sure all files in `public/media/` are committed
- Check that paths use `/RivasEmilio.github.io/media/...` format

**If you see a blank page:**
- Open browser console (F12) to check for errors
- Verify the base path in `vite.config.js` matches your repo name
