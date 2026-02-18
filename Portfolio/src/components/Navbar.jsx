import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Scroll effect logic
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Return hamesha function ke andar hona chahiye
    return (// Is line ko replace karein:
        <header className={`fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 shadow-lg' : 'py-5'} bg-[#030617]/90 backdrop-blur-sm border-b border-[#3b82f6]/20 w-full`}> <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between">

                {/* Logo Section */}
                <div className="flex items-center">
                    <a href="#home" className="text-2xl font-bold text-white flex items-center gap-2 group">
                        <span className="relative bg-[#3b82f6] text-white w-10 h-10 flex items-center justify-center rounded-lg rotate-3 group-hover:rotate-6 transition-all duration-300 shadow-[0_4px_14px_0_rgba(59,130,246,0.5)]">
                            A
                        </span>
                        <span className="relative text-[#3b82f6] group-hover:text-blue-400 transition-colors">
                            Adil
                        </span>
                    </a>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-6">
                    <a href="#home" className="text-[18px] leading-[28px] font-semibold text-[#E2E8F0] hover:text-white transition-colors">Home</a>
                    <a href="#about" className="text-[18px] leading-[28px] font-semibold text-[#E2E8F0] hover:text-white transition-colors">About</a>
                    <a href="#projects" className="text-[18px] leading-[28px] font-semibold text-[#E2E8F0] hover:text-white transition-colors">Projects</a>
                    <a href="#credentials" className="text-[18px] leading-[28px] font-semibold text-[#E2E8F0] hover:text-white transition-colors">Credentials</a>
                    <a href="#contact" className="contact-btn ml-2 px-6 py-2.5 bg-[#3b82f6] text-[#E2E8F0] font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(59,130,246,0.5)] hover:shadow-[0_10px_25px_0_rgba(59,130,246,0.7)]">Contact</a>
                </nav>

                {/* Mobile Toggle Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <nav className="flex flex-col bg-[#030617] backdrop-blur-lg rounded-xl p-4 space-y-2 border border-white/10">
                    <a href="#home" className="text-[18px] leading-[28px] font-semibold text-[#E2E8F0] block py-2 px-4 hover:bg-slate-800 rounded-lg">Home</a>
                    <a href="#about" className="text-[18px] leading-[28px] font-semibold text-[#E2E8F0] block py-2 px-4 hover:bg-slate-800 rounded-lg">About</a>
                    <a href="#projects" className="text-[18px] leading-[28px] font-semibold text-[#E2E8F0] block py-2 px-4 hover:bg-slate-800 rounded-lg">Projects</a>
                    <a href="#credentials" className="text-[18px] leading-[28px] font-semibold text-[#E2E8F0] block py-2 px-4 hover:bg-slate-800 rounded-lg">Credentials</a>
                    <a href="#contact" className="block py-3 px-4 bg-[#3b82f6] text-white rounded-lg font-bold text-left transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(59,130,246,0.5)] hover:shadow-[0_10px_25px_0_rgba(59,130,246,0.7)]">
                        Contact
                    </a>
                </nav>
            </div>
        </div>
        </header>
    );
};

export default Navbar;