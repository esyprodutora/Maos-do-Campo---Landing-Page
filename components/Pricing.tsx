import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check, Crown, AlertTriangle, Clock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Pricing: React.FC = () => {
    const { domRef, isVisible } = useScrollReveal();

  return (
    <section id="pricing" className="py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50 -skew-y-3 transform origin-top-left -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Investimento Inteligente</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Escolha seu plano de crescimento
          </h3>
          <p className="text-gray-600 text-lg">
            Cancele a qualquer momento. Sem contratos complicados. Apenas resultados.
          </p>
        </div>

        <div 
            ref={domRef}
            className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-center reveal ${isVisible ? 'active' : ''}`}
        >
          {PRICING_PLANS.map((plan, index) => {
             // Lógica de design diferenciado para o plano Vitalício (index 2)
             const isLifetime = index === 2;
             const isAnnual = index === 1;

             return (
                <div 
                  key={plan.id} 
                  className={`relative flex flex-col h-full rounded-3xl transition-all duration-300 ${
                    isLifetime 
                      ? 'bg-gray-900 text-white shadow-2xl scale-105 border-2 border-secondary ring-4 ring-secondary/20 z-10' 
                      : isAnnual 
                        ? 'bg-white text-gray-900 shadow-xl border border-gray-200 lg:-mr-4 z-0 lg:py-10'
                        : 'bg-white text-gray-900 shadow-lg border border-gray-100 lg:-mr-4 z-0 lg:scale-95'
                  }`}
                >
                  {isLifetime && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <span className="bg-gradient-to-r from-secondary to-yellow-300 text-gray-900 font-black px-6 py-2 rounded-full text-sm shadow-lg flex items-center gap-2 uppercase tracking-wide">
                            <Crown size={16} className="fill-black" />
                            Oferta Exclusiva
                        </span>
                    </div>
                  )}

                  {isAnnual && !isLifetime && (
                    <div className="absolute top-5 right-5">
                         <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Popular</span>
                    </div>
                  )}
                  
                  <div className="p-8 pb-0">
                    <h4 className={`text-xl font-bold mb-2 ${isLifetime ? 'text-secondary' : 'text-gray-500'}`}>{plan.name}</h4>
                    
                    {/* Anchoring */}
                    {plan.originalPrice && (
                        <div className={`text-sm line-through font-medium mb-1 ${isLifetime ? 'text-gray-500' : 'text-gray-400'}`}>
                            De {plan.originalPrice}
                        </div>
                    )}
                    
                    <div className="flex items-baseline gap-1">
                      <span className={`text-5xl font-extrabold tracking-tight ${isLifetime ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                      <span className={`text-sm font-medium ${isLifetime ? 'text-gray-400' : 'text-gray-500'}`}>{plan.period}</span>
                    </div>

                    {plan.savings && (
                        <div className={`mt-4 inline-block px-3 py-1 rounded-lg text-xs font-bold ${
                            isLifetime 
                                ? 'bg-red-600/20 text-red-400 border border-red-500/30' 
                                : 'bg-green-100 text-green-700'
                        }`}>
                            {plan.savings}
                        </div>
                    )}
                  </div>

                  <div className="p-8 flex-1">
                    <hr className={`border-t mb-8 ${isLifetime ? 'border-gray-800' : 'border-gray-100'}`} />
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`mt-0.5 rounded-full p-0.5 ${isLifetime ? 'bg-secondary text-black' : 'bg-green-100 text-primary'}`}>
                             <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className={`text-sm font-medium ${isLifetime ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-8 pt-0">
                    <button 
                        className={`w-full py-4 rounded-xl font-bold transition-all duration-200 uppercase tracking-wide flex items-center justify-center gap-2 ${
                        isLifetime 
                            ? 'bg-gradient-to-r from-secondary to-yellow-400 hover:to-yellow-300 text-gray-900 shadow-lg shadow-yellow-500/20 transform hover:-translate-y-1' 
                            : 'bg-primary hover:bg-green-700 text-white shadow-md'
                        }`}
                    >
                        {plan.ctaText}
                    </button>
                    
                    {isLifetime && (
                        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                             <Clock size={14} className="text-red-400" />
                             <span className="text-red-400 font-bold">Poucas vagas restantes neste lote</span>
                        </div>
                    )}
                     {!isLifetime && (
                        <div className="mt-4 text-center text-xs text-gray-400 h-4">
                            
                        </div>
                    )}
                  </div>
                </div>
             );
          })}
        </div>
        
        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto text-center md:text-left">
            <div className="flex items-center gap-4 mb-4 md:mb-0 justify-center">
                <div className="p-3 bg-white rounded-full shadow-sm text-blue-600">
                    <AlertTriangle />
                </div>
                <div>
                    <h4 className="font-bold text-gray-900">Dúvida sobre qual escolher?</h4>
                    <p className="text-sm text-gray-600">Fale com nosso especialista agronômico agora.</p>
                </div>
            </div>
            <a href="#" className="text-blue-600 font-bold hover:underline">Chamar no WhatsApp &rarr;</a>
        </div>
      </div>
    </section>
  );
};