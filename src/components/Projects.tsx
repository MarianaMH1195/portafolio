import React from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    link: string;
    category: 'data' | 'web';
    size: 'large' | 'small';
}

const projects: Project[] = [
    // First project is Large (Asymmetric grid feature)
    {
        id: 1,
        title: "Analisis de Series Temporales",
        description: "Píldora formativa sobre Análisis de Series Temporales. Tendencia, estacionalidad y patrones temporales. Un estudio profundo utilizando modelos estadísticos avanzados.",
        tags: ["Python", "Time Series", "Data Analysis"],
        link: "https://github.com/MarianaMH1195/Analisis-de-series-temporales",
        category: 'data',
        size: 'large'
    },
    {
        id: 2,
        title: "Análisis Exploratorio (EDA)",
        description: "Análisis completo de dataset para relacionar variables y extraer conclusiones.",
        tags: ["Python", "Pandas", "EDA"],
        link: "https://github.com/MarianaMH1195/p5-analisis_exploratorio_datos-g5",
        category: 'data',
        size: 'small'
    },
    {
        id: 3,
        title: "Data Automation",
        description: "Automatización de procesos con Python, SQL y Excel.",
        tags: ["Python", "SQL", "Automation"],
        link: "https://github.com/MarianaMH1195/project-data-automation",
        category: 'data',
        size: 'small'
    },
    {
        id: 4,
        title: "Fullstack Butterflies",
        description: "Aplicación Full Stack con persistencia de datos y gestión de usuarios.",
        tags: ["React", "Node.js", "MongoDB"],
        link: "https://github.com/MarianaMH1195/fullstack-butterflies-mongodb",
        category: 'web',
        size: 'large'
    },
    {
        id: 5,
        title: "Tarot App",
        description: "Aplicación web interactiva.",
        tags: ["React", "CSS"],
        link: "https://github.com/MarianaMH1195/Tarot-app",
        category: 'web',
        size: 'small'
    },
    {
        id: 6,
        title: "Cine Verano CRUD",
        description: "Gestión para cine de verano.",
        tags: ["CRUD", "JS"],
        link: "https://github.com/MarianaMH1195/cine-verano-crud",
        category: 'web',
        size: 'small'
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projectos" className="relative px-6 lg:px-20 py-20 bg-gradient-to-b from-slate-950/90 to-slate-900">
            <div className="max-w-7xl mx-auto">
                {/* Header de Sección */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Proyectos <span className="text-cyan-400">Destacados</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        Una selección de mis trabajos más recientes en desarrollo web y análisis de datos.
                    </p>
                </div>

                {/* Grid de Proyectos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Badges */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, i) => {
                                    // Lógica simple para estilos de badged (alternar o por nombre)
                                    const isPrimary = ['Python', 'React', 'SQL', 'Node.js'].some(t => tag.includes(t));
                                    return (
                                        <span
                                            key={i}
                                            className={isPrimary
                                                ? "px-3 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                                                : "px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                                            }
                                        >
                                            {tag}
                                        </span>
                                    );
                                })}
                            </div>

                            {/* Título */}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>

                            {/* Descripción */}
                            <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                {project.description}
                            </p>

                            {/* Footer Card */}
                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full group/link">
                                    <span className="text-xs text-slate-400 uppercase tracking-wide group-hover/link:text-white transition-colors">Ver Proyecto</span>
                                    <svg className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
