# GitHub Markdown Browser Viewer

> **🌐 Live at: https://mkview.tech**

## Quick Usage

There are two ways to use this markdown in-browser viewer:

1. Navigate to any markdown file (e.g. README file) in any public GitHub repository and prepend `mkview.tech/` to the URL.

    EXAMPLE:
    [mkview.tech/https://github.com/danielcregg/example-coding-lab/blob/main/my-coding-lab.md](https://mkview.tech/https://github.com/danielcregg/example-coding-lab/blob/main/my-coding-lab.md)

2. **Direct URL**: Visit the website and enter your markdown URL in the textbox provided.

   [https://mkview.tech](https://mkview.tech)

---

# Overview

The GitHub Markdown Viewer is a specialized tool that renders GitHub markdown files in a clean, standalone interface. It faithfully reproduces GitHub's native markdown rendering capabilities while eliminating surrounding repository elements, providing a distraction-free reading experience.

## Purpose

This viewer addresses several key needs:
- Renders markdown files with GitHub-faithful styling
- Provides a standalone, clutter-free display
- Supports complex elements including:
  - Syntax-highlighted code blocks
  - Interactive Mermaid diagrams
  - Tables and formatting

## Key Benefits

- **Educational Use**: Ideal for displaying laboratory instructions, project briefs, and technical documentation
- **Professional Presentation**: Offers clean, consistent formatting without platform-specific distractions
- **Modern Alternative**: Replaces traditional word processors where code formatting is challenging
- **AI Integration**: Seamlessly handles AI-generated markdown content, making it perfect for documentation workflows that leverage AI tools

```mermaid
flowchart LR
    A[Markdown Creation via AI] --> B[GitHub Storage]
    B --> C[Clean Display]
    C --> D{Use Cases}
    D --> E[Lab Instructions]
    D --> F[Project Briefs]
    D --> G[Documentation]
    D --> H[Technical Coding Guides]
```

## Features

- 🎨 GitHub-style markdown rendering
- 📊 Native Mermaid diagram support
- 💻 Syntax highlighting for code blocks
- 📋 GitHub-style copy button for code blocks
- 🌓 Automatic dark mode support
- 🔄 Direct GitHub URL conversion

## How It Works

```mermaid
flowchart LR
    A[Input URL] --> B{URL Type}
    B -->|GitHub URL| C[Convert to Raw]
    B -->|Raw URL| D[Direct Use]
    C --> E[Fetch Content]
    D --> E
    E --> F[Render Markdown]
    F --> G[Display Content]
    G --> H{Content Type}
    H -->|Code| I[Syntax Highlight]
    H -->|Mermaid| J[Render Diagram]
```

## Architecture

```mermaid
classDiagram
    class MarkdownViewer {
        +render()
        +convertUrl()
        +highlightSyntax()
    }
    class MermaidRenderer {
        +initialize()
        +render()
    }
    class SyntaxHighlighter {
        +highlight()
        +getLanguage()
    }
    MarkdownViewer --> MermaidRenderer
    MarkdownViewer --> SyntaxHighlighter
```

## Processing Flow

```mermaid
sequenceDiagram
    participant U as User
    participant V as Viewer
    participant G as GitHub
    participant R as Renderer

    U->>V: Input GitHub URL
    V->>V: Convert to Raw URL
    V->>G: Fetch Content
    G->>V: Return Markdown
    V->>R: Process Content
    R->>R: Highlight Syntax
    R->>R: Render Mermaid
    R->>V: Return HTML
    V->>U: Display Result
```

## Components & Dependencies

```mermaid
mindmap
    root((Markdown Viewer))
        (Parsing Engine)
            (Markdown Parser)
            (Syntax Highlighter)
        (Rendering)
            (Mermaid Diagrams)
            (Code Blocks)
            (Tables)
        (UI Components)
            (Dark Mode)
            (Copy Button)
            (URL Converter)
```

## System Requirements

```mermaid
graph TD
    A[System Requirements] --> B[Modern Browser]
    B --> C[Chrome Latest]
    B --> D[Firefox Latest]
    B --> E[Safari Latest]
    B --> F[Edge Latest]
    A --> G[JavaScript Enabled]
    A --> H[Internet Connection]
    H --> I[For GitHub URLs]
```

## Dark Mode Behavior

```mermaid
stateDiagram-v2
    [*] --> CheckPreference
    CheckPreference --> LightMode: System Light
    CheckPreference --> DarkMode: System Dark

    LightMode --> UpdateUI: Apply Light Theme
    DarkMode --> UpdateUI: Apply Dark Theme
```

<a href="https://www.buymeacoffee.com/danielcregg" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

