import React, { useState } from 'react';
import { Button } from './ui/Button';
import { HiMenu, HiX } from 'react-icons/hi';
import './Header.css';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="#" className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="40" width="25" height="50" fill="#F97316" rx="4"/>
                <rect x="40" y="20" width="25" height="70" fill="#F97316" rx="4"/>
                <rect x="70" y="30" width="25" height="60" fill="#F97316" rx="4"/>
                <path d="M15 50 Q 30 30, 50 40 T 85 45" stroke="#5098EA" strokeWidth="6" fill="none" strokeLinecap="round"/>
                <circle cx="15" cy="50" r="5" fill="#5098EA"/>
                <circle cx="50" cy="40" r="5" fill="#5098EA"/>
                <circle cx="85" cy="45" r="5" fill="#5098EA"/>
              </svg>
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

          <div className="header-cta">
            <Button variant="primary" href="#demo">
              Solicitar Demo
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};