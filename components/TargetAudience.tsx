
import React from 'react';
import { UsersIcon } from './Icons';

export const TargetAudience: React.FC = () => {
  return (
    <section id="who-its-for" className="py-20 bg-dark-card border-y border-dark-border">
      <div className="container mx-auto px-4 text-center animate-fade-in-up">
        <UsersIcon className="w-16 h-16 mx-auto text-brand-pink mb-4" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for Community Mods & Admins</h2>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-lg">
          Kohai is designed for moderators of anime, fandom, and gaming communities (from 200 to 5,000 members) who want to drive engagement and create a welcoming atmosphere without adding to their workload.
        </p>
      </div>
    </section>
  );
};
