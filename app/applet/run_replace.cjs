const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const classesToReplace = {
  'bg-[#070B19]': 'bg-slate-50 dark:bg-[#070B19]',
  'bg-[#070B19]/80': 'bg-slate-50/80 dark:bg-[#070B19]/80',
  'bg-[#0B1221]/80': 'bg-white/80 dark:bg-[#0B1221]/80',
  'bg-[#0B1221]/50': 'bg-slate-50/50 dark:bg-[#0B1221]/50',
  'bg-[#0B1221]/30': 'bg-slate-50/30 dark:bg-[#0B1221]/30',
  'bg-[#0B1221]': 'bg-white dark:bg-[#0B1221]',
  
  'bg-slate-950': 'bg-slate-50 dark:bg-slate-950',
  'bg-slate-900': 'bg-slate-100 dark:bg-slate-900',
  'bg-slate-900/80': 'bg-slate-100/80 dark:bg-slate-900/80',
  'bg-slate-900/50': 'bg-slate-100/50 dark:bg-slate-900/50',
  'bg-slate-900/40': 'bg-slate-100/40 dark:bg-slate-900/40',
  
  'bg-slate-800': 'bg-white dark:bg-slate-800',
  'bg-slate-800/80': 'bg-white/80 dark:bg-slate-800/80',
  'bg-slate-800/60': 'bg-white/60 dark:bg-slate-800/60',
  'bg-slate-800/50': 'bg-white/50 dark:bg-slate-800/50',
  'bg-slate-800/40': 'bg-white/40 dark:bg-slate-800/40',
  
  'bg-slate-700': 'bg-slate-100 dark:bg-slate-700',
  'bg-slate-700/80': 'bg-slate-100/80 dark:bg-slate-700/80',
  
  'hover:bg-slate-800': 'hover:bg-slate-100 dark:hover:bg-slate-800',
  'hover:bg-slate-800/50': 'hover:bg-slate-100/50 dark:hover:bg-slate-800/50',
  'hover:bg-slate-700': 'hover:bg-slate-200 dark:hover:bg-slate-700',
  'hover:bg-slate-700/80': 'hover:bg-slate-200/80 dark:hover:bg-slate-700/80',
  
  'border-slate-800': 'border-slate-200 dark:border-slate-800',
  'border-slate-800/80': 'border-slate-200/80 dark:border-slate-800/80',
  'border-slate-800/60': 'border-slate-200/60 dark:border-slate-800/60',
  
  'border-slate-700': 'border-slate-300 dark:border-slate-700',
  'border-slate-700/80': 'border-slate-300/80 dark:border-slate-700/80',
  'border-slate-700/60': 'border-slate-300/60 dark:border-slate-700/60',
  'border-slate-700/50': 'border-slate-300/50 dark:border-slate-700/50',
  'border-slate-700/30': 'border-slate-300/30 dark:border-slate-700/30',
  
  'border-slate-600': 'border-slate-400 dark:border-slate-600',
  
  'text-slate-400': 'text-slate-500 dark:text-slate-400',
  'text-slate-300': 'text-slate-700 dark:text-slate-300',
  'text-slate-200': 'text-slate-800 dark:text-slate-200',
  'text-slate-100': 'text-slate-900 dark:text-slate-100',
};

html = html.replace(/class="([^"]+)"/g, (match, classString) => {
  let classes = classString.split(/\s+/);
  
  const hasColoredBg = classes.some((c) => 
    c.startsWith('bg-blue-') || c.startsWith('bg-emerald-') || c.startsWith('bg-cyan-') || c.startsWith('bg-indigo-') ||
    c.startsWith('bg-red-') || c.startsWith('bg-rose-') || c.startsWith('bg-gradient-') || c.startsWith('from-blue') || c.startsWith('from-indigo')
  );

  let newClasses = Array.from(new Set(classes.map((c) => {
    if ((c === 'text-white' || c === 'text-slate-100' || c === 'text-slate-200' || c === 'text-slate-300') && hasColoredBg) { return c; }
    if (classesToReplace[c]) { return classesToReplace[c]; }
    if (c === 'text-white') return 'text-slate-900 dark:text-white';
    if (c === 'hover:text-white') return 'hover:text-slate-900 dark:hover:text-white';
    if (c === 'from-slate-900') return 'from-slate-100 dark:from-slate-900';
    if (c === 'to-[#070b19]') return 'to-white dark:to-[#070b19]';
    if (c === 'to-[#0B1221]') return 'to-slate-50 dark:to-[#0B1221]';
    if (c === 'border-white/5') return 'border-black/5 dark:border-white/5';
    if (c === 'border-white/10') return 'border-black/10 dark:border-white/10';
    if (c === 'border-white/20') return 'border-black/20 dark:border-white/20';

    return c;
  })));
  return 'class="' + newClasses.join(' ') + '"';
});

fs.writeFileSync('index.html', html);
console.log('DOM updated successfully!');
