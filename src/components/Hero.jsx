import React from 'react';
import { Send, TrendingUp, Sparkles, ShieldCheck } from 'lucide-react';
import { CONFIG } from '../config';
import JoinButton from './JoinButton';
import PredictionBanner from './PredictionBanner';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden">
      
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-emerald-500/20 via-teal-500/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="w-full max-w-2xl mx-auto text-center space-y-6 sm:space-y-8">

        {/* Prediction Banner Image / Visual Graphic */}
        <div className="w-full flex justify-center">
          <PredictionBanner />
        </div>

        {/* Prominent "Join Now" CTA Button Below Banner */}
        <div className="pt-2 sm:pt-4 flex flex-col items-center justify-center gap-3">
          <JoinButton 
            size="lg" 
            variant="primary" 
            text="Join Now on Telegram"
            className="w-full sm:w-auto px-10 py-4 text-base sm:text-lg font-extrabold shadow-2xl tracking-wide"
          />

          <p className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Free Access • Instant Redirect • 50,000+ Members</span>
          </p>
        </div>

      </div>

    </section>
  );
}
