import React from 'react';
import { DollarSign, Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Your Investment</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex justify-center items-center mb-8">
              <DollarSign className="h-12 w-12 text-green-500 mr-2" />
              <span className="text-4xl font-bold">449</span>
            </div>
            <p className="text-center mb-6 text-gray-600">
              $199 upfront + $250 deferred (paid through revenue share)
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Program Includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Instruction on each step in creating a successful venture</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Weekly 1:1 coaching and mentoring</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Usage of tools stack (CRM, LLM, payments, analytics, dev)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Validation ad spend</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">You'll Also Get:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Tech hosting during program</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Group sessions and community support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Pre-tuned LLM prompts for maximum success</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Refund Policy:</strong> $100 refund if no viable idea is validated by the end of Week 1.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;