import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface HeroProps {
  openModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ openModal }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
      <div className="hero-image">
          {!imageLoaded && <LoadingSpinner />}
          <img 
            src="./hero.png" 
            alt="English Class" 
            onLoad={handleImageLoad}
            style={{ display: imageLoaded ? 'block' : 'none' }}
          />
        </div>
        <div className="hero-content">
          <h1>Aprenda Inglês com Dondzart: O Seu Caminho para a Fluência!</h1>
          <p>Localizado em Maputo, Boane, o Centro de Cursos de Inglês Dondzart oferece programas abrangentes do Nível 1 ao 5. Prepare-se para um futuro global com nossas aulas dinâmicas e instrutores experientes. Também oferecemos cursos online via WhatsApp para a sua conveniência!</p>
          <button className="btn-primary" onClick={openModal}>Torne-se Aluno</button>
        </div>
       
      </div>
    </section>
  );
};

export default Hero;
