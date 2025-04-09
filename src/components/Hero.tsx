
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-medical-light-blue to-medical-blue">
      <div className="container mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Cuidados médicos de qualidade para você e sua família
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Oferecemos atendimento médico personalizado com profissionais dedicados a cuidar da sua saúde com excelência e humanização.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-medical-dark-blue hover:bg-blue-700 text-white px-6 py-6 text-lg flex items-center gap-2">
                <Calendar size={20} />
                <span>Agendar Consulta</span>
              </Button>
              <Button variant="outline" className="border-medical-dark-blue text-medical-dark-blue hover:bg-medical-light-blue px-6 py-6 text-lg">
                Conhecer Serviços
              </Button>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1080&auto=format&fit=crop" 
              alt="Médico sorrindo com um estetoscópio" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
