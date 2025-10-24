import React, { useState, useRef, useEffect } from 'react';
import { llmReply } from '../lib/llm';

interface Message {
    sender: 'user' | 'kohai';
    text: string;
}

export const ChatDemo: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'kohai', text: "Hii! Ask me anything~" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (input.trim() === '' || isLoading) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const replyText = await llmReply(input);
            const kohaiMessage: Message = { sender: 'kohai', text: replyText };
            setMessages(prev => [...prev, kohaiMessage]);
        } catch (error) {
            console.error(error);
            const errorMessage: Message = { sender: 'kohai', text: "Eep—my brain hiccuped. Try again in a moment!" };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="demo" className="py-20 bg-dark-bg">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate-fade-in-up">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">Try Kohai Live!</h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Have a quick chat with Kohai. This is a live demo using Gemini with a Groq Llama-3.1 fallback.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto bg-dark-card border border-dark-border rounded-2xl shadow-2xl shadow-brand-purple/10 overflow-hidden animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <div className="p-4 h-96 overflow-y-auto flex flex-col space-y-4 bg-gray-900/50">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-end gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                {msg.sender === 'kohai' && <div className="w-8 h-8 rounded-full bg-brand-purple flex-shrink-0 text-white flex items-center justify-center text-sm font-bold">K</div>}
                                <div className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-brand-purple text-white rounded-br-none' : 'bg-gray-700 text-gray-200 rounded-bl-none'}`}>
                                    <p className="text-sm">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                             <div className="flex items-end gap-3 justify-start">
                                <div className="w-8 h-8 rounded-full bg-brand-purple flex-shrink-0 text-white flex items-center justify-center text-sm font-bold">K</div>
                                <div className="px-4 py-2 rounded-2xl bg-gray-700 text-gray-200 rounded-bl-none">
                                   <div className="flex items-center justify-center space-x-1">
                                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                   </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="p-4 border-t border-dark-border">
                        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex items-center space-x-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Say something nice..."
                                className="w-full bg-gray-900 border border-dark-border rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-purple transition"
                                disabled={isLoading}
                                aria-label="Chat input"
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="bg-brand-purple hover:bg-violet-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed"
                                aria-label="Send message"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
