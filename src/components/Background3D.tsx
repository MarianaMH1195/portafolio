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
                <ambientLight intensity={0.4} /> {/* Increased ambient light a bit */}

                {/* Estrellas brillantes y densas */}
                <Stars radius={100} depth={50} count={8000} factor={4} saturation={1} fade speed={1} />

                {/* --- NEBULOSA VOLUMÉTRICA --- */}

                {/* 1. Fondo Oscuro / Estructura (Dark Purple/Blue) */}
                <Cloud seed={1} scale={2} volume={6} color="#1e1b4b" fade={10} opacity={0.3} position={[0, 0, -12]} speed={0.1} />

                {/* 2. RELLENO CENTRAL (Evitar el agujero negro) */}
                {/* Gran nube central difusa, color morado medio */}
                <Cloud seed={10} scale={3} volume={5} color="#4c1d95" fade={20} opacity={0.2} position={[0, 0, -8]} speed={0.1} />

                {/* 3. HIGHLIGHTS SUPERIORES (Para el Header/Nombre) */}
                {/* Nubes brillantes rosadas/fucsias en la parte superior central */}
                <Cloud seed={11} scale={1.5} volume={4} color="#d946ef" fade={15} opacity={0.25} position={[0, 3, -6]} speed={0.15} />
                <Cloud seed={12} scale={1} volume={3} color="#f0abfc" fade={15} opacity={0.3} position={[3, 4, -5]} speed={0.2} /> {/* Right top */}
                <Cloud seed={13} scale={1} volume={3} color="#f0abfc" fade={15} opacity={0.3} position={[-3, 4, -5]} speed={0.2} /> {/* Left top */}


                {/* 4. Cuerpo Principal (Vibrant Purple/Pink) - Laterales */}
                <Cloud seed={2} scale={2} volume={4} color="#701a75" fade={10} opacity={0.3} position={[6, -2, -8]} speed={0.15} />
                <Cloud seed={3} scale={2} volume={4} color="#5b21b6" fade={10} opacity={0.3} position={[-6, -2, -8]} speed={0.15} />

                {/* 5. Detalles Brillantes Cercanos (Accents) */}
                <Cloud seed={4} scale={0.8} volume={2} color="#c026d3" fade={15} opacity={0.2} position={[2, 0, -5]} speed={0.2} />
                <Cloud seed={5} scale={0.8} volume={2} color="#7c3aed" fade={15} opacity={0.2} position={[-2, -1, -5]} speed={0.2} />


                {/* Un toque de azul profundo en el fondo bajo */}
                <Cloud seed={6} scale={1.5} volume={3} color="#0c4a6e" fade={20} opacity={0.2} position={[0, -5, -8]} speed={0.1} />

                {/* Partículas flotantes para dar vida */}
                <ParticleField />
            </Canvas>
        </div>
    );
};

export default Background3D;
