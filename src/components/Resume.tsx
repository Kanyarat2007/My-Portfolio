import { Download, FileText, Eye } from 'lucide-react';
import SectionHeading, { Reveal } from './SectionHeading';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS, SKILL_GROUPS, PROFILE } from '@/data/portfolio';

export default function Resume() {
  const allSkills = SKILL_GROUPS.flatMap((g) => g.skills);

  return (
    <section id="resume" className="relative py-24 md:py-32">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="ประวัติย่อ"
            title="ภาพรวมประวัติของฉัน"
            description="ต้องการไฟล์ PDF? ดาวน์โหลดประวัติย่อได้เลย"
            align="left"
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <Reveal className="md:col-span-2">
            <div className="glass-card p-6 md:p-8">
              <div className="pb-5 border-b border-white/10">
                <h3 className="font-display font-bold text-2xl text-white">{PROFILE.name}</h3>
                <p className="text-sm text-brand-400 mt-1 font-medium">
                  {PROFILE.role}
                </p>
                <p className="text-xs text-ink-400 mt-1">{PROFILE.email}</p>
              </div>

              {EXPERIENCE.length > 0 && (
                <div className="pt-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ink-400 mb-3">
                    ประสบการณ์
                  </h4>
                  <div className="space-y-4">
                    {EXPERIENCE.map((exp) => (
                      <div key={exp.role}>
                        <div className="flex items-baseline justify-between flex-wrap gap-1">
                          <p className="text-sm font-semibold text-white">{exp.role}</p>
                          <p className="text-xs text-ink-400 font-mono">{exp.period}</p>
                        </div>
                        <p className="text-xs text-brand-400 mt-0.5">{exp.company}</p>
                        <ul className="mt-1.5 space-y-1">
                          {exp.bullets.map((b, i) => (
                            <li key={i} className="text-xs text-ink-400 leading-relaxed pl-3 relative">
                              <span className="absolute left-0 top-1.5 w-1 h-1 rounded-full bg-ink-600" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className={`grid sm:grid-cols-2 gap-5 ${EXPERIENCE.length > 0 ? 'pt-5 mt-5 border-t border-white/10' : 'pt-5'}`}>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ink-400 mb-3">
                    การศึกษา
                  </h4>
                  {EDUCATION.map((edu) => (
                    <div key={edu.title} className="mb-3">
                      <p className="text-sm font-semibold text-white leading-tight">{edu.title}</p>
                      <p className="text-xs text-ink-400 mt-0.5">{edu.institution}</p>
                      <p className="text-xs text-ink-500 mt-0.5">{edu.period}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ink-400 mb-3">
                    ทักษะหลัก
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {allSkills.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-0.5 rounded bg-white/5 border border-white/10 text-ink-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {CERTIFICATIONS.length > 0 && (
                    <>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-ink-400 mb-2 mt-4">
                        ใบรับรอง
                      </h4>
                      <ul className="space-y-1">
                        {CERTIFICATIONS.map((c) => (
                          <li key={c} className="text-xs text-ink-400 leading-relaxed">{c}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-card p-6 h-full flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 inline-block mb-4">
                  <FileText size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  ประวัติย่อฉบับเต็ม
                </h3>
                <p className="text-sm text-ink-400 leading-relaxed">
                  ดาวน์โหลดหรือพิมพ์ประวัติย่อในรูปแบบ PDF พร้อมรายละเอียดการศึกษา ทักษะ และประสบการณ์
                </p>
              </div>

              <div className="mt-6 space-y-2.5">
                <button
                  onClick={() => window.print()}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold text-sm transition-colors shadow-lg shadow-brand-500/20"
                >
                  <Download size={16} />
                  ดาวน์โหลด PDF
                </button>
                <button
                  onClick={() => window.print()}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-colors"
                >
                  <Eye size={16} />
                  พิมพ์ / บันทึก
                </button>
              </div>

              <p className="text-xs text-ink-500 mt-4 text-center">
                อัปเดตล่าสุด: กันยายน 2026
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
