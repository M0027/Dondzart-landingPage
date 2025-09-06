import React, { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import LoadingSpinner from './LoadingSpinner';

const AboutUs: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section id="about-us" className="about-us">
      <div className="container">
        <div className="about-content">
          <h2>Sobre o Centro Dondzart</h2>
          <p>Bem-vindo ao Dondzart, o seu parceiro dedicado na jornada para a fluência em inglês em Maputo, Boane. Com uma paixão por educação e um compromisso com a excelência, capacitamos os nossos alunos a comunicar com confiança e a alcançar os seus objetivos pessoais e profissionais.</p>
          <p>Acreditamos que aprender uma nova língua abre portas para novas oportunidades e culturas. Os nossos instrutores qualificados e a nossa metodologia de ensino interativa garantem que cada aluno receba atenção personalizada e o suporte necessário para ter sucesso.</p>
          <h3><FaGlobe /> Nossa Missão</h3>
          <p>Fornecer ensino de inglês de alta qualidade, acessível e eficaz, capacitando os indivíduos a se destacarem em um mundo globalizado.</p>
        </div>
        <div className="about-image">
          {!imageLoaded && <LoadingSpinner />}
          <img 
            src="./hero.png" 
            alt="About Us" 
            onLoad={handleImageLoad}
            style={{ display: imageLoaded ? 'block' : 'none' }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
