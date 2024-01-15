import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionContainer ({children, className}:SectionProps) {
  return (
    <section className={`mx-auto max-w-6xl p-4 md:p-0 text-black/90 dark:text-white/90 ${className}`}>
      {children}
    </section>
  );
};

