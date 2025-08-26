import React from 'react';
import { Cpu, BarChart3 } from 'lucide-react';
import { Phone } from '../../types/Phone';

interface PerformanceTabProps {
  phone1: Phone;
  phone2: Phone;
}

const PerformanceTab: React.FC<PerformanceTabProps> = ({ phone1, phone2 }) => {
  const antutu1 = parseInt(phone1.performance.antutu.replace(/,/g, ''));
  const antutu2 = parseInt(phone2.performance.antutu.replace(/,/g, ''));
  const maxAntutu = Math.max(antutu1, antutu2);

  const renderPerformanceCard = (phone: Phone, variant: 'blue' | 'purple') => (
    <div className={`bg-${variant}-50 rounded-xl p-6`}>
      <h4 className="font-semibold text-slate-800 mb-4 flex items-center space-x-2">
        <Cpu className={`w-5 h-5 text-${variant}-600`} />
        <span>{phone.name}</span>
      </h4>
      <div className="space-y-3">
        <div>
          <span className="font-medium text-slate-600">CPU:</span>
          <span className="ml-2 text-slate-800">{phone.performance.cpu}</span>
        </div>
        <div>
          <span className="font-medium text-slate-600">GPU:</span>
          <span className="ml-2 text-slate-800">{phone.performance.gpu}</span>
        </div>
        <div>
          <span className="font-medium text-slate-600">Geekbench:</span>
          <span className="ml-2 text-slate-800">{phone.performance.geekbench}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {renderPerformanceCard(phone1, 'blue')}
        {renderPerformanceCard(phone2, 'purple')}
      </div>

      {/* AnTuTu Benchmark */}
      <div className="bg-slate-50 rounded-xl p-6">
        <div className="flex items-center space-x-2 mb-4">
          <BarChart3 className="w-5 h-5 text-slate-600" />
          <h4 className="font-semibold text-slate-800">AnTuTu Benchmark Comparison</h4>
          <span className="text-sm text-slate-500">(Higher is better)</span>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-slate-700">{phone1.name}</span>
              <span className="text-sm font-bold text-slate-800">{phone1.performance.antutu}</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${(antutu1 / maxAntutu) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-slate-700">{phone2.name}</span>
              <span className="text-sm font-bold text-slate-800">{phone2.performance.antutu}</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${(antutu2 / maxAntutu) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTab;