import React from 'react';

interface HeroProps {
  openModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ openModal }) => {
  return (
    <section id="hero" className="hero">
        <div className="hero-image">
          <img src='./hero.png' alt="English Class" />
        </div>
      <div className="container">
        <div className="hero-content">
          <h1>Aprenda Inglês com Donzarte: O Seu Caminho para a Fluência!</h1>
          <p>Localizado em Maputo, Boane, o Centro de Cursos de Inglês Donzarte oferece programas abrangentes do Nível 1 ao 5. Prepare-se para um futuro global com nossas aulas dinâmicas e instrutores experientes. Também oferecemos cursos online via WhatsApp para a sua conveniência!</p>
          <button className="btn-primary" onClick={openModal}>Torne-se Aluno</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
