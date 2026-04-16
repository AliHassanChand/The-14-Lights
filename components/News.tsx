import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag, ArrowRight } from 'lucide-react';

export const News: React.FC = () => {
  const newsItems = [
    {
      title: 'Killzone: Shadow Fall Retrospective',
      time: '2 hours ago',
      tag: 'Review',
      image: 'https://i.ytimg.com/vi/So5t89_1-D4/maxresdefault.jpg'
    },
    {
      title: 'Spider-Man 2 PC Requirements Revealed',
      time: '5 hours ago',
      tag: 'Tech',
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/1301/7721211b3461d59142926e56c09aec60e03ffc7b0482efe3.jpg'
    },
    {
      title: 'Jet Set Radio Future Reboot Teased',
      time: '1 day ago',
      tag: 'Rumor',
      image: 'https://i.ytimg.com/vi/aYLdJFW4ylU/maxresdefault.jpg'
    }
  ];

  return (
    <section id="latest" className="py-16 md:py-24 bg-dark-900/50 border-y border-white/5" aria-label="Latest News">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-12">
          {/* News Feed */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 md:mb-8">Latest Intel</h2>
            
            <div className="space-y-4">
              {newsItems.map((item, index) => (
                <motion.a 
                  key={item.title}
                  href="#"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex gap-5 p-4 rounded-xl bg-dark-950 border border-white/5 hover:border-gold-500/30 transition items-center"
                >
                  <div className="w-24 md:w-32 h-16 md:h-20 rounded-lg overflow-hidden shrink-0">
                    <img 
                      src={item.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                      alt={item.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-white group-hover:text-gold-400 transition mb-1 text-sm md:text-base">{item.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Clock size={12} /> {item.time}</span>
                      <span className="flex items-center gap-1"><Tag size={12} /> {item.tag}</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Video Feature */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 md:mb-8">Trending Media</h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-2xl border border-white/10 relative group"
            >
              <div className="aspect-video">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/V5-DyoVlNOg" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
