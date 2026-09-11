import SectionHeading, { Reveal } from './SectionHeading';
import { EDUCATION, } from '@/data/portfolio';

export default function Education() { 
  return ( 
    <section id="education" className="relative py-24 md:py-32 bg-ink-950"> 
      <div className="absolute inset-0 grid-bg opacity-20" /> 
      
      <div className="relative section-container"> 
        <Reveal> 
          <SectionHeading 
            eyebrow="การศึกษา" 
            title="เส้นทางการเรียนรู้ของฉัน" 
          /> 
        </Reveal> 

        {/* Education content - centered */}
        <div className="flex justify-center"> 
          <div className="w-full max-w-2xl"> 
            <div className="relative pl-6 border-l border-white/10 space-y-8"> 
              {EDUCATION.map((edu, i) => ( 
                <Reveal key={edu.title} delay={i * 120}> 
                  <div className="relative"> 
                    <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-brand-500 ring-4 ring-ink-950" /> 
                    
                    <p className="text-xs font-mono text-brand-400 mb-1">
                      {edu.period}
                    </p> 
                    
                    <h4 className="font-display font-semibold text-base text-white"> 
                      {edu.title} 
                    </h4> 
                    
                    <p className="text-sm text-ink-300 mt-0.5">
                      {edu.institution}
                    </p> 
                    
                    <p className="text-sm text-ink-400 mt-2 leading-relaxed">
                      {edu.detail}
                    </p> 
                    
                    <span className="inline-block mt-2 text-xs font-medium px-2.5 py-1 rounded-md bg-accent-500/10 border border-accent-500/20 text-accent-400"> 
                      {edu.gpa} 
                    </span> 
                  </div> 
                </Reveal> 
              ))} 
            </div> 

          </div> 
        </div> 
      </div>
    </section>
  ); 
}