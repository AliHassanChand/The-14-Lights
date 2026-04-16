import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Film, Users, ShoppingBag } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: PenTool,
      title: 'Pro Reviews',
      description: 'Deep dive analysis into mechanics, story, and performance.',
      color: 'gold'
    },
    {
      icon: Film,
      title: '4K Media',
      description: 'Lossless trailers and high-bitrate gameplay footage.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'LFG tools, forums, and developer AMAs.',
      color: 'purple'
    },
    {
      icon: ShoppingBag,
      title: 'Marketplace',
      description: 'Curated deals on hardware and digital keys.',
      color: 'green'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-dark-900/30 relative" aria-label="Our Services">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
          >
            Our Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400"
          >
            Everything you need to elevate your gaming experience.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.article 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 md:p-8 rounded-xl card-3d group text-center"
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-${service.color}-900 to-transparent rounded-2xl flex items-center justify-center border border-${service.color}-500/20 mb-6 group-hover:border-${service.color}-500/50 transition`}>
                <service.icon className={`text-xl md:text-2xl text-${service.color}-400`} size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
