import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars, Cloud, Float } from '@react-three/drei';
import { Group } from 'three';

// Galaxy/Particle Field
const ParticleField = (props: React.ComponentProps<'group'>) => {
    const ref = useRef<Group>(null);

    // Generamos 4000 partículas para el campo estelar principal
    const sphere = useMemo(() => {
        const temp = new Float32Array(4000 * 3);
        const count = 4000;
        const radius = 2; // Radio un poco más grande
        for (let i = 0; i < count; i++) {
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            const r = radius * Math.cbrt(Math.random());
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            temp[i * 3] = x;
            temp[i * 3 + 1] = y;
            temp[i * 3 + 2] = z;
        }
        return temp;
    }, []);

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group ref={ref} rotation={[0, 0, Math.PI / 4]} {...props}>
            <Points positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#22d3ee" // Cyan
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
};

// Simple Planet Component
const Planet = ({ position, color, size, speed = 1 }: { position: [number, number, number], color: string, size: number, speed?: number }) => {
    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh position={position}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.7}
                    metalness={0.2}
                    emissive={color}
                    emissiveIntensity={0.2}
                />
            </mesh>
        </Float>
    );
};

const Background3D = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-slate-950">
            {/* Gradient overlay para simular profundidad cósmica */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-80 z-0 pointer-events-none" />

            <Canvas camera={{ position: [0, 0, 1] }}>
                {/* Iluminación básica para los planetas */}
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#c084fc" />

                {/* Campo de estrellas fondo lejano */}
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                {/* Nebulosa (Nubes) */}
                <Cloud opacity={0.3} speed={0.2} width={10} depth={1.5} segments={20} position={[0, 0, -5]} color="#3b0764" /> {/* Dark Purple */}
                <Cloud opacity={0.3} speed={0.2} width={10} depth={1.5} segments={20} position={[4, -2, -8]} color="#1e3a8a" /> {/* Dark Blue */}

                {/* Galaxia de partículas (Cyan) */}
                <ParticleField />

                {/* Planetas */}
                {/* Planeta 1: Purple/Pink - Lejano */}
                <Planet position={[-3, 2, -4]} color="#e879f9" size={0.3} speed={1.5} />

                {/* Planeta 2: Cyan/Blue - Medio */}
                <Planet position={[3.5, -1.5, -3]} color="#22d3ee" size={0.2} speed={2} />

                {/* Planeta 3: Deep Blue - Cerca (pero pequeño) */}
                <Planet position={[1, 3, -6]} color="#60a5fa" size={0.15} speed={1} />

            </Canvas>
        </div>
    );
};

export default Background3D;
