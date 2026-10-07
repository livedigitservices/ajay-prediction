/**
 * Global Configuration for Ajay Prediction Landing Page
 */

const rawTelegramUrl = import.meta.env.VITE_TELEGRAM_GROUP_URL || "https://telegram.me/ajayprediction";

// Ensure ISP SSL blocks on t.me domain are automatically converted to telegram.me
const safeTelegramUrl = rawTelegramUrl.replace('t.me/', 'telegram.me/');

export const CONFIG = {
  brandName: "Ajay Prediction",
  tagline: "India's #1 Trusted Prediction & Analysis Community",
  telegramUrl: safeTelegramUrl,
  rawTelegramUrl: rawTelegramUrl,
  features: [
    {
      title: "Real-Time Toss & Match Analysis",
      description: "Get instant, data-backed reports before and during live matches with in-depth pitch & player stats.",
      icon: "Activity"
    },
    {
      title: "High-Accuracy Tips",
      description: "Proven track record with transparent analysis, risk management tips, and session guides.",
      icon: "ShieldCheck"
    },
    {
      title: "100% Free Community",
      description: "No hidden VIP fees. Direct access to our public Telegram channel with daily winning predictions.",
      icon: "Gift"
    }
  ]
};
