# Deploying Your Next.js Job Board to GitHub Pages

This guide will walk you through the process of deploying your Next.js job board website to GitHub Pages.

## Prerequisites

- Node.js and npm installed on your local machine
- A GitHub account
- Git installed on your local machine

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click on the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "job-board")
4. Choose whether to make it public or private
5. Click "Create repository"

## Step 2: Prepare Your Next.js Project for GitHub Pages

Your Next.js project has already been configured for GitHub Pages deployment with:

- Static export configuration in `next.config.mjs`
- Custom 404.html page for client-side routing
- Image path utility for correct asset paths

## Step 3: Initialize Git and Push to GitHub

\`\`\`bash
# Initialize Git repository (if not already done)
git init

# Add all files to Git
git add .

# Commit the files
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/your-username/your-repo-name.git

# Push to GitHub
git push -u origin main
\`\`\`

## Step 4: Install the gh-pages Package

The `gh-pages` package is already included in your project's devDependencies. If you need to install it manually:

\`\`\`bash
npm install --save-dev gh-pages
\`\`\`

## Step 5: Update Repository Name in Configuration Files

Before deploying, make sure to update the repository name in the following files:

1. In `next.config.mjs`:
   \`\`\`javascript
   basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
   assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
   \`\`\`

2. In `utils/image-path.ts`:
   \`\`\`typescript
   const basePath = process.env.NODE_ENV === 'production' ? '/your-repo-name' : '';
   \`\`\`

3. In `public/404.html`:
   \`\`\`javascript
   const repoName = 'your-repo-name';
   \`\`\`

Replace `your-repo-name` with your actual GitHub repository name.

## Step 6: Deploy to GitHub Pages

Run the deploy script:

\`\`\`bash
npm run deploy
\`\`\`

This will:
1. Build your Next.js project
2. Generate a static export in the `out` directory
3. Create a `gh-pages` branch in your repository
4. Push the contents of the `out` directory to the `gh-pages` branch

## Step 7: Configure GitHub Pages in Repository Settings

1. Go to your GitHub repository
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. For the source, select the `gh-pages` branch
5. Click "Save"

## Step 8: Access Your Deployed Website

Your website will be available at:
\`\`\`
https://your-username.github.io/your-repo-name/
\`\`\`

It may take a few minutes for the changes to propagate.

## Updating Your Website

Whenever you make changes to your website:

1. Make your changes locally
2. Commit the changes to Git
3. Run `npm run deploy` to deploy the updated website

## Troubleshooting

### 404 Errors on Page Refresh

If you encounter 404 errors when refreshing pages, check that:
- The `404.html` file was deployed correctly
- The repository name is correctly set in all configuration files

### Images Not Loading

If images don't load:
- Check that the `getImagePath` utility is being used for all image paths
- Verify that image files were uploaded to the correct location
- Check the browser console for path-related errors

### GitHub Actions (Optional)

For automated deployments, the GitHub Actions workflow file (`.github/workflows/deploy.yml`) is already set up. Make sure GitHub Actions is enabled in your repository settings.

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export Documentation](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
- [gh-pages npm package](https://www.npmjs.com/package/gh-pages)
\`\`\`

Let's create a simple script to create placeholder image directories:
