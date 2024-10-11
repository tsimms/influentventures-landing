import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Journey to Entrepreneurship Starts Here</h2>
          <p className="text-xl mb-8 text-gray-600">
            In today's digital world, starting a successful business can seem overwhelming. 
            But what if you could launch your own profitable venture in just 30 days, with expert support every step of the way? How could that help you more quickly reach your financial and lifestyle goals?
          </p>
          <p className="text-xl mb-8 text-gray-600">
            We help bring that thought to life, helping aspiring entrepreneurs build micro-businesses &mdash; small, agile ventures that you can run with minimal overhead and maximum flexibility. 
            It's your chance to turn your passion or skills into sustainable income streams, without the complexities of a traditional startup.
          </p>
          <p className="text-xl mb-8 text-gray-600">
            Unlike other models, our unique program provides a personalized journey where you make the decisions, 
            and we provide the tools, knowledge, and support to help you succeed. You'll analyze markets, validate ideas, 
            and build your unique business with our expert guidance.
          </p>
          <p className="text-xl font-semibold text-gray-800">
            Ready to take control of your future? Let's build your micro-business together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;