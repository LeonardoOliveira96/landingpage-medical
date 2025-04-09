import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar, Stethoscope } from "lucide-react";
import { Link } from 'react-router-dom';
import ScrollLink from './ScrollLink';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center animate-fade-in">
            <Link to="/" className="flex items-center gap-2 text-2xl font-semibold text-medical-dark-blue">
              <Stethoscope className="w-6 h-6" />
              <span>Dr. Mattheus Motta</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <ScrollLink to="/" className="font-medium hover:text-medical-dark-blue transition-colors">Início</ScrollLink>
            <ScrollLink to="#sobre" className="font-medium hover:text-medical-dark-blue transition-colors">Sobre</ScrollLink>
            <ScrollLink to="#servicos" className="font-medium hover:text-medical-dark-blue transition-colors">Serviços</ScrollLink>
            <ScrollLink to="#depoimentos" className="font-medium hover:text-medical-dark-blue transition-colors">Depoimentos</ScrollLink>
            <ScrollLink to="#contato" className="font-medium hover:text-medical-dark-blue transition-colors">Contato</ScrollLink>
          </div>

          <div className="hidden md:flex items-center space-x-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button variant="outline" className="flex items-center gap-2">
              <Phone size={16} />
              <span>Ligar Agora</span>
            </Button>
            <ScrollLink to="#contato">
              <Button className="flex items-center gap-2 bg-medical-dark-blue hover:bg-blue-700">
                <Calendar size={16} />
                <span>Agendar</span>
              </Button>
            </ScrollLink>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900 animate-fade-in"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <ScrollLink to="/" className="font-medium py-2 hover:text-medical-dark-blue transition-colors" onClick={closeMenu}>Início</ScrollLink>
            <ScrollLink to="#sobre" className="font-medium py-2 hover:text-medical-dark-blue transition-colors" onClick={closeMenu}>Sobre</ScrollLink>
            <ScrollLink to="#servicos" className="font-medium py-2 hover:text-medical-dark-blue transition-colors" onClick={closeMenu}>Serviços</ScrollLink>
            <ScrollLink to="#depoimentos" className="font-medium py-2 hover:text-medical-dark-blue transition-colors" onClick={closeMenu}>Depoimentos</ScrollLink>
            <ScrollLink to="#contato" className="font-medium py-2 hover:text-medical-dark-blue transition-colors" onClick={closeMenu}>Contato</ScrollLink>
            <div className="flex flex-col space-y-3 pt-2">
              <Button variant="outline" className="flex items-center justify-center gap-2 w-full">
                <Phone size={16} />
                <span>Ligar Agora</span>
              </Button>
              <ScrollLink to="#contato" onClick={closeMenu}>
                <Button className="flex items-center justify-center gap-2 w-full bg-medical-dark-blue hover:bg-blue-700">
                  <Calendar size={16} />
                  <span>Agendar</span>
                </Button>
              </ScrollLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
