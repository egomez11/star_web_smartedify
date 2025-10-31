import React from 'react';
import { FiAward, FiSettings, FiHeadphones } from 'react-icons/fi';
import './About.css';

export const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">Sobre Nuestra Plataforma</h2>
          <p className="section-subtitle">
            Estamos dedicados a crear la mejor experiencia de gestión. Nuestra aplicación está 
            construida con tecnología de vanguardia y un enfoque centrado en el usuario.
          </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
              alt="Dashboard de SmartEdify" 
              className="dashboard-img"
            />
          </div>

          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon icon-blue">
                <FiAward size={32} />
              </div>
              <div className="feature-content">
                <h3>Mejor Aplicación de Gestión</h3>
                <p>
                  Nuestra app combina un diseño hermoso con funcionalidad poderosa para 
                  proporcionar una experiencia de usuario sin precedentes.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon icon-orange">
                <FiSettings size={32} />
              </div>
              <div className="feature-content">
                <h3>Fácil de Personalizar</h3>
                <p>
                  Personaliza la aplicación para que se ajuste a tu flujo de trabajo. 
                  Con configuraciones flexibles, puedes hacerla verdaderamente tuya.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon icon-green">
                <FiHeadphones size={32} />
              </div>
              <div className="feature-content">
                <h3>Soporte 24/7</h3>
                <p>
                  Nuestro equipo de soporte dedicado siempre está listo para ayudarte con 
                  cualquier pregunta o problema que puedas encontrar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
