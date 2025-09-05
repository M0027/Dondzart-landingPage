import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ana C. da Silva",
      quote: "Estudar no Donzarte foi uma experiência transformadora! Aulas dinâmicas e professores muito atenciosos. Consegui alcançar a fluência que tanto desejava.",
      city: "Maputo"
    },
    {
      id: 2,
      name: "João M. Santos",
      quote: "O curso online via WhatsApp é super prático e eficaz. Consigo conciliar com o meu trabalho e o suporte do professor é excelente. Recomendo!",
      city: "Boane"
    },
    {
      id: 3,
      name: "Maria F. Lopes",
      quote: "Graças ao Donzarte, sinto-me muito mais confiante para falar inglês em reuniões e viagens. A metodologia de ensino é fantástica.",
      city: "Matola"
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>O Que Nossos Alunos Dizem</h2>
        <p className="section-description">A satisfação dos nossos alunos é a nossa maior recompensa. Veja o que eles têm a dizer sobre a experiência Donzarte.</p>
        <div className="testimonial-list">
          {testimonials.map(testimonial => (
            <div className="testimonial-card" key={testimonial.id}>
              <p className="quote">\" {testimonial.quote} \"</p>
              <p className="author">- {testimonial.name}, {testimonial.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
