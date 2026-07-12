"use client";

import gsap from "gsap";
import Lenis from "lenis";
import { Reveal } from "./components/utils";
import {
  ArrowRight,
  Cloud,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import { motion, AnimatePresence, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import Hero from './components/Hero'
import Navbar from './components/NavBar'
import FeaturedProjects from "./components/Projects";
import Skills from "./components/Skills";
import Events from "./components/Experience";
import LoadingScreen from "./components/LoadingScreen";
import Footer from "./components/Footer";

function usePointerGlow() {
  useEffect(() => {
    const root = document.documentElement;
    const onMove = (event: PointerEvent) => {
      root.style.setProperty("--x", `${event.clientX}px`);
      root.style.setProperty("--y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });
  const dotTop = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  const [activeSection, setActiveSection] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  usePointerGlow();

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    let frame = 0;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  const y = useMotionValue(0);
  useEffect(() => {
    const onMove = (event: PointerEvent) => y.set(event.clientY);
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [y]);
  const blobY = useTransform(y, [0, 900], [-60, 80]);

  // Track Intersection of Main Page Sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            let friendlyName = "";
            if (id === "hero") friendlyName = "Home";
            else if (id === "projects") friendlyName = "Projects";
            else if (id === "events") friendlyName = "Experience";
            else if (id === "skills") friendlyName = "Tech Stack";

            if (friendlyName) {
              setActiveSection(friendlyName);
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    const observeIds = ["hero", "projects", "events", "skills"];
    observeIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Show Toast Dialog on Active Section changes for 2 seconds
  useEffect(() => {
    if (!activeSection) return;
    setShowDialog(true);
    const timer = setTimeout(() => {
      setShowDialog(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [activeSection]);

  return (
    <main>
      <LoadingScreen />

      {/* Floating Left Vertical Timeline */}
      <div className="fixed left-6 top-[20vh] bottom-[20vh] w-[3px] bg-white/15 rounded-full z-50 pointer-events-none hidden md:block">
        <motion.div
          className="absolute top-0 left-0 w-full bg-white rounded-full origin-top h-full"
          style={{ scaleY }}
        />
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_white,0_0_5px_white]"
          style={{ top: dotTop }}
        />
      </div>

      {/* Vanishing Page Section Text next to the Left Timeline Indicator */}
      <AnimatePresence>
        {showDialog && activeSection && (
          <motion.div
            initial={{ opacity: 0, x: -10, y: "-50%" }}
            animate={{ opacity: 1, x: 0, y: "-50%" }}
            exit={{ opacity: 0, x: -10, y: "-50%" }}
            transition={{ duration: 0.2 }}
            className="fixed left-14 top-1/2 z-50 pointer-events-none hidden md:block"
          >
            <span className="font-display text-[12px] font-black uppercase tracking-[0.25em] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              {activeSection}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="noise" />
      <div className="cursor-glow hidden md:block" />
      <motion.div style={{ y: blobY }} className="pointer-events-none fixed -right-24 top-56 z-[-1] h-80 w-80 rounded-full bg-[var(--amber)] opacity-25 blur-3xl" />
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <Events />
      <Skills />
      <Footer />
    </main>
  );
}
