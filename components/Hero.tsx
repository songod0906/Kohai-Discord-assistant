import React from 'react';
import { DiscordIcon } from './Icons';
import { INVITE_LINK } from '../config';

export const Hero: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 text-center animate-fade-in-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Your Server's Friendly AI{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-pink">
            Anime Companion
          </span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
          Kohai brings warmth and lively conversation to your Discord community without adding to your moderation workload. Engage your members with a personal, SFW-first companion.
        </p>
        <div className="mt-10">
          <a 
            href={INVITE_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-brand-purple to-brand-pink hover:from-violet-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3 text-lg"
          >
            <DiscordIcon className="w-6 h-6" />
            <span>Add Kohai to Your Server</span>
          </a>
        </div>
      </div>
    </section>
  );
};
