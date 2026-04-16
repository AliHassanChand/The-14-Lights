import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Alex Morgan',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      text: "The depth of analysis on The 14 Lights is unmatched. It's the only place I trust for competitive frame data reviews."
    },
    {
      name: 'Sophia Lee',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      text: "Clean UI, no invasive ads, and the esports tracker is faster than the official sites. Absolutely love it."
    },
    {
      name: 'Daniel Cruz',
      image: 'https://randomuser.me/api/portraits/men/76.jpg',
      rating: 4.5,
      text: "Discovered three of my favorite indie games this year through their curated 'Hidden Gems' monthly list."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-dark-900/30 relative" aria-label="Testimonials">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Community Voices</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 md:p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 text-white/5" size={48} />
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <img 
                  src={t.image} 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20" 
                  alt={t.name} 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <div className="flex text-gold-500 text-xs" aria-label={`${t.rating} stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        size={12} 
                        fill={i < Math.floor(t.rating) ? "currentColor" : "none"} 
                        className={i < Math.floor(t.rating) ? "" : "text-gray-600"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
