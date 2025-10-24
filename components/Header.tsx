import React from 'react';
import { DiscordIcon } from './Icons';
import { INVITE_LINK } from '../config';

export const Header: React.FC = () => {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-sm border-b border-dark-border">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wider">
          <span className="text-brand-purple">K</span>ohai <span className="text-brand-pink">AI</span>
        </h1>
        <a 
          href={INVITE_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-brand-purple hover:bg-violet-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
        >
          <DiscordIcon className="w-5 h-5" />
          <span>Add to Discord</span>
        </a>
      </div>
    </header>
  );
};
