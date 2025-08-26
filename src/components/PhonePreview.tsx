import React from 'react';
import { Star, Award } from 'lucide-react';
import { Phone } from '../types/Phone';
import { formatPrice } from '../utils/currency';

interface PhonePreviewProps {
  phone: Phone;
  currentCurrency: string;
  variant?: 'primary' | 'secondary';
}

const PhonePreview: React.FC<PhonePreviewProps> = ({ 
  phone, 
  currentCurrency, 
  variant = 'primary' 
}) => {
  const gradientClass = variant === 'primary' 
    ? 'from-blue-50 to-blue-100' 
    : 'from-purple-50 to-purple-100';
  
  const borderClass = variant === 'primary'
    ? 'border-blue-200'
    : 'border-purple-200';

  return (
    <div className={`bg-gradient-to-br ${gradientClass} ${borderClass} border-2 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img 
            src={phone.image} 
            alt={phone.name}
            className="w-20 h-20 object-cover rounded-lg shadow-md"
          />
          <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-lg">
            <Award className="w-4 h-4 text-yellow-500" />
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-slate-800 text-lg mb-1">{phone.name}</h3>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-2xl font-bold text-blue-600">
              {formatPrice(phone.priceUSD, currentCurrency)}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-slate-600">{phone.score}</span>
            </div>
          </div>
          <p className="text-sm text-slate-500">{phone.release}</p>
        </div>
      </div>
    </div>
  );
};

export default PhonePreview;