import React from 'react';
import { TESTIMONIALS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Star, Quote } from 'lucide-react';

export const SocialProof: React.FC = () => {
    const { domRef, isVisible } = useScrollReveal();

  return (
    <section id="testimonials" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[100px] rounded-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-secondary/5 blur-[100px] rounded-full opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">O que diz quem já <br/> <span className="text-primary">plantou e colheu usando o app.</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Não é conversa. São produtores rurais que pararam de perder dinheiro em detalhes simples.
          </p>
        </div>

        <div 
            ref={domRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 reveal ${isVisible ? 'active' : ''}`}
        >
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 text-secondary fill-secondary" />
                    ))}
                  </div>
                  <Quote className="text-white/20 w-8 h-8 group-hover:text-primary transition-colors" />
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed font-light text-lg">"{t.content}"</p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary/50" />
                <div>
                  <p className="font-bold text-white text-base">{t.name}</p>
                  <p className="text-xs text-primary uppercase tracking-wider font-bold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <Stat number="+10 Mil" label="Produtores Ativos" />
            <Stat number="10" label="Culturas Disponíveis" />
            <Stat number="+20%" label="Lucro Real (Média)" />
            <Stat number="4.9" label="Nota na Loja" />
        </div>
      </div>
    </section>
  );
};

const Stat: React.FC<{number: string, label: string}> = ({number, label}) => (
    <div className="p-4">
        <p className="text-4xl md:text-5xl font-black text-white mb-2">{number}</p>
        <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">{label}</p>
    </div>
);