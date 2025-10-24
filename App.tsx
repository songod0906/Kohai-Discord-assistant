import React from 'react';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ChatDemo } from './components/ChatDemo';
import { Personas } from './components/Personas';
import { Safety } from './components/Safety';
import { Pricing } from './components/Pricing';
import { TargetAudience } from './components/TargetAudience';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      <main>
        <Hero />
        <Features />
        <ChatDemo />
        <Personas />
        <Safety />
        <Pricing />
        <TargetAudience />
      </main>
      <Footer />
    </div>
  );
}

export default App;