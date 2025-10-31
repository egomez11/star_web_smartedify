import React from 'react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Plataforma <span className="highlight">Todo-en-Uno</span> para la Gestión de Condominios
          </h1>
          <p>
            Desde finanzas y nómina hasta reservaciones y documentos. Una solución integral que unifica 
            todos los procesos operativos de tu condominio en una sola plataforma segura y escalable.
          </p>
          <div className="hero-buttons">
            <Button variant="primary" href="#demo">
              Comenzar Ahora
            </Button>
            <Button variant="secondary" href="#services">
              Ver Demo en Vivo
            </Button>
          </div>
        </div>

        <div className="hero-visual">
          <Card className="service-card card-1" floating delay={0}>
            <div className="service-icon">💰</div>
            <div className="service-title">Finance Service</div>
            <div className="service-subtitle">Gestión financiera completa</div>
          </Card>

          <Card className="service-card card-2" floating delay={1.5}>
            <div className="service-icon">📅</div>
            <div className="service-title">Reservations</div>
            <div className="service-subtitle">Áreas comunes automatizadas</div>
          </Card>

          <Card className="service-card card-3" floating delay={3}>
            <div className="service-icon">👥</div>
            <div className="service-title">HR Compliance</div>
            <div className="service-subtitle">Recursos humanos integrado</div>
          </Card>

          <Card className="service-card card-4" floating delay={4.5}>
            <div className="service-icon">📄</div>
            <div className="service-title">Documents</div>
            <div className="service-subtitle">Gestión documental digital</div>
          </Card>
        </div>
      </div>
    </section>
  );
};