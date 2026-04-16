import React from 'react';
import { motion } from 'framer-motion';

export const Showcase: React.FC = () => {
  return (
    <section id="studio-showcase" className="relative min-h-screen bg-black py-20 md:py-32 overflow-hidden selection:bg-gold-500/30">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block py-1 px-3 rounded bg-gold-500/10 border border-gold-500/20 text-[10px] font-black uppercase tracking-[0.3em] text-gold-500 mb-4"
              >
                Digital Frontiers
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight"
              >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Masterpieces</span>
              </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-neutral-500 text-sm md:text-base max-w-xs md:text-right font-medium leading-relaxed"
            >
              Pushing the boundaries of immersive technology and narrative-driven gameplay.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-8 group relative aspect-video md:aspect-auto md:h-[550px] overflow-hidden rounded-[2rem] border border-white/5 transition-all duration-700 hover:border-gold-500/40"
            >
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200" 
                alt="Main Game" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
              <div className="absolute bottom-0 p-8 md:p-12 z-20 w-full">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-gold-500 text-black text-[10px] font-black uppercase tracking-tighter">Live Now</span>
                  <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">The 14 Lights Original</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Neon Frontier</h3>
                <p className="text-neutral-300 max-w-md mb-8 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500">A hyper-detailed cyberpunk experience architected for the next generation of gamers.</p>
                <button className="px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all">Launch Experience</button>
              </div>
            </motion.div>

            <div className="md:col-span-4 flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 group relative overflow-hidden rounded-[2rem] border border-white/5 transition-all duration-500 hover:border-gold-500/40"
              >
                <img 
                  src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h4 className="text-xl font-bold text-white">Shadow Tactics</h4>
                  <p className="text-gold-500 text-[10px] uppercase font-bold tracking-widest">Stealth Strategy</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex-1 group relative overflow-hidden rounded-[2rem] border border-white/5 transition-all duration-500 hover:border-gold-500/40"
              >
                <img 
                  src="https://images.unsplash.com/photo-1552824730-147b28e163c2?q=80&w=800" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h4 className="text-xl font-bold text-white">Celestial Rise</h4>
                  <p className="text-gold-500 text-[10px] uppercase font-bold tracking-widest">Atmospheric Adventure</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
