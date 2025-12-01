import React from 'react';
import { ChevronRight, ShieldCheck, TrendingUp, Star, PlayCircle, MapPin, Sprout, Bot, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { TONICO_AVATAR_URL, TONICO_FALLBACK_URL } from '../constants';

export const Hero: React.FC = () => {
  const { domRef, isVisible } = useScrollReveal();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = TONICO_FALLBACK_URL;
  };

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
          
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-secondary text-sm font-semibold animate-fade-in hover:bg-white/10 transition-colors cursor-default">
            {/* BADGE SUPERIOR AUMENTADO */}
            <div className="w-8 h-8 rounded-full overflow-hidden border border-secondary/50 shadow-sm bg-gray-800">
              <img 
                src={TONICO_AVATAR_URL} 
                alt="Avatar Tonico" 
                className="w-full h-full object-cover" 
                onError={handleImageError}
              />
            </div>
            <span className="tracking-wide">Com Tonico: O Assistente Agro Inteligente</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1]">
            Quem controla o Talhão, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-400 to-emerald-300">
              Domina o Lucro.
            </span>
          </h1>
          
          <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            Chega de anotar em caderno. Mapeie sua lavoura via satélite, controle custos de 10 culturas e deixe o <strong>Tonico (nossa IA)</strong> identificar pragas e te dar dicas de manejo em tempo real.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden bg-primary hover:bg-green-600 text-white text-lg px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_40px_-10px_rgba(39,174,96,0.5)] hover:shadow-[0_0_60px_-15px_rgba(39,174,96,0.6)] flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              TESTAR NA MINHA LAVOURA
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
               onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
               className="px-6 py-3 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-sm hover:border-white/40 group"
            >
              {/* BOTÃO CONHECER TONICO AUMENTADO PARA w-14 */}
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/30 shadow-md bg-white/10 transition-transform group-hover:scale-105">
                <img 
                  src={TONICO_AVATAR_URL} 
                  alt="Avatar Tonico" 
                  className="w-full h-full object-cover" 
                  onError={handleImageError}
                />
              </div>
              <span className="text-lg">Conhecer o Tonico</span>
            </button>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start text-sm text-gray-400 opacity-90">
             <div className="flex items-center gap-2">
                 <ShieldCheck className="w-5 h-5 text-primary" />
                 <span>30 Dias de Garantia</span>
             </div>
             <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
             <div className="flex items-center gap-2">
                 <span>Gestão: Soja, Milho, Café e +</span>
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
                <div className="h-28 bg-gradient-to-br from-green-900 to-green-700 p-6 pt-12 text-white flex justify-between items-start rounded-b-[2rem] shadow-lg relative z-10">
                    <div>
                        <p className="text-xs text-green-200 font-medium">Talhão 04 - Sede</p>
                        <p className="font-bold text-xl tracking-tight flex items-center gap-2"><MapPin size={18}/> Soja Intacta</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur border border-white/30 shadow-inner flex items-center justify-center">
                        <Sprout size={20} />
                    </div>
                </div>

                {/* Dashboard */}
                <div className="flex-1 p-5 -mt-6 space-y-4 overflow-y-auto no-scrollbar relative z-0">
                    
                    {/* Main Stats */}
                    <div className="bg-white p-5 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Lucro Estimado</p>
                                <p className="text-3xl font-black text-gray-900 mt-1">R$ 4.250<span className="text-sm text-gray-400 font-normal">/ha</span></p>
                            </div>
                            <div className="p-2 bg-green-50 rounded-lg">
                                <TrendingUp className="text-primary w-6 h-6" />
                            </div>
                        </div>
                        <div className="flex justify-between text-xs mt-4 border-t pt-3">
                             <div className="w-full">
                                <span className="text-gray-400 block mb-1">Cotação Atualizada</span>
                                <div className="flex justify-between items-center w-full">
                                    <span className="font-bold text-gray-700">Soja</span>
                                    <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded">R$ 132,00 ▲</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chat do Tonico (AI Feature Highlight) */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 rounded-xl shadow-lg border-l-4 border-secondary relative overflow-hidden group/chat">
                        <div className="flex items-center gap-4 mb-3">
                            {/* Avatar image container - CHAT INTERNO AUMENTADO */}
                            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border-2 border-secondary shadow-sm overflow-hidden p-0.5 shrink-0">
                                <img 
                                  src={TONICO_AVATAR_URL} 
                                  alt="Tonico AI" 
                                  className="w-full h-full object-cover" 
                                  onError={handleImageError}
                                />
                            </div>
                            <div>
                                <p className="text-base font-bold text-secondary flex items-center gap-1">Tonico <span className="text-[10px] bg-white/10 px-1.5 rounded text-gray-300 font-normal">IA</span></p>
                                <p className="text-[10px] text-gray-400">Agora</p>
                            </div>
                        </div>
                        <div className="bg-white/10 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl text-xs text-gray-200 leading-relaxed relative">
                             <div className="absolute -left-1.5 top-0 w-3 h-3 bg-white/10 [clip-path:polygon(100%_0,0_0,100%_100%)]"></div>
                             "Analisei a foto do Talhão 02. Identifiquei início de <strong>Ferrugem Asiática</strong>. Recomendo aplicação preventiva de fungicida nas próximas 24h devido à previsão de chuva."
                        </div>
                         {/* Typing indicator animation */}
                        <div className="flex gap-1 mt-2 ml-16 opacity-50">
                            <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                        </div>
                    </div>

                    {/* Actions Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer group/card">
                            <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center group-hover/card:scale-110 transition-transform">
                                <MapPin size={20} />
                            </div>
                            <span className="text-xs font-bold text-gray-600">Mapa da Safra</span>
                        </div>
                         <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer group/card">
                            <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center group-hover/card:scale-110 transition-transform">
                                <Sprout size={20} />
                            </div>
                            <span className="text-xs font-bold text-gray-600">Lançar Etapa</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            {/* Floating Card Tonico */}
            <div className="absolute bottom-32 -right-12 bg-white/95 backdrop-blur p-5 rounded-2xl shadow-2xl border border-secondary/20 hidden md:block animate-float">
                <div className="flex items-center gap-4">
                    {/* CARD FLUTUANTE AUMENTADO */}
                    <div className="bg-secondary p-0.5 rounded-full overflow-hidden w-16 h-16 border-2 border-white shadow-sm shrink-0">
                        <img 
                          src={TONICO_AVATAR_URL} 
                          alt="Tonico" 
                          className="w-full h-full object-cover" 
                          onError={handleImageError}
                        />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-bold uppercase">Assistente Tonico</p>
                        <p className="text-sm font-bold text-gray-900 leading-tight">"Pode aplicar o <br/> Adubo Foliar hoje?"</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};