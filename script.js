// Language detection configuration: regex patterns, keywords, and extensions per language.
const languagePatterns = {
    javascript: {
        patterns: [
            /\b(const|let|var)\s+\w+\s*=/,
            /=>\s*{/, 
            /function\s+\w+\s*\(/,
            /console\.log/,
            /\.\s*map\s*\(/,
            /\.\s*filter\s*\(/,
            /require\s*\(/,
            /import\s+.*\s+from/,
            /export\s+(default|const)/,
            /async\s+function/,
            /\.then\s*\(/,
            /\.catch\s*\(/ 
        ],
        keywords: ['function', 'const', 'let', 'var', 'return', 'if', 'else', 'for', 'while', 'class', 'extends', 'async', 'await', 'import', 'export'],
        fileExtensions: ['.js', '.mjs', '.cjs']
    },
    python: {
        patterns: [
            /def\s+\w+\s*\(/,
            /class\s+\w+.*:/,
            /if\s+__name__\s*==\s*['"']__main__['"']/,
            /import\s+\w+/,
            /from\s+\w+\s+import/,
            /print\s*\(/,
            /@\w+/,
            /\bself\b/,
            /:\s*$.*\n\s{4}/m,
            /elif\s+/,
            /\bTrue\b|\bFalse\b|\bNone\b/
        ],
        keywords: ['def', 'class', 'import', 'from', 'return', 'if', 'elif', 'else', 'for', 'while', 'in', 'lambda', 'pass', 'with', 'as', 'try', 'except'],
        fileExtensions: ['.py']
    },
    java: {
        patterns: [
            /public\s+(class|interface|enum)/,
            /private\s+(static\s+)?(void|int|String|boolean)/,
            /System\.out\.println/,
            /public\s+static\s+void\s+main/,
            /@Override/,
            /import\s+java\./,
            /new\s+\w+\s*\(/,
            /\bextends\b/,
            /\bimplements\b/
        ],
        keywords: ['public', 'private', 'protected', 'class', 'interface', 'extends', 'implements', 'static', 'void', 'int', 'String', 'boolean', 'return', 'new'],
        fileExtensions: ['.java']
    },
    cpp: {
        patterns: [
            /#include\s*<.*>/,
            /std::/,
            /cout\s*<</,
            /cin\s*>>/,
            /int\s+main\s*\(/,
            /using\s+namespace\s+std/,
            /template\s*</,
            /->/,
            /::/,
            /\bvector\b.*</
        ],
        keywords: ['include', 'namespace', 'class', 'public', 'private', 'protected', 'virtual', 'template', 'typename', 'return', 'int', 'void', 'char', 'bool'],
        fileExtensions: ['.cpp', '.cc', '.cxx', '.h', '.hpp']
    },
    c: {
        patterns: [
            /#include\s*<.*\.h>/,
            /printf\s*\(/,
            /scanf\s*\(/,
            /int\s+main\s*\(/,
            /malloc\s*\(/,
            /free\s*\(/,
            /struct\s+\w+/,
            /typedef\s+/
        ],
        keywords: ['include', 'int', 'char', 'void', 'return', 'struct', 'typedef', 'sizeof', 'malloc', 'free', 'printf', 'scanf'],
        fileExtensions: ['.c', '.h']
    },
    csharp: {
        patterns: [
            /using\s+System/,
            /namespace\s+\w+/,
            /public\s+class\s+\w+/,
            /Console\.WriteLine/,
            /\bvar\b\s+\w+\s*=/,
            /\[.*\]/,
            /async\s+Task/,
            /\bstring\b/
        ],
        keywords: ['using', 'namespace', 'class', 'public', 'private', 'protected', 'static', 'void', 'string', 'int', 'bool', 'var', 'async', 'await', 'return'],
        fileExtensions: ['.cs']
    },
    ruby: {
        patterns: [
            /def\s+\w+/,
            /end\b/,
            /class\s+\w+/,
            /puts\s+/,
            /\|\w+\|/,
            /\.each\s+do/,
            /@\w+/,
            /require\s+['"']/, 
            /\bdo\b/
        ],
        keywords: ['def', 'end', 'class', 'module', 'require', 'puts', 'return', 'if', 'elsif', 'else', 'unless', 'do', 'while', 'for', 'in'],
        fileExtensions: ['.rb']
    },
    php: {
        patterns: [
            /<\?php/,
            /\$\w+/,
            /echo\s+/,
            /function\s+\w+\s*\(/,
            /->/,
            /public\s+function/,
            /private\s+function/,
            /namespace\s+/,
            /use\s+/
        ],
        keywords: ['function', 'echo', 'return', 'if', 'else', 'elseif', 'while', 'for', 'foreach', 'class', 'public', 'private', 'protected', 'namespace', 'use'],
        fileExtensions: ['.php']
    },
    swift: {
        patterns: [
            /func\s+\w+\s*\(/,
            /var\s+\w+:/,
            /let\s+\w+/,
            /import\s+\w+/,
            /class\s+\w+/,
            /struct\s+\w+/,
            /enum\s+\w+/,
            /->/,
            /\bguard\b/,
            /\?\./
        ],
        keywords: ['func', 'var', 'let', 'class', 'struct', 'enum', 'import', 'return', 'if', 'else', 'guard', 'switch', 'case', 'for', 'in', 'while'],
        fileExtensions: ['.swift']
    },
    go: {
        patterns: [
            /package\s+\w+/,
            /import\s+\(/,
            /func\s+\w+\s*\(/,
            /fmt\.\w+/,
            /:=/,
            /func\s+\(\w+\s+\*?\w+\)/,
            /go\s+func/,
            /defer\s+/,
            /\bchan\b/
        ],
        keywords: ['package', 'import', 'func', 'return', 'if', 'else', 'for', 'range', 'var', 'const', 'type', 'struct', 'interface', 'go', 'defer', 'chan'],
        fileExtensions: ['.go']
    },
    rust: {
        patterns: [
            /fn\s+\w+\s*\(/,
            /let\s+(mut\s+)?\w+/,
            /use\s+\w+/,
            /impl\s+/,
            /pub\s+fn/,
            /&mut\s+/,
            /\bmatch\b/,
            /::\w+/,
            /\bSome\b|\bNone\b|\bOk\b|\bErr\b/
        ],
        keywords: ['fn', 'let', 'mut', 'use', 'pub', 'impl', 'struct', 'enum', 'trait', 'match', 'if', 'else', 'for', 'while', 'loop', 'return'],
        fileExtensions: ['.rs']
    },
    typescript: {
        patterns: [
            /:\s*(string|number|boolean|any|void)/,
            /interface\s+\w+/,
            /type\s+\w+\s*=/,
            /<\w+>/,
            /as\s+\w+/,
            /public\s+\w+:/,
            /private\s+\w+:/,
            /enum\s+\w+/,
            /:\s*[\w<>\[\],\s]+(?=\s*[=;,)])/,
            /\bimplements\s+\w+/,
            /\breadonly\b/,
            /\bkeyof\b/,
            /\bunknown\b/,
            /\bnever\b/
        ],
        keywords: ['interface', 'type', 'enum', 'public', 'private', 'protected', 'readonly', 'abstract', 'const', 'let', 'var', 'function', 'class', 'extends', 'implements'],
        fileExtensions: ['.ts', '.tsx']
    },
    kotlin: {
        patterns: [
            /fun\s+\w+\s*\(/,
            /val\s+\w+/,
            /var\s+\w+/,
            /class\s+\w+/,
            /object\s+\w+/,
            /when\s*{/, 
            /->/,
            /\?\./,
            /!!/
        ],
        keywords: ['fun', 'val', 'var', 'class', 'object', 'interface', 'when', 'if', 'else', 'for', 'while', 'return', 'import', 'package'],
        fileExtensions: ['.kt', '.kts']
    },
    sql: {
        patterns: [
            /SELECT\s+.*\s+FROM/i,
            /INSERT\s+INTO/i,
            /UPDATE\s+\w+\s+SET/i,
            /DELETE\s+FROM/i,
            /CREATE\s+TABLE/i,
            /WHERE\s+/i,
            /JOIN\s+/i,
            /GROUP\s+BY/i,
            /ORDER\s+BY/i
        ],
        keywords: ['SELECT', 'FROM', 'WHERE', 'INSERT', 'UPDATE', 'DELETE', 'CREATE', 'TABLE', 'JOIN', 'LEFT', 'RIGHT', 'INNER', 'OUTER', 'GROUP', 'ORDER', 'BY'],
        fileExtensions: ['.sql']
    },
    html: {
        patterns: [
            /<(!DOCTYPE|html|head|body|div|span|p|a|img|script|style|link)/i,
            /<\/\w+>/,
            /\w+\s*=\s*['"'].*['"']/
        ],
        keywords: ['DOCTYPE', 'html', 'head', 'body', 'div', 'span', 'script', 'style', 'link', 'meta'],
        fileExtensions: ['.html', '.htm']
    },
    css: {
        patterns: [
            /\.\w+\s*{/, 
            /#\w+\s*{/, 
            /\w+:\s*[^;]+;/,
            /@media/,
            /@keyframes/,
            /rgba?\(/,
            /!important/
        ],
        keywords: ['color', 'background', 'margin', 'padding', 'display', 'position', 'width', 'height', 'font', 'border'],
        fileExtensions: ['.css']
    },
    json: {
        patterns: [
            /^\s*{[\s\S]*}\s*$/,
            /^\s*\[[\s\S]*\]\s*$/,
            /"[\w\s]+"\s*:\s*/
        ],
        keywords: ['true', 'false', 'null'],
        fileExtensions: ['.json']
    },
    jsx: {
        patterns: [
            /<\w+.*>/,
            /{.*}/,
            /className\s*=/,
            /\brender\s*\(\s*\)\s*{/, 
            /export\s+default\s+/, 
            /import\s+React/
        ],
        keywords: ['import', 'export', 'default', 'const', 'let', 'var', 'function', 'class', 'extends', 'return', 'render'],
        fileExtensions: ['.jsx']
    }
};

// Orchestrates detection: validate input, apply perf guard, run analysis, then render.
function detectLanguage() {
    const codeInput = document.getElementById('codeInput');
    const rawCode = codeInput.value;
    const code = rawCode.trim();
    const visualLines = getVisualLineCount(codeInput);
    const filenameHint = getFilenameHint(rawCode);
    // Guardrail for very large input to keep UI responsive.
    const perfLimit = 20000;
    const isTruncated = rawCode.length > perfLimit;
    const analysisCode = isTruncated ? rawCode.slice(0, perfLimit) : rawCode;
    
    if (!code) {
        alert('Please paste some code first!');
        return;
    }

    // Show a brief loading state for UX (simulates "working" even on fast inputs).
    document.getElementById('detectBtnText').innerHTML = '<span class="loading"></span>';
    
    setTimeout(() => {
        // Analyze the (possibly truncated) code.
        const results = analyzeCode(analysisCode.trim(), analysisCode, visualLines, filenameHint);
        // Persist truncation info for the UI warning banner.
        results.isTruncated = isTruncated;
        results.truncatedChars = perfLimit;
        // Render results into the Results panel.
        displayResults(results);
        document.getElementById('detectBtnText').textContent = 'Analyze Code';
    }, 800);
}

// Scores each language based on patterns/keywords and returns a result payload.
function analyzeCode(code, rawCode = code, visualLines = null, filenameHint = '') {
    // Per-language scores accumulate from patterns + keywords.
    const scores = {};
    // Track top matched patterns to surface "why" in UI.
    const detectedFeatures = {};
    // Count pattern/keyword matches for explanation text.
    const patternCounts = {};
    const keywordCounts = {};
    // File-name hint (e.g., // main.ts) to bias detection.
    const hasTsHint = /\.ts\b/i.test(filenameHint);

    // Calculate scores for each language.
    for (const [lang, config] of Object.entries(languagePatterns)) {
        let score = 0;
        const features = [];

        // Check patterns (stronger signals contribute more).
        config.patterns.forEach(pattern => {
            if (pattern.test(code)) {
                // Some patterns are strong TS signals (types, interfaces, etc.).
                const isTsSignal = lang === 'typescript' && (
                    pattern.source.includes('interface') ||
                    pattern.source.includes('type') ||
                    pattern.source.includes(':') ||
                    pattern.source.includes('enum') ||
                    pattern.source.includes('as') ||
                    pattern.source.includes('readonly') ||
                    pattern.source.includes('keyof') ||
                    pattern.source.includes('unknown') ||
                    pattern.source.includes('never')
                );
                // Higher score for strong TS signals.
                score += isTsSignal ? 18 : 10;
                // Save a short pattern string for the UI.
                features.push(pattern.toString().slice(1, -1));
                patternCounts[lang] = (patternCounts[lang] || 0) + 1;
            }
        });

        // Check keywords (TS-only keywords get extra weight).
        config.keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
            const matches = code.match(regex);
            if (matches) {
                // TS keywords signal typing constructs.
                const isTsKeyword = lang === 'typescript' && ['interface', 'type', 'enum', 'readonly', 'abstract'].includes(keyword);
                score += matches.length * (isTsKeyword ? 4 : 2);
                keywordCounts[lang] = (keywordCounts[lang] || 0) + matches.length;
            }
        });

        scores[lang] = score;
        detectedFeatures[lang] = features.slice(0, 5); // Limit to top 5 features
    }

    // Additional TS heuristics outside of pattern lists.
    const hasTsSignals = /:\s*[\w<>\[\],\s]+(?=\s*[=;,)])|\binterface\b|\btype\b|\benum\b|\bimplements\b|\breadonly\b|\bkeyof\b|\bunknown\b|\bnever\b/.test(code);

    if (hasTsHint) {
        // File extension hint for TS.
        scores.typescript = (scores.typescript || 0) + 40;
    }

    if (hasTsSignals) {
        // When TS signals appear, push TS above JS if close.
        scores.typescript = (scores.typescript || 0) + 40;
        if ((scores.typescript || 0) <= (scores.javascript || 0)) {
            scores.typescript += 30;
        }
    }

    // Extension-based bias if a filename hint exists.
    const fileExtensionBoosts = {
        '.js': 'javascript',
        '.ts': 'typescript',
        '.tsx': 'typescript',
        '.jsx': 'jsx',
        '.py': 'python',
        '.java': 'java',
        '.cs': 'csharp',
        '.cpp': 'cpp',
        '.cxx': 'cpp',
        '.cc': 'cpp',
        '.c': 'c',
        '.rb': 'ruby',
        '.php': 'php',
        '.swift': 'swift',
        '.go': 'go',
        '.rs': 'rust',
        '.kt': 'kotlin',
        '.kts': 'kotlin',
        '.sql': 'sql',
        '.html': 'html',
        '.htm': 'html',
        '.css': 'css',
        '.json': 'json'
    };

    const extMatch = filenameHint.match(/\.[a-z0-9]+/i);
    if (extMatch && fileExtensionBoosts[extMatch[0].toLowerCase()]) {
        const target = fileExtensionBoosts[extMatch[0].toLowerCase()];
        scores[target] = (scores[target] || 0) + 30;
    }

    // Pick the top-scoring language and compute confidence.
    const sortedLanguages = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .filter(([_, score]) => score > 0);

    if (sortedLanguages.length === 0) {
        return {
            language: 'Unknown',
            confidence: 0,
            features: [],
            lines: visualLines || rawCode.split('\n').length,
            chars: rawCode.length,
            filenameHint: filenameHint,
            patternCount: 0,
            keywordCount: 0
        };
    }

    const [topLang, topScore] = sortedLanguages[0];
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
    // Confidence is the top score vs total score, capped below 100.
    const confidence = Math.min(Math.round((topScore / (totalScore || 1)) * 100), 99);

    // UI-friendly names for special cases.
    const displayNames = {
        cpp: 'C++',
        csharp: 'C#',
        javascript: 'JavaScript',
        typescript: 'TypeScript',
        jsx: 'JSX',
        sql: 'SQL',
        html: 'HTML',
        css: 'CSS',
        json: 'JSON',
        php: 'PHP'
    };

    return {
        language: displayNames[topLang] || (topLang.charAt(0).toUpperCase() + topLang.slice(1)),
        confidence: confidence,
        features: detectedFeatures[topLang],
        lines: visualLines || rawCode.split('\n').length,
        chars: rawCode.length,
        // Alternatives show the next few candidates.
        alternatives: sortedLanguages.slice(1, 4).map(([lang, _]) => 
            lang.charAt(0).toUpperCase() + lang.slice(1)
        ),
        filenameHint: filenameHint,
        patternCount: patternCounts[topLang] || 0,
        keywordCount: keywordCounts[topLang] || 0
    };
}

// Renders results panel: language badge, patterns, stats, and hints.
function displayResults(results) {
    lastResults = results;
    // DOM handles for the Results panel.
    const emptyState = document.getElementById('emptyState');
    const resultContent = document.getElementById('resultContent');
    const copyBtn = document.getElementById('copyResultBtn');
    const filenameHintEl = document.getElementById('filenameHint');
    const perfWarning = document.getElementById('perfWarning');

    emptyState.style.display = 'none';
    resultContent.style.display = 'block';
    copyBtn.disabled = false;

    // Map display name to logo asset for the badge.
    // Map display name to logo asset for the badge.
    const logoMap = {
        JavaScript: 'images/Js-Logo.png',
        Python: 'images/Python-Logo.png',
        Java: 'images/Java-Logo.png',
        'C++': 'images/ISO_C++_Logo.png',
        C: 'images/C-Logo.png',
        'C#': 'images/C%23_Logo.png',
        Ruby: 'images/Ruby_logo.png',
        PHP: 'images/PHP-logo.png',
        Swift: 'images/Swift-Logo.png',
        Go: 'images/Go-Logo.png',
        Rust: 'images/Rust-Logo.png',
        TypeScript: 'images/Typescript_logo.png',
        Kotlin: 'images/Kotlin_Logo.png',
        SQL: 'images/Sql_Logo.png',
        HTML: 'images/HTML-Logo.png',
        CSS: 'images/CSS-Logo.png',
        JSON: 'images/JSON_Logo.png',
        JSX: 'images/JSX-Logo.png'
    };

    const logoSrc = logoMap[results.language];

    // Render the results markup.
    resultContent.innerHTML = `
        <div class="language-badge">
            <div class="language-meta">
                <div class="language-name">${results.language}</div>
                <div class="confidence">Confidence: ${results.confidence}%</div>
                <div class="confidence">Matched ${results.patternCount} patterns, ${results.keywordCount} keywords</div>
            </div>
            ${logoSrc ? `<img class="language-logo" src="${logoSrc}" alt="${results.language} logo">` : ''}
        </div>

        ${results.features.length > 0 ? `
        <div class="features">
            <h3>Detected Patterns</h3>
            <div class="feature-tags">
                ${results.features.map(f => `<div class="tag">${escapeHtml(f.substring(0, 30))}</div>`).join('')}
            </div>
        </div>
        ` : ''}

        <div class="stats">
            <div class="stat">
                <div class="stat-label">Lines of Code</div>
                <div class="stat-value">${results.lines}</div>
            </div>
            <div class="stat">
                <div class="stat-label">Characters</div>
                <div class="stat-value">${results.chars}</div>
            </div>
        </div>

        ${results.alternatives && results.alternatives.length > 0 ? `
        <div class="features" style="margin-top: 1.5rem;">
            <h3>Possible Alternatives</h3>
            <div class="feature-tags">
                ${results.alternatives.map(alt => `<div class="tag">${alt}</div>`).join('')}
            </div>
        </div>
        ` : ''}
    `;

    // Optional filename hint banner.
    if (results.filenameHint) {
        filenameHintEl.style.display = 'block';
        filenameHintEl.textContent = `Filename hint: ${results.filenameHint}`;
    } else {
        filenameHintEl.style.display = 'none';
    }

    // Optional large-input warning.
    if (results.isTruncated) {
        perfWarning.style.display = 'block';
        perfWarning.textContent = `Large input detected. Analyzing first ${results.truncatedChars} characters for performance.`;
    } else {
        perfWarning.style.display = 'none';
    }

}

// Prevents HTML injection in rendered pattern tags.
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Extract a filename hint from a comment like `// main.ts`.
function getFilenameHint(rawCode) {
    const commentMatch = rawCode.match(/^\s*\/\/\s*([^\n]+)/m);
    if (!commentMatch) return '';
    const value = commentMatch[1].trim();
    return /\.\w+$/.test(value) ? value : '';
}


// Resets input and result UI back to the empty state.
function clearAll() {
    document.getElementById('codeInput').value = '';
    document.getElementById('emptyState').style.display = 'flex';
    document.getElementById('resultContent').style.display = 'none';
    document.getElementById('filenameHint').style.display = 'none';
    document.getElementById('perfWarning').style.display = 'none';
    document.getElementById('copyResultBtn').disabled = true;
    updateLineNumbers();
}

// Example snippets (not currently wired to UI).
const examples = {
    python: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))`,
    
    javascript: `const fetchData = async () => {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data.map(item => item.name);
};`,

    java: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
};

// Enter analyzes; Ctrl/Cmd+Enter also analyzes (Shift+Enter inserts line).
document.getElementById('codeInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        detectLanguage();
        return;
    }

    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        detectLanguage();
    }
});

// Rebuilds the line-number gutter based on visual line count.
function updateLineNumbers() {
    const input = document.getElementById('codeInput');
    const lineNumbers = document.getElementById('lineNumbers');
    const lineCount = getVisualLineCount(input);
    let lines = '';

    for (let i = 1; i <= lineCount; i += 1) {
        lines += `${i}\n`;
    }

    lineNumbers.textContent = lines.trimEnd() || '1';
    lineNumbers.scrollTop = input.scrollTop;
}

// Keeps line-number gutter scroll position aligned to the textarea.
function syncLineNumbersScroll() {
    const input = document.getElementById('codeInput');
    const lineNumbers = document.getElementById('lineNumbers');
    lineNumbers.scrollTop = input.scrollTop;
}

let lineMeasure;

// Measures wrapped line count by mirroring textarea styles in a hidden node.
function getVisualLineCount(textarea) {
    if (!lineMeasure) {
        lineMeasure = document.createElement('div');
        lineMeasure.style.position = 'absolute';
        lineMeasure.style.visibility = 'hidden';
        lineMeasure.style.zIndex = '-1';
        lineMeasure.style.whiteSpace = 'pre-wrap';
        lineMeasure.style.wordBreak = 'break-word';
        lineMeasure.style.padding = getComputedStyle(textarea).padding;
        lineMeasure.style.fontFamily = getComputedStyle(textarea).fontFamily;
        lineMeasure.style.fontSize = getComputedStyle(textarea).fontSize;
        lineMeasure.style.lineHeight = getComputedStyle(textarea).lineHeight;
        lineMeasure.style.width = `${textarea.clientWidth}px`;
        document.body.appendChild(lineMeasure);
    }

    lineMeasure.style.width = `${textarea.clientWidth}px`;
    lineMeasure.textContent = textarea.value || ' ';

    const styles = getComputedStyle(textarea);
    const lineHeight = parseFloat(styles.lineHeight) || 1;
    const paddingTop = parseFloat(styles.paddingTop) || 0;
    const paddingBottom = parseFloat(styles.paddingBottom) || 0;
    const contentHeight = Math.max(0, lineMeasure.scrollHeight - paddingTop - paddingBottom);
    const visualLines = Math.max(1, Math.round(contentHeight / lineHeight));
    return visualLines;
}

let clearTimer;

// Live line updates + auto-clear when the input is emptied.
document.getElementById('codeInput').addEventListener('input', () => {
    const input = document.getElementById('codeInput');
    updateLineNumbers();
    clearTimeout(clearTimer);
    if (!input.value.trim()) {
        clearTimer = setTimeout(() => {
            clearAll();
        }, 150);
    }
});
document.getElementById('codeInput').addEventListener('scroll', syncLineNumbersScroll);

// Initialize line numbers on first load.
updateLineNumbers();

// Legacy history restore (kept for now; safe to remove if not needed).
function tryLoadHistoryFromStorage() {
    let entry = null;
    try {
        entry = JSON.parse(localStorage.getItem('codeAnalyzerSelected')) || null;
    } catch {
        entry = null;
    }
    if (!entry) {
        entry = getHistoryFromUrl();
    }
    if (!entry) return;
    localStorage.removeItem('codeAnalyzerSelected');

    const codeInput = document.getElementById('codeInput');
    codeInput.value = entry.code || '';
    updateLineNumbers();

    const hasStoredResults = typeof entry.confidence === 'number' && entry.language;
    if (hasStoredResults) {
        const results = {
            language: entry.language,
            confidence: entry.confidence,
            features: entry.features || [],
            alternatives: entry.alternatives || [],
            lines: entry.lines || (entry.code ? entry.code.split('\n').length : 0),
            chars: entry.chars || (entry.code ? entry.code.length : 0),
            filenameHint: entry.filenameHint || '',
            patternCount: entry.patternCount || 0,
            keywordCount: entry.keywordCount || 0
        };
        displayResults(results);
    } else if (entry.code) {
        const raw = entry.code;
        const results = analyzeCode(raw.trim(), raw, getVisualLineCount(codeInput), getFilenameHint(raw));
        displayResults(results);
        pushHistory(results, raw);
    }
}

// Legacy history query parsing (safe to remove if not needed).
function getHistoryFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get('historyId');
    const indexParam = params.get('history');
    const entries = loadHistory();

    if (idParam) {
        return entries.find(item => item.id === idParam) || null;
    }

    if (indexParam !== null) {
        const index = Number(indexParam);
        if (!Number.isNaN(index)) {
            return entries[index] || null;
        }
    }

    return null;
}

// Legacy history state (safe to remove if not needed).
const history = loadHistory();
let lastResults = null;

// Legacy history record writer (safe to remove if not needed).
function pushHistory(results, rawCode) {
    const entry = {
        id: `${Date.now()}`,
        language: results.language,
        confidence: results.confidence,
        timestamp: new Date().toLocaleTimeString(),
        lines: results.lines,
        chars: results.chars,
        filenameHint: results.filenameHint || '',
        patternCount: results.patternCount || 0,
        keywordCount: results.keywordCount || 0,
        alternatives: results.alternatives || [],
        features: results.features || [],
        code: rawCode || ''
    };
    history.unshift(entry);
    if (history.length > 5) history.pop();
    saveHistory();
}

// Legacy history persistence (safe to remove if not needed).
function saveHistory() {
    localStorage.setItem('codeAnalyzerHistory', JSON.stringify(history));
}

// Legacy history load (safe to remove if not needed).
function loadHistory() {
    try {
        return JSON.parse(localStorage.getItem('codeAnalyzerHistory')) || [];
    } catch {
        return [];
    }
}


// Legacy history entry access (safe to remove if not needed).
function loadHistoryEntry(index) {
    const entries = loadHistory();
    return entries[index] || null;
}

// Legacy history restore by index (safe to remove if not needed).
function tryLoadHistoryFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const indexParam = params.get('history');
    if (indexParam === null) return;
    const index = Number(indexParam);
    if (Number.isNaN(index)) return;

    const entry = loadHistoryEntry(index);
    if (!entry) return;

    const codeInput = document.getElementById('codeInput');
    codeInput.value = entry.code || '';
    updateLineNumbers();

    const hasStoredResults = typeof entry.confidence === 'number' && entry.language;
    if (hasStoredResults) {
        const results = {
            language: entry.language,
            confidence: entry.confidence,
            features: entry.features || [],
            alternatives: entry.alternatives || [],
            lines: entry.lines || (entry.code ? entry.code.split('\n').length : 0),
            chars: entry.chars || (entry.code ? entry.code.length : 0),
            filenameHint: entry.filenameHint || '',
            patternCount: entry.patternCount || 0,
            keywordCount: entry.keywordCount || 0
        };
        displayResults(results);
    } else if (entry.code) {
        const raw = entry.code;
        const results = analyzeCode(raw.trim(), raw, getVisualLineCount(codeInput), getFilenameHint(raw));
        displayResults(results);
        pushHistory(results, raw);
    }
}

// Copies a full analysis report to the clipboard.
document.getElementById('copyResultBtn').addEventListener('click', async () => {
    // Require a prior analysis before copying.
    if (!lastResults) return;

    const language = lastResults.language || 'Unknown';
    const confidence = `Confidence: ${lastResults.confidence || 0}%`;
    const stats = `Matched ${lastResults.patternCount || 0} patterns, ${lastResults.keywordCount || 0} keywords`;
    const lines = lastResults.lines ?? 0;
    const chars = lastResults.chars ?? 0;
    const patterns = (lastResults.features || []).join(', ');
    const alternatives = (lastResults.alternatives || []).join(', ');

    // Build a multi-line report for the clipboard.
    const text = [
        `Language: ${language}`,
        confidence,
        stats,
        `Lines: ${lines}`,
        `Characters: ${chars}`,
        lastResults.filenameHint ? `Filename hint: ${lastResults.filenameHint}` : '',
        patterns ? `Detected Patterns: ${patterns}` : '',
        alternatives ? `Alternatives: ${alternatives}` : ''
    ].filter(Boolean).join('\n');

    try {
        // Clipboard write can fail if permissions are blocked.
        await navigator.clipboard.writeText(text);
        const copyBtn = document.getElementById('copyResultBtn');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 1200);
    } catch {
        alert('Copy failed. Please try again.');
    }
});
