// MENU INTERATIVO - LÓGICA
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('navLinks');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('ativo');
    nav.classList.toggle('aberto');
  });
});
