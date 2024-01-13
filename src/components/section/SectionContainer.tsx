import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionContainer ({children, className}:SectionProps) {
  return (
    <section className={`w-full lg:w-[700px] mx-auto text-black/90 dark:text-white/90 ${className}`}>
      {children}
    </section>
  );
};

