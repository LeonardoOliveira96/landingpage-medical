import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToSection = () => {
    const location = useLocation();

    useEffect(() => {
        // Verificar se há um hash na URL (ex: #sobre)
        if (location.hash) {
            const targetId = location.hash.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                setTimeout(() => {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Ajuste para o cabeçalho fixo
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
        // Verificar se há um alvo de rolagem no sessionStorage (para navegação entre páginas)
        else {
            const scrollTarget = sessionStorage.getItem('scrollTarget');

            if (scrollTarget) {
                sessionStorage.removeItem('scrollTarget');
                const targetElement = document.getElementById(scrollTarget);

                if (targetElement) {
                    setTimeout(() => {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }, 100);
                }
            }
        }
    }, [location]);
};

export default useScrollToSection; 