import React from 'react';
import { CheckCircleIcon } from './Icons';

const PricingCard: React.FC<{ tier: string; price: string; description: string; features: string[]; isFeatured?: boolean }> = ({ tier, price, description, features, isFeatured }) => {
  const cardClasses = isFeatured
    ? "bg-dark-card border-2 border-brand-purple shadow-2xl shadow-brand-purple/30 transform scale-105"
    : "bg-dark-card border border-dark-border";
  
  const buttonClasses = isFeatured
    ? "bg-gradient-to-r from-brand-purple to-brand-pink text-white"
    : "bg-gray-700 hover:bg-gray-600 text-white";

  return (
    <div className={`relative p-8 rounded-xl ${cardClasses} transition-all duration-300`}>
      {isFeatured && <span className="absolute top-0 right-8 -mt-4 bg-brand-pink text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Most Popular</span>}
      <h3 className="text-2xl font-bold text-white">{tier}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
      <div className="mt-6">
        <span className="text-4xl font-extrabold text-white">{price}</span>
        <span className="text-base font-medium text-gray-400">/month</span>
      </div>
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#" className={`block w-full text-center mt-10 py-3 px-6 rounded-lg font-semibold ${buttonClasses} transition-colors duration-300`}>
        Get Started
      </a>
    </div>
  );
};


export const Pricing: React.FC = () => {
  const freeFeatures = [
    "3 Core Personas",
    "SFW-First Moderation",
    "Opt-in Memory Moments",
    "Basic Mod Controls",
    "Community Support"
  ];

  const proFeatures = [
    "Everything in Free, plus:",
    "Access to all Persona Packs",
    "Higher DM & Message Limits",
    "Anime Trivia & Event Kits",
    "Priority Latency & Support",
    "Exportable Mod Logs"
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Choose Your Plan</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Start for free and scale up as your community grows.</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <PricingCard tier="Free" price="$0" description="Perfect for small servers getting started." features={freeFeatures} />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <PricingCard tier="Pro" price="$9" description="For growing communities that want more features." features={proFeatures} isFeatured />
          </div>
        </div>
      </div>
    </section>
  );
};
