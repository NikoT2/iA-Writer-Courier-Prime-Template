# Multiple Highlight Colors for iA Writer Template

This template now supports multiple highlight colors beyond the default yellow highlight that iA Writer provides. Here's how to use them:

## 🚀 Quick Start: === Syntax (Recommended)

The easiest way to add highlights is using the `===` syntax:

```
===color:text===
```

### Examples:

- `===green:Action items===` → <span class="highlight-green">Action items</span>
- `===red:Important warning===` → <span class="highlight-red">Important warning</span>
- `===blue:Information note===` → <span class="highlight-blue">Information note</span>

### Available Colors:

- `yellow`, `green`, `blue`, `red`, `orange`
- `purple`, `pink`, `cyan`, `gray`, `light-gray`

### Real-time Processing:

The `===` syntax is processed automatically as you type in iA Writer. No need to write HTML manually!

---

## Available Highlight Colors

The template provides 10 different highlight colors:

1. **Yellow** (default) - `#ffeb3b`
2. **Green** - `#4caf50`
3. **Blue** - `#2196f3`
4. **Red** - `#f44336`
5. **Orange** - `#ff9800`
6. **Purple** - `#9c27b0`
7. **Pink** - `#e91e63`
8. **Cyan** - `#00bcd4`
9. **Gray** - `#9e9e9e`
10. **Light Gray** - `#e0e0e0`

## How to Use

### Method 1: === Syntax (Easiest)

Simply type the syntax directly in your document:

```
===green:This text will be highlighted in green===
===blue:This text will be highlighted in blue===
===red:This text will be highlighted in red===
```

### Method 2: Using HTML Classes (Advanced)

You can apply highlight colors to any text by wrapping it in a `<span>` element with the appropriate class:

```html
<span class="highlight-green">This text will be highlighted in green</span>
<span class="highlight-blue">This text will be highlighted in blue</span>
<span class="highlight-red">This text will be highlighted in red</span>
```

### Method 3: Using Background Classes

For more flexibility, you can use the background classes on any element:

```html
<p class="highlight-yellow-bg">
  This entire paragraph will have a yellow background
</p>
<div class="highlight-purple-bg">This div will have a purple background</div>
```

### Method 4: Using Mark Elements with Classes

You can also apply classes to `<mark>` elements:

```html
<mark class="highlight-orange">This will be highlighted in orange</mark>
<mark class="highlight-cyan">This will be highlighted in cyan</mark>
```

## === Syntax Reference

### Basic Format

```
===color:text===
```

### Examples

```
===yellow:General highlights===
===green:Positive information===
===blue:Neutral content===
===red:Warnings or errors===
===orange:Important notices===
===purple:Creative ideas===
===pink:Personal notes===
===cyan:Technical information===
===gray:Secondary information===
===light-gray:Subtle emphasis===
```

### Syntax Rules

- Use `===color:text===` format
- Color names are case-insensitive
- Use hyphens for multi-word colors (e.g., `light-gray`)
- If an invalid color is used, it defaults to yellow
- Works in any text content including paragraphs, headings, lists, etc.

## Class Reference

### Highlight Classes (for spans and marks)

- `.highlight-yellow`
- `.highlight-green`
- `.highlight-blue`
- `.highlight-red`
- `.highlight-orange`
- `.highlight-purple`
- `.highlight-pink`
- `.highlight-cyan`
- `.highlight-gray`
- `.highlight-light-gray`

### Background Classes (for any element)

- `.highlight-yellow-bg`
- `.highlight-green-bg`
- `.highlight-blue-bg`
- `.highlight-red-bg`
- `.highlight-orange-bg`
- `.highlight-purple-bg`
- `.highlight-pink-bg`
- `.highlight-cyan-bg`
- `.highlight-gray-bg`
- `.highlight-light-gray-bg`

## Features

### Night Mode Support

All highlight colors automatically adjust for night mode to maintain readability and reduce eye strain.

### Print Support

When printing, highlights are converted to bordered text to ensure they remain visible on paper.

### Responsive Design

All highlights work across different screen sizes and devices.

### Real-time Processing

The `===` syntax is processed automatically as you type, making it seamless to use.

## Examples

### Basic Usage with === Syntax

```
Here is some ===green:important information=== that needs to be highlighted.
```

### Multiple Highlights in One Paragraph

```
This paragraph contains ===yellow:key terms===, ===blue:important dates===, and ===red:critical warnings===
```

### Highlighting Different Types of Content

```
===green:Action items:=== Complete the report by Friday
===blue:Discussion points:=== Budget allocation for Q4
===red:Issues:=== Server downtime affecting productivity
```

### Using Background Classes

```html
<div class="highlight-yellow-bg">
  <h3>Important Notice</h3>
  <p>This entire section is highlighted to draw attention.</p>
</div>
```

## Tips

1. **Use the === syntax**: It's the easiest way to add highlights without writing HTML
2. **Use consistently**: Choose a color scheme and stick to it throughout your document
3. **Don't overuse**: Too many highlights can make text hard to read
4. **Consider accessibility**: Ensure sufficient contrast between text and background colors
5. **Print testing**: Test how your highlights look when printed

## Color Meanings (Suggested)

- **Yellow**: General highlights, important information
- **Green**: Positive information, completed tasks, success
- **Blue**: Information, dates, neutral content
- **Red**: Warnings, errors, critical information
- **Orange**: Important notices, attention required
- **Purple**: Creative ideas, brainstorming
- **Pink**: Personal notes, reminders
- **Cyan**: Technical information, code references
- **Gray**: Secondary information, less important content
- **Light Gray**: Subtle emphasis, background information

Remember that these are just suggestions - you can use any color for any purpose that makes sense for your workflow!
