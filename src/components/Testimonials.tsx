
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, quote, stars }: { name: string, quote: string, stars: number }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} fill="#3B82F6" color="#3B82F6" size={20} />
        ))}
      </div>
      <p className="text-gray-600 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-medical-dark-blue rounded-full text-white flex items-center justify-center font-semibold mr-3">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">Paciente</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      quote: "Excelente atendimento! A Dra. Ana é muito atenciosa e dedicada. Resolveu meu problema com muita competência.",
      stars: 5
    },
    {
      name: "Mariana Oliveira",
      quote: "Consultório organizado, pontualidade no atendimento e diagnóstico preciso. Recomendo fortemente!",
      stars: 5
    },
    {
      name: "Pedro Santos",
      quote: "Atendimento humanizado e de alta qualidade. A Dra. Ana explica tudo detalhadamente, me senti muito seguro.",
      stars: 5
    }
  ];

  return (
    <section id="depoimentos" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Depoimentos</h2>
          <div className="w-20 h-1 bg-medical-dark-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            O que nossos pacientes dizem sobre nós
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              quote={testimonial.quote}
              stars={testimonial.stars}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
