/**
 * duration.js
 * Utility — calculates a human-readable time span between two month strings.
 */

/**
 * @param {string} startStr - Start date in "YYYY-MM" format.
 * @param {string} endStr   - End date in "YYYY-MM" format, or "present".
 * @returns {string} e.g. "2 yrs 3 mos"
 */
export function calcDuration(startStr, endStr) {
  const [sy, sm] = startStr.split('-').map(Number);
  let ey, em;

  if (endStr === 'present') {
    const now = new Date();
    ey = now.getFullYear();
    em = now.getMonth() + 1;
  } else {
    [ey, em] = endStr.split('-').map(Number);
  }

  let months = (ey - sy) * 12 + (em - sm) + 1;
  if (months < 1) months = 1;

  const yrs = Math.floor(months / 12);
  const mos = months % 12;

  if (yrs === 0) return `${mos} mos`;
  if (mos === 0) return `${yrs} ${yrs === 1 ? 'yr' : 'yrs'}`;
  return `${yrs} ${yrs === 1 ? 'yr' : 'yrs'} ${mos} mos`;
}
