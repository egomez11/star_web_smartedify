import React from 'react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { FiTrendingUp, FiCalendar, FiUsers, FiFileText } from 'react-icons/fi';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero diagonal-clip-top">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Una Plataforma <span className="highlight">Moderna</span> para la Gestión de Condominios
          </h1>
          <p className="hero-description">
            Descubre una experiencia perfecta con nuestra aplicación llena de funcionalidades. 
            Diseñada para simplificar la vida de tu condominio y aumentar la productividad.
          </p>
          <div className="hero-buttons">
            <Button variant="primary" href="#demo">
              Comenzar Ahora
            </Button>
            <Button variant="secondary" href="#services">
              Conocer Más
            </Button>
          </div>
        </div>

        <div className="hero-visual">
          <Card className="service-card card-1" floating delay={0}>
            <div className="service-icon gradient-finance">
              <FiTrendingUp size={28} />
            </div>
            <div className="service-title">Finance Service</div>
            <div className="service-subtitle">Gestión financiera completa</div>
          </Card>

          <Card className="service-card card-2" floating delay={1.5}>
            <div className="service-icon gradient-calendar">
              <FiCalendar size={28} />
            </div>
            <div className="service-title">Reservations</div>
            <div className="service-subtitle">Áreas comunes automatizadas</div>
          </Card>

          <Card className="service-card card-3" floating delay={3}>
            <div className="service-icon gradient-users">
              <FiUsers size={28} />
            </div>
            <div className="service-title">HR Compliance</div>
            <div className="service-subtitle">Recursos humanos integrado</div>
          </Card>

          <Card className="service-card card-4" floating delay={4.5}>
            <div className="service-icon gradient-docs">
              <FiFileText size={28} />
            </div>
            <div className="service-title">Documents</div>
            <div className="service-subtitle">Gestión documental digital</div>
          </Card>
        </div>
      </div>
    </section>
  );
};