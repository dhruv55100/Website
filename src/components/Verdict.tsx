import React from 'react';
import { Trophy, CheckCircle, DollarSign } from 'lucide-react';
import { Phone } from '../types/Phone';

interface VerdictProps {
  phone1: Phone;
  phone2: Phone;
}

const Verdict: React.FC<VerdictProps> = ({ phone1, phone2 }) => {
  const score1 = parseFloat(phone1.score);
  const score2 = parseFloat(phone2.score);
  const winner = score1 > score2 ? phone1 : phone2;
  const loser = score1 > score2 ? phone2 : phone1;

  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white rounded-full"></div>
      </div>

      <div className="relative z-10">
        <h3 className="text-3xl font-bold mb-6 text-center">Our Verdict</h3>
        
        <div className="flex items-center justify-center space-x-4 mb-6">
          <Trophy className="w-12 h-12 text-yellow-400 animate-bounce" />
          <div className="text-center">
            <p className="text-2xl font-bold">Winner: {winner.name}</p>
            <p className="text-blue-100">Overall Score: {winner.score}</p>
          </div>
        </div>

        <p className="text-blue-100 mb-8 text-center max-w-2xl mx-auto text-lg leading-relaxed">
          After comparing both devices across all categories, the {winner.name} emerges as the winner 
          with superior performance and features that justify its market position.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
            <h4 className="font-semibold text-xl mb-4 flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>Why {winner.name} wins:</span>
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>Higher overall rating ({winner.score})</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>Better performance benchmarks</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>More advanced technology</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>Superior camera system</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
            <h4 className="font-semibold text-xl mb-4 flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-blue-300" />
              <span>Consider {loser.name} if:</span>
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-300" />
                <span>Budget is your primary concern</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-300" />
                <span>You prefer its ecosystem</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-300" />
                <span>Specific features appeal to you</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-300" />
                <span>Brand loyalty matters</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verdict;