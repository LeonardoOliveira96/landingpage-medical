import React from 'react';
import { Shield, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre o Médico</h2>
          <div className="w-20 h-1 bg-medical-dark-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça nossa equipe médica dedicada a oferecer o melhor atendimento com compromisso e excelência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1080&auto=format&fit=crop"
                alt="Dr. Mattheus Motta"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-medical-dark-blue text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-xl font-semibold">+15 anos</p>
              <p>de experiência</p>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Dr. Mattheus Motta</h3>
            <p className="text-medical-dark-blue font-medium mb-6">Clínica Geral e Medicina da Família</p>

            <p className="text-gray-600 mb-6">
              Formado pela Universidade Federal com especialização em Medicina da Família, o Dr. Mattheus Motta tem mais de 15 anos de experiência no atendimento médico personalizado.
            </p>

            <p className="text-gray-600 mb-8">
              Sua abordagem humanizada e atualização constante garantem diagnósticos precisos e tratamentos eficazes, sempre priorizando a relação médico-paciente e o bem-estar integral.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-medical-light-blue p-5 rounded-lg text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Shield className="w-12 h-12 text-medical-dark-blue mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800">Compromisso</h4>
              </div>
              <div className="bg-medical-light-blue p-5 rounded-lg text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <Award className="w-12 h-12 text-medical-dark-blue mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800">Especialização</h4>
              </div>
              <div className="bg-medical-light-blue p-5 rounded-lg text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <Heart className="w-12 h-12 text-medical-dark-blue mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800">Cuidado</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
