import React, { useState } from 'react';
import { Monitor, Camera, Cpu, Battery, Zap } from 'lucide-react';
import { Phone } from '../types/Phone';
import SpecsTab from './tabs/SpecsTab';
import CameraTab from './tabs/CameraTab';
import PerformanceTab from './tabs/PerformanceTab';
import BatteryTab from './tabs/BatteryTab';
import FeaturesTab from './tabs/FeaturesTab';

interface ComparisonTabsProps {
  phone1: Phone;
  phone2: Phone;
}

const tabs = [
  { id: 'specs', label: 'Specifications', icon: Monitor },
  { id: 'camera', label: 'Camera', icon: Camera },
  { id: 'performance', label: 'Performance', icon: Cpu },
  { id: 'battery', label: 'Battery', icon: Battery },
  { id: 'features', label: 'Features', icon: Zap },
];

const ComparisonTabs: React.FC<ComparisonTabsProps> = ({ phone1, phone2 }) => {
  const [activeTab, setActiveTab] = useState('specs');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'specs':
        return <SpecsTab phone1={phone1} phone2={phone2} />;
      case 'camera':
        return <CameraTab phone1={phone1} phone2={phone2} />;
      case 'performance':
        return <PerformanceTab phone1={phone1} phone2={phone2} />;
      case 'battery':
        return <BatteryTab phone1={phone1} phone2={phone2} />;
      case 'features':
        return <FeaturesTab phone1={phone1} phone2={phone2} />;
      default:
        return <SpecsTab phone1={phone1} phone2={phone2} />;
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Tab Navigation */}
      <div className="border-b border-slate-200 bg-slate-50/50">
        <nav className="flex overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ComparisonTabs;