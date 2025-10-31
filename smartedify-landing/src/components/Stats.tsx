import React from 'react';
import './Stats.css';

const stats = [
  { number: '8', label: 'Servicios Operativos Integrados' },
  { number: '99.95%', label: 'Disponibilidad Garantizada' },
  { number: '100%', label: 'Cumplimiento Normativo' },
  { number: '24/7', label: 'Soporte Empresarial' }
];

export const Stats: React.FC = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};