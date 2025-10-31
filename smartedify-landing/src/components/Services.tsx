import React from 'react';
import './Services.css';

const services = [
  {
    icon: '⚖️',
    title: 'Governance Service',
    description: 'Motor de políticas y reglas de negocio para decisiones automatizadas y gobernanza corporativa.',
    features: [
      'Políticas centralizadas (OPA/Cedar)',
      'Workflows automatizados',
      'Auditoría de decisiones',
      'Evaluación en tiempo real'
    ]
  },
  {
    icon: '🛡️',
    title: 'Compliance Service',
    description: 'Cumplimiento normativo GDPR/LGPD con DSAR automatizado y residencia de datos por jurisdicción.',
    features: [
      'DSAR orquestado (< 7 días)',
      'Privacidad by design',
      'Auditoría inmutable WORM',
      'Multi-región compliance'
    ]
  },
  {
    icon: '📅',
    title: 'Reservations Service',
    description: 'Gestión inteligente de áreas comunes con disponibilidad en tiempo real y QR para acceso.',
    features: [
      'Calendario multi-área',
      'Tokens contextuales QR',
      'Conflictos automatizados',
      'Notificaciones push'
    ]
  },
  {
    icon: '🏗️',
    title: 'Asset Management',
    description: 'Control total de activos, mantenimiento preventivo y trazabilidad de equipamiento.',
    features: [
      'Inventario digitalizado',
      'Mantenimiento programado',
      'Historial de reparaciones',
      'Depreciación automática'
    ]
  },
  {
    icon: '💰',
    title: 'Finance Service',
    description: 'Contabilidad completa, facturación automática y reportes financieros en tiempo real.',
    features: [
      'Cuentas por cobrar/pagar',
      'Conciliación bancaria',
      'Reportes financieros',
      'Presupuestos vs real'
    ]
  },
  {
    icon: '💵',
    title: 'Payroll Service',
    description: 'Nómina automatizada con cálculo de impuestos, prestaciones y dispersión bancaria.',
    features: [
      'Cálculo automático nómina',
      'Timbrado fiscal (CFDI)',
      'Dispersión SPEI',
      'Incidencias y vacaciones'
    ]
  },
  {
    icon: '👥',
    title: 'HR Compliance',
    description: 'Recursos humanos con cumplimiento laboral, expedientes digitales y evaluaciones.',
    features: [
      'Expedientes digitales',
      'Contratos y addendas',
      'Evaluaciones desempeño',
      'Compliance laboral'
    ]
  },
  {
    icon: '📄',
    title: 'Documents Service',
    description: 'Gestión documental con firma electrónica, versionado y almacenamiento seguro WORM.',
    features: [
      'Firma electrónica avanzada',
      'Versionado automático',
      'Búsqueda full-text',
      'Retención legal'
    ]
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Servicios Operativos Completos</h2>
          <p>
            Todo lo que necesitas para gestionar tu condominio de manera profesional, 
            desde operaciones diarias hasta cumplimiento normativo avanzado.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-item-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};