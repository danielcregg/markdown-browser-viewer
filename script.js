// Initialize mermaid
mermaid.initialize({
    startOnLoad: true,
    theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default',
    securityLevel: 'loose'
});

// Listen for dark mode changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    mermaid.initialize({
        startOnLoad: true,
        theme: event.matches ? 'dark' : 'default',
        securityLevel: 'loose'
    });
});

// Create custom renderer
const renderer = new marked.Renderer();

// Override code block rendering
renderer.code = function(code, language) {
    if (language === 'mermaid') {
        return `<div class="mermaid">${code}</div>`;
    }

    const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
    const highlightedCode = hljs.highlight(code, { language: validLanguage }).value;
    
    return `
        <div class="code-block-container">
            <div class="code-header">
                <button class="copy-button" onclick="copyCode(this)">
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                        <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                        <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                    </svg>
                    Copy
                </button>
            </div>
            <pre><code class="${validLanguage}">${highlightedCode}</code></pre>
        </div>`;
};

// Configure marked options
marked.setOptions({
    renderer: renderer,
    gfm: true,
    breaks: true,
    headerIds: true,
    highlight: function(code, lang) {
        if (lang === 'mermaid') {
            return code;
        }
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
    }
});

marked.setOptions({
    headerIds: true,
    headerPrefix: '',
    mangle: false
});

async function copyCode(button) {
    const codeBlock = button.closest('.code-block-container').querySelector('code');
    const text = codeBlock.innerText;
    
    try {
        await navigator.clipboard.writeText(text);
        
        // Show success message
        const container = button.closest('.code-block-container');
        const feedback = document.createElement('div');
        feedback.className = 'copy-feedback';
        feedback.textContent = 'Copied!';
        container.appendChild(feedback);
        
        // Trigger animation
        setTimeout(() => feedback.classList.add('visible'), 0);
        
        // Remove message after delay
        setTimeout(() => {
            feedback.classList.remove('visible');
            setTimeout(() => feedback.remove(), 200);
        }, 1500);
    } catch (err) {
        console.error('Failed to copy text:', err);
    }
}

function convertToRawUrl(url) {
    // If it's already a raw URL, return it
    if (url.includes('raw.githubusercontent.com')) {
        return url;
    }
    
    // Ensure the URL starts with https://
    if (!url.startsWith('https://')) {
        url = 'https://' + url;
    }
    
    // Convert GitHub URL to raw URL
    url = url.replace('github.com', 'raw.githubusercontent.com')
             .replace('/blob/', '/');
    
    return url;
}

async function loadMarkdown() {
    const contentDiv = document.getElementById('content');
    const errorDiv = document.getElementById('error');
    const loadingDiv = document.getElementById('loading');
    const urlInput = document.getElementById('url-input');
    const baseUrl = 'https://mkview.tech/';
    
    errorDiv.style.display = 'none';
    contentDiv.innerHTML = '';
    loadingDiv.style.display = 'block';

    try {
        let url = urlInput.value.trim();
        if (!url) {
            throw new Error('Please enter a URL');
        }

        // Update the browser URL to reflect the input URL
        try {
            // Make sure URL starts with https:// for consistency
            if (!url.startsWith('https://')) {
                url = 'https://' + url;
            }
            // Update the browser URL without reloading the page
            const fullUrl = url.startsWith(baseUrl) ? url : baseUrl + url;
            window.history.pushState({}, '', fullUrl);
        } catch (e) {
            console.warn('Could not update URL:', e);
        }

        url = convertToRawUrl(url);

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch markdown content');
        }

        const markdown = await response.text();
        const html = marked.parse(markdown);
        
        // Display the content
        contentDiv.innerHTML = html;

        // Update page title if there's an H1
        const h1Match = markdown.match(/^#\s+(.+)$/m);
        if (h1Match) {
            document.title = h1Match[1] + ' - MKView';
        }

        // Hide interface elements
        document.body.classList.add('content-mode');

        // Re-render Mermaid diagrams
        mermaid.init();

    } catch (error) {
        errorDiv.style.display = 'block';
        errorDiv.textContent = `Error: ${error.message}`;
        contentDiv.innerHTML = '';
        // Show interface again on error
        document.body.classList.remove('content-mode');
        // Reset URL if there's an error
        try {
            window.history.pushState({}, '', baseUrl);
        } catch (e) {
            console.warn('Could not reset URL:', e);
        }
    } finally {
        loadingDiv.style.display = 'none';
    }
}

// Load content from URL on page load
window.addEventListener('load', () => {
    let mdUrl;
    
    // First check for url parameter (backward compatibility)
    const urlParams = new URLSearchParams(window.location.search);
    mdUrl = urlParams.get('url');
    
    // If no url parameter, check hash (from 404 redirect)
    if (!mdUrl && window.location.hash) {
        mdUrl = decodeURIComponent(window.location.hash.substring(1));
    }
    
    // If no hash, check if there's a path after the base URL
    if (!mdUrl) {
        const path = window.location.pathname;
        if (path.length > 1) {
            mdUrl = path.substring(1);  // Remove leading slash
            if (!mdUrl.startsWith('https://')) {
                mdUrl = 'https://' + mdUrl;
            }
        }
    }
    
    // If we have a URL, load it and hide interface immediately
    if (mdUrl) {
        document.body.classList.add('content-mode'); // Hide interface immediately
        document.getElementById('url-input').value = mdUrl;
        loadMarkdown();
    }
});

// Add event listener for the enter key
document.getElementById('url-input').addEventListener('keypress', function(event) {
    // Check if the key pressed was Enter
    if (event.key === 'Enter') {
        // Prevent the default form submission
        event.preventDefault();
        // Call the loadMarkdown function
        loadMarkdown();
    }
});
