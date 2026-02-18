import { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const AIChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { role: 'ai', text: 'Hi! I am Adil\'s AI Assistant. Ask me anything about his skills or projects!' }
    ]);
    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef(null);

    // Automatic scroll to bottom
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = async () => {
        console.log("Checking Key:", import.meta.env.VITE_GEMINI_API_KEY);
        if (!input.trim()) return;
        
        const userMsg = { role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setLoading(true);

        try {
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const systemPrompt = `You are Adil's Professional AI Assistant. 
            Adil is a Software Engineering student at UOG. 
            He is mastering React from Prashant Sir's "Complete Coding". 
            He knows: React, Tailwind, API Integration (DummyJSON), and State Management.
            Answer in 1-2 short, professional sentences. 
            If someone asks for a job, say: "Adil is open for Frontend Internships/Roles!"`;

            const result = await model.generateContent(`${systemPrompt}\nUser: ${input}`);
            const aiRes = { role: 'ai', text: result.response.text() };
            setMessages(prev => [...prev, aiRes]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'ai', text: 'Sorry, I am facing a connection issue.' }]);
        } finally {
            setLoading(false);
        }
    };

  return (
    <div className="fixed bottom-6 right-6 z-[1000] font-sans">
        {/* Chat Window */}
        {isOpen && (
            <div className="bg-gradient-to-br from-[#1e293b] to-[#334155] border border-white/10 w-85 h-[450px] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col mb-5 overflow-hidden backdrop-blur-xl animate-in fade-in zoom-in duration-300">
                
                {/* Header: Dark & Professional */}
                <div className="bg-gradient-to-br from-[#1e293b] to-[#334155] border-b border-white/10 p-4 text-white flex justify-between items-center backdrop-blur-md">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-[18px] leading-[28px] font-semibold text-[#E2E8F0] text-sm font-semibold tracking-wide uppercase">Adil's AI Assistant</span>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xl">✕</button>
                </div>
                
                {/* Chat Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700">
                    {messages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}>
                            <div className={`p-3 rounded-2xl max-w-[85%] text-sm leading-relaxed shadow-sm ${
                                msg.role === 'ai' 
                                ? 'bg-[#334155]/50 text-blue-50 border border-white/5 rounded-tl-none' 
                                : 'bg-blue-500  text-white shadow-blue-500/20 rounded-tr-none'
                            }`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="flex gap-1 ml-2">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></span>
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>

                {/* Input Area: Glass look */}
                <div className="p-4 bg-gradient-to-br from-[#1e293b] to-[#334155] border-t border-white/10 flex gap-2">
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type a message..."
                        className="flex-1 bg-[#1e293b]/50 text-white text-sm p-3 rounded-xl outline-none border border-white/10 focus:border-blue-500/50 transition-all placeholder:text-gray-500"
                    />
                    <button onClick={handleSend} className="bg-blue-500 p-3 rounded-xl text-white shadow-lg shadow-blue-600/20 transition-all active:scale-95">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" /></svg>
                    </button>
                </div>
            </div>
        )}

        {/* Floating Toggle Button: Premium Glow */}
     <button 
    onClick={() => setIsOpen(!isOpen)}
    className={`group bg-blue-500 w-16 h-16 rounded-full shadow-[0_10px_25px_rgba(59,130,246,0.4)] flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20 
    ${!isOpen ? 'animate-bounce' : ''}`} // Jab chat band ho tab hi jump kare
>
    {isOpen ? (
        <span className="text-2xl font-light">✕</span>
    ) : (
        <div className="relative">
            {/* Pop-up Message (Jump ke saath upar dikhega) */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#1e293b] to-[#334155] text-white text-[10px] font-bold py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg ">
                Ask me !
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 group-hover:rotate-12 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>
        </div>
    )}
</button>
    </div>
);
};

export default AIChat;