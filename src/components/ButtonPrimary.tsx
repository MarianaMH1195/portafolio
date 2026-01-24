import React from 'react';

interface ButtonPrimaryProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ 
  children, 
  onClick,
  className = '' 
}) => {
  return (
    <button 
      onClick={onClick}
      className={`
        group relative px-8 py-4 
        bg-gradient-to-r from-cyan-500 to-blue-600 
        rounded-full font-semibold text-white 
        shadow-lg shadow-cyan-500/30 
        hover:shadow-xl hover:shadow-cyan-500/50 
        hover:scale-105 
        transition-all duration-300
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
    </button>
  );
};

export default ButtonPrimary;
