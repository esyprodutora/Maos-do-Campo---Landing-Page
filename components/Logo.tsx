import React from 'react';
import { Leaf } from 'lucide-react';

interface LogoProps {
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ isLight = false }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
        <Leaf className="text-white w-6 h-6" />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-bold text-sm tracking-wide transition-colors duration-300 ${isLight ? 'text-white' : 'text-gray-900'}`}>MÃOS DO</span>
        <span className="font-extrabold text-secondary text-base tracking-wider -mt-0.5">CAMPO</span>
      </div>
    </div>
  );
};
