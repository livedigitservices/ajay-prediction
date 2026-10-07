import React from 'react';
import { Send, TrendingUp, ShieldAlert, Heart } from 'lucide-react';
import { CONFIG } from '../config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#060910] border-t border-slate-900 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Brand & Telegram Quick Access */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-slate-950 font-black">
              <TrendingUp className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-lg font-extrabold text-white">{CONFIG.brandName}</span>
              <p className="text-xs text-slate-400">Official Telegram Community</p>
            </div>
          </div>

          <a 
            href={CONFIG.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full"
          >
            <Send className="w-4 h-4" />
            <span>Join @ajayprediction on Telegram</span>
          </a>

        </div>

        {/* Disclaimer Note */}
        <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/70 text-slate-400 text-xs leading-relaxed space-y-1">
          <div className="flex items-center gap-1.5 text-slate-300 font-semibold mb-1">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>Disclaimer & Fair Play</span>
          </div>
          <p>
            All predictions, statistics, and analysis shared on {CONFIG.brandName} are purely for analytical, educational, and informational purposes. We do not promote or host any gambling or betting platforms. Please use risk management and play responsibly.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {CONFIG.brandName}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Official Community Landing Page
          </p>
        </div>

      </div>
    </footer>
  );
}
