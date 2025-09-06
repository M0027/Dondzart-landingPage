import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

interface FooterProps {
  openModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ openModal }) => {

  const goToMauroInfo = ()=>{
    const portifolio = `https://mauro-assis-cumbane.vercel.app`;
    window.open(portifolio, '_blank');
  }
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-info">
            <h3>Dondzart English Center</h3>
            <p>Seu parceiro para a fluência em inglês em Moçambique.</p>
            <a href="#" onClick={openModal} className="btn-primary">Torne-se Aluno</a>
          </div>
          <div className="footer-stats">
            <div className="stat-item">
              <h4>+500</h4>
              <p>Alunos Satisfeitos</p>
            </div>
            <div className="stat-item">
              <h4>+15</h4>
              <p>Funcionários Qualificados</p>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="footer-contact">
            <h4>Contacto</h4>
            <p>Endereço: BOANE-VILA, AV. DA NAMAACHA, RUA 1 DE MAIO, proximo ao bar das cota.</p>
            <p>Email: dondzart@gmail.com</p>
            <p>Telefone: +258 87181 8012/ 84 831 5615</p>
          </div>
          <div className="footer-social">
            <h4>Siga-nos</h4>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /> Facebook</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /> LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dondzart English Center. Todos os direitos reservados. By <span onClick={goToMauroInfo}> Mauro De Assis</span> </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
