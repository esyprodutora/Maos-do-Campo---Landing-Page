import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 glass shadow-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-primary font-medium transition-colors">Funcionalidades</button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-primary font-medium transition-colors">Planos</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-primary font-medium transition-colors">Depoimentos</button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="bg-primary hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Começar Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col space-y-4">
          <button onClick={() => scrollToSection('features')} className="text-left text-gray-700 font-medium py-2">Funcionalidades</button>
          <button onClick={() => scrollToSection('pricing')} className="text-left text-gray-700 font-medium py-2">Planos</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-700 font-medium py-2">Depoimentos</button>
          <button onClick={() => scrollToSection('pricing')} className="bg-primary text-white py-3 rounded-lg font-bold text-center">Começar Agora</button>
        </div>
      )}
    </nav>
  );
};