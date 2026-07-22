// JUNTA TUDO E RENDERIZA PLANOS
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('planosContainer');
  if (container && window.PLANOS_CONFIG) {
    container.innerHTML = "";
    window.PLANOS_CONFIG.forEach(plano => {
      const div = document.createElement('div');
      div.className = `plano-card ${plano.destaque ? 'destaque' : ''}`;
      div.innerHTML = `
        ${plano.destaque ? '<div class="selo">MAIS VENDIDO</div>' : ''}
        <h3>${plano.nome}</h3>
        <h2>${plano.preco} <small style="font-size:14px;color:#a1a1aa">${plano.periodo}</small></h2>
        <ul style="margin:16px 0; list-style:none; color:#a1a1aa; font-size:14px;">
          ${plano.beneficios.map(b => `<li>• ${b}</li>`).join('')}
        </ul>
        <button class="btn-plano" onclick="abrirWhatsapp('${plano.nome}')">Escolher plano</button>
      `;
      container.appendChild(div);
    });
  }
});
