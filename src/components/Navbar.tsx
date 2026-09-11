import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, PROFILE } from '@/data/portfolio';
import { useActiveSection, useScrollProgress } from '@/hooks/useScrollReveal';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(['home', ...NAV_LINKS.map((l) => l.href.slice(1))]);
  const progress = useScrollProgress();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="h-0.5 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-brand-500 to-accent-500 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav className="border-b border-white/5 bg-ink-950/70 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <a
            href="#home"
            className="font-display font-bold text-lg text-white tracking-tight"
          >
            {PROFILE.name.split(' ').map((p) => p[0]).join('')}
            <span className="text-brand-400">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link group py-1"
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-brand-400 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
            <a
              href="#contact"
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-400 text-white transition-colors duration-200 shadow-lg shadow-brand-500/20"
            >
              ติดต่อฉัน
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-ink-200 hover:text-white p-1"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/5 bg-ink-950/95 backdrop-blur-xl">
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-ink-300 hover:text-white py-2.5 hover:bg-white/5 rounded-lg px-3 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="text-sm font-semibold px-4 py-2.5 mt-2 rounded-lg bg-brand-500 text-white text-center"
              >
                ติดต่อฉัน
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
