import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import { CONFIG } from './config';
import PixelTracker from './components/PixelTracker';

export default function App() {
  return (
    <BrowserRouter>
      {/* Meta Pixel SPA Route & PageView Tracker */}
      <PixelTracker />

      <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white">
        <main className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Hero />} />
            {/* Add more routes here if needed in the future */}
          </Routes>
        </main>
        <footer className="py-6 border-t border-slate-900/80 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {CONFIG.brandName}. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}