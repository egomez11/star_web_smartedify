import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Stats } from '../components/Stats';
import { Platform } from '../components/Platform';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

export const Landing: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <Platform />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Landing;