import React from 'react';
import { Smartphone, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white mt-16 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Smartphone className="text-blue-400 w-6 h-6" />
              <h4 className="font-bold text-lg">PhoneCompare</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted source for comprehensive mobile phone comparisons, 
              reviews, and the latest technology insights.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Quick Links</h4>
            <ul className="space-y-2">
              {['Latest Phones', 'Price Drops', 'Buying Guide', 'Tech News'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Popular Brands</h4>
            <ul className="space-y-2">
              {['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'].map((brand) => (
                <li key={brand}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                    {brand}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Instagram, href: '#' }
              ].map(({ Icon, href }, index) => (
                <a 
                  key={index}
                  href={href} 
                  className="text-slate-400 hover:text-white transition-colors duration-200 p-2 hover:bg-slate-800 rounded-lg"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © 2024 PhoneCompare. All rights reserved. Made with ❤️ for tech enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;