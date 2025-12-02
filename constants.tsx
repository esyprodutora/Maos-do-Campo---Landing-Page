import { Sprout, DollarSign, Map, TrendingUp, ShieldCheck, Zap, Users, Lock, Smartphone, Leaf, BrainCircuit, Tractor, Layers, Droplets, Wheat, MessageCircle } from 'lucide-react';
import { Feature, PricingPlan, Testimonial, FAQItem } from './types';

// ==================================================================================
// CONFIGURAÇÃO DA IMAGEM DO TONICO
// ==================================================================================

// Como você colocou o arquivo 'tonyk.png' na pasta public, o caminho é apenas este:
export const TONICO_AVATAR_URL = "https://github.com/esyprodutora/Maos-do-Campo---Landing-Page/blob/main/public/tonyk.png?raw=true";

// ==================================================================================

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Mapeie Sem Sair do Lugar",
    description: "Adeus trenas e medições manuais. Use o Google Maps integrado para desenhar seus talhões em segundos e ter a área exata para cálculo de insumos.",
    icon: Map
  },
  {
    id: 2,
    title: "Tonico: Seu Agrônomo 24h",
    description: "Viu uma folha estranha? Tire foto. O Tonico identifica pragas, doenças e deficiências na hora, recomendando o que fazer antes que o prejuízo aumente.",
    icon: MessageCircle
  },
  {
    id: 3,
    title: "10 Culturas Prontas",
    description: "O sistema já vem configurado para Soja, Milho, Café e mais 7 culturas. Ele sabe exatamente quais são as etapas de manejo de cada uma.",
    icon: Wheat
  },
  {
    id: 4,
    title: "Saiba Seu Lucro Real",
    description: "Pare de trabalhar no escuro. Lance custos e vendas e veja automaticamente sua margem de lucro por hectare e por saca, atualizado com a cotação do dia.",
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
    features: ["Ideal para testar", "Até 200 Hectares", "Mapeamento via Satélite", "Cotações de Commodities", "Suporte Básico"],
    ctaText: "COMEÇAR MENSAL",
    isPopular: false
  },
  {
    id: 2,
    name: "Safra Semestral",
    price: "R$ 97,00",
    originalPrice: "R$ 179,40",
    savings: "46% DE ECONOMIA",
    period: "/semestre (Valor único)",
    features: ["Cobre a safra inteira", "Hectares Ilimitados", "Tonico IA (Identifica Pragas)", "Gestão Financeira Completa", "Relatórios de Lucratividade"],
    ctaText: "GARANTIR MINHA SAFRA",
    isPopular: true
  },
  {
    id: 3,
    name: "MEMBRO VITALÍCIO",
    price: "R$ 247,00",
    originalPrice: "R$ 2.997,00",
    savings: "ECONOMIZE R$ 2.750 HOJE",
    period: "/PAGAMENTO ÚNICO",
    features: ["Acesso Para Sempre", "Nunca mais pague mensalidade", "Tonico IA Vitalício", "Todas as Atualizações Futuras", "Acesso ao Grupo VIP de Sócios"],
    ctaText: "QUERO ACESSO VITALÍCIO",
    isPopular: false 
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "João Bertolini",
    role: "Produtor de Soja (300ha) - MT",
    content: "Eu perdia muito dinheiro errando a dose de defensivo. Só na primeira safra usando o Tonico para calcular, economizei uns 15 mil reais. O app se pagou no primeiro dia.",
    avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 2,
    name: "Ricardo Mendes",
    role: "Cafeicultor - MG",
    content: "Simples e direto. Não tem aquelas telas complicadas de sistema de escritório. É feito pra quem tá na roça com a mão suja de terra. O mapa funciona que é uma beleza.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 3,
    name: "Eng. Pedro Siqueira",
    role: "Consultor Agrícola",
    content: "Indico para todos os meus clientes pequenos e médios. A organização financeira que o Mãos do Campo traz é fundamental para conseguir crédito no banco depois.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "O aplicativo funciona sem internet?",
    answer: "Sim! Você pode lançar despesas, consultar seus talhões e ver o estoque sem internet. A conexão só é necessária para falar com o Tonico e atualizar as cotações."
  },
  {
    id: 2,
    question: "É difícil de usar? Não sou bom com tecnologia.",
    answer: "Foi feito pensando exatamente nisso. Se você sabe usar o WhatsApp, sabe usar o Mãos do Campo. Os botões são grandes, os textos são claros e o Tonico te ajuda em tudo."
  },
  {
    id: 3,
    question: "O pagamento é seguro?",
    answer: "100% seguro. Usamos a mesma tecnologia de criptografia dos grandes bancos. Você recebe seu acesso no e-mail imediatamente após a confirmação."
  },
  {
    id: 4,
    question: "E se eu não gostar?",
    answer: "Você tem 30 dias de garantia incondicional. Se achar que o app não colocou dinheiro no seu bolso, nós devolvemos 100% do valor pago. O risco é todo nosso."
  }
];
