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
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Success Story</h3>
            <p className="text-gray-600 italic">
              "Thanks to Influent Ventures, I was able to validate my idea, build an MVP, and launch my micro-business in just 30 days. The support and resources provided were invaluable!"
            </p>
            <p className="text-gray-800 font-semibold mt-2">- Jane Doe, Founder of TechStartup</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;