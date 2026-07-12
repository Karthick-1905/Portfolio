import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, MessageSquare, ChevronRight, Play } from "lucide-react";
import { events } from "../constants/constants";
import { Reveal } from "./utils";

type TabOption = {
    label: string;
    value: "INTERNSHIPS" | "HACKATHONS" | "CLUB WORK";
};

export default function Events() {
    const tabs: TabOption[] = [
        { label: "INTERNSHIPS", value: "INTERNSHIPS" },
        { label: "HACKATHONS", value: "HACKATHONS" },
        { label: "CLUB WORK", value: "CLUB WORK" }
    ];
    const [activeTab, setActiveTab] = useState<"INTERNSHIPS" | "HACKATHONS" | "CLUB WORK">("INTERNSHIPS");
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;

        const timer = setInterval(() => {
            setActiveTab((prevTab) => {
                const currentIndex = tabs.findIndex((t) => t.value === prevTab);
                const nextIndex = (currentIndex + 1) % tabs.length;
                return tabs[nextIndex].value;
            });
        }, 6000);
        return () => clearInterval(timer);
    }, [activeTab, isHovered, tabs]);

    const filteredEvents = events.filter((e) => e.type === activeTab);

    return (
        <section
            className="section py-20 bg-transparent"
            id="events"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="container">
                {/* Section Title */}
                <Reveal className="text-center mb-12">
                    <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] font-black text-white leading-none tracking-normal">
                        Experience & Activities
                    </h2>
                </Reveal>

                {/* Tab Controls */}
                <div className="flex justify-center mb-16">
                    <div className="flex items-center gap-1.5 bg-[#d44136]/50 p-1.5 rounded-[22px] border border-white/10 shadow-inner">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.value;
                            return (
                                <button
                                    key={tab.value}
                                    onClick={() => setActiveTab(tab.value)}
                                    className={`relative px-6 py-2.5 rounded-[16px] text-xs font-black tracking-widest uppercase transition-colors duration-300 ${isActive ? "text-[#fb5349] z-10" : "text-white/80 hover:text-white"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTabIndicator"
                                            className="absolute inset-0 bg-white rounded-[16px] -z-10 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Events list */}
                <div className="max-w-5xl mx-auto flex flex-col">
                    {/* Top Divider */}
                    <div className="h-px w-full bg-white/20" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col"
                        >
                            {filteredEvents.map((evt) => (
                                <a
                                    key={evt.title}
                                    href={evt.link}
                                    className="group relative flex flex-col md:flex-row md:items-center justify-between py-6 px-6 md:px-8 border-b border-white/20 transition-all duration-300"
                                >
                                    {/* Hover Background White Pill */}
                                    <div className="absolute inset-0 bg-white rounded-[24px] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out z-0 flex items-center justify-end overflow-hidden shadow-lg pl-8">
                                        {/* Yellow play button block */}
                                        <div className="h-full w-[70px] bg-[#fbcf42] flex items-center justify-center shrink-0">
                                            <Play className="text-[#fb5349]" fill="currentColor" size={14} />
                                        </div>
                                    </div>

                                    {/* Content Wrapper */}
                                    <div className="relative z-10 flex flex-1 flex-col md:flex-row md:items-center gap-6 md:gap-10">
                                        {/* Column 1: Year (positioned on left) */}
                                        <div className="w-16 text-[var(--paper)] font-display text-[15px] font-bold tracking-wider group-hover:text-[#fb5349] transition-colors duration-300">
                                            {evt.year}
                                        </div>

                                        {/* Column 2: Title and Description */}
                                        <div className="flex-1 flex flex-col">
                                            <div className="text-[22px] font-display font-black text-white group-hover:text-[#fb5349] leading-snug transition-colors duration-300">
                                                {evt.title}
                                            </div>
                                            {evt.description && (
                                                <p className="text-[14px] font-semibold text-white/70 group-hover:text-[#111111]/75 leading-relaxed mt-2 transition-colors duration-300 max-w-xl">
                                                    {evt.description}
                                                </p>
                                            )}
                                        </div>

                                        {/* Column 3: Location */}
                                        <div className="flex items-center gap-2 text-white/90 group-hover:text-[#fb5349] transition-colors duration-300">
                                            <MapPin size={17} className="text-[#fbcf42] group-hover:text-[#fb5349] transition-colors duration-300" />
                                            <span className="text-[13px] font-black uppercase tracking-wider">{evt.location}</span>
                                        </div>

                                        {/* Column 4: Topic */}
                                        <div className="flex items-center gap-2 text-white/90 group-hover:text-[#fb5349] transition-colors duration-300 mr-2 md:mr-10">
                                            <MessageSquare size={17} className="text-[#fbcf42] group-hover:text-[#fb5349] transition-colors duration-300" />
                                            <span className="text-[13px] font-black tracking-wide">{evt.topic}</span>
                                        </div>
                                    </div>

                                    {/* Default Arrow Right (visible when not hovered) */}
                                    <ChevronRight
                                        size={20}
                                        className="relative z-10 text-white/70 group-hover:opacity-0 transition-opacity duration-300 hidden md:block"
                                    />
                                </a>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
