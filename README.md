# emile personal website

## Structure

```
├── index.html          # Homepage with navigation
├── world.html          # World section
├── venture.html        # Venture section
├── events.html         # Events section
├── community.html      # Community section
├── style.css           # All styles
└── script.js           # JavaScript functionality
```

## Customization Guide

### Adding Images

Replace the image placeholders in each section page:

```html
<!-- Replace this: -->
<div class="image-placeholder">
    [Add your image here]
</div>

<!-- With this: -->
<img src="path/to/your/image.jpg" alt="Description" style="max-width: 100%; height: auto;">
```

### Editing Content

1. **Section Titles**: Update the text inside `<h2 class="section-title">` tags
2. **Paragraphs**: Edit text inside `<p>` tags in `.section-content` divs
3. **List Items**: Modify the `.item-title`, `.item-date`, and `.item-description` for each project/event/initiative

### Styling

All styles are in `style.css`. Key variables:

- **Purple color**: `#9b59b6` (used throughout)
- **Background**: `#000000` (black)
- **Terminal background**: `#1a1a1a`
- **Font**: `'Courier New', monospace`

## Deploying to GitHub Pages

1. Create a new repository named `yourusername.github.io`
2. Upload all files to the repository
3. Go to repository Settings → Pages
4. Under "Source", select "Deploy from a branch"
5. Select the `main` branch and `/ (root)` folder
6. Click Save
7. Your site will be available at `https://yourusername.github.io`

## File Organization Tips

- Store images in an `images/` or `assets/` folder
- Use relative paths: `<img src="images/photo.jpg">`
- Keep image file sizes optimized for web (compress before uploading)
- Include embedded videos or interactive elements
- Add a blog section with dated posts

## Browser Compatibility

This site uses standard HTML, CSS, and JavaScript and works on all modern browsers.
