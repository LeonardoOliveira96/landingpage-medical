import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Mostrar botão quando usuário rolar 300px
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Função para rolar para o topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed right-6 bottom-6 p-3 rounded-full bg-medical-dark-blue text-white shadow-lg hover:bg-blue-700 transition-all duration-300 z-50 opacity-80 hover:opacity-100"
                    aria-label="Voltar ao topo"
                >
                    <ChevronUp size={20} />
                </button>
            )}
        </>
    );
};

export default ScrollToTop; 