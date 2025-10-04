// QET Markdown Editor Demo - Script

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the editor with welcome content
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');
    
    // Sample welcome content
    const welcomeContent = `# Welcome to QET Markdown Editor

## The Revolutionary Offline-First Markdown Editor

QET Markdown Editor is designed for **privacy-conscious** professionals who need a powerful, secure, and flexible writing environment.

### Key Features

- **Zero-Knowledge Encryption** - Your data never leaves your device unprotected
- **Blazing-Fast Performance** - Sub-second search across 100,000+ documents
- **AI-Powered Assistance** - Smart summarization and grammar enhancement
- **Multi-Platform Support** - Web, Desktop, and CLI versions available

### Try It Out!

This is a limited demo version. Edit this text to see the live preview in action!

#### Code Example

\`\`\`javascript
// Sample code block
function greet(name) {
    return \`Hello, \${name}! Welcome to QET Markdown Editor.\`;
}

console.log(greet('User'));
\`\`\`

#### Table Example

| Feature | Free Version | Premium Version |
|---------|-------------|----------------|
| Basic Editing | ✅ | ✅ |
| Offline Access | ✅ | ✅ |
| Zero-Knowledge Encryption | Limited | ✅ |
| AI Features | Demo Only | ✅ |
| Advanced Sync | ❌ | ✅ |
| Priority Support | ❌ | ✅ |

> This is a blockquote. QET Markdown Editor supports all standard Markdown syntax plus many extensions.

![QET Logo](logo.png)

---

*This is a demo version with limited functionality. Purchase the full version to unlock all features.*
`;

    editor.value = welcomeContent;
    
    // Initialize marked with options
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
    
    // Function to update preview
    function updatePreview() {
        preview.innerHTML = marked.parse(editor.value);
    }
    
    // Initial preview update
    updatePreview();
    
    // Update preview on input
    editor.addEventListener('input', updatePreview);
    
    // Toolbar button functionality
    document.getElementById('boldBtn').addEventListener('click', function() {
        insertText('**', '**', 'Bold text');
    });
    
    document.getElementById('italicBtn').addEventListener('click', function() {
        insertText('*', '*', 'Italic text');
    });
    
    document.getElementById('linkBtn').addEventListener('click', function() {
        insertText('[', '](https://example.com)', 'Link text');
    });
    
    document.getElementById('imageBtn').addEventListener('click', function() {
        insertText('![', '](image-url.jpg)', 'Image alt text');
    });
    
    // Function to insert text at cursor position
    function insertText(before, after, defaultText) {
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        const selectedText = editor.value.substring(start, end);
        const text = selectedText || defaultText;
        
        editor.value = editor.value.substring(0, start) + before + text + after + editor.value.substring(end);
        editor.focus();
        
        if (selectedText) {
            editor.selectionStart = start + before.length;
            editor.selectionEnd = start + before.length + selectedText.length;
        } else {
            editor.selectionStart = start + before.length;
            editor.selectionEnd = start + before.length + defaultText.length;
        }
        
        updatePreview();
    }
    
    // Feature demo buttons
    document.getElementById('aiFeatures').addEventListener('click', function() {
        showFeatureDemo(
            'AI-Powered Features',
            `<div class="p-3">
                <h4>Smart Summarization</h4>
                <p>QET Markdown Editor uses advanced AI to automatically generate summaries of your documents.</p>
                
                <div class="card mb-4">
                    <div class="card-header">Demo: Smart Summarization</div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label class="form-label">Summary Type</label>
                            <select class="form-select">
                                <option>Brief (1-2 sentences)</option>
                                <option>Comprehensive (paragraph)</option>
                                <option>Bullet Points</option>
                                <option>Key Insights</option>
                            </select>
                        </div>
                        
                        <button class="btn btn-primary mb-3" disabled>Generate Summary</button>
                        
                        <div class="alert alert-info">
                            <strong>Demo Limitation:</strong> This feature requires the full version. In the complete application, the AI would analyze your document and generate a summary based on your selection.
                        </div>
                    </div>
                </div>
                
                <h4>Grammar Enhancement</h4>
                <p>Improve your writing with AI-powered grammar, spelling, and style suggestions.</p>
                
                <div class="card">
                    <div class="card-header">Demo: Grammar Enhancement</div>
                    <div class="card-body">
                        <div class="mb-3">
                            <textarea class="form-control" rows="3" disabled>This sentance has a speling error and it's grammar is not good.</textarea>
                        </div>
                        
                        <button class="btn btn-primary mb-3" disabled>Check Grammar</button>
                        
                        <div class="alert alert-info">
                            <strong>Demo Limitation:</strong> This feature requires the full version. In the complete application, the AI would identify and suggest corrections for grammar, spelling, and style issues.
                        </div>
                    </div>
                </div>
            </div>`,
            'https://github.com/quickeasytech/markdown-editor#ai-features'
        );
    });
    
    document.getElementById('syncDemo').addEventListener('click', function() {
        showFeatureDemo(
            'Advanced Sync Engine',
            `<div class="p-3">
                <h4>Multi-Provider Sync</h4>
                <p>Synchronize your documents across multiple devices using your preferred cloud storage provider.</p>
                
                <div class="card mb-4">
                    <div class="card-header">Demo: Cloud Provider Integration</div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label class="form-label">Select Cloud Provider</label>
                            <select class="form-select" disabled>
                                <option>Dropbox</option>
                                <option>Google Drive</option>
                                <option>OneDrive</option>
                                <option>Custom WebDAV</option>
                            </select>
                        </div>
                        
                        <button class="btn btn-primary mb-3" disabled>Connect Account</button>
                        
                        <div class="alert alert-info">
                            <strong>Demo Limitation:</strong> This feature requires the full version. In the complete application, you would be able to connect to your cloud storage accounts and sync your documents.
                        </div>
                    </div>
                </div>
                
                <h4>AI-Powered Conflict Resolution</h4>
                <p>Intelligently resolve conflicts when the same document is edited on multiple devices.</p>
                
                <div class="card">
                    <div class="card-header">Demo: Conflict Resolution</div>
                    <div class="card-body">
                        <div class="mb-3">
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="form-label">Local Version</label>
                                    <textarea class="form-control" rows="3" disabled>This is the version of the document that was edited on this device.</textarea>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Remote Version</label>
                                    <textarea class="form-control" rows="3" disabled>This is the version of the document that was edited on another device.</textarea>
                                </div>
                            </div>
                        </div>
                        
                        <button class="btn btn-primary mb-3" disabled>Resolve Conflict</button>
                        
                        <div class="alert alert-info">
                            <strong>Demo Limitation:</strong> This feature requires the full version. In the complete application, the AI would analyze both versions and suggest a merged document that preserves all changes.
                        </div>
                    </div>
                </div>
            </div>`,
            'https://github.com/quickeasytech/markdown-editor#sync-engine'
        );
    });
    
    document.getElementById('securityDemo').addEventListener('click', function() {
        showFeatureDemo(
            'Zero-Knowledge Security',
            `<div class="p-3">
                <h4>Client-Side Encryption</h4>
                <p>All your documents are encrypted using AES-256-GCM before they leave your device.</p>
                
                <div class="card mb-4">
                    <div class="card-header">Demo: Encryption Settings</div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label class="form-label">Encryption Algorithm</label>
                            <select class="form-select" disabled>
                                <option>AES-256-GCM (Recommended)</option>
                                <option>AES-128-GCM</option>
                                <option>ChaCha20-Poly1305</option>
                            </select>
                        </div>
                        
                        <div class="mb-3">
                            <label class="form-label">Master Password</label>
                            <input type="password" class="form-control" value="••••••••••••" disabled>
                            <div class="form-text">This password is used to encrypt your encryption keys. It is never sent to our servers.</div>
                        </div>
                        
                        <button class="btn btn-primary mb-3" disabled>Update Security Settings</button>
                        
                        <div class="alert alert-info">
                            <strong>Demo Limitation:</strong> This feature requires the full version. In the complete application, you would have full control over your encryption settings and keys.
                        </div>
                    </div>
                </div>
                
                <h4>Key Management</h4>
                <p>Your encryption keys are generated and managed locally on your device.</p>
                
                <div class="card">
                    <div class="card-header">Demo: Key Management</div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label class="form-label">Key Backup Options</label>
                            <select class="form-select" disabled>
                                <option>Export Encrypted Key Backup</option>
                                <option>Print Recovery Sheet</option>
                                <option>Generate Recovery Phrase</option>
                            </select>
                        </div>
                        
                        <button class="btn btn-primary mb-3" disabled>Manage Keys</button>
                        
                        <div class="alert alert-info">
                            <strong>Demo Limitation:</strong> This feature requires the full version. In the complete application, you would be able to backup and restore your encryption keys securely.
                        </div>
                    </div>
                </div>
            </div>`,
            'https://github.com/quickeasytech/markdown-editor#security'
        );
    });
    
    // Function to show feature demo modal
    function showFeatureDemo(title, content, learnMoreUrl) {
        const modal = new bootstrap.Modal(document.getElementById('featureModal'));
        document.getElementById('featureModalTitle').textContent = title;
        document.getElementById('featureModalBody').innerHTML = content;
        document.getElementById('learnMoreBtn').href = learnMoreUrl;
        modal.show();
    }
    
    // Document list functionality
    const documentList = document.getElementById('documentList').querySelectorAll('button');
    documentList.forEach(function(doc) {
        doc.addEventListener('click', function() {
            documentList.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
            
            // Load different content based on the selected document
            if (this.textContent === 'Welcome.md') {
                editor.value = welcomeContent;
            } else if (this.textContent === 'Features.md') {
                editor.value = `# QET Markdown Editor Features

## Core Features

### Markdown Editing
- Full CommonMark and GitHub Flavored Markdown support
- Syntax highlighting for code blocks
- Math equations with KaTeX
- Diagrams with Mermaid
- Tables, task lists, and footnotes

### Performance
- Sub-second search across 100,000+ documents
- Instant preview updates via incremental parsing
- Efficient background processing using Web Workers
- Intelligent caching with LRU and smart invalidation

### Security
- Zero-knowledge architecture (server never sees unencrypted data)
- AES-256-GCM encryption for all stored content
- Client-side key generation and management
- Optional password protection for individual documents

## Premium Features

### AI-Powered Enhancements
- Smart Summarization (brief, comprehensive, bullet points, key insights)
- Grammar Enhancement (grammar, spelling, style, clarity)
- Content Analysis (reading time, keyword extraction)
- AI-powered conflict resolution for sync

### Advanced Sync Engine
- Real-time synchronization across devices
- Multi-provider support (Dropbox, Google Drive, OneDrive)
- Conflict resolution with version history
- Bandwidth optimization and delta sync

### Collaboration
- Shared workspaces for teams
- Comments and annotations
- Change tracking and version history
- Access control and permissions

### Enterprise Features
- Single Sign-On (SSO) integration
- Admin controls and user management
- Audit logs for compliance
- Custom branding options`;
                
            } else if (this.textContent === 'Pricing.md') {
                editor.value = `# QET Markdown Editor Pricing

## Free Tier

- Core markdown editing functionality
- Offline access and local storage
- Basic synchronization with one cloud provider
- Limited access to AI-powered features
- Standard export options (Markdown, HTML)

## Premium Tier - $4.99/month or $49.99/year

- Unlimited access to AI-powered Smart Summarization and Grammar Enhancement
- Advanced Sync Engine with real-time synchronization
- Multi-provider support (Dropbox, Google Drive, OneDrive)
- AI-powered conflict resolution
- Version history and point-in-time recovery
- Priority customer support
- Access to premium plugin marketplace features
- Advanced export options (PDF, DOCX, etc.)

## Enterprise Solution - Custom Pricing

- All Premium Tier features
- Single Sign-On (SSO) integration
- Admin controls for user management and access policies
- Audit logs for compliance and security monitoring
- Team collaboration features (real-time collaborative editing)
- Dedicated account manager and 24/7 priority support
- White-label solutions and custom branding options

## Lifetime License - $199 (Limited Time Offer)

- One-time payment for lifetime access
- All Premium Tier features
- Free updates for life
- Priority support
- Early access to new features

*Contact us for enterprise pricing and custom solutions.*`;
            }
            
            updatePreview();
        });
    });
    
    // Save, New, and Download button functionality (demo only)
    document.getElementById('saveBtn').addEventListener('click', function() {
        alert('Document saved! (Demo functionality)');
    });
    
    document.getElementById('newBtn').addEventListener('click', function() {
        if (confirm('Create a new document? Any unsaved changes will be lost.')) {
            editor.value = '# New Document\n\nStart writing here...';
            updatePreview();
        }
    });
    
    document.getElementById('downloadBtn').addEventListener('click', function() {
        const blob = new Blob([editor.value], {type: 'text/markdown'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'document.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
    
    // Purchase button functionality
    document.getElementById('purchaseBtn').addEventListener('click', function() {
        window.open('https://github.com/quickeasytech/markdown-editor#purchase', '_blank');
    });
    
    // Feature navigation
    document.querySelectorAll('.list-group-item').forEach(function(item) {
        if (item.parentElement.id === 'documentList') return;
        
        item.addEventListener('click', function() {
            document.querySelectorAll('#basicEditing, #aiFeatures, #syncDemo, #securityDemo').forEach(function(el) {
                el.classList.remove('active');
            });
            this.classList.add('active');
            
            if (this.id === 'basicEditing') {
                // Just show the editor
            }
        });
    });
});
