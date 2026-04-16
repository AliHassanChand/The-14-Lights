import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const GameVideo: React.FC<{ src: string; poster: string }> = ({ src, poster }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Playback was interrupted by a call to pause() or prevented by the browser
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <video 
      ref={videoRef}
      loop 
      muted 
      playsInline 
      className="w-full h-full object-cover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const games = [
    {
      id: 1,
      title: 'Rogue Strike',
      category: 'action',
      image: 'https://i.ytimg.com/vi/-kyhy0ZcY6g/hq720.jpg',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      rating: '9.2',
      description: 'Tactical shooter meeting high-octane chaos.'
    },
    {
      id: 2,
      title: 'Turbo Drift X',
      category: 'racing',
      image: 'https://play-lh.googleusercontent.com/kXOKPiqo6h-AE2UZfrC4lqrrrvVnOs8STNv2mB2pkxyNo5XiRVk-08InCJIwZ7Jm-Q=w526-h296-rw',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      rating: '8.8',
      description: 'Next-gen physics with arcade fun.'
    },
    {
      id: 3,
      title: 'Echoes of Farland',
      category: 'rpg',
      image: 'https://i.ytimg.com/vi/Qp8lDZm_NqQ/maxresdefault.jpg',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      rating: '9.7',
      description: 'A sprawling open world masterpiece.'
    },
    {
      id: 4,
      title: 'Veil of Mirrors',
      category: 'action',
      image: 'https://i.ytimg.com/vi/BpnAFSeir5U/hq720.jpg',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      rating: '8.5',
      description: 'Mind-bending puzzles in VR.'
    }
  ];

  const filteredGames = activeTab === 'all' ? games : games.filter(g => g.category === activeTab);

  return (
    <section id="top-games" className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6" aria-label="Studio Portfolio">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Our Studio Portfolio</h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base">Award-winning titles developed and published by our team.</p>
        </div>
        
        <div className="flex flex-wrap gap-2 p-1 bg-white/5 rounded-lg border border-white/5 backdrop-blur-sm self-start md:self-auto" role="tablist">
          {['all', 'action', 'racing', 'rpg'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded text-xs font-bold transition-all duration-300 uppercase ${
                activeTab === tab ? 'bg-gold-500 text-black shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
              role="tab"
              aria-selected={activeTab === tab}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredGames.map((game) => (
            <motion.article 
              key={game.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="game-card group relative bg-dark-800 rounded-xl overflow-hidden border border-white/5 hover:border-gold-500/30 transition duration-300"
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-black">
                <img 
                  src={game.image}
                  className="w-full h-full object-cover transition duration-500 group-hover:opacity-0 z-20 relative pointer-events-none" 
                  alt={game.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 z-10 bg-black">
                  <GameVideo src={game.video} poster={game.image} />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80 pointer-events-none z-30" />
                
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur px-2 py-1 rounded text-xs font-bold text-gold-400 border border-gold-500/20 z-30">
                  {game.rating}
                </div>
                
                <div className="absolute top-3 left-3 flex items-center gap-2 z-30 opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider drop-shadow-md">Live Preview</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-5 translate-y-2 group-hover:translate-y-0 transition duration-300 z-30">
                <span className="text-xs text-gold-500 font-bold uppercase tracking-wider mb-1 block">{game.category}</span>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{game.title}</h3>
                <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition duration-300 h-0 group-hover:h-auto mb-3">
                  {game.description}
                </p>
                <button className="w-full py-2 bg-white/10 hover:bg-gold-500 hover:text-black text-white text-xs font-bold rounded uppercase transition">View Details</button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
      
      <div className="mt-12 text-center">
        <button className="inline-block border-b border-gray-600 text-gray-400 hover:text-white hover:border-white pb-1 transition uppercase text-xs font-bold tracking-widest">Load More Games</button>
      </div>
    </section>
  );
};
