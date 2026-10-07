
import Hero from './components/Hero';
import { CONFIG } from './config';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white">
      <main className="flex-grow flex items-center justify-center">
        <Hero />
      </main>
      <footer className="py-6 border-t border-slate-900/80 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} {CONFIG.brandName}. All rights reserved.</p>
      </footer>
    </div>
  );
}
