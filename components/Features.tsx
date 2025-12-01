import React from 'react';
import { FEATURES } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
                <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Tecnologia de Ponta</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    O fim da "achismo" <br/> na sua lavoura.
                </h3>
            </div>
            <p className="text-gray-600 text-lg max-w-md leading-relaxed">
                Transformamos dados complexos em decisões simples que colocam dinheiro no seu bolso.
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
      className={`relative bg-white rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 border border-gray-100 group overflow-hidden reveal ${isVisible ? 'active' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-white rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
            <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
        </div>
        
        <h4 className="text-xl font-bold text-gray-900 mb-4 pr-4">{feature.title}</h4>
        
        <p className="text-gray-500 leading-relaxed text-sm mb-8">
            {feature.description}
        </p>

        <div className="flex items-center text-primary font-bold text-sm gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Saiba mais <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
};