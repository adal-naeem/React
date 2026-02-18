import { motion } from 'framer-motion';
// Apni images yahan import karein
import dd from '../assets/images/dd.png';

const Projects = () => {
    // 1. Data Array: Aap yahan apne projects ki details add kar sakte hain
    const projectsData = [
        {
            title: "AI Chat Dashboard",
            desc: "Real-time intelligent interface with dark mode and Framer Motion.",
            image: dd,
            tech: ["React", "Tailwind", "Framer"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            title: "E-Commerce App",
            desc: "Full-stack shopping platform with secure payment integration.",
            image: dd, // Dusri image use karein yahan
            tech: ["Next.js", "MongoDB", "Stripe"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            title: "E-Commerce App",
            desc: "Full-stack shopping platform with secure payment integration.",
            image: dd, // Dusri image use karein yahan
            tech: ["Next.js", "MongoDB", "Stripe"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            title: "E-Commerce App",
            desc: "Full-stack shopping platform with secure payment integration.",
            image: dd, // Dusri image use karein yahan
            tech: ["Next.js", "MongoDB", "Stripe"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            title: "E-Commerce App",
            desc: "Full-stack shopping platform with secure payment integration.",
            image: dd, // Dusri image use karein yahan
            tech: ["Next.js", "MongoDB", "Stripe"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            title: "E-Commerce App",
            desc: "Full-stack shopping platform with secure payment integration.",
            image: dd, // Dusri image use karein yahan
            tech: ["Next.js", "MongoDB", "Stripe"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            title: "E-Commerce App",
            desc: "Full-stack shopping platform with secure payment integration.",
            image: dd, // Dusri image use karein yahan
            tech: ["Next.js", "MongoDB", "Stripe"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            title: "E-Commerce App",
            desc: "Full-stack shopping platform with secure payment integration.",
            image: dd, // Dusri image use karein yahan
            tech: ["Next.js", "MongoDB", "Stripe"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            title: "E-Commerce App",
            desc: "Full-stack shopping platform with secure payment integration.",
            image: dd, // Dusri image use karein yahan
            tech: ["Next.js", "MongoDB", "Stripe"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            title: "E-Commerce App",
            desc: "Full-stack shopping platform with secure payment integration.",
            image: dd, // Dusri image use karein yahan
            tech: ["Next.js", "MongoDB", "Stripe"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            title: "E-Commerce App",
            desc: "Full-stack shopping platform with secure payment integration.",
            image: dd, // Dusri image use karein yahan
            tech: ["Next.js", "MongoDB", "Stripe"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            title: "E-Commerce App",
            desc: "Full-stack shopping platform with secure payment integration.",
            image: dd, // Dusri image use karein yahan
            tech: ["Next.js", "MongoDB", "Stripe"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            title: "E-Commerce App",
            desc: "Full-stack shopping platform with secure payment integration.",
            image: dd, // Dusri image use karein yahan
            tech: ["Next.js", "MongoDB", "Stripe"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            title: "E-Commerce App",
            desc: "Full-stack shopping platform with secure payment integration.",
            image: dd, // Dusri image use karein yahan
            tech: ["Next.js", "MongoDB", "Stripe"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            title: "E-Commerce App",
            desc: "Full-stack shopping platform with secure payment integration.",
            image: dd, // Dusri image use karein yahan
            tech: ["Next.js", "MongoDB", "Stripe"],
            liveLink: "#",
            codeLink: "#"
        },
        
    ];

    return (
        <section id="projects" style={{ paddingTop: '80px', paddingBottom: '80px' }} className="bg-gradient-custom">
            <div className="container mx-auto px-4">
                <div

                    className="text-center mb-16"
                ><h2 className="text-[36px] leading-[40px] font-bold text-[#F8FAFC] font-['Inter',_ui-sans-serif,_system-ui,_sans-serif] mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:h-[0.25rem] after:w-[3rem] after:bg-blue-500 after:rounded-full">
                        Projects
                    </h2>
                    <p className="mt-4 text-[#E2E8F0] max-w-2xl mx-auto text-[16px] leading-[24px] font-normal font-['Inter',_ui-sans-serif,_system-ui,_sans-serif]">
                        A collection of projects where code meets creativity and performance.
                    </p>
                </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
  {projectsData.map((project, index) => (
    <motion.div
      key={index}  // Har card ka unique key
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }} // Optional delay for stagger effect
    >
      <ProjectCard {...project} index={index} />
    </motion.div>
  ))}
</div>

            </div>
        </section>
    );
};

const ProjectCard = ({ title, desc, image, tech, liveLink, codeLink, index }) => {
    return (
        <div className="group relative bg-gradient-to-br from-[#1e293b] to-[#334155] backdrop-blur-lg border border-white/10 p-6 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50 overflow-hidden">

            <div className="relative h-48 mb-6 overflow-hidden rounded-2xl">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={liveLink} target="_blank" className="p-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)] text-white hover:scale-110 transition-transform">
                        Live
                    </a>
                    <a href={codeLink} target="_blank" className="p-3 bg-white/20 rounded-full backdrop-blur-md text-white hover:scale-110 transition-transform">
                        Code
                    </a>
                </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-[14px] leading-[20px] font-normal text-[#E2E8F0] font-['Inter',_ui-sans-serif,_system-ui,_sans-serif] mb-4">
                {desc}
            </p>
            <div className="flex flex-wrap gap-2">
                {tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs bg-blue-500/10 text-[#3b82f6] rounded-full border border-blue-500/20">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Projects;