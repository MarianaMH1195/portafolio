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
                        Soy <strong className="text-fuchsia-300">desarrolladora web full stack</strong> y <strong className="text-fuchsia-300">analista de datos</strong> en formación constante. Me motiva crear experiencias digitales claras y funcionales, combinando <span className="text-indigo-300">desarrollo web</span> con <span className="text-indigo-300">análisis y visualización de datos</span> para transformar ideas e información en soluciones prácticas.
                    </p>
                    <p>
                        Mi experiencia en ventas y retail fortaleció mis habilidades de comunicación y resolución de problemas. Hoy uno ese enfoque humano con la <strong className="text-fuchsia-400">tecnología</strong> para aportar valor real, seguir aprendiendo y crecer dentro del mundo tech.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
