import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>SmartEdify</h4>
            <p>Plataforma integral de gestión de condominios</p>
          </div>

          <div className="footer-section">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#platform">Plataforma</a></li>
              <li><a href="#pricing">Precios</a></li>
              <li><a href="#demo">Demo</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacidad</a></li>
              <li><a href="#terms">Términos</a></li>
              <li><a href="#security">Seguridad</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <ul>
              <li><a href="mailto:info@smartedify.com">info@smartedify.com</a></li>
              <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SmartEdify. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};