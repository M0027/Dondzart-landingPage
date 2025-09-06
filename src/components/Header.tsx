import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        {/* <div className="logo">Donzarte</div> */}
        <img src='./logo.jpg' className='logo' />
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
            <li><a href="#courses" onClick={toggleMenu}>Cursos</a></li>
            <li><a href="#about-us" onClick={toggleMenu}>Sobre</a></li>
            <li><a href="#testimonials" onClick={toggleMenu}>Depoimentos</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
