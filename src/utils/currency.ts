// Exchange rates (example rates - in production, these would come from an API)
const exchangeRates: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 149.50,
  INR: 83.00,
  CNY: 7.30,
  AUD: 1.52,
  CAD: 1.36,
  CHF: 0.88,
};

// Currency symbols
const currencySymbols: Record<string, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
  INR: '₹',
  CNY: '¥',
  AUD: 'A$',
  CAD: 'C$',
  CHF: 'CHF',
};

export const formatPrice = (usdPrice: number, targetCurrency: string = 'USD'): string => {
  const rate = exchangeRates[targetCurrency] || 1;
  const convertedAmount = usdPrice * rate;
  const symbol = currencySymbols[targetCurrency] || '$';
  
  // Special formatting for certain currencies
  if (targetCurrency === 'JPY' || targetCurrency === 'KRW') {
    return `${symbol}${Math.round(convertedAmount).toLocaleString()}`;
  } else if (targetCurrency === 'INR') {
    return `${symbol}${convertedAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
  } else {
    return `${symbol}${convertedAmount.toLocaleString(undefined, { 
      minimumFractionDigits: 0, 
      maximumFractionDigits: 0 
    })}`;
  }
};

export const convertCurrency = (usdAmount: number, targetCurrency: string): number => {
  const rate = exchangeRates[targetCurrency] || 1;
  return usdAmount * rate;
};