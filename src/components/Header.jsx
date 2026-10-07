import React from 'react';
import { TrendingUp, Send } from 'lucide-react';
import { CONFIG } from '../config';
import { openTelegram } from '../utils/telegram';

export default function Header() {
  const handleTelegramClick = (e) => {
    e.preventDefault();
    openTelegram(CONFIG.telegramUrl);
  };

  return (
    <header className="w-full bg-[#090d16]/90 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
        
        {/* Brand Name */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group select-none text-decoration-none"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-black shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <TrendingUp className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors">
            {CONFIG.brandName}
          </span>
        </a>

        {/* Minimal Telegram Link Pill with safe opener */}
        <a
          href={CONFIG.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleTelegramClick}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0088cc]/15 hover:bg-[#0088cc]/25 border border-[#0088cc]/30 text-[#29b6f6] hover:text-[#4fc3f7] text-xs sm:text-sm font-semibold transition-colors"
        >
          <Send className="w-3.5 h-3.5 -rotate-12" />
          <span>Telegram</span>
        </a>

      </div>
    </header>
  );
}
