import React, { useState } from 'react';
import { LayoutSelection } from './LayoutSelection';

export default function CreateCvView() {
  const [aiStep, setAiStep] = useState(1);

  return (
    <>
      <div id="view-create-cv" className="hidden animate-[fadeIn_0.5s_ease_forwards]">

        {/* Back Link */}
        <a href="#" id="btn-back-dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors mb-6 group w-fit">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Kembali ke Dasbor
        </a>

        {/* Builder Header */}
        <header className="mb-8 pb-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-100 dark:bg-[#1E253A] text-blue-700 dark:text-[#88A4E6] text-[10px] font-bold uppercase tracking-wider mb-3">ATS DOKUMEN</div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">Buat CV ATS Anda</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl">Isi modul di bawah atau gunakan AI untuk menyalin dari LinkedIn. Hasilkan dokumen format CV ATS<br />optimal yang dapat ditinjau dengan benar oleh sistem perusahaan top.</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0e76a8] hover:bg-[#0077b5] text-white rounded-xl font-semibold text-sm transition-all shadow-[0_0_15px_rgba(14,118,168,0.3)] shrink-0">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            Isi Otomatis Data LinkedIn
          </button>
        </header>

        {/* Stacked Layout on mobile, Two columns on desktop */}
        <div className="flex flex-col lg:flex-row gap-10 items-start w-full">
          
          {/* Left Col: Form & Wizard */}
          <div className="w-full lg:w-1/2 space-y-6 flex flex-col">
            
            {/* Form Inputs Container */}
            <div className="w-full space-y-6">
            
                        {/* Wizard Progress Animation */}
            <div id="cv-wizard-progress" className="w-full mb-8 pt-4">
              <div className="flex items-center justify-between relative">
                <div className="absolute left-0 top-5 -translate-y-1/2 w-full h-1.5 bg-slate-100 dark:bg-[#1A2133] rounded-full z-0"></div>
                <div id="cv-progress-bar" className="absolute left-0 top-5 -translate-y-1/2 h-1.5 bg-[#1E5EFF] shadow-[0_0_10px_rgba(37,99,235,0.5)] rounded-full z-0 transition-all duration-700 ease-out w-0"></div>
                
                <div className="relative z-10 flex flex-col items-center gap-2 group cv-step-indicator active" id="indicator-step-1" data-step="1">
                  <div className="w-10 h-10 rounded-full bg-[#1E5EFF] text-white flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-500 scale-110">1</div>
                  <span className="text-[11px] font-bold text-[#1E5EFF] dark:text-blue-400 mt-1 transition-colors uppercase tracking-wider">Pribadi</span>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-2 group cv-step-indicator" id="indicator-step-2" data-step="2">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-[#070B19] border-2 border-slate-200 dark:border-[#2A3143] text-slate-400 flex items-center justify-center font-bold text-sm transition-all duration-500">2</div>
                  <span className="text-[11px] font-bold text-slate-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block">Pengalaman</span>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-2 group cv-step-indicator" id="indicator-step-3" data-step="3">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-[#070B19] border-2 border-slate-200 dark:border-[#2A3143] text-slate-400 flex items-center justify-center font-bold text-sm transition-all duration-500">3</div>
                  <span className="text-[11px] font-bold text-slate-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block">Pendidikan</span>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-2 group cv-step-indicator" id="indicator-step-4" data-step="4">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-[#070B19] border-2 border-slate-200 dark:border-[#2A3143] text-slate-400 flex items-center justify-center font-bold text-sm transition-all duration-500">4</div>
                  <span className="text-[11px] font-bold text-slate-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block">Keahlian</span>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-2 group cv-step-indicator" id="indicator-step-5" data-step="5">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-[#070B19] border-2 border-slate-200 dark:border-[#2A3143] text-slate-400 flex items-center justify-center font-bold text-sm transition-all duration-500">5</div>
                  <span className="text-[11px] font-bold text-slate-400 mt-1 transition-colors uppercase tracking-wider hidden sm:block">Selesai</span>
                </div>
              </div>
            </div>
            {/* Input Mode Toggle */}
            <div className="rounded-[14px] p-1.5 flex items-center mb-6 border border-slate-200 dark:border-[#2A3143] bg-transparent">
              <button id="tab-cv-manual" className="flex-1 py-3 rounded-xl bg-[#1E5EFF] text-white text-sm font-semibold transition-all">Form Manual</button>
              <button id="tab-cv-ai" className="flex-1 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group">
                <svg className="w-4 h-4 text-[#1E5EFF] group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                Otomatis Buat via AI
              </button>
            </div>

            {/* CONTAINER: MANUAL FORMS */}
            <div id="container-cv-manual" className="space-y-6 block animate-[fadeIn_0.3s_ease_forwards]">
              {/* Personal Info */}
            <div id="cv-step-1" className="cv-step block rounded-[24px] p-6 md:p-8 border border-slate-200 dark:border-[#2A3143] bg-transparent">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-blue-100 dark:bg-[#1E5EFF]/20 flex items-center justify-center text-blue-600 dark:text-[#88A4E6] text-xs">1</span>
                Data Pribadi
              </h2>
              
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                {/* Photo Upload Simulation */}
                <label className="flex flex-col items-center justify-center w-32 h-32 rounded-full border-2 border-dashed border-slate-300 dark:border-[#2A3143] bg-slate-50 dark:bg-transparent hover:bg-slate-100 dark:hover:bg-white/5 hover:border-[#1E5EFF] cursor-pointer transition-all group shrink-0 relative overflow-hidden">
                  <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" title="Unggah Foto" />
                  <svg className="w-8 h-8 text-slate-400 group-hover:text-[#1E5EFF] mb-2 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span className="text-[10px] text-slate-500 font-medium">Tambah Foto</span>
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Nama Lengkap *</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Peran Target *</label>
                    <input type="text" placeholder="e.g. Frontend Developer" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Alamat Email *</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Nomor Telepon</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Lokasi (Kota, Negara)</label>
                  <input type="text" placeholder="Jakarta, Indonesia" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">LinkedIn URL</label>
                  <input type="url" placeholder="linkedin.com/in/johndoe" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Portfolio / Website URL</label>
                  <input type="url" placeholder="johndoe.com" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                </div>
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Ringkasan Profesional</label>
                  <textarea rows="3" placeholder="Gambaran singkat karir dan pencapaian utama Anda..." className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all resize-none"></textarea>
                </div>
              </div>
              <div className="flex justify-end mt-8 pt-6 border-t border-slate-100 dark:border-[#2A3143]"><button type="button" onClick={() => { (window as any).goToCvStep(2) }} className="bg-[#1E5EFF] hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 active:scale-95">Selanjutnya <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button></div>
            </div>

            {/* Pengalaman Kerja dummy block */}
            <div id="cv-step-2" className="cv-step hidden rounded-[24px] p-6 md:p-8 border border-slate-200 dark:border-[#2A3143] bg-transparent">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-blue-100 dark:bg-[#1E5EFF]/20 flex items-center justify-center text-blue-600 dark:text-[#88A4E6] text-xs">2</span>
                  Pengalaman Kerja
                </h2>
                <button className="text-xs font-semibold text-blue-600 dark:text-[#88A4E6] hover:text-blue-700 dark:hover:text-white flex items-center gap-1 bg-blue-100 dark:bg-transparent border dark:border-[#2A3143] px-3 py-1.5 rounded-lg transition-colors hover:bg-blue-200 dark:hover:bg-white/5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  Tambah Peran
                </button>
              </div>
              <div className="border border-slate-300/50 dark:border-[#2A3143] rounded-2xl p-5 bg-slate-100 dark:bg-transparent mb-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Nama Perusahaan</label>
                      <input type="text" placeholder="GoTo" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Jabatan</label>
                      <input type="text" placeholder="Frontend Developer" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Bulan / Tahun Mulai</label>
                      <input type="month" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Bulan / Tahun Selesai</label>
                      <input type="month" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                    </div>
                 </div>
                 <div className="flex items-center gap-2 mb-4">
                   <input type="checkbox" id="current_job_1" className="w-4 h-4 rounded border-slate-300 text-[#1E5EFF] focus:ring-[#1E5EFF] bg-transparent" />
                   <label htmlFor="current_job_1" className="text-xs text-slate-600 dark:text-slate-400">Saya masih bekerja di sini</label>
                 </div>
                 <div className="space-y-1.5">
                   <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Deskripsi & Pencapaian</label>
                   <textarea rows="4" placeholder="Jelaskan pencapaian menggunakan kata kerja aktif (mis. Mengembangkan X dengan Y dan menghasilkan Z)" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all resize-none"></textarea>
                 </div>
              </div>
              <div className="flex justify-between mt-8 pt-6 border-t border-slate-100 dark:border-[#2A3143]">
                 <button type="button" onClick={() => { (window as any).goToCvStep(1) }} className="bg-slate-100 dark:bg-[#1A2133] hover:bg-slate-200 dark:hover:bg-[#2A3143] text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 active:scale-95"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> Sebelumnya</button>
                 <button type="button" onClick={() => { (window as any).goToCvStep(3) }} className="bg-[#1E5EFF] hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 active:scale-95">Selanjutnya <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
              </div>
            </div>

            {/* Pendidikan block */}
            <div id="cv-step-3" className="cv-step hidden rounded-[24px] p-6 md:p-8 border border-slate-200 dark:border-[#2A3143] bg-transparent">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-blue-100 dark:bg-[#1E5EFF]/20 flex items-center justify-center text-blue-600 dark:text-[#88A4E6] text-xs">3</span>
                  Pendidikan
                </h2>
                <button className="text-xs font-semibold text-blue-600 dark:text-[#88A4E6] hover:text-blue-700 dark:hover:text-white flex items-center gap-1 bg-blue-100 dark:bg-transparent border dark:border-[#2A3143] px-3 py-1.5 rounded-lg transition-colors hover:bg-blue-200 dark:hover:bg-white/5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  Tambah Pendidikan
                </button>
              </div>
              <div className="border border-slate-300/50 dark:border-[#2A3143] rounded-2xl p-5 bg-slate-100 dark:bg-transparent mb-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-1.5 md:col-span-2">
                      <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Nama Institusi / Universitas</label>
                      <input type="text" placeholder="Universitas Telkom" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Gelar</label>
                      <input type="text" placeholder="Sarjana Komputer (S.Kom)" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Bidang Studi</label>
                      <input type="text" placeholder="Informatika" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tahun Mulai</label>
                      <input type="text" placeholder="2018" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tahun Lulus</label>
                      <input type="text" placeholder="2022" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                    </div>
                 </div>
              </div>
              <div className="flex justify-between mt-8 pt-6 border-t border-slate-100 dark:border-[#2A3143]">
                 <button type="button" onClick={() => { (window as any).goToCvStep(2) }} className="bg-slate-100 dark:bg-[#1A2133] hover:bg-slate-200 dark:hover:bg-[#2A3143] text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 active:scale-95"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> Sebelumnya</button>
                 <button type="button" onClick={() => { (window as any).goToCvStep(4) }} className="bg-[#1E5EFF] hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 active:scale-95">Selanjutnya <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
              </div>
            </div>

            {/* Keterampilan block */}
            <div id="cv-step-4" className="cv-step hidden rounded-[24px] p-6 md:p-8 border border-slate-200 dark:border-[#2A3143] bg-transparent">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-blue-100 dark:bg-[#1E5EFF]/20 flex items-center justify-center text-blue-600 dark:text-[#88A4E6] text-xs">4</span>
                Keterampilan
              </h2>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Keterampilan Relevan (Pisahkan dengan koma)</label>
                <textarea rows="3" placeholder="React, TypeScript, Node.js, Project Management, Agile..." className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all resize-none"></textarea>
              </div>
              <div className="flex justify-between mt-8 pt-6 border-t border-slate-100 dark:border-[#2A3143]">
                 <button type="button" onClick={() => { (window as any).goToCvStep(3) }} className="bg-slate-100 dark:bg-[#1A2133] hover:bg-slate-200 dark:hover:bg-[#2A3143] text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 active:scale-95"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> Sebelumnya</button>
                 <button type="button" onClick={() => { (window as any).goToCvStep(5) }} className="bg-[#1E5EFF] hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 active:scale-95">Pilih Layout <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
              </div>
            </div> 

            {/* Section 2: Template Select & Generate */}
            <div id="cv-step-5" className="cv-step hidden w-full">
              <div className="grid grid-cols-1 gap-6">
                
                <LayoutSelection theme="blue" stepNumber={5} />

                {/* Aksi Button */}
                <div className="rounded-[24px] p-6 border border-slate-200 dark:border-[#2A3143] bg-transparent mt-6">
                  <div className="flex items-center gap-4">
                     <button type="button" onClick={() => { (window as any).goToCvStep(4) }} className="shrink-0 bg-slate-100 dark:bg-[#1A2133] hover:bg-slate-200 dark:hover:bg-[#2A3143] text-slate-700 dark:text-slate-300 px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer" title="Kembali ke Keterampilan">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                     </button>
                     <button id="btn-generate-cv" className="flex-1 bg-[#5A45FF] hover:bg-[#4C3BDE] text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(90,69,255,0.4)] flex items-center justify-center gap-2 group">
                       <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                       Buat CV AI
                     </button>
                  </div>
                  <p className="text-center text-[9px] text-slate-500 mt-4 px-4 leading-relaxed">
                    Dengan menekan buat, Anda setuju untuk memformat data Anda mengikuti pedoman parser ATS global melalui jagoCV Engine.
                  </p>
                </div>
              
              </div>
            </div>

            </div> {/* END CONTAINER: MANUAL FORMS */}

            {/* CONTAINER: AI MAGIC STORY */}
            <div id="container-cv-ai" className="hidden animate-[fadeIn_0.3s_ease_forwards]">
              <div className="rounded-[24px] p-6 md:p-8 border border-blue-500/30 dark:border-[#1E5EFF]/30 relative overflow-hidden bg-transparent">
                {/* Decorative Glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 blur-[40px] rounded-full pointer-events-none"></div>
                
                <div className="relative z-10 mb-6 flex items-start gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-[#1E5EFF]/20 flex items-center justify-center shrink-0 shadow-inner">
                      <svg className="w-6 h-6 text-blue-600 dark:text-[#88A4E6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                   </div>
                   <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5">
                        Kisah Ajaib AI: Ciptakan CV dalam Sekejap ✨
                      </h2>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Ceritakan saja perjalanan karir Anda ke AI seperti sedang ngobrol dengan teman, sertakan link LinkedIn, atau tempel deskripsi pekerjaan. Kami yang urus format ATS-nya sampai 100% sempurna!</p>
                   </div>
                </div>
                
                {/* Chat Prompt UI */}
                {aiStep === 1 && (
                <div className="relative z-10 bg-white/80 dark:bg-[#1A2133] border border-slate-200 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-sm flex flex-col focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all animate-[fadeIn_0.3s_ease_forwards]">
                  <div className="p-3 bg-slate-50/50 dark:bg-[#070B19]/50 border-b border-slate-200 dark:border-slate-800/50 flex gap-2 overflow-x-auto hide-scrollbar">
                      <button className="shrink-0 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-[#1E5EFF]/10 text-blue-600 dark:text-[#88A4E6] text-[11px] font-semibold hover:bg-blue-100 dark:hover:bg-[#1E5EFF]/20 border border-blue-200 dark:border-[#1E5EFF]/30 transition-colors whitespace-nowrap">🌟 Buatkan contoh prompt</button>
                      <button className="shrink-0 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-medium hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors whitespace-nowrap">Frontend Developer</button>
                      <button className="shrink-0 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-medium hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors whitespace-nowrap">Digital Marketer</button>
                      <button className="shrink-0 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-medium hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors whitespace-nowrap">Fresh Graduate</button>
                  </div>
                  <textarea rows="6" placeholder="Ketik prompt Anda di sini... (misal: Hai, saya Salman, lulusan Telkom Uni 2024. Pengalaman 2 tahun sebagai Junior Frontend di GoTo. Buatkan CV yang fokus pada keahlian React dan Tailwind)" className="w-full bg-transparent p-5 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 outline-none resize-none leading-relaxed"></textarea>
                  
                  <div className="px-5 py-3 bg-slate-50/80 dark:bg-[#070B19]/80 border-t border-slate-200 dark:border-slate-800/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                     <div className="flex items-center gap-2">
                         <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 relative group" title="Lampirkan File (PDF/Word)">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                         </button>
                         <button className="p-2 text-slate-400 hover:text-blue-500 transition-colors rounded-lg hover:bg-blue-50 dark:hover:bg-blue-500/10" title="Impor dari LinkedIn">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                         </button>
                     </div>
                     <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                         <button onClick={() => setAiStep(2)} className="shrink-0 bg-[#1E5EFF] hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-[#1A2133]">
                            Selanjutnya
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                         </button>
                     </div>
                  </div>
                </div>
                )}

                {aiStep === 2 && (
                  <div className="animate-[fadeIn_0.3s_ease_forwards] flex flex-col gap-6">
                    <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800/50 pb-4">
                      <button onClick={() => setAiStep(1)} className="bg-slate-100 dark:bg-[#1A2133] hover:bg-slate-200 dark:hover:bg-[#2A3143] text-slate-700 dark:text-slate-300 px-5 py-2 rounded-xl font-bold transition-all flex items-center gap-2 active:scale-95 text-sm"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> Kembali</button>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Layout Options</h3>
                    </div>
                    <LayoutSelection theme="blue" stepNumber={5} />
                    <div className="flex items-center gap-3 justify-end mt-2">
                       <button id="btn-generate-cv-ai" className="bg-[#1E5EFF] hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 group">
                          Buat CV AI
                          <svg className="w-5 h-5 group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                       </button>
                    </div>
                  </div>
                )}
              </div>
            </div> {/* END CONTAINER: AI MAGIC STORY */}

          </div>



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
             <div className="bg-white dark:bg-[#0B1221] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none min-h-[600px] flex flex-col">
               
               {/* Skeleton / Initial Preview State */}
               <div className="flex flex-col gap-6 opacity-60">
                 
                 {/* Header Skeleton */}
                 <div className="flex flex-col items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-6">
                   <div className="w-48 h-6 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                   <div className="w-32 h-4 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                   <div className="flex gap-2 mt-1">
                     <div className="w-20 h-3 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                     <div className="w-20 h-3 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                   </div>
                 </div>

                 {/* Summary Skeleton */}
                 <div className="space-y-3">
                   <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                   <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                   <div className="w-2/3 h-3 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                 </div>

                 {/* Experience Skeleton */}
                 <div className="mt-4">
                   <div className="w-32 h-4 bg-slate-200 dark:bg-slate-800 rounded-md mb-4 border-b border-slate-200 dark:border-slate-800 pb-1"></div>
                   <div className="flex justify-between items-start mb-3">
                     <div className="flex gap-2 flex-col">
                       <div className="w-40 h-4 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                       <div className="w-24 h-3 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                     </div>
                     <div className="w-20 h-3 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                   </div>
                   <div className="space-y-2.5 pl-4 border-l-2 border-slate-200 dark:border-slate-800 ml-1">
                     <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                     <div className="w-[90%] h-2.5 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                     <div className="w-[95%] h-2.5 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                   </div>
                 </div>

                 {/* Skills Skeleton */}
                 <div className="mt-4">
                   <div className="w-32 h-4 bg-slate-200 dark:bg-slate-800 rounded-md mb-4 border-b border-slate-200 dark:border-slate-800 pb-1"></div>
                   <div className="flex flex-wrap gap-2">
                     <div className="w-16 h-6 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                     <div className="w-20 h-6 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                     <div className="w-14 h-6 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                     <div className="w-24 h-6 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                   </div>
                 </div>

               </div>

             </div>
          </div>

        </div>

      </div> {/* End ATS CV view */}
    </>
  );
}
