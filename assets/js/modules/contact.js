/**
 * contact.js
 * Composes a mailto: link from the name and message fields and navigates to it.
 */

export function initContactForm() {
  const form    = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = document.getElementById('contact-name').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    const errorEl = document.getElementById('contact-message-error');

    if (!message) {
      errorEl.textContent = 'Please enter a message before sending.';
      document.getElementById('contact-message').focus();
      return;
    }

    errorEl.textContent = '';

    const subject = name
      ? `Message from ${name}`
      : 'Message from your portfolio';

    const body = name
      ? `Hi Gurusabarish,\n\n${message}\n\n— ${name}`
      : message;

    window.location.href =
      `mailto:gurusabarishkumar@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  });
}
