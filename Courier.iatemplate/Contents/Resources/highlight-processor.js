// Highlight Processor for iA Writer Template
// Processes === syntax with color parameters to generate highlighted text

(function() {
    'use strict';
    
    // Color mapping for the === syntax
    const colorMap = {
        'yellow': 'highlight-yellow',
        'green': 'highlight-green', 
        'blue': 'highlight-blue',
        'red': 'highlight-red',
        'orange': 'highlight-orange',
        'purple': 'highlight-purple',
        'pink': 'highlight-pink',
        'cyan': 'highlight-cyan',
        'gray': 'highlight-gray',
        'light-gray': 'highlight-light-gray',
        'lightgray': 'highlight-light-gray'
    };
    
    // Function to process text and convert === syntax to highlights
    function processHighlights(text) {
        // Regex to match ===color:text=== pattern
        // Updated to properly handle === syntax and avoid conflicts with other === patterns
        const highlightRegex = /===([a-zA-Z-]+):([^=]+?)===/g;
        
        return text.replace(highlightRegex, function(match, color, text) {
            const colorClass = colorMap[color.toLowerCase()];
            if (colorClass) {
                return `<span class="${colorClass}">${text.trim()}</span>`;
            } else {
                // If color not found, use default yellow
                return `<span class="highlight-yellow">${text.trim()}</span>`;
            }
        });
    }
    
    // Function to process the entire document
    function processDocument() {
        const body = document.body;
        if (!body) return;
        
        // Process all text nodes in the document
        const walker = document.createTreeWalker(
            body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            textNodes.push(node);
        }
        
        // Process each text node
        textNodes.forEach(function(textNode) {
            const text = textNode.textContent;
            if (text.includes('===')) {
                const processedText = processHighlights(text);
                if (processedText !== text) {
                    // Create a temporary container to parse the HTML
                    const temp = document.createElement('div');
                    temp.innerHTML = processedText;
                    
                    // Replace the text node with the processed content
                    const parent = textNode.parentNode;
                    const fragment = document.createDocumentFragment();
                    
                    // Move all child nodes from temp to fragment
                    while (temp.firstChild) {
                        fragment.appendChild(temp.firstChild);
                    }
                    
                    parent.replaceChild(fragment, textNode);
                }
            }
        });
    }
    
    // Function to process new content (for dynamic content)
    function processElement(element) {
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            textNodes.push(node);
        }
        
        textNodes.forEach(function(textNode) {
            const text = textNode.textContent;
            if (text.includes('===')) {
                const processedText = processHighlights(text);
                if (processedText !== text) {
                    const temp = document.createElement('div');
                    temp.innerHTML = processedText;
                    
                    const parent = textNode.parentNode;
                    const fragment = document.createDocumentFragment();
                    
                    while (temp.firstChild) {
                        fragment.appendChild(temp.firstChild);
                    }
                    
                    parent.replaceChild(fragment, textNode);
                }
            }
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', processDocument);
    } else {
        processDocument();
    }
    
    // Process on content changes (for iA Writer's live editing)
    if (typeof MutationObserver !== 'undefined') {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            processElement(node);
                        } else if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('===')) {
                            const parent = node.parentNode;
                            if (parent) {
                                processElement(parent);
                            }
                        }
                    });
                }
            });
        });
        
        // Start observing when body is available
        function startObserving() {
            if (document.body) {
                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });
            } else {
                setTimeout(startObserving, 100);
            }
        }
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', startObserving);
        } else {
            startObserving();
        }
    }
    
    // Make functions available globally for manual processing if needed
    window.HighlightProcessor = {
        processHighlights: processHighlights,
        processDocument: processDocument,
        processElement: processElement
    };
    
})(); 