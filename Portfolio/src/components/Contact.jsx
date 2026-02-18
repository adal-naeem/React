import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" style={{ paddingTop: '80px', paddingBottom: '80px' }} className="bg-gradient-custom">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-600/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-40 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto relative z-10 px-4">
                {/* Section Header */}
                <div
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-[#F8FAFC] mb-3 relative inline-block after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:h-[0.25rem] after:w-[3rem] after:bg-blue-500 after:rounded-full">Get In Touch</h2>
                    <p className="mt-4 text-[#E2E8F0] max-w-2xl mx-auto text-[16px] leading-[24px] font-normal font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                        Let's connect and discuss how we can collaborate on your next project
                    </p>
                </div>



                <motion.div
                                initial={{ opacity: 0, y: 150 }} // Shuru mein gayab aur 50px niche
                                whileInView={{ opacity: 1, y: 0 }} // Jab scroll karke nazar aaye toh opacity 1 aur apni jagah (0) par
                                viewport={{ once: true, amount: 0.2 }} // Sirf ek baar ho, aur jab 20% nazar aaye tab shuru ho
                                transition={{ duration: 0.5, ease: "easeOut" }} >

                <div className="max-w-4xl mx-auto">
                    {/* Main Glass Card */}
                    <div
                        className="bg-gradient-to-br from-[#1e293b] to-[#334155] border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_25px_-5px_rgba(51,65,85,0.9)] transition-all duration-300"
                    >
                        <div className="text-center mb-10">
                            <p className="max-w-2xl mx-auto text-[#E2E8F0] text-[18px] leading-[28px] font-normal text-center font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10">
                            {/* Left Side: Info Blocks */}
                            <div className="space-y-6">
                                {/* Email Block */}
                                <div className="group flex items-start p-5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-blue-500/30">
                                    <div className="mr-4 p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1 group-hover:text-blue-400 transition-colors">Email</h3>
                                        <a href="mailto:adilnaeem076@gmail.com" className="text-gray-400 hover:text-white transition-colors break-all">
                                            adilnaeem076@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Social Block */}
                                <div className="group flex items-start p-5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-blue-500/30">
                                    <div className="mr-4 p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1 group-hover:text-blue-400 transition-colors">Social Profiles</h3>
                                        <div className="flex space-x-4 mt-3">
                                            <SocialIcon href="https://github.com/adal-naeem" icon={<GithubLogo />} label="GitHub" />
                                            <SocialIcon href="https://www.linkedin.com/in/adil-naeem-aifront-dev/" icon={<LinkedinLogo />} label="LinkedIn" />
                                            <SocialIcon href="https://wa.me/923297707699" icon={<WhatsappLogo />} label="WhatsApp" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Quick Action Buttons */}
                            <div className="flex flex-col justify-center space-y-4 ">
                                <a href="mailto:adilnaeem076@gmail.com"
                                    className="shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(59,130,246,0.5)] hover:shadow-[0_10px_25px_0_rgba(59,130,246,0.7)] flex items-center justify-center gap-2 py-4 px-6 bg-blue-500 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    Email Me
                                </a>
                                <a href="https://www.linkedin.com/in/adil-naeem-aifront-dev/" target="_blank" rel="noopener noreferrer"
                                    className="transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 py-4 px-6 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/10 transition-all active:scale-95">
                                    <LinkedinLogo className="w-5 h-5" />
                                    LinkedIn
                                </a><p className="mt-4 text-[#E2E8F0] text-[16px] leading-[24px] font-normal text-center font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                                    Looking forward to connecting with you!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


</motion.div>

            </div>
        </section>
    );
};

// --- Helpers ---
const SocialIcon = ({ href, icon, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer"
        className="bg-white/10 p-3 rounded-xl text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
        aria-label={label}>
        {icon}
    </a>
);

const GithubLogo = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>;
const LinkedinLogo = ({ className }) => <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>;
const WhatsappLogo = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.63 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);
export default Contact;