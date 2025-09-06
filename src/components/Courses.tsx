import React from 'react';
import { FaBookOpen, FaLaptop, FaMoneyBillWave, FaUserGraduate } from 'react-icons/fa';

const Courses: React.FC = () => {
  return (
    <section id="courses" className="courses">
      <div className="container">
        <h2>Nossos Cursos de Inglês</h2>
        <p className="section-description">No Centro Dondzart, oferecemos uma variedade de cursos de inglês projetados para o seu sucesso, desde iniciantes até níveis avançados.</p>
        <div className="course-list">
          <div className="course-card">
            <h3><FaBookOpen /> Níveis 1 a 5</h3>
            <p>Nossos cursos presenciais abrangem todos os níveis, do básico ao avançado, com foco em conversação, gramática e escrita.</p>
            <ul>
              <li><FaMoneyBillWave /> Mensalidade: 500 MT</li>
              <li><FaUserGraduate /> Inscrição: 300 MT</li>
            </ul>
          </div>
          <div className="course-card">
            <h3><FaLaptop /> Cursos Online via WhatsApp</h3>
            <p>Aprenda no seu próprio ritmo, de qualquer lugar de Moçambique, com nossos cursos online flexíveis e interativos.</p>
            <ul>
              <li><FaBookOpen /> Material Didático Digital</li>
              <li><FaUserGraduate /> Suporte do Professor</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
