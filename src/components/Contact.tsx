import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <footer id="contacto" className="container mx-auto px-6 md:px-12 py-32 relative">
            <div className="border-t border-sea-foam/10 absolute top-0 left-6 right-6 md:left-12 md:right-12"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Columna izquierda - Formulario de contacto */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
                        Hablemos <span className="text-cyan-400">Ahora</span>
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
                        className="group flex items-center justify-between p-8 bg-cosmic-night border border-sea-foam/20 text-cyan-300/90 hover:bg-sea-foam hover:text-cosmic-night transition-all duration-300">
                        <div>
                            <span className="block text-sm font-bold opacity-60 uppercase tracking-widest mb-1">Código</span>
                            <span className="text-2xl font-bold">GitHub Profile</span>
                        </div>
                        <span className="text-2xl transform group-hover:rotate-45 transition-transform">↗</span>
                    </a>

                    <a href="https://www.linkedin.com/in/mariana-moreno-henao/" target="_blank" rel="noopener noreferrer"
                        className="group flex items-center justify-between p-8 bg-cosmic-night border border-sea-foam/20 text-cyan-300/90 hover:bg-star-pink hover:text-cosmic-night transition-all duration-300">
                        <div>
                            <span className="block text-sm font-bold opacity-60 uppercase tracking-widest mb-1">Carrera</span>
                            <span className="text-2xl font-bold">LinkedIn Profile</span>
                        </div>
                        <span className="text-2xl transform group-hover:rotate-45 transition-transform">↗</span>
                    </a>



                    <a href="./cv.pdf" download="CV_Mariana_Moreno.pdf"
                        className="group flex items-center justify-between p-8 bg-cosmic-night border border-sea-foam/20 text-cyan-300/90 hover:bg-text-secondary hover:text-cosmic-night transition-all duration-300">
                        <div>
                            <span className="block text-sm font-bold opacity-60 uppercase tracking-widest mb-1">Resumen</span>
                            <span className="text-2xl font-bold">Descargar CV</span>
                        </div>
                        <span className="text-2xl transform group-hover:translate-y-1 transition-transform">↓</span>
                    </a>
                </div>
            </div>

            <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-text-secondary text-sm">
                <p>© {new Date().getFullYear()} Mariana Moreno Henao.</p>
                <p>Diseñado con Dualidad & Código.</p>
            </div>
        </footer>
    );
};

export default Contact;
