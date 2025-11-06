import React, { useState } from 'react';
import { Button } from './ui/Button';
import { HiMenu, HiX } from 'react-icons/hi';
import { images } from '../config/assets';
import { GobernanzaIcon } from './ui/GobernanzaIcon';
import './Header.css';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="#" className="logo">
            <div className="logo-icon">
              <img 
                src={images.logo.main}
                alt={images.logo.alt}
                className="logo-image"
              />
            </div>
            <span className="logo-text">SmartEdify</span>
          </a>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Nosotros</a></li>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Servicios</a></li>
            <li><a href="#platform" onClick={() => setIsMenuOpen(false)}>Plataforma</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
          </ul>
            <Button variant="primary" href="#demo">
              Solicitar Demo
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
