# Ajay Prediction — Official Landing Page

A modern, responsive, high-converting landing page built for **Ajay Prediction** to drive community growth on Telegram.

## 🚀 Tech Stack

- **React 19** (JSX)
- **Vite**
- **Tailwind CSS v4**
- **Lucide Icons**

---

## ⚡ Features

1. **Brand Identity**: Prominent display of "Ajay Prediction" with a modern dark theme, neon accents, and clean typography.
2. **High-Impact Hero Section**: Engaging copy, 95% accuracy confidence badge, live community status, and high-tech prediction banner graphic.
3. **Dynamic Telegram Integration**: Centralized Telegram link via `VITE_TELEGRAM_GROUP_URL` environment variable (`src/config.js`), opening in a new tab without hardcoded duplicates.
4. **100% Fully Responsive**: Pixel-perfect on mobile (iPhone, Android), tablets, laptops, and ultra-wide screens with zero horizontal scrolling.
5. **Conversion Optimized**: Multiple intuitive CTA buttons, floating mobile quick-join pill, and trust metrics (50k+ members).

---

## ⚙️ Configuration (Telegram Link)

To update the Telegram group or channel invite link:

1. Open `.env` (or create one based on `.env.example`):
   ```env
   VITE_TELEGRAM_GROUP_URL=https://t.me/your_telegram_channel_or_group
   ```
2. Or change the fallback in [src/config.js](file:///C:/Users/user/.gemini/antigravity/scratch/ajay-prediction/src/config.js):
   ```javascript
   export const CONFIG = {
     brandName: "Ajay Prediction",
     telegramUrl: import.meta.env.VITE_TELEGRAM_GROUP_URL || "https://t.me/ajayprediction",
     ...
   };
   ```

---

## 🛠️ Quick Start

```bash
# Navigate to the project directory
cd C:\Users\user\.gemini\antigravity\scratch\ajay-prediction

# Install dependencies (already completed)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
