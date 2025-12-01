import React from 'react';
import { FAQS } from '../constants';
import { HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
             <div className="p-3 bg-gray-100 rounded-full">
                <HelpCircle className="w-6 h-6 text-gray-600" />
             </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Perguntas Frequentes</h2>
          <p className="text-gray-500 mt-2">Tire suas dúvidas e comece hoje mesmo.</p>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq) => (
            <div key={faq.id} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-primary/30 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
            <a href="#" className="text-primary font-bold hover:underline">Fale com nosso consultor no WhatsApp</a>
        </div>
      </div>
    </section>
  );
};