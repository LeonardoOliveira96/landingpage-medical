import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface ScrollLinkProps {
    to: string;
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ to, className, children, onClick }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Para links com hash (ex: #servicos)
        if (to.startsWith('#')) {
            e.preventDefault();
            const targetId = to.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajuste para o cabeçalho fixo
                    behavior: 'smooth'
                });
            }

            // Fechamos o menu móvel se houver um callback onClick
            if (onClick) {
                onClick();
            }
            return;
        }

        // Para link "Início" ou link "/"
        if (to === '/' && isHome) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // Fechamos o menu móvel se houver um callback onClick
            if (onClick) {
                onClick();
            }
            return;
        }

        // Para outros links sem hash, não fazemos nada especial e deixamos o Link normal funcionar
        // Fechamos o menu móvel se houver um callback onClick
        if (onClick) {
            onClick();
        }
    };

    return (
        <Link
            to={to}
            className={className}
            onClick={handleClick}
        >
            {children}
        </Link>
    );
};

export default ScrollLink; 