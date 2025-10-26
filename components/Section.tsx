import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray';
  id?: string;
}

export default function Section({ 
  children, 
  className = '', 
  background = 'white',
  id
}: SectionProps) {
  const bgColor = background === 'gray' ? 'bg-gray-50' : 'bg-white';
  
  return (
    <section id={id} className={`py-16 ${bgColor} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
