# QET Markdown Editor - Web Demo

![QET Logo](assets/logo.png)

**Offline-First Markdown Editor with Zero-Knowledge Encryption**

A professional, feature-rich markdown editor designed for privacy-conscious users who need powerful features without compromising security.

## 🌟 Features

- **Real-time Preview**: See your markdown rendered instantly as you type
- **Export Capabilities**: Generate professional PDF, DOCX, and HTML documents
- **Syntax Highlighting**: Beautiful code highlighting with Highlight.js
- **Local Storage**: Auto-save and persist your documents in browser storage
- **Keyboard Shortcuts**: Efficient editing with Ctrl+B (bold), Ctrl+I (italic), Ctrl+S (save)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Professional Branding**: Consistent QET brand identity throughout
- **Offline-First**: Works without internet connection (after initial load)

## 🚀 Live Demo

Visit the live demo: [https://yourusername.github.io/qet-markdown-editor](https://yourusername.github.io/qet-markdown-editor)

## 📦 What's Included

```
qet-demo/
├── index.html              # Main application page
├── css/
│   └── styles.css          # Complete styling with QET branding
├── js/
│   └── app.js              # Application logic and export functionality
├── assets/
│   ├── logo.png            # QET logo (256x256)
│   ├── favicon.png         # Favicon (64x64)
│   ├── favicon-32.png      # Favicon (32x32)
│   └── favicon-16.png      # Favicon (16x16)
├── docs/
│   └── (documentation files)
├── README.md               # This file
└── LICENSE                 # License information
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Object-oriented application architecture
- **Marked.js**: Markdown parsing and rendering
- **Highlight.js**: Syntax highlighting for code blocks
- **jsPDF**: PDF document generation
- **html-docx-js**: DOCX document generation
- **Font Awesome**: Professional icon set

## 📋 Prerequisites

- A GitHub account
- Git installed on your local machine
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Basic knowledge of Git and command line

## 🚀 Deployment Instructions

### Step 1: Clone or Download This Repository

If you have this as a zip file, extract it. If it's already a git repository, skip to Step 2.

```bash
# Navigate to the directory
cd qet-demo
```

### Step 2: Initialize Git Repository (if not already initialized)

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: QET Markdown Editor demo"
```

### Step 3: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `qet-markdown-editor` (or your preferred name)
5. **Important**: Do NOT initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Step 4: Connect Local Repository to GitHub

```bash
# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/qet-markdown-editor.git

# Verify remote was added
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (top right)
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"
6. Wait 1-2 minutes for deployment
7. Your site will be available at: `https://YOUR_USERNAME.github.io/qet-markdown-editor/`

### Step 6: Verify Deployment

1. Visit your GitHub Pages URL
2. Test all features:
   - Type markdown in the editor
   - Check real-time preview
   - Test export buttons (PDF, DOCX, HTML)
   - Try saving and loading documents
   - Test formatting buttons
   - Check the About modal

### Step 7: Custom Domain (Optional)

If you want to use a custom domain:

1. Purchase a domain from a registrar (GoDaddy, Namecheap, etc.)
2. In your repository settings under "Pages", add your custom domain
3. Configure DNS records at your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```
4. Wait for DNS propagation (can take up to 48 hours)

## 🔧 Customization

### Update Branding

1. **Replace Logo**: Replace files in `assets/` with your own branded icons
2. **Update Colors**: Modify CSS variables in `css/styles.css`:
   ```css
   :root {
       --primary-navy: #1e3a5f;
       --accent-teal: #2a9d8f;
       /* ... other colors ... */
   }
   ```
3. **Update Text**: Modify content in `index.html`

### Add Features

1. Edit `js/app.js` to add new functionality
2. Add new toolbar buttons in `index.html`
3. Style new elements in `css/styles.css`

### Configure Export Options

Modify export functions in `js/app.js`:
- `exportToPDF()`: Customize PDF layout and styling
- `exportToDOCX()`: Adjust DOCX formatting
- `exportToHTML()`: Modify HTML template

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 🔒 Privacy & Security

- **No Server Communication**: All processing happens in your browser
- **Local Storage Only**: Documents are saved in browser's local storage
- **No Analytics**: No tracking or data collection
- **Open Source**: Full transparency of code

## 📝 Usage Guide

### Basic Markdown Syntax

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

[Link text](https://example.com)

- Bullet point
- Another bullet point

1. Numbered list
2. Another item

`inline code`

\`\`\`javascript
// Code block
function hello() {
    console.log('Hello!');
}
\`\`\`

> Blockquote

---
Horizontal rule
```

### Keyboard Shortcuts

- `Ctrl+B` / `Cmd+B`: Bold
- `Ctrl+I` / `Cmd+I`: Italic
- `Ctrl+S` / `Cmd+S`: Save to browser storage

### Export Options

1. **PDF Export**: Creates a formatted PDF document with proper styling
2. **DOCX Export**: Generates a Microsoft Word compatible document
3. **HTML Export**: Creates a standalone HTML file with embedded styles

## 🐛 Troubleshooting

### Issue: GitHub Pages not loading

**Solution**: 
- Wait 2-3 minutes after enabling GitHub Pages
- Check that the repository is public
- Verify the correct branch and folder are selected

### Issue: Export not working

**Solution**:
- Ensure you're using a modern browser
- Check browser console for errors (F12)
- Try a different export format

### Issue: Content not saving

**Solution**:
- Check if browser has local storage enabled
- Verify you're not in incognito/private mode
- Clear browser cache and try again

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Marked.js](https://marked.js.org/) - Markdown parser
- [Highlight.js](https://highlightjs.org/) - Syntax highlighting
- [jsPDF](https://github.com/parallax/jsPDF) - PDF generation
- [html-docx-js](https://github.com/evidenceprime/html-docx-js) - DOCX generation
- [Font Awesome](https://fontawesome.com/) - Icon library

## 📞 Support

For questions, issues, or feature requests:

- **Email**: support@quickeasytech.com
- **Website**: [quickeasytech.com](https://quickeasytech.com)
- **GitHub Issues**: [Create an issue](https://github.com/YOUR_USERNAME/qet-markdown-editor/issues)

## 🗺️ Roadmap

- [ ] Add more export formats (Markdown, Plain Text)
- [ ] Implement cloud sync with encryption
- [ ] Add collaborative editing features
- [ ] Mobile app versions (iOS, Android)
- [ ] Plugin system for extensions
- [ ] Advanced formatting toolbar
- [ ] Template library
- [ ] Dark mode toggle

## 📊 Project Status

**Status**: Active Development  
**Version**: 1.0.0  
**Last Updated**: October 2025

---

**Made with ❤️ by Quick and Easy Tech**

*Empowering users with privacy-first productivity tools*

