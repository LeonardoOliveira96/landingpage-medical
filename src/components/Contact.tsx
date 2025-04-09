import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LucideIcon } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, content }: { icon: LucideIcon, title: string, content: string }) => {
  return (
    <div className="flex items-start mb-6">
      <div className="mr-4">
        <div className="bg-medical-light-blue p-3 rounded-full">
          <Icon className="text-medical-dark-blue w-5 h-5" />
        </div>
      </div>
      <div>
        <h4 className="font-medium text-gray-800">{title}</h4>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  const [redirectUrl, setRedirectUrl] = useState('');

  useEffect(() => {
    setRedirectUrl(window.location.origin + '/obrigado');
  }, []);

  return (
    <section id="contato" className="section-padding bg-medical-light-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-medical-dark-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Agende sua consulta com o Dr. Mattheus Motta ou envie uma mensagem para nossa equipe
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>

            <ContactInfo
              icon={MapPin}
              title="Endereço"
              content="Av. Paulista, 1000 - Bela Vista, São Paulo - SP"
            />

            <ContactInfo
              icon={Phone}
              title="Telefone"
              content="(11) 3456-7890"
            />

            <ContactInfo
              icon={Mail}
              title="Email"
              content="contato@drmattheus.com.br"
            />

            <ContactInfo
              icon={Clock}
              title="Horário de Atendimento"
              content="Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h"
            />

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Nossa Localização</h4>
              <div className="h-64 bg-medical-light-blue rounded-lg overflow-hidden">
                {/* Replace with actual map component if needed */}
                <div className="w-full h-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-medical-dark-blue" />
                  <span className="ml-2">Mapa da localização</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold mb-6">Formulário de Contato</h3>
            <form action="https://formsubmit.co/leonardooliveiradias1@gmail.com" method="POST">
              {/* Honeypot para evitar spam */}
              <input type="text" name="_honey" style={{ display: 'none' }} />

              {/* Desativar captcha */}
              <input type="hidden" name="_captcha" value="false" />

              {/* Formato de resposta */}
              <input type="hidden" name="_template" value="table" />

              {/* Assunto personalizado */}
              <input type="hidden" name="_subject" value="Nova mensagem do site do Dr. Mattheus Motta" />

              {/* Página de redirecionamento após envio */}
              {redirectUrl && <input type="hidden" name="_next" value={redirectUrl} />}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <Input id="name" name="name" placeholder="Seu nome completo" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <Input id="phone" name="phone" placeholder="(00) 00000-0000" required />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <Input id="subject" name="subject" placeholder="Assunto da mensagem" required />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <Textarea id="message" name="message" placeholder="Sua mensagem" rows={5} required />
              </div>

              <Button type="submit" className="w-full bg-medical-dark-blue hover:bg-blue-700">Enviar Mensagem</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
