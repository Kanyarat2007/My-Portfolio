import { ArrowUp } from 'lucide-react';
import { PROFILE, NAV_LINKS } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a
              href="#home"
              className="font-display font-bold text-lg text-white tracking-tight"
            >
              {PROFILE.name.split(' ').map((p) => p[0]).join('')}
              <span className="text-brand-400">.</span>
            </a>
            <p className="text-xs text-ink-500 mt-1.5">
              © {new Date().getFullYear()} {PROFILE.name}. สร้างด้วย React & Tailwind.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-ink-400 hover:text-white transition-colors hidden sm:inline"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#home"
            aria-label="กลับด้านบน"
            className="p-2.5 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 hover:bg-brand-500/20 transition-all"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
