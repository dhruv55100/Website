import React from 'react';
import { Smartphone, ChevronDown } from 'lucide-react';
import CurrencySelector from './CurrencySelector';

interface HeaderProps {
  currentCurrency: string;
  onCurrencyChange: (currency: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentCurrency, onCurrencyChange }) => {
  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-slate-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Smartphone className="text-blue-600 w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PhoneCompare
              </h1>
              <p className="text-xs text-slate-500 font-medium">Smart phone comparisons</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <CurrencySelector 
              currentCurrency={currentCurrency}
              onCurrencyChange={onCurrencyChange}
            />
            
            <nav className="hidden md:flex space-x-6">
              {['Home', 'Brands', 'Reviews', 'News'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium text-sm relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            
            <button className="md:hidden p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-all duration-200">
              <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                <span className="block h-0.5 w-full bg-current transition-all duration-200"></span>
                <span className="block h-0.5 w-full bg-current transition-all duration-200"></span>
                <span className="block h-0.5 w-full bg-current transition-all duration-200"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;