import React from 'react';
import { motion } from 'framer-motion';

export const Team: React.FC = () => {
  const team = [
    {
      name: 'Hassan Noor Soomro',
      role: 'Founder & System Designer',
      image: 'https://the14lights.com/assets/team/HNS.jpeg'
    },
    {
      name: 'Anum Shakeel',
      role: 'Business Advisor & Marketer',
      image: 'https://the14lights.com/assets/team/anum.jpeg'
    },
    {
      name: 'Dr Danish Nazir',
      role: '3D Artist & Developer',
      image: 'https://the14lights.com/assets/team/Danish.jpeg'
    },
    {
      name: 'Ali',
      role: 'Animator & Rigger',
      image: 'https://the14lights.com/assets/team/Ali%20Animator%20and%20Rigger.jpeg'
    },
    {
      name: 'Ahmed Shahab',
      role: 'UI/UX Game Designer',
      image: 'https://the14lights.com/assets/team/ahmed.jpeg'
    },
    {
      name: 'Muhammad Sheroz',
      role: 'Security Expert',
      image: 'https://the14lights.com/assets/team/sheroz.jpeg'
    }
  ];

  return (
    <section id="team" className="relative min-h-screen flex flex-col items-center justify-center py-20 md:py-32 bg-black overflow-hidden" aria-label="Meet the Team Members">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-black to-black pointer-events-none"></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-18 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-4 rounded-full bg-gold-500/5 border border-gold-500/20 text-xs font-bold text-gold-500 uppercase tracking-[0.2em] mb-5 shadow-[0_0_20px_rgba(212,175,55,0.05)] backdrop-blur-sm"
          >
            The Creators
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 tracking-tight"
          >
            Meet the Team
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 xl:gap-y-14">
          {team.map((member, index) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative w-36 h-36 md:w-40 md:h-40 mb-6">
                <div className="absolute inset-0 rounded-full border border-gold-500/20 group-hover:border-gold-500/80 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-700 animate-[spin_12s_linear_infinite] z-10"></div>
                <div className="absolute inset-1 rounded-full overflow-hidden bg-neutral-900">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-1 transition-colors duration-300 group-hover:text-gold-500">{member.name}</h4>
              <p className="text-xs md:text-sm text-neutral-400 font-medium uppercase tracking-[0.15em]">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 mx-4 md:mx-16 p-8 rounded-[2rem] bg-gradient-to-r from-neutral-950 to-neutral-900 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-5xl"
      >
        <div className="text-center md:text-left">
          <h5 className="text-xl font-bold text-white mb-1 tracking-tight">Ready to start a project?</h5>
          <p className="text-neutral-500 text-sm">Our specialists are currently accepting high-profile collaborations.</p>
        </div>
        <button className="w-full md:w-auto px-10 py-4 bg-gold-500 text-black text-xs font-black uppercase tracking-[0.2em] rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:scale-105 hover:bg-white transition-all duration-300">
          Get In Touch
        </button>
      </motion.div>
    </section>
  );
};
