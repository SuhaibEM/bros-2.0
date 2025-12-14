// Close top alert
document.addEventListener('DOMContentLoaded', function() {
  const alertEl = document.getElementById('top-alert');
  const closeBtn = document.getElementById('alert-close');
  const yearEl = document.getElementById('year');

  if(yearEl) yearEl.textContent = new Date().getFullYear();

  if (closeBtn && alertEl) {
    closeBtn.addEventListener('click', function() {
      alertEl.style.transition = 'opacity 280ms ease, transform 280ms ease';
      alertEl.style.opacity = '0';
      alertEl.style.transform = 'translateY(-8px)';
      setTimeout(() => alertEl.remove(), 300);
    });
  }
});

// Demo contact form handler (no backend)
function handleContact(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim()
  };

  // Simple validation
  if (!data.name || !data.email || !data.message) {
    showTemporaryAlert('Please fill all fields.');
    return;
  }

  // Demo: show a success alert (replace with real submit)
  showTemporaryAlert('Thanks, ' + data.name + '! Message received (demo).');

  form.reset();
}

// Create a temporary alert element (reusable)
function showTemporaryAlert(text, timeout = 4000) {
  const tmp = document.createElement('div');
  tmp.className = 'alert';
  tmp.style.position = 'fixed';
  tmp.style.left = '18px';
  tmp.style.right = '18px';
  tmp.style.top = '18px';
  tmp.style.zIndex = 9999;
  tmp.innerHTML = `<div class="alert-content">${text}</div><button class="alert-close" aria-label="close">&times;</button>`;
  document.body.appendChild(tmp);

  tmp.querySelector('.alert-close').addEventListener('click', () => tmp.remove());

  setTimeout(() => {
    tmp.style.transition = 'opacity 260ms ease, transform 260ms ease';
    tmp.style.opacity = '0';
    tmp.style.transform = 'translateY(-8px)';
    setTimeout(() => tmp.remove(), 300);
  }, timeout);
}
