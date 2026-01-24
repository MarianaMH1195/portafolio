import React from 'react';

const Hero: React.FC = () => {
    return (
        <header className="relative min-h-screen flex items-center px-6 lg:px-20 overflow-hidden">
            {/* Overlay oscuro con gradiente vertical */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/90 z-0" />

            <div className="relative z-10 max-w-4xl">
                <div className="space-y-2">
                    {/* Nombre con gradiente */}
                    <span className="block text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Mariana
                    </span>
                    {/* Apellido en blanco */}
                    <span className="block text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mt-2">
                        Moreno
                    </span>
                </div>

                {/* Tagline */}
                <p className="text-lg md:text-xl text-cyan-300/90 font-medium tracking-wide mt-4 mb-6 uppercase">
                    Veterinaria &middot; Developer &middot; Data Analyst
                </p>

                {/* Descripción */}
                <p className="text-base md:text-lg text-slate-200/80 leading-relaxed max-w-2xl mb-8">
                    Explorando la dualidad entre la ciencia biológica y la lógica computacional.
                    Creo soluciones donde los datos cuentan historias y el código cobra vida.
                </p>

                {/* Botones */}
                <div className="flex flex-wrap gap-4">
                    {/* Botón Primario */}
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300">
                        <span className="relative z-10">Ver Proyectos</span>
                        {/* Efecto blur hover */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                    </button>

                    {/* Botón Secundario */}
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-semibold text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300">
                        Conecta Conmigo
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Hero;
