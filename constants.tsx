import { Sprout, DollarSign, Map, TrendingUp, ShieldCheck, Zap, Users, Lock } from 'lucide-react';
import { Feature, PricingPlan, Testimonial, FAQItem } from './types';

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Precisão Cirúrgica de Insumos",
    description: "Nossa IA analisa o solo e clima para recomendar a dose exata. Reduza custos com defensivos em até 25% na primeira safra.",
    icon: Sprout
  },
  {
    id: 2,
    title: "Raio-X Financeiro",
    description: "Abandone as planilhas complexas. Veja o Custo Real por Hectare e sua margem de lucro líquida atualizada em tempo real.",
    icon: DollarSign
  },
  {
    id: 3,
    title: "Vigilância via Satélite",
    description: "Identifique manchas de solo, pragas e estresse hídrico antes que virem prejuízo. Seus olhos em cada metro da fazenda.",
    icon: Map
  },
  {
    id: 4,
    title: "Inteligência de Mercado",
    description: "Não venda no escuro. Receba alertas de tendências de preço da Soja e Café para travar a venda no pico da alta.",
    icon: TrendingUp
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 1,
    name: "Safra Mensal",
    price: "R$ 29,90",
    period: "/mês",
    originalPrice: "R$ 69,90",
    features: ["Gestão de até 200 Hectares", "Controle Financeiro Básico", "Suporte via Email", "Sem fidelidade"],
    ctaText: "Testar Mensal",
    isPopular: false
  },
  {
    id: 2,
    name: "Plano Anual Pro",
    originalPrice: "R$ 358,80",
    price: "R$ 19,90",
    savings: "Economize R$ 120,00/ano",
    period: "/mês (Cobrado anualmente)",
    features: ["Hectares Ilimitados", "IA de Recomendação de Solo", "Relatórios para Bancos", "Suporte Prioritário"],
    ctaText: "Escolher Anual",
    isPopular: true
  },
  {
    id: 3,
    name: "MEMBRO FUNDADOR",
    originalPrice: "R$ 2.997,00",
    price: "R$ 247,00",
    savings: "92% OFF - Lote Final",
    period: "/PAGAMENTO ÚNICO",
    features: ["ACESSO VITALÍCIO (Sem mensalidades)", "Todas as atualizações futuras grátis", "Grupo Secreto de Produtores", "Consultoria de Onboarding"],
    ctaText: "QUERO ACESSO ETERNO",
    isPopular: false // Tratamento visual customizado no componente
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Eduardo",
    role: "Soja 2.500 Ha - Sorriso/MT",
    content: "Eu achava que tinha controle, mas o Mãos do Campo me mostrou que eu deixava R$ 300/ha na mesa por ineficiência. O sistema se pagou em 2 dias.",
    avatar: "https://picsum.photos/seed/carlos/100/100"
  },
  {
    id: 2,
    name: "Ana Beatriz",
    role: "Café Especial - Sul de Minas",
    content: "O visual é lindo e muito fácil. Meu pai de 70 anos usa no tablet dele. A previsão de custos acertou em cheio nossa safra passada.",
    avatar: "https://picsum.photos/seed/anabeatriz/100/100"
  },
  {
    id: 3,
    name: "Eng. Ricardo M.",
    role: "Consultor Agronômico",
    content: "Recomendo a todos meus clientes. A função de satélite economiza dias de vistoria no campo. É uma ferramenta de precisão obrigatória.",
    avatar: "https://picsum.photos/seed/ricardo/100/100"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "O plano Vitalício é realmente único pagamento?",
    answer: "Sim! Ao garantir a oferta de Membro Fundador, você paga uma única vez e tem acesso para sempre ao software, incluindo todas as novas ferramentas que lançarmos no futuro, sem pegadinhas."
  },
  {
    id: 2,
    question: "Funciona sem internet no meio do talhão?",
    answer: "Perfeitamente. Desenvolvemos uma tecnologia 'Offline-First'. Você lança os dados no campo e o app sincroniza tudo quando chegar na sede ou pegar sinal 4G."
  },
  {
    id: 3,
    question: "Tenho garantia se não me adaptar?",
    answer: "Você tem 30 DIAS de garantia incondicional. Use na sua safra. Se não ver valor real, devolvemos 100% do seu dinheiro. O risco é todo nosso."
  },
  {
    id: 4,
    question: "Consigo migrar meus dados de planilhas?",
    answer: "Sim, temos uma ferramenta de importação rápida. Além disso, no plano Vitalício, nossa equipe ajuda você a configurar sua fazenda inicial."
  }
];