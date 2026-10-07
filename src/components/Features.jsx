import React from 'react';
import { Activity, ShieldCheck, Gift, CheckCircle, Zap } from 'lucide-react';
import { CONFIG } from '../config';
import JoinButton from './JoinButton';

const iconMap = {
  Activity: Activity,
  ShieldCheck: ShieldCheck,
  Gift: Gift
};

export default function Features() {
  return (
    <section className="py-14 sm:py-20 bg-slate-950/60 border-t border-slate-900 relative">
      
      {/* Background glow accent */}
      <div className="absolute inset-0 bg-radial-[circle_at_bottom] from-emerald-950/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            <Zap className="w-3.5 h-3.5" />
            Why Choose Ajay Prediction
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Designed For Consistent Winning & Smart Community Members
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Everything you need for smart, data-driven sports prediction analysis in one place.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CONFIG.features.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || ShieldCheck;
            return (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/30 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick Mid-Page Banner CTA */}
        <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/30 p-6 sm:p-10 text-center flex flex-col items-center justify-center space-y-5 shadow-2xl">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-3xl font-extrabold text-white">
              Ready to win with {CONFIG.brandName}?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Join 50,000+ members on Telegram right now. Free instant access with zero fees.
            </p>
          </div>
          <JoinButton size="lg" variant="primary" text="Join Telegram Channel Now" />
        </div>

      </div>
    </section>
  );
}
