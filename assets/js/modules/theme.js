/**
 * theme.js
 * Light/dark theme toggle.
 *
 * Default behaviour is "system": the site follows the OS light/dark
 * setting (handled purely in CSS via prefers-color-scheme). Choosing
 * the toggle stores an explicit 'light' or 'dark' preference in
 * localStorage, which pins the theme via [data-theme] on <html> and
 * is restored on the next visit by the inline script in <head>.
 * Choosing the same theme as the OS clears the stored preference and
 * returns to system-following mode.
 */

const STORAGE_KEY = 'theme';

const metaThemeColor = document.querySelector('meta[name="theme-color"]');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

/** Currently effective theme: the stored choice if set, else the OS. */
function effectiveTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return systemDark.matches ? 'dark' : 'light';
}

/** Reflects the active theme in the DOM (toggle icon + theme-color). */
function render() {
  const theme = effectiveTheme();
  document.querySelectorAll('.theme-toggle').forEach((btn) => {
    const toLight = theme === 'dark';
    btn.setAttribute('aria-pressed', String(toLight));
    btn.setAttribute(
      'aria-label',
      toLight ? 'Switch to light mode' : 'Switch to dark mode',
    );
  });
  if (metaThemeColor) {
    metaThemeColor.content = theme === 'dark' ? '#0f0f10' : '#ffffff';
  }
}

export function initTheme() {
  document.querySelectorAll('.theme-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = effectiveTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;

      // If the explicit choice matches the OS preference, there is no
      // need to persist it — drop back to system-following mode so the
      // site keeps tracking OS changes automatically.
      if (next === (systemDark.matches ? 'dark' : 'light')) {
        localStorage.removeItem(STORAGE_KEY);
        delete document.documentElement.dataset.theme;
      } else {
        localStorage.setItem(STORAGE_KEY, next);
      }

      render();
    });
  });

  // Keep the toggle icon and theme-color in sync when the OS theme
  // changes while the site is in system-following mode.
  systemDark.addEventListener('change', render);

  render();
}
