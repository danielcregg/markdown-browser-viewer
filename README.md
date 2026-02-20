# Markdown Browser Viewer (MKView)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)

A clean, standalone viewer that renders GitHub markdown files with faithful GitHub-style formatting, syntax highlighting, and interactive Mermaid diagrams. Live at [mkview.tech](https://mkview.tech).

## Overview

MKView is a specialized web tool that fetches and renders GitHub-hosted markdown files in a distraction-free interface. It reproduces GitHub's native markdown rendering, including syntax-highlighted code blocks, Mermaid diagrams, tables, and dark mode support, while stripping away all surrounding repository UI. It also includes a Chrome extension for one-click viewing of any GitHub markdown file.

## Features

- GitHub-faithful markdown rendering with full GFM support
- Native Mermaid diagram rendering (flowcharts, sequence diagrams, mind maps, and more)
- Syntax highlighting for code blocks with a copy-to-clipboard button
- Automatic dark mode based on system preference
- Direct GitHub URL conversion (prepend `mkview.tech/` to any GitHub markdown URL)
- Chrome extension for one-click viewing from any GitHub page
- Custom 404 page with automatic URL redirection
- GitHub Pages deployment with custom domain (`mkview.tech`)

## Prerequisites

- A **modern web browser** (Chrome, Firefox, Safari, or Edge)
- **JavaScript** enabled
- An **internet connection** for fetching GitHub-hosted markdown files

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/danielcregg/markdown-browser-viewer.git
   cd markdown-browser-viewer
   ```

2. Open `index.html` in your browser, or deploy to any static hosting provider.

3. **Chrome Extension** (optional):
   - Open `chrome://extensions/` in Chrome
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `extension/` directory

### Usage

There are two ways to view a markdown file:

1. **URL Prepend:** Navigate to any public GitHub markdown file and prepend `mkview.tech/` to the URL:
   ```
   mkview.tech/https://github.com/username/repo/blob/main/README.md
   ```

2. **Direct Input:** Visit [mkview.tech](https://mkview.tech) and paste the GitHub markdown URL into the input field.

3. **Chrome Extension:** Click the MKView icon while on any GitHub page to open the current file in MKView.

## Tech Stack

- **JavaScript** - Core application logic, markdown parsing, and rendering
- **HTML5** - Page structure and semantic markup
- **CSS3** - GitHub-style theming with dark mode support via CSS custom properties
- **Marked.js** - Markdown parsing library
- **Highlight.js** - Syntax highlighting for code blocks
- **Mermaid.js** - Interactive diagram rendering
- **GitHub Pages** - Static site hosting

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
