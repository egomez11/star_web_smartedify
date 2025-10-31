import React from 'react';
import './Platform.css';

const features = [
  {
    icon: '🔐',
    title: 'Autenticación Fuerte',
    description: 'WebAuthn/Passkeys (AAL3) con MFA adaptativo y DPoP'
  },
  {
    icon: '🌍',
    title: 'Multi-región Activo-Activo',
    description: 'Despliegue global con residencia de datos por jurisdicción'
  },
  {
    icon: '🏢',
    title: 'Multi-tenant Seguro',
    description: 'RLS a nivel de BD con aislamiento completo por tenant'
  },
  {
    icon: '⚡',
    title: 'Alto Rendimiento',
    description: '2K RPS por región con P95 ≤ 200ms'
  }
];

const badges = [
  { title: 'OAuth 2.1 + OIDC', subtitle: 'Estándares industriales' },
  { title: 'NIST SP 800-63-4', subtitle: 'Certificación de seguridad' },
  { title: 'GDPR/LGPD Compliant', subtitle: 'Privacidad garantizada' },
  { title: 'Zero Trust', subtitle: 'Arquitectura segura' }
];

export const Platform: React.FC = () => {
  return (
    <section id="platform" className="platform">
      <div className="container">
        <div className="platform-content">
          <div className="platform-text">
            <h2>Arquitectura Empresarial de Clase Mundial</h2>
            <p>
              Construida sobre estándares de seguridad NIST SP 800-63-4, con autenticación AAL3 
              y arquitectura Zero Trust para máxima protección.
            </p>

            <ul className="platform-features">
              {features.map((feature, index) => (
                <li key={index}>
                  <div className="feature-icon-small">{feature.icon}</div>
                  <div>
                    <strong>{feature.title}</strong>
                    <br />
                    <span style={{ color: '#666', fontSize: '0.95rem' }}>
                      {feature.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="platform-visual">
            {badges.map((badge, index) => (
              <div key={index} className="platform-badge">
                <div className="badge-title">{badge.title}</div>
                <div className="badge-subtitle">{badge.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};