const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

document.querySelectorAll('.click-video').forEach(container => {
  const video = container.querySelector('video');
  video.controls = true;
  container.addEventListener('click', (event) => {
    const bounds = video.getBoundingClientRect();
    const clickedControlBar = event.target === video && event.clientY > bounds.bottom - 48;
    if (clickedControlBar) return;
    if (video.paused) video.play();
    else video.pause();
  });
  video.addEventListener('play', () => container.classList.add('is-playing'));
  video.addEventListener('pause', () => container.classList.remove('is-playing'));
});
