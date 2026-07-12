import { Github, Linkedin } from "lucide-react";
import { Discord } from "developer-icons";

function Logo() {
    return (
        <div className="flex h-[80px] shrink-0 items-center rounded-[10px]  px-8 my-2">
            <div className="mr-5 grid grid-cols-2 gap-1.5">
                <span className="size-[5px] rounded-full bg-[#fca29b]"></span>
                <span className="size-[5px] rounded-full bg-[#fca29b]"></span>
                <span className="size-[5px] rounded-full bg-[#fca29b]"></span>
            </div>

            <div className="relative mr-3 flex h-[80px] w-[52px] items-center justify-center overflow-hidden">
                <div className="relative flex size-[48px] shrink-0 items-center justify-center rounded-[6px] bg-white font-display text-[26px] font-black text-[#fb5349]">
                    Js
                </div>
            </div>

            <div className="flex flex-col">
                <span className="font-display text-[24px] font-black leading-tight tracking-[0.24em] text-white">
                    KARTHICK
                </span>
            </div>
        </div>
    );
}

export default function Footer() {
    const navItems = ["Works", "Projects", "Experience"];

    const socials = [
        {
            name: "LinkedIn",
            href: "https://in.linkedin.com/in/karthick-js-1b453028a",
            color: "#0077B5",
            icon: <Linkedin size={24} className="text-white fill-white" />
        },
        {
            name: "GitHub",
            href: "https://github.com/Karthick-1905/Squiggle---A-Scribbl-clone",
            color: "#181717",
            icon: <Github size={24} className="text-white fill-white" stroke="none" />
        },
        {
            name: "Discord",
            href: "https://discord.com",
            color: "#5865F2",
            icon: <Discord className="w-6 h-6 [&_path]:fill-white" />
        }
    ];

    return (
        <footer className="w-full bg-[#fb5349] pt-16 pb-12 select-none overflow-hidden">
            {/* 1. Floating rounded banner, centered with margin on every side */}
            <div className="w-full px-4 md:px-8 mb-16">
                <div className="w-full max-w-[1040px] mx-auto bg-[#e44238] rounded-[24px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
                    <h3 className="font-display text-[clamp(2rem,4.2vw,3.2rem)] font-black text-white leading-none tracking-tight text-center md:text-left">
                        You can find<br className="hidden md:block" /> me here:
                    </h3>
                    <div className="flex items-center gap-5 justify-center">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="group relative w-16 h-16 rounded-[22px] border-2 border-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_8px_20px_rgba(0,0,0,0.1)]"
                                style={{ backgroundColor: social.color }}
                                aria-label={social.name}
                            >
                                {social.icon}
                                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 rounded-[2px] opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 shadow-md flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 bg-[#fb5349] rounded-full" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-[1040px]">
                {/* 2. Divider */}
                <div className="w-full h-px bg-white/10 mb-8" />

                {/* 3. Bottom Columns (Logo, Nav, Copyright) */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
                    <div className="flex items-center">
                        <Logo />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-8 text-[12px] font-black uppercase tracking-[0.2em] text-white/80">
                        {navItems.map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors duration-200">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="text-[12px] font-bold text-white/50 tracking-wider">
                        2026 | COPYRIGHT ALL RIGHTS RESERVED
                    </div>
                </div>
            </div>
        </footer>
    );
}