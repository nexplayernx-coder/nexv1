// ================================================
// CORES DO SITE - TROQUE AS CORES AQUI
// ================================================

const CORES_CONFIG = {
  // >>> COR PRINCIPAL (roxo neon)
  primaria: "#8b5cf6",
  // >>> COR DE FUNDO
  fundo: "#0a0a0f",
  // >>> COR DOS CARDS
  card: "#15151f",
};

if (typeof document !== 'undefined') {
  const root = document.documentElement;
  root.style.setProperty('--cor-primaria', CORES_CONFIG.primaria);
  root.style.setProperty('--cor-fundo', CORES_CONFIG.fundo);
  root.style.setProperty('--cor-card', CORES_CONFIG.card);
}
if (typeof window !== 'undefined') window.CORES_CONFIG = CORES_CONFIG;
