import React from 'react';
import { FEATURES, TONICO_AVATAR_URL, TONICO_FALLBACK_URL } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export const Features: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = TONICO_FALLBACK_URL;
  };

  return (
    <section id="features" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-3 bg-green-50 pr-4 pl-2 py-1.5 rounded-full mb-6 border border-green-100 shadow-sm">
                {/* BADGE FEATURES AUMENTADO E COM IMAGEM */}
                <div className="w-10 h-10 rounded-full overflow-hidden border border-secondary/50 shadow-sm bg-white">
                   <img 
                     src={TONICO_AVATAR_URL} 
                     alt="Tonico" 
                     className="w-full h-full object-cover" 
                     onError={handleImageError}
                   />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Conheça o Tonico IA</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                Tecnologia de Ponta, <br/> <span className="text-primary">Linguagem do Campo.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
                Juntamos a gestão completa da safra com o <strong>Tonico</strong>, seu braço direito na lavoura que entende de pragas, mercado e clima.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ feature: any, delay: number }> = ({ feature, delay }) => {
  const { domRef, isVisible } = useScrollReveal();
  const Icon = feature.icon;

  return (
    <div 
      ref={domRef}
      className={`group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden reveal ${isVisible ? 'active' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-50 to-green-50 rounded-bl-[4rem] -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500 ease-out z-0"></div>

      <div className="relative z-10">
        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 shadow-sm">
            <Icon className="w-7 h-7 text-gray-700 group-hover:text-white transition-colors duration-300" />
        </div>
        
        <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
        
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
            {feature.description}
        </p>
      </div>

      <div className="relative z-10 mt-auto">
        <a href="#pricing" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all group-hover:text-green-700">
            Falar com Tonico <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};