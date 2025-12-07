document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#waiting-list-form');
  const container = document.querySelector('.waitlist-container');

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      const action = form.getAttribute('action');

      try {
        const response = await fetch(action, {
          method: 'POST',
          body: formData,
          mode: 'no-cors' // MailerLite usually redirects, so no-cors avoids error but limits response reading
        });

        // Since 'no-cors' returns an opaque response, we assume success if no network error occurred.
        // For a better UX with MailerLite JSONP, we might need a different approach, 
        // but standard POST with no-cors is a common simple pattern.
        // Alternatively, we can just show the success message.

        container.innerHTML = "<p style='color: var(--primary); font-weight: bold; margin-top: 1rem;'>✅ Thank you for joining the iOS waiting list! We'll notify you when the app is ready.</p>";

      } catch (error) {
        console.error('Error:', error);
        container.innerHTML = "<p style='color: #ff6b6b; margin-top: 1rem;'>❌ Oops! Something went wrong. Please try again later.</p>";
      }
    });
  }
});