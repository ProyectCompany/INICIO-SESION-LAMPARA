const cur = document.getElementById('cur');
const card = document.getElementById('card');
const ropeBtn = document.getElementById('rope-btn');
const lampWrap = document.getElementById('lamp-wrap');
const hint = document.getElementById('hint');

let lampOn = false;

document.addEventListener('mousemove', e => {
  cur.style.left = e.clientX + 'px';
  cur.style.top  = e.clientY + 'px';

  if (card && document.body.classList.contains('lamp-on')) {
    const mx = (e.clientX - window.innerWidth  / 2) / 55;
    const my = (e.clientY - window.innerHeight / 2) / 55;
    card.style.transform = `perspective(900px) rotateY(${mx}deg) rotateX(${-my}deg)`;
  }
});

document.addEventListener('mousedown', () => {
  cur.style.width = '16px';
  cur.style.height = '16px';
  cur.style.background = 'rgba(143,245,255,.2)';
});

document.addEventListener('mouseup', () => {
  cur.style.width = '22px';
  cur.style.height = '22px';
  cur.style.background = 'transparent';
});

ropeBtn.addEventListener('mouseenter', () => {
  cur.style.borderColor = '#ffe082';
  cur.style.boxShadow   = '0 0 14px #ffe082';
});

ropeBtn.addEventListener('mouseleave', () => {
  cur.style.borderColor = '#8ff5ff';
  cur.style.boxShadow   = '0 0 10px #8ff5ff';
});

ropeBtn.addEventListener('click', () => {
  lampOn = !lampOn;

  lampWrap.classList.add('pulling');
  setTimeout(() => lampWrap.classList.remove('pulling'), 280);

  lampWrap.classList.remove('swinging');
  void lampWrap.offsetWidth;
  lampWrap.classList.add('swinging');
  setTimeout(() => lampWrap.classList.remove('swinging'), 1400);

  if (lampOn) {
    document.body.classList.add('flickering');
    setTimeout(() => {
      document.body.classList.remove('flickering');
      document.body.classList.add('lamp-on');
    }, 670);
    hint.textContent = '← LAMP ON — PULL AGAIN TO TURN OFF';
  } else {
    document.body.classList.remove('lamp-on', 'flickering');
    hint.textContent = '← PULL THE CORD TO ILLUMINATE';
  }
});

// Toggle password visibility
const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');

if (passwordInput && togglePassword) {
  togglePassword.addEventListener('click', () => {
    const isHidden = passwordInput.type === 'password';
    passwordInput.type = isHidden ? 'text' : 'password';
    togglePassword.textContent = isHidden ? 'visibility_off' : 'visibility';
  });
}