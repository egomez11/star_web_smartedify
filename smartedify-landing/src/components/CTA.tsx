import React from 'react';
import { Button } from './ui/Button';
import { FiSmartphone, FiMonitor } from 'react-icons/fi';
import './CTA.css';

export const CTA: React.FC = () => {
  return (
    <section id="demo" className="cta-section diagonal-clip-both">
      <div className="container">
        <div className="cta-content">
          <h2>Descarga Nuestra Aplicación</h2>
          <p className="cta-subtitle">
            Obtén nuestra aplicación para tu plataforma favorita y comienza tu viaje con nosotros hoy.
          </p>
          
          <div className="download-buttons">
            <a href="#" className="download-btn">
              <FiSmartphone size={32} />
              <div className="download-info">
                <p className="download-label">Disponible en</p>
                <p className="download-platform">App Store</p>
              </div>
            </a>
            
            <a href="#" className="download-btn">
              <FiSmartphone size={32} />
              <div className="download-info">
                <p className="download-label">Consíguelo en</p>
                <p className="download-platform">Google Play</p>
              </div>
            </a>
            
            <a href="#" className="download-btn">
              <FiMonitor size={32} />
              <div className="download-info">
                <p className="download-label">Descarga para</p>
                <p className="download-platform">Windows</p>
              </div>
            </a>
          </div>

          <div className="cta-demo">
            <Button variant="secondary" href="#contact">
              Solicitar Demo Personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};