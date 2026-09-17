/**
 * scrollspy.js
 * Tracks which section is currently in view and marks the matching
 * nav link(s) with aria-current="true" so keyboard and screen-reader
 * users always know where they are in the page, in sync with sighted
 * scroll position.
 */

export function initScrollSpy() {
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const links = Array.from(
    document.querySelectorAll('.nav-links a[href^="#"], .mobile-nav-drawer a[href^="#"]')
  );

  if (!sections.length || !links.length || !('IntersectionObserver' in window)) return;

  function setCurrent(id) {
    links.forEach((link) => {
      const isCurrent = link.getAttribute('href') === `#${id}`;
      if (isCurrent) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) setCurrent(visible.target.id);
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
  );

  sections.forEach((section) => observer.observe(section));
}
