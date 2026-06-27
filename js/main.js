// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

reveals.forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 0.08 + 's';
  revealObserver.observe(el);
});

// Mobile nav toggle
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

menuBtn.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuBtn.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuBtn.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Calculate duration between two month strings (e.g. '2022-04', 'present')
function calcDuration(startStr, endStr) {
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
  if (yrs === 0) return mos + ' mos';
  if (mos === 0) return yrs + (yrs === 1 ? ' yr' : ' yrs');
  return yrs + (yrs === 1 ? ' yr ' : ' yrs ') + mos + ' mos';
}

// Fill timeline durations
document.querySelectorAll('[data-start]').forEach(el => {
  el.textContent = calcDuration(el.dataset.start, el.dataset.end);
});

// Hero stat: total time at Zoho (from Apr 2022)
const zohoYrs = calcDuration('2022-04', 'present');
document.getElementById('stat-zoho-years').innerHTML = zohoYrs.split(' ')[0] + '<span>+</span>';

// Hero subtitle: years at Zoho in natural language
const zohoNum = parseInt(calcDuration('2022-04', 'present'));
document.getElementById('hero-zoho-years').textContent = 'about ' + zohoNum + ' years';

// Career total (from Feb 2021)
document.getElementById('career-total').textContent = calcDuration('2021-02', 'present');

// Contact form → prefilled mailto
document.getElementById('sendMailBtn').addEventListener('click', () => {
  const name = document.getElementById('contact-name').value.trim();
  const message = document.getElementById('contact-message').value.trim();
  if (!message) {
    document.getElementById('contact-message').focus();
    return;
  }
  const subject = name ? `Message from ${name}` : 'Message from your portfolio';
  const body = name
    ? `Hi Gurusabarish,\n\n${message}\n\n— ${name}`
    : message;
  window.location.href = `mailto:gurusabarishkumar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
