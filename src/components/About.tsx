import React from 'react';

const About: React.FC = () => {
    return (
        <section id="sobre-mi" className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto bg-cosmic-night/50 p-8 rounded-2xl border border-sea-foam/10 backdrop-blur-sm">
                <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
                    Sobre Mí
                </h2>
                <div className="text-text-secondary space-y-4 text-lg leading-relaxed">
                    <p>
                        No llegué al mundo tech siguiendo una línea recta, y eso es parte de lo que me define. Hoy soy <strong className="text-fuchsia-300">desarrolladora web full stack</strong> y <strong className="text-fuchsia-300">analista de datos</strong> en formación constante, enfocada en crear experiencias digitales claras, funcionales y con sentido, donde las ideas y los datos se transforman en soluciones reales.
                    </p>
                    <p>
                        He aprendido en contextos muy distintos —algunos técnicos, otros profundamente humanos— y cada uno me dejó habilidades que hoy aplico al desarrollo: adaptabilidad, comunicación y una forma analítica de enfrentar problemas. Combino esa mirada versátil con curiosidad, criterio y ganas de seguir creciendo dentro del mundo tecnológico.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
