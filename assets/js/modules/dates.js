/**
 * dates.js
 * Fills all dynamic date/duration elements on the page.
 * Depends on: duration.js
 */

import { calcDuration } from './duration.js';

/** Fills every [data-start][data-end] element with its computed duration. */
export function fillTimelineDurations() {
  document.querySelectorAll('[data-start]').forEach((el) => {
    el.textContent = calcDuration(el.dataset.start, el.dataset.end);
  });
}

/** Updates the hero section with the Zoho tenure stat and subtitle. */
export function fillHeroStats() {
  const zohoTotal = calcDuration('2022-04', 'present');
  const zohoNum   = parseInt(zohoTotal, 10);

  const statEl = document.getElementById('stat-zoho-years');
  if (statEl) statEl.innerHTML = `${zohoTotal.split(' ')[0]}<span>+</span>`;

  const subtitleEl = document.getElementById('hero-zoho-years');
  if (subtitleEl) subtitleEl.textContent = `about ${zohoNum} years`;
}

/** Updates the career-total span in the experience section header. */
export function fillCareerTotal() {
  const el = document.getElementById('career-total');
  if (el) el.textContent = calcDuration('2021-02', 'present');
}
