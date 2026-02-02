# Quick Fix Checklist

## ⚠️ Most Common Issue: GitHub Pages Source is Wrong

**Go to this URL RIGHT NOW:**
https://github.com/RivasEmilio/RivasEmilio.github.io/settings/pages

**What do you see under "Source"?**

### If it says "Deploy from a branch" or shows a branch name:
❌ **THIS IS THE PROBLEM!**

**Fix it:**
1. Click the dropdown under "Source"
2. Select **"GitHub Actions"**
3. Click **Save**
4. Wait 2 minutes
5. Refresh your site

### If it says "GitHub Actions" with a workflow name:
✅ This is correct, but check the next steps

## Check These:

1. **Actions Tab**: https://github.com/RivasEmilio/RivasEmilio.github.io/actions
   - Is there a workflow run?
   - Did it complete successfully (green ✅)?
   - If red ❌, click it and check the error

2. **What URL are you visiting?**
   - If repo name = `RivasEmilio.github.io`: Visit `https://rivasemilio.github.io/`
   - If different name: Visit `https://rivasemilio.github.io/RivasEmilio.github.io/`

3. **Browser Console (F12)**:
   - What exact error message do you see?
   - In Network tab, what files are being requested?

## If GitHub Pages Source is Correct but Still Not Working:

The issue might be the base path. If your repository is named exactly `RivasEmilio.github.io`, you need to change the base path to `/`.

Run these commands:

```bash
# Update vite.config.js base path
# Change: base: '/RivasEmilio.github.io/'
# To: base: '/'

# Update src/App.jsx
# Change: const basename = import.meta.env.BASE_URL || '/RivasEmilio.github.io/'
# To: const basename = import.meta.env.BASE_URL || '/'

# Then rebuild and push
npm run build
git add .
git commit -m "Fix base path for root domain"
git push origin master
```

## Still Not Working?

Tell me:
1. What does Settings > Pages show for "Source"?
2. What URL are you visiting?
3. What error appears in browser console (F12)?
4. What does the Actions tab show?
