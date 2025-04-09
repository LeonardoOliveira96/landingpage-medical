
import { Heart, Stethoscope, Users, Clipboard, Activity, Clock } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100 hover:border-medical-dark-blue">
      <div className="bg-medical-light-blue w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
        <Icon className="text-medical-dark-blue w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-center mb-3">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Consultas Médicas",
      description: "Atendimento personalizado para diagnóstico, tratamento e prevenção de doenças."
    },
    {
      icon: Heart,
      title: "Cardiologia",
      description: "Avaliação completa da saúde cardiovascular com equipamentos modernos."
    },
    {
      icon: Users,
      title: "Medicina da Família",
      description: "Cuidados continuados para toda a família, do recém-nascido ao idoso."
    },
    {
      icon: Clipboard,
      title: "Check-up Completo",
      description: "Avaliação abrangente da saúde com exames e orientações preventivas."
    },
    {
      icon: Activity,
      title: "Eletrocardiograma",
      description: "Exame que avalia a atividade elétrica do coração com resultados rápidos."
    },
    {
      icon: Clock,
      title: "Atendimento de Urgência",
      description: "Pronto atendimento para casos urgentes durante o horário de funcionamento."
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-medical-light-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-medical-dark-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços médicos para cuidar da sua saúde com qualidade e atenção
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
