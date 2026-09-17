/**
 * external-links.js
 * Appends a visually-hidden "(opens in new tab)" hint to every link that
 * opens in a new tab, so screen-reader users get the same context change
 * warning that sighted users infer from the target attribute.
 */

export function initExternalLinks() {
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    if (link.querySelector('.new-tab-hint')) return;

    const hint = document.createElement('span');
    hint.className = 'sr-only new-tab-hint';
    hint.textContent = ' (opens in new tab)';
    link.appendChild(hint);
  });
}
