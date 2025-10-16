// QET Markdown Editor - Main Application

class QETMarkdownEditor {
    constructor() {
        this.editor = document.getElementById('markdownEditor');
        this.preview = document.getElementById('markdownPreview');
        this.currentDocument = {
            content: '',
            title: 'Untitled Document',
            lastModified: new Date()
        };
        
        this.init();
    }
    
    init() {
        // Configure marked.js
        marked.setOptions({
            highlight: function(code, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    return hljs.highlight(code, { language: lang }).value;
                }
                return hljs.highlightAuto(code).value;
            },
            breaks: true,
            gfm: true
        });
        
        // Initialize event listeners
        this.initEventListeners();
        
        // Initial render
        this.updatePreview();
        
        // Load saved content if exists
        this.loadFromStorage();
    }
    
    initEventListeners() {
        // Editor input
        this.editor.addEventListener('input', () => this.updatePreview());
        
        // Toolbar buttons
        document.getElementById('newBtn').addEventListener('click', () => this.newDocument());
        document.getElementById('saveBtn').addEventListener('click', () => this.saveToStorage());
        document.getElementById('loadBtn').addEventListener('click', () => this.loadFromStorage());
        
        // Formatting buttons
        document.getElementById('boldBtn').addEventListener('click', () => this.insertMarkdown('**', '**'));
        document.getElementById('italicBtn').addEventListener('click', () => this.insertMarkdown('*', '*'));
        document.getElementById('headingBtn').addEventListener('click', () => this.insertMarkdown('## ', ''));
        document.getElementById('linkBtn').addEventListener('click', () => this.insertLink());
        document.getElementById('codeBtn').addEventListener('click', () => this.insertCodeBlock());
        document.getElementById('listBtn').addEventListener('click', () => this.insertMarkdown('- ', ''));
        
        // Export buttons
        document.getElementById('exportPdfBtn').addEventListener('click', () => this.exportToPDF());
        document.getElementById('exportDocxBtn').addEventListener('click', () => this.exportToDOCX());
        document.getElementById('exportHtmlBtn').addEventListener('click', () => this.exportToHTML());
        document.getElementById('exportMdBtn').addEventListener('click', () => this.exportToMarkdown());
        
        // Preview toggle
        document.getElementById('previewToggle').addEventListener('click', () => this.togglePreview());
        
        // Modal
        document.getElementById('aboutBtn').addEventListener('click', () => this.showModal());
        document.getElementById('closeModal').addEventListener('click', () => this.hideModal());
        
        // Keyboard shortcuts
        this.editor.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
        
        // Auto-save every 30 seconds
        setInterval(() => this.autoSave(), 30000);
    }
    
    updatePreview() {
        const markdown = this.editor.value;
        this.currentDocument.content = markdown;
        this.currentDocument.lastModified = new Date();
        
        try {
            const html = marked.parse(markdown);
            this.preview.innerHTML = html;
            
            // Re-highlight code blocks
            this.preview.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightElement(block);
            });
        } catch (error) {
            console.error('Markdown parsing error:', error);
            this.preview.innerHTML = '<p style="color: red;">Error parsing markdown</p>';
        }
    }
    
    insertMarkdown(before, after) {
        const start = this.editor.selectionStart;
        const end = this.editor.selectionEnd;
        const selectedText = this.editor.value.substring(start, end);
        const newText = before + selectedText + after;
        
        this.editor.setRangeText(newText, start, end, 'select');
        this.editor.focus();
        this.updatePreview();
    }
    
    insertLink() {
        const url = prompt('Enter URL:', 'https://');
        if (url) {
            const text = prompt('Enter link text:', 'Link');
            if (text) {
                this.insertMarkdown(`[${text}](${url})`, '');
            }
        }
    }
    
    insertCodeBlock() {
        const lang = prompt('Enter language (optional):', 'javascript');
        this.insertMarkdown(`\n\`\`\`${lang}\n`, '\n\`\`\`\n');
    }
    
    handleKeyboardShortcuts(e) {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 'b':
                    e.preventDefault();
                    this.insertMarkdown('**', '**');
                    break;
                case 'i':
                    e.preventDefault();
                    this.insertMarkdown('*', '*');
                    break;
                case 's':
                    e.preventDefault();
                    this.saveToStorage();
                    break;
            }
        }
    }
    
    newDocument() {
        if (confirm('Create a new document? Any unsaved changes will be lost.')) {
            this.editor.value = '';
            this.currentDocument = {
                content: '',
                title: 'Untitled Document',
                lastModified: new Date()
            };
            this.updatePreview();
        }
    }
    
    saveToStorage() {
        try {
            localStorage.setItem('qet_document', JSON.stringify(this.currentDocument));
            this.showNotification('Document saved successfully!', 'success');
        } catch (error) {
            console.error('Save error:', error);
            this.showNotification('Error saving document', 'error');
        }
    }
    
    loadFromStorage() {
        try {
            const saved = localStorage.getItem('qet_document');
            if (saved) {
                this.currentDocument = JSON.parse(saved);
                this.editor.value = this.currentDocument.content;
                this.updatePreview();
                this.showNotification('Document loaded successfully!', 'success');
            } else {
                this.showNotification('No saved document found', 'info');
            }
        } catch (error) {
            console.error('Load error:', error);
            this.showNotification('Error loading document', 'error');
        }
    }
    
    autoSave() {
        if (this.currentDocument.content.trim()) {
            this.saveToStorage();
        }
    }
    
    togglePreview() {
        const previewPane = document.getElementById('previewPane');
        const editorPane = document.getElementById('editorPane');
        
        if (previewPane.style.display === 'none') {
            previewPane.style.display = 'block';
            editorPane.style.flex = '1';
        } else {
            previewPane.style.display = 'none';
            editorPane.style.flex = '1';
        }
    }
    
    showModal() {
        document.getElementById('aboutModal').classList.add('active');
    }
    
    hideModal() {
        document.getElementById('aboutModal').classList.remove('active');
    }
    
    showLoading(text = 'Processing...') {
        const overlay = document.getElementById('loadingOverlay');
        const loadingText = overlay.querySelector('.loading-text');
        loadingText.textContent = text;
        overlay.classList.add('active');
    }
    
    hideLoading() {
        document.getElementById('loadingOverlay').classList.remove('active');
    }
    
    showNotification(message, type = 'info') {
        // Simple alert for now - can be enhanced with toast notifications
        const icons = {
            success: '✓',
            error: '✗',
            info: 'ℹ'
        };
        alert(`${icons[type]} ${message}`);
    }
    
    // Export Functions
    
    async exportToPDF() {
        this.showLoading('Generating PDF...');
        
        try {
            // Get the HTML content
            const htmlContent = this.preview.innerHTML;
            
            // Use jsPDF
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });
            
            // Add header
            doc.setFontSize(10);
            doc.setTextColor(108, 117, 125);
            doc.text('QET Markdown Editor', 15, 10);
            doc.text(new Date().toLocaleDateString(), 195, 10, { align: 'right' });
            
            // Add content
            doc.setFontSize(12);
            doc.setTextColor(44, 62, 80);
            
            // Split content into lines and pages
            const content = this.editor.value;
            const lines = doc.splitTextToSize(content, 180);
            let y = 20;
            
            lines.forEach((line, index) => {
                if (y > 280) {
                    doc.addPage();
                    y = 20;
                }
                doc.text(line, 15, y);
                y += 7;
            });
            
            // Save the PDF
            const filename = `${this.currentDocument.title.replace(/[^a-z0-9]/gi, '_')}_${Date.now()}.pdf`;
            doc.save(filename);
            
            this.hideLoading();
            this.showNotification('PDF exported successfully!', 'success');
        } catch (error) {
            console.error('PDF export error:', error);
            this.hideLoading();
            this.showNotification('Error exporting PDF: ' + error.message, 'error');
        }
    }
    
    async exportToDOCX() {
        this.showLoading('Generating DOCX...');
        
        try {
            // Create RTF content (which Word can open)
            const content = this.editor.value;
            const htmlContent = this.preview.innerHTML;
            
            // Convert HTML to RTF-compatible format
            const rtfContent = this.convertHtmlToRtf(htmlContent);
            
            // Create blob and download
            const blob = new Blob([rtfContent], { type: 'application/rtf' });
            const filename = `${this.currentDocument.title.replace(/[^a-z0-9]/gi, '_')}_${Date.now()}.rtf`;
            
            // Use FileSaver.js if available, otherwise fallback
            if (typeof saveAs !== 'undefined') {
                saveAs(blob, filename);
            } else {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = filename;
                link.click();
                URL.revokeObjectURL(url);
            }
            
            this.hideLoading();
            this.showNotification('Document exported successfully! (RTF format - compatible with Word)', 'success');
        } catch (error) {
            console.error('DOCX export error:', error);
            this.hideLoading();
            this.showNotification('Error exporting document: ' + error.message, 'error');
        }
    }
    
    convertHtmlToRtf(html) {
        // Simple HTML to RTF converter
        let rtf = '{\\rtf1\\ansi\\deff0\n';
        rtf += '{\\fonttbl{\\f0 Arial;}{\\f1 Courier New;}}\n';
        rtf += '{\\colortbl;\\red30\\green58\\blue95;\\red42\\green157\\blue143;\\red44\\green62\\blue80;}\n';
        
        // Remove HTML tags and convert to RTF
        let text = html;
        
        // Convert headings
        text = text.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '\\par\\b\\fs32\\cf1 $1\\b0\\fs24\\cf3\\par\n');
        text = text.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '\\par\\b\\fs28\\cf1 $1\\b0\\fs24\\cf3\\par\n');
        text = text.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '\\par\\b\\fs24\\cf1 $1\\b0\\fs24\\cf3\\par\n');
        
        // Convert formatting
        text = text.replace(/<strong[^>]*>(.*?)<\/strong>/gi, '\\b $1\\b0');
        text = text.replace(/<b[^>]*>(.*?)<\/b>/gi, '\\b $1\\b0');
        text = text.replace(/<em[^>]*>(.*?)<\/em>/gi, '\\i $1\\i0');
        text = text.replace(/<i[^>]*>(.*?)<\/i>/gi, '\\i $1\\i0');
        
        // Convert links
        text = text.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '\\cf2\\ul $2\\ul0\\cf3 ($1)');
        
        // Convert code
        text = text.replace(/<code[^>]*>(.*?)<\/code>/gi, '\\f1 $1\\f0');
        text = text.replace(/<pre[^>]*>(.*?)<\/pre>/gi, '\\par\\f1\\fs20 $1\\f0\\fs24\\par\n');
        
        // Convert paragraphs
        text = text.replace(/<p[^>]*>(.*?)<\/p>/gi, '\\par $1\\par\n');
        
        // Convert lists
        text = text.replace(/<li[^>]*>(.*?)<\/li>/gi, '\\par\\bullet  $1\\par\n');
        text = text.replace(/<ul[^>]*>/gi, '');
        text = text.replace(/<\/ul>/gi, '\\par\n');
        text = text.replace(/<ol[^>]*>/gi, '');
        text = text.replace(/<\/ol>/gi, '\\par\n');
        
        // Convert line breaks
        text = text.replace(/<br\s*\/?>/gi, '\\par\n');
        text = text.replace(/<hr\s*\/?>/gi, '\\par\\brdrb\\brdrs\\par\n');
        
        // Remove remaining HTML tags
        text = text.replace(/<[^>]+>/g, '');
        
        // Decode HTML entities
        text = text.replace(/&nbsp;/g, ' ');
        text = text.replace(/&lt;/g, '<');
        text = text.replace(/&gt;/g, '>');
        text = text.replace(/&amp;/g, '&');
        text = text.replace(/&quot;/g, '"');
        
        rtf += '\\cf3\\fs24\n';
        rtf += text;
        rtf += '\n}';
        
        return rtf;
    }
    
    async exportToHTML() {
        this.showLoading('Generating HTML...');
        
        try {
            // Create complete HTML document
            const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${this.currentDocument.title}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
            line-height: 1.6;
            color: #2c3e50;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            background: #ffffff;
        }
        h1, h2, h3, h4, h5, h6 {
            color: #1e3a5f;
            margin-top: 1.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
            line-height: 1.3;
        }
        h1 {
            font-size: 2.25rem;
            border-bottom: 2px solid #2a9d8f;
            padding-bottom: 0.5rem;
        }
        h2 {
            font-size: 1.875rem;
            border-bottom: 1px solid #dee2e6;
            padding-bottom: 0.375rem;
        }
        h3 { font-size: 1.5rem; }
        h4 { font-size: 1.25rem; }
        p {
            margin-bottom: 1rem;
            line-height: 1.8;
        }
        a {
            color: #2a9d8f;
            text-decoration: none;
            font-weight: 500;
        }
        a:hover {
            text-decoration: underline;
        }
        ul, ol {
            margin-bottom: 1rem;
            padding-left: 2rem;
        }
        li {
            margin-bottom: 0.5rem;
        }
        code {
            background: #f8f9fa;
            padding: 0.125rem 0.375rem;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            font-size: 0.875em;
            color: #e83e8c;
        }
        pre {
            background: #2d2d2d;
            padding: 1.25rem;
            border-radius: 6px;
            overflow-x: auto;
            margin-bottom: 1rem;
        }
        pre code {
            background: transparent;
            padding: 0;
            color: #f8f8f2;
            font-size: 0.9375rem;
        }
        blockquote {
            border-left: 4px solid #2a9d8f;
            padding-left: 1.25rem;
            margin: 1.5rem 0;
            color: #6c757d;
            font-style: italic;
        }
        hr {
            border: none;
            border-top: 2px solid #dee2e6;
            margin: 2rem 0;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 1rem;
        }
        table th, table td {
            border: 1px solid #dee2e6;
            padding: 0.75rem;
            text-align: left;
        }
        table th {
            background: #1e3a5f;
            color: white;
            font-weight: 600;
        }
        table tr:nth-child(even) {
            background: #f8f9fa;
        }
        img {
            max-width: 100%;
            height: auto;
            border-radius: 6px;
            margin: 1rem 0;
        }
        .document-header {
            text-align: center;
            padding: 2rem 0;
            border-bottom: 2px solid #2a9d8f;
            margin-bottom: 2rem;
        }
        .document-title {
            font-size: 2.5rem;
            color: #1e3a5f;
            margin-bottom: 0.5rem;
        }
        .document-meta {
            color: #6c757d;
            font-size: 0.875rem;
        }
        .document-footer {
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid #dee2e6;
            text-align: center;
            color: #6c757d;
            font-size: 0.875rem;
        }
    </style>
</head>
<body>
    <div class="document-header">
        <h1 class="document-title">${this.currentDocument.title}</h1>
        <div class="document-meta">
            Generated by QET Markdown Editor | ${new Date().toLocaleDateString()}
        </div>
    </div>
    
    <div class="document-content">
        ${this.preview.innerHTML}
    </div>
    
    <div class="document-footer">
        <p>Created with <strong>QET Markdown Editor</strong> - Offline-First Markdown Editor with Zero-Knowledge Encryption</p>
        <p><a href="https://quickeasytech.com" target="_blank">quickeasytech.com</a></p>
    </div>
</body>
</html>`;
            
            // Create blob and download
            const blob = new Blob([htmlContent], { type: 'text/html' });
            const filename = `${this.currentDocument.title.replace(/[^a-z0-9]/gi, '_')}_${Date.now()}.html`;
            
            // Use FileSaver.js if available, otherwise fallback
            if (typeof saveAs !== 'undefined') {
                saveAs(blob, filename);
            } else {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = filename;
                link.click();
                URL.revokeObjectURL(url);
            }
            
            this.hideLoading();
            this.showNotification('HTML exported successfully!', 'success');
        } catch (error) {
            console.error('HTML export error:', error);
            this.hideLoading();
            this.showNotification('Error exporting HTML: ' + error.message, 'error');
        }
    }
    
    async exportToMarkdown() {
        this.showLoading('Generating Markdown...');
        
        try {
            const content = this.editor.value;
            
            // Create blob and download
            const blob = new Blob([content], { type: 'text/markdown' });
            const filename = `${this.currentDocument.title.replace(/[^a-z0-9]/gi, '_')}_${Date.now()}.md`;
            
            // Use FileSaver.js if available, otherwise fallback
            if (typeof saveAs !== 'undefined') {
                saveAs(blob, filename);
            } else {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = filename;
                link.click();
                URL.revokeObjectURL(url);
            }
            
            this.hideLoading();
            this.showNotification('Markdown exported successfully!', 'success');
        } catch (error) {
            console.error('Markdown export error:', error);
            this.hideLoading();
            this.showNotification('Error exporting Markdown: ' + error.message, 'error');
        }
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.qetEditor = new QETMarkdownEditor();
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('aboutModal');
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

