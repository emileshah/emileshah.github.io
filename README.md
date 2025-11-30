# 🌏 The Crossroads

A minimalist, global, intersection-themed personal website showcasing the convergence of diplomacy, venture work, writing, and events.

## 🚀 Quick Setup for GitHub Pages

### 1. Upload Files to Your Repository

Place these files in your GitHub repository:
```
your-repo/
├── index.html
├── styles.css
├── script.js
└── README.md
```

### 2. Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select your main branch
4. Click "Save"
5. Your site will be live at: `https://yourusername.github.io/your-repo/`

### 3. Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

## 🎨 Customization Guide

### Update Personal Information

**In `index.html`:**

1. **Contact Information** (line ~270):
   ```html
   <a href="mailto:your-email@example.com" class="footer-link">Contact</a>
   ```

2. **Content Cards**: Update the cards in each section (Diplomacy, Venture, Thought, Events) with your actual projects and experiences.

3. **Meta Description** (line 6):
   ```html
   <meta name="description" content="Your custom description">
   ```

### Modify Color Scheme

**In `styles.css` (lines 8-13):**

```css
:root {
    --diplomacy: #4FC3F7;  /* Change to your preferred blue */
    --venture: #D4FF47;    /* Change to your preferred green */
    --thought: #C77DFF;    /* Change to your preferred purple */
    --event: #FFB347;      /* Change to your preferred orange */
}
```

### Add More Sections

To add a new path/section:

1. Add a new color variable in CSS
2. Create a new thread in the SVG background
3. Add a new path node on the homepage
4. Create a new view section
5. Update the navigation array in `script.js`

## 🎯 Features

- **Animated Thread System**: Flowing neon lines that connect all paths
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Smooth Navigation**: Page transitions with path highlighting
- **Keyboard Navigation**: Use arrow keys to navigate between sections
- **Interactive Cards**: Hover effects with subtle 3D tilt
- **Timeline View**: Chronological event display
- **Easter Egg**: Try the Konami code! ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, animations, grid layout
- **Vanilla JavaScript**: No dependencies
- **SVG**: Animated thread system
- **Google Fonts**: Inter & Spectral

## 🎭 Design Philosophy

The Crossroads presents multifaceted life as intersecting paths rather than scattered identities:

- **90% Black & White**: Minimalist base
- **10% Neon Accents**: Strategic color highlights
- **Large Typography**: 48-64px headlines, 16-18px body
- **Generous Whitespace**: Breathing room for content
- **Geometric Precision**: Diagonal paths converging at center

## 📝 Content Structure

### Homepage (Intersection Map)
Central nexus with four branching paths representing different aspects of life.

### Diplomacy Path (Azure)
Cross-cultural leadership, international conferences, global collaboration.

### Venture Path (Lime)
Entrepreneurship, innovation, startup ecosystem involvement.

### Thought Path (Violet)
Political analysis, cultural reflections, long-form writing.

### Event Crossings (Orange)
Timeline of hosted events with impact metrics.

## 🚧 Future Enhancements

- [ ] Dark mode toggle
- [ ] Multi-language support (EN/JP)
- [ ] Scroll-based path animations
- [ ] Node-based skill graph
- [ ] Blog integration
- [ ] Project case studies with images

## 📄 License

Feel free to use this template for your personal website. Attribution appreciated but not required.

## 🤝 Contributing

This is a personal website template, but suggestions and improvements are welcome!

---

**Built with intention. Where paths converge, possibilities emerge.**
