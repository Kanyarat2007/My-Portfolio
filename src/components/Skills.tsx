import {
  Code2,
  Palette,
  Database,
  type LucideIcon,
} from 'lucide-react';
import SectionHeading, { Reveal } from './SectionHeading';
import { SKILL_GROUPS } from '@/data/portfolio';

const ICONS: Record<string, LucideIcon> = {
  Code2,
  Palette,
  Database,
};

const TITLE_TH: Record<string, string> = {
  'Front-End': 'Front-End',
  'Design': 'การออกแบบ',
  'Database': 'ฐานข้อมูล',
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-ink-950">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative section-container">
        <Reveal>
          <SectionHeading
            eyebrow="ทักษะ"
            title="เครื่องมือและเทคโนโลยีที่ฉันใช้งาน"
            // description="ทักษะที่กำลังพัฒนาอย่างต่อเนื่องในด้าน Front-End การออกแบบ และฐานข้อมูล"
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, gi) => {
            const Icon = ICONS[group.icon] ?? Code2;
            return (
              <Reveal key={group.title} delay={gi * 120}>
                <div className="glass-card p-6 h-full hover:border-white/10 transition-colors group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 group-hover:scale-110 transition-transform duration-200">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-white">
                      {TITLE_TH[group.title] ?? group.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-ink-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
