import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./utils";
import { skills, techSkillsMetadata } from "../constants/constants";
import {
    C,
    Java,
    Python,
    JavaScript,
    TypeScript,
    NodeJs,
    ExpressJsLight,
    FastAPI,
    React as ReactIcon,
    PostgreSQL,
    MongoDB,
    Prisma,
    PyTorch,
    Git,
    GitHubDark,
    Docker,
    Jenkins
} from "developer-icons";

// Icon definition map to keep SVG rendering details inside components
const SKILL_ICONS: Record<string, React.ReactNode> = {
    "C": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <circle cx="12" cy="12" r="10" fill="#A8B9CC" opacity="0.15" />
            <path d="M16 8.5c-.7-.5-1.5-.7-2.3-.7-2 0-3.7 1.5-3.7 4.2s1.7 4.2 3.7 4.2c.9 0 1.6-.2 2.3-.7M8 12h1.5" stroke="#A8B9CC" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
    ),
    "Java": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <circle cx="12" cy="12" r="10" fill="#E76F51" opacity="0.1" />
            <path d="M6 14.5c2 0 5-.5 5-2s-1.5-2.5-3-3" stroke="#E76F51" strokeWidth="1.5" fill="none" />
            <path d="M11 10.5c1 0 3-.5 3-1.5s-1.5-2-3-2M8 17.5c2 0 6-.8 6-2.5" stroke="#E76F51" strokeWidth="1.5" fill="none" />
        </svg>
    ),
    "Python": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2" fill="white" opacity="0.05" />
            <path d="M11.75 3c-1.5 0-2.75.12-3.5.75c-.75.62-.75 1.5-.75 2.5V8.5h6.5V9h-9c-1 0-1.88.75-2.25 1.75c-.38 1-.38 2.25 0 3.25c.37 1 1.25 1.75 2.25 1.75h2.5v-3.5c0-.98.75-1.75 1.75-1.75h6.5V8.5c0-1-.12-1.88-.75-2.5C15.88 5.37 14.5 5 13 5c-.4 0-.85 0-1.25.06v-2c.16 0 .34-.06.5-.06z" fill="#3776AB" />
            <path d="M12.25 21c1.5 0 2.75-.12 3.5-.75c.75-.62.75-1.5.75-2.5V15.5H10v-.5h9c1 0 1.88-.75 2.25-1.75c.38-1 .38-2.25 0-3.25c-.37-1-.15-1.25-1.15-1.25H17.6v3.5c0 .98-.75 1.75-1.75 1.75H8.25v2c0 1 .12 1.88.75 2.5c.63.63 2 1 3.5 1c.4 0 .85 0 1.25-.06v2c-.16 0-.34.06-.5.06z" fill="#FFD343" />
        </svg>
    ),
    "JavaScript": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" rx="5" fill="#F7DF1E" />
            <text x="19" y="18" fill="#111" fontSize="10.5" fontWeight="black" fontFamily="sans-serif" textAnchor="end">JS</text>
        </svg>
    ),
    "TypeScript": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" rx="5" fill="#3178C6" />
            <text x="19" y="18" fill="white" fontSize="10.5" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">TS</text>
        </svg>
    ),
    "Node.js": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <path d="M12 2L4 6.5v9L12 20l8-4.5v-9z" fill="#339933" opacity="0.15" />
            <path d="M12 2.2L4.5 6.4v8.8L12 19.5l7.5-4.3v-8.8L12 2.2zm-1.5 13.5H9v-5.2h1.5v5.2zm0-6.1H9V8.1h1.5v1.5zm4.5 6.1H13.2v-5.2h1.8v1.2c.3-.5.8-.8 1.4-.8a1.9 1.9 0 0 1 1.9 1.9v2.9H16.8v-2.6c0-.6-.3-.9-.9-.9c-.6 0-.9.4-.9.9v2.6z" fill="#339933" />
        </svg>
    ),
    "Express": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" rx="5" fill="#353535" />
            <text x="12" y="15.5" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ex</text>
        </svg>
    ),
    "FastAPI": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" rx="5" fill="#009688" />
            <text x="12" y="16.5" fill="white" fontSize="13" fontWeight="black" textAnchor="middle" fontFamily="sans-serif">F</text>
        </svg>
    ),
    "REST APIs": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <circle cx="12" cy="12" r="10" fill="#4caf50" opacity="0.15" />
            <path d="M7 12h10M7 8h10M7 16h10" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    "Microservices": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <circle cx="12" cy="12" r="10" fill="#ff9800" opacity="0.15" />
            <rect x="5" y="5" width="5" height="5" rx="1" fill="#ff9800" />
            <rect x="14" y="5" width="5" height="5" rx="1" fill="#ff9800" />
            <rect x="9" y="14" width="6" height="5" rx="1" fill="#ff9800" />
        </svg>
    ),
    "React.js": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.8" fill="none" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.8" fill="none" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.8" fill="none" />
            <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
        </svg>
    ),
    "React Native": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
            <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
            <rect x="9" y="9" width="6" height="6" rx="1" stroke="#61DAFB" strokeWidth="1" fill="none" />
        </svg>
    ),
    "PostgreSQL": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <path d="M12 2a10 10 0 0 0-10 10c0 4.1 2.5 7.6 6 9.1v-2.2c-2.3-1.1-4-3.5-4-6.4a8 8 0 0 1 12-7 8 8 0 0 1 4 7c0 .5-.1 1.1-.2 1.6l1.6 1A10 10 0 0 0 12 2z" fill="#336791" opacity="0.15" />
            <path d="M9 16c0 1 .5 2 1.5 2.5s2 .2 2.8-.5c.8-.7 1.2-1.7 1.2-2.5s-.5-2-1.5-2.5S10.2 13 9.4 14c-.6.7-1 1.3-.4 2z" fill="#336791" />
            <path d="M17 19.5c.3-1.1.2-2.3-.3-3.3a8 8 0 0 0-3.3-3.6" stroke="#336791" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    "MongoDB": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <path d="M12 1.5C12 1.5 8.5 7.5 8.5 11.5C8.5 16.5 12 21 12 21C12 21 15.5 16.5 15.5 11.5C15.5 7.5 12 1.5 12 1.5Z" fill="#13AA52" opacity="0.2" />
            <path d="M12 1C12 1 11.5 2.5 11.5 6.5C11.5 11 12 13 12 13C12 13 12.5 11 12.5 6.5C12.5 2.5 12 1 12 1Z" fill="#47A248" />
            <path d="M12 13C12 13 11 15 11 17.5C11 19 12 21.5 12 21.5C12 21.5 13 19 13 17.5C13 15 12 13 12 13Z" fill="#3F8D40" />
        </svg>
    ),
    "Prisma": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <path d="M12 2L2 20h20L12 2zm0 4.2L18.8 18H5.2L12 6.2z" fill="#1B6D6D" opacity="0.2" />
            <path d="M12 2L5.2 18h13.6L12 2z" fill="#1B6D6D" />
        </svg>
    ),
    "Dribbble": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <circle cx="12" cy="12" r="10" fill="#EA4C89" opacity="0.2" />
            <circle cx="12" cy="12" r="8" stroke="#EA4C89" strokeWidth="1.5" fill="none" />
            <path d="M6 12c2.5 1 5 1 7.5 0M9 6c1 2.5 1 5 0 7.5M15 18c-1-2.5-1-5 0-7.5" stroke="#EA4C89" strokeWidth="1.5" fill="none" />
        </svg>
    ),
    "PyTorch": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <path d="M12 2L4 18h16L12 2z" fill="#EE4C2C" opacity="0.15" />
            <path d="M12 5l5 11H7l5-11z" fill="#EE4C2C" />
        </svg>
    ),
    "Scikit-Learn": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <circle cx="9" cy="12" r="5" fill="#F89939" />
            <circle cx="15" cy="12" r="5" fill="#3499CD" opacity="0.8" />
        </svg>
    ),
    "Git": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="18" height="18" rx="4" transform="rotate(45 12 12)" fill="#F05032" x="3" y="3" />
            <circle cx="9" cy="12" r="1.8" fill="white" />
            <circle cx="15" cy="9" r="1.8" fill="white" />
            <circle cx="15" cy="15" r="1.8" fill="white" />
            <path d="M10 12h3.5v-1.5M13.5 12v1.5" stroke="white" strokeWidth="1.5" fill="none" />
        </svg>
    ),
    "GitHub": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <circle cx="12" cy="12" r="10" fill="#181717" opacity="0.15" />
            <path d="M12 2A10 10 0 0 0 2 12c0 4.4 2.8 8.2 6.8 9.6c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3c-.5-1.2-1.1-1.5-1.1-1.5c-.9-.6.1-.6.1-.6c1 .1 1.5 1 1.5 1c.9 1.5 2.3 1.1 2.9.8c.1-.6.4-1.1.6-1.3c-2.2-.2-4.6-1.1-4.6-5c0-1.1.4-2 1-2.7c-.1-.3-.4-1.3.1-2.7c0 0 .8-.3 2.8 1c.8-.2 1.7-.3 2.5-.3c.8 0 1.7.1 2.5.3c2-1.3 2.8-1 2.8-1c.5 1.4.2 2.4.1 2.7c.6.7 1 1.6 1 2.7c0 3.8-2.3 4.7-4.6 5c.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5C19.2 20.2 22 16.4 22 12A10 10 0 0 0 12 2z" fill="white" />
        </svg>
    ),
    "Docker": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <path d="M2 13.5a6 6 0 0 0 7.5 5.8c2.5-.5 4.5-2.2 4.5-4.8c0-3-3-4.5-6-4.5v3.5" fill="#2496ED" opacity="0.3" />
            <rect x="5" y="6" width="3" height="3" fill="#2496ED" rx="0.5" />
            <rect x="9" y="6" width="3" height="3" fill="#2496ED" rx="0.5" />
            <rect x="7" y="2" width="3" height="3" fill="#2496ED" rx="0.5" />
            <path d="M12 13.5c1 0 2.5.5 3.5.5c1 0 2.5-.5 3.5-.5c1.5 0 2.5.5 3 .5c.1-.8-.4-1.5-1.2-1.8" stroke="#2496ED" strokeWidth="1.5" fill="none" />
        </svg>
    ),
    "Nginx": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <rect width="24" height="24" rx="5" fill="#009639" />
            <text x="12" y="15.5" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">N</text>
        </svg>
    ),
    "Jenkins": (
        <svg viewBox="0 0 24 24" className="w-full h-full">
            <circle cx="12" cy="12" r="10" fill="#D33833" opacity="0.15" />
            <path d="M12 4C9 4 7 6 7 8v2c0 2 2 3 5 3s5-1 5-3V8c0-2-2-4-5-4z" fill="#D33833" />
            <rect x="9" y="13" width="6" height="5" rx="1" fill="#D33833" opacity="0.6" />
        </svg>
    ),
    "CI/CD": (
        <svg viewBox="0 0 24 24" className="w-full h-full" stroke="#4b6cb7" strokeWidth="1.8" fill="none">
            <circle cx="8" cy="12" r="3" fill="#4b6cb7" opacity="0.15" />
            <circle cx="16" cy="12" r="3" fill="#4b6cb7" opacity="0.15" />
            <path d="M8 12a3 3 0 0 0 6 0" />
            <path d="M10 12a3 3 0 0 1 6 0" />
        </svg>
    )
};

// Component lookup dictionary for official developer-icons exports
const DEVELOPER_ICONS: Record<string, React.ComponentType<any>> = {
    "C": C,
    "Java": Java,
    "Python": Python,
    "JavaScript": JavaScript,
    "TypeScript": TypeScript,
    "Node.js": NodeJs,
    "Express": ExpressJsLight,
    "FastAPI": FastAPI,
    "React.js": ReactIcon,
    "PostgreSQL": PostgreSQL,
    "MongoDB": MongoDB,
    "Prisma": Prisma,
    "PyTorch": PyTorch,
    "Git": Git,
    "GitHub": GitHubDark,
    "Docker": Docker,
    "Jenkins": Jenkins
};

export default function Skills() {
    const categories = Object.keys(skills) as (keyof typeof skills)[];
    const [activeTab, setActiveTab] = useState<keyof typeof skills>(categories[0]);
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isHovered) return;

        const timer = setInterval(() => {
            setActiveTab((prev) => {
                const currentIndex = categories.indexOf(prev);
                const nextIndex = (currentIndex + 1) % categories.length;
                return categories[nextIndex];
            });
        }, 6000);

        return () => clearInterval(timer);
    }, [activeTab, categories, isHovered]);

    // Reset expanded status whenever category tabs change
    useEffect(() => {
        setIsExpanded(false);
    }, [activeTab]);

    const activeSkills = skills[activeTab] || [];
    const hasMore = isMobile && activeSkills.length > 6;
    const visibleSkills = (isMobile && !isExpanded) ? activeSkills.slice(0, 6) : activeSkills;

    return (
        <section
            id="skills"
            className="py-24 bg-transparent select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="container mx-auto px-6 max-w-[1040px]">
                {/* Section Title */}
                <Reveal className="text-center mb-12">
                    <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] font-black text-white leading-none tracking-normal">
                        Tech Stack
                    </h2>
                </Reveal>

                {/* Tab Controls with Loading Width Bars */}
                <div className="flex justify-center mb-16 px-4">
                    <div className="flex items-center gap-1 md:gap-1.5 bg-[#d44136]/50 p-1 md:p-1.5 rounded-[12px] md:rounded-[22px] border border-white/10 shadow-inner">
                        {categories.map((category) => {
                            const isActive = activeTab === category;
                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveTab(category)}
                                    className={`relative px-2.5 py-1.5 md:px-5 md:py-3 rounded-[8px] md:rounded-[16px] text-[10px] md:text-xs font-black tracking-wider md:tracking-widest uppercase transition-colors duration-300 ${isActive ? "text-[#fb5349] z-10" : "text-white/80 hover:text-white"
                                        }`}
                                    onMouseEnter={(e) => e.stopPropagation()}
                                >
                                    {isActive && (
                                        <>
                                            <motion.div
                                                layoutId="activeSkillTabIndicator"
                                                className="absolute inset-0 bg-white rounded-[8px] md:rounded-[16px] -z-10 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                            {/* Micro-loading progress bar under button */}
                                            {(!isHovered) && (
                                                <div className="absolute bottom-1 left-2.5 right-2.5 md:left-4 md:right-4 h-0.5 bg-black/10 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: "0%" }}
                                                        animate={{ width: "100%" }}
                                                        transition={{ duration: 6, ease: "linear" }}
                                                        className="h-full bg-[#fb5349]"
                                                    />
                                                </div>
                                            )}
                                        </>
                                    )}
                                    {category}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Grid Wrapper */}
                <div className="relative w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.25 }}
                            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-4 ${hasMore && !isExpanded ? "pb-28" : ""
                                }`}
                        >
                            {visibleSkills.map((skillName) => {
                                const meta = techSkillsMetadata[skillName] || { description: "Skill Tech", color: "#61DAFB" };

                                // Direct lookup from developer-icons or fallback to custom SVGs
                                const IconComponent = DEVELOPER_ICONS[skillName];
                                const icon = IconComponent ? (
                                    <IconComponent
                                        className={`w-full h-full ${skillName === "GitHub" ? "[&_path]:fill-[var(--ink)]" : ""
                                            }`}
                                    />
                                ) : (
                                    SKILL_ICONS[skillName] || (
                                        <svg viewBox="0 0 24 24" className="w-full h-full">
                                            <circle cx="12" cy="12" r="10" fill={meta.color} opacity="0.15" />
                                            <text x="12" y="15.5" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">{skillName.slice(0, 3)}</text>
                                        </svg>
                                    )
                                );

                                return (
                                    <motion.div
                                        key={skillName}
                                        whileHover={{
                                            y: -6,
                                            borderColor: meta.color,
                                            boxShadow: `0 12px 30px ${meta.color}24`
                                        }}
                                        transition={{ type: "spring", stiffness: 450, damping: 25 }}
                                        className="w-full flex items-center gap-4 bg-[var(--cream)] border border-[var(--line)] rounded-[24px] p-5 relative group transition-colors duration-300 shadow-sm"
                                    >
                                        {/* Left Side: Logo */}
                                        <div className="w-12 h-12 shrink-0 flex items-center justify-center p-2 bg-[var(--ink)]/[0.04] rounded-lg group-hover:scale-105 transition-transform duration-300">
                                            {icon}
                                        </div>

                                        {/* Right Side: Title & Description */}
                                        <div className="flex flex-col">
                                            <span className="text-[17px] font-black text-[var(--ink)] leading-none">
                                                {skillName}
                                            </span>
                                            <span className="text-[11px] font-bold text-[var(--ink)]/70 mt-1.5 leading-normal group-hover:text-[var(--ink)]/90 transition-colors duration-300">
                                                {meta.description}
                                            </span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>

                    {/* Gradient Fade Overlay & Trigger Button */}
                    {hasMore && !isExpanded && (
                        <div
                            style={{
                                background: "linear-gradient(to top, var(--theme-bg) 25%, transparent 100%)"
                            }}
                            className="absolute bottom-0 left-0 right-0 h-44 flex items-end justify-center pointer-events-none pb-4 z-20"
                        >
                            <button
                                onClick={() => setIsExpanded(true)}
                                className="pointer-events-auto group relative overflow-hidden inline-flex h-[48px] items-center bg-white rounded-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.18)] border border-[var(--line)] transition-transform hover:scale-105 active:scale-95 text-[#fb5349]"
                            >
                                <span className="px-6 text-[11.5px] font-black uppercase tracking-[0.14em] text-[#fb5349]">
                                    Show {activeSkills.length - 6} More
                                </span>
                            </button>
                        </div>
                    )}

                    {/* Show Less button when expanded */}
                    {hasMore && isExpanded && (
                        <div className="flex justify-center mt-6 z-25 relative">
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="group relative overflow-hidden inline-flex h-[46px] items-center bg-white rounded-[16px] border border-[var(--line)] shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-transform hover:scale-105 active:scale-95 text-[#fb5349]"
                            >
                                <span className="px-6 text-[11px] font-black uppercase tracking-wider">
                                    Show Less
                                </span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
