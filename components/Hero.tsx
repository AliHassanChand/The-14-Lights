import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number, height: number;
    let stars: any[] = [];
    const starCount = 600;
    const speed = 1.5;
    const colors = ["#D4AF37", "#3B82F6", "#ffffff", "#8e6f1f"];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width - width / 2,
          y: Math.random() * height - height / 2,
          z: Math.random() * width,
          c: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = "rgba(5, 5, 7, 0.4)";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        star.z -= speed;

        if (star.z <= 0) {
          star.z = width;
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
        }

        let k = 128.0 / star.z;
        let px = star.x * k + cx;
        let py = star.y * k + cy;

        let size = (1 - star.z / width) * 2.5;
        let opacity = (1 - star.z / width);

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          ctx.beginPath();
          ctx.fillStyle = star.c;
          ctx.globalAlpha = opacity;
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
          
          if (size > 1.2) {
            ctx.beginPath();
            ctx.strokeStyle = star.c;
            ctx.lineWidth = size * 0.4;
            ctx.moveTo(px, py);
            ctx.lineTo(px + (px - cx) * 0.04, py + (py - cy) * 0.04);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <header className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-black pt-20 md:pt-0">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 opacity-80" aria-hidden="true" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/90 via-transparent to-dark-950/90 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_10%,_#050507_90%)] z-10 pointer-events-none" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 md:px-6 text-center flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-md mb-6 md:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
          <span className="text-[10px] md:text-xs font-bold text-gold-400 uppercase tracking-widest">Pioneering The Future</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-tight mb-4 md:mb-6"
        >
          <span className="text-white glitch-text" data-text="UNLEASH YOUR">UNLEASH YOUR</span><br />
          <span className="text-gradient-gold drop-shadow-lg">TRUE POTENTIAL</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-xl text-gray-300 max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light px-2"
        >
          We build immersive worlds, competitive ecosystems, and next-gen experiences. 
          Step into the future of interactive entertainment.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 w-full sm:w-auto"
        >
          <a href="#top-games" className="w-full sm:w-auto btn-gold px-8 py-4 rounded font-bold uppercase tracking-wide shadow-lg shadow-gold-500/20 text-sm transform hover:scale-105 transition duration-300 text-center flex items-center justify-center gap-2">
            View Portfolio <ArrowRight size={18} />
          </a>
          <a href="#latest" className="w-full sm:w-auto group px-8 py-4 rounded font-bold uppercase tracking-wide border border-white/20 hover:border-gold-500/50 text-white bg-white/5 hover:bg-gold-500/10 backdrop-blur-sm transition duration-300 text-sm flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-black transition">
              <Play size={14} className="ml-1" />
            </div>
            <span>Showreel</span>
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] block mb-2 text-center opacity-70">Scroll</span>
        <ChevronDown className="animate-bounce" size={24} />
      </motion.div>
    </header>
  );
};
