import React from 'react';

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: Array<{
        label: string;
        color: 'cyan' | 'purple' | 'blue' | 'pink';
    }>;
    link?: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const getTagColors = (color: string) => {
        const colors = {
            cyan: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
            purple: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
            blue: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
            pink: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
        };
        return colors[color as keyof typeof colors] || colors.cyan;
    };

    const handleClick = () => {
        if (project.link) {
            window.open(project.link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <article
            onClick={handleClick}
            className={`
        group relative 
        bg-white/5 backdrop-blur-md 
        border border-white/10 
        rounded-2xl p-6 
        hover:bg-white/10 hover:border-cyan-400/50 
        transition-all duration-300 
        hover:-translate-y-2
        ${project.link ? 'cursor-pointer' : ''}
      `}
        >
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                    <span
                        key={index}
                        className={`
              px-3 py-1 text-xs font-medium 
              rounded-full border
              ${getTagColors(tag.color)}
            `}
                    >
                        {tag.label}
                    </span>
                ))}
            </div>

            {/* Título */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
            </h3>

            {/* Descripción */}
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {project.description}
            </p>

            {/* Footer */}
            {project.link && (
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs text-slate-400 uppercase tracking-wide">
                        Ver Proyecto
                    </span>

                    <svg
                        className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </div>
            )}
        </article>
    );
};

export default ProjectCard;
