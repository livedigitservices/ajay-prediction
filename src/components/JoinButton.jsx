import React from 'react';
import { Send, ArrowRight, ExternalLink } from 'lucide-react';
import { CONFIG } from '../config';
import { openTelegram } from '../utils/telegram';

/**
 * Reusable CTA button that safely redirects to Telegram without SSL errors
 */
export default function JoinButton({ 
  className = "", 
  size = "lg", 
  variant = "primary",
  showArrow = true,
  text = "Join Telegram Channel" 
}) {
  const handleClick = (e) => {
    // Prevent default to run smart opener with deep-link fallback
    e.preventDefault();
    openTelegram(CONFIG.telegramUrl);
  };

  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 transform active:scale-95 rounded-full cursor-pointer select-none text-decoration-none";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs sm:text-sm gap-1.5",
    md: "px-6 py-3 text-sm sm:text-base gap-2",
    lg: "px-7 sm:px-9 py-3.5 sm:py-4 text-base sm:text-lg gap-2.5 sm:gap-3"
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 text-slate-950 glow-btn hover:from-emerald-400 hover:to-teal-300 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(16,185,129,0.6)]",
    telegram: "bg-gradient-to-r from-[#229ED9] to-[#0088cc] text-white hover:from-[#2baee8] hover:to-[#0099e6] shadow-[0_4px_25px_rgba(0,136,204,0.4)] hover:shadow-[0_8px_35px_rgba(0,136,204,0.6)] hover:-translate-y-0.5",
    outline: "bg-slate-900/80 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400"
  };

  return (
    <a
      href={CONFIG.telegramUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label={`Join ${CONFIG.brandName} on Telegram`}
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.lg} ${variantStyles[variant] || variantStyles.primary} ${className}`}
    >
      <Send className="w-5 h-5 sm:w-6 sm:h-6 -rotate-12 transition-transform group-hover:rotate-0" />
      <span className="tracking-wide">{text}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
      )}
    </a>
  );
}
