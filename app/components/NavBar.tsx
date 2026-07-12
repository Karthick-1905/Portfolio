import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";

// Custom LeetCode SVG path component matching the standard coordinate dimensions
const LeetCodeIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M22.446 12.01c-.08-.056-.168-.1-.26-.118l-.004-.002-8.36-8.314c-.655-.655-1.72-.656-2.377 0l-2.368 2.365a.675.675 0 000 .954l.823.82c.264.264.693.264.957 0l1.376-1.376a.67.67 0 01.949 0l6.082 6.049a.669.669 0 010 .949l-6.082 6.05a.67.67 0 01-.95 0l-4.145-4.122-1.376 1.376c-.264.264-.264.693 0 .957l4.558 4.533c.655.655 1.72.655 2.377 0l8.364-8.315c.09-.016.177-.06.257-.116a1.688 1.688 0 00.005-2.981zM10.22 8.795l-7.79 7.75c-.657.654-.657 1.718 0 2.376l2.368 2.366c.656.655 1.72.655 2.377 0l7.794-7.756a.671.671 0 000-.95l-.824-.82a1.353 1.353 0 00-.957-.396 1.332 1.332 0 00-.968.43zM2.28 12.015L.436 13.85c-.58.58-.58 1.527 0 2.108l2.368 2.365c.579.58 1.523.58 2.103 0l1.845-1.835L2.282 12.015z" />
    </svg>
);

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Match styling triggers
            setScrolled(currentScrollY > 18);

            // Visibility state logic - scroll down hides header, scroll up reveals
            if (currentScrollY < 50) {
                setIsVisible(true);
            } else {
                if (currentScrollY > lastScrollY) {
                    setIsVisible(false);
                    setIsOpen(false); // Auto close mobile dropdown on scroll down
                } else {
                    setIsVisible(true);
                }
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 flex flex-col items-center p-3 pt-4 md:pt-8 z-50"
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : -130 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
        >
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex justify-between items-center w-[calc(100vw-24px)] md:w-[calc(100vw-32px)] max-w-[1040px] h-[52px] md:h-[76px] rounded-[10px] bg-[#fb5349] shadow-[0_12px_36px_rgba(251,83,73,0.25)] border border-[#e5453b]/40 transition-[box-shadow,transform] duration-300 ${scrolled ? "shadow-[0_16px_48px_rgba(251,83,73,0.35)] scale-[0.98]" : ""
                    }`}
            >
                {/* Logo and Monogram */}
                <div className="flex h-full shrink-0 items-center rounded-[10px] bg-[#fbfbfb] px-3.5 md:px-8">
                    <div className="mr-2.5 md:mr-5 grid grid-cols-2 gap-1 md:gap-1.5">
                        <span className="size-[4px] md:size-[5px] rounded-full bg-[#fca29b]"></span>
                        <span className="size-[4px] md:size-[5px] rounded-full bg-[#fca29b]"></span>
                        <span className="size-[4px] md:size-[5px] rounded-full bg-[#fca29b]"></span>
                    </div>

                    <div className="relative mr-2 md:mr-3 flex h-full w-[32px] md:w-[52px] items-center justify-center overflow-hidden">
                        <div className="absolute inset-y-0 left-1/2 w-[2px] md:w-[2.5px] -translate-x-1/2 bg-[#fb5349] z-10" />
                        <div className="relative flex size-[28px] md:size-[44px] shrink-0 items-center justify-center rounded-[4px] md:rounded-[6px] bg-[#fb5349] font-display text-[15px] md:text-[26px] font-black text-white z-20">
                            Js
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-display text-[11px] md:text-[15px] font-black leading-tight tracking-[0.24em] text-[#fb5349]">
                            KARTHICK
                        </span>
                    </div>
                </div>

                {/* Nav Items with Underline Transition Animations (Desktop) */}
                <nav className="hidden md:flex flex-1 items-center justify-center gap-14">
                    <a href="#projects" className="relative group text-[14px] font-bold uppercase tracking-[0.18em] text-white">
                        Projects
                        <span className="absolute bottom-[-6px] left-0 w-full h-[2.5px] bg-[#ffd166] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </a>
                    <a href="#events" className="relative group text-[14px] font-bold uppercase tracking-[0.18em] text-white">
                        Experience
                        <span className="absolute bottom-[-6px] left-0 w-full h-[2.5px] bg-[#ffd166] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </a>
                    <a href="#skills" className="relative group text-[14px] font-bold uppercase tracking-[0.18em] text-white">
                        Works
                        <span className="absolute bottom-[-6px] left-0 w-full h-[2.5px] bg-[#ffd166] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </a>
                </nav>

                {/* Social Channels (Desktop) */}
                <div className="hidden md:flex shrink-0 items-center justify-end gap-3.5 px-8">
                    {/* LinkedIn */}
                    <a
                        href="https://in.linkedin.com/in/karthick-js-1b453028a"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="flex size-[42px] items-center justify-center rounded-full bg-[#e34237] text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#fb5349] shadow-sm active:scale-95"
                    >
                        <Linkedin size={18} fill="currentColor" strokeWidth={0} />
                    </a>
                    {/* GitHub */}
                    <a
                        href="https://github.com/Karthick-1905/Squiggle---A-Scribbl-clone"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="flex size-[42px] items-center justify-center rounded-full bg-[#e34237] text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#fb5349] shadow-sm active:scale-95"
                    >
                        <Github size={18} fill="currentColor" strokeWidth={0} />
                    </a>
                    {/* LeetCode */}
                    <a
                        href="https://leetcode.com/u/karthick_js_0710/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LeetCode"
                        className="flex size-[42px] items-center justify-center rounded-full bg-[#e34237] text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#fb5349] shadow-sm active:scale-95"
                    >
                        <LeetCodeIcon size={18} />
                    </a>
                </div>

                {/* Hamburger Switcher (Mobile) */}
                <div className="flex md:hidden shrink-0 items-center justify-end px-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white hover:text-white/80 transition-colors focus:outline-none p-1.5"
                        aria-label="Toggle Navigation Menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Navigation Dropdown Box */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -15, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="w-[calc(100vw-24px)] max-w-[1040px] mt-1.5 bg-[#e5453b] border border-white/10 rounded-[10px] p-4 flex flex-col items-center gap-4 z-40 shadow-[0_16px_48px_rgba(251,83,73,0.3)]"
                    >
                        <nav className="flex flex-col items-center gap-2.5 w-full">
                            <a
                                href="#projects"
                                onClick={() => setIsOpen(false)}
                                className="text-[13px] font-bold uppercase tracking-[0.18em] text-white py-1.5 w-full text-center hover:bg-white/10 rounded"
                            >
                                Projects
                            </a>
                            <a
                                href="#events"
                                onClick={() => setIsOpen(false)}
                                className="text-[13px] font-bold uppercase tracking-[0.18em] text-white py-1.5 w-full text-center hover:bg-white/10 rounded"
                            >
                                Experience
                            </a>
                            <a
                                href="#skills"
                                onClick={() => setIsOpen(false)}
                                className="text-[13px] font-bold uppercase tracking-[0.18em] text-white py-1.5 w-full text-center hover:bg-white/10 rounded"
                            >
                                Works
                            </a>
                        </nav>
                        <div className="w-full h-px bg-white/10 my-0.5" />
                        <div className="flex justify-center gap-3 w-full">
                            <a
                                href="https://in.linkedin.com/in/karthick-js-1b453028a"
                                target="_blank"
                                rel="noreferrer"
                                className="flex size-[38px] items-center justify-center rounded-full bg-[#fb5349] text-white border border-white/10 shadow-sm active:scale-95"
                            >
                                <Linkedin size={16} fill="currentColor" strokeWidth={0} />
                            </a>
                            <a
                                href="https://github.com/Karthick-1905/Squiggle---A-Scribbl-clone"
                                target="_blank"
                                rel="noreferrer"
                                className="flex size-[38px] items-center justify-center rounded-full bg-[#fb5349] text-white border border-white/10 shadow-sm active:scale-95"
                            >
                                <Github size={16} fill="currentColor" strokeWidth={0} />
                            </a>
                            <a
                                href="https://leetcode.com/u/karthick_js_0710/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex size-[38px] items-center justify-center rounded-full bg-[#fb5349] text-white border border-white/10 shadow-sm active:scale-95"
                            >
                                <LeetCodeIcon size={16} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}