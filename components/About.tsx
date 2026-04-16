import React from 'react';
import { motion } from 'framer-motion';
import { Check, Bolt } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden" aria-label="About Us">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group order-2 lg:order-1"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-blue-600 rounded-2xl opacity-20 blur transition duration-500 group-hover:opacity-40"></div>
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl border border-white/10">
              <img 
                src="https://www.appinio.com/hubfs/Blog/UK%20blog%20visuals/Hype%20Train%202023/03.%20Gaming%20and%20Esports/pexels-alena-darmel-7862517.jpg"
                alt="Professional esports team celebrating a championship victory"
                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-2 block">Who We Are</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 md:mb-6">
              Redefining <span className="text-gradient-gold">Gaming Culture</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              The 14 Lights isn't just a studio; it's a curated digital sanctuary. We bridge the gap between casual play and professional esports, offering unbiased journalism, high-fidelity media, and community-driven discovery tools.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center border border-gold-500/20 shrink-0">
                  <Check className="text-gold-500" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Editorial Integrity</h3>
                  <p className="text-sm text-gray-500">Unbiased reviews from industry veterans.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shrink-0">
                  <Bolt className="text-blue-500" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Real-Time Esports</h3>
                  <p className="text-sm text-gray-500">Live stats, brackets, and tournament coverage.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
