export function initFormValidation() {
  const form = document.getElementById('contactForm');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    form.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    const name = form.name;
    if (name.value.trim() === '') {
      showError(name, 'To pole jest wymagane');
      isValid = false;
    }

    const email = form.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
      showError(email, 'To pole jest wymagane');
      isValid = false;
    } else if (!emailRegex.test(email.value)) {
      showError(email, 'Podaj poprawny adres e-mail');
      isValid = false;
    }

    const subject = form.subject;
    if (subject.value.trim() === '') {
      showError(subject, 'To pole jest wymagane');
      isValid = false;
    }

    const message = form.message;
    if (message.value.trim() === '') {
      showError(message, 'To pole jest wymagane');
      isValid = false;
    }

    const consent = form.consent;
    if (!consent.checked) {
      showError(consent, 'Musisz wyrazić zgodę');
      isValid = false;
    }

    if (isValid) {
      alert('Dziękujemy za przesłanie wiadomości!');
      form.reset();
    }

    function showError(input, message) {
      const errorSpan = input.parentElement.querySelector('.error-message');
      if (errorSpan) errorSpan.textContent = message;
    }
  });
}
