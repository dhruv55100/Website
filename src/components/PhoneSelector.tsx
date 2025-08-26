import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Phone } from '../types/Phone';
import { formatPrice } from '../utils/currency';
import PhoneDropdown from './PhoneDropdown';
import PhonePreview from './PhonePreview';

interface PhoneSelectorProps {
  selectedPhone1: string | null;
  selectedPhone2: string | null;
  onPhone1Select: (phoneId: string | null) => void;
  onPhone2Select: (phoneId: string | null) => void;
  onCompare: () => void;
  currentCurrency: string;
  phones: Record<string, Phone>;
}

const PhoneSelector: React.FC<PhoneSelectorProps> = ({
  selectedPhone1,
  selectedPhone2,
  onPhone1Select,
  onPhone2Select,
  onCompare,
  currentCurrency,
  phones
}) => {
  const canCompare = selectedPhone1 && selectedPhone2 && selectedPhone1 !== selectedPhone2;

  return (
    <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 p-8 mb-8 transition-all duration-300 hover:shadow-xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">
          Compare Your Favorite Phones
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Select two phones to see a detailed side-by-side comparison of their features, 
          performance, camera capabilities, and more.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Phone 1 Selection */}
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            First Phone
          </label>
          <PhoneDropdown
            selectedPhone={selectedPhone1}
            onPhoneSelect={onPhone1Select}
            phones={phones}
            placeholder="Select first phone..."
          />
          {selectedPhone1 && (
            <PhonePreview 
              phone={phones[selectedPhone1]} 
              currentCurrency={currentCurrency}
              variant="primary"
            />
          )}
        </div>

        {/* VS Divider */}
        <div className="lg:hidden flex items-center justify-center py-4">
          <div className="flex items-center space-x-4">
            <div className="h-px bg-slate-300 flex-1"></div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              VS
            </div>
            <div className="h-px bg-slate-300 flex-1"></div>
          </div>
        </div>

        {/* Phone 2 Selection */}
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Second Phone
          </label>
          <PhoneDropdown
            selectedPhone={selectedPhone2}
            onPhoneSelect={onPhone2Select}
            phones={phones}
            placeholder="Select second phone..."
          />
          {selectedPhone2 && (
            <PhonePreview 
              phone={phones[selectedPhone2]} 
              currentCurrency={currentCurrency}
              variant="secondary"
            />
          )}
        </div>
      </div>

      {/* VS Divider for desktop */}
      <div className="hidden lg:flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full font-bold shadow-lg animate-pulse">
          VS
        </div>
      </div>

      {/* Compare Button */}
      <div className="flex justify-center mt-8 pt-6 border-t border-slate-200">
        <button
          onClick={onCompare}
          disabled={!canCompare}
          className={`
            flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform
            ${canCompare 
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:scale-105 hover:from-blue-600 hover:to-purple-600' 
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }
          `}
        >
          <Zap className={`w-5 h-5 ${canCompare ? 'text-white' : 'text-slate-400'}`} />
          <span>Compare Phones</span>
          <ArrowRight className={`w-5 h-5 ${canCompare ? 'text-white' : 'text-slate-400'}`} />
        </button>
      </div>
    </section>
  );
};

export default PhoneSelector;