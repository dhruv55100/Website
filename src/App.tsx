import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PhoneSelector from './components/PhoneSelector';
import ComparisonResults from './components/ComparisonResults';
import Footer from './components/Footer';
import { Phone } from './types/Phone';
import { phones } from './data/phonesData';

function App() {
  const [selectedPhone1, setSelectedPhone1] = useState<string | null>(null);
  const [selectedPhone2, setSelectedPhone2] = useState<string | null>(null);
  const [currentCurrency, setCurrentCurrency] = useState<string>('USD');
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    const savedCurrency = localStorage.getItem('selectedCurrency');
    if (savedCurrency) {
      setCurrentCurrency(savedCurrency);
    }
  }, []);

  const handlePhone1Select = (phoneId: string | null) => {
    setSelectedPhone1(phoneId);
    setShowComparison(false);
  };

  const handlePhone2Select = (phoneId: string | null) => {
    setSelectedPhone2(phoneId);
    setShowComparison(false);
  };

  const handleCurrencyChange = (currency: string) => {
    setCurrentCurrency(currency);
    localStorage.setItem('selectedCurrency', currency);
  };

  const handleCompare = () => {
    if (selectedPhone1 && selectedPhone2 && selectedPhone1 !== selectedPhone2) {
      setShowComparison(true);
      setTimeout(() => {
        document.getElementById('comparison-section')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start' 
        });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header 
        currentCurrency={currentCurrency}
        onCurrencyChange={handleCurrencyChange}
      />
      
      <main className="container mx-auto px-4 py-8">
        <PhoneSelector
          selectedPhone1={selectedPhone1}
          selectedPhone2={selectedPhone2}
          onPhone1Select={handlePhone1Select}
          onPhone2Select={handlePhone2Select}
          onCompare={handleCompare}
          currentCurrency={currentCurrency}
          phones={phones}
        />

        {showComparison && selectedPhone1 && selectedPhone2 && (
          <div id="comparison-section">
            <ComparisonResults
              phone1={phones[selectedPhone1]}
              phone2={phones[selectedPhone2]}
              currentCurrency={currentCurrency}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;