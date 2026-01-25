import React from 'react';

const About: React.FC = () => {
    return (
        <section id="sobre-mi" className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto bg-cosmic-night/50 p-8 rounded-2xl border border-sea-foam/10 backdrop-blur-sm">
                <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
                    <span className="text-star-pink">✨</span> Sobre Mí
                </h2>
                <div className="text-text-secondary space-y-4 text-lg leading-relaxed">
                    <p>
                        Soy una profesional polifacética con una trayectoria única que combina la ciencia veterinaria con el mundo tecnológico.
                        Actualmente me desempeño como <strong className="text-sea-foam">Desarrolladora Web Full Stack</strong> y <strong className="text-sea-foam">Analista de Datos</strong> en formación.
                    </p>
                    <p>
                        Mi experiencia previa en medicina veterinaria me ha dotado de una fuerte capacidad analítica, atención al detalle y resolución de problemas complejos bajo presión,
                        habilidades que ahora aplico en el desarrollo de software y el análisis de datos.
                    </p>
                    <p>
                        Me apasiona crear soluciones tecnológicas que aporten valor real, utilizando herramientas modernas como <span className="text-sunset-gold">React, Python y SQL</span>.
                        Siempre estoy en búsqueda de nuevos desafíos que me permitan seguir aprendiendo y creciendo profesionalmente.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
