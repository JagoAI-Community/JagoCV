import React from 'react';
import { cn } from '../../utils/cn';
import type { ThemeColor } from '../../types/enums';

const focusRings: Record<ThemeColor, string> = {
  blue: 'focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF]',
  indigo: 'focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500',
  cyan: 'focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500',
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  theme?: ThemeColor;
}

export default function TextArea({ theme = 'blue', className, ...props }: TextAreaProps) {
  return (
    <textarea
      className={cn(
        'w-full bg-white dark:bg-[#1A2133]',
        'border border-slate-300 dark:border-[#2A3143]',
        'rounded-xl px-4 py-3 text-sm',
        'text-slate-800 dark:text-slate-200',
        'placeholder-slate-600',
        focusRings[theme],
        'outline-none transition-all resize-none',
        className
      )}
      {...props}
    />
  );
}
