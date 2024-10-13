import React from 'react';
import { CheckCircle } from 'lucide-react';

const outcomes = [
  'Validated idea',
  'MVP web app',
  'Self-sustaining micro-business',
  'Access to ongoing community and resources',
];

const Outcomes: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What You'll Achieve</h2>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4 mb-8">
            {outcomes.map((outcome, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                <span className="text-lg">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;