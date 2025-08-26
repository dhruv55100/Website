import React from 'react';
import { DollarSign, ChevronDown } from 'lucide-react';

interface CurrencySelectorProps {
  currentCurrency: string;
  onCurrencyChange: (currency: string) => void;
}

const currencies = [
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'British Pound', symbol: '£' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
];

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ currentCurrency, onCurrencyChange }) => {
  return (
    <div className="relative">
      <div className="flex items-center">
        <DollarSign className="w-4 h-4 text-slate-500 mr-2" />
        <select 
          value={currentCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg px-3 py-2 text-sm font-medium cursor-pointer transition-all duration-200 border-0 focus:ring-2 focus:ring-blue-500 appearance-none pr-8"
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.code} - {currency.name} ({currency.symbol})
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-2 w-4 h-4 text-slate-500 pointer-events-none" />
      </div>
    </div>
  );
};

export default CurrencySelector;