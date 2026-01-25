const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center px-6 lg:px-20">
            {/* Overlay oscuro para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/90 z-0" />

            {/* Contenedor principal */}
            <div className="relative z-10 max-w-4xl">
                {/* Nombre con gradiente */}
                <h1 className="mb-4">
                    <span className="block text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                        Mariana
                    </span>
                    <span className="block text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mt-2">
                        Moreno
                    </span>
                </h1>

                {/* Tagline */}
                <p className="text-lg md:text-xl text-fuchsia-300/90 font-medium tracking-wide mt-4 mb-6">
                    Veterinaria · Developer · Data Analyst
                </p>

                {/* Descripción */}
                <p className="text-base md:text-lg text-slate-200/80 leading-relaxed max-w-2xl">
                    Explorando la dualidad entre la ciencia biológica y la lógica computacional.
                    Creo soluciones donde los datos cuentan historias y el código cobra vida.
                </p>
            </div>
        </section>
    );
};

export default Hero;
