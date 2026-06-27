/**
 * contact.js
 * Composes a mailto: link from the name and message fields and navigates to it.
 */

export function initContactForm() {
  const sendBtn = document.getElementById('sendMailBtn');
  if (!sendBtn) return;

  sendBtn.addEventListener('click', () => {
    const name    = document.getElementById('contact-name').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!message) {
      document.getElementById('contact-message').focus();
      return;
    }

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
