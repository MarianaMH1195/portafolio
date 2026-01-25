import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars, Cloud } from '@react-three/drei';
import { Group } from 'three';

// Galaxy/Particle Field
const ParticleField = (props: React.ComponentProps<'group'>) => {
    const ref = useRef<Group>(null);

    // Generamos 6000 partículas para el campo estelar principal
    const sphere = useMemo(() => {
        const temp = new Float32Array(6000 * 3);
        const count = 6000;
        const radius = 2.5;
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
            ref.current.rotation.x -= delta / 20;
            ref.current.rotation.y -= delta / 25;
        }
    });

    return (
        <group ref={ref} rotation={[0, 0, Math.PI / 4]} {...props}>
            <Points positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#67e8f9" // Cyan-300
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
        <div className="fixed inset-0 -z-10 bg-slate-950">
            {/* Gradient overlay para simular profundidad cósmica */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0B0F1A] to-slate-950 z-0 pointer-events-none" />

            <Canvas camera={{ position: [0, 0, 1] }}>
                {/* Iluminación básica */}
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={0.5} color="#c084fc" />

                {/* Campo de estrellas fondo lejano */}
                <Stars radius={150} depth={50} count={7000} factor={4} saturation={1} fade speed={0.5} />

                {/* Nebulosas Volumétricas (Clouds) */}
                {/* Capa Profunda - Morado oscuro */}
                <Cloud opacity={0.2} speed={0.1} width={20} depth={2} segments={20} position={[0, 0, -10]} color="#3b0764" />

                {/* Capa Media - Azul/Cyan */}
                <Cloud opacity={0.2} speed={0.15} width={15} depth={1.5} segments={15} position={[5, -2, -8]} color="#1e3a8a" />

                {/* Capa Cercana - Cyan/Bright para detalles sutiles */}
                <Cloud opacity={0.15} speed={0.2} width={10} depth={1} segments={10} position={[-5, 2, -6]} color="#0e7490" />

                {/* Galaxia de partículas (sutil overlay) */}
                <ParticleField />
            </Canvas>
        </div>
    );
};

export default Background3D;
