import React from 'react';
import { FiLayers, FiCheckCircle, FiShield, FiClock } from 'react-icons/fi';
import './Stats.css';

const stats = [
  { icon: FiLayers, number: '8', label: 'Servicios Operativos Integrados' },
  { icon: FiCheckCircle, number: '99.95%', label: 'Disponibilidad Garantizada' },
  { icon: FiShield, number: '100%', label: 'Cumplimiento Normativo' },
  { icon: FiClock, number: '24/7', label: 'Soporte Empresarial' }
];

export const Stats: React.FC = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="stat-item">
                <div className="stat-icon">
                  <IconComponent size={36} />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};