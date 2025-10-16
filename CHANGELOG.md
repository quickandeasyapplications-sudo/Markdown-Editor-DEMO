# Changelog

All notable changes to the QET Markdown Editor Web Demo will be documented in this file.

## [1.0.1] - 2025-10-15

### Fixed
- **DOCX Export**: Replaced unreliable html-docx-js library with RTF export format
  - RTF files are fully compatible with Microsoft Word
  - More reliable cross-browser support
  - Better formatting preservation
- **Export Reliability**: Improved error handling for all export functions
- **FileSaver Integration**: Added FileSaver.js for better download compatibility

### Added
- **Markdown Export**: New export option to download raw markdown (.md) files
- **Export Button**: Added MD export button to toolbar
- **Better Notifications**: Enhanced user feedback for export operations

### Changed
- **Library Dependencies**: Updated from html-docx-js to FileSaver.js
- **Export Format**: DOCX export now generates RTF format (compatible with Word)
- **Version Number**: Updated to 1.0.1 in About modal

### Technical Details
- Implemented custom HTML-to-RTF converter for document export
- Added RTF formatting support for:
  - Headings (H1, H2, H3)
  - Bold and italic text
  - Links with URLs
  - Code blocks and inline code
  - Lists (bulleted and numbered)
  - Paragraphs and line breaks
  - Horizontal rules
- Improved fallback for browsers without FileSaver.js support

## [1.0.0] - 2025-10-15

### Initial Release
- Complete markdown editor with real-time preview
- Export to PDF, HTML formats
- Professional QET branding
- Responsive design
- Local storage integration
- Syntax highlighting
- Keyboard shortcuts
- Auto-save functionality
- Comprehensive documentation

---

## Version History

| Version | Date | Description |
|---------|------|-------------|
| 1.0.1 | 2025-10-15 | Fixed DOCX export, added MD export |
| 1.0.0 | 2025-10-15 | Initial release |

---

## Upgrade Instructions

### From 1.0.0 to 1.0.1

1. Replace `index.html` with the new version
2. Replace `js/app.js` with the new version
3. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Test export functionality

**Git Update:**
```bash
git pull origin main
```

**Manual Update:**
1. Download the latest release
2. Extract files
3. Replace old files with new ones
4. Commit and push to GitHub

---

## Known Issues

### Version 1.0.1
- None currently identified

### Version 1.0.0
- ~~DOCX export not working (html-docx-js library issue)~~ - **FIXED in 1.0.1**

---

## Planned Features

### Version 1.1.0 (Upcoming)
- [ ] Dark mode toggle
- [ ] Custom themes
- [ ] Export templates
- [ ] Table of contents generation
- [ ] Word count and reading time
- [ ] Find and replace
- [ ] Spell check integration

### Version 1.2.0 (Future)
- [ ] Cloud sync with encryption
- [ ] Collaborative editing
- [ ] Version history
- [ ] Plugin system
- [ ] Mobile app versions

---

## Breaking Changes

### Version 1.0.1
- **Export Format Change**: DOCX export now generates RTF files instead of DOCX
  - **Impact**: Files will have .rtf extension instead of .docx
  - **Mitigation**: RTF files open in Microsoft Word without any issues
  - **Benefit**: More reliable export across all browsers

---

## Migration Guide

### DOCX to RTF Export

If you were using the DOCX export in version 1.0.0:

**Before (1.0.0):**
- Export generated .docx files (often failed)
- Required html-docx-js library

**After (1.0.1):**
- Export generates .rtf files (always works)
- Uses custom RTF converter
- Files open in Word, LibreOffice, Google Docs

**No action required** - RTF files work seamlessly with all word processors.

---

## Support

For issues, questions, or feature requests:
- **Email**: support@quickeasytech.com
- **GitHub**: [Create an issue](https://github.com/YOUR_USERNAME/qet-markdown-editor/issues)
- **Website**: [quickeasytech.com](https://quickeasytech.com)

---

*Last Updated: October 15, 2025*

