import { Github, Linkedin, Mail, MapPin, FileText } from 'lucide-react';
import SectionHeading, { Reveal } from './SectionHeading';
import { PROFILE } from '@/data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-ink-950">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative section-container">
        <Reveal>
          <SectionHeading
            eyebrow="ติดต่อ"
            title="ติดต่อฉัน"
            // description="ไม่ว่าจะเป็นโอกาสฝึกงาน โปรเจกต์ร่วมกัน หรือแค่อยากทักทาย — ยินดีเสมอ"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="max-w-xl mx-auto grid gap-4">
            <a
              href={`mailto:${PROFILE.email}`}
              className="glass-card p-5 flex items-center gap-4 hover:border-white/10 transition-all hover:-translate-y-0.5 group"
            >
              <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-ink-400 uppercase tracking-wide font-semibold mb-0.5">อีเมล</p>
                <p className="text-sm text-white font-medium">{PROFILE.email}</p>
              </div>
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 flex items-center gap-4 hover:border-white/10 transition-all hover:-translate-y-0.5 group"
            >
              <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 group-hover:scale-110 transition-transform">
                <Linkedin size={20} />
              </div>
              <div>
                <p className="text-xs text-ink-400 uppercase tracking-wide font-semibold mb-0.5">LinkedIn</p>
                <p className="text-sm text-white font-medium">kanyarat-thinhanwong</p>
              </div>
            </a>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 flex items-center gap-4 hover:border-white/10 transition-all hover:-translate-y-0.5 group"
            >
              <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 group-hover:scale-110 transition-transform">
                <Github size={20} />
              </div>
              <div>
                <p className="text-xs text-ink-400 uppercase tracking-wide font-semibold mb-0.5">GitHub</p>
                <p className="text-sm text-white font-medium">Kanyarat2007</p>
              </div>
            </a>

            {/* CV */}
            <a
              href={`${import.meta.env.BASE_URL}images/projects/CV-Kanyarat.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 flex items-center gap-4 hover:border-white/10 transition-all hover:-translate-y-0.5 group"
            >
              <div className="p-3 rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-400 group-hover:scale-110 transition-transform">
                <FileText size={20} />
              </div>

              <div>
                <p className="text-xs text-ink-400 uppercase tracking-wide font-semibold mb-0.5">
                  CV / Resume
                </p>
                <p className="text-sm text-white font-medium">
                  ดู CV ของฉัน
                </p>
              </div>
            </a>

            {PROFILE.location && (
              <div className="glass-card p-5 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-ink-400 uppercase tracking-wide font-semibold mb-0.5">ที่อยู่</p>
                  <p className="text-sm text-white font-medium">{PROFILE.location}</p>
                </div>
              </div>
            )}

            
          </div>
        </Reveal>
      </div>
    </section>
  );
}
