# Deploying QET Markdown Editor Demo on GitHub Pages

This guide provides detailed instructions for deploying the QET Markdown Editor web demo on GitHub Pages, making it accessible to prospective buyers worldwide.

## Prerequisites

- A GitHub account
- Basic familiarity with GitHub (creating repositories, uploading files)
- The `qet-markdown-editor-web-demo.zip` file (provided)

## Step 1: Create a New GitHub Repository

1. Log in to your GitHub account at [github.com](https://github.com)
2. Click the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., `qet-markdown-editor-demo`)
4. Add a description (optional): "Interactive demo of the QET Markdown Editor"
5. Choose "Public" visibility (required for GitHub Pages with a free account)
6. Do NOT initialize the repository with a README, .gitignore, or license
7. Click "Create repository"

## Step 2: Upload the Demo Files

### Option A: Using the GitHub Web Interface

1. On your new repository page, click "uploading an existing file" link
2. Extract the contents of `qet-markdown-editor-web-demo.zip` to a folder on your computer
3. Drag and drop all the extracted files into the GitHub upload area
   - Make sure to include: `index.html`, `styles.css`, `script.js`, `logo.png`, `favicon.ico`, and `README.md`
4. Add a commit message: "Initial upload of QET Markdown Editor demo"
5. Click "Commit changes"

### Option B: Using Git Command Line (Alternative)

If you're comfortable with Git:

```bash
# Clone the empty repository
git clone https://github.com/YOUR-USERNAME/qet-markdown-editor-demo.git
cd qet-markdown-editor-demo

# Extract the zip contents to this directory
# (Replace with the actual path to your zip file)
unzip /path/to/qet-markdown-editor-web-demo.zip -d .

# Add, commit, and push the files
git add .
git commit -m "Initial upload of QET Markdown Editor demo"
git push origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (tab near the top of the page)
3. Scroll down to the "GitHub Pages" section (or click "Pages" in the left sidebar)
4. Under "Source", select "main" branch
5. Leave the folder setting as "/ (root)"
6. Click "Save"
7. Wait a few minutes for GitHub to build and deploy your site

## Step 4: Access Your Demo

1. After GitHub Pages is enabled, the section will show a message like:
   "Your site is published at https://YOUR-USERNAME.github.io/qet-markdown-editor-demo/"
2. Click this link to view your deployed demo
3. Verify that all features are working correctly:
   - Editor and preview functionality
   - Feature demo modals
   - Responsive design on different screen sizes

## Step 5: Share with Prospective Buyers

Now that your demo is live, you can share it with potential buyers:

1. Copy the GitHub Pages URL (https://YOUR-USERNAME.github.io/qet-markdown-editor-demo/)
2. Include this URL in:
   - Sales emails
   - Reddit posts
   - LinkedIn messages
   - Other marketing materials

## Customizing the Demo (Optional)

You can make the following customizations to better align with your sales strategy:

### Update Contact Information

1. Edit the `script.js` file in your repository
2. Find the line with `window.open('https://github.com/quickeasytech/markdown-editor#purchase', '_blank');`
3. Replace the URL with your preferred contact method or purchase page

### Add Analytics

1. Edit the `index.html` file
2. Add your Google Analytics or other tracking code before the closing `</body>` tag

### Custom Domain (Optional)

For a more professional appearance:

1. In repository settings, under "GitHub Pages" > "Custom domain"
2. Enter your domain (e.g., `demo.yourcompany.com`)
3. Update your domain's DNS settings as per GitHub's instructions
4. Check "Enforce HTTPS" once your certificate is issued

## Troubleshooting

- **404 Error**: Make sure your repository contains an `index.html` file at the root level
- **Missing Styles/Scripts**: Verify that all file paths in `index.html` are correct (no leading slashes)
- **Images Not Loading**: Check that image paths are relative and correctly referenced

## Maintaining the Demo

- Keep the repository public as long as you want the demo to be accessible
- You can update files directly through GitHub's interface or via Git
- Each update will automatically redeploy the site (usually within minutes)

## Security Considerations

- The demo contains no sensitive information or server-side code
- All functionality is client-side JavaScript
- No actual user data is stored or transmitted

By following these steps, you'll have a professional, accessible demo of the QET Markdown Editor that potential buyers can interact with before making a purchase decision.
