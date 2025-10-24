import React from 'react';
import { FeatureCard } from './FeatureCard';
import { PersonaIcon, HeartIcon, ShieldIcon, DmIcon, ModIcon, StarIcon } from './Icons';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <PersonaIcon className="w-8 h-8 text-brand-purple" />,
      title: "Dynamic Anime Personas",
      description: "Swap between personas like 'Cheerful Kouhai' or 'Tsundere'. Each has unique, mod-configurable reactions to keywords (e.g., 'lol') and server events."
    },
    {
      icon: <ShieldIcon className="w-8 h-8 text-brand-pink" />,
      title: "SFW-First Design",
      description: "Automatically refuses NSFW requests in public, redirecting to 18+ channels if enabled by mods."
    },
    {
      icon: <HeartIcon className="w-8 h-8 text-brand-purple" />,
      title: "Proactive Memory Moments",
      description: "Opt-in to share favorites and Kohai will proactively weave them into conversations, creating delightful, personal 'memory moments'."
    },
    {
      icon: <DmIcon className="w-8 h-8 text-brand-pink" />,
      title: "DM Consent & Caps",
      description: "Clear consent flow and daily caps for DMs to prevent spam and encourage healthy usage."
    },
    {
      icon: <ModIcon className="w-8 h-8 text-brand-purple" />,
      title: "Granular Mod Controls",
      description: "Easily toggle proactive memory, configure persona reactions, set DM limits, and export logs with simple slash commands."
    },
    {
      icon: <StarIcon className="w-8 h-8 text-brand-pink" />,
      title: "Optional Pro Tier",
      description: "Unlock higher limits, exclusive event kits, more personas, and priority replies for your server."
    }
  ];

  return (
    <section id="features" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why Your Community Will Love Kohai</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Everything you need to boost engagement without burning out your mod team.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <FeatureCard 
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};