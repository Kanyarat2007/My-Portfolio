import { ArrowDown } from 'lucide-react';
import { PROFILE } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-600/15 rounded-full blur-3xl animate-blob [animation-delay:4s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-400/10 rounded-full blur-3xl animate-blob [animation-delay:8s]" />

      <div className="relative z-10 section-container text-center pt-20">
        {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75 animate-pulse-ring" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-400" />
          </span>
          <span className="text-xs font-medium text-ink-300">
            พร้อมรับโอกาสใหม่ ๆ
          </span>
        </div> */}

        <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[1.05] animate-fade-up">
          สวัสดี ฉันชื่อ <span className="text-gradient">{PROFILE.name}</span>
        </h1>

        <p
          className="mt-5 text-lg md:text-xl text-ink-300 max-w-2xl mx-auto leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          นักศึกษาสาขา{PROFILE.role} 
          <br />
          {PROFILE.university}
        </p>

        <div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5"
          >
            ดูผลงานของฉัน
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            ติดต่อฉัน
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-ink-400 hover:text-white transition-colors animate-float"
        aria-label="เลื่อนลง"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
