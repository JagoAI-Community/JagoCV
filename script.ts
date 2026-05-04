import fs from 'fs';
const files = ['src/components/views/DesignResumeView.tsx', 'src/components/views/BuildPortfolioView.tsx'];
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/bg-slate-100 dark:bg-\[#0B1221\]\/50 border border-slate-300 dark:border-slate-700\/80/g, 'bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143]');
  content = content.replace(/bg-slate-100 dark:bg-\[#0B1221\]\/50 border border-slate-300 dark:border-slate-700/g, 'bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143]');
  content = content.replace(/bg-slate-100 dark:bg-\[#0B1221\]\/50/g, 'bg-white dark:bg-[#1A2133]');
  content = content.replace(/bg-slate-100 dark:bg-\[#0B1221\]\/30/g, 'bg-white dark:bg-[#1A2133]');
  
  // Format step cards to look like CV builder
  content = content.replace(/dash-card rounded-3xl p-6 md:p-8/g, 'rounded-[24px] p-6 md:p-8 border border-slate-200 dark:border-[#2A3143] bg-transparent');
  content = content.replace(/dash-card rounded-3xl p-6 border-slate-200 dark:border-slate-800/g, 'rounded-[24px] p-6 border border-slate-200 dark:border-[#2A3143] bg-transparent');
  content = content.replace(/dash-card rounded-2xl p-1.5/g, 'rounded-[16px] p-1.5 border border-slate-200 dark:border-[#2A3143] bg-transparent');
  
  fs.writeFileSync(file, content);
}
console.log('Done replacement');
