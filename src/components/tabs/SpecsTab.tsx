import React from 'react';
import { Trophy } from 'lucide-react';
import { Phone } from '../../types/Phone';

interface SpecsTabProps {
  phone1: Phone;
  phone2: Phone;
}

const SpecsTab: React.FC<SpecsTabProps> = ({ phone1, phone2 }) => {
  const allSpecs = Array.from(new Set([...Object.keys(phone1.specs), ...Object.keys(phone2.specs)]));

  const getWinner = (spec: string, value1: string, value2: string) => {
    if (spec === 'RAM' || spec === 'Storage') {
      const num1 = parseInt(value1) || 0;
      const num2 = parseInt(value2) || 0;
      if (num1 > num2) return 1;
      if (num2 > num1) return 2;
    }
    return 0;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left py-4 px-4 font-semibold text-slate-700 bg-slate-50">Specification</th>
            <th className="text-center py-4 px-4 font-semibold text-slate-700 bg-blue-50">{phone1.name}</th>
            <th className="text-center py-4 px-4 font-semibold text-slate-700 bg-purple-50">{phone2.name}</th>
          </tr>
        </thead>
        <tbody>
          {allSpecs.map((spec, index) => {
            const value1 = phone1.specs[spec] || 'N/A';
            const value2 = phone2.specs[spec] || 'N/A';
            const winner = getWinner(spec, value1, value2);

            return (
              <tr 
                key={spec} 
                className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                  index % 2 === 0 ? 'bg-slate-25' : 'bg-white'
                }`}
              >
                <td className="py-4 px-4 font-medium text-slate-700">{spec}</td>
                <td className="py-4 px-4 text-center text-slate-800">
                  <div className="flex items-center justify-center space-x-2">
                    <span>{value1}</span>
                    {winner === 1 && <Trophy className="w-4 h-4 text-yellow-500" />}
                  </div>
                </td>
                <td className="py-4 px-4 text-center text-slate-800">
                  <div className="flex items-center justify-center space-x-2">
                    <span>{value2}</span>
                    {winner === 2 && <Trophy className="w-4 h-4 text-yellow-500" />}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SpecsTab;