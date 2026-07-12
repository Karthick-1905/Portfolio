import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "../constants/constants";
import { Github } from "lucide-react";
import { Reveal } from "./utils";
import { ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const displayProjects = projects.slice(0, 3);

    return (
        <section id="projects" className="py-24 lg:py-32">
            <div className="container overflow-hidden">
                {/* Title Section (Visible & Centered) */}
                <Reveal className="mb-16 text-center">
                    <span className="text-[13px] font-black uppercase tracking-[0.25em] text-[#ffd166]">Featured Projects</span>
                    <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.9] text-white">Selected Works</h2>
                </Reveal>

                <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-6 md:flex-row md:items-start md:justify-center">
                    {displayProjects.map((project, idx) => {
                        const isActive = hoveredIdx === idx;
                        return (
                            <motion.div
                                key={project.title}
                                layout
                                onHoverStart={() => setHoveredIdx(idx)}
                                onHoverEnd={() => setHoveredIdx(null)}
                                initial={false}
                                animate={{
                                    height: isActive ? 700 : 530,
                                    backgroundColor: "#e23d2bff"
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className={`relative flex cursor-pointer flex-col rounded-[6px] p-6 pb-[92px] shadow-[0_16px_40px_rgba(200,40,30,0.15)] transition-shadow hover:shadow-[0_24px_48px_rgba(200,40,30,0.3)] ${isActive ? 'w-full md:w-[380px]' : 'w-full md:w-[320px]'}`}
                                style={{ transformOrigin: "top" }}
                            >
                                {/* Header: 01 and icon */}
                                <motion.div layout className="mb-5 flex items-start justify-between">
                                    <div>
                                        <motion.div layout className="font-display text-[28px] font-black leading-none text-white">
                                            0{idx + 1}
                                        </motion.div>
                                        <motion.div layout className="mt-1 text-[11px] font-black uppercase tracking-[0.15em] text-[#ffd166]">
                                            {project.title.split(' ')[0]} DESIGN
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Film-like Landscape Image Cover */}
                                <motion.div layout className="relative w-full aspect-[16/10] shrink-0 overflow-hidden rounded-[20px] bg-white p-2.5 shadow-sm">
                                    <div className="relative h-full w-full overflow-hidden rounded-[14px]">
                                        <Image src={project.src} alt={project.title} fill className="object-cover" />
                                    </div>
                                </motion.div>

                                <motion.div layout className="mt-6 flex flex-1 flex-col">
                                    <motion.h3 layout className="font-display text-[26px] leading-[1.1] font-black text-white">
                                        {project.title}
                                    </motion.h3>

                                    <motion.div
                                        key="tags"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="mt-3 w-full"
                                    >
                                        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white/80">
                                            VARIOUS WORKS
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.slice(0, 3).map((tag) => (
                                                <span key={tag} className="rounded-md bg-[#fbcf42] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-black">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>

                                    <AnimatePresence mode="popLayout">
                                        {isActive && (
                                            <motion.div
                                                key="desc"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="mt-3"
                                            >
                                                <p className="text-[14px] font-semibold leading-relaxed text-white/95">
                                                    {project.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                {/* GitHub Button - Positioned safely inside the bottom padding boundary */}
                                <motion.div layout className="absolute bottom-6 left-6 z-10">
                                    <a href={project.github} target="_blank" rel="noreferrer">
                                        <motion.div
                                            layout
                                            className="group flex h-[54px] items-center"
                                            animate={{
                                                width: isActive ? 180 : 54,
                                                borderRadius: 4
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        >
                                            <motion.div
                                                layout
                                                className="flex h-full w-[54px] shrink-0 items-center justify-center"
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className={`flex w-full h-full items-center justify-center ${isActive ? "bg-[#fb5349] rounded-[4px]" : "bg-white rounded-full "} text-white`}>
                                                    <Github fill={isActive ? "white" : "red"} stroke="none" />
                                                </div>
                                            </motion.div>
                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.span
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -10 }}
                                                        transition={{ duration: 0.15 }}
                                                        className="px-4 text-[12px] font-black bg-white w-full h-full flex items-center justify-center uppercase tracking-[0.12em] text-[#fb5349] rounded-r-[4px] whitespace-nowrap"
                                                    >
                                                        GITHUB REPO
                                                    </motion.span>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    </a>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Show More Button */}
                <Reveal className="mt-16 flex justify-center">
                    <a href="https://github.com" className="group inline-flex items-center gap-3 rounded-full border-2 border-white/20 px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-[#fb5349]">
                        Show More <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </a>
                </Reveal>
            </div>
        </section>
    );
}