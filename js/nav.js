/* ══ STICKY NAV + SCROLL SPY + OVERLAY MENU ══ */

/* Scroll detection for sticky effect */
window.addEventListener('scroll', () => {
  const stuck = window.scrollY > 60;
  document.getElementById('nav').classList.toggle('stuck', stuck);
});

/* ── Scroll Spy (updates both desktop links + overlay links) ── */
(function() {
  const desktopLinks = document.querySelectorAll('.nav-links a[data-section]');
  const overlayLinks = document.querySelectorAll('.nav-overlay-link[data-section]');
  const sectionIds = ['hero', 'about', 'exp', 'skills', 'projects', 'contact'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  function updateActive() {
    let current = 'hero';
    const scrollY = window.scrollY + 120;
    for (const sec of sections) {
      if (sec.offsetTop <= scrollY) {
        current = sec.id;
      }
    }
    // Update desktop nav links
    desktopLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-section') === current);
    });
    // Update overlay nav links
    overlayLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-section') === current);
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
})();

/* ── Menu Overlay Logic (mobile) ── */
(function() {
  const menuBtn = document.getElementById('nav-menu-btn');
  const closeBtn = document.getElementById('nav-close-btn');
  const overlay = document.getElementById('nav-overlay');
  const overlayLinks = document.querySelectorAll('.nav-overlay-link');

  if (!menuBtn || !overlay) return;

  function openMenu() {
    overlay.classList.add('open');
    document.body.classList.add('nav-open');
    menuBtn.style.display = 'none';
  }

  function closeMenu() {
    overlay.classList.remove('open');
    document.body.classList.remove('nav-open');
    // Only show hamburger if we're actually on mobile
    if (window.innerWidth <= 768) {
      menuBtn.style.display = 'flex';
    }
    // Reset link animations for next open
    overlayLinks.forEach(l => {
      l.style.animation = 'none';
      l.offsetHeight; // Trigger reflow
      l.style.animation = '';
    });
  }

  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  // Close on link click
  overlayLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeMenu();
    }
  });
})();
