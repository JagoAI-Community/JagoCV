export const LayoutSelection = ({ 
  theme = "blue",
  stepNumber = 5
}: {
  theme?: "blue" | "indigo" | "cyan",
  stepNumber?: number | string
}) => {
  const getThemeColor = () => {
    switch (theme) {
      case "indigo": return "indigo";
      case "cyan": return "cyan";
      default: return "blue";
    }
  };
  
  const t = getThemeColor();
  
  return (
              <div className="rounded-[24px] p-6 border border-slate-200 dark:border-[#2A3143] bg-transparent flex flex-col mt-6">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-md bg-${t}-100 dark:bg-${t}-900/30 flex items-center justify-center text-${t}-600 dark:text-${t}-400 text-xs`}>
                    {stepNumber}
                  </span>
                  Pilih Layout ATS
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                {/* Option 1: Selected */}
                <label className={`relative flex items-center justify-between p-4 border rounded-2xl border-${t}-500 bg-${t}-50 dark:bg-${t}-500/10 cursor-pointer overflow-hidden transition-all filter hover:brightness-110`}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-14 bg-white/50 dark:bg-[#1A2133] rounded border border-slate-300 dark:border-slate-700 flex flex-col gap-1 p-1.5 shrink-0 overflow-hidden">
                      <div className="w-full flex flex-col gap-0.5 items-center">
                        <div className={`w-2/3 h-0.5 bg-${t}-500/50 rounded-sm`}></div>
                        <div className="w-1/2 h-[1px] bg-slate-400/50 rounded-sm"></div>
                      </div>
                      <div className="w-full h-[1px] bg-slate-400/30 rounded-sm mt-0.5"></div>
                      <div className="w-4/5 h-[1px] bg-slate-400/30 rounded-sm"></div>
                      <div className="w-full h-[1px] bg-slate-400/30 rounded-sm mt-0.5"></div>
                      <div className="w-5/6 h-[1px] bg-slate-400/30 rounded-sm"></div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-sm">Layout Standar ATS-Friendly</p>
                      <p className={`text-[10px] text-${t}-600 dark:text-${t}-400 mt-0.5`}>Profesional & Korporat</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 border-${t}-500 flex items-center justify-center shrink-0`}>
                    <div className={`w-2.5 h-2.5 bg-${t}-500 rounded-full`}></div>
                  </div>
                </label>

                {/* Option 2 */}
                <label className="relative flex items-center justify-between p-4 border rounded-2xl border-slate-300 dark:border-[#2A3143] hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 bg-transparent cursor-pointer transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-14 bg-white/50 dark:bg-[#1A2133] rounded border border-slate-300 dark:border-slate-700 flex flex-col gap-0.5 p-1.5 shrink-0 overflow-hidden">
                      <div className="w-full h-[2px] bg-slate-400/50 rounded-sm mb-0.5"></div>
                      <div className="w-full flex flex-row gap-1 flex-1">
                        <div className="flex-1 flex flex-col gap-0.5">
                          <div className="w-full h-[1px] bg-slate-400/30 rounded-sm"></div>
                          <div className="w-4/5 h-[1px] bg-slate-400/30 rounded-sm"></div>
                          <div className="w-full h-[1px] bg-slate-400/30 rounded-sm mt-1"></div>
                        </div>
                        <div className="w-1/3 border-l border-slate-400/20 pl-[1px] flex flex-col gap-0.5">
                           <div className="w-full h-[1px] bg-slate-400/30 rounded-sm"></div>
                           <div className="w-3/4 h-[1px] bg-slate-400/30 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">Layout Tech/Creative</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">Fokus pada Portofolio & Project</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-slate-400 dark:border-slate-600 shrink-0"></div>
                </label>
                
                {/* Option 3 */}
                <label className="relative flex items-center justify-between p-4 border rounded-2xl border-slate-300 dark:border-[#2A3143] hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 bg-transparent cursor-pointer transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-14 bg-white/50 dark:bg-[#1A2133] rounded border border-slate-300 dark:border-slate-700 flex flex-col gap-1 p-1.5 shrink-0 overflow-hidden">
                      <div className="w-full h-[2px] bg-slate-400/60 rounded-sm"></div>
                      <div className="w-full flex justify-between items-center bg-slate-400/10 p-[1px] rounded-sm">
                        <div className="w-1/2 h-[1px] bg-slate-400/50 rounded-sm"></div>
                        <div className="w-1/4 h-[1px] bg-slate-400/30 rounded-sm"></div>
                      </div>
                      <div className="w-full h-[1px] bg-slate-400/30 rounded-sm"></div>
                      <div className="w-full h-[1px] bg-slate-400/30 rounded-sm mt-0.5"></div>
                      <div className="w-4/5 h-[1px] bg-slate-400/30 rounded-sm"></div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">Layout Entry-Level</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">Mahasiswa & Fresh Graduate</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-slate-400 dark:border-slate-600 shrink-0"></div>
                </label>

                {/* Option 4 */}
                <label className="relative flex items-center justify-between p-4 border rounded-2xl border-slate-300 dark:border-[#2A3143] hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 bg-transparent cursor-pointer transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-14 bg-white/50 dark:bg-[#1A2133] rounded border border-slate-300 dark:border-slate-700 flex flex-col gap-1 p-1.5 shrink-0 overflow-hidden">
                      <div className="w-1/2 h-[2px] bg-slate-400/50 rounded-sm"></div>
                      <div className="w-full flex flex-row gap-1 flex-1">
                        <div className="w-1/2 flex flex-col gap-[2px]">
                           <div className="w-full h-[1px] bg-slate-400/30 rounded-sm"></div>
                           <div className="w-full h-[1px] bg-slate-400/30 rounded-sm"></div>
                           <div className="w-4/5 h-[1px] bg-slate-400/30 rounded-sm mt-0.5"></div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-[2px]">
                           <div className="w-full h-[1px] bg-slate-400/30 rounded-sm"></div>
                           <div className="w-4/5 h-[1px] bg-slate-400/30 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">Layout Modern <br />Dua Kolom</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">The All-Rounder</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-slate-400 dark:border-slate-600 shrink-0"></div>
                </label>

                {/* Option 5 */}
                <label className="relative flex items-center justify-between p-4 border rounded-2xl border-slate-300 dark:border-[#2A3143] hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 bg-transparent cursor-pointer transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-14 bg-white/50 dark:bg-[#1A2133] rounded border border-slate-300 dark:border-slate-700 flex flex-col gap-[2px] p-1.5 shrink-0 overflow-hidden">
                      <div className="w-full h-[2px] bg-slate-400/50 rounded-sm mb-0.5"></div>
                      <div className="w-full h-[1px] bg-slate-400/30 rounded-sm mb-[2px]"></div>
                      <div className="w-1/3 h-[2px] bg-slate-400/40 rounded-sm mb-0.5"></div>
                      <div className="flex flex-row gap-[2px] mb-[2px]">
                         <div className="w-1/3 h-[1px] bg-slate-400/30 rounded-sm"></div>
                         <div className="w-1/3 h-[1px] bg-slate-400/30 rounded-sm"></div>
                         <div className="w-1/3 h-[1px] bg-slate-400/30 rounded-sm"></div>
                      </div>
                      <div className="w-full h-[1px] bg-slate-400/30 rounded-sm"></div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">Layout Fungsional</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">Skill-Based</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-slate-400 dark:border-slate-600 shrink-0"></div>
                </label>

                {/* Option 6 */}
                <label className="relative flex items-center justify-between p-4 border rounded-2xl border-slate-300 dark:border-[#2A3143] hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 bg-transparent cursor-pointer transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-14 bg-white/50 dark:bg-[#1A2133] rounded border border-slate-300 dark:border-slate-700 flex flex-col gap-0.5 p-1.5 shrink-0 overflow-hidden">
                      <div className="w-2/3 h-[2px] bg-slate-400/60 rounded-sm mx-auto mb-[2px]"></div>
                      <div className="w-1/2 h-[1px] bg-slate-400/30 rounded-sm mx-auto mb-[2px]"></div>
                      <div className="flex flex-row justify-between w-full mb-0.5">
                        <div className="w-[45%] h-[1px] bg-slate-400/50 rounded-sm"></div>
                        <div className="w-[30%] h-[1px] bg-slate-400/30 rounded-sm"></div>
                      </div>
                      <div className="w-full pl-[2px] border-l border-slate-400/30 flex flex-col gap-[2px]">
                        <div className="w-full h-[1px] bg-slate-400/30 rounded-sm"></div>
                        <div className="w-4/5 h-[1px] bg-slate-400/30 rounded-sm"></div>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">Layout Akademik <br />& Riset</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">True Curriculum Vitae</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-slate-400 dark:border-slate-600 shrink-0"></div>
                </label>

                {/* Option 7 */}
                <label className="relative flex items-center justify-between p-4 border rounded-2xl border-slate-300 dark:border-[#2A3143] hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 bg-transparent cursor-pointer transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-14 bg-white/50 dark:bg-[#1A2133] rounded border border-slate-300 dark:border-slate-700 flex flex-col gap-0.5 p-1.5 shrink-0 overflow-hidden">
                      <div className="flex justify-between items-center w-full mb-[2px] border-b border-slate-400/20 pb-[2px]">
                        <div className="w-1/2 h-[2px] bg-slate-400/60 rounded-sm"></div>
                        <div className="w-1/4 h-[1px] bg-slate-400/30 rounded-sm"></div>
                      </div>
                      <div className="w-full h-[1px] bg-slate-400/30 rounded-sm mb-0.5"></div>
                      <div className="w-5/6 h-[1px] bg-slate-400/30 rounded-sm mb-[2px]"></div>
                      <div className="flex flex-row gap-[2px] w-full">
                        <div className="w-1/3 h-[1px] bg-slate-400/40 rounded-sm mt-[1px]"></div>
                        <div className="flex-1 flex flex-col gap-[2px]">
                          <div className="w-full h-[1px] bg-slate-400/30 rounded-sm"></div>
                          <div className="w-full h-[1px] bg-slate-400/30 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">Layout Executive</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">Manager & Leadership</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-slate-400 dark:border-slate-600 shrink-0"></div>
                </label>

                {/* Option 8 */}
                <label className="relative flex items-center justify-between p-4 border rounded-2xl border-slate-300 dark:border-[#2A3143] hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 bg-transparent cursor-pointer transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-14 bg-white/50 dark:bg-[#1A2133] rounded border border-slate-300 dark:border-slate-700 flex flex-col gap-[2px] p-1.5 shrink-0 overflow-hidden">
                      <div className="w-2/3 h-[2px] bg-slate-400/50 rounded-sm mb-0.5"></div>
                      <div className="flex flex-row gap-[2px] flex-1">
                         <div className="flex-1 bg-slate-400/30 rounded-sm"></div>
                         <div className="flex-1 bg-slate-400/30 rounded-sm"></div>
                      </div>
                      <div className="flex flex-row gap-[2px] flex-1">
                         <div className="flex-1 bg-slate-400/30 rounded-sm"></div>
                         <div className="flex-1 bg-slate-400/30 rounded-sm"></div>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">Layout Portofolio <br />Galeri</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">Visual-Heavy</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-slate-400 dark:border-slate-600 shrink-0"></div>
                </label>
              </div>
              </div>
  )
}
