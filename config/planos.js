// ================================================
// PLANOS - EDITE SEUS PREÇOS AQUI
// COPIE UM BLOCO PARA CRIAR UM NOVO PLANO
// ================================================

const PLANOS_CONFIG = [
  {
    // >>> NOME DO PLANO
    nome: "Básico",
    preco: "R$ 14,90",
    periodo: "/ mês • 1 tela",
    destaque: false, // true = mostra "MAIS VENDIDO"
    beneficios: [
      "Qualidade Full HD e 4K",
      "Filmes, Séries e Futebol",
      "Funciona em TV, Celular e PC",
      "Suporte 24h"
    ]
  },
  {
    nome: "Trimestral",
    preco: "R$ 44,90",
    periodo: "/ 3 meses • 2 telas",
    destaque: true,
    beneficios: [
      "Tudo do Básico + 2 telas",
      "Economia de 25%",
      "Estabilidade máxima",
      "Ativação imediata"
    ]
  },
  {
    nome: "Família",
    preco: "R$ 50,90",
    periodo: "/ mês • 4 telas",
    destaque: false,
    beneficios: [
      "4 telas simultâneas",
      "Ideal para família",
      "Perfis independentes",
      "Suporte prioritário"
    ]
  }
];

if (typeof window !== 'undefined') window.PLANOS_CONFIG = PLANOS_CONFIG;
