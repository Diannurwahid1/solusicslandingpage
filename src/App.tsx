import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrustedCompaniesSection from './components/TrustedCompaniesSection';
import CustomerExperienceSection from './components/CustomerExperienceSection';
import ConversationsSection from './components/ConversationsSection';
import TemplatesSection from './components/TemplatesSection';
import PricingSection from './components/PricingSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <HeroSection />
      <TrustedCompaniesSection />
      <CustomerExperienceSection />
      <ConversationsSection />
      <TemplatesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;