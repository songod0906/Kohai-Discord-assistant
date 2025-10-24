import React from 'react';
// FIX: Import ShieldIcon to resolve 'Cannot find name' error.
import { CheckCircleIcon, ShieldIcon } from './Icons';

const SafetyPoint: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start space-x-3">
        <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
        <span className="text-gray-300">{children}</span>
    </li>
);

export const Safety: React.FC = () => {
    return (
        <section id="safety" className="py-20 bg-dark-card border-y border-dark-border">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in-up">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Safety & Compliance, Simplified.</h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        We prioritize community safety and user privacy. Kohai is built to be a responsible AI companion from the ground up.
                    </p>
                    <ul className="space-y-4">
                        <SafetyPoint>
                            <strong>SFW by default.</strong> NSFW content is only permitted inside age-restricted channels your server explicitly enables.
                        </SafetyPoint>
                        <SafetyPoint>
                            <strong>Zero tolerance policy.</strong> Refuses any and all content involving or depicting minors.
                        </SafetyPoint>
                        <SafetyPoint>
                            <strong>User consent is key.</strong> Clear opt-in for DMs and personal details, with an easy way to opt-out or request data deletion.
                        </SafetyPoint>
                        <SafetyPoint>
                            <strong>Minimal data storage.</strong> Only stores necessary IDs and user-provided "favorite" facts, which are fully deletable on request.
                        </SafetyPoint>
                    </ul>
                </div>
                <div className="flex justify-center items-center animate-fade-in-up" style={{animationDelay: '200ms'}}>
                    <div className="p-8 bg-gray-900 rounded-full border-4 border-dark-border">
                        <div className="p-8 bg-dark-bg rounded-full border-4 border-dark-border">
                           <ShieldIcon className="w-32 h-32 text-brand-purple" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};