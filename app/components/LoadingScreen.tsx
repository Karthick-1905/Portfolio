import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
    const [percent, setPercent] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const fillRef = useRef<SVGRectElement>(null);

    useEffect(() => {
        // Disable scroll on load
        document.body.style.overflow = "hidden";

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    document.body.style.overflow = "";
                }
            });

            const obj = { val: 0 };
            // 1. Fill percentage countup
            tl.to(obj, {
                val: 100,
                duration: 2.2,
                ease: "power2.out",
                onUpdate: () => {
                    setPercent(Math.floor(obj.val));
                }
            }, 0);

            // 2. Rising yellow fill mask (goes from 400 down to 0)
            tl.fromTo(fillRef.current,
                { attr: { y: 400 } },
                { attr: { y: 0 }, duration: 2.2, ease: "power2.out" },
                0
            );

            // 3. Panel slide up exit transition
            tl.to(containerRef.current, {
                yPercent: -100,
                duration: 0.95,
                ease: "power4.inOut"
            });
        });

        return () => {
            ctx.revert();
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--coral)] select-none"
        >
            <div className="relative flex flex-col items-center max-w-md px-6 w-full">
                {/* Giant Cutout Geometric Cat SVG */}
                <div className="w-64 h-64 mb-6">
                    <svg viewBox="0 0 400 400" className="w-full h-full select-none">
                        <defs>
                            <clipPath id="cat-clip">
                                {/* Head */}
                                <rect x="130" y="140" width="140" height="110" rx="36" />
                                {/* Left Ear */}
                                <path d="M 140 150 L 120 80 L 185 145 Z" />
                                {/* Right Ear */}
                                <path d="M 260 150 L 280 80 L 215 145 Z" />
                                {/* Body / Chest */}
                                <path d="M 145 235 C 145 235 120 300 120 340 L 280 340 C 280 300 255 235 255 235 Z" />
                            </clipPath>
                        </defs>

                        {/* 1. Background Outline (ambient white) */}
                        <g stroke="rgba(255, 255, 255, 0.25)" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="130" y="140" width="140" height="110" rx="36" />
                            <path d="M 140 150 L 120 80 L 185 145 Z" />
                            <path d="M 260 150 L 280 80 L 215 145 Z" />
                            <path d="M 145 235 C 145 235 120 300 120 340 L 280 340 C 280 300 255 235 255 235 Z" />

                            {/* Sleepy Eyes */}
                            <path d="M 165 195 Q 177 205 189 195" />
                            <path d="M 211 195 Q 223 205 235 195" />
                            {/* Nose */}
                            <polygon points="200,208 196,204 204,204" fill="rgba(255, 255, 255, 0.25)" stroke="none" />
                            {/* Paws */}
                            <path d="M 180 340 C 180 325 190 320 200 320 C 210 320 220 325 220 340" />
                        </g>

                        {/* 2. Rising clipped layer revealing yellow fill overlay & red lines */}
                        <g clipPath="url(#cat-clip)">
                            <rect
                                ref={fillRef}
                                x="0"
                                y="400"
                                width="400"
                                height="400"
                                fill="#fbcf42"
                            />
                            <g stroke="#fb5349" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                {/* Re-drawn Sleepy Eyes inside filled region */}
                                <path d="M 165 195 Q 177 205 189 195" />
                                <path d="M 211 195 Q 223 205 235 195" />
                                {/* Nose */}
                                <polygon points="200,208 196,204 204,204" fill="#fb5349" stroke="none" />
                                {/* Paws */}
                                <path d="M 180 340 C 180 325 190 320 200 320 C 210 320 220 325 220 340" />
                            </g>
                        </g>
                    </svg>
                </div>

                {/* Counter & Status */}
                <div className="mt-4 flex items-baseline justify-between w-full border-t border-white/10 pt-4 text-white/50 text-xs font-black uppercase tracking-[0.2em]">
                    <span>I Like CATS</span>
                    <span className="font-mono text-2xl text-[var(--amber)] tracking-normal">
                        {percent.toString().padStart(3, "0")}%
                    </span>
                </div>
            </div>
        </div>
    );
}
