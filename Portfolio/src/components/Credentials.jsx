import React from 'react';
import { motion } from 'framer-motion';
// Image path sahi kar lena agar error aaye
import contactImg from '../assets/images/adil.png';

const Credentials = () => {
    return (
        <section id="credentials" style={{ paddingTop: '80px', paddingBottom: '80px' }}
            className="bg-gradient-custom">
            {/* Background Glow */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4">
                {/* Header */}
                <div
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-[#F8FAFC] mb-3 relative inline-block after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:h-[0.25rem] after:w-[3rem] after:bg-blue-500 after:rounded-full">Credentials</h2>
                    <p className="mt-4 text-[#E2E8F0] max-w-2xl mx-auto text-[16px] leading-[24px] font-normal font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                        My journey of continuous learning, from academic foundations at UOG to mastering the modern React ecosystem.
                    </p>
                </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">


                        <motion.div
                                                initial={{ opacity: 0, y: 150 }} // Shuru mein gayab aur 50px niche
                                                whileInView={{ opacity: 1, y: 0 }} // Jab scroll karke nazar aaye toh opacity 1 aur apni jagah (0) par
                                                viewport={{ once: true, amount: 0.2 }} // Sirf ek baar ho, aur jab 20% nazar aaye tab shuru ho
                                                transition={{ duration: 0.5, ease: "easeOut" }} >
                        {/* Left Side: Image with Glow Effect */}
                        <div className="flex justify-center order-2 md:order-1">
                            <div className="relative group">
                                {/* Background Glow - Same as your profile photo glow */}
                                <div className="absolute -inset-1.5 bg-[#1e3c7a] rounded-2xl blur-2xl opacity-80"></div>

                                <div className="relative overflow-hidden rounded-2xl border-4 border-white/10 shadow-xl bg-white/5">
                                    <img
                                        src={contactImg}
                                        alt="Credentials Profile"
                                        className="w-full aspect-square object-contain transition-all duration-500 hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                        </motion.div>




                        {/* Right Side: Info Cards */}
                        <div className="space-y-6 order-1 md:order-2">



                            <motion.div
                                                initial={{ opacity: 0, y: 150 }} // Shuru mein gayab aur 50px niche
                                                whileInView={{ opacity: 1, y: 0 }} // Jab scroll karke nazar aaye toh opacity 1 aur apni jagah (0) par
                                                viewport={{ once: true, amount: 0.2 }} // Sirf ek baar ho, aur jab 20% nazar aaye tab shuru ho
                                                transition={{ duration: 0.5, ease: "easeOut" }} >

                            {/* 1. Contact Details */}
                            <CredentialCard title={
                                <span className="text-[#F8FAFC] text-[20px] leading-[28px] font-semibold font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                                    Contact Details
                                </span>
                            } icon={<MailIcon />}>
                                <div className="space-y-3"><ContactItem
                                    icon={<UserIcon />}
                                    text={
                                        <span className="text-[#F8FAFC] text-[16px] leading-[24px] font-normal font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                                            Adil Naeem
                                        </span>
                                    }
                                />
                                    <ContactItem icon={<LocationIcon />} text={
                                        <span className="text-[#F8FAFC] text-[16px] leading-[24px] font-normal font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                                            Gujrat ,Pakistan
                                        </span>
                                    } />
                                    <ContactItem icon={<MailIcon />} text={
                                        <span className="text-blue-400 text-[16px] leading-[24px] font-normal font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                                            <a href="mailto:adilnaeem076@gmail.com">adilnaeem076@gmail.com</a>
                                        </span>
                                    } />
                                </div>
                            </CredentialCard>
                            </motion.div>


                            <motion.div
                                                initial={{ opacity: 0, y: 150 }} // Shuru mein gayab aur 50px niche
                                                whileInView={{ opacity: 1, y: 0 }} // Jab scroll karke nazar aaye toh opacity 1 aur apni jagah (0) par
                                                viewport={{ once: true, amount: 0.2 }} // Sirf ek baar ho, aur jab 20% nazar aaye tab shuru ho
                                                transition={{ duration: 0.5, ease: "easeOut" }} >
                            {/* 2. Skills */}
                            <CredentialCard title={
                                <span className="text-[#F8FAFC] text-[20px] leading-[28px] font-semibold font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                                    Technical Skills
                                </span>
                            } icon={<CertIcon />}>
                                <div className="space-y-4 py-1 px-2">
                                    <CertItem
                                        title={
                                            <span className="text-[#F8FAFC] text-[16px] leading-[24px] font-medium font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                                                Frontend Development
                                            </span>
                                        } org={
                                            <span className="text-blue-400 text-[16px] leading-[24px] font-normal font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                                                React.js, Tailwind CSS, HTML5/CSS3
                                            </span>
                                        }
                                        date="Advanced"
                                    />
                                    <CertItem
                                        title={
                                            <span className="text-[#F8FAFC] text-[16px] leading-[24px] font-medium font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                                                State Management
                                            </span>
                                        }
                                        org={
                                            <span className="text-blue-400 text-[16px] leading-[24px] font-normal font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                                                Hooks (useEffect, useContext), Redux
                                            </span>
                                        }
                                        date="Proficient"
                                    />
                                    <CertItem
                                        title={
                                            <span className="text-[#F8FAFC] text-[16px] leading-[24px] font-medium font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                                                API Integration
                                            </span>
                                        } org={
                                            <span className="text-blue-400 text-[16px] leading-[24px] font-normal font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                                                RESTful APIs, Fetch, Async/Await
                                            </span>
                                        }
                                        date="Expertise"
                                    />
                                    <CertItem
                                        title={
                                            <span className="text-[#F8FAFC] text-[16px] leading-[24px] font-medium font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                                                Software Engineerin
                                            </span>
                                        } org={
                                            <span className="text-blue-400 text-[16px] leading-[24px] font-normal font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                                                Clean Code, SDLC, AbortController
                                            </span>
                                        }
                                        date="Core"
                                    />
                                </div>
                            </CredentialCard>
                            </motion.div>





                            <motion.div
                                                initial={{ opacity: 0, y: 150 }} // Shuru mein gayab aur 50px niche
                                                whileInView={{ opacity: 1, y: 0 }} // Jab scroll karke nazar aaye toh opacity 1 aur apni jagah (0) par
                                                viewport={{ once: true, amount: 0.2 }} // Sirf ek baar ho, aur jab 20% nazar aaye tab shuru ho
                                                transition={{ duration: 0.5, ease: "easeOut" }} >

                            {/* 3. Education */}
                            <CredentialCard title={
                                <span className="text-[#F8FAFC] text-[20px] leading-[28px] font-semibold font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                                    Education
                                </span>
                            } icon={<EduIcon />}>
                                <div className="py-1 px-2">
                                    <h4 className="text-lg font-medium text-white">BS Software Engineering</h4>
                                    <p className=" text-gray-400 text-[16px] leading-[24px] font-normal font-['Inter',_ui-sans-serif,_system-ui,_sans-serif] hover:text-white transition-colors break-all">Department of Software Engineering</p>
                                    <p className="text-blue-400 text-[16px] leading-[24px] font-normal font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">University of Gujrat (2024 - Present)</p>
                                </div>
                            </CredentialCard>


                            </motion.div>
                        </div>
                    </div>
            </div>
        </section>
    );
};

// --- Reusable Sub-Components ---

const CredentialCard = ({ title, icon, children }) => (
    <div
        className="bg-gradient-to-br from-[#1e293b] to-[#334155] backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/30 hover:shadow-xl transition-all duration-300"
    >
        <h3 className="text-xl font-semibold text-white mb-4 inline-flex items-center">
            <span className="p-2 bg-white/5 rounded-lg text-blue-500 mr-3">{icon}</span>
            {title}
        </h3>
        {children}
    </div>
);

const ContactItem = ({ icon, text }) => (
    <div className="flex items-center group py-1 px-2 rounded-lg hover:bg-white/5 transition-all">
        <span className="text-blue-400 mr-3 group-hover:scale-110 transition-transform">{icon}</span>
        <p className="text-gray-400 group-hover:text-white transition-colors">{text}</p>
    </div>
);

const CertItem = ({ title, org, date }) => (
    <div className="group py-1 px-2 rounded-lg hover:bg-white/5 transition-all">
        <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">{title}</h4>
        <div className="text-gray-500 text-xs flex items-center mt-1">
            <span className="text-blue-500">{org}</span>
            <span className="mx-2">•</span>
            <span className=" text-gray-400 text-[16px] leading-[24px] font-normal font-['Inter',_ui-sans-serif,_system-ui,_sans-serif] hover:text-white transition-colors break-all">{date}</span>
        </div>
    </div>
);

// --- Icons ---
const MailIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const UserIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const LocationIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const CertIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const EduIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>;

export default Credentials;