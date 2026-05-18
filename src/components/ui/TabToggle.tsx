import React from 'react';
import { cn } from '../../utils/cn';
import type { ThemeColor } from '../../types/enums';

// ===================================================================
// THEME STYLES
// ===================================================================

const activeStyles: Record<ThemeColor, string> = {
  blue: 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] text-white',
  indigo: 'bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.4)] text-white',
  cyan: 'bg-cyan-600 shadow-[0_0_15px_rgba(8,145,178,0.4)] text-white',
};

const aiIconColors: Record<ThemeColor, string> = {
  blue: 'text-[#1E5EFF]',
  indigo: 'text-indigo-500',
  cyan: 'text-cyan-500',
};

// ===================================================================
// TAB TOGGLE COMPONENT
// ===================================================================

interface TabToggleProps {
  mode: 'manual' | 'ai';
  onModeChange: (mode: 'manual' | 'ai') => void;
  theme?: ThemeColor;
  manualLabel?: string;
  aiLabel?: string;
  className?: string;
}

export default function TabToggle({
  mode,
  onModeChange,
  theme = 'blue',
  manualLabel = 'Form Manual',
  aiLabel = 'Otomatis via AI',
  className,
}: TabToggleProps) {
  const inactiveClasses = 'text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white';

  return (
    <div
      className={cn(
        'rounded-[16px] p-1.5 border border-slate-200 dark:border-[#2A3143]',
        'flex items-center mb-2',
        'bg-white/80 dark:bg-[#0B1221]/80',
        className
      )}
    >
      {/* Manual tab */}
      <button
        type="button"
        onClick={() => onModeChange('manual')}
        className={cn(
          'flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all',
          mode === 'manual' ? activeStyles[theme] : inactiveClasses
        )}
      >
        {manualLabel}
      </button>

      {/* AI tab */}
      <button
        type="button"
        onClick={() => onModeChange('ai')}
        className={cn(
          'flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 group',
          mode === 'ai' ? activeStyles[theme] : inactiveClasses
        )}
      >
        <svg
          className={cn('w-4 h-4 group-hover:animate-pulse', mode === 'ai' ? 'text-white' : aiIconColors[theme])}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
        {aiLabel}
      </button>
    </div>
  );
}
