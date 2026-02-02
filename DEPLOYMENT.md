# Deployment Guide for GitHub Pages

This guide will walk you through deploying your portfolio to GitHub Pages.

## Prerequisites

- Your repository is named `RivasEmilio.github.io` (or update the base path in `vite.config.js`)
- You have Git initialized and connected to your GitHub repository
- You have Node.js and npm installed locally

## Method 1: Automatic Deployment with GitHub Actions (Recommended)

This is the easiest method - your site will automatically deploy whenever you push to the `main` branch.

### Step 1: Push Your Code to GitHub

1. Make sure all your changes are committed:
```bash
git add .
git commit -m "Initial portfolio setup"
```

2. Push to your main branch:
```bash
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/RivasEmilio/RivasEmilio.github.io`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
5. Click **Save**

### Step 3: Verify Deployment

1. The GitHub Actions workflow will automatically:
   - Build your React app
   - Deploy it to the `gh-pages` branch
2. Wait a few minutes for the workflow to complete
3. Check the **Actions** tab in your repository to see the deployment status
4. Your site will be live at: `https://rivasemilio.github.io/RivasEmilio.github.io/`

## Method 2: Manual Deployment

If you prefer to deploy manually:

### Step 1: Build the Project

```bash
npm run build
```

This creates a `dist` folder with your production-ready files.

### Step 2: Deploy to gh-pages Branch

```bash
# Install gh-pages if you haven't already
npm install --save-dev gh-pages

# Add deploy script to package.json (already done)
# Then run:
npm run deploy
```

Or manually:

```bash
# Create a new branch for gh-pages
git checkout --orphan gh-pages
git rm -rf .

# Copy dist contents to root
cp -r dist/* .

# Commit and push
git add .
git commit -m "Deploy portfolio"
git push origin gh-pages --force
```

## Troubleshooting

### Issue: 404 Error or Blank Page

**Solution**: Make sure the `base` path in `vite.config.js` matches your repository name:
```javascript
base: '/RivasEmilio.github.io/',
```

If your repo is just `RivasEmilio.github.io`, you might need:
```javascript
base: '/',
```

### Issue: Assets Not Loading

**Solution**: Check that all media files are in the `public/media/` folder and paths use the `getAssetPath()` utility function.

### Issue: GitHub Actions Failing

**Solution**: 
1. Check the Actions tab for error messages
2. Make sure your `package.json` has all dependencies
3. Verify Node.js version in `.github/workflows/deploy.yml` matches your local version

### Issue: Routes Not Working

**Solution**: GitHub Pages doesn't support client-side routing by default. The current setup uses hash routing which should work. If you need clean URLs, consider using a 404.html redirect (not needed with current setup).

## Updating Your Site

After making changes:

1. **Test locally**:
   ```bash
   npm run dev
   ```

2. **Build and test production build**:
   ```bash
   npm run build
   npm run preview
   ```

3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

4. GitHub Actions will automatically rebuild and redeploy!

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain:
   ```
   yourdomain.com
   ```

2. Update your DNS settings to point to GitHub Pages
3. Update the base path in `vite.config.js` if needed

## Need Help?

- Check GitHub Actions logs in the **Actions** tab
- Verify your repository settings in **Settings > Pages**
- Make sure all files are committed and pushed
