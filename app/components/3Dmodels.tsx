import { RoundedBox } from "@react-three/drei";

export function Monitor({ position, rotation }: any) {
    return (
        <group position={position} rotation={rotation}>
            <RoundedBox args={[0.5, 0.05, 0.4]} radius={0.02} position={[0, 0, 0]}>
                <meshStandardMaterial color="#d1d5db" />
            </RoundedBox>
            <mesh position={[0, 0.4, -0.1]}>
                <cylinderGeometry args={[0.04, 0.04, 0.8]} />
                <meshStandardMaterial color="#9ca3af" />
            </mesh>
            <RoundedBox args={[1.8, 1.1, 0.08]} radius={0.03} position={[0, 0.8, 0]} rotation={[-0.1, 0, 0]}>
                <meshStandardMaterial color="#f3f4f6" />
            </RoundedBox>
            <RoundedBox args={[1.7, 0.95, 0.09]} radius={0.03} position={[0, 0.83, 0.01]} rotation={[-0.1, 0, 0]}>
                <meshStandardMaterial color="#111827" roughness={0.2} metalness={0.8} />
            </RoundedBox>
        </group>
    )
}

export function CPU({ position, rotation }: any) {
    return (
        <group position={position} rotation={rotation}>
            <RoundedBox args={[0.6, 1.2, 1.4]} radius={0.05} position={[0, 0.6, 0]}>
                <meshStandardMaterial color="#f3f4f6" roughness={0.1} />
            </RoundedBox>
            <RoundedBox args={[0.61, 1.1, 1.3]} radius={0.02} position={[0.01, 0.6, 0]}>
                <meshStandardMaterial color="#1f2937" roughness={0.1} metalness={0.8} transparent opacity={0.85} />
            </RoundedBox>
            <mesh position={[0.2, 0.9, 0.45]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.18, 0.18, 0.42]} />
                <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={2} />
            </mesh>
            <mesh position={[0.2, 0.35, 0.45]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.18, 0.18, 0.42]} />
                <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={2} />
            </mesh>
        </group>
    )
}

export function Keyboard({ position, rotation }: any) {
    return (
        <group position={position} rotation={rotation}>
            <RoundedBox args={[1.0, 0.04, 0.35]} radius={0.01}>
                <meshStandardMaterial color="#f3f4f6" />
            </RoundedBox>
            <RoundedBox args={[0.95, 0.05, 0.3]} radius={0.01} position={[0, 0.01, 0]}>
                <meshStandardMaterial color="#d1d5db" />
            </RoundedBox>
        </group>
    )
}

export function MiniMouse({ position, rotation }: any) {
    return (
        <group position={position} rotation={rotation}>
            <RoundedBox args={[0.18, 0.08, 0.3]} radius={0.03}>
                <meshStandardMaterial color="#f3f4f6" />
            </RoundedBox>
            <mesh position={[0, 0.04, -0.08]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.02, 0.02, 0.04, 16]} />
                <meshStandardMaterial color="#374151" />
            </mesh>
        </group>
    )
}