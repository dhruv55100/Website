import React from 'react';
import { Camera, CheckCircle } from 'lucide-react';
import { Phone } from '../../types/Phone';

interface CameraTabProps {
  phone1: Phone;
  phone2: Phone;
}

const CameraTab: React.FC<CameraTabProps> = ({ phone1, phone2 }) => {
  const renderCameraDetails = (phone: Phone, variant: 'blue' | 'purple') => (
    <div className={`bg-${variant}-50 rounded-xl p-6 space-y-4`}>
      <h4 className="text-lg font-semibold text-slate-800 flex items-center space-x-2">
        <Camera className={`w-5 h-5 text-${variant}-600`} />
        <span>{phone.name}</span>
      </h4>
      
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <span className="font-medium text-slate-600">Main:</span>
          <span className="ml-2 text-slate-800">{phone.camera.main}</span>
        </div>
        <div>
          <span className="font-medium text-slate-600">Ultra-wide:</span>
          <span className="ml-2 text-slate-800">{phone.camera.ultra}</span>
        </div>
        <div>
          <span className="font-medium text-slate-600">Telephoto:</span>
          <span className="ml-2 text-slate-800">{phone.camera.tele || 'None'}</span>
        </div>
        <div>
          <span className="font-medium text-slate-600">Front:</span>
          <span className="ml-2 text-slate-800">{phone.camera.front}</span>
        </div>
      </div>

      <div>
        <p className="font-medium text-slate-700 mb-2">Key Features:</p>
        <ul className="space-y-1">
          {phone.camera.features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm text-slate-600">
              <CheckCircle className={`w-4 h-4 text-${variant}-500`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {renderCameraDetails(phone1, 'blue')}
      {renderCameraDetails(phone2, 'purple')}
    </div>
  );
};

export default CameraTab;