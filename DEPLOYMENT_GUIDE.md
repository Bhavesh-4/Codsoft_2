# Deploying Your Next.js Job Board to 000webhost

This guide will walk you through the process of deploying your Next.js job board website to 000webhost, a free hosting service.

## Prerequisites

- Node.js and npm installed on your local machine
- A 000webhost account (sign up at [000webhost.com](https://www.000webhost.com/))

## Step 1: Prepare Your Next.js Project for Static Export

Next.js needs to be configured for static export to work on 000webhost:

1. The `next.config.mjs` file has been updated to include:
   \`\`\`javascript
   output: 'export',
   images: {
     unoptimized: true,
   },
   \`\`\`

2. All dynamic routes have been pre-rendered or handled appropriately for static export.

3. Server-side functionality has been adapted to work in a static context.

## Step 2: Build Your Project

Run the export script which builds the project and prepares it for 000webhost:

\`\`\`bash
npm run export
\`\`\`

This will:
- Build your Next.js project
- Generate a static export in the `out` directory
- Create a `.htaccess` file for proper routing on 000webhost
- Generate deployment instructions

## Step 3: Create a Website on 000webhost

1. Log in to your 000webhost account
2. Click on "Create Website"
3. Choose a name and password for your website
4. Wait for the website to be created

## Step 4: Upload Your Files

1. In your 000webhost dashboard, go to your website and click on "File Manager"
2. Navigate to the `public_html` directory
3. Delete any existing files (like the default `index.php`)
4. Upload all files from your local `out` directory to the `public_html` directory
   - You can upload files by clicking "Upload Files" or by dragging and dropping
   - Make sure to include the `.htaccess` file (you may need to enable showing hidden files in your file manager)

## Step 5: Verify Your Deployment

1. Visit your website at `yoursitename.000webhostapp.com`
2. Test navigation to ensure all routes work correctly
3. Verify that images and other assets load properly

## Troubleshooting

### 404 Errors on Page Refresh

If you encounter 404 errors when refreshing pages, check that:
- The `.htaccess` file was uploaded correctly
- The `.htaccess` file has the correct content (see the one generated in your `out` directory)

### Images Not Loading

If images don't load:
- Verify that image paths are correct
- Check that image files were uploaded to the correct location
- Ensure image formats are supported (JPEG, PNG, GIF, WebP)

### Slow Performance

To improve performance:
- Optimize images further using tools like [TinyPNG](https://tinypng.com/)
- Consider using a CDN for assets
- Minimize JavaScript and CSS files

### 000webhost Limitations

Be aware of 000webhost free tier limitations:
- 1.5GB storage
- 100GB bandwidth per month
- No custom domains on free tier
- Limited PHP and database features (though not needed for this static export)

## Maintenance

To update your website:
1. Make changes to your Next.js project
2. Run `npm run export` again
3. Upload the new files to 000webhost, replacing the old ones

## Additional Resources

- [000webhost Documentation](https://www.000webhost.com/website-faq)
- [Next.js Static Export Documentation](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
