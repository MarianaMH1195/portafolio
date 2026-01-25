import { useState, useEffect } from 'react';

interface ProjectConfig {
    repoName: string;
    category: 'data' | 'web';
    size: 'large' | 'small';
}

interface ProjectData {
    id: number;
    name: string;
    description: string;
    html_url: string;
    topics: string[];
    language: string;
    homepage: string;
}

interface EnrichedProject extends ProjectData {
    category: 'data' | 'web';
    size: 'large' | 'small';
}

const REPO_CONFIG: ProjectConfig[] = [
    { repoName: "Analisis-de-series-temporales", category: 'data', size: 'large' },
    { repoName: "p5-analisis_exploratorio_datos-g5", category: 'data', size: 'small' },
    { repoName: "project-data-automation", category: 'data', size: 'small' },
    { repoName: "fullstack-butterflies-mongodb", category: 'web', size: 'large' },
    { repoName: "Tarot-app", category: 'web', size: 'small' },
    { repoName: "cine-verano-crud", category: 'web', size: 'small' }
];

const USERNAME = "MarianaMH1195";

const Projects = () => {
    const [projects, setProjects] = useState<EnrichedProject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectPromises = REPO_CONFIG.map(async (config) => {
                    const response = await fetch(`https://api.github.com/repos/${USERNAME}/${config.repoName}`);
                    if (!response.ok) {
                        console.warn(`Failed to fetch ${config.repoName}`);
                        return null;
                    }
                    const data: ProjectData = await response.json();

                    return {
                        ...data,
                        category: config.category,
                        size: config.size
                    };
                });

                const results = await Promise.all(projectPromises);
                const validProjects = results.filter((p): p is EnrichedProject => p !== null);
                setProjects(validProjects);
            } catch (err) {
                console.error("Error fetching projects:", err);
                setError("Error al cargar los proyectos desde GitHub");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <section id="projectos" className="relative px-6 lg:px-20 py-20 bg-gradient-to-b from-slate-950/90 to-slate-900 min-h-screen">
                <div className="flex items-center justify-center h-full">
                    <div className="text-cyan-400 text-xl animate-pulse">Cargando proyectos desde GitHub...</div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="projectos" className="relative px-6 lg:px-20 py-20 bg-gradient-to-b from-slate-950/90 to-slate-900">
                <div className="text-red-400 text-center">{error}</div>
            </section>
        )
    }

    return (
        <section id="projectos" className="relative px-6 lg:px-20 py-20 bg-gradient-to-b from-slate-950/90 to-slate-900">
            <div className="max-w-7xl mx-auto">
                {/* Header de Sección */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Proyectos <span className="text-cyan-400">Destacados</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        Una selección de mis trabajos más recientes en desarrollo web y análisis de datos, obtenidos directamente de mi GitHub.
                    </p>
                </div>

                {/* Grid de Proyectos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                        >
                            {/* Badges */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.language && (
                                    <span className="px-3 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">
                                        {project.language}
                                    </span>
                                )}
                                {project.topics?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Título */}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors break-words">
                                {project.name.replace(/-/g, ' ')}
                            </h3>

                            {/* Descripción */}
                            <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
                                {project.description || "Sin descripción disponible en GitHub."}
                            </p>

                            {/* Footer Card */}
                            <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                                <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full group/link">
                                    <span className="text-xs text-slate-400 uppercase tracking-wide group-hover/link:text-white transition-colors">Ver Código</span>
                                    <svg className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                                {project.homepage && (
                                    <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group/link ml-4">
                                        <span className="text-xs text-slate-400 uppercase tracking-wide group-hover/link:text-white transition-colors">Demo</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
