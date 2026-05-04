import React, { useState } from 'react';
import { LayoutSelection } from './LayoutSelection';

export default function DesignResumeView() {
  const [aiStep, setAiStep] = useState(1);

  return (
    <>
      <div id="view-design-resume" className="hidden animate-[fadeIn_0.5s_ease_forwards]">
        
        <button id="btn-back-dashboard-resume" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white mb-6 transition-colors font-medium text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Kembali ke Dasbor
        </button>

        {/* Builder Header */}
        <header className="mb-8 pb-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wider mb-3">Visual Dokumen</div>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">Desain Resume Visual Anda</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl">Buat resume PDF yang memukau dan tertata indah untuk memikat rekruter. Tampil menonjol dengan tipografi, warna, dan tata letak modern.</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white rounded-xl font-medium text-sm transition-all shadow-sm shrink-0">
            <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
            Impor Data ATS
          </button>
        </header>

        {/* Stacked Layout on mobile, Two columns on desktop */}
        <div className="flex flex-col lg:flex-row gap-10 items-start w-full">
          
          {/* Left Col: Form Inputs */}
          <div className="w-full lg:w-1/2 space-y-6 flex flex-col">
            
            {/* Input Mode Toggle (Resume) */}
            <div className="rounded-[16px] p-1.5 border border-slate-200 dark:border-[#2A3143] bg-transparent flex items-center mb-2 bg-white/80 dark:bg-[#0B1221]/80 border-slate-200 dark:border-slate-800">
              <button id="tab-resume-manual" className="flex-1 py-2.5 rounded-xl bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.4)] text-white text-sm font-semibold transition-all">Form Manual</button>
              <button id="tab-resume-ai" className="flex-1 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group">
                <svg className="w-4 h-4 text-indigo-500 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                Arsitek Desain AI
              </button>
            </div>

            {/* CONTAINER: MANUAL FORMS (RESUME) */}
            <div id="container-resume-manual" className="space-y-6 block animate-[fadeIn_0.3s_ease_forwards]">
            
                        {/* Wizard Progress Animation */}
            <div id="resume-wizard-progress" className="w-full mb-8 pt-4">
              <div className="flex items-center justify-between relative">
                <div className="absolute left-0 top-5 -translate-y-1/2 w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full z-0"></div>
                <div id="resume-progress-bar" className="absolute left-0 top-5 -translate-y-1/2 h-1.5 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] rounded-full z-0 transition-all duration-700 ease-out w-0"></div>
                
                <div className="relative z-10 flex flex-col items-center gap-2 group resume-step-indicator active" id="resume-indicator-step-1" data-step="1">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all duration-500 scale-110">1</div>
                  <span className="text-[11px] font-bold text-indigo-500 mt-1 transition-colors uppercase tracking-wider">Profil</span>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-2 group resume-step-indicator" id="resume-indicator-step-2" data-step="2">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-400 flex items-center justify-center font-bold text-sm transition-all duration-500">2</div>
                  <span className="text-[11px] font-bold text-slate-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block">Keterampilan</span>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-2 group resume-step-indicator" id="resume-indicator-step-3" data-step="3">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-400 flex items-center justify-center font-bold text-sm transition-all duration-500">3</div>
                  <span className="text-[11px] font-bold text-slate-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block">Riwayat</span>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-2 group resume-step-indicator" id="resume-indicator-step-4" data-step="4">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-400 flex items-center justify-center font-bold text-sm transition-all duration-500">4</div>
                  <span className="text-[11px] font-bold text-slate-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block">Selesai</span>
                </div>
              </div>
            </div>
            {/* Personal Info & Photo */}
            <div id="resume-step-1" className="resume-step block rounded-[24px] p-6 md:p-8 border border-slate-200 dark:border-[#2A3143] bg-transparent">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xs">1</span>
                Info Profil
              </h2>
              
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                {/* Photo Upload Simulation */}
                <label className="flex flex-col items-center justify-center w-32 h-32 rounded-full border-2 border-dashed border-slate-400 dark:border-slate-600 bg-white dark:bg-[#1A2133] hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-indigo-500 cursor-pointer transition-all group shrink-0 relative overflow-hidden">
                  <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" title="Unggah Foto" />
                  <svg className="w-8 h-8 text-slate-500 group-hover:text-indigo-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Unggah Foto</span>
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Nama Tampilan *</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Headline / Peran *</label>
                    <input type="text" placeholder="Creative Frontend Engineer" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Website Portofolio / Linktree</label>
                    <input type="url" placeholder="https://johndoe.com" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Alamat Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Nomor Telepon</label>
                  <input type="tel" placeholder="+62 812 3456 7890" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Lokasi / Remote</label>
                  <input type="text" placeholder="Jakarta, ID (Remote)" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tentang Saya (Bio)</label>
                <textarea rows="3" placeholder="Tulis bio singkat yang menarik sesuai kepribadian karir Anda..." className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none"></textarea>
              </div>
              <div className="flex justify-end mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/50"><button type="button" onClick={() => { (window as any).goToResumeStep(2) }} className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2 active:scale-95">Selanjutnya <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button></div>
            </div>

            {/* Skills & Visual Elements */}
            <div id="resume-step-2" className="resume-step hidden rounded-[24px] p-6 md:p-8 border border-slate-200 dark:border-[#2A3143] bg-transparent">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xs">2</span>
                Keterampilan & Kekuatan
              </h2>
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Top Keahlian Teknis (Pisahkan dengan koma)</label>
                  <input type="text" placeholder="UI/UX Design, React, Tailwind, Figma, WebGL" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                
                <div className="border border-slate-200 dark:border-[#2A3143] rounded-[16px] p-5 bg-transparent">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Soft Skills</h3>
                    <button type="button" className="text-xs text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg> Tambah
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="flex flex-col gap-3 group">
                        <div className="flex justify-between items-center bg-white dark:bg-[#1A2133] border border-slate-200 dark:border-[#2A3143] rounded-xl px-3 py-2 transition-all focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                           <input type="text" placeholder="misal. Komunikasi" className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-500 outline-none" defaultValue="Komunikasi" />
                           <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-1 rounded-md ml-2 shrink-0">80%</span>
                        </div>
                        <div className="px-1">
                            <input type="range" className="w-full accent-indigo-500 h-1.5 bg-slate-200 dark:bg-[#1A2133] rounded-lg cursor-pointer" defaultValue="80" />
                        </div>
                     </div>
                     <div className="flex flex-col gap-3 group">
                        <div className="flex justify-between items-center bg-white dark:bg-[#1A2133] border border-slate-200 dark:border-[#2A3143] rounded-xl px-3 py-2 transition-all focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                           <input type="text" placeholder="misal. Problem Solving" className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-500 outline-none" defaultValue="Problem Solving" />
                           <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-1 rounded-md ml-2 shrink-0">90%</span>
                        </div>
                        <div className="px-1">
                            <input type="range" className="w-full accent-indigo-500 h-1.5 bg-slate-200 dark:bg-[#1A2133] rounded-lg cursor-pointer" defaultValue="90" />
                        </div>
                     </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/50"><button type="button" onClick={() => { (window as any).goToResumeStep(1) }} className="bg-white dark:bg-[#1A2133] hover:bg-slate-200 dark:hover:bg-[#1A2133] text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 active:scale-95"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> Sebelumnya</button><button type="button" onClick={() => { (window as any).goToResumeStep(3) }} className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2 active:scale-95">Selanjutnya <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button></div>
            </div>

            {/* Experience & Pendidikan (Visual Resume) */}
            <div id="resume-step-3" className="resume-step hidden rounded-[24px] p-6 md:p-8 border border-slate-200 dark:border-[#2A3143] bg-transparent">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xs">3</span>
                Pengalaman & Pendidikan
              </h2>
              
              {/* Pengalaman Kerja */}
              <div className="mb-7">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Riwayat Pekerjaan</h3>
                  <button className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 bg-indigo-100 dark:bg-indigo-900/20 hover:bg-indigo-200 dark:hover:bg-indigo-900/40 px-2.5 py-1.5 rounded-lg transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                    Tambah Pekerjaan
                  </button>
                </div>
                {/* Job Entry */}
                <div className="border border-slate-300/50 dark:border-slate-700/50 rounded-2xl p-4 bg-white dark:bg-[#1A2133] relative group">
                   <button className="absolute top-3 right-3 text-slate-500 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-all" title="Hapus">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                   </button>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <input type="text" placeholder="Jabatan (misal Product Designer)" className="col-span-1 bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                      <input type="text" placeholder="Nama Perusahaan" className="col-span-1 bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                   </div>
                   <div className="grid grid-cols-2 gap-4 mb-3">
                      <input type="text" placeholder="Tgl Mulai (misal Jan 2022)" className="bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                      <input type="text" placeholder="Tgl Selesai (misal Sekarang)" className="bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                   </div>
                   <textarea rows="2" placeholder="Tanggung jawab utama dan pencapaian..." className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 outline-none resize-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"></textarea>
                </div>
              </div>

              {/* Pendidikan */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Detail Pendidikan</h3>
                  <button className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 bg-indigo-100 dark:bg-indigo-900/20 hover:bg-indigo-200 dark:hover:bg-indigo-900/40 px-2.5 py-1.5 rounded-lg transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                    Tambah Gelar
                  </button>
                </div>
                {/* Pendidikan Entry */}
                <div className="border border-slate-300/50 dark:border-slate-700/50 rounded-2xl p-4 bg-white dark:bg-[#1A2133] relative group">
                   <button className="absolute top-3 right-3 text-slate-500 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-all" title="Hapus">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                   </button>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <input type="text" placeholder="Gelar (misal Sarjana Komputer)" className="col-span-1 bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                      <input type="text" placeholder="Universitas / Institusi" className="col-span-1 bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                     <input type="text" placeholder="Tahun Lulus" className="bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                     <input type="text" placeholder="IPK / Skor (Opsional)" className="bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                   </div>
                 </div>
              </div>
              <div className="flex justify-between mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/50"><button type="button" onClick={() => { (window as any).goToResumeStep(2) }} className="bg-white dark:bg-[#1A2133] hover:bg-slate-200 dark:hover:bg-[#1A2133] text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 active:scale-95"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> Sebelumnya</button><button type="button" onClick={() => { (window as any).goToResumeStep(4) }} className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2 active:scale-95">Selanjutnya <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button></div>
            </div>

             {/* Projects & Portfolio (Visual) */}
             <div id="resume-step-4" className="resume-step hidden rounded-[24px] p-6 md:p-8 border border-slate-200 dark:border-[#2A3143] bg-transparent">
               <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                 <span className="w-6 h-6 rounded-md bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xs">4</span>
                 Proyek Unggulan
               </h2>
               
               <div className="flex items-center justify-between mb-3">
                 <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Sorotan Proyek</h3>
                 <button className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 bg-indigo-100 dark:bg-indigo-900/20 hover:bg-indigo-200 dark:hover:bg-indigo-900/40 px-2.5 py-1.5 rounded-lg transition-colors">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                   Tambah Proyek
                 </button>
               </div>
               
               {/* Project Entry */}
               <div className="border border-slate-200 dark:border-[#2A3143] rounded-[16px] p-5 bg-transparent relative group mb-4">
                  <button className="absolute top-4 right-4 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all" title="Hapus">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                     <input type="text" placeholder="Nama Proyek (misal: E-Commerce App)" className="col-span-1 bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                     <input type="url" placeholder="Tautan Proyek / URL" className="col-span-1 bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
                  </div>
                  <textarea rows="3" placeholder="Jelaskan tujuan proyek, stack teknologi yang digunakan, serta dampak atau hasil dari proyek ini..." className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-500 outline-none resize-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all mb-4"></textarea>
                  
                  {/* Add thumbnail */}
                  <div className="flex items-center gap-4">
                     <label className="w-16 h-16 rounded-xl border-2 border-dashed border-slate-300 dark:border-[#2A3143] flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 dark:hover:bg-[#1A2133] hover:border-indigo-400 dark:hover:border-indigo-500 transition-all relative overflow-hidden shrink-0 group/img">
                        <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" title="Unggah Gambar" />
                        <svg className="w-5 h-5 text-slate-400 group-hover/img:text-indigo-500 mb-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0V20a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h10l4 4v10z"></path></svg>
                        <span className="text-[9px] font-medium text-slate-500 group-hover/img:text-indigo-500 transition-colors">Gambar</span>
                     </label>
                     <div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">Thumbnail / Screenshot Proyek</p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-500 mt-0.5">Format JPG/PNG, opsional untuk melengkapi portofolio.</p>
                     </div>
                  </div>
               </div>
               
               <div className="mt-8">
                 <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-4">Hobi & Bahasa</h3>
                 <div className="border border-slate-200 dark:border-[#2A3143] rounded-[16px] p-5 bg-transparent">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Bahasa (Pisahkan dengan koma)</label>
                       <input type="text" placeholder="misal: Indonesia, English" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Hobi / Ketertarikan</label>
                       <input type="text" placeholder="misal: Fotografi, Open Source" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium" />
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Aksi Button */}
               <div className="flex justify-between mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/50"><button type="button" onClick={() => { (window as any).goToResumeStep(3) }} className="bg-white dark:bg-[#1A2133] hover:bg-slate-200 dark:hover:bg-[#1A2133] text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 active:scale-95"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> Sebelumnya</button><button type="button" onClick={() => { (window as any).goToResumeStep(5) }} className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2 active:scale-95">Pilih Layout <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button></div>
             </div>
             
             {/* Section 2: Template Select & Generate */}
             <div id="resume-step-5" className="resume-step hidden w-full">
               <div className="grid grid-cols-1 gap-6">
                 
                 <LayoutSelection theme="indigo" stepNumber={5} />

                 {/* Aksi Button */}
                 <div className="rounded-[24px] p-6 border border-slate-200 dark:border-[#2A3143] bg-transparent mt-6">
                   <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <button type="button" onClick={() => { (window as any).goToResumeStep(4) }} className="shrink-0 bg-white dark:bg-[#1A2133] hover:bg-slate-200 dark:hover:bg-[#1A2133] text-slate-700 dark:text-slate-300 px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer" title="Kembali"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg></button>
                      <button id="btn-generate-resume" className="flex-1 bg-[#5A45FF] hover:bg-[#4C3BDE] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(90,69,255,0.4)] flex items-center justify-center gap-2 active:scale-95 group">Buat AI Resume <svg className="w-5 h-5 group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg></button>
                    </div>
                    <p className="text-center text-[10px] text-slate-500 mt-0 px-4 leading-relaxed">
                      Dengan menekan buat, Anda setuju untuk memformat data Anda mengikuti pedoman parser ATS global melalui jagoCV Engine.
                    </p>
                   </div>
                 </div>
               
               </div>
             </div>

            </div> {/* END CONTAINER: MANUAL FORMS (RESUME) */}

            {/* CONTAINER: AI MAGIC STORY (RESUME) */}
            <div id="container-resume-ai" className="hidden animate-[fadeIn_0.3s_ease_forwards]">
              <div className="rounded-[24px] p-6 md:p-8 border border-slate-200 dark:border-[#2A3143] bg-transparent border border-indigo-500/30 relative overflow-hidden">
                {/* Decorative Glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 blur-[40px] rounded-full pointer-events-none"></div>
                
                <div className="relative z-10 mb-6 flex items-start gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0 shadow-inner">
                      <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                   </div>
                   <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5">
                        Kisah Ajaib AI: Desain Identitas Anda 🎨
                      </h2>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Bagikan visi, sentuhan warna yang Anda suka, dan karakter profesional yang ingin ditonjolkan. AI akan merancang resume visual yang sangat eye-catching khusus untuk Anda.</p>
                   </div>
                </div>

                {/* Chat Prompt UI */}
                {aiStep === 1 && (
                <div className="relative z-10 bg-white/80 dark:bg-[#0B1221]/80 border border-slate-200 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-sm flex flex-col focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all animate-[fadeIn_0.3s_ease_forwards]">
                  <div className="p-3 bg-slate-50/50 dark:bg-[#070B19]/50 border-b border-slate-200 dark:border-slate-800/50 flex gap-2 overflow-x-auto hide-scrollbar">
                      <button className="shrink-0 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[11px] font-semibold hover:bg-indigo-100 dark:hover:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-700/30 transition-colors whitespace-nowrap">🌟 Buatkan contoh prompt</button>
                      <button className="shrink-0 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#0B1221] text-slate-600 dark:text-slate-400 text-[11px] font-medium hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors whitespace-nowrap">UX Designer</button>
                      <button className="shrink-0 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#0B1221] text-slate-600 dark:text-slate-400 text-[11px] font-medium hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors whitespace-nowrap">Creative Director</button>
                  </div>
                  <textarea rows="6" placeholder="Ketik prompt Anda di sini... (misal: Saya seorang Senior UX Designer dengan pengalaman 5 tahun di bidang FinTech. Saya ingin resume ini terlihat modern dan berani untuk melamar di agensi kreatif.)" className="w-full bg-transparent p-5 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 outline-none resize-none leading-relaxed"></textarea>
                  
                  <div className="px-5 py-3 bg-slate-50/80 dark:bg-[#070B19]/80 border-t border-slate-200 dark:border-slate-800/50 flex justify-between items-center">
                     <div className="flex items-center gap-2">
                         <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 relative group" title="Lampirkan File (PDF/Word)">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                         </button>
                         <button className="p-2 text-slate-400 hover:text-indigo-500 transition-colors rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-500/10" title="Impor dari LinkedIn">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                         </button>
                     </div>
                     <button onClick={() => setAiStep(2)} className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20 active:scale-95">
                        Selanjutnya
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
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
                    <LayoutSelection theme="indigo" stepNumber={5} />
                    <div className="flex items-center gap-3 justify-end mt-2">
                       <button id="btn-generate-resume-ai" className="bg-[#5A45FF] hover:bg-[#4C3BDE] text-white px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(90,69,255,0.4)] active:scale-95 group">
                          Buat AI Resume
                          <svg className="w-5 h-5 group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                       </button>
                    </div>
                  </div>
                )}
              </div>
            </div> {/* END CONTAINER: AI MAGIC STORY (RESUME) */}
          </div> {/* End Left Col Container */}

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
               
               {/* Skeleton / Initial Preview State for Design Resume */}
               <div className="w-full h-full max-w-sm bg-white border border-slate-200 shadow-md shadow-indigo-100 rounded-md p-6 flex flex-col gap-6 opacity-60">
                 
                 {/* Header Skeleton */}
                 <div className="flex items-center gap-4 border-b border-indigo-100 pb-4">
                   <div className="w-16 h-16 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                   <div className="flex flex-col gap-2 flex-1">
                     <div className="w-3/4 h-5 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                     <div className="w-1/2 h-3 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                   </div>
                 </div>

                 {/* Content Skeleton */}
                 <div className="flex gap-4 h-full">
                    {/* Left Sidebar */}
                    <div className="w-1/3 flex flex-col gap-4 border-r border-indigo-50 pr-4">
                       <div className="w-20 h-3 bg-indigo-100 dark:bg-slate-800 rounded-md"></div>
                       <div className="space-y-2">
                           <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                           <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                           <div className="w-3/4 h-2 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                       </div>
                       
                       <div className="w-20 h-3 bg-indigo-100 dark:bg-slate-800 rounded-md mt-4"></div>
                       <div className="space-y-2">
                           <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                           <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                           <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                       </div>
                    </div>
                    {/* Main Content */}
                    <div className="w-2/3 flex flex-col gap-4">
                       <div className="w-24 h-3 bg-indigo-100 dark:bg-slate-800 rounded-md"></div>
                       <div className="space-y-3">
                           <div>
                              <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-md mb-1"></div>
                              <div className="w-1/2 h-2 bg-slate-200 dark:bg-slate-800 rounded-md mb-2"></div>
                              <div className="space-y-1">
                                 <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                                 <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                              </div>
                           </div>
                           <div className="mt-4">
                              <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-md mb-1"></div>
                              <div className="w-1/2 h-2 bg-slate-200 dark:bg-slate-800 rounded-md mb-2"></div>
                              <div className="space-y-1">
                                 <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                                 <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                              </div>
                           </div>
                       </div>
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
