import { Sparkles } from 'lucide-react';
import SectionHeading, { Reveal } from './SectionHeading';
import { ABOUT_PARAGRAPHS } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="เกี่ยวกับฉัน"
            title="นักศึกษาที่หลงใหลใน Front-End และการออกแบบ"
            // description="ฉันเชื่อว่าซอฟต์แวร์ที่ดีต้องเริ่มจากการเข้าใจผู้ใช้ แล้วจึงสร้างอินเทอร์เฟซที่ใช้งานได้ตามธรรมชาติและดูสวยงาม"
          />
        </Reveal>

        <div className="max-w-3xl mx-auto">
          <Reveal delay={100}>
            <div className="space-y-5">
              {ABOUT_PARAGRAPHS.map((p, i) => (
                <p key={i} className="text-ink-300 leading-relaxed text-base md:text-[17px]">
                  {p}
                </p>
              ))}

              <div className="flex flex-wrap gap-2 pt-2">
                {['คิดสร้างสรรค์', 'ใส่ใจรายละเอียด', 'ทำงานเป็นทีม', 'เรียนรู้ตลอดเวลา'].map(
                  (trait) => (
                    <span
                      key={trait}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-ink-200"
                    >
                      <Sparkles size={12} className="text-accent-400" />
                      {trait}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
