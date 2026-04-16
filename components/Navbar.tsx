import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Globe, Headset, Twitter, Youtube, Twitch } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Esports', href: '#esports-hub' },
    { name: 'Portfolio', href: '#top-games' },
    { name: 'News', href: '#latest' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden sm:block bg-black/40 border-b border-white/5 backdrop-blur-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between text-[10px] md:text-xs font-medium tracking-wide text-gray-400">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 hover:text-gold-400 transition" aria-label="Customer Support">
              <Headset size={14} className="text-gold-500" /> Support
            </button>
            <button className="flex items-center gap-2 hover:text-gold-400 transition" aria-label="Select Language">
              <Globe size={14} className="text-gold-500" /> EN/US
            </button>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition" aria-label="Join our Discord"><i className="fab fa-discord"></i></a>
            <a href="#" className="hover:text-white transition" aria-label="Follow us on Twitter"><Twitter size={14} /></a>
            <a href="#" className="hover:text-white transition" aria-label="Subscribe on YouTube"><Youtube size={14} /></a>
            <a href="#" className="hover:text-white transition" aria-label="Watch on Twitch"><Twitch size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          isScrolled ? 'bg-dark-950/90 shadow-lg' : 'nav-glass'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="group flex items-center gap-3" aria-label="The 14 Lights Home">
            <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded bg-gradient-to-br from-gold-500 to-gold-900 shadow-lg group-hover:shadow-gold-500/30 transition duration-300">
              <div className="absolute inset-0 border border-white/20 rounded"></div>
              <span className="text-white font-display font-bold text-sm md:text-lg">14</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-display font-bold text-white tracking-wider leading-none group-hover:text-gold-400 transition">
                THE 14 <span className="text-gold-500">LIGHTS</span>
              </span>
              <span className="text-[0.5rem] md:text-[0.6rem] uppercase tracking-[0.2em] text-gray-500 group-hover:text-gray-300 transition">Studios</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="hidden md:inline-flex items-center justify-center px-6 py-2 text-sm font-bold text-gold-400 border border-gold-500/30 rounded hover:bg-gold-500 hover:text-black transition duration-300"
            >
              Get Started
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-2xl text-gray-300 hover:text-gold-500 transition focus:outline-none p-2"
              aria-label={isMobileMenuOpen ? "Close Mobile Menu" : "Open Mobile Menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-dark-950/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-gold-400 font-medium py-2 border-b border-white/5"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gold-500 font-bold mt-2 flex items-center gap-2"
                >
                  Get Started <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
