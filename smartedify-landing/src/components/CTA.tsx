import React from 'react';
import { Button } from './ui/Button';
import './CTA.css';

export const CTA: React.FC = () => {
  return (
    <section id="demo" className="cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>¿Listo para transformar la gestión de tu condominio?</h2>
            <p>
              Agenda una demo personalizada y prueba SmartEdify sin compromiso.
            </p>
          </div>
          <div className="cta-action">
            <Button variant="primary" href="#demo">
              Solicitar Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};