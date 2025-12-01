import React from 'react';
import { Logo } from './Logo';
import { Facebook, Instagram, Twitter, Linkedin, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1 space-y-4">
            <Logo />
            <p className="text-gray-500 text-sm leading-relaxed mt-4">
              Revolucionando a gestão do agronegócio brasileiro com tecnologia, inteligência de dados e simplicidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-primary">Preços</a></li>
              <li><a href="#" className="hover:text-primary">App Mobile</a></li>
              <li><a href="#" className="hover:text-primary">API para Desenvolvedores</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
              <li><a href="#" className="hover:text-primary">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary">Política de Privacidade</a></li>
              <li className="flex items-center gap-2 text-green-700 font-medium bg-green-50 w-fit px-3 py-1 rounded-full text-xs mt-4">
                <Lock size={12} />
                Site Seguro com SSL
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mãos do Campo Tecnologia Ltda. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-xs">
            Feito com <span className="text-red-400">❤</span> para o agronegócio.
          </p>
        </div>
      </div>
    </footer>
  );
};