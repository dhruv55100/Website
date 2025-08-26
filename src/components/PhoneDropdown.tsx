import React from 'react';
import { ChevronDown, Smartphone } from 'lucide-react';
import { Phone } from '../types/Phone';

interface PhoneDropdownProps {
  selectedPhone: string | null;
  onPhoneSelect: (phoneId: string | null) => void;
  phones: Record<string, Phone>;
  placeholder: string;
}

const PhoneDropdown: React.FC<PhoneDropdownProps> = ({
  selectedPhone,
  onPhoneSelect,
  phones,
  placeholder
}) => {
  const brands = {
    'Apple': ['iphone15pro', 'iphone15promax'],
    'Samsung': ['samsung23ultra'],
    'Google': ['pixel8pro'],
    'OnePlus': ['oneplus11'],
    'Xiaomi': ['xiaomi13pro']
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Smartphone className="w-5 h-5 text-slate-400" />
      </div>
      
      <select
        value={selectedPhone || ''}
        onChange={(e) => onPhoneSelect(e.target.value || null)}
        className="w-full pl-10 pr-10 py-4 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-700 font-medium transition-all duration-200 appearance-none hover:border-slate-300"
      >
        <option value="">{placeholder}</option>
        {Object.entries(brands).map(([brand, phoneIds]) => (
          <optgroup key={brand} label={brand}>
            {phoneIds.map((phoneId) => (
              <option key={phoneId} value={phoneId}>
                {phones[phoneId]?.name}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <ChevronDown className="w-5 h-5 text-slate-400" />
      </div>
    </div>
  );
};

export default PhoneDropdown;