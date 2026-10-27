// The rescue gallery uses a local illustration until Hana's real photos arrive.
document.querySelectorAll('.replaceable-photo').forEach((img) => {
  const frame = img.closest('.photo-frame');
  const markLoaded = () => {
    if (!img.src.endsWith('hana-illustration.svg') && img.naturalWidth > 0) frame?.classList.add('has-photo');
  };
  const useFallback = () => {
    if (img.dataset.fallback && !img.src.endsWith(img.dataset.fallback)) img.src = img.dataset.fallback;
  };
  img.addEventListener('load', markLoaded);
  img.addEventListener('error', useFallback);
  if (img.complete) { if (img.naturalWidth > 0) markLoaded(); else useFallback(); }
});
const menu = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
menu?.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  links?.classList.toggle('open', !expanded);
});
links?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  links.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
}));
const themeSwitch = document.getElementById('theme-switch');
themeSwitch?.addEventListener('click', () => document.body.classList.toggle('dark-mode'));
