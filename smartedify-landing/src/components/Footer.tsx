import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer diagonal-clip-bottom" id="contact">
      <div className="container">
        <div className="footer-contact">
          <h2>Contáctanos</h2>
          <p className="footer-contact-subtitle">¿Tienes una pregunta? Nos encantaría saber de ti.</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <FiPhone size={24} />
              <span>+1 234 567 890</span>
            </div>
            <div className="contact-method">
              <FiMail size={24} />
              <span>contacto@smartedify.com</span>
            </div>
            <div className="contact-method">
              <FiMapPin size={24} />
              <span>123 App Street, Tech City</span>
            </div>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h4>SmartEdify</h4>
            <p>Plataforma integral de gestión de condominios con tecnología de vanguardia.</p>
          </div>

          <div className="footer-section">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="#about">Nosotros</a></li>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#platform">Plataforma</a></li>
              <li><a href="#demo">Demo</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacidad</a></li>
              <li><a href="#terms">Términos</a></li>
              <li><a href="#security">Seguridad</a></li>
              <li><a href="#compliance">Compliance</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Recibe las últimas noticias, actualizaciones y ofertas especiales.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Tu email" />
              <button type="submit">Suscribirse</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SmartEdify. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};