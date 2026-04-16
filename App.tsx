import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { EsportsHub } from './components/EsportsHub';
import { Portfolio } from './components/Portfolio';
import { News } from './components/News';
import { Team } from './components/Team';
import { Showcase } from './components/Showcase';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { BackgroundLights } from './components/BackgroundLights';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-dark-950 text-white selection:bg-gold-500/30 font-sans">
      {/* Background Visuals */}
      <BackgroundLights />
      
      {/* Noise Overlay for texture */}
      <div 
        className="pointer-events-none fixed inset-0 opacity-[0.03] z-10" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        aria-hidden="true"
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-20 flex-grow">
        <Hero />
        <About />
        <Services />
        <EsportsHub />
        <Portfolio />
        <News />
        <Team />
        <Showcase />
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Vignette */}
      <div className="pointer-events-none fixed inset-0 z-30 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" aria-hidden="true" />
    </div>
  );
};

export default App;