// ABRE WHATSAPP USANDO NÚMERO DO /config/site.js
function abrirWhatsapp(planoNome = "") {
  const config = window.SITE_CONFIG;
  const msg = encodeURIComponent(config.mensagemWhatsapp + planoNome);
  const url = `https://wa.me/${config.whatsapp}?text=${msg}`;
  window.open(url, '_blank');
}
