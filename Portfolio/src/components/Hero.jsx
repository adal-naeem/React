import React from 'react'

import { motion } from 'framer-motion';
import adilImg from '../assets/images/adil.png'
import htmlImg from '../assets/images/html.webp'
import cssImg from '../assets/images/css.png'
import jsImg from '../assets/images/js.webp'
import reactImg from '../assets/images/react.webp'
import gitImg from '../assets/images/version_control.png'
import tailwindImg from '../assets/images/tailwind.png'
import bootstrapImg from '../assets/images/Bootstrap.png'
import figmaImg from '../assets/images/Figma.png'

const Hero = () => {
    return (
        
        <div id="home" className="bg-gradient-custom ">
            {/* Orbits Container: Mobile par scale chota kiya gaya hai */}
            <div className="main-container relative mt-8 md:mt-16 scale-[0.55] sm:scale-75 md:scale-90 lg:scale-100 transition-transform duration-500">
                <svg className="orbits-svg" width="600" height="600">
                    <circle cx="300" cy="300" r="165" stroke="gray" strokeWidth="2" strokeDasharray="6 6" fill="none" />
                    <circle cx="300" cy="300" r="250" stroke="gray" strokeWidth="3" strokeDasharray="10 10" fill="none" />
                </svg>

                <div className="profile-frame">
                    <img src={adilImg} alt="Adil Naeem" />
                </div>

                {/* Inner Icons */}
                <div className="tech-container inner">
                    <div className="tech-icon" style={{ animation: 'counter-rotate-inner 6s linear infinite', '--start-angle': '0deg' }}>
                        <img className="innercircle" src={htmlImg} alt="HTML5" />
                        <span>HTML5</span>
                    </div>
                    <div className="tech-icon" style={{ animation: 'counter-rotate-inner 6s linear infinite', '--start-angle': '120deg' }}>
                        <img className="innercircle" src={cssImg} alt="CSS3" />
                        <span>CSS3</span>
                    </div>
                    <div className="tech-icon" style={{ animation: 'counter-rotate-inner 6s linear infinite', '--start-angle': '240deg' }}>
                        <img className="innercircle" src={jsImg} alt="JS" />
                        <span>JavaScript</span>
                    </div>
                </div>

                {/* Outer Icons */}
                <div className="tech-container outer">
                    {[
                        { img: reactImg, label: 'React', angle: '0deg' },
                        { img: gitImg, label: 'Git/Github', angle: '72deg' },
                        { img: tailwindImg, label: 'Tailwind', angle: '144deg' },
                        { img: bootstrapImg, label: 'Bootstrap', angle: '216deg' },
                        { img: figmaImg, label: 'Figma', angle: '288deg' }
                    ].map((tech, index) => (
                        <div key={index} className="tech-icon " style={{ animation: 'counter-rotate-outer 11s linear infinite', '--start-angle': tech.angle }}>
                            <img className="outercircle" src={tech.img} alt={tech.label} />
                            <span>{tech.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Text Section: Added Responsive Padding and Font Sizes */}
            <motion.div
                initial={{ opacity: 0, y: 150 }} // Shuru mein gayab aur 50px niche
                whileInView={{ opacity: 1, y: 0 }} // Jab scroll karke nazar aaye toh opacity 1 aur apni jagah (0) par
                viewport={{ once: true, amount: 0.1 }} // Sirf ek baar ho, aur jab 20% nazar aaye tab shuru ho
                transition={{ duration: 0.5, ease: "easeOut" }} // Speed aur smoothness
                className="text-center w-full max-w-2xl mx-auto px-4 pb-20 -mt-10 sm:mt-0"
            >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-accent-light leading-tight">
                    Adil Naeem
                </h1>
                <h2 className="text-lg md:text-2xl text-text-secondary mb-8 font-medium">
                    Crafting Intelligent Interfaces | AI-Front Dev
                </h2>

                <div className="flex flex-col items-center gap-5">
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
                        {/* GitHub Button */}
                        <a
                            href="https://github.com/adal-naeem"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon group flex items-center gap-2 bg-surface/40 backdrop-blur-sm hover:bg-surface-light/40 px-3 py-2 sm:px-4 sm:py-2 rounded-full transition-all"
                            aria-label="GitHub"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                            </svg>
                            <span className="text-sm sm:text-base">GitHub</span>
                        </a>

                        {/* LinkedIn Button */}
                        <a
                            href="https://www.linkedin.com/in/adil-naeem-aifront-dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon group flex items-center gap-2 bg-surface/40 backdrop-blur-sm hover:bg-surface-light/40 px-3 py-2 sm:px-4 sm:py-2 rounded-full transition-all"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                            </svg>
                            <span className="text-sm sm:text-base">LinkedIn</span>
                        </a>
                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/923297707699" // Apna number yahan likhein
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon group flex items-center gap-2 bg-surface/40 backdrop-blur-sm hover:bg-surface-light/40 px-3 py-2 sm:px-4 sm:py-2 rounded-full transition-all"
                            aria-label="WhatsApp"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                            </svg>
                            <span className="text-sm sm:text-base">WhatsApp</span>
                        </a>
                    </div>

                    <a href="/my-cv.pdf" download className="bg-accent bg-blue-500 ">
                        Download CV
                        <svg
                            className="w-5 h-5 ml-2 animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {/* Download Icon: Neeche wali line aur Arrow */}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                        </svg>
                    </a>
                </div>
            </motion.div>
        </div >
    )
}

export default Hero