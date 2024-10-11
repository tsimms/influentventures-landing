import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Launch Your Micro-Business in 30 Days</h1>
          <p className="text-xl mb-8">Validate, build, and launch your first micro-business with expert guidance, tools, and community support.</p>
          <a href="#lead-gen-form" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">
            Reserve Your Spot
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;