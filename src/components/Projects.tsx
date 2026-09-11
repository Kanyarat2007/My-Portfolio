import { useState } from 'react';
import {
  Truck,
  Bot,
  FolderOpen,
  Target,
  Lightbulb,
  User,
  Cpu,
  // CheckCircle2,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';
import SectionHeading, { Reveal } from './SectionHeading';
import { PROJECTS } from '@/data/portfolio';

const ICONS: Record<string, LucideIcon> = {
  Truck,
  Bot,
  FolderOpen,
};

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-ink-900 mb-5">
      <img
        src={images[current]}
        alt={`${title} — ภาพที่ ${current + 1}`}
        className="w-full h-48 object-cover object-top transition-opacity duration-300"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-ink-950/70 text-white hover:bg-ink-950 transition-colors"
            aria-label="ภาพก่อนหน้า"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-ink-950/70 text-white hover:bg-ink-950 transition-colors"
            aria-label="ภาพถัดไป"
          >
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === current ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`ภาพที่ ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="ผลงาน"
            title="สิ่งที่ฉันได้สร้าง"
            // description="รวมผลงานด้าน Front-End Development, AI และ UX/UI Design"
          />
        </Reveal>

        {PROJECTS.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => {
              const Icon = ICONS[project.icon] ?? FolderOpen;
              return (
                <Reveal key={project.title} delay={i * 100}>
                  <article className="glass-card p-6 md:p-7 h-full group hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1">
                    <ImageCarousel images={project.images} title={project.title} />

                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-brand-500/15 to-accent-500/15 border border-white/10 text-brand-400">
                        <Icon size={22} />
                      </div>
                      <h3 className="font-display font-semibold text-xl text-white">
                        {project.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-error-400 mb-1">
                          <Target size={13} /> ปัญหา
                        </p>
                        <p className="text-sm text-ink-400 leading-relaxed">{project.problem}</p>
                      </div>

                      <div>
                        <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-400 mb-1">
                          <Lightbulb size={13} /> แนวทางแก้ไข
                        </p>
                        <p className="text-sm text-ink-400 leading-relaxed">{project.solution}</p>
                      </div>

                      <div>
                        <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-400 mb-1">
                          <User size={13} /> บทบาทของฉัน
                        </p>
                        <p className="text-sm text-ink-400 leading-relaxed">{project.role}</p>
                      </div>

                      <div>
                        <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink-300 mb-1">
                          <Cpu size={13} /> เทคโนโลยีที่ใช้
                        </p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {project.tech.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-ink-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* <div className="pt-3 border-t border-white/5">
                        <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink-400 mb-1">
                          <CheckCircle2 size={13} /> หลักฐาน
                        </p>
                        <p className="text-sm text-ink-500 leading-relaxed">
                          {project.proof || 'จะเพิ่มเร็ว ๆ นี้'}
                        </p>
                      </div> */}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        ) : (
          <Reveal>
            <div className="glass-card p-10 md:p-14 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-400 mb-5">
                <FolderOpen size={28} />
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-2">
                กำลังจัดเตรียมผลงาน
              </h3>
              <p className="text-sm text-ink-400 max-w-md mx-auto leading-relaxed">
                ฉันกำลังทำงานในโปรเจกต์ Front-End และ UX/UI ที่จะนำมาแสดงที่นี่ กลับมาดูใหม่เร็ว ๆ นี้ หรือ{' '}
                <a
                  href="#contact"
                  className="text-brand-400 hover:text-brand-300 underline underline-offset-2"
                >
                  ติดต่อฉัน
                </a>{' '}
                เพื่อร่วมมือกัน
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
