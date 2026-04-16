import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Youtube, ArrowRight, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-40 bg-black border-t border-white/10 pt-12 md:pt-16 pb-8" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
        <div className="col-span-2 md:col-span-1">
          <a href="/" className="flex items-center gap-2 mb-4 md:mb-6" aria-label="The 14 Lights Home">
            <div className="w-8 h-8 rounded bg-gold-500 flex items-center justify-center">
              <span className="text-black font-bold">14</span>
            </div>
            <span className="text-lg md:text-xl font-display font-bold text-white tracking-wider">
              THE 14 <span className="text-gold-500">LIGHTS</span>
            </span>
          </a>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
            Elevating the standard of gaming journalism and community engagement. Built for the players, by the players.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 md:mb-6 text-sm md:text-base">Explore</h4>
          <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-500">
            <li><a href="#" className="hover:text-gold-500 transition">Latest News</a></li>
            <li><a href="#" className="hover:text-gold-500 transition">Reviews</a></li>
            <li><a href="#" className="hover:text-gold-500 transition">Esports Bracket</a></li>
            <li><a href="#" className="hover:text-gold-500 transition">Hardware Guide</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 md:mb-6 text-sm md:text-base">Company</h4>
          <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-500">
            <li><a href="#" className="hover:text-gold-500 transition">About Us</a></li>
            <li><a href="#" className="hover:text-gold-500 transition">Careers</a></li>
            <li><a href="#" className="hover:text-gold-500 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gold-500 transition">Contact</a></li>
          </ul>
        </div>
        
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-white font-bold mb-4 md:mb-6 text-sm md:text-base">Stay Connected</h4>
          <div className="flex gap-4 mb-6">
            <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-black transition" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-black transition" aria-label="Discord"><i className="fab fa-discord"></i></a>
            <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-black transition" aria-label="YouTube"><Youtube size={18} /></a>
          </div>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Subscribe to newsletter" 
              aria-label="Email Address for Newsletter" 
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-xs md:text-sm text-white focus:outline-none focus:border-gold-500 transition"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white" aria-label="Submit Newsletter">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
        <p>&copy; {new Date().getFullYear()} The 14 Lights Studio. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-400">Terms</a>
          <a href="#" className="hover:text-gray-400">Privacy</a>
          <a href="#" className="hover:text-gray-400">Cookies</a>
        </div>
      </div>
    </footer>
  );
};
