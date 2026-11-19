const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

function closeMenu({ returnFocus = false } = {}) {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
  navigation.classList.remove('open');
  if (returnFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  if (isOpen) {
    closeMenu({ returnFocus: true });
    return;
  }
  menuButton.setAttribute('aria-expanded', 'true');
  menuButton.setAttribute('aria-label', 'Fechar menu');
  navigation.classList.add('open');
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    const mobileMenuIsVisible = menuButton.getClientRects().length > 0;
    closeMenu({ returnFocus: mobileMenuIsVisible });
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu({ returnFocus: true });
  }
});

document.addEventListener('click', (event) => {
  if (menuButton.getAttribute('aria-expanded') === 'true' &&
      !navigation.contains(event.target) && !menuButton.contains(event.target)) {
    closeMenu();
  }
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
const contactStatus = document.querySelector('#form-status');
const submitButton = document.querySelector('#contact-submit');
const validation = {
  name: {
    field: document.querySelector('#contact-name'),
    error: document.querySelector('#name-error'),
    validate: (value) => value.trim().length >= 2 ? '' : 'Informe seu nome.'
  },
  email: {
    field: document.querySelector('#contact-email'),
    error: document.querySelector('#email-error'),
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? '' : 'Informe um e-mail válido.'
  },
  subject: {
    field: document.querySelector('#contact-subject'),
    error: document.querySelector('#subject-error'),
    validate: (value) => value ? '' : 'Selecione um assunto.'
  },
  message: {
    field: document.querySelector('#contact-message'),
    error: document.querySelector('#message-error'),
    validate: (value) => value.trim().length >= 5 ? '' : 'Escreva uma mensagem com pelo menos 5 caracteres.'
  }
};

function validateField(name) {
  const item = validation[name];
  const errorMessage = item.validate(item.field.value);
  item.error.textContent = errorMessage;
  item.field.setAttribute('aria-invalid', String(Boolean(errorMessage)));
  return !errorMessage;
}

Object.entries(validation).forEach(([name, item]) => {
  const eventName = name === 'subject' ? 'change' : 'input';
  item.field.addEventListener(eventName, () => {
    validateField(name);
    contactStatus.textContent = '';
  });
  item.field.addEventListener('blur', () => validateField(name));
});

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const invalidFields = Object.keys(validation).filter((name) => !validateField(name));
  if (invalidFields.length) {
    contactStatus.textContent = 'Confira os campos destacados para continuar.';
    validation[invalidFields[0]].field.focus();
    return;
  }
  await sendForm(contactForm, contactStatus, submitButton, `Contato pelo site \u2014 ${validation.subject.field.value}`, 'Enviar mensagem');
});
}

async function sendForm(form, status, button, subject, idleLabel) {
  const label = button.firstChild;
  button.disabled = true;
  button.setAttribute('aria-busy', 'true');
  if (label) label.textContent = 'Enviando\u2026 ';
  status.textContent = 'Enviando sua mensagem\u2026';
  try {
    const fields = Object.fromEntries(new FormData(form));
    fields._subject = subject;
    fields._replyto = fields.email;
    const response = await fetch('https://formsubmit.co/ajax/consultorianeo@negociosecarreira.com.br', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(fields)
    });
    const result = await response.json();
    if (!response.ok || result.success !== true && result.success !== 'true') throw new Error('Envio recusado');
    status.textContent = 'Mensagem enviada. Obrigado por entrar em contato com a Neo!';
    form.reset();
    form.querySelectorAll('[aria-invalid="true"]').forEach((field) => field.setAttribute('aria-invalid', 'false'));
    form.querySelectorAll('.field-error').forEach((field) => { field.textContent = ''; });
  } catch {
    status.textContent = 'N\u00e3o foi poss\u00edvel enviar agora. Tente novamente ou escreva para consultorianeo@negociosecarreira.com.br.';
  } finally {
    button.disabled = false;
    button.removeAttribute('aria-busy');
    if (label) label.textContent = `${idleLabel} `;
  }
}



document.addEventListener('click', (event) => {
  const playButton = event.target.closest('.video-embed-button');
  if (!playButton) return;
  const videoId = playButton.dataset.videoId;
  if (!/^[a-zA-Z0-9_-]{11}$/.test(videoId || '')) return;
  const frame = document.createElement('iframe');
  frame.src = 'https://www.youtube-nocookie.com/embed/' + videoId + '?autoplay=1&rel=0';
  frame.title = playButton.dataset.videoTitle || 'Video da Neo';
  frame.loading = 'lazy';
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen = true;
  frame.className = 'video-player';
  const poster = playButton.parentElement.querySelector('img');
  if (poster && playButton.closest('.home-video-frame')) poster.remove();
  playButton.replaceWith(frame);
});
