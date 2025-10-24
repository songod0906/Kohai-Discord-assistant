import React from 'react';
import { INVITE_LINK } from '../config';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg border-t border-dark-border py-8">
      <div className="container mx-auto px-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Kohai AI. All rights reserved.</p>
        <div className="mt-4 space-x-6">
          <a href={INVITE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple transition-colors">Add to Discord</a>
          <a href="#" className="hover:text-brand-purple transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-brand-purple transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-purple transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};
