# Push Instructions for Fresh Repository

## Step 1: Add All Files

```bash
git add .
```

## Step 2: Commit Everything

```bash
git commit -m "Initial commit - React portfolio with GitHub Pages deployment"
```

## Step 3: Push to Repository

```bash
git push -u origin master
```

(If you get an error about the branch not existing, use: `git push -u origin master --force`)

## Step 4: Configure GitHub Pages

After pushing, go to:
**https://github.com/RivasEmilio/RivasEmilio.github.io/settings/pages**

1. Under **Source**, select: **GitHub Actions** (NOT "Deploy from a branch")
2. Click **Save**

## Step 5: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see "Deploy to GitHub Pages" workflow running
3. Wait 2-3 minutes for it to complete
4. When you see a green checkmark ✅, your site is live!

## Your Site URL

Once deployed, your site will be at:
**https://rivasemilio.github.io/RivasEmilio.github.io/**

## Troubleshooting

- **If push fails**: Make sure you're authenticated with GitHub
- **If Actions don't run**: Check that GitHub Actions is enabled in repository settings
- **If deployment fails**: Check the Actions tab for error messages
