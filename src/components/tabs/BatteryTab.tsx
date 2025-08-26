import React from 'react';
import { Battery, Zap, Monitor, Gamepad2 } from 'lucide-react';
import { Phone } from '../../types/Phone';

interface BatteryTabProps {
  phone1: Phone;
  phone2: Phone;
}

const BatteryTab: React.FC<BatteryTabProps> = ({ phone1, phone2 }) => {
  const renderBatteryInfo = (phone: Phone, variant: 'blue' | 'purple') => (
    <div className={`bg-${variant}-50 rounded-xl p-6 space-y-4`}>
      <h4 className="text-lg font-semibold text-slate-800 flex items-center space-x-2">
        <Battery className={`w-5 h-5 text-${variant}-600`} />
        <span>{phone.name}</span>
      </h4>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="font-medium text-slate-600">Capacity:</span>
          <span className="text-slate-800 font-semibold">{phone.battery.capacity}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-slate-600">Charging:</span>
          <span className="text-slate-800">{phone.battery.charging}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-slate-600">Wireless:</span>
          <span className={`text-${phone.battery.wireless ? 'green' : 'red'}-600 font-semibold`}>
            {phone.battery.wireless ? 'Yes' : 'No'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-slate-600">Reverse:</span>
          <span className={`text-${phone.battery.reverse ? 'green' : 'red'}-600 font-semibold`}>
            {phone.battery.reverse ? 'Yes' : 'No'}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {renderBatteryInfo(phone1, 'blue')}
        {renderBatteryInfo(phone2, 'purple')}
      </div>

      {/* Battery Life Comparison */}
      <div className="bg-slate-50 rounded-xl p-6">
        <h4 className="font-semibold text-slate-800 mb-6 flex items-center space-x-2">
          <Zap className="w-5 h-5 text-slate-600" />
          <span>Battery Life Comparison</span>
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Monitor className="w-6 h-6 text-blue-500" />
            </div>
            <p className="text-sm text-slate-500 mb-2 font-medium">Video Playback</p>
            <div className="bg-white rounded-lg p-4 space-y-2">
              <p className="font-bold text-blue-600">{phone1.battery.video}</p>
              <p className="font-bold text-purple-600">{phone2.battery.video}</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Monitor className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-sm text-slate-500 mb-2 font-medium">Web Browsing</p>
            <div className="bg-white rounded-lg p-4 space-y-2">
              <p className="font-bold text-blue-600">{phone1.battery.web}</p>
              <p className="font-bold text-purple-600">{phone2.battery.web}</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Gamepad2 className="w-6 h-6 text-orange-500" />
            </div>
            <p className="text-sm text-slate-500 mb-2 font-medium">Gaming</p>
            <div className="bg-white rounded-lg p-4 space-y-2">
              <p className="font-bold text-blue-600">{phone1.battery.gaming}</p>
              <p className="font-bold text-purple-600">{phone2.battery.gaming}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatteryTab;