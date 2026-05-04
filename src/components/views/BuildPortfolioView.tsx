import React, { useState } from 'react';
import { LayoutSelection } from './LayoutSelection';

export default function BuildPortfolioView() {
  const [aiStep, setAiStep] = useState(1);

  return (
    <>
      <div id="view-build-portfolio" className="hidden animate-[fadeIn_0.5s_ease_forwards]">
        
        <button id="btn-back-dashboard-portfolio" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white mb-6 transition-colors font-medium text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Kembali ke Dasbor
        </button>

        {/* Builder Header */}
        <header className="mb-8 pb-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-[10px] font-bold uppercase tracking-wider mb-3">Live Web Page</div>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">Buat Web Portofolio Anda</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl">Buat landing page portofolio yang indah dan responsif untuk menampilkan proyek, resume, dan media sosial Anda. Deploi langsung ke tautan singkat.</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white rounded-xl font-medium text-sm transition-all shadow-sm shrink-0">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
            Impor Repositori GitHub
          </button>
        </header>

        {/* Stacked Layout on mobile, Two columns on desktop */}
        <div className="flex flex-col lg:flex-row gap-10 items-start w-full">
          
          {/* Left Col: Form Inputs */}
          <div className="w-full lg:w-1/2 space-y-6 flex flex-col">
            
            {/* Input Mode Toggle (Portfolio) */}
            <div className="rounded-[16px] p-1.5 border border-slate-200 dark:border-[#2A3143] bg-transparent flex items-center mb-2 bg-white/80 dark:bg-[#0B1221]/80 border-slate-200 dark:border-slate-800">
              <button id="tab-portfolio-manual" className="flex-1 py-2.5 rounded-xl bg-cyan-600 shadow-[0_0_15px_rgba(8,145,178,0.4)] text-white text-sm font-semibold transition-all">Form Manual</button>
              <button id="tab-portfolio-ai" className="flex-1 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group">
                <svg className="w-4 h-4 text-cyan-500 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                Arsitek Portofolio AI
              </button>
            </div>

            {/* CONTAINER: MANUAL FORMS (PORTFOLIO) */}
            <div id="container-portfolio-manual" className="space-y-6 block animate-[fadeIn_0.3s_ease_forwards]">
            
                                      {/* Wizard Progress Animation */}
            <div id="portfolio-wizard-progress" className="w-full mb-8 pt-4">
              <div className="flex items-center justify-between relative">
                <div className="absolute left-0 top-5 -translate-y-1/2 w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full z-0"></div>
                <div id="portfolio-progress-bar" className="absolute left-0 top-5 -translate-y-1/2 h-1.5 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] rounded-full z-0 transition-all duration-700 ease-out w-0"></div>
                
                <div className="relative z-10 flex flex-col items-center gap-2 group portfolio-step-indicator active" id="portfolio-indicator-step-1" data-step="1">
                  <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-500 scale-110">1</div>
                  <span className="text-[11px] font-bold text-cyan-500 mt-1 transition-colors uppercase tracking-wider">Profil</span>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-2 group portfolio-step-indicator" id="portfolio-indicator-step-2" data-step="2">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-400 flex items-center justify-center font-bold text-sm transition-all duration-500">2</div>
                  <span className="text-[11px] font-bold text-slate-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block">Tautan</span>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-2 group portfolio-step-indicator" id="portfolio-indicator-step-3" data-step="3">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-400 flex items-center justify-center font-bold text-sm transition-all duration-500">3</div>
                  <span className="text-[11px] font-bold text-slate-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block">Proyek</span>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-2 group portfolio-step-indicator" id="portfolio-indicator-step-4" data-step="4">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-400 flex items-center justify-center font-bold text-sm transition-all duration-500">4</div>
                  <span className="text-[11px] font-bold text-slate-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block">Riwayat</span>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-2 group portfolio-step-indicator" id="portfolio-indicator-step-5" data-step="5">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-400 flex items-center justify-center font-bold text-sm transition-all duration-500">5</div>
                  <span className="text-[11px] font-bold text-slate-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block">Gaya</span>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-2 group portfolio-step-indicator" id="portfolio-indicator-step-6" data-step="6">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-400 flex items-center justify-center font-bold text-sm transition-all duration-500">6</div>
                  <span className="text-[11px] font-bold text-slate-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block">Selesai</span>
                </div>
              </div>
            </div>
              {/* Profile & Subdomain */}
              <div id="portfolio-step-1" className="portfolio-step block rounded-[24px] p-6 md:p-8 border border-slate-200 dark:border-[#2A3143] bg-transparent">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-xs">1</span>
                  Atur Tautan & Identitas
                </h2>
                
                <div className="flex flex-col gap-6 mb-6">
                  {/* Image Uploads */}
                  <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                    {/* Photo Upload */}
                    <label className="flex flex-col items-center justify-center w-32 h-32 rounded-full border-2 border-dashed border-slate-300 dark:border-slate-700/80 bg-slate-50 dark:bg-[#0B1221]/30 hover:bg-slate-100 dark:hover:bg-white/5 hover:border-cyan-500 cursor-pointer transition-all group shrink-0 relative overflow-hidden">
                      <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" title="Unggah Foto Profil" />
                      <svg className="w-8 h-8 text-slate-400 group-hover:text-cyan-500 mb-2 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                      <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap">Foto Profil</span>
                    </label>
                    {/* Banner Upload */}
                    <label className="flex flex-col items-center justify-center w-full h-32 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700/80 bg-slate-50 dark:bg-[#0B1221]/30 hover:bg-slate-100 dark:hover:bg-white/5 hover:border-cyan-500 cursor-pointer transition-all group relative overflow-hidden">
                      <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" title="Unggah Sampul/Banner" />
                      <svg className="w-8 h-8 text-slate-400 group-hover:text-cyan-500 mb-2 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0V20a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h10l4 4v10z"></path></svg>
                      <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap">Gambar Banner (Opsional)</span>
                    </label>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tautan Kustom Anda *</label>
                      <div className="flex items-center">
                         <span className="bg-white/80 dark:bg-[#0B1221]/80 border border-slate-300 dark:border-slate-700/80 border-r-0 rounded-l-xl px-3 py-3 text-sm text-slate-500 font-medium whitespace-nowrap">jagocv.link/</span>
                         <input type="text" placeholder="johndoe" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-slate-700/80 rounded-r-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Judul Profil / Peran</label>
                      <input type="text" placeholder="John Doe | Developer" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Lokasi</label>
                      <input type="text" placeholder="Jakarta, Indonesia" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Emoji Aksen</label>
                      <input type="text" placeholder="🚀" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Bio Singkat (Slogan)</label>
                    <textarea rows="2" placeholder="Membangun aplikasi web keren dan mempelajari AI..." className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"></textarea>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tentang Saya (Lengkap)</label>
                    <textarea rows="4" placeholder="Ceritakan lebih detail tentang perjalanan karir Anda, passion, dan apa yang sedang Anda cari..." className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"></textarea>
                  </div>
                </div>
                <div className="flex justify-end mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/50"><button type="button" onClick={() => { (window as any).goToPortfolioStep(2) }} className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 active:scale-95">Selanjutnya <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button></div>
              </div>

              {/* Links & Digital Real Estate */}
              <div id="portfolio-step-2" className="portfolio-step hidden rounded-[24px] p-6 md:p-8 border border-slate-200 dark:border-[#2A3143] bg-transparent mt-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-xs">2</span>
                    Tautan Penting
                  </h2>
                  <button className="text-xs font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 flex items-center gap-1 bg-cyan-100 dark:bg-cyan-900/20 hover:bg-cyan-200 dark:hover:bg-cyan-900/40 px-2.5 py-1.5 rounded-lg transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                    Tambah Tautan
                  </button>
                </div>
                
                <div className="space-y-3">
                   {/* Link Item 1 */}
                   <div className="flex items-center gap-3 bg-white dark:bg-transparent border border-slate-300/50 dark:border-slate-700/50 rounded-xl p-3 relative group">
                      <div className="cursor-move text-slate-500 hover:text-slate-300 px-1 shrink-0"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path></svg></div>
                      <input type="text" placeholder="Judul (contoh: GitHub)" defaultValue="Lihat GitHub Saya" className="w-1/3 bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-600 outline-none" />
                      <input type="url" placeholder="URL (https://github.com/...)" defaultValue="https://github.com/johndoe" className="flex-1 bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 placeholder-slate-600 outline-none" />
                   </div>
                   {/* Link Item 2 */}
                   <div className="flex items-center gap-3 bg-white dark:bg-[#1A2133] border border-slate-300/50 dark:border-slate-700/50 rounded-xl p-3 relative group">
                      <div className="cursor-move text-slate-500 hover:text-slate-300 px-1 shrink-0"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path></svg></div>
                      <input type="text" placeholder="Judul (contoh: LinkedIn)" defaultValue="Terhubung di LinkedIn" className="w-1/3 bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-600 outline-none" />
                      <input type="url" placeholder="URL (https://linkedin.com/...)" className="flex-1 bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 placeholder-slate-600 outline-none" />
                   </div>
                </div>
                <div className="flex justify-between mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/50"><button type="button" onClick={() => { (window as any).goToPortfolioStep(1) }} className="bg-white dark:bg-[#1A2133] hover:bg-slate-200 dark:hover:bg-[#1A2133] text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 active:scale-95"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> Sebelumnya</button><button type="button" onClick={() => { (window as any).goToPortfolioStep(3) }} className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 active:scale-95">Selanjutnya <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button></div>
              </div>

              {/* Proyek Unggulan */}
              <div id="portfolio-step-3" className="portfolio-step hidden rounded-[24px] p-6 md:p-8 border border-slate-200 dark:border-[#2A3143] bg-transparent mt-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-xs">3</span>
                    Proyek Unggulan
                  </h2>
                  <button className="text-xs font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 flex items-center gap-1 bg-cyan-100 dark:bg-cyan-900/20 hover:bg-cyan-200 dark:hover:bg-cyan-900/40 px-2.5 py-1.5 rounded-lg transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                    Tambah Proyek
                  </button>
                </div>
                
                <div className="space-y-4">
                   {/* Proyek 1 */}
                   <div className="bg-slate-50 dark:bg-[#0B1221]/40 border border-slate-300/50 dark:border-slate-700/50 rounded-2xl p-4 relative group">
                      <div className="flex flex-col gap-4">
                         <div className="flex gap-4">
                            <div className="w-16 h-16 rounded-xl bg-slate-200 dark:bg-slate-800 border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-slate-400 hover:text-cyan-500 hover:border-cyan-500 cursor-pointer transition-colors shrink-0">
                               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            </div>
                            <div className="flex-1 space-y-3">
                               <input type="text" placeholder="Nama Proyek (misal: Taskify App)" className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-200 outline-none" />
                               <input type="url" placeholder="Tautan Proyek (opsional)" className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-200 outline-none" />
                            </div>
                         </div>
                         <textarea rows="2" placeholder="Deskripsi singkat proyek Anda..." className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-200 outline-none resize-none"></textarea>
                       </div>
                    </div>
                 </div>
                 <div className="flex justify-between mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/50"><button type="button" onClick={() => { (window as any).goToPortfolioStep(2) }} className="bg-white dark:bg-[#1A2133] hover:bg-slate-200 dark:hover:bg-[#1A2133] text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 active:scale-95"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> Sebelumnya</button><button type="button" onClick={() => { (window as any).goToPortfolioStep(4) }} className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 active:scale-95">Selanjutnya <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button></div>
              </div>

              {/* Pengalaman & Edukasi Terperinci */}
              <div id="portfolio-step-4" className="portfolio-step hidden rounded-[24px] p-6 md:p-8 border border-slate-200 dark:border-[#2A3143] bg-transparent mt-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-xs">4</span>
                    Pengalaman & Edukasi Terperinci
                  </h2>
                  <button className="text-xs font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 flex items-center gap-1 bg-cyan-100 dark:bg-cyan-900/20 hover:bg-cyan-200 dark:hover:bg-cyan-900/40 px-2.5 py-1.5 rounded-lg transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                    Tambah Riwayat
                  </button>
                </div>
                
                <div className="space-y-4 mb-6">
                   {/* Pengalaman 1 */}
                   <div className="bg-slate-50 dark:bg-[#0B1221]/40 border border-slate-300/50 dark:border-slate-700/50 rounded-2xl p-4 relative group">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                         <input type="text" placeholder="Posisi / Gelar" className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-200 outline-none" />
                         <input type="text" placeholder="Perusahaan / Institusi" className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-200 outline-none" />
                         <input type="text" placeholder="Tahun (misal: 2022 - Sekarang)" className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-200 outline-none sm:col-span-2" />
                      </div>
                      <textarea rows="2" placeholder="Deskripsi peran atau pencapaian..." className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 rounded-lg px-3 py-2 text-sm text-slate-800 dark:text-slate-200 outline-none resize-none"></textarea>
                   </div>
                </div>

                <div className="space-y-1.5 border-t border-slate-200 dark:border-slate-700/50 pt-5">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Keterampilan Utama (Pisahkan dengan koma)</label>
                  <input type="text" placeholder="React, Node.js, Problem Solving, Public Speaking" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all" />
                </div>
                <div className="flex justify-between mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/50"><button type="button" onClick={() => { (window as any).goToPortfolioStep(3) }} className="bg-white dark:bg-[#1A2133] hover:bg-slate-200 dark:hover:bg-[#1A2133] text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 active:scale-95"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> Sebelumnya</button><button type="button" onClick={() => { (window as any).goToPortfolioStep(5) }} className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 active:scale-95">Selanjutnya <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button></div>
              </div>
              
              {/* Gaya & Visual */}
              <div id="portfolio-step-5" className="portfolio-step hidden rounded-[24px] p-6 md:p-8 border border-slate-200 dark:border-[#2A3143] bg-transparent mt-6">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-xs">5</span>
                  Gaya & Visual Custom
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-3">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Warna Aksen Berkas</label>
                    <div className="flex items-center gap-3">
                      <button className="w-8 h-8 rounded-full bg-blue-500 ring-2 ring-offset-2 ring-blue-500 dark:ring-offset-[#0B1221] shadow-sm"></button>
                      <button className="w-8 h-8 rounded-full bg-indigo-500 hover:scale-110 transition-transform shadow-sm"></button>
                      <button className="w-8 h-8 rounded-full bg-rose-500 hover:scale-110 transition-transform shadow-sm"></button>
                      <button className="w-8 h-8 rounded-full bg-emerald-500 hover:scale-110 transition-transform shadow-sm"></button>
                      <button className="w-8 h-8 rounded-full bg-amber-500 hover:scale-110 transition-transform shadow-sm"></button>
                      <button className="w-8 h-8 rounded-full bg-slate-900 dark:bg-slate-300 border border-slate-300 dark:border-slate-600 hover:scale-110 transition-transform shadow-sm"></button>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Keluarga Font Tema</label>
                    <div className="relative">
                      <select className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 pr-10 text-sm text-slate-800 dark:text-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all appearance-none cursor-pointer">
                        <option value="modern">Modern (Inter, Roboto)</option>
                        <option value="elegant">Elegan (Playfair, Serif)</option>
                        <option value="tech">Teknologi (Mono, Code)</option>
                        <option value="playful">Ceria (Rounded, Pop)</option>
                      </select>
                      <svg className="w-5 h-5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/50"><button type="button" onClick={() => { (window as any).goToPortfolioStep(4) }} className="bg-white dark:bg-[#1A2133] hover:bg-slate-200 dark:hover:bg-[#1A2133] text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 active:scale-95"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> Sebelumnya</button><button type="button" onClick={() => { (window as any).goToPortfolioStep(6) }} className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 active:scale-95">Selanjutnya <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button></div>
              </div>

          {/* Right Col: Template Select & Generate */}
          <div id="portfolio-step-6" className="portfolio-step hidden w-full">
            <div className="grid grid-cols-1 gap-6">

              {/* Pilih Layout Column */}
              <div className="rounded-[24px] p-6 border border-slate-200 dark:border-[#2A3143] bg-transparent flex flex-col mt-6">
                <h2 className="text-base font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Gaya Tata Letak</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                {/* Option 1: Selected */}
                <label className="relative flex items-center justify-between p-4 border rounded-2xl border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20 cursor-pointer overflow-hidden transition-all filter hover:brightness-110 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-14 bg-white/10 rounded border border-black/20 dark:border-white/20 flex flex-col gap-1 p-1.5 shrink-0 overflow-hidden">
                       <div className="w-full h-1/3 bg-cyan-400/40 rounded-sm"></div>
                       <div className="flex flex-row gap-1 flex-1">
                          <div className="w-1/2 bg-white/20 rounded-sm"></div>
                          <div className="w-1/2 bg-white/20 rounded-sm"></div>
                       </div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-sm">Bento Gelap</p>
                      <p className="text-[10px] text-cyan-600 dark:text-cyan-300 mt-0.5">Grid blok modern</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-cyan-500 flex items-center justify-center shrink-0">
                    <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full"></div>
                  </div>
                </label>

                {/* Option 2 */}
                <label className="relative flex items-center justify-between p-4 border rounded-2xl border-slate-300 dark:border-slate-700 hover:border-slate-500 bg-white dark:bg-[#1A2133] cursor-pointer transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-14 bg-slate-200 dark:bg-[#1E293B] rounded border border-slate-300 dark:border-slate-700 flex flex-col items-center gap-1.5 p-1.5 shrink-0 bg-gradient-to-b from-indigo-100 to-slate-50 dark:from-indigo-900/50 dark:to-[#0B1221]">
                       <div className="w-4 h-4 bg-indigo-500/50 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
                       <div className="w-3/4 h-1.5 bg-indigo-400/40 rounded-full shadow-[0_0_5px_rgba(99,102,241,0.3)]"></div>
                       <div className="w-full h-1.5 bg-indigo-400/40 rounded-full mt-1 shadow-[0_0_5px_rgba(99,102,241,0.3)]"></div>
                       <div className="w-full h-1.5 bg-indigo-400/40 rounded-full shadow-[0_0_5px_rgba(99,102,241,0.3)]"></div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">Linktree Neon</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">Tumpukan klasik kilau cyberpunk</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-slate-400 dark:border-slate-600 shrink-0"></div>
                </label>

                {/* Option 3 (New: Classic Linktree) */}
                <label className="relative flex items-center justify-between p-4 border rounded-2xl border-slate-300 dark:border-slate-700 hover:border-slate-500 bg-white dark:bg-[#1A2133] cursor-pointer transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-14 bg-white rounded border border-slate-200 flex flex-col items-center gap-1.5 p-1.5 shrink-0">
                       <div className="w-4 h-4 bg-slate-200 rounded-full"></div>
                       <div className="w-3/4 h-1.5 bg-slate-200 rounded-full"></div>
                       <div className="w-full h-1.5 bg-white dark:bg-slate-800 rounded-full mt-1"></div>
                       <div className="w-full h-1.5 bg-white dark:bg-slate-800 rounded-full"></div>
                       <div className="w-full h-1.5 bg-white dark:bg-slate-800 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">Standar Klasik</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">Daftar tautan terang minimalis</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-slate-400 dark:border-slate-600 shrink-0"></div>
                </label>

                {/* Option 4 (New: Glass Profile) */}
                <label className="relative flex items-center justify-between p-4 border rounded-2xl border-slate-300 dark:border-slate-700 hover:border-slate-500 bg-white dark:bg-[#1A2133] cursor-pointer transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-14 bg-gradient-to-br from-purple-500/30 to-blue-500/30 backdrop-blur-md rounded border border-black/20 dark:border-white/20 flex flex-col items-center justify-center gap-1.5 p-1.5 shrink-0 relative overflow-hidden">
                       <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-500/40 rounded-full blur-md"></div>
                       <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-blue-500/40 rounded-full blur-md"></div>
                       <div className="w-4 h-4 bg-white/40 rounded-full z-10 backdrop-blur-sm border border-white/30"></div>
                       <div className="w-full h-2 bg-white/20 rounded-md z-10 backdrop-blur-sm border border-black/20 dark:border-white/20"></div>
                       <div className="w-full h-2 bg-white/20 rounded-md z-10 backdrop-blur-sm border border-black/20 dark:border-white/20"></div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">Aura Kaca</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">Efek kaca di atas gradien</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-slate-400 dark:border-slate-600 shrink-0"></div>
                </label>
              </div>

            </div>
            
            {/* Aksi Button */}
            <div className="rounded-[24px] p-6 border border-slate-200 dark:border-[#2A3143] bg-transparent mt-6">
              <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <button type="button" onClick={() => { (window as any).goToPortfolioStep(5) }} className="shrink-0 bg-white dark:bg-[#1A2133] hover:bg-slate-200 dark:hover:bg-[#1A2133] text-slate-700 dark:text-slate-300 px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer" title="Kembali ke Gaya & Visual Custom"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg></button>
              <button id="btn-generate-portfolio" className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 rounded-2xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2 group">
                <svg className="w-5 h-5 group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                Publikasikan Portofolio AI
              </button>
              </div>
              <p className="text-center text-[10px] text-slate-500 mt-0 px-4 leading-relaxed">
                Membuat URL publik di jagocv.link. Anda dapat menghubungkan domain kustom nanti.
              </p>
              </div>
            </div>
            
            </div>
          </div>

            </div> {/* END CONTAINER: MANUAL FORMS (PORTFOLIO) */}

            {/* CONTAINER: AI MAGIC STORY (PORTFOLIO) */}
            <div id="container-portfolio-ai" className="hidden animate-[fadeIn_0.3s_ease_forwards]">
              <div className="rounded-[24px] p-6 md:p-8 border border-slate-200 dark:border-[#2A3143] bg-transparent border border-cyan-500/30 relative overflow-hidden">
                {/* Decorative Glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 blur-[40px] rounded-full pointer-events-none"></div>
                
                <div className="relative z-10 mb-6 flex items-start gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0 shadow-inner">
                      <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                   </div>
                   <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5">
                        Kisah Ajaib AI: Buat Showcase Anda 🚀
                      </h2>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Tuliskan tautan proyek terbaik Anda, username GitHub, hobi, dan deskripsi singkat. Biar AI yang menyusun strukturnya menjadi halaman portofolio interaktif yang memukau.</p>
                   </div>
                </div>
                
                {aiStep === 1 && (
                <div className="animate-[fadeIn_0.3s_ease_forwards]">
                  <textarea rows="14" placeholder="Misal: Saya ingin username @johndoe. Saya seorang fullstack dev. Sertakan tombol ke github saya: github.com/johndoe. Saya ingin menyoroti dua side-project: 1) 'Taskify' react todo app di taskify.app dan 2) 'API Fetcher' tool cli nodejs. Buat bio saya terdengar seru dan ramah." className="w-full bg-white/80 dark:bg-[#0B1221]/80 border border-cyan-500/50 rounded-2xl p-5 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none resize-none transition-all relative z-10 shadow-inner"></textarea>
                  
                  <div className="mt-5 flex flex-wrap justify-between items-center gap-3 relative z-10">
                     <div className="flex flex-wrap gap-2 items-center">
                       <span className="text-xs text-slate-500 font-medium py-2">Coba contoh:</span>
                       <button className="px-3.5 py-1.5 rounded-xl bg-cyan-900/30 text-cyan-400 text-xs font-semibold hover:bg-cyan-900/50 border border-cyan-700/30 transition-colors">Indie Hacker</button>
                       <button className="px-3.5 py-1.5 rounded-xl bg-cyan-900/30 text-cyan-400 text-xs font-semibold hover:bg-cyan-900/50 border border-cyan-700/30 transition-colors">Creative Coder</button>
                     </div>
                     <button onClick={() => setAiStep(2)} className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-95">
                        Selanjutnya
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                     </button>
                  </div>
                </div>
                )}
                
                {aiStep === 2 && (
                  <div className="animate-[fadeIn_0.3s_ease_forwards] flex flex-col gap-6">
                    <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800/50 pb-4">
                      <button onClick={() => setAiStep(1)} className="bg-slate-100 dark:bg-[#1A2133] hover:bg-slate-200 dark:hover:bg-[#2A3143] text-slate-700 dark:text-slate-300 px-5 py-2 rounded-xl font-bold transition-all flex items-center gap-2 active:scale-95 text-sm"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> Kembali</button>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Layout Options</h3>
                    </div>
                    <LayoutSelection theme="cyan" stepNumber={5} />
                    <div className="flex items-center gap-3 justify-end mt-2">
                       <button id="btn-generate-portfolio-ai" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-95 group">
                          Buat AI Portfolio
                          <svg className="w-5 h-5 group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                       </button>
                    </div>
                  </div>
                )}
              </div>
            </div> {/* END CONTAINER: AI MAGIC STORY (PORTFOLIO) */}

          </div> {/* END Left Col */}
          
          {/* Right Col: Live Preview */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-6 flex flex-col gap-4">
             <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                   Pratinjau Live
                </h3>
                <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400 text-[10px] font-bold rounded-full uppercase tracking-widest">
                  Auto-Sync On
                </span>
             </div>
             
             {/* Document Container */}
             <div className="bg-slate-50 dark:bg-[#0B1221] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none min-h-[600px] flex flex-col items-center">
               
               {/* Skeleton / Initial Preview State for Portfolio */}
               <div className="w-full h-full max-w-[320px] bg-white border-8 border-slate-900 rounded-[2rem] shadow-xl relative overflow-hidden flex flex-col opacity-60">
                 {/* Notch */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-slate-900 rounded-b-xl z-20"></div>
                 
                 <div className="flex-1 bg-gradient-to-b from-cyan-50 to-white dark:from-slate-800 dark:to-slate-900 p-4 pt-10 flex flex-col items-center gap-6 overflow-hidden">
                    <div className="w-20 h-20 rounded-full bg-cyan-200 dark:bg-cyan-900"></div>
                    <div className="flex flex-col items-center gap-2 w-full">
                       <div className="w-3/4 h-5 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
                       <div className="w-1/2 h-3 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
                    </div>
                    
                    <div className="w-full space-y-3 mt-4">
                       <div className="w-full h-12 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"></div>
                       <div className="w-full h-12 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"></div>
                       <div className="w-full h-12 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"></div>
                    </div>
                 </div>

               </div>
               
             </div>
          </div>

        </div>

      </div>
    </>
  );
}
