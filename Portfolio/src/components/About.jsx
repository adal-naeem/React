import React from 'react';
import { motion } from 'framer-motion';

// Apni photo yahan import karein
import myPhoto from '../assets/images/adil.png';

const About = () => {
    return (
        <section id="about" style={{ paddingTop: '80px', paddingBottom: '80px' }} className="bg-gradient-custom">
            {/* Glow Background Effect */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-[36px] leading-[40px] font-bold text-[#F8FAFC] font-['Inter',_ui-sans-serif,_system-ui,_sans-serif] mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:h-[0.25rem] after:w-[3rem] after:bg-blue-500 after:rounded-full">
                        About Me
                    </h2>
                    <p className="mt-4 text-[#E2E8F0] max-w-2xl mx-auto text-[16px] leading-[24px] font-normal font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                        Software Engineering student at <b className="font-bold text-[#F8FAFC]">UOG</b>, dedicated to building high-performance <b className="font-bold text-[#F8FAFC]">React</b> applications and crafting seamless user experiences with modern frontend technologies.
                    </p>
                </div>

                <div
                    className="grid md:grid-cols-2 gap-12 items-center">




                        
                <motion.div
                    initial={{ opacity: 0, y: 150 }} // Shuru mein gayab aur 50px niche
                    whileInView={{ opacity: 1, y: 0 }} // Jab scroll karke nazar aaye toh opacity 1 aur apni jagah (0) par
                    viewport={{ once: true, amount: 0.2 }} // Sirf ek baar ho, aur jab 20% nazar aaye tab shuru ho
                    transition={{ duration: 0.5, ease: "easeOut" }} >
                    <div className="flex justify-center order-2 md:order-1">
                        <div className="relative">
                            <div className="absolute -inset-1.5 bg-[#1e3c7a] rounded-2xl blur-2xl opacity-80"></div>
                            <div className="relative overflow-hidden rounded-2xl border-4 border-white/10 shadow-2xl">
                                <img
                                    src={myPhoto}
                                    alt="Profile"
                                    className="w-80 h-80 md:w-96 md:h-96 object-contain transition-all duration-500 hover:scale-105" />
                            </div>
                        </div>
                    </div></motion.div>




                    
                <motion.div
                    initial={{ opacity: 0, y: 150 }} // Shuru mein gayab aur 50px niche
                    whileInView={{ opacity: 1, y: 0 }} // Jab scroll karke nazar aaye toh opacity 1 aur apni jagah (0) par
                    viewport={{ once: true, amount: 0.2 }} // Sirf ek baar ho, aur jab 20% nazar aaye tab shuru ho
                    transition={{ duration: 0.5, ease: "easeOut" }} >
                    <div className="order-1 md:order-2">
                        <div className="group relative bg-gradient-to-br from-[#1e293b] to-[#334155] backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="flex items-center mb-8 relative z-10">
                                <div className="h-10 w-1 bg-blue-500 rounded-full mr-4 shadow-[0_0_10px_rgba(59,130,246,1)]"></div><h3 className="text-[36px] leading-[40px] font-bold text-[#F8FAFC] group-hover:text-blue-400 transition-colors duration-300 font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                                    My Journey
                                </h3>
                            </div>
                            <div className="relative z-10 space-y-6 font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                                <p className="text-[16px] leading-[24px] font-normal text-[#E2E8F0]">
                                    I am a <span className="text-[#3b82f6] font-medium">Software Engineering student at UOG</span> with a deep passion for Frontend Development. I specialize in building responsive user interfaces using
                                    <span className="text-[#3b82f6] font-medium"> React.js and Tailwind CSS</span>, focusing on clean code and efficient component architecture.
                                </p>

                                <p className="text-[16px] leading-[24px] font-normal text-[#E2E8F0]">
                                    Leveraging my expertise gained from the <span className="text-[#3b82f6] font-medium">Complete Coding</span> ecosystem, I have successfully mastered and implemented advanced concepts including
                                    <span className="text-[#3b82f6] font-medium"> State Management, RESTful API Integration, and Custom React Hooks</span> to deliver scalable and high-performance digital solutions.
                                </p>

                                <p className="text-[16px] leading-[24px] font-normal text-[#E2E8F0]">
                                    I am a self-motivated developer who loves to <span className="text-[#3b82f6] font-medium">build in public</span>. My goal is to bridge the gap between complex software engineering principles and intuitive, user-friendly web interfaces.
                                </p>
                            </div>

                            <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent rounded-full mt-8 transform transition-all duration-500 group-hover:scale-x-110"></div>
                        </div>
                    </div>
                </motion.div>
                
         </div>
            </div>
        </section>
    );
};

export default About;