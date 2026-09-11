import type { ReactNode } from 'react';

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: Props) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl'
      }`}
    >
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-300 uppercase tracking-wider mb-4`}
      >
        <span className="h-1 w-1 rounded-full bg-brand-400" />
        {eyebrow}
      </div>
      <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-400 leading-relaxed text-base md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
