/* main.js — Emile Personal Site */

// ============================================================
// NAVBAR — scroll state
// ============================================================
(function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  function handleScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
})();

// ============================================================
// HAMBURGER MENU
// ============================================================
(function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
})();

// ============================================================
// ARTICLE FILTER (Articles page)
// ============================================================
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const articleRows = document.querySelectorAll('.article-row');
  if (!filterBtns.length || !articleRows.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tag = btn.dataset.tag;

      articleRows.forEach(row => {
        if (tag === 'all') {
          row.classList.remove('hidden');
        } else {
          const rowTags = row.dataset.tags || '';
          if (rowTags.includes(tag)) {
            row.classList.remove('hidden');
          } else {
            row.classList.add('hidden');
          }
        }
      });
    });
  });
})();

// ============================================================
// INTERSECTION OBSERVER — fade-in on scroll
// ============================================================
(function () {
  const elements = document.querySelectorAll(
    '.article-card, .article-row, .stat-card, .about-block, .sidebar-card'
  );
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  elements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.animationDelay = `${i * 0.05}s`;
    observer.observe(el);
  });
})();