import React from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';
import { Phone } from '../../types/Phone';

interface FeaturesTabProps {
  phone1: Phone;
  phone2: Phone;
}

const FeaturesTab: React.FC<FeaturesTabProps> = ({ phone1, phone2 }) => {
  const features1 = new Set(phone1.features);
  const features2 = new Set(phone2.features);
  const unique1 = phone1.features.filter(f => !features2.has(f));
  const unique2 = phone2.features.filter(f => !features1.has(f));

  const renderFeaturesList = (phone: Phone, variant: 'blue' | 'purple') => (
    <div className={`bg-${variant}-50 rounded-xl p-6`}>
      <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
        <Sparkles className={`w-5 h-5 text-${variant}-600`} />
        <span>{phone.name}</span>
      </h4>
      <div className="space-y-2">
        {phone.features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <CheckCircle className={`w-4 h-4 text-${variant}-500 flex-shrink-0`} />
            <span className="text-sm text-slate-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {renderFeaturesList(phone1, 'blue')}
        {renderFeaturesList(phone2, 'purple')}
      </div>

      {/* Key Differences */}
      {(unique1.length > 0 || unique2.length > 0) && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-100">
          <h4 className="font-semibold text-slate-800 mb-4 flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <span>Key Differences</span>
          </h4>
          
          <div className="space-y-4">
            {unique1.length > 0 && (
              <div>
                <p className="font-medium text-blue-800 mb-2">{phone1.name} exclusive features:</p>
                <ul className="space-y-1">
                  {unique1.map((feature, index) => (
                    <li key={index} className="text-sm text-blue-700 ml-4">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {unique2.length > 0 && (
              <div>
                <p className="font-medium text-purple-800 mb-2">{phone2.name} exclusive features:</p>
                <ul className="space-y-1">
                  {unique2.map((feature, index) => (
                    <li key={index} className="text-sm text-purple-700 ml-4">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturesTab;