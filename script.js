/* ============================================================
   SCRIPT.JS
   ------------------------------------------------------------
   You shouldn't need to edit this file to add content -- that
   all lives in content.js. This file just:
     1. draws a jar button for every chapter in CHAPTERS
     2. draws a wood plank under each row of jars automatically
     3. opens/closes the card when a jar is clicked
   ============================================================ */

const shelfGrid = document.getElementById("shelf-grid");
const shelfWrap = document.getElementById("shelf-wrap");
const overlay = document.getElementById("overlay");
const card = document.getElementById("card");
const cardClose = document.getElementById("card-close");
const cardLeaf = document.getElementById("card-leaf");
const cardTitle = document.getElementById("card-title");
const cardTeaType = document.getElementById("card-tea-type");
const cardDescription = document.getElementById("card-description");
const cardImpact = document.getElementById("card-impact");

let lastFocusedJar = null;

// ---- 1. render jars from content.js ----
CHAPTERS.forEach((chapter, index) => {
  const jar = document.createElement("button");
  jar.className = "jar";
  jar.type = "button";
  jar.style.setProperty("--delay", `${index * 40 + 150}ms`);
  jar.setAttribute("aria-label", `open ${chapter.title}`);
  jar.dataset.id = chapter.id;

  jar.innerHTML = `
    <span class="jar-image-wrap">
      <img src="${chapter.jarImage}" alt="${chapter.altText || ""}" />
    </span>
    <span class="jar-label">${chapter.title}</span>
  `;

  jar.addEventListener("click", () => openCard(chapter, jar));
  shelfGrid.appendChild(jar);
});

// ---- 2. draw wood planks under each row ----
// Works for any number of columns/rows, so reordering or adding
// chapters in content.js never needs a manual layout fix.
function drawPlanks() {
  // remove any planks from a previous draw (e.g. after resize)
  shelfWrap.querySelectorAll(".shelf-plank").forEach((p) => p.remove());

  const jars = Array.from(shelfGrid.querySelectorAll(".jar"));
  if (jars.length === 0) return;

  const wrapTop = shelfWrap.getBoundingClientRect().top;

  // group jars into rows by their top position
  const rows = [];
  jars.forEach((jar) => {
    const rect = jar.getBoundingClientRect();
    const top = Math.round(rect.top);
    let row = rows.find((r) => Math.abs(r.top - top) < 10);
    if (!row) {
      row = { top, bottom: rect.bottom };
      rows.push(row);
    } else {
      row.bottom = Math.max(row.bottom, rect.bottom);
    }
  });

  rows.forEach((row) => {
    const plank = document.createElement("div");
    plank.className = "shelf-plank";
    const bottomRelativeToWrap = row.bottom - wrapTop;
    plank.style.top = `${bottomRelativeToWrap + 14}px`;
    shelfWrap.appendChild(plank);
  });
}

// redraw on load (after fonts/images affect layout) and on resize
window.addEventListener("load", drawPlanks);
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(drawPlanks, 120);
});
// also draw once immediately in case images are already cached
drawPlanks();
setTimeout(drawPlanks, 300); // safety re-draw once web fonts settle

// ---- 3. open / close the card ----
function openCard(chapter, jarEl) {
  lastFocusedJar = jarEl;

  cardLeaf.src = chapter.leafImage;
  cardLeaf.alt = chapter.altText ? `close-up of ${chapter.altText}` : "";
  cardTitle.textContent = chapter.title;
  cardTeaType.textContent = chapter.teaType;
  cardDescription.textContent = chapter.description;
  cardImpact.textContent = chapter.impact;

  // tint the card faintly with this chapter's accent color
  card.style.background = `linear-gradient(${chapter.accentColor}22, ${chapter.accentColor}22), var(--card-bg)`;

  overlay.classList.add("is-open");
  card.classList.add("is-open");
  document.addEventListener("keydown", onKeydown);
  cardClose.focus();
}

function closeCard() {
  overlay.classList.remove("is-open");
  card.classList.remove("is-open");
  document.removeEventListener("keydown", onKeydown);
  if (lastFocusedJar) lastFocusedJar.focus();
}

function onKeydown(e) {
  if (e.key === "Escape") closeCard();
}

cardClose.addEventListener("click", closeCard);
overlay.addEventListener("click", closeCard);
