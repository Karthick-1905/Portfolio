import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

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

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 18);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="w-full flex justify-center items-center p-3 pt-10">
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex justify-center w-[calc(100vw-32px)] max-w-[1040px] -translate-x-1/2 items-center h-[80px] rounded-[10px] bg-[#fb5349] shadow-[0_12px_36px_rgba(251,83,73,0.25)] border border-[#e5453b]/40 transition-[box-shadow,transform] duration-300 ${scrolled ? "shadow-[0_16px_48px_rgba(251,83,73,0.35)] scale-[0.98]" : ""
                    }`}
            >
                {/* Logo and Monogram */}
                <div className="flex h-full shrink-0 items-center rounded-[10px] bg-[#fbfbfb] px-8">
                    <div className="mr-5 grid grid-cols-2 gap-1.5">
                        <span className="size-[5px] rounded-full bg-[#fca29b]"></span>
                        <span className="size-[5px] rounded-full bg-[#fca29b]"></span>
                        <span className="size-[5px] rounded-full bg-[#fca29b]"></span>
                    </div>

                    <div className="relative mr-3 flex h-[80px] w-[52px] items-center justify-center overflow-hidden">
                        <div className="absolute inset-y-0 left-1/2 w-[2.5px] -translate-x-1/2 bg-[#fb5349]" />
                        <div className="relative flex size-[48px] shrink-0 items-center justify-center rounded-[6px] bg-[#fb5349] font-display text-[30px] font-black text-white">
                            Js
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-display text-[15px] font-black leading-tight tracking-[0.24em] text-[#fb5349]">
                            KARTHICK
                        </span>
                    </div>
                </div>

                {/* Nav Items with Underline Transition Animations */}
                <nav className="flex flex-1 items-center justify-center gap-14">
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

                {/* Social Channels (Updated to LinkedIn, GitHub, LeetCode) */}
                <div className="flex shrink-0 items-center justify-end gap-3.5 px-8">
                    {/* LinkedIn */}
                    <a
                        href="https://in.linkedin.com/in/karthick-js-1b453028a"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="flex size-[48px] items-center justify-center rounded-full bg-[#e34237] text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#fb5349] shadow-sm active:scale-95"
                    >
                        <Linkedin size={20} fill="currentColor" strokeWidth={0} />
                    </a>
                    {/* GitHub */}
                    <a
                        href="https://github.com/Karthick-1905/Squiggle---A-Scribbl-clone"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="flex size-[48px] items-center justify-center rounded-full bg-[#e34237] text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#fb5349] shadow-sm active:scale-95"
                    >
                        <Github size={20} fill="currentColor" strokeWidth={0} />
                    </a>
                    {/* LeetCode */}
                    <a
                        href="https://leetcode.com/u/karthick_js_0710/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LeetCode"
                        className="flex size-[48px] items-center justify-center rounded-full bg-[#e34237] text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#fb5349] shadow-sm active:scale-95"
                    >
                        <LeetCodeIcon size={20} />
                    </a>
                </div>
            </motion.header>
        </div>
    );
}