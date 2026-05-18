import React from 'react';
import { cn } from '../../utils/cn';
import type { ThemeColor } from '../../types/enums';

// ===================================================================
// THEME COLOR MAPPINGS
// ===================================================================

const themeStyles: Record<ThemeColor, { primary: string; shadow: string }> = {
  blue: {
    primary: 'bg-[#1E5EFF] hover:bg-blue-600 shadow-blue-500/25',
    shadow: 'shadow-lg',
  },
  indigo: {
    primary: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/25',
    shadow: 'shadow-lg',
  },
  cyan: {
    primary: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/25',
    shadow: 'shadow-lg',
  },
};

// ===================================================================
// BUTTON VARIANTS
// ===================================================================

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'gradient';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  theme?: ThemeColor;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  theme = 'blue',
  size = 'md',
  icon,
  iconPosition = 'right',
  loading = false,
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs rounded-lg',
    md: 'px-6 py-3 text-sm rounded-xl',
    lg: 'px-8 py-4 text-base rounded-2xl',
  };

  const variantClasses: Record<ButtonVariant, string> = {
    primary: cn(
      themeStyles[theme].primary,
      themeStyles[theme].shadow,
      'text-white font-bold transition-all active:scale-95'
    ),
    secondary: cn(
      'bg-white dark:bg-[#1A2133] hover:bg-slate-200 dark:hover:bg-[#2A3143]',
      'text-slate-700 dark:text-slate-300 font-bold transition-all active:scale-95'
    ),
    ghost: cn(
      'bg-transparent hover:bg-slate-100 dark:hover:bg-white/5',
      'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white',
      'font-medium transition-colors'
    ),
    danger: cn(
      'bg-rose-600 hover:bg-rose-500 shadow-lg shadow-rose-500/25',
      'text-white font-bold transition-all active:scale-95'
    ),
    gradient: cn(
      'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400',
      'text-white font-bold transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)]',
      'hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-1 active:scale-95'
    ),
  };

  return (
    <button
      className={cn(
        'flex items-center justify-center gap-2',
        sizeClasses[size],
        variantClasses[variant],
        fullWidth && 'w-full',
        (disabled || loading) && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )}
      {!loading && icon && iconPosition === 'left' && icon}
      {children}
      {!loading && icon && iconPosition === 'right' && icon}
    </button>
  );
}
