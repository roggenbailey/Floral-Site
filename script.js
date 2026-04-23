function handleSubmit(e) {
  e.preventDefault();
  const name  = document.getElementById('Name').value.trim();
  const email = document.getElementById('Email').value.trim();
  if (!name || !email) {
    alert('Please fill in your name and email.');
    return;
  }
  document.getElementById('form-confirm').style.display = 'block';
  const btn = document.querySelector('.contactForm .servicesbtn');
  btn.textContent = 'Sent!';
  btn.style.opacity = '0.6';
  btn.style.cursor = 'default';
  btn.onclick = null;
}