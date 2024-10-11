import React from 'react';
import { DollarSign, Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Your Investment</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex justify-center items-center mb-8">
              <DollarSign className="h-12 w-12 text-green-500 mr-2" />
              <span className="text-4xl font-bold">450</span>
            </div>
            <p className="text-center mb-6 text-gray-600">
              $199 upfront + $251 deferred (paid through revenue share)
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Validation ad spend</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Hosting for your micro-business</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>CRM system usage</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>LLM usage for ideation and content creation</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Payment system integration</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Analytics tools</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Weekly 1:1 consulting</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Group sessions</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Pre-tuned LLM prompts</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Refund Policy:</strong> $100 refund if no viable idea is validated by the end of Week 1.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;