
import React from 'react';

const PersonaCard: React.FC<{ title: string; description: string; emoji: string; color: string }> = ({ title, description, emoji, color }) => (
  <div className={`bg-dark-card p-6 rounded-xl border-t-4 ${color} transition-shadow duration-300 hover:shadow-lg`}>
    <div className="text-4xl mb-4">{emoji}</div>
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export const Personas: React.FC = () => {
  return (
    <section id="personas" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Meet the Personalities</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Switch between distinct anime personas to perfectly match your community's style.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <PersonaCard
              title="Cheerful Kouhai"
              description="Eager, friendly, and always positive. Perfect for welcoming new members and celebrating wins."
              emoji="😊"
              color="border-brand-pink"
            />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <PersonaCard
              title="Teasing Tsundere"
              description="A bit standoffish at first but secretly caring. Great for playful banter and lighthearted fun."
              emoji="😠"
              color="border-brand-purple"
            />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <PersonaCard
              title="Mystical Fox Spirit"
              description="Wise, a little mischievous, and speaks in riddles. Ideal for fantasy or folklore-themed servers."
              emoji="🦊"
              color="border-yellow-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
