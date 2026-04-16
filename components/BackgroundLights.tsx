import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const BackgroundLights: React.FC = () => {
  // Create 14 lights with random properties for organic movement
  // Colors refined to deep amber, warm white, and very subtle indigo for depth
  const lights = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      size: Math.random() * 400 + 150, // Larger, softer lights
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 15, // Slower movement
      delay: Math.random() * 5,
      opacity: Math.random() * 0.12 + 0.03, // Slightly lower max opacity for better text contrast
      color: i % 3 === 0 ? '#b45309' : i % 3 === 1 ? '#fbbf24' : '#4338ca', // Dark Amber, Light Amber, Deep Indigo (shadows)
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      {lights.map((light) => (
        <motion.div
          key={light.id}
          className="absolute rounded-full blur-[100px] mix-blend-screen"
          style={{
            width: light.size,
            height: light.size,
            backgroundColor: light.color,
            top: `${light.y}%`,
            left: `${light.x}%`,
            opacity: light.opacity,
          }}
          animate={{
            x: [0, Math.random() * 80 - 40, Math.random() * 80 - 40, 0],
            y: [0, Math.random() * 80 - 40, Math.random() * 80 - 40, 0],
            scale: [1, 1.1, 0.9, 1],
            opacity: [light.opacity, light.opacity * 1.3, light.opacity * 0.7, light.opacity],
          }}
          transition={{
            duration: light.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: light.delay,
          }}
        />
      ))}
      {/* Central vignette to ensure center readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050505_100%)] pointer-events-none" />
    </div>
  );
};