import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  title: string;
  subtitle: string;
};

export default function SectionContainer({ children, className, title, subtitle }: SectionProps) {
  return (
    <section className={`mx-auto max-w-6xl p-4 md:p-0 text-black/90 dark:text-white/90 divide-slate-300 dark:divide-neutral-700 ${className}`}>

      <div className="my- text-center max-w-4xl mx-auto h-20">

        <h1 className="text-2xl text-slate-600 dark:text-slate-300 ">{title}</h1>
        <p className="text-slate-400 mt-2">{subtitle}</p>
      </div>

      <hr className="my-8" />

      {children}
    </section>
  );
};

