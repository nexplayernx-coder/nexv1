// ================================================
// CATÁLOGO - EDITE SEUS FILMES AQUI
// COMO ADICIONAR? COPIE O BLOCO DE { } E COLE EMBAIXO
// ================================================

const CATALOGO_CONFIG = {
  // >>> CATEGORIAS DO TOPO - EDITE AQUI
  categorias: ["Ação Extrema", "Ficção Futuro", "Drama Real", "Comédia Top", "Aventura 2025", "Suspense Total"],

  // >>> LISTA DE FILMES - EDITE AQUI
  filmes: [
    {
      // >>> TROQUE A CAPA AQUI: link ou ./assets/images/nome.jpg
      capa: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300",
      // >>> NOME DO FILME
      titulo: "Ação Extrema",
      categoria: "Ação Extrema"
    },
    {
      capa: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300",
      titulo: "Ficção Futuro",
      categoria: "Ficção Futuro"
    },
    {
      capa: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300",
      titulo: "Drama Real",
      categoria: "Drama Real"
      },
    {
      capa: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300",
      titulo: "Ryan Teste",
      categoria: "Drama Real"
    }
  ]
};

if (typeof window !== 'undefined') window.CATALOGO_CONFIG = CATALOGO_CONFIG;
