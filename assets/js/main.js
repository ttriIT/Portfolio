// Smooth reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('in');
  });
}, { threshold: 0.15 });

Array.from(document.querySelectorAll('.card, .section__title, .post')).forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Counters
function animateCounter(el) {
  const target = Number(el.dataset.target || 0);
  let current = 0;
  const step = Math.max(1, Math.floor(target / 60));
  const tick = () => {
    current += step;
    if (current >= target) { el.textContent = target; return; }
    el.textContent = current;
    requestAnimationFrame(tick);
  };
  tick();
}
Array.from(document.querySelectorAll('.counter')).forEach(el => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounter(el); io.disconnect(); } });
  }, { threshold: 0.6 });
  io.observe(el);
});

// Carousel
const track = document.querySelector('.carousel__track');
if (track) {
  document.querySelectorAll('.carousel__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      track.scrollBy({ left: 320 * Number(btn.dataset.dir), behavior: 'smooth' });
    });
  });
}

// Modal for projects
function createModal(title, desc) {
  const modal = document.createElement('div');
  modal.className = 'card glass';
  Object.assign(modal.style, { position:'fixed', inset:'auto 24px 24px 24px', maxWidth:'680px', margin:'0 auto', zIndex:999 });
  modal.innerHTML = `<h3 style="margin-top:0">${title}</h3><p>${desc}</p><button class="btn btn--secondary" id="closeModal">Đóng</button>`;
  document.body.appendChild(modal);
  document.getElementById('closeModal').onclick = () => modal.remove();
}

document.querySelectorAll('.project .btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.currentTarget.closest('.project');
    createModal(card.dataset.title, card.dataset.desc);
  });
});

// Testimonials auto rotate
const quotes = Array.from(document.querySelectorAll('.quote'));
let qi = 0;
if (quotes.length) {
  setInterval(() => {
    quotes[qi].classList.remove('active');
    qi = (qi + 1) % quotes.length;
    quotes[qi].classList.add('active');
  }, 3500);
}

// Subtle parallax for project background
track?.addEventListener('scroll', () => {
  document.querySelectorAll('.project__bg').forEach((bg, i) => {
    const rect = bg.getBoundingClientRect();
    const offset = rect.left / window.innerWidth;
    bg.style.transform = `translateY(${offset * 12}px)`;
  });
});