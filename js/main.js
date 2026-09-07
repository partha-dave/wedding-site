(() => {
  const track = document.getElementById('heroTrack');
  const prevBtn = document.getElementById('heroPrev');
  const nextBtn = document.getElementById('heroNext');
  const dots = document.querySelectorAll('#heroDots .hero__dot');
  if (!track) return;

  const slideCount = dots.length;
  let index = 0;
  let timer = null;

  function render() {
    track.style.marginLeft = `-${index * 25}%`;
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
  }

  function go(delta) {
    index = (index + delta + slideCount) % slideCount;
    render();
  }

  function startTimer() {
    timer = setInterval(() => go(1), 5000);
  }

  function nudge(delta) {
    clearInterval(timer);
    startTimer();
    go(delta);
  }

  prevBtn.addEventListener('click', () => nudge(-1));
  nextBtn.addEventListener('click', () => nudge(1));

  render();
  startTimer();
})();
