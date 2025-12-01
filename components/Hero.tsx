import React from 'react';
import { ChevronRight, ShieldCheck, TrendingUp, Star, PlayCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Hero: React.FC = () => {
  const { domRef, isVisible } = useScrollReveal();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-gray-900">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1625246333195-58f2164436eb?q=80&w=2070&auto=format&fit=crop" 
          alt="Agricultura de precisão" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-primary/10"></div>
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-white space-y-8 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-secondary text-sm font-semibold animate-fade-in hover:bg-white/10 transition-colors cursor-default">
            <Star className="w-4 h-4 fill-secondary text-secondary" />
            <span className="tracking-wide">Plataforma #1 em Gestão Rural</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.1]">
            Sua Fazenda na <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-emerald-300">
              Palma da Mão.
            </span>
          </h1>
          
          <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            O fim das planilhas complexas. Planeje sua safra, controle custos e preveja lucros com Inteligência Artificial em segundos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden bg-primary hover:bg-green-600 text-white text-lg px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_40px_-10px_rgba(39,174,96,0.5)] hover:shadow-[0_0_60px_-15px_rgba(39,174,96,0.6)] flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              COMEÇAR AGORA
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
               onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
               className="px-8 py-4 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:border-white/40"
            >
              <PlayCircle className="w-5 h-5" />
              Ver Como Funciona
            </button>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start text-sm text-gray-400 opacity-90">
             <div className="flex items-center gap-2">
                 <ShieldCheck className="w-5 h-5 text-primary" />
                 <span>30 Dias de Garantia</span>
             </div>
             <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
             <div className="flex items-center gap-2">
                 <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full bg-gray-700 border border-gray-800"></div>
                    ))}
                 </div>
                 <span>+10.000 Produtores</span>
             </div>
          </div>
        </div>

        {/* Right Content - Mockup */}
        <div 
          ref={domRef}
          className={`w-full lg:w-1/2 flex justify-center lg:justify-end reveal ${isVisible ? 'active' : ''}`}
        >
          <div className="relative group perspective-1000">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/20 blur-[120px] rounded-full animate-pulse-slow"></div>
            
            {/* Phone Body */}
            <div className="relative w-[300px] sm:w-[340px] h-[680px] bg-gray-950 rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden ring-1 ring-white/10 transform rotate-y-12 rotate-z-2 transition-transform duration-700 hover:rotate-0">
              
              {/* Screen */}
              <div className="w-full h-full bg-gray-50 flex flex-col relative overflow-hidden">
                {/* Status Bar */}
                <div className="h-28 bg-gradient-to-br from-green-800 to-green-600 p-6 pt-12 text-white flex justify-between items-start rounded-b-[2rem] shadow-lg relative z-10">
                    <div>
                        <p className="text-xs text-green-100 font-medium">Boa tarde,</p>
                        <p className="font-bold text-xl tracking-tight">Fazenda Esperança</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur border border-white/30 shadow-inner"></div>
                </div>

                {/* Dashboard */}
                <div className="flex-1 p-5 -mt-6 space-y-4 overflow-y-auto no-scrollbar relative z-0">
                    
                    {/* Main Stats */}
                    <div className="bg-white p-5 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Lucro Líquido</p>
                                <p className="text-3xl font-black text-gray-900 mt-1">R$ 482k</p>
                            </div>
                            <div className="p-2 bg-green-50 rounded-lg">
                                <TrendingUp className="text-primary w-6 h-6" />
                            </div>
                        </div>
                        <div className="w-full bg-gray-100 h-1.5 rounded-full mt-2 overflow-hidden">
                            <div className="bg-primary h-full rounded-full w-[75%]"></div>
                        </div>
                        <p className="text-xs text-gray-400 mt-2 font-medium">Meta da Safra: 75% atingida</p>
                    </div>

                    {/* Actions Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer group/card">
                            <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center group-hover/card:scale-110 transition-transform">
                                <ShieldCheck size={20} />
                            </div>
                            <span className="text-xs font-bold text-gray-600">Manejo</span>
                        </div>
                         <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer group/card">
                            <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center group-hover/card:scale-110 transition-transform">
                                <TrendingUp size={20} />
                            </div>
                            <span className="text-xs font-bold text-gray-600">Cotação</span>
                        </div>
                    </div>

                    {/* Notification */}
                    <div className="bg-gray-900 text-white p-4 rounded-xl shadow-lg flex items-center gap-3 border-l-4 border-secondary">
                        <div className="bg-white/10 p-2 rounded-full">
                            <Star className="w-4 h-4 text-secondary fill-secondary" />
                        </div>
                        <div>
                            <p className="text-sm font-bold">Oportunidade</p>
                            <p className="text-xs text-gray-300">Soja subiu 2.4% hoje. Vender?</p>
                        </div>
                    </div>
                    
                    {/* Fake Chart */}
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm opacity-80">
                         <div className="flex gap-2 items-end h-20 justify-between px-2">
                            <div className="w-8 bg-green-200 h-[40%] rounded-t-sm"></div>
                            <div className="w-8 bg-green-300 h-[60%] rounded-t-sm"></div>
                            <div className="w-8 bg-green-400 h-[30%] rounded-t-sm"></div>
                            <div className="w-8 bg-primary h-[80%] rounded-t-sm"></div>
                            <div className="w-8 bg-green-600 h-[50%] rounded-t-sm"></div>
                         </div>
                    </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute top-32 -left-12 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-2xl border border-white/40 hidden md:block animate-float">
                <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                        <TrendingUp className="text-green-700 w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-bold uppercase">Economia Gerada</p>
                        <p className="text-lg font-black text-gray-900">+ R$ 22.400</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};