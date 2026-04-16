import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ChartLine, Video, Play, ArrowRight } from 'lucide-react';

export const EsportsHub: React.FC = () => {
  return (
    <section id="esports-hub" className="py-16 md:py-24 relative overflow-hidden" aria-label="Esports Coverage">
      <div className="absolute top-1/2 left-0 w-64 md:w-96 h-64 md:h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-wider mb-4 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-red-500"></span> Live Action
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">The <span className="text-blue-500">Esports</span> Frontier</h2>
            <p className="text-gray-400 mb-8 text-base md:text-lg">
              Real-time coverage of major leagues. From <strong className="text-white">Valorant</strong> Champions to <strong className="text-white">League of Legends</strong> Worlds, never miss a clutch moment.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <Trophy className="text-gold-500" size={20} /> Tournament Brackets
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <ChartLine className="text-gold-500" size={20} /> Player Statistics
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Video className="text-gold-500" size={20} /> VODs & Highlights
              </li>
            </ul>

            <a href="#" className="inline-flex items-center gap-2 text-white font-bold border-b border-gold-500 pb-1 hover:text-gold-500 transition">
              View Match Schedule <ArrowRight size={14} />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3 w-full"
          >
            <div className="relative rounded-2xl overflow-hidden neon-box shadow-2xl group">
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                <span className="bg-red-600 text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded uppercase">Live</span>
                <span className="bg-black/60 backdrop-blur text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded border border-white/10">Finals</span>
              </div>
              
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="https://i.ytimg.com/vi/Hn-vXw0rV04/maxresdefault.jpg"
                  alt="Apex Legends Global Series Live Match"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-xl md:text-3xl font-display font-bold text-white mb-2">Apex Legends Global Series</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-xs md:text-sm text-gray-300">
                      <span className="flex items-center gap-2"><Trophy className="text-gold-500" size={14} /> TSM vs. DarkZero</span>
                      <span className="flex items-center gap-2"><ChartLine className="text-green-500" size={14} /> $2,000,000 Pool</span>
                    </div>
                  </div>
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white border border-white/20 hover:bg-gold-500 hover:text-black hover:border-gold-500 transition" aria-label="Watch Live Stream">
                    <Play size={20} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
