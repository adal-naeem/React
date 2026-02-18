import React from 'react';

const Footer = () => {
    // JavaScript logic saal ko auto-update karne ke liye
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#030617] py-8 border-t border-white/5">
            <div className="container mx-auto px-4 text-center">
                {/* Year yahan auto-update hoga */}
                <p className="text-[#E2E8F0] text-[16px] leading-[24px] font-normal font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                    © {currentYear} <span className="text-[#3b82f6] font-semibold">Adil Naeem</span>. All rights reserved.
                </p>

            </div>
        </footer>
    );
};

export default Footer;