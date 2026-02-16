const historyList = document.getElementById('historyList');

function loadHistory() {
    try {
        return JSON.parse(localStorage.getItem('codeAnalyzerHistory')) || [];
    } catch {
        return [];
    }
}

function renderHistory() {
    const history = loadHistory();

    if (!history.length) {
        historyList.innerHTML = '<div class="history-empty">No analyses yet</div>';
        return;
    }

    historyList.innerHTML = history.map((item, index) => `
        <button class="history-item" data-index="${index}" data-id="${item.id || ''}">
            <div class="history-main">
                <div class="history-lang">${item.language}</div>
                <div class="history-meta">${item.timestamp} • ${item.lines} lines • ${item.chars} chars</div>
            </div>
            <div class="history-confidence">${item.confidence}%</div>
        </button>
    `).join('');

    historyList.querySelectorAll('.history-item').forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const idx = btn.getAttribute('data-index');
            const selected = history[id ? history.findIndex(item => item.id === id) : Number(idx)];
            if (selected) {
                localStorage.setItem('codeAnalyzerSelected', JSON.stringify(selected));
            }
            if (id) {
                window.location.href = `index.html?historyId=${id}`;
            } else {
                window.location.href = `index.html?history=${idx}`;
            }
        });
    });
}

renderHistory();
