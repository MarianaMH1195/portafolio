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
                        Profesional del sector tecnológico con formación en <strong className="text-fuchsia-300">Desarrolladora Web Full Stack</strong> y <strong className="text-fuchsia-300">Análisis de Datos</strong>, orientada al diseño y desarrollo de soluciones tecnológicas eficientes, escalables y centradas en el usuario. Cuento con experiencia práctica en programación, análisis y visualización de datos, así como en el uso de herramientas colaborativas y control de versiones para el desarrollo y documentación de proyectos.
                    </p>
                    <p>
                        Mi trayectoria previa en ventas, asesoría financiera y retail me ha permitido desarrollar una sólida capacidad de comunicación, pensamiento analítico, resolución de problemas y orientación a resultados, habilidades que hoy aplico al ámbito tecnológico para conectar las necesidades del negocio con soluciones técnicas efectivas.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
