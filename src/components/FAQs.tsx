import React from 'react';

const faqs = [
  {
    question: 'Who is this program for?',
    answer: `This program is designed for aspiring entrepreneurs who want to launch their first micro-business. It's ideal for those with a passion for entrepreneurship but may lack the technical skills or experience to get started on their own.`,
  },
  {
    question: `What happens if I can't commit the time?`,
    answer: `We understand that life can be unpredictable. If you find you can't commit the recommended 1-2 hours per day, you can discuss options with your mentor to adjust your pace or defer to a future cohort.`,
  },
  {
    question: 'How will you validate the idea?',
    answer: `We'll work collaboratively to develop and execute a comprehensive validation strategy. This includes determining your ideal customer profile, creating targeted ad campaigns, crafting compelling ad copy, designing effective calls-to-action, and implementing landing page mechanics. We'll use a portion of the ad spend to test and validate your idea in the real market, providing valuable insights for your business.`,
  },
  {
    question: 'Can I work on my own ideas?',
    answer: `Absolutely! We encourage you to bring your own ideas to the program. Our process will help you validate and refine your concept, or pivot to a new idea if necessary.`,
  },
  {
    question: `What's the catch?`,
    answer: `It might sound too good to be true, but there's no catch. We're on a mission to help launch 50 micro-businesses, showcasing the power of entrepreneurship and the freedom it brings. Your success is our success, and the experience we gain from helping you will be invaluable for the next phase of our mission. We're committed to your growth and success as an entrepreneur.`,
  },
];

const FAQs: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;