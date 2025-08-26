import React, { useState } from 'react';
import { Phone } from '../types/Phone';
import ComparisonOverview from './ComparisonOverview';
import ComparisonTabs from './ComparisonTabs';
import Verdict from './Verdict';

interface ComparisonResultsProps {
  phone1: Phone;
  phone2: Phone;
  currentCurrency: string;
}

const ComparisonResults: React.FC<ComparisonResultsProps> = ({
  phone1,
  phone2,
  currentCurrency
}) => {
  return (
    <div className="space-y-8">
      <ComparisonOverview 
        phone1={phone1}
        phone2={phone2}
        currentCurrency={currentCurrency}
      />
      
      <ComparisonTabs 
        phone1={phone1}
        phone2={phone2}
      />
      
      <Verdict 
        phone1={phone1}
        phone2={phone2}
      />
    </div>
  );
};

export default ComparisonResults;