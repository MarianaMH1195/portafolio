import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars, Cloud } from '@react-three/drei';
import { Group } from 'three';

// Galaxy/Particle Field - Ajustado a tonos rosados/violetas
const ParticleField = (props: React.ComponentProps<'group'>) => {
    const ref = useRef<Group>(null);

    const sphere = useMemo(() => {
        const temp = new Float32Array(5000 * 3);
        const count = 5000;
        const radius = 3;
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
            ref.current.rotation.x -= delta / 30; // Más lento y majestuoso
            ref.current.rotation.y -= delta / 40;
        }
    });

    return (
        <group ref={ref} rotation={[0, 0, Math.PI / 4]} {...props}>
            <Points positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#e879f9" // Fuchsia-400 (Brillo estelar rosado)
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
};

const Background3D = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-[#0B0F1A]">
            {/* Gradient background base - Deep space */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#1e1b4b] to-[#0f172a] opacity-90 z-0 pointer-events-none" />

            <Canvas camera={{ position: [0, 0, 1] }}>
                <ambientLight intensity={0.2} />

                {/* Estrellas brillantes y densas */}
                <Stars radius={100} depth={50} count={8000} factor={4} saturation={1} fade speed={1} />

                {/* --- NEBULOSA VOLUMÉTRICA --- */}
                {/* La idea es crear capas superpuestas de nubes con colores complementarios */}

                {/* 1. Fondo Oscuro / Estructura (Dark Purple/Blue) */}
                <Cloud seed={1} scale={2} volume={5} color="#1e1b4b" fade={10} opacity={0.3} position={[0, 0, -10]} speed={0.1} />

                {/* 2. Cuerpo Principal (Vibrant Purple/Pink) */}
                <Cloud seed={2} scale={1} volume={3} color="#701a75" fade={10} opacity={0.3} position={[4, 0, -8]} speed={0.15} /> {/* Fuchsia oscuro */}
                <Cloud seed={3} scale={1} volume={3} color="#4c1d95" fade={10} opacity={0.3} position={[-4, 0, -8]} speed={0.15} /> {/* Violeta oscuro */}

                {/* 3. Highlights / Detalles Brillantes (Bright Pink/Cyan accents) */}
                <Cloud seed={4} scale={0.5} volume={2} color="#d946ef" fade={15} opacity={0.2} position={[2, 2, -6]} speed={0.2} /> {/* Fuchsia vibrante */}
                <Cloud seed={5} scale={0.5} volume={2} color="#8b5cf6" fade={15} opacity={0.2} position={[-2, -2, -6]} speed={0.2} /> {/* Violeta vibrante */}

                {/* Un toque sutil de azul para contraste */}
                <Cloud seed={6} scale={0.8} volume={2} color="#0ea5e9" fade={20} opacity={0.15} position={[0, -3, -7]} speed={0.2} />

                {/* Partículas flotantes para dar vida */}
                <ParticleField />
            </Canvas>
        </div>
    );
};

export default Background3D;
