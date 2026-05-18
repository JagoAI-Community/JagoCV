import React from 'react';
import { cn } from '../../utils/cn';
import type { ThemeColor, WizardStep } from '../../types/enums';

// ===================================================================
// THEME COLOR MAPS
// ===================================================================

const themeColors: Record<ThemeColor, {
  activeBg: string;
  activeShadow: string;
  completedBg: string;
  completedShadow: string;
  activeText: string;
  completedText: string;
}> = {
  blue: {
    activeBg: 'bg-[#1E5EFF]',
    activeShadow: 'shadow-[0_0_15px_rgba(37,99,235,0.5)]',
    completedBg: 'bg-[#1E5EFF]',
    completedShadow: 'shadow-[0_0_10px_rgba(37,99,235,0.3)]',
    activeText: 'text-[#1E5EFF] dark:text-blue-400',
    completedText: 'text-[#1E5EFF] dark:text-blue-400',
  },
  indigo: {
    activeBg: 'bg-indigo-500',
    activeShadow: 'shadow-[0_0_15px_rgba(99,102,241,0.5)]',
    completedBg: 'bg-indigo-500',
    completedShadow: 'shadow-[0_0_10px_rgba(99,102,241,0.3)]',
    activeText: 'text-indigo-500 dark:text-indigo-400',
    completedText: 'text-indigo-500 dark:text-indigo-400',
  },
  cyan: {
    activeBg: 'bg-cyan-500',
    activeShadow: 'shadow-[0_0_15px_rgba(6,182,212,0.5)]',
    completedBg: 'bg-cyan-500',
    completedShadow: 'shadow-[0_0_10px_rgba(6,182,212,0.3)]',
    activeText: 'text-cyan-500 dark:text-cyan-400',
    completedText: 'text-cyan-500 dark:text-cyan-400',
  },
};

const progressBarColors: Record<ThemeColor, string> = {
  blue: 'bg-[#1E5EFF] shadow-[0_0_10px_rgba(37,99,235,0.5)]',
  indigo: 'bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]',
  cyan: 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]',
};

// ===================================================================
// CHECK ICON SVG
// ===================================================================

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

// ===================================================================
// WIZARD PROGRESS COMPONENT
// ===================================================================

interface WizardProgressProps {
  steps: WizardStep[];
  currentStep: number;
  theme: ThemeColor;
  className?: string;
}

export default function WizardProgress({
  steps,
  currentStep,
  theme,
  className,
}: WizardProgressProps) {
  const totalSteps = steps.length;
  const progressPercent = totalSteps > 1 ? ((currentStep - 1) / (totalSteps - 1)) * 100 : 0;
  const colors = themeColors[theme];

  return (
    <div className={cn('w-full mb-8 pt-4', className)}>
      <div className="flex items-center justify-between relative">
        {/* Background track */}
        <div className="absolute left-0 top-5 -translate-y-1/2 w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full z-0" />
        
        {/* Progress fill */}
        <div
          className={cn(
            'absolute left-0 top-5 -translate-y-1/2 h-1.5 rounded-full z-0 transition-all duration-700 ease-out',
            progressBarColors[theme]
          )}
          style={{ width: `${progressPercent}%` }}
        />

        {/* Step indicators */}
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;
          const isFuture = stepNumber > currentStep;

          return (
            <div
              key={stepNumber}
              className="relative z-10 flex flex-col items-center gap-2 group"
            >
              {/* Circle */}
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500',
                  isCompleted && cn(colors.completedBg, 'text-white', colors.completedShadow, 'scale-100'),
                  isActive && cn(colors.activeBg, 'text-white', colors.activeShadow, 'scale-110'),
                  isFuture && 'bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-400 scale-100'
                )}
              >
                {isCompleted ? <CheckIcon /> : stepNumber}
              </div>

              {/* Label */}
              <span
                className={cn(
                  'text-[11px] font-bold mt-1 transition-colors uppercase tracking-wider',
                  isCompleted && cn(colors.completedText, 'hidden sm:block'),
                  isActive && cn(colors.activeText, 'block'),
                  isFuture && 'text-slate-400 hidden sm:block'
                )}
              >
                {step.shortLabel || step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
