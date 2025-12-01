import { Sprout, DollarSign, Map, TrendingUp, ShieldCheck, Zap, Users, Lock, Smartphone, Leaf, BrainCircuit, Tractor, Layers, Droplets, Wheat, MessageCircle } from 'lucide-react';
import { Feature, PricingPlan, Testimonial, FAQItem } from './types';

// ==================================================================================
// ⚠️ CONFIGURAÇÃO DA IMAGEM DO TONICO
// ==================================================================================

// Arquivo local (Opção 1) - Busca a imagem direto na pasta public do projeto
export const TONICO_AVATAR_URL = "/tonico256.png"; 

// Imagem de reserva (caso o arquivo local não seja encontrado por algum motivo)
export const TONICO_FALLBACK_URL = "https://cdn-icons-png.flaticon.com/512/847/847969.png"; 

// ==================================================================================

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Mapeamento via Satélite",
    description: "Abra o mapa, desenhe seus talhões com o dedo e tenha a área exata calculada. O Tonico já salva a localização para monitorar o clima daquele ponto.",
    icon: Map
  },
  {
    id: 2,
    title: "Tonico: Seu Braço Direito",
    description: "Tirou foto de uma folha manchada? O Tonico analisa e diz se é praga ou doença. Precisa saber a dosagem de NPK? Pergunte ao Tonico. Ele é seu consultor de campo 24h.",
    icon: MessageCircle
  },
  {
    id: 3,
    title: "10 Culturas Prontas",
    description: "Soja, Milho, Café, Cana, Algodão, Arroz, Feijão, Trigo, Laranja e Mandioca. O sistema já sabe as etapas de cada uma, do plantio à colheita.",
    icon: Wheat
  },
  {
    id: 4,
    title: "Ciclo Financeiro Real",
    description: "Lance o custo da semente, do diesel e da mão de obra. O sistema cruza com a cotação do dia e te mostra: Você está tendo lucro ou pagando para trabalhar?",
    icon: TrendingUp
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 1,
    name: "Safra Mensal",
    price: "R$ 29,90",
    originalPrice: "R$ 49,90",
    period: "/mês",
    features: ["Até 200 Hectares", "Mapeamento Google Maps", "Cotações em Tempo Real", "Tira-dúvidas com o Tonico (Básico)"],
    ctaText: "Testar Mensal",
    isPopular: false
  },
  {
    id: 2,
    name: "Safra Semestral",
    price: "R$ 97,00",
    originalPrice: "R$ 179,40",
    savings: "Economia de 46%",
    period: "/semestre (Cobre uma safra inteira)",
    features: ["Hectares Ilimitados", "Todas as 10 Culturas", "Tonico IA Ilimitado (Identifica Pragas)", "Previsão de Lucro Real"],
    ctaText: "Garantir Semestral",
    isPopular: true
  },
  {
    id: 3,
    name: "MEMBRO VITALÍCIO",
    price: "R$ 247,00",
    originalPrice: "R$ 2.997,00",
    savings: "OFERTA ÚNICA: R$ 2.750 OFF",
    period: "/PAGAMENTO ÚNICO",
    features: ["Acesso Vitalício ao Sistema", "Sem mensalidades nunca mais", "Tonico IA Vitalício", "Todas as atualizações futuras", "Grupo VIP de Produtores"],
    ctaText: "QUERO ACESSO VITALÍCIO",
    isPopular: false 
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "João Bertolini",
    role: "Produtor de Soja - MT",
    content: "Mandei a foto de uma lagarta pro Tonico e ele identificou na hora que era a Helicoverpa. Me recomendou o princípio ativo certo e salvou meu talhão 3. Impressionante.",
    avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 2,
    name: "Ricardo Mendes",
    role: "Cafeicultor - MG",
    content: "Eu não tenho paciência pra computador. Mas conversar com o Tonico é igual conversar no Zap. Pergunto 'tá chovendo no talhão de baixo?' e ele me mostra o radar.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 3,
    name: "Eng. Pedro Siqueira",
    role: "Consultor Agrícola",
    content: "O sistema financeiro é ótimo, mas a IA do Tonico é o diferencial. Meus clientes usam para tirar dúvidas rápidas de dosagem quando eu não estou na fazenda.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "Quem é o Tonico?",
    answer: "O Tonico é nossa Inteligência Artificial especializada em agronegócio. Ele foi treinado com milhares de manuais técnicos, bulas de defensivos e dados climáticos. É como ter um agrônomo no bolso 24h."
  },
  {
    id: 2,
    question: "O Tonico identifica pragas por foto?",
    answer: "Sim! No plano Semestral e Vitalício, você aponta a câmera para a folha doente ou para o inseto, e o Tonico analisa a imagem, diz o que é e sugere o tratamento."
  },
  {
    id: 3,
    question: "Serve para quais culturas?",
    answer: "O sistema vem pronto para: Soja, Milho, Café, Cana, Algodão, Arroz, Feijão, Trigo, Laranja e Mandioca. O Tonico também sabe tirar dúvidas sobre pastagem e hortifruti."
  },
  {
    id: 4,
    question: "Precisa de internet na lavoura?",
    answer: "Para lançar despesas, não. Para conversar com o Tonico e enviar fotos para análise, você precisa de conexão (3G/4G ou Wi-Fi), pois ele consulta nosso banco de dados em tempo real."
  }
];