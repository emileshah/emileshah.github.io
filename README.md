# tea leaf — personal site

A static, no-framework site: plain HTML, CSS, and JavaScript. No build step —
just open `index.html` in a browser, or push the folder to GitHub
Pages / Netlify / Vercel as-is.

## Files you'll actually touch

| File | What it's for |
|---|---|
| `content.js` | **Everything about each chapter.** Add, remove, reorder, or edit a jar here. This is the only file you need for content changes. |
| `styles.css` | The `:root { --bg-color: ... }` block at the top controls colors for the whole site. Fonts are set there too. |
| `images/jars/*.svg`, `images/leaves/*.svg` | Placeholder art — see below. |

## About the placeholder images

Everything in `images/` right now is a deliberately simple flat-vector
placeholder (a colored jar shape + label, a colored leaf shape) so you can
see the whole site working and use it as a **reference for scale, color, and
placement** while you make the real art.

To replace one:
1. Make your image at roughly the same canvas proportions as the placeholder
   — jars are portrait (about 4:5), leaves are square. PNG with a
   **transparent background** is recommended so they sit cleanly on the
   shelf/card.
2. Save it with the **same file name** as the placeholder it's replacing
   (e.g. `images/jars/matcha-jar.svg` → your file, even if you change the
   extension to `.png`, just update the path for that chapter in
   `content.js`).
3. Refresh the page — no other code changes needed.

Optional extras you can also swap or delete:
- `images/shelf-plank.svg` — the wood strip under each row of jars.
- `images/decor/*.svg` — the small potted plant / teacup / books. Delete
  the corresponding `<img class="decor ...">` line in `index.html` if you
  don't want one.
- `favicon.svg` — the browser tab icon.
- A background paper/linen texture is **not** included by default (the site
  just uses a flat cream color). To add one, drop an image at
  `images/texture.png` and see the commented instructions in `styles.css`
  under `body { ... }`.

## Adding a new chapter

Open `content.js` and copy one of the objects in the `CHAPTERS` array,
paste it wherever you want it to appear on the shelf (array order = shelf
order), and fill in the fields. Make the two matching images and you're
done — the shelf grid, wood planks, and opened card all update
automatically, on any screen size.

## Notes

- Text is written lowercase throughout on purpose (site style), with a CSS
  `text-transform: lowercase` safety net in case you forget.
- Jars are real `<button>` elements, so they're keyboard-focusable and can
  be opened with Enter/Space. `Esc`, the × button, or a click outside the
  card all close it.
- The wood planks are positioned by measuring the actual rows of jars in
  `script.js`, so they stay correct no matter how many chapters you add or
  what width screen someone's on.
