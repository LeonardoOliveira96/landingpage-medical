
import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MedClinic</h3>
            <p className="mb-4 text-blue-100">
              Cuidando da sua saúde com excelência e humanização. Nossa missão é proporcionar o melhor atendimento médico.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-white transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-blue-100 hover:text-white transition-colors">Sobre</Link>
              </li>
              <li>
                <Link to="/servicos" className="text-blue-100 hover:text-white transition-colors">Serviços</Link>
              </li>
              <li>
                <Link to="/depoimentos" className="text-blue-100 hover:text-white transition-colors">Depoimentos</Link>
              </li>
              <li>
                <Link to="/contato" className="text-blue-100 hover:text-white transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Segunda - Sexta:</span>
                <span>8h - 18h</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span>8h - 12h</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Av. Paulista, 1000 - Bela Vista, São Paulo - SP</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>(11) 3456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>contato@medclinic.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-12 pt-6 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} MedClinic. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
