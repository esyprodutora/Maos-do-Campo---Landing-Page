import React from 'react';
import { ShieldCheck, Award, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Guarantee: React.FC = () => {
  const { domRef, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-24 relative overflow-hidden border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div 
                ref={domRef}
                className={`bg-white rounded-[2rem] p-8 md:p-12 text-center border-2 border-dashed border-gray-200 relative reveal ${isVisible ? 'active' : ''}`}
            >
                {/* Badge Absolute Positioned */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg ring-8 ring-white">
                    <Award className="w-10 h-10 text-white" />
                </div>
                
                <div className="mt-8">
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                        Garantia Incondicional de 30 Dias
                    </h3>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg max-w-2xl mx-auto">
                        Assine o Mãos do Campo hoje. Se em até 30 dias você não estiver economizando dinheiro e tempo na sua lavoura, nós devolvemos <strong className="text-primary font-bold">100% do seu investimento</strong>. Sem perguntas, sem burocracia.
                    </p>
                    
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                        <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg border border-green-100">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-sm font-bold text-gray-700">Risco Zero</span>
                        </div>
                        <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg border border-green-100">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-sm font-bold text-gray-700">Reembolso via Pix</span>
                        </div>
                        <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg border border-green-100">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-sm font-bold text-gray-700">Suporte Dedicado</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};