import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Guarantee: React.FC = () => {
  const { domRef, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#27AE60_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div 
                ref={domRef}
                className={`bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl shadow-primary/10 border border-gray-100 text-center reveal ${isVisible ? 'active' : ''}`}
            >
                <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-green-50">
                    <Award className="w-12 h-12 text-primary" />
                </div>
                
                <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                    Garantia Blindada de 30 Dias
                </h3>
                
                <div className="w-16 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>

                <p className="text-gray-600 mb-8 leading-relaxed text-lg max-w-2xl mx-auto">
                    Nós assumimos todo o risco. Assine agora e use todas as ferramentas premium na sua fazenda. Se em <strong className="text-gray-900">30 dias</strong> você não sentir que sua gestão melhorou drasticamente, nós devolvemos <strong className="text-primary">100% do seu dinheiro</strong>.
                </p>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm font-medium text-gray-500">
                    <span className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-primary" /> Sem letras miúdas
                    </span>
                    <span className="hidden md:block w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-primary" /> Reembolso imediato
                    </span>
                    <span className="hidden md:block w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-primary" /> Risco Zero
                    </span>
                </div>
            </div>
        </div>
    </section>
  );
};