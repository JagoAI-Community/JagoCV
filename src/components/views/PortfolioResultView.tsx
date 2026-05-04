import React from 'react';

export default function PortfolioResultView() {
  return (
    <>
      <div id="view-portfolio-result" className="hidden animate-[fadeIn_0.5s_ease_forwards]">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <button id="btn-back-to-edit-portfolio" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white transition-colors font-medium text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Kembali ke Editor
          </button>
          
          <div className="flex items-center gap-3">
             <div className="hidden sm:flex items-center bg-white dark:bg-slate-800 p-1 rounded-xl mr-2">
                <button id="btn-view-mobile" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white shadow transition-colors" title="Tampilan Mobile">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </button>
                <button id="btn-view-desktop" className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" title="Tampilan Desktop">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </button>
             </div>
             <div className="hidden md:flex items-center mr-4 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg text-sm text-slate-900 dark:text-slate-300 font-mono tracking-tight select-all">
                jagocv.link/salmanuyat
             </div>
             <button className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-bold shadow-lg shadow-cyan-500/30 transition-all flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                Salin Tautan
             </button>
             <button className="px-5 py-2.5 rounded-xl bg-white text-slate-900 border border-slate-800 hover:bg-slate-100 text-sm font-bold transition-all flex items-center gap-2">
                Buka Situs Web
             </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-8 items-start w-full">
          {/* Left Col: Document */}
          <div className="w-full lg:w-2/3 flex flex-col transition-all duration-500" id="portfolio-document-wrapper">
          <div className="max-w-[400px] w-full mx-auto min-h-[80vh] relative shadow-2xl rounded-[3rem] border-[8px] border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-500 ease-in-out" id="portfolio-document-container">
          
          {/* Mock Mobile Viewport Background */}
          <div className="absolute inset-0 bg-white dark:bg-[#0F172A] flex flex-col justify-between" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.15) 0%, transparent 70%)' }}>
             
             {/* Scrollable Content */}
             <div className="flex-1 overflow-y-auto px-6 py-12 hide-scrollbar">
                <div className="w-full max-w-lg mx-auto">
                     <section className="mb-8 text-center relative group custom-resume-section p-4 -m-4 rounded-2xl border border-transparent hover:border-cyan-800 hover:bg-cyan-900/10 transition-all cursor-pointer">
                     <button className="btn-ask-ai absolute -right-2 top-0 opacity-0 group-hover:opacity-100 transition-all bg-white shadow-xl shadow-cyan-900/50 border border-cyan-100 text-cyan-700 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold flex items-center gap-1 hover:bg-cyan-50 z-20 hover:scale-105">
                       <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                       Ubah Bio
                     </button>
                     <div className="w-24 h-24 mx-auto rounded-full bg-white dark:bg-slate-800 border-[3px] border-cyan-500/50 mb-4 flex items-center justify-center text-3xl font-bold text-slate-900 dark:text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                        SU
                     </div>
                     <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center justify-center gap-2">
                        Salman Uyat <span className="text-cyan-400">🚀</span>
                     </h1>
                     <p className="text-sm font-medium text-cyan-400 mb-2">Pengembang Frontend</p>
                     <p className="text-xs text-slate-500 dark:text-slate-400">Membangun aplikasi web interaktif dan mengeksplorasi utilitas AI untuk memberikan pengalaman digital yang mulus.</p>
                   </section>

                   <section className="space-y-4 relative group custom-resume-section p-4 -m-4 rounded-2xl border border-transparent hover:border-cyan-800 hover:bg-cyan-900/10 transition-all cursor-pointer">
                     <button className="btn-ask-ai absolute -right-2 top-0 opacity-0 group-hover:opacity-100 transition-all bg-white shadow-xl shadow-cyan-900/50 border border-cyan-100 text-cyan-700 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold flex items-center gap-1 hover:bg-cyan-50 z-20 hover:scale-105">
                       <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                       Tambah/Edit Tautan
                     </button>
                     
                     <a href="#" className="block w-full py-4 text-center bg-cyan-900/20 hover:bg-cyan-900/40 border border-cyan-500/30 rounded-2xl text-cyan-100 text-sm font-semibold transition-all">
                        Lihat Resume Saya
                     </a>
                     
                     <a href="#" className="block w-full py-4 text-center bg-white/5 hover:bg-white/10 border border-slate-800 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-slate-200 text-sm font-semibold transition-all">
                        Cek GitHub Saya 🔥
                     </a>
                     
                     <a href="#" className="block w-full py-4 text-center bg-white/5 hover:bg-white/10 border border-slate-800 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-slate-200 text-sm font-semibold transition-all">
                        Terhubung di LinkedIn
                     </a>

                     {/* Mock Project Bento Box */}
                     <div className="grid grid-cols-2 gap-4 pt-4" id="portfolio-bento-grid">
                        <a href="#" className="block aspect-square p-4 bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/20 hover:border-indigo-500/50 rounded-2xl flex flex-col justify-end transition-all relative overflow-hidden">
                           <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/project1/300/300')] opacity-20 mix-blend-overlay"></div>
                           <h3 className="text-sm font-bold text-slate-900 dark:text-white relative z-10">Taskify AI</h3>
                           <p className="text-[10px] text-indigo-300 relative z-10 break-words">React + Node Tool</p>
                        </a>
                        <a href="#" className="block aspect-square p-4 bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/20 hover:border-blue-500/50 rounded-2xl flex flex-col justify-end transition-all relative overflow-hidden">
                           <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/project2/300/300')] opacity-20 mix-blend-overlay"></div>
                           <h3 className="text-sm font-bold text-slate-900 dark:text-white relative z-10">AI Fetcher</h3>
                           <p className="text-[10px] text-blue-300 relative z-10 break-words">Open Source Repo</p>
                        </a>
                     </div>

                   </section>
                </div>
             </div>

             {/* Mock Mobile Footer / Watermark */}
              <div className="text-center py-4 text-[10px] text-slate-900 font-medium">
                Dibuat dengan jagocv.link
             </div>

          </div>
          </div>
          </div>
        
          {/* Right Col: AI Chat */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-6 flex flex-col transition-all duration-500" id="portfolio-chat-wrapper">
            {/* Dokumen-level AI Chat Widget (Portfolio) */}
            <div className="js-global-chat w-full bg-white/5 border border-cyan-500/30 rounded-2xl overflow-hidden backdrop-blur-sm shadow-xl">
              {/* Chat Header */}
          <div className="bg-cyan-600/20 px-6 py-4 border-b border-cyan-500/30 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Asisten Portofolio</h3>
              <p className="text-xs text-cyan-300">Minta AI memperbarui tautan, ubah tema, atau ubah desain.</p>
            </div>
          </div>
          
          {/* Chat Context */}
          <div className="p-6 space-y-4">
             <div className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center shrink-0 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
               </div>
               <div className="bg-cyan-950/50 border border-cyan-500/20 p-4 rounded-2xl rounded-tl-none text-[13.5px] text-white dark:text-slate-200 shadow-sm leading-relaxed max-w-2xl">
                 Ini tautan portofolio interaktif Anda! Semuanya terlihat bagus. Ingin saya mengubah strukturnya menjadi tema Glassmorphism atau memperbarui teks bio Anda?
               </div>
             </div>
             
             {/* Quick Aksi */}
             <div className="flex flex-wrap gap-2 pl-12">
                <button className="px-3 py-1.5 bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 text-xs font-medium rounded-xl border border-cyan-500/30 transition-colors">✨ Jadikan lebih minimalis</button>
                <button className="px-3 py-1.5 bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 text-xs font-medium rounded-xl border border-cyan-500/30 transition-colors">🚀 Tambahkan blok pendaftaran buletin</button>
             </div>
          </div>
          
          {/* Input Area */}
          <div className="p-4 bg-slate-100 dark:bg-[#0B1221]/50 border-t border-cyan-500/30 flex flex-col gap-2 relative">
            <div className="js-chat-attachments hidden flex flex-wrap gap-2 mb-1 px-1"></div>
            <div className="flex gap-3">
               <button type="button" className="js-capture-btn shrink-0 bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-cyan-600 hover:border-cyan-400 dark:hover:text-cyan-400 dark:hover:border-cyan-500 transition-all flex items-center justify-center focus:outline-none" title="Pilih Area Dokumen">
                 <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
               </button>
               <input type="text" placeholder="misal, Tulis ulang bio saya agar lebih percaya diri..." className="js-chat-input flex-1 bg-white/50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-5 py-3 text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-slate-500" />
               <button className="js-chat-send bg-cyan-600 text-white rounded-xl px-5 py-3 hover:bg-cyan-500 transition-all font-semibold text-sm flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                 Kirim
                 <svg className="w-4 h-4 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
               </button>
            </div>
          </div>
          </div>
          </div>
        </div>

      </div>
    </>
  );
}
