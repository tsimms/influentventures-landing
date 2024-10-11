import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Expectations from './components/Expectations';
import Outcomes from './components/Outcomes';
import LeadGenForm from './components/LeadGenForm';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <hr />
        <HowItWorks />
        <Pricing />
        <Expectations />
        <Outcomes />
        <LeadGenForm />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
}

export default App;