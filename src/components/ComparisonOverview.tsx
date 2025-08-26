import React from 'react';
import { Heart, Trophy, Calendar } from 'lucide-react';
import { Phone } from '../types/Phone';
import { formatPrice } from '../utils/currency';

interface ComparisonOverviewProps {
  phone1: Phone;
  phone2: Phone;
  currentCurrency: string;
}

const ComparisonOverview: React.FC<ComparisonOverviewProps> = ({
  phone1,
  phone2,
  currentCurrency
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {[phone1, phone2].map((phone, index) => (
        <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 p-6 transform transition-all duration-300 hover:shadow-xl hover:scale-105">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{phone.name}</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {formatPrice(phone.priceUSD, currentCurrency)}
              </p>
            </div>
            <button className="text-slate-400 hover:text-red-500 transition-colors duration-200 p-2 hover:bg-red-50 rounded-lg">
              <Heart className="w-6 h-6" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <div>
                <p className="text-slate-500 font-medium">Overall Score</p>
                <p className="text-lg font-bold text-slate-800">{phone.score}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-blue-500" />
              <div>
                <p className="text-slate-500 font-medium">Release Date</p>
                <p className="text-slate-800 font-semibold">{phone.release}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComparisonOverview;