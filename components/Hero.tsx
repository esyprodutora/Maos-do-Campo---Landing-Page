import React from 'react';
import { ChevronRight, ShieldCheck, TrendingUp, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Hero: React.FC = () => {
  const { domRef, isVisible } = useScrollReveal();

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1625246333195-58f2164436eb?q=80&w=2070&auto=format&fit=crop" 
          alt="Lavoura de alta tecnologia" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-primary/20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content - Sales Copy */}
        <div className="w-full lg:w-1/2 text-white space-y-8 text-center lg:text-left pt-10 lg:pt-0">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-secondary text-sm font-bold animate-fade-in-up">
            <Star className="w-4 h-4 fill-secondary" />
            Software Eleito #1 em Gestão Rural Simplificada
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Sua Fazenda na <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-secondary">
              Palma da Mão.
            </span>
          </h1>
          
          <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            Abandone as planilhas complexas. Tenha controle total de custos, manejo e produtividade em segundos. <strong className="text-white font-semibold">Mais lucro, menos dor de cabeça.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative overflow-hidden bg-primary hover:bg-green-600 text-white text-lg px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-green-900/50 flex items-center justify-center gap-3 group transform hover:scale-[1.02]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              COMEÇAR AGORA
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
               onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
               className="px-10 py-5 rounded-2xl font-bold text-white border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              Ver Funcionalidades
            </button>
          </div>

          <div className="pt-4 flex items-center gap-2 justify-center lg:justify-start text-sm text-gray-400">
             <ShieldCheck className="w-5 h-5 text-secondary" />
             <span>Garantia de 30 dias com Risco Zero</span>
          </div>
        </div>

        {/* Right Content - Ultra Premium Mockup */}
        <div 
          ref={domRef}
          className={`w-full lg:w-1/2 flex justify-center lg:justify-end reveal ${isVisible ? 'active' : ''}`}
        >
          <div className="relative">
            {/* Glow effect behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] rounded-full"></div>
            
            <div className="relative w-[320px] h-[650px] bg-gray-950 rounded-[3.5rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden ring-1 ring-white/20">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-36 bg-black rounded-b-2xl z-30"></div>
              
              {/* Screen Content */}
              <div className="w-full h-full bg-gray-50 flex flex-col relative overflow-hidden">
                {/* Header */}
                <div className="h-24 bg-gradient-to-b from-green-800 to-green-700 p-6 pt-10 text-white flex justify-between items-start">
                    <div>
                        <p className="text-xs text-green-200 opacity-80">Olá, Produtor</p>
                        <p className="font-bold text-lg">Fazenda Santa Fé</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 backdrop-blur-md"></div>
                </div>

                {/* Dashboard Content */}
                <div className="flex-1 p-5 space-y-5 overflow-hidden">
                    {/* Main Profit Card */}
                    <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group">
                        <div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                            <TrendingUp size={80} className="text-primary" />
                        </div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Lucro Projetado (Safra 24/25)</p>
                        <p className="text-4xl font-black text-gray-900 mt-2 tracking-tight">R$ 1.2M</p>
                        <div className="mt-3 inline-flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg border border-green-100">
                             <TrendingUp size={14} className="text-green-600" />
                             <span className="text-xs font-bold text-green-700">+18% vs 2023</span>
                        </div>
                    </div>

                    {/* Quick Actions Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-primary/10 p-4 rounded-2xl flex flex-col justify-center items-center gap-2 border border-primary/20">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                                <span className="font-bold text-lg">N</span>
                            </div>
                            <span className="text-xs font-bold text-gray-700">Nova Safra</span>
                        </div>
                         <div className="bg-orange-50 p-4 rounded-2xl flex flex-col justify-center items-center gap-2 border border-orange-100">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-orange-500">
                                <span className="font-bold text-lg">$</span>
                            </div>
                            <span className="text-xs font-bold text-gray-700">Custos</span>
                        </div>
                    </div>

                    {/* Chart Mockup */}
                    <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                            <p className="font-bold text-gray-800 text-sm">Cotação Soja (Saca 60kg)</p>
                            <span className="text-xs text-gray-400">Hoje</span>
                        </div>
                        <div className="h-24 w-full flex items-end justify-between gap-2 px-1">
                            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                <div key={i} className="w-full bg-green-100 rounded-t-sm relative group hover:bg-primary transition-colors">
                                    <div style={{height: `${h}%`}} className="absolute bottom-0 w-full bg-primary rounded-t-sm group-hover:bg-green-800 transition-colors"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Notification Floating */}
                    <div className="absolute bottom-6 left-6 right-6 bg-gray-900/90 backdrop-blur-md text-white p-3 rounded-xl shadow-2xl flex items-center gap-3 border border-gray-700 animate-bounce-subtle">
                         <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                         <p className="text-xs font-medium">Alerta: Chuva prevista para plantio amanhã.</p>
                    </div>
                </div>
              </div>
            </div>

            {/* Floating Elements around phone */}
            <div className="absolute -right-12 top-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden lg:block animate-float">
                <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                        <ShieldCheck className="text-green-600 w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-bold">Economia Gerada</p>
                        <p className="text-lg font-extrabold text-gray-900">R$ 42.500,00</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};