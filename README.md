# Code Language Detector Studio

A client-side web app that detects the programming language of pasted code using pattern and keyword heuristics.

![CodeAnalyzer Studio](images/Code-Analyzer.png)

## Features
- Heuristic language detection with confidence score
- Line numbers and code stats (lines/characters)
- Detectable languages list with logos
- Copy Result button (language + confidence + stats)
- Filename hint detection (e.g., `// main.ts`)
- Performance guard for large inputs
- Match explanation (patterns/keywords count)

## Detectable Languages
- JavaScript
- Python
- Java
- C++
- C
- C#
- Ruby
- PHP
- Swift
- Go
- Rust
- TypeScript
- Kotlin
- SQL
- HTML
- CSS
- JSON
- JSX

## Files
- `index.html` – App markup
- `styles.css` – Styling and themes
- `script.js` – Detection logic and UI behavior
- `images/` – Logo assets

## Run
Open `index.html` in a browser.

## Usage
1. Paste code into the left panel.
2. Click `Analyze Code` (or press `Enter`).
3. See the detected language, confidence, and stats.
4. Use `Copy Result` to copy the full report.

## How Detection Works
- Each language has regex patterns and keyword lists in `languagePatterns` inside `script.js`.
- Matches add to a score per language; the highest score wins.
- Confidence is derived from the top score vs. total score.
- Extra boosts exist for TypeScript-only syntax (type annotations, `interface`, `type`, etc.) and filename hints (e.g., `// main.ts`).

## Notes
- Detection is heuristic-based and may be incorrect for short or mixed snippets.
- No server or build step required.
