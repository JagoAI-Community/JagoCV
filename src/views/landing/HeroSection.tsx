import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20">
      <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest mb-8 animate-[slideDown_0.5s_ease_forwards] backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
          Asisten Karir AI Cerdas
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tighter mb-6 leading-[1.1] animate-[slideDown_0.6s_ease_forwards]">
          Rancang Masa Depanmu,<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300">Mulai dari CV Hebat.</span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mb-12 animate-[slideDown_0.7s_ease_forwards] font-light">
          Buat CV berstandar industri dengan mudah, kelola portofolio lebih cepat, dan temukan peluang kerja terbaik—semuanya didukung oleh AI.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-5 animate-[slideDown_0.8s_ease_forwards]">
          <button id="btn-launch-app" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-lg shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all flex items-center gap-3 w-full sm:w-auto justify-center">
            Mulai Sekarang
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
          <a href="#features" className="px-8 py-4 bg-white/80 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 backdrop-blur-sm border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-2xl font-semibold text-lg transition-all flex items-center gap-3 w-full sm:w-auto justify-center group">
            <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center group-hover:bg-slate-300 dark:group-hover:bg-slate-600 transition-colors">
              <svg className="w-3 h-3 ml-0.5 text-slate-700 dark:text-slate-300" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
            Lihat Demo
          </a>
        </div>

        {/* Hero Mockups Gallery */}
        <div className="mt-24 w-full max-w-6xl relative h-80 md:h-[400px] flex justify-center items-end animate-[fadeIn_1s_ease_forwards_0.5s] pointer-events-none">
          {/* Left: ATS CV */}
          <div className="absolute left-0 -bottom-24 md:left-[10%] w-[280px] h-[440px] bg-slate-50 dark:bg-[#0f172a] rounded-t-2xl border-t border-x border-slate-300/80 dark:border-slate-700/80 shadow-2xl skew-y-3 -rotate-6 origin-bottom-right transition-transform duration-700 overflow-hidden z-10 opacity-70">
            <div className="w-full h-2 bg-blue-500" />
            <div className="p-6 space-y-4">
              <div className="text-center border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="w-3/4 h-5 bg-slate-100 dark:bg-slate-700 mx-auto rounded mb-3" />
                <div className="w-1/2 h-3 bg-white dark:bg-slate-800 mx-auto rounded" />
              </div>
              <div className="w-32 h-3 bg-slate-100 dark:bg-slate-700 rounded mb-2" />
              <div className="w-full h-2 bg-white dark:bg-slate-800 rounded" />
              <div className="w-full h-2 bg-white dark:bg-slate-800 rounded" />
              <div className="w-5/6 h-2 bg-white dark:bg-slate-800 rounded" />
            </div>
          </div>

          {/* Center: Portfolio */}
          <div className="absolute -bottom-24 w-[80%] md:w-[600px] h-[460px] md:h-[500px] bg-gradient-to-br from-slate-100 dark:from-slate-900 to-white dark:to-[#070b19] rounded-t-2xl border-t-2 border-x-2 border-blue-500/50 shadow-[0_-20px_50px_rgba(37,99,235,0.2)] z-30 transition-transform duration-700 overflow-hidden flex flex-col">
            <div className="w-full h-12 bg-slate-100/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 flex items-center px-4 gap-2">
              <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/80" /><div className="w-3 h-3 rounded-full bg-amber-500/80" /><div className="w-3 h-3 rounded-full bg-green-500/80" /></div>
              <div className="mx-auto w-1/2 h-6 bg-slate-50 dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-800 flex items-center justify-center"><div className="w-32 h-2 bg-white dark:bg-slate-800 rounded" /></div>
            </div>
            <div className="relative flex-1 p-8 flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
              <div className="w-24 h-24 rounded-full bg-blue-500/20 border-2 border-blue-500/40 mb-6 backdrop-blur-sm" />
              <div className="w-64 h-8 bg-slate-100/90 rounded-lg mb-4" />
              <div className="w-96 h-4 bg-slate-400/60 rounded mb-8" />
              <div className="w-full grid grid-cols-3 gap-4">
                <div className="h-24 bg-white/80 dark:bg-slate-800/80 rounded border border-slate-300 dark:border-slate-700" />
                <div className="h-24 bg-white/80 dark:bg-slate-800/80 rounded border border-slate-300 dark:border-slate-700" />
                <div className="h-24 bg-white/80 dark:bg-slate-800/80 rounded border border-slate-300 dark:border-slate-700" />
              </div>
            </div>
          </div>

          {/* Right: Visual Resume */}
          <div className="absolute right-0 -bottom-24 md:right-[10%] w-[280px] h-[440px] bg-slate-100 dark:bg-slate-900 rounded-t-2xl border-t border-x border-slate-300/80 dark:border-slate-700/80 shadow-2xl -skew-y-3 rotate-6 origin-bottom-left transition-transform duration-700 overflow-hidden z-20 opacity-80">
            <div className="w-full h-full flex">
              <div className="w-1/3 h-full bg-white dark:bg-slate-800 border-r border-slate-300 dark:border-slate-700 p-4 flex flex-col items-center">
                <div className="w-12 h-12 bg-slate-600 rounded-full mb-4" />
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded mb-2" />
                <div className="w-3/4 h-2 bg-slate-100 dark:bg-slate-700 rounded" />
              </div>
              <div className="w-2/3 p-4 space-y-4">
                <div className="w-full h-8 bg-blue-500/20 rounded" />
                <div className="space-y-2">
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded" />
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded" />
                  <div className="w-4/5 h-2 bg-slate-100 dark:bg-slate-700 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
