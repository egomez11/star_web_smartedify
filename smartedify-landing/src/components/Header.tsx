import React from 'react';
import { Button } from './ui/Button';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="#" className="logo">
            <div className="logo-icon">🏢</div>
            <span className="logo-text">SmartEdify</span>
          </a>

          <ul className="nav-links">
            <li><a href="#services">Servicios</a></li>
            <li><a href="#platform">Plataforma</a></li>
            <li><a href="#pricing">Precios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>

          <Button variant="primary" href="#demo">
            Solicitar Demo
          </Button>
        </nav>
      </div>
    </header>
  );
};