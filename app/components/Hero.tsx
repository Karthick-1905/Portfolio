import { Monitor, Keyboard, MiniMouse } from "./3Dmodels";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, RoundedBox, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import * as THREE from "three";

// Custom detailed models inside the diorama
function ArcadeMachine({ position, rotation }: any) {
    return (
        <group position={position} rotation={rotation}>
            <RoundedBox args={[0.5, 0.9, 0.5]} radius={0.02}>
                <meshStandardMaterial color="#06b6d4" roughness={0.1} />
            </RoundedBox>
            <RoundedBox args={[0.42, 0.3, 0.05]} radius={0.01} position={[0, 0.22, 0.23]}>
                <meshStandardMaterial color="#111827" />
            </RoundedBox>
            <RoundedBox args={[0.5, 0.08, 0.2]} radius={0.01} position={[0, -0.05, 0.18]}>
                <meshStandardMaterial color="#ffd166" />
            </RoundedBox>
            {/* Joystick */}
            <mesh position={[-0.1, 0.05, 0.22]}>
                <sphereGeometry args={[0.03, 16, 16]} />
                <meshStandardMaterial color="#ef4444" />
            </mesh>
            <mesh position={[-0.1, 0.01, 0.22]}>
                <cylinderGeometry args={[0.007, 0.007, 0.06]} />
                <meshStandardMaterial color="#d1d5db" />
            </mesh>
            {/* Buttons */}
            <mesh position={[0.1, 0.01, 0.2]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.015, 0.015, 0.01]} />
                <meshStandardMaterial color="#3b82f6" />
            </mesh>
            <mesh position={[0.16, 0.01, 0.22]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.015, 0.015, 0.01]} />
                <meshStandardMaterial color="#ef4444" />
            </mesh>
        </group>
    );
}

function RecordPlayer({ position, rotation }: any) {
    return (
        <group position={position} rotation={rotation}>
            <RoundedBox args={[0.45, 0.12, 0.45]} radius={0.015}>
                <meshStandardMaterial color="#f97316" roughness={0.4} />
            </RoundedBox>
            <mesh position={[0, 0.07, 0]} rotation={[0, 0, 0]}>
                <cylinderGeometry args={[0.16, 0.16, 0.01, 32]} />
                <meshStandardMaterial color="#1e293b" roughness={0.7} />
            </mesh>
            <mesh position={[0, 0.076, 0]}>
                <cylinderGeometry args={[0.04, 0.04, 0.002, 16]} />
                <meshStandardMaterial color="#facc15" />
            </mesh>
            <mesh position={[0.14, 0.08, -0.14]}>
                <boxGeometry args={[0.02, 0.01, 0.14]} />
                <meshStandardMaterial color="#d1d5db" metalness={0.8} roughness={0.2} />
            </mesh>
        </group>
    );
}

function CoffeeMachine({ position, rotation }: any) {
    return (
        <group position={position} rotation={rotation}>
            <RoundedBox args={[0.35, 0.45, 0.35]} radius={0.02}>
                <meshStandardMaterial color="#10b981" roughness={0.2} />
            </RoundedBox>
            <RoundedBox args={[0.26, 0.28, 0.15]} radius={0.01} position={[0, -0.04, 0.1]}>
                <meshStandardMaterial color="#ffffff" roughness={0.1} />
            </RoundedBox>
            <mesh position={[0, -0.14, 0.15]}>
                <cylinderGeometry args={[0.04, 0.035, 0.07]} />
                <meshStandardMaterial color="#f3f4f6" />
            </mesh>
        </group>
    );
}

function OfficeDrawers({ position, rotation }: any) {
    return (
        <group position={position} rotation={rotation}>
            <RoundedBox args={[0.5, 0.55, 0.5]} radius={0.02}>
                <meshStandardMaterial color="#ffffff" roughness={0.3} />
            </RoundedBox>
            <RoundedBox args={[0.18, 0.03, 0.02]} radius={0.005} position={[0, 0.14, 0.26]}>
                <meshStandardMaterial color="#9ca3af" metalness={0.7} />
            </RoundedBox>
            <RoundedBox args={[0.18, 0.03, 0.02]} radius={0.005} position={[0, -0.14, 0.26]}>
                <meshStandardMaterial color="#9ca3af" metalness={0.7} />
            </RoundedBox>
            <mesh position={[0, 0.0, 0.25]}>
                <boxGeometry args={[0.46, 0.004, 0.004]} />
                <meshStandardMaterial color="#e5e7eb" />
            </mesh>
        </group>
    );
}

function Speaker({ position, rotation, color = "#22c55e" }: any) {
    return (
        <group position={position} rotation={rotation}>
            <RoundedBox args={[0.32, 0.55, 0.32]} radius={0.02}>
                <meshStandardMaterial color={color} roughness={0.3} />
            </RoundedBox>
            <mesh position={[0, -0.1, 0.17]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.09, 0.09, 0.01, 24]} />
                <meshStandardMaterial color="#f59e0b" roughness={0.5} />
            </mesh>
            <mesh position={[0, -0.1, 0.176]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.035, 0.035, 0.01, 16]} />
                <meshStandardMaterial color="#111827" />
            </mesh>
            <mesh position={[0, 0.12, 0.17]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.06, 0.06, 0.01, 24]} />
                <meshStandardMaterial color="#111827" />
            </mesh>
        </group>
    );
}

function BookStack({ position, rotation }: any) {
    return (
        <group position={position} rotation={rotation}>
            <RoundedBox args={[0.4, 0.06, 0.4]} radius={0.01} position={[0, 0, 0]}>
                <meshStandardMaterial color="#ef4444" roughness={0.5} />
            </RoundedBox>
            <RoundedBox args={[0.36, 0.06, 0.36]} radius={0.01} position={[0.01, 0.06, 0.01]}>
                <meshStandardMaterial color="#3b82f6" roughness={0.5} />
            </RoundedBox>
            <RoundedBox args={[0.34, 0.06, 0.34]} radius={0.01} position={[-0.01, 0.12, -0.01]}>
                <meshStandardMaterial color="#eab308" roughness={0.5} />
            </RoundedBox>
        </group>
    );
}

function BookSetVertical({ position, rotation }: any) {
    return (
        <group position={position} rotation={rotation}>
            {/* Book 1 (Red) */}
            <RoundedBox args={[0.06, 0.32, 0.24]} radius={0.005} position={[-0.1, 0.16, 0]}>
                <meshStandardMaterial color="#ef4444" roughness={0.5} />
            </RoundedBox>
            {/* Book 2 (Blue) */}
            <RoundedBox args={[0.06, 0.35, 0.25]} radius={0.005} position={[0, 0.175, 0.01]}>
                <meshStandardMaterial color="#3b82f6" roughness={0.5} />
            </RoundedBox>
            {/* Book 3 (Yellow, tilted slightly) */}
            <group position={[0.1, 0.15, 0.02]} rotation={[0, 0, 0.2]}>
                <RoundedBox args={[0.06, 0.32, 0.23]} radius={0.005}>
                    <meshStandardMaterial color="#ffc107" roughness={0.5} />
                </RoundedBox>
            </group>
        </group>
    );
}

function Laptop({ position, rotation }: any) {
    return (
        <group position={position} rotation={rotation}>
            <RoundedBox args={[0.65, 0.02, 0.45]} radius={0.005} position={[0, 0.01, 0]}>
                <meshStandardMaterial color="#d1d5db" roughness={0.2} metalness={0.8} />
            </RoundedBox>
            <group position={[0, 0.02, -0.22]} rotation={[-0.45, 0, 0]}>
                <RoundedBox args={[0.65, 0.42, 0.015]} radius={0.005} position={[0, 0.2, 0]}>
                    <meshStandardMaterial color="#d1d5db" roughness={0.2} metalness={0.8} />
                </RoundedBox>
                <RoundedBox args={[0.61, 0.38, 0.008]} radius={0.003} position={[0, 0.2, 0.009]}>
                    <meshStandardMaterial color="#111827" roughness={0.1} emissive="#0284c7" emissiveIntensity={0.15} />
                </RoundedBox>
            </group>
            <RoundedBox args={[0.18, 0.002, 0.1]} radius={0.001} position={[0, 0.021, 0.14]}>
                <meshStandardMaterial color="#9ca3af" roughness={0.3} />
            </RoundedBox>
        </group>
    );
}

// Highly detailed CPU Cabinet with RGB fans, tempered glass side, and glowing internal layout
function CPUCabinet({ position, rotation }: any) {
    return (
        <group position={position} rotation={rotation}>
            {/* Chassis Outer Shell - Dark Slate steel */}
            <RoundedBox args={[0.42, 0.72, 0.42]} radius={0.015}>
                <meshStandardMaterial color="#0f172a" metalness={0.7} roughness={0.2} />
            </RoundedBox>
            {/* Tempered Glass Side Panel */}
            <RoundedBox args={[0.43, 0.62, 0.34]} radius={0.01} position={[0.01, 0, 0]}>
                <meshStandardMaterial color="#090d16" roughness={0.1} metalness={0.9} transparent opacity={0.65} />
            </RoundedBox>
            {/* Front Panel RGB LED Strip */}
            <mesh position={[0, 0, 0.215]}>
                <boxGeometry args={[0.018, 0.65, 0.008]} />
                <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={3} />
            </mesh>
            {/* Glowing Fans inside */}
            {/* Upper RGB Fan */}
            <mesh position={[0, 0.18, 0.08]} rotation={[0, 0, 0]}>
                <cylinderGeometry args={[0.11, 0.11, 0.04, 16]} />
                <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={2.5} />
            </mesh>
            {/* Lower RGB Fan */}
            <mesh position={[0, -0.18, 0.08]} rotation={[0, 0, 0]}>
                <cylinderGeometry args={[0.11, 0.11, 0.04, 16]} />
                <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={2.5} />
            </mesh>
            {/* Internal Motherboard glowing details (e.g. RAM slots) */}
            <mesh position={[-0.04, 0.06, -0.05]}>
                <boxGeometry args={[0.008, 0.11, 0.024]} />
                <meshStandardMaterial color="#ffd166" emissive="#ffd166" emissiveIntensity={1.5} />
            </mesh>
            <mesh position={[-0.04, 0.06, -0.015]}>
                <boxGeometry args={[0.008, 0.11, 0.024]} />
                <meshStandardMaterial color="#ffd166" emissive="#ffd166" emissiveIntensity={1.5} />
            </mesh>
        </group>
    );
}

function HeroVisual() {
    const [zoom, setZoom] = useState(46);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setZoom(22);
            } else if (window.innerWidth < 1024) {
                setZoom(34);
            } else {
                setZoom(46);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const extrudeBaseSettings = useMemo(() => ({
        depth: 0.3,
        bevelEnabled: true,
        bevelThickness: 0.08,
        bevelSize: 0.08,
        bevelSegments: 4,
        steps: 1,
        curveSegments: 24
    }), []);

    const jShape = useMemo(() => {
        const s = new THREE.Shape();
        s.moveTo(-1.25, 2.45);
        s.lineTo(1.25, 2.45);
        s.lineTo(1.25, -1.25);
        s.quadraticCurveTo(1.25, -1.65, 0.85, -1.65);
        s.lineTo(-0.85, -1.65);
        s.quadraticCurveTo(-1.25, -1.65, -1.25, -1.25);
        s.lineTo(-1.25, 0.0);
        s.lineTo(-0.35, 0.0);
        s.lineTo(-0.35, -0.75);
        s.lineTo(0.35, -0.75);
        s.lineTo(0.35, 1.55);
        s.lineTo(-1.25, 1.55);
        s.closePath();
        return s;
    }, []);

    const sShape = useMemo(() => {
        const s = new THREE.Shape();
        s.moveTo(-1.25, 2.45);
        s.lineTo(1.25, 2.45);
        s.lineTo(1.25, 1.55);
        s.lineTo(-0.35, 1.55);
        s.lineTo(-0.35, 0.65);
        s.lineTo(1.25, 0.65);
        s.lineTo(1.25, -2.05);
        s.lineTo(-1.25, -2.05);
        s.lineTo(-1.25, -1.15);
        s.lineTo(0.35, -1.15);
        s.lineTo(0.35, -0.25);
        s.lineTo(-1.25, -0.25);
        s.closePath();
        return s;
    }, []);

    return (
        <div className="relative h-[300px] md:h-[450px] lg:h-[700px] w-full lg:-ml-12 lg:-mt-12 cursor-grab active:cursor-grabbing">
            <Canvas orthographic camera={{ zoom: zoom, position: [15, 15, 15] }} key={zoom}>
                <Environment preset="city" />
                <ambientLight intensity={0.85} />
                <directionalLight position={[10, 15, 5]} intensity={2.2} />
                <directionalLight position={[-10, 10, 5]} intensity={0.8} />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 3}
                    makeDefault
                />

                <group position={[0, -0.9, 0]}>
                    <group rotation={[0, Math.PI / 10, 0]}>
                        <group rotation={[-Math.PI / 2, 0, 0]}>

                            {/* BASE LAYOUT PLATES (Floor) */}
                            {/* J Bottom Base */}
                            <group position={[-1.7, 0, 0]}>
                                <mesh>
                                    <extrudeGeometry args={[jShape, extrudeBaseSettings]} />
                                    <meshStandardMaterial color="#eae5e2" roughness={0.3} />
                                </mesh>
                            </group>
                            {/* S Bottom Base */}
                            <group position={[1.7, 0, 0]}>
                                <mesh>
                                    <extrudeGeometry args={[sShape, extrudeBaseSettings]} />
                                    <meshStandardMaterial color="#eae5e2" roughness={0.3} />
                                </mesh>
                            </group>

                            {/* ROOF LAYOUT PLATES (Ceiling) */}
                            {/* J Top Roof */}
                            <group position={[-1.7, 0, 2.3]}>
                                <mesh>
                                    <extrudeGeometry args={[jShape, extrudeBaseSettings]} />
                                    <meshStandardMaterial color="#faf9f6" roughness={0.2} />
                                </mesh>
                            </group>
                            {/* S Top Roof */}
                            <group position={[1.7, 0, 2.3]}>
                                <mesh>
                                    <extrudeGeometry args={[sShape, extrudeBaseSettings]} />
                                    <meshStandardMaterial color="#faf9f6" roughness={0.2} />
                                </mesh>
                            </group>

                            {/* STRUCTURAL SUPPORT PILLARS */}
                            {/* J Pillars */}
                            <RoundedBox args={[0.15, 0.15, 2.0]} radius={0.01} position={[-2.8, 2.35, 1.3]}><meshStandardMaterial color="#ded9d5" /></RoundedBox>
                            <RoundedBox args={[0.15, 0.15, 2.0]} radius={0.01} position={[-0.6, 2.35, 1.3]}><meshStandardMaterial color="#ded9d5" /></RoundedBox>
                            <RoundedBox args={[0.15, 0.15, 2.0]} radius={0.01} position={[-0.6, -1.15, 1.3]}><meshStandardMaterial color="#ded9d5" /></RoundedBox>
                            <RoundedBox args={[0.15, 0.15, 2.0]} radius={0.01} position={[-2.8, -1.15, 1.3]}><meshStandardMaterial color="#ded9d5" /></RoundedBox>
                            <RoundedBox args={[0.15, 0.15, 2.0]} radius={0.01} position={[-1.9, -1.55, 1.3]}><meshStandardMaterial color="#ded9d5" /></RoundedBox>

                            {/* S Pillars */}
                            <RoundedBox args={[0.15, 0.15, 2.0]} radius={0.01} position={[0.6, 2.35, 1.3]}><meshStandardMaterial color="#ded9d5" /></RoundedBox>
                            <RoundedBox args={[0.15, 0.15, 2.0]} radius={0.01} position={[2.8, 2.35, 1.3]}><meshStandardMaterial color="#ded9d5" /></RoundedBox>
                            <RoundedBox args={[0.15, 0.15, 2.0]} radius={0.01} position={[2.8, -1.95, 1.3]}><meshStandardMaterial color="#ded9d5" /></RoundedBox>
                            <RoundedBox args={[0.15, 0.15, 2.0]} radius={0.01} position={[0.6, -1.95, 1.3]}><meshStandardMaterial color="#ded9d5" /></RoundedBox>

                            {/* INTERIOR PLATFORMS & DESKS */}
                            {/* J Desk Platform (Sitting at z = 0.8) */}
                            <RoundedBox args={[2.1, 1.5, 0.08]} radius={0.02} position={[-1.7, 0.6, 0.8]}>
                                <meshStandardMaterial color="#e5dec9" roughness={0.4} />
                            </RoundedBox>

                            {/* Lower S Desk Platform (Sitting at z = 0.8 to match J Desk height) */}
                            <RoundedBox args={[1.8, 1.5, 0.08]} radius={0.02} position={[1.7, -0.2, 0.8]}>
                                <meshStandardMaterial color="#e5dec9" roughness={0.4} />
                            </RoundedBox>

                            {/* Desk Bridge connecting J Desk and S Desk across the central gap */}
                            <RoundedBox args={[1.8, 1.3, 0.08]} radius={0.02} position={[0, 0.2, 0.8]}>
                                <meshStandardMaterial color="#e5dec9" roughness={0.4} />
                            </RoundedBox>

                            {/* J Mezzanine Shelf (Sitting at z = 1.6) */}
                            <RoundedBox args={[2.0, 0.8, 0.08]} radius={0.02} position={[-1.7, 1.7, 1.6]}>
                                <meshStandardMaterial color="#e5dec9" roughness={0.4} />
                            </RoundedBox>

                            {/* S Mezzanine Floor (Sitting at z = 1.3) */}
                            <RoundedBox args={[2.1, 2.6, 0.08]} radius={0.02} position={[1.7, 0.2, 1.3]}>
                                <meshStandardMaterial color="#e5dec9" roughness={0.4} />
                            </RoundedBox>

                            {/* DETAIL ELEMENTS POPULATION */}
                            {/* Workstation 1 (J Desk; sits on z = 0.8) */}
                            <group position={[-1.9, 0.8, 0.8]} rotation={[Math.PI / 2, 0.2, 0]}>
                                <Monitor position={[0, 0, 0]} rotation={[0, 0, 0]} />
                            </group>
                            <group position={[-1.8, 0.1, 0.8]} rotation={[Math.PI / 2, 0.2, 0]}>
                                <Keyboard position={[0, 0, 0]} rotation={[0, 0, 0]} />
                            </group>
                            <group position={[-1.2, 0.1, 0.8]} rotation={[Math.PI / 2, 0.2, 0]}>
                                <MiniMouse position={[0, 0, 0]} rotation={[0, 0, 0]} />
                            </group>

                            {/* Laptop (sitting next to monitor on J Desk; z = 0.8) */}
                            <Laptop position={[-1.1, 0.6, 0.8]} rotation={[Math.PI / 2, -0.15, 0]} />

                            {/* Workstation 2 (S Desk; Keyboard + Mouse sits on z = 0.8) */}
                            <group position={[1.8, -0.4, 0.8]} rotation={[Math.PI / 2, -0.3, 0]}>
                                <Keyboard position={[0, 0, 0]} rotation={[0, 0, 0]} />
                            </group>
                            <group position={[2.4, -0.4, 0.8]} rotation={[Math.PI / 2, -0.3, 0]}>
                                <MiniMouse position={[0, 0, 0]} rotation={[0, 0, 0]} />
                            </group>

                            {/* custom CPU Cabinet (now sitting base at floor z = 0.3) */}
                            <CPUCabinet position={[-2.4, -0.6, 0.3]} rotation={[Math.PI / 2, 0.2, 0]} />

                            {/* Bottom Cabinet Drawers (on J floor; sitting base z = 0.3 + 0.275 = 0.575) */}
                            <OfficeDrawers position={[-1.6, -0.6, 0.575]} rotation={[Math.PI / 2, 0.2, 0]} />

                            {/* Coffee machine (placed on the center desk bridge; sitting base z = 0.8 + 0.225 = 1.025) */}
                            <CoffeeMachine position={[0.4, 0.2, 1.025]} rotation={[Math.PI / 2, -0.15, 0]} />

                            {/* Potted plant (placed on the S desk right panel; sitting base z = 0.8) */}
                            <group position={[1.4, 0.2, 0.8]} rotation={[Math.PI / 2, 0, 0]}>
                                <mesh position={[0, 0.05, 0]}>
                                    <cylinderGeometry args={[0.1, 0.07, 0.15, 16]} />
                                    <meshStandardMaterial color="#a16207" roughness={0.6} />
                                </mesh>
                                <mesh position={[0, 0.17, 0]}>
                                    <sphereGeometry args={[0.12, 16, 16]} />
                                    <meshStandardMaterial color="#22c55e" roughness={0.8} />
                                </mesh>
                            </group>

                            {/* Books (on J shelf; flat book stack: sitting base z = 1.6) */}
                            <BookStack position={[-1.9, 1.7, 1.6]} rotation={[Math.PI / 2, 0.4, 0]} />

                            {/* Books (on J shelf; vertical bookset: sitting base z = 1.6) */}
                            <BookSetVertical position={[-1.2, 1.7, 1.6]} rotation={[Math.PI / 2, 0.05, 0]} />

                            {/* Books stack (on S floor; flat book stack: sitting base z = 0.3) */}
                            <BookStack position={[2.0, -1.2, 0.3]} rotation={[Math.PI / 2, -0.2, 0]} />

                            {/* Arcade cabinet (placed right in the central gap floor; sitting base z = 0.3 + 0.45 = 0.75) */}
                            <ArcadeMachine position={[0.1, -0.5, 0.75]} rotation={[Math.PI / 2, 0, 0]} />

                            {/* Record Player (sits directly on top of Arcade Machine in the middle gap! sitting base z = 1.2 + 0.06 = 1.26) */}
                            <RecordPlayer position={[0.1, -0.5, 1.26]} rotation={[Math.PI / 2, 0, 0]} />

                            {/* Speaker Red (lower floor of S; sitting base z = 0.3 + 0.275 = 0.575) */}
                            <Speaker position={[1.1, -0.6, 0.575]} rotation={[Math.PI / 2, -0.1, 0]} color="#ef4444" />

                            {/* Speaker Green (mezzanine floor of S; sitting base z = 1.3 + 0.275 = 1.575) */}
                            <Speaker position={[2.0, 0.6, 1.575]} rotation={[Math.PI / 2, -0.3, 0]} color="#22c55e" />

                        </group>
                    </group>
                </group>

                <ContactShadows position={[0, -1.0, 0]} opacity={0.65} scale={25} blur={2.5} far={6} />
            </Canvas>
        </div>
    );
}

export default function Hero() {
    return (
        <section id="hero" className="container relative grid items-center gap-10 pb-8 pt-36 md:pt-40 lg:pt-[90px] lg:grid-cols-[1.1fr_1fr] z-10 w-full">
            <motion.div
                className="relative z-10 flex flex-col items-center lg:items-end pt-4 text-center lg:text-right"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
                <div className="mb-4 text-[13px] font-black uppercase tracking-[0.45em] text-[#ffd166]">
                    FULL STACK DEVELOPER
                </div>

                <h1 className="font-display text-[clamp(3.1rem,9vw,9.5rem)] font-black leading-[0.82] tracking-[-0.01em] text-white">
                    KARTHICK
                </h1>

                <div className="mt-8 flex w-full max-w-[430px] items-center justify-center lg:justify-end gap-6">
                    <p className="flex-1 text-[15px] font-bold leading-relaxed text-white/95 text-center lg:text-right">
                        Building AI systems, scalable backend architectures, real-time applications, and developer tools.
                    </p>
                </div>

                <div className="mt-10 flex w-full max-w-[350px] justify-center lg:justify-end">
                    <a href="#projects" className="group relative overflow-hidden inline-flex h-[54px] items-center bg-white rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-transform hover:scale-105">
                        {/* Yellow Left Side */}
                        <div className="h-full w-[44px] bg-[#fbcf42] shrink-0" />

                        {/* Red Division Line */}
                        <div className="absolute top-0 bottom-0 left-[44px] w-[2px] bg-[#fb5349] z-10" />

                        {/* Overlapping Circle Page Indicator */}
                        <div className="absolute top-1/2 left-[44px] -translate-x-1/2 -translate-y-1/2 size-[32px] rounded-full bg-[#fb5349] text-white flex items-center justify-center shadow-md z-20 transition-transform group-hover:scale-110">
                            <svg width="14" height="14" stroke="currentColor" fill="none" strokeWidth="4.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>

                        {/* Button Label Text */}
                        <span className="pl-6 pr-5 text-[12.5px] font-black uppercase tracking-[0.14em] text-[#fb5349]">
                            EXPLORE PROJECTS
                        </span>
                    </a>
                </div>
            </motion.div>

            <motion.div
                className="relative z-0 ml-20 hidden lg:block"
                initial={{ opacity: 0, scale: 0.94, rotate: 1 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            >
                <HeroVisual />
            </motion.div>
        </section>
    );
}
