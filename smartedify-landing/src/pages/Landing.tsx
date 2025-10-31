import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Services } from '../components/Services';
import { Platform } from '../components/Platform';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

export const Landing: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Platform />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Landing;