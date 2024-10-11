import React from 'react';
import { Clock, Users, Wrench } from 'lucide-react';

const Expectations: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What You Can Expect</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Clock className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Time Commitment</h3>
            <p className="text-gray-600">1-2 hours per day for 4 weeks.</p>
          </div>
          <div className="text-center">
            <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
            <p className="text-gray-600">Collaborate with other entrepreneurs to test ideas, give feedback, and grow together.</p>
          </div>
          <div className="text-center">
            <Wrench className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Support</h3>
            <p className="text-gray-600">Get hands-on access to all the tools needed to bring your idea to life.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expectations;