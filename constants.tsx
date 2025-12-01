import { Sprout, DollarSign, Map, TrendingUp, ShieldCheck, Zap, Users, Lock, Smartphone, Leaf } from 'lucide-react';
import { Feature, PricingPlan, Testimonial, FAQItem } from './types';

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Economia de Insumos",
    description: "Nossa IA cruza dados de solo e clima para recomendar a dose exata. Produtores relatam economia de até 25% em defensivos na 1ª safra.",
    icon: Sprout
  },
  {
    id: 2,
    title: "Raio-X Financeiro",
    description: "Chega de contas de padaria. Saiba exatamente seu Custo por Hectare e Margem Líquida em tempo real, na palma da mão.",
    icon: DollarSign
  },
  {
    id: 3,
    title: "Vigilância Satelital",
    description: "Monitore o vigor da vegetação (NDVI) sem pisar no talhão. Identifique pragas e falhas de plantio antes que virem prejuízo.",
    icon: Map
  },
  {
    id: 4,
    title: "Venda na Alta",
    description: "Receba alertas de mercado da Soja e Café. Saiba a hora exata de travar seu preço e garanta o melhor lucro da região.",
    icon: TrendingUp
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 1,
    name: "Mensal",
    price: "R$ 29,90",
    originalPrice: "R$ 49,90",
    period: "/mês",
    features: ["Até 200 Hectares", "Controle Financeiro Básico", "Suporte via Email", "Cancele quando quiser"],
    ctaText: "Começar Mensal",
    isPopular: false
  },
  {
    id: 2,
    name: "Anual Pro",
    price: "R$ 19,90",
    originalPrice: "R$ 358,80",
    savings: "Economize 33%",
    period: "/mês (Cobrado anualmente)",
    features: ["Hectares Ilimitados", "IA de Recomendação", "Relatórios Bancários", "Suporte Prioritário"],
    ctaText: "Escolher Anual",
    isPopular: true
  },
  {
    id: 3,
    name: "MEMBRO FUNDADOR",
    price: "R$ 247,00",
    originalPrice: "R$ 2.997,00",
    savings: "R$ 2.750 DE DESCONTO",
    period: "/PAGAMENTO ÚNICO",
    features: ["ACESSO VITALÍCIO (Eterno)", "Sem mensalidades nunca mais", "Consultoria Inicial Grátis", "Grupo VIP de Produtores", "Todas as atualizações futuras"],
    ctaText: "GARANTIR ACESSO ETERNO",
    isPopular: false // Custom styling handles distinct look
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "João V. Medeiros",
    role: "Soja 1.800 Ha - Sorriso/MT",
    content: "Eu perdia dinheiro sem saber. Só no ajuste de adubação que o app sugeriu, paguei o plano vitalício umas 50 vezes. É indispensável.",
    avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 2,
    name: "Ana Clara Souza",
    role: "Café Especial - Sul de Minas",
    content: "Simples e direto. Meu pai tem 68 anos e usa no tablet sozinho. A previsão de custos bateu centavo por centavo com o real.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: 3,
    name: "Ricardo Mendes",
    role: "Consultor Agronômico",
    content: "Indico para todos meus clientes. A função de satélite me economiza dias de visita técnica. Ferramenta de precisão absoluta.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "O acesso vitalício é realmente para sempre?",
    answer: "Sim! Ao adquirir o plano Membro Fundador, você paga uma única vez e o software é seu para sempre. Sem renovações, sem taxas ocultas e sem mensalidades. Inclui todas as melhorias futuras."
  },
  {
    id: 2,
    question: "Preciso de internet no campo?",
    answer: "Não para lançar dados. O aplicativo funciona 'Offline-First'. Você registra tudo no talhão e ele sincroniza automaticamente quando o celular encontrar sinal Wi-Fi ou 4G."
  },
  {
    id: 3,
    question: "E se eu não gostar?",
    answer: "Risco zero. Oferecemos uma garantia incondicional de 30 dias. Use na sua safra, teste tudo. Se não achar que valeu a pena, devolvemos 100% do seu dinheiro via Pix na hora."
  },
  {
    id: 4,
    question: "Serve para pequenas propriedades?",
    answer: "Perfeitamente. O Mãos do Campo foi desenhado para escalar. Temos clientes com 5 hectares de hortifruti e clientes com 10.000 hectares de soja. A gestão financeira é vital para ambos."
  }
];