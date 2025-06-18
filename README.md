# iA Writer Courier Prime Template

A custom template for iA Writer that uses the beautiful **Courier Prime** monospace font with enhanced highlighting capabilities.

## 🎯 Overview

This template transforms iA Writer's default appearance by:

- Using **Courier Prime** as the primary font family
- Adding **10 different highlight colors** beyond the default yellow
- Providing a clean, distraction-free writing environment
- Supporting both light and dark modes
- Including print-optimized styles

## ✨ Features

### Typography

- **Courier Prime** monospace font family
- Regular, italic, bold, and bold italic variants
- Optimized line spacing and typography
- Clean, readable design

### Enhanced Highlighting System

The template extends iA Writer's default highlighting with **10 different colors**:

| Color             | Usage                              | Example                 |
| ----------------- | ---------------------------------- | ----------------------- |
| 🟡 **Yellow**     | General highlights                 | `===yellow:text===`     |
| 🟢 **Green**      | Positive information, action items | `===green:text===`      |
| 🔵 **Blue**       | Neutral content, information       | `===blue:text===`       |
| 🔴 **Red**        | Warnings, errors, critical info    | `===red:text===`        |
| 🟠 **Orange**     | Important notices                  | `===orange:text===`     |
| 🟣 **Purple**     | Creative ideas                     | `===purple:text===`     |
| 🩷 **Pink**        | Personal notes                     | `===pink:text===`       |
| 🔷 **Cyan**       | Technical information              | `===cyan:text===`       |
| ⚫ **Gray**       | Secondary information              | `===gray:text===`       |
| ⚪ **Light Gray** | Subtle emphasis                    | `===light-gray:text===` |

### Smart Features

- **Real-time processing** of highlight syntax
- **Night mode support** with automatic color adjustments
- **Print optimization** (highlights convert to bordered text)
- **Responsive design** for different screen sizes

## 🚀 Quick Start

### Installation

1. **Download** the template folder
2. **Double-click** the `Courier.iatemplate` file
3. **Select** "Courier Prime" from iA Writer's template menu
4. **Start writing** with enhanced highlighting!

### Using Highlights

The easiest way to add highlights is using the `===` syntax:

```
===green:Action items===
===red:Important warning===
===blue:Information note===
```

## 📖 Usage Guide

### Highlight Syntax

Use the simple `===color:text===` format:

```markdown
Here is some ===green:important information=== that needs attention.

This paragraph contains ===yellow:key terms===, ===blue:important dates===, and ===red:critical warnings===
```

### Advanced Usage

For more control, you can use HTML classes:

```html
<span class="highlight-green">Custom highlighted text</span>
<div class="highlight-blue-bg">Entire section with background</div>
<mark class="highlight-orange">Highlighted with mark element</mark>
```

### Color Scheme Examples

**Project Management:**

```
===green:Completed tasks===
===blue:In progress===
===red:Blocked items===
===orange:Deadlines===
```

**Note-taking:**

```
===yellow:Key concepts===
===green:Action items===
===blue:Questions===
===purple:Ideas===
```

## 🛠️ Technical Details

### File Structure

```
Courier.iatemplate/
├── Contents/
│   ├── Info.plist              # Template metadata
│   └── Resources/
│       ├── document.html       # Main document template
│       ├── header.html         # Document header
│       ├── footer.html         # Document footer
│       ├── title.html          # Title page
│       ├── font/               # Font definitions
│       ├── style/              # CSS styling
│       ├── highlight-processor.js  # Highlight processing
│       └── HIGHLIGHT_USAGE.md  # Detailed usage guide
```

### CSS Architecture

- **Normalize.css** - Cross-browser consistency
- **Font styles** - Courier Prime font definitions
- **Core styles** - Typography and layout
- **Highlight styles** - Color system
- **Override styles** - Custom modifications

## 🎨 Customization

### Adding New Colors

To add custom highlight colors, edit the CSS files in the `style/` directory:

```css
.highlight-custom {
  background-color: #your-color;
  color: #text-color;
}
```

### Modifying Typography

Adjust font settings in `font/font-courier-prime.css`:

```css
@font-face {
  font-family: "Courier Prime";
  font-weight: 400;
  src: local("Courier Prime"), url("YourFont.ttf");
}
```

## 📱 Compatibility

- **iA Writer** for macOS (version 5.0+)
- **macOS** 10.11 or later
- Supports both **light and dark modes**
- **Print-friendly** output

## 🤝 Contributing

Contributions are welcome! Please feel free to:

1. **Report bugs** or suggest improvements
2. **Submit pull requests** with enhancements
3. **Share** your custom color schemes
4. **Improve** documentation

## 📄 License

This template is provided as-is for personal and educational use. The Courier Prime font is licensed separately - please respect the original font license.

## 🙏 Acknowledgments

- **Courier Prime** font by [Quote Unquote Apps](https://quoteunquoteapps.com/courierprime/)
- **iA Writer** by Information Architects
- **Highlight system** inspired by modern note-taking apps

## 📞 Support

For questions or issues:

- Check the `HIGHLIGHT_USAGE.md` file for detailed documentation
- Review the template structure in the `Resources/` folder
- Ensure you're using a compatible version of iA Writer

---
