
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-semibold text-medical-dark-blue">MedClinic</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-medical-dark-blue transition-colors">Início</Link>
            <Link to="/sobre" className="font-medium hover:text-medical-dark-blue transition-colors">Sobre</Link>
            <Link to="/servicos" className="font-medium hover:text-medical-dark-blue transition-colors">Serviços</Link>
            <Link to="/depoimentos" className="font-medium hover:text-medical-dark-blue transition-colors">Depoimentos</Link>
            <Link to="/contato" className="font-medium hover:text-medical-dark-blue transition-colors">Contato</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Phone size={16} />
              <span>Ligar Agora</span>
            </Button>
            <Button className="flex items-center gap-2 bg-medical-dark-blue hover:bg-blue-700">
              <Calendar size={16} />
              <span>Agendar</span>
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <Link to="/" className="font-medium py-2 hover:text-medical-dark-blue transition-colors">Início</Link>
            <Link to="/sobre" className="font-medium py-2 hover:text-medical-dark-blue transition-colors">Sobre</Link>
            <Link to="/servicos" className="font-medium py-2 hover:text-medical-dark-blue transition-colors">Serviços</Link>
            <Link to="/depoimentos" className="font-medium py-2 hover:text-medical-dark-blue transition-colors">Depoimentos</Link>
            <Link to="/contato" className="font-medium py-2 hover:text-medical-dark-blue transition-colors">Contato</Link>
            <div className="flex flex-col space-y-3 pt-2">
              <Button variant="outline" className="flex items-center justify-center gap-2 w-full">
                <Phone size={16} />
                <span>Ligar Agora</span>
              </Button>
              <Button className="flex items-center justify-center gap-2 w-full bg-medical-dark-blue hover:bg-blue-700">
                <Calendar size={16} />
                <span>Agendar</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
