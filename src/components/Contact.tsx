import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section id="contacto" className="container mx-auto px-6 md:px-12 py-32 relative">
            <div className="border-t border-sea-foam/10 absolute top-0 left-6 right-6 md:left-12 md:right-12"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Columna izquierda - Formulario de contacto */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
                        Hablemos <span className="text-fuchsia-400">Ahora</span>
                    </h2>
                    <p className="text-lg text-text-secondary leading-relaxed max-w-md mb-8">
                        ¿Tienes un proyecto en mente? Envíame un mensaje y te responderé lo antes posible.
                    </p>

                    <ContactForm />
                </div>

                {/* Columna derecha - Links sociales */}
                <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        También puedes encontrarme en:
                    </h3>

                    <a href="https://github.com/MarianaMH1195" target="_blank" rel="noopener noreferrer"
                        className="group flex items-center justify-between p-8 bg-cosmic-night border border-sea-foam/20 text-purple-200/90 hover:bg-fuchsia-500 hover:text-white transition-all duration-300">
                        <div>
                            <span className="block text-sm font-bold opacity-60 uppercase tracking-widest mb-1">Código</span>
                            <span className="text-2xl font-bold">GitHub Profile</span>
                        </div>
                        <span className="text-2xl transform group-hover:rotate-45 transition-transform">↗</span>
                    </a>

                    <a href="https://www.linkedin.com/in/mariana-moreno-henao/" target="_blank" rel="noopener noreferrer"
                        className="group flex items-center justify-between p-8 bg-cosmic-night border border-sea-foam/20 text-purple-200/90 hover:bg-violet-600 hover:text-white transition-all duration-300">
                        <div>
                            <span className="block text-sm font-bold opacity-60 uppercase tracking-widest mb-1">Carrera</span>
                            <span className="text-2xl font-bold">LinkedIn Profile</span>
                        </div>
                        <span className="text-2xl transform group-hover:rotate-45 transition-transform">↗</span>
                    </a>



                    <a href="./cv.pdf" download="CV_Mariana_Moreno.pdf"
                        className="group flex items-center justify-between p-8 bg-cosmic-night border border-sea-foam/20 text-purple-200/90 hover:bg-text-secondary hover:text-cosmic-night transition-all duration-300">
                        <div>
                            <span className="block text-sm font-bold opacity-60 uppercase tracking-widest mb-1">Resumen</span>
                            <span className="text-2xl font-bold">Descargar CV</span>
                        </div>
                        <span className="text-2xl transform group-hover:translate-y-1 transition-transform">↓</span>
                    </a>
                </div>
            </div>

            {/* Footer removido de aquí y movido a componente Footer.tsx */}
        </section>
    );
};

export default Contact;
