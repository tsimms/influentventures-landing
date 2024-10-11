import React, { useState } from 'react';
import { Lightbulb, Hammer, Cog, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Week 1 - Ideation',
    subtitle: 'Brainstorming & Concept Validation',
    description: `This week is all about tapping into creativity and discovering that one idea that has the potential to turn into a successful business. Together, we'll generate ideas, explore market needs, and assess the viability of various concepts. Using proven validation strategies, we'll guide you through narrowing your focus down to one simple business concept that solves a real-world problem. By the end of this week, you'll have a solid problem statement, value proposition, a clear monetization strategy, and a landing page to gauge interest.`,
    outcome: 'Key Outcome: An unvalidated business concept ready for testing.'
  },
  {
    icon: Hammer,
    title: 'Week 2 - Validation and Creation',
    subtitle: 'Building the MVP & Testing Market Demand',
    description: `This week, you'll roll up your sleeves and turn your idea into a reality. We'll help you build a minimal viable product (MVP) using no-code tools and simple frameworks—enough to start collecting real-world feedback. You'll also craft key marketing assets, such as product images, landing page copy, and videos. Finally, we'll test market demand through targeted ads to attract and engage your initial audience.`,
    outcome: 'Key Outcome: A functional MVP and initial insights into market demand, and results from validation test.'
  },
  {
    icon: Cog,
    title: 'Week 3 - Operation',
    subtitle: 'Refining, Automating, & Validating Systems',
    description: `With your MVP live, we'll engage initial users and focus this week on fine-tuning. We'll help you implement self-service systems to automate processes like payment handling, customer onboarding, and activation workflows, so your business runs smoothly with minimal manual effort. You'll also continue to refine your offer based on feedback, making adjustments to the product or service.`,
    outcome: 'Key Outcome: An operational business with automated systems in place.'
  },
  {
    icon: Rocket,
    title: 'Week 4 - Launch & Growth',
    subtitle: 'Launching & Building Long-Term Momentum',
    description: `The final week is about going live with a bigger audience and scaling up. We'll help you craft a launch strategy that leverages paid ads, content marketing, and even organic methods to build buzz. You'll develop a branding identity and learn the ins and outs of marketing strategy to ensure continued growth. By the end of this week, you'll have a business that's not just operational, but primed for growth.`,
    outcome: 'Key Outcome: A fully launched micro-business with a plan for long-term success.'
  },
];

const HowItWorks: React.FC = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How the Program Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex flex-col items-center mb-4">
                <step.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.subtitle}</p>
              </div>
              <button
                onClick={() => toggleExpand(index)}
                className="text-blue-600 hover:underline mt-4 block w-full text-center"
              >
                {expandedStep === index ? 'Show Less' : 'Learn More'}
              </button>
              {expandedStep === index && (
                <div className="mt-4 bg-white p-4 rounded-lg">
                  <p className="text-gray-700 mb-4">{step.description}</p>
                  <p className="text-gray-800 font-semibold">{step.outcome}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;