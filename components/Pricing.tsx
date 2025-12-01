import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check, Crown, AlertTriangle, Clock, Zap, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Pricing: React.FC = () => {
    const { domRef, isVisible } = useScrollReveal();

  return (
    <section id="pricing" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Mais barato que um saco de adubo</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Custa menos que um erro <br/>de aplicação.
          </h3>
          <p className="text-gray-600 text-lg">
            Um único hectare mal planejado dá mais prejuízo que o acesso vitalício. O Mãos do Campo se paga na primeira economia que você fizer.
          </p>
        </div>

        <div 
            ref={domRef}
            className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto reveal ${isVisible ? 'active' : ''}`}
        >
          {PRICING_PLANS.map((plan, index) => {
             const isLifetime = index === 2; // O plano vitalício é o terceiro
             const isAnnual = index === 1;

             return (
                <div 
                  key={plan.id} 
                  className={`relative flex flex-col h-full rounded-[2rem] transition-all duration-300 ${
                    isLifetime 
                      ? 'bg-[#0f1115] text-white shadow-2xl shadow-black/20 scale-105 border border-yellow-500/30 z-10 overflow-hidden' 
                      : isAnnual 
                        ? 'bg-white text-gray-900 shadow-xl border-2 border-primary/10 lg:py-10 z-0'
                        : 'bg-white text-gray-900 shadow-lg border border-gray-100 lg:scale-95 z-0 opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* Badge Exclusivo para Lifetime */}
                  {isLifetime && (
                    <>
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600"></div>
                        <div className="absolute -right-12 top-6 bg-yellow-400 text-black text-xs font-black px-12 py-1 rotate-45 shadow-sm uppercase tracking-widest z-20">
                            ÚLTIMO LOTE
                        </div>
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent pointer-events-none"></div>
                    </>
                  )}

                  {isAnnual && !isLifetime && (
                     <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-100 text-green-800 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide border border-green-200">
                        O Mais Escolhido
                    </div>
                  )}
                  
                  <div className="p-8 pb-0 relative z-10">
                    <div className="flex justify-between items-start mb-4">
                        <h4 className={`text-lg font-bold ${isLifetime ? 'text-yellow-400' : 'text-gray-500 uppercase tracking-wider'}`}>{plan.name}</h4>
                        {isLifetime && <Crown className="text-yellow-400 w-6 h-6 fill-yellow-400/20" />}
                    </div>
                    
                    {/* Preço */}
                    <div className="flex flex-col">
                        {plan.originalPrice && (
                            <span className={`text-sm line-through font-medium ${isLifetime ? 'text-gray-500' : 'text-gray-400'}`}>
                                De {plan.originalPrice}
                            </span>
                        )}
                        <div className="flex items-baseline gap-1">
                            <span className={`text-4xl md:text-5xl font-black tracking-tight ${isLifetime ? 'text-white' : 'text-gray-900'}`}>
                                {plan.price}
                            </span>
                        </div>
                        <span className={`text-xs font-medium mt-1 ${isLifetime ? 'text-gray-400' : 'text-gray-500'}`}>{plan.period}</span>
                    </div>

                    {plan.savings && (
                        <div className={`mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold w-fit ${
                            isLifetime 
                                ? 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20' 
                                : 'bg-green-100 text-green-700'
                        }`}>
                            {isLifetime && <Zap size={12} fill="currentColor" />}
                            {plan.savings}
                        </div>
                    )}
                  </div>

                  <div className="p-8 flex-1 relative z-10">
                    <hr className={`border-t mb-8 ${isLifetime ? 'border-white/10' : 'border-gray-100'}`} />
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${isLifetime ? 'bg-yellow-400 text-black' : 'bg-green-100 text-green-700'}`}>
                             <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className={`text-sm font-medium ${isLifetime ? 'text-gray-200' : 'text-gray-600'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-8 pt-0 relative z-10">
                    <button 
                        className={`w-full py-4 rounded-xl font-bold transition-all duration-300 uppercase tracking-wide flex items-center justify-center gap-2 group ${
                        isLifetime 
                            ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:to-yellow-300 text-black shadow-lg shadow-yellow-500/20 transform hover:-translate-y-1' 
                            : 'bg-gray-900 hover:bg-primary text-white hover:shadow-lg'
                        }`}
                    >
                        {plan.ctaText}
                        {isLifetime && <span className="group-hover:translate-x-1 transition-transform">→</span>}
                    </button>
                    
                    {isLifetime && (
                        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 animate-pulse">
                             <Clock size={14} className="text-red-400" />
                             <span className="text-red-400 font-bold">Vagas do lote acabando</span>
                        </div>
                    )}
                     {!isLifetime && (
                         <p className="text-center text-xs text-gray-400 mt-4">Cancele quando quiser</p>
                    )}
                  </div>
                </div>
             );
          })}
        </div>
        
        {/* Support Strip */}
        <div className="mt-20 border-t border-gray-200 pt-10 text-center">
            <p className="text-gray-500 mb-4 flex items-center justify-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Pagamento 100% Seguro</span>
            </p>
            <div className="flex justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" className="h-8" />
               <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="Mastercard" className="h-8" />
               <img src="https://logopng.com.br/logos/pix-106.png" alt="Pix" className="h-8" />
            </div>
        </div>
      </div>
    </section>
  );
};