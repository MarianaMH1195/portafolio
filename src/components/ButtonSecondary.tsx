import React from 'react';

interface ButtonSecondaryProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
    children,
    onClick,
    className = ''
}) => {
    return (
        <button
            onClick={onClick}
            className={`
        px-8 py-4 
        bg-white/10 backdrop-blur-md 
        border border-white/20 
        rounded-full font-semibold text-white 
        hover:bg-white/20 hover:border-white/30 
        transition-all duration-300
        ${className}
      `}
        >
            {children}
        </button>
    );
};

export default ButtonSecondary;
