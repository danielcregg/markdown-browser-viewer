# GitHub Markdown Browser Viewer

This tool enables you to display a GitHub markdown page (e.g. a Readme file) in your browser by it self without any Github tooling surrounding it. It is designed to replicate GitHubs Readme file displays faithfully. The purpose of this tool is to show one clean markdown page with clean coding blocks and mermaid diagrams. It is perfect for labs or project brief and avoids the need to use Word where coding blocks are not easy to insert. Coding blocks are complete with syntax highlighting. The best part is that markdown pages can be completly created in full using at AI chat tool and them uploaded to github to be dispalyed. 

## Features

- 🎨 GitHub-style markdown rendering
- 📊 Native Mermaid diagram support
- 💻 Syntax highlighting for code blocks
- 📋 GitHub-style copy button for code blocks
- 🌓 Automatic dark mode support
- 🔄 Direct GitHub URL conversion
> **🌐 Live at: https://danielcregg.github.io/md-render/**

## Quick Usage

There are two ways to use this viewer:

1. **Direct URL**: Visit the website above and enter your markdown URL in the textbox provided.
   ```
   https://danielcregg.github.io/md-render/
   ```

2. **URL Parameter**: Append your markdown URL to the website's URL like below:
   
   https:\/\/danielcregg.github.io/md-render/**?url=https:\/\/github.com/myusername/my-random-github-repository/blob/master/README.md**
   

For example, to view "Week 7 Lab: AI Recipe Generator", simply append its URL to the viewer's URL.

---



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
