import React from 'react';
import { 
  FiShield, FiCheckCircle, FiCalendar, FiPackage, 
  FiTrendingUp, FiDollarSign, FiUsers, FiFileText 
} from 'react-icons/fi';
import './Services.css';

const services = [
  {
    icon: FiShield,
    title: 'Governanza',
    description: 'Motor de asambleas y democratizacion de la participacion independientemente de en que parte del mundo te encuentras.',
    features: [
      'Asambleas virtuales legalmente validas',
      'Votacion en tiempo real',
      'Moderador integrado con IA',
      'Emision de actas'
    ]
  },
  {
    icon: FiCheckCircle,
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
    icon: FiCalendar,
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
    icon: FiPackage,
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
    icon: FiTrendingUp,
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
    icon: FiDollarSign,
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
    icon: FiUsers,
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
    icon: FiFileText,
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
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="service-item">
                <div className="service-item-icon">
                  <IconComponent size={32} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
