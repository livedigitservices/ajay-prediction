import React from 'react';
import { CONFIG } from '../config';
import { openTelegram } from '../utils/telegram';

export default function PredictionBanner() {
  const handleBannerClick = () => {
    openTelegram(CONFIG.telegramUrl);
  };

  return (
    <div
      onClick={handleBannerClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleBannerClick();
      }}
      className="relative w-full max-w-md sm:max-w-3xl mx-auto select-none px-1 cursor-pointer"
    >
      <picture>
        {/* Desktop / tablet image (640px and up) */}
        <source media="(min-width: 640px)" srcSet="/images/banner-desktop.jpeg" />

        {/* Mobile image (default, below 640px) */}
        <img
          src="/images/banner-mobile.jpeg"
          alt="Join our Telegram community"
          className="w-full h-auto rounded-xl sm:rounded-xl"
          loading="eager"
          draggable={false}
        />
      </picture>
    </div>
  );
}