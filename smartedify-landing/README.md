# SmartEdify Landing Page

Landing page moderna para la plataforma SmartEdify de gestión de condominios.

## 🚀 Tecnologías

- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **CSS Modules** - Estilos con scope

## 📦 Instalación

```bash
cd smartedify-landing
npm install
```

## 🛠️ Desarrollo

```bash
npm run dev
```

### Step 2: Install Required Libraries

You might want to install some libraries for styling and animations. For this example, we will use `styled-components` for styling and `react-icons` for icons.

```bash
npm install styled-components react-icons
```

### Step 3: Create the Landing Page Components

Create a folder structure like this:

```
src/
  components/
    Navbar.js
    Hero.js
    Stats.js
    Services.js
    Platform.js
    Cta.js
    Footer.js
  App.js
  index.js
```

### Step 4: Implement the Components

Here’s how you can implement each component based on the provided design.

#### 1. Navbar.js

```jsx
import React from 'react';
import styled from 'styled-components';
import { FaBuilding } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(30, 63, 167, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: 800;
  color: white;
  display: flex;
  align-items: center;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  &:hover::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #F97316;
  }
`;

const CtaButton = styled.a`
  padding: 0.8rem 2rem;
  background: #F97316;
  color: white;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s;
  &:hover {
    background: #ea6a0a;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo href="#">
        <FaBuilding style={{ marginRight: '0.5rem' }} />
        SmartEdify
      </Logo>
      <NavLinks>
        <li><NavLink href="#services">Servicios</NavLink></li>
        <li><NavLink href="#platform">Plataforma</NavLink></li>
        <li><NavLink href="#pricing">Precios</NavLink></li>
        <li><NavLink href="#contact">Contacto</NavLink></li>
      </NavLinks>
      <CtaButton href="#demo">Solicitar Demo</CtaButton>
    </Nav>
  );
};

export default Navbar;
```

#### 2. Hero.js

```jsx
import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1E3FA7 0%, #1a3589 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 5%;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
`;

const HeroText = styled.div`
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  &.primary {
    background: #F97316;
    color: white;
    &:hover {
      background: #ea6a0a;
    }
  }
  &.secondary {
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.5);
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroText>
          <h1>Plataforma <span style={{ background: 'linear-gradient(135deg, #F97316 0%, #ea6a0a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Todo-en-Uno</span> para la Gestión de Condominios</h1>
          <p>Desde finanzas y nómina hasta reservaciones y documentos. Una solución integral que unifica todos los procesos operativos de tu condominio en una sola plataforma segura y escalable.</p>
          <HeroButtons>
            <Button className="primary">Comenzar Ahora</Button>
            <Button className="secondary">Ver Demo en Vivo</Button>
          </HeroButtons>
        </HeroText>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
```

#### 3. Stats.js

```jsx
import React from 'react';
import styled from 'styled-components';

const StatsSection = styled.section`
  padding: 4rem 5%;
  background: #F97316;
  color: white;
`;

const StatsGrid = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  text-align: center;
`;

const StatItem = styled.div`
  .stat-number {
    font-size: 3.5rem;
    font-weight: 800;
  }
  .stat-label {
    font-size: 1.1rem;
    opacity: 0.9;
  }
`;

const Stats = () => {
  return (
    <StatsSection>
      <StatsGrid>
        <StatItem>
          <div className="stat-number">8</div>
          <div className="stat-label">Servicios Operativos Integrados</div>
        </StatItem>
        <StatItem>
          <div className="stat-number">99.95%</div>
          <div className="stat-label">Disponibilidad Garantizada</div>
        </StatItem>
        <StatItem>
          <div className="stat-number">100%</div>
          <div className="stat-label">Cumplimiento Normativo</div>
        </StatItem>
        <StatItem>
          <div className="stat-number">24/7</div>
          <div className="stat-label">Soporte Empresarial</div>
        </StatItem>
      </StatsGrid>
    </StatsSection>
  );
};

export default Stats;
```

#### 4. Services.js

```jsx
import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 6rem 5%;
  background: #E3ECF3;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  h2 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    color: #1a1a1a;
  }
  p {
    font-size: 1.2rem;
    color: #666;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: auto;
`;

const ServiceItem = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  transition: all 0.3s;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: #F97316;
  }
`;

const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  background: #F97316;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Services = () => {
  return (
    <ServicesSection id="services">
      <SectionHeader>
        <h2>Servicios Operativos Completos</h2>
        <p>Todo lo que necesitas para gestionar tu condominio de manera profesional, desde operaciones diarias hasta cumplimiento normativo avanzado.</p>
      </SectionHeader>
      <ServicesGrid>
        {/* Repeat this ServiceItem for each service */}
        <ServiceItem>
          <ServiceIcon>⚖️</ServiceIcon>
          <h3>Governance Service</h3>
          <p>Motor de políticas y reglas de negocio para decisiones automatizadas y gobernanza corporativa.</p>
          <ul>
            <li>Políticas centralizadas (OPA/Cedar)</li>
            <li>Workflows automatizados</li>
            <li>Auditoría de decisiones</li>
            <li>Evaluación en tiempo real</li>
          </ul>
        </ServiceItem>
        {/* Add more ServiceItems here */}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default Services;
```

#### 5. Platform.js

```jsx
import React from 'react';
import styled from 'styled-components';

const PlatformSection = styled.section`
  padding: 6rem 5%;
  background: white;
`;

const PlatformContent = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
`;

const PlatformText = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 800;
  }
  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: #666;
  }
`;

const PlatformFeatures = styled.ul`
  list-style: none;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  border-bottom: 1px solid #e0e0e0;
  padding: 1rem 0;
`;

const FeatureIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #F97316;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`;

const Platform = () => {
  return (
    <PlatformSection id="platform">
      <PlatformContent>
        <PlatformText>
          <h2>Arquitectura Empresarial de Clase Mundial</h2>
          <p>Construida sobre estándares de seguridad NIST SP 800-63-4, con autenticación AAL3 y arquitectura Zero Trust para máxima protección.</p>
          <PlatformFeatures>
            <FeatureItem>
              <FeatureIcon>🔐</FeatureIcon>
              <div>
                <strong>Autenticación Fuerte</strong><br />
                <span style={{ color: '#666', fontSize: '0.95rem' }}>WebAuthn/Passkeys (AAL3) con MFA adaptativo y DPoP</span>
              </div>
            </FeatureItem>
            {/* Add more FeatureItems here */}
          </PlatformFeatures>
        </PlatformText>
        {/* Add visual representation here */}
      </PlatformContent>
    </PlatformSection>
  );
};

export default Platform;
```

#### 6. Cta.js

```jsx
import React from 'react';
import styled from 'styled-components';

const CtaSection = styled.section`
  padding: 6rem 5%;
  background: #1E3FA7;
  text-align: center;
  color: white;
`;

const CtaText = styled.div`
  h2 {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
    font-weight: 800;
  }
  p {
    font-size: 1.3rem;
    margin-bottom: 2.5rem;
    opacity: 0.9;
  }
`;

const Cta = () => {
  return (
    <CtaSection>
      <CtaText>
        <h2>¡Únete a SmartEdify!</h2>
        <p>Transforma la gestión de tu condominio con nuestra plataforma integral.</p>
        <a href="#demo" style={{ padding: '1rem 2.5rem', background: '#F97316', color: 'white', borderRadius: '50px', textDecoration: 'none' }}>Solicitar Demo</a>
      </CtaText>
    </CtaSection>
  );
};

export default Cta;
```

#### 7. Footer.js

```jsx
import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  padding: 3rem 5%;
  background: #1E3FA7;
  color: white;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const FooterHeader = styled.h4`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #F97316;
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContent>
        <div>
          <FooterHeader>Sobre Nosotros</FooterHeader>
          <ul>
            <li><a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Nuestra Historia</a></li>
            <li><a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Misión y Visión</a></li>
          </ul>
        </div>
        {/* Add more footer sections here */}
      </FooterContent>
      <div style={{ textAlign: 'center', paddingTop: '2rem', color: 'rgba(255, 255, 255, 0.6)' }}>
        © 2023 SmartEdify. Todos los derechos reservados.
      </div>
    </FooterSection>
  );
};

export default Footer;
```

### Step 5: Combine Components in App.js

Now, you can combine all these components in your `App.js`.

```jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Platform from './components/Platform';
import Cta from './components/Cta';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Platform />
      <Cta />
      <Footer />
    </>
  );
};

export default App;
```

### Step 6: Run Your Application

Now you can run your application using:

```bash
npm start
```

### Conclusion

This is a basic implementation of a landing page using React based on the provided design. You can further enhance it by adding animations, improving accessibility, and optimizing for performance. Additionally, consider using a CSS-in-JS library like `styled-components` for better styling management and theming capabilities.