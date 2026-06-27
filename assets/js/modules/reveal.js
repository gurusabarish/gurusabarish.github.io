/**
 * reveal.js
 * Scroll Reveal — fades in .reveal elements as they enter the viewport.
 * Skipped entirely when the user prefers reduced motion.
 */

export function initReveal() {
  const reveals = document.querySelectorAll('.reveal');

  // Respect user's motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    observer.observe(el);
  });
}
