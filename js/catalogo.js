// CATÁLOGO DINÂMICO - LÊ DO /config/catalogo.js
document.addEventListener('DOMContentLoaded', () => {
  if (!window.CATALOGO_CONFIG) return;
  const grid = document.getElementById('catalogoGrid');
  const filtros = document.getElementById('filtros');
  CATALOGO_CONFIG.categorias.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filtro-btn';
    btn.textContent = cat;
    btn.onclick = () => {
      document.querySelectorAll('.filtro-btn').forEach(b=>b.classList.remove('ativo'));
      btn.classList.add('ativo');
      const filtrados = CATALOGO_CONFIG.filmes.filter(f=>f.categoria===cat);
      renderizar(filtrados);
    };
    filtros.appendChild(btn);
  });
  function renderizar(filmes) {
    grid.innerHTML = "";
    filmes.forEach(filme => {
      const card = document.createElement('div');
      card.className = 'card-filme';
      card.innerHTML = `<img src="${filme.capa}" alt="${filme.titulo}"><p>${filme.titulo}</p>`;
      grid.appendChild(card);
    });
  }
  renderizar(CATALOGO_CONFIG.filmes);
});
