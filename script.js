const menu = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('open', open);
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('open');
}));
document.getElementById('theme-btn')?.addEventListener('click', () => document.body.classList.toggle('dark'));
const modal = document.getElementById('lightbox');
const modalImg = document.getElementById('lightbox-image');
document.querySelectorAll('.gallery-image').forEach(button => {
  button.addEventListener('click', () => {
    modalImg.src = button.dataset.image;
    modalImg.alt = button.dataset.alt;
    modal.showModal();
  });
});
document.getElementById('lightbox-close')?.addEventListener('click', () => modal.close());
modal?.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });

const walletCopyButton = document.getElementById('copy-wallet');
walletCopyButton?.addEventListener('click', async () => {
  const walletInput = document.getElementById('hana-wallet');
  const status = document.getElementById('copy-status');
  let copied = false;
  try {
    await navigator.clipboard.writeText(walletInput.value);
    copied = true;
  } catch (_) {
    walletInput.focus();
    walletInput.select();
    try { copied = document.execCommand('copy'); } catch (_) {}
    walletInput.setSelectionRange(0, 0);
    walletInput.blur();
  }
  status.textContent = copied ? 'Wallet address copied.' : 'Copy not available. Select the address above to copy it.';
});
