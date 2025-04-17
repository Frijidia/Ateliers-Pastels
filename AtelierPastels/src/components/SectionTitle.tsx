
// import React from 'react';
import { cn } from '../lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn(
      'mb-12',
      align === 'left' && 'text-left',
      align === 'center' && 'text-center',
      align === 'right' && 'text-right',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
      <div className={cn(
        'h-1 w-24 bg-gradient-to-r from-pastel-yellow via-pastel-pink to-pastel-turquoise mt-4',
        align === 'center' && 'mx-auto',
        align === 'right' && 'ml-auto'
      )}></div>
    </div>
  );
};

export default SectionTitle;
