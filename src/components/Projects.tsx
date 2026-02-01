import { useState, useEffect, useCallback } from 'react';

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

// Configuración opcional para proyectos específicos que quieras destacar con tamaños especiales
const REPO_CONFIG: Record<string, Partial<ProjectConfig>> = {
    "Analisis-de-series-temporales": { category: 'data', size: 'large' },
    "fullstack-butterflies-mongodb": { category: 'web', size: 'large' },
    // El resto usará valores por defecto
};

const USERNAME = "MarianaMH1195";
const ITEMS_PER_PAGE = 6;
const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutos en milisegundos

const Projects = () => {
    const [projects, setProjects] = useState<EnrichedProject[]>([]);
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

    const fetchProjects = useCallback(async () => {

        try {
            // Fetch de TODOS los repositorios
            const response = await fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100&_=${Date.now()}`);
            if (!response.ok) {
                throw new Error('Failed to fetch repositories');
            }
            const data: ProjectData[] = await response.json();

            // Mapear y enriquecer datos
            const enrichedProjects: EnrichedProject[] = data
                .filter(repo => repo.name !== 'portafolio') // Opcional: excluir el propio portafolio si quieres
                .map(repo => {
                    const config = REPO_CONFIG[repo.name];

                    // Inferir categoría basada en lenguaje si no hay config
                    let category: 'data' | 'web' = 'web';
                    if (config?.category) {
                        category = config.category;
                    } else if (repo.language === 'Python' || repo.language === 'Jupyter Notebook') {
                        category = 'data';
                    }

                    return {
                        ...repo,
                        category: category,
                        size: config?.size || 'small'
                    };
                });

            setProjects(enrichedProjects);
            setLastUpdated(new Date());
            setError(null);
        } catch (err) {
            console.error("Error fetching projects:", err);
            setError("Error al cargar los proyectos desde GitHub");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        // Carga inicial
        fetchProjects();

        // Configurar polling automático cada 5 minutos
        const intervalId = setInterval(() => {
            fetchProjects();
        }, REFRESH_INTERVAL);

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, [fetchProjects]);

    // Función para formatear el tiempo de última actualización
    const getTimeAgo = (date: Date | null) => {
        if (!date) return '';

        const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

        if (seconds < 60) return 'hace unos segundos';
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `hace ${minutes} minuto${minutes > 1 ? 's' : ''}`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `hace ${hours} hora${hours > 1 ? 's' : ''}`;
        const days = Math.floor(hours / 24);
        return `hace ${days} día${days > 1 ? 's' : ''}`;
    };

    // Lógica de Paginación
    const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            // Scroll suave hacia arriba de la sección
            document.getElementById('projectos')?.scrollIntoView({ behavior: 'smooth' });
        }
    };



    if (loading) {
        return (
            <section id="projectos" className="relative px-6 lg:px-20 py-20 bg-gradient-to-b from-slate-950/90 to-slate-900 min-h-screen">
                <div className="flex items-center justify-center h-full">
                    <div className="text-cyan-400 text-xl animate-pulse">Cargando todos los proyectos...</div>
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
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Mis <span className="text-fuchsia-400">Proyectos</span>
                        </h2>

                        {/* Botón de Refresh y Timestamp */}
                        <div className="flex items-center gap-4">
                            {lastUpdated && (
                                <span className="text-sm text-slate-500">
                                    Actualizado {getTimeAgo(lastUpdated)}
                                </span>
                            )}

                        </div>
                    </div>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        Explora todos mis repositorios públicos de GitHub. ({projects.length} proyectos en total)
                    </p>
                </div>

                {/* Grid de Proyectos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {currentProjects.map((project) => (
                        <article
                            key={project.id}
                            className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-fuchsia-400/50 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                        >
                            {/* Badges */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.language && (
                                    <span className="px-3 py-1 text-xs font-medium bg-fuchsia-500/20 text-fuchsia-300 rounded-full border border-fuchsia-500/30">
                                        {project.language}
                                    </span>
                                )}
                                {project.topics?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs font-medium bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
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
                                {project.description || "Sin descripción disponible."}
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

                {/* Controles de Paginación */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            Anterior
                        </button>

                        <span className="text-slate-400">
                            Página <span className="text-cyan-400">{currentPage}</span> de <span className="text-white">{totalPages}</span>
                        </span>

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            Siguiente
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
