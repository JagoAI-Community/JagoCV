import React from 'react';

export default function CvResultView() {
  return (
    <>
      <div id="view-cv-result" className="hidden animate-[fadeIn_0.5s_ease_forwards]">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <button id="btn-back-to-edit-cv" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white transition-colors font-medium text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Kembali ke Editor
          </button>
          
          <div className="flex items-center gap-3">
             <button className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-sm font-semibold border border-slate-400 dark:border-slate-600 transition-all flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                Salin Teks
             </button>
             <button className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Unduh PDF
             </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-8 items-start w-full">
          
          {/* Left Col: Document */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <div className="w-full max-w-4xl mx-auto bg-white border border-slate-200 rounded-md shadow-2xl p-8 sm:p-12 text-slate-900 font-sans leading-relaxed text-sm relative" id="cv-document-container">
              
              {/* AI Editor Popover (Hidden by default) */}
          <div id="ai-edit-popover" className="hidden absolute z-50 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-indigo-100 w-80 p-4 animate-[zoomIn_0.2s_ease_out]">
            <div className="flex flex-col relative">
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-indigo-100 transform rotate-45"></div>
               <div className="flex items-center gap-2 mb-3 text-indigo-600 font-bold text-sm tracking-tight">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                 AI Editor
               </div>
               <textarea id="ai-edit-prompt" rows="3" placeholder="Beri tahu AI apa yang perlu diubah (mis. 'Buat lebih profesional', 'Terjemahkan ke Indonesia')" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-700 placeholder-slate-400 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 outline-none resize-none mb-3 shadow-inner"></textarea>
               <div className="flex justify-end gap-2">
                 <button id="btn-cancel-ai" className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500 hover:bg-slate-100 transition-colors">Cancel</button>
                 <button className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-colors flex items-center gap-1 shadow-md shadow-indigo-200">
                   <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Apply
                 </button>
               </div>
            </div>
          </div>

          {/* CV Header */}
          <header className="text-center mb-8 border-b-2 border-slate-900 pb-6 relative group p-4 -m-4 rounded-xl border border-transparent hover:border-indigo-100 hover:bg-indigo-50/30 transition-all cursor-pointer">
            <button className="btn-ask-ai absolute -right-4 -top-4 opacity-0 group-hover:opacity-100 transition-all bg-white shadow-xl shadow-indigo-200/50 border border-indigo-100 text-indigo-600 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold flex items-center gap-1 hover:bg-indigo-50 z-10 hover:scale-105">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              Sempurnakan dengan AI
            </button>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2 uppercase">Salman Uyat</h1>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-slate-900 font-medium">
              <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> salmanuyat25@gmail.com</span>
              <span className="text-slate-400">|</span>
              <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg> +62 812 3456 7890</span>
              <span className="text-slate-400">|</span>
              <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg> linkedin.com/in/salmanuyat</span>
            </div>
          </header>

          {/* Ringkasan Profesional */}
          <section className="mb-6 relative group p-4 -m-4 rounded-xl border border-transparent hover:border-indigo-100 hover:bg-indigo-50/30 transition-all cursor-pointer">
             <button className="btn-ask-ai absolute -right-4 -top-4 opacity-0 group-hover:opacity-100 transition-all bg-white shadow-xl shadow-indigo-200/50 border border-indigo-100 text-indigo-600 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold flex items-center gap-1 hover:bg-indigo-50 z-10 hover:scale-105">
               <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
               Sempurnakan dengan AI
             </button>
             <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-800 pb-1 mb-3">Ringkasan Profesional</h2>
             <p className="text-slate-900 text-justify">
               Detail-oriented Frontend Developer with 2+ years of experience in designing and implementing highly responsive user interfaces using React, Tailwind CSS, and TipeScript. Proven ability to optimize web performance, increasing rendering speed by 20% in enterprise applications. Adept at collaborating with cross-functional teams to deliver scalable and intuitive digital products. Seeking to leverage modern web development frameworks to drive user engagement in a Mid-level React Developer role.
             </p>
          </section>

          {/* Pengalaman Kerja */}
          <section className="mb-6 relative group p-4 -m-4 rounded-xl border border-transparent hover:border-indigo-100 hover:bg-indigo-50/30 transition-all cursor-pointer">
             <button className="btn-ask-ai absolute -right-4 -top-4 opacity-0 group-hover:opacity-100 transition-all bg-white shadow-xl shadow-indigo-200/50 border border-indigo-100 text-indigo-600 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold flex items-center gap-1 hover:bg-indigo-50 z-10 hover:scale-105">
               <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
               Sempurnakan dengan AI
             </button>
             <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-800 pb-1 mb-3">Pengalaman Kerja</h2>
             
             <div className="mb-5">
               <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                 <h3 className="font-bold text-slate-900 text-base">GoTo Group</h3>
                 <span className="font-semibold text-slate-900 text-sm">Jakarta, Indonesia</span>
               </div>
               <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                 <h4 className="font-semibold text-slate-900 italic">Pengembang Frontend Junior</h4>
                 <span className="text-slate-900 text-sm font-medium">Mei 2024 &ndash; Sekarang</span>
               </div>
               <ul className="list-disc pl-5 text-slate-900 space-y-1">
                 <li>Memimpin pengembangan dasbor pelaporan internal terpadu menggunakan React.js dan Tailwind CSS, menstandarisasi komponen UI di 5 tim.</li>
                 <li>Membersihkan kode (refactoring) komponen React lama, dengan sukses mengoptimalkan waktu rendering sebesar 20% dan meningkatkan stabilitas aplikasi secara keseluruhan.</li>
                 <li>Meningtegrasikan RESTful API untuk mengisi tabel data dan grafik padat, memastikan aliran data dan penanganan kesalahan yang mulus.</li>
                 <li>Berkerjasama setiap hari dengan desainer UX/UI dan engineer backend dalam lingkungan Agile untuk menyelaraskan desain visual dengan kelayakan teknis.</li>
               </ul>
             </div>
          </section>

          {/* Pendidikan */}
          <section className="mb-6 relative group p-4 -m-4 rounded-xl border border-transparent hover:border-indigo-100 hover:bg-indigo-50/30 transition-all cursor-pointer">
             <button className="btn-ask-ai absolute -right-4 -top-4 opacity-0 group-hover:opacity-100 transition-all bg-white shadow-xl shadow-indigo-200/50 border border-indigo-100 text-indigo-600 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold flex items-center gap-1 hover:bg-indigo-50 z-10 hover:scale-105">
               <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
               Sempurnakan dengan AI
             </button>
             <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-800 pb-1 mb-3">Pendidikan</h2>
             
             <div>
               <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                 <h3 className="font-bold text-slate-900 text-base">Telkom University</h3>
                 <span className="font-semibold text-slate-900 text-sm">Bandung, Indonesia</span>
               </div>
               <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                 <h4 className="font-semibold text-slate-900 italic">Sarjana Ilmu Komputer</h4>
                 <span className="text-slate-900 text-sm font-medium">Lulus: 2024</span>
               </div>
             </div>
          </section>
          
          {/* Keahlian Teknis */}
          <section className="relative group p-4 -m-4 rounded-xl border border-transparent hover:border-indigo-100 hover:bg-indigo-50/30 transition-all cursor-pointer">
             <button className="btn-ask-ai absolute -right-4 -top-4 opacity-0 group-hover:opacity-100 transition-all bg-white shadow-xl shadow-indigo-200/50 border border-indigo-100 text-indigo-600 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold flex items-center gap-1 hover:bg-indigo-50 z-10 hover:scale-105">
               <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
               Sempurnakan dengan AI
             </button>
             <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-800 pb-1 mb-3">Keahlian Teknis</h2>
             <ul className="text-slate-900 space-y-1">
                 <li><span className="font-bold text-slate-900">Bahasa:</span> JavaScript (ES6+), TipeScript, HTML5, CSS3, SQL</li>
                 <li><span className="font-bold text-slate-900">Frameworks / Libraries:</span> React.js, Next.js, Tailwind CSS, Redux, Node.js</li>
                 <li><span className="font-bold text-slate-900">Alat:</span> Git, Webpack, Vite, Figma, REST APIs, Postman</li>
                 <li><span className="font-bold text-slate-900">Languages (Spoken):</span> Indonesian (Native), English (Professional Working Proficiency)</li>
             </ul>
          </section>

            </div>
          </div>
        
          {/* Right Col: AI Chat */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-6 flex flex-col">
            {/* Dokumen-level AI Chat Widget (Block UI) */}
            <div className="js-global-chat w-full bg-[#f4f5f9] border border-indigo-200 dark:bg-white/5 dark:border-indigo-500/30 rounded-2xl overflow-hidden backdrop-blur-sm shadow-xl">
              {/* Chat Header */}
          <div className="bg-[#d8dbff] dark:bg-indigo-600/20 px-6 py-4 border-b border-indigo-200 dark:border-indigo-500/30 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Asisten Dokumen</h3>
              <p className="text-xs text-[#8f96fd] dark:text-indigo-300">Minta AI untuk mengulas, menerjemahkan, atau menulis ulang keseluruhan dokumen Anda.</p>
            </div>
          </div>
          
          {/* Chat Context */}
          <div className="p-6 space-y-4">
             <div className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
               </div>
               <div className="bg-[#898eac] dark:bg-indigo-950/50 border-none dark:border-indigo-500/20 p-4 rounded-2xl rounded-tl-none text-[13.5px] text-white dark:text-slate-200 shadow-sm leading-relaxed max-w-2xl">
                 Hai! CV Anda terlihat luar biasa. Saya dapat membantu menyesuaikannya dengan deskripsi pekerjaan tertentu, memeriksa kepatuhan ATS, atau menerjemahkannya. Apa yang ingin Anda lakukan?
               </div>
             </div>
             
             {/* Quick Aksi */}
             <div className="flex flex-wrap gap-2 pl-12">
                <button className="px-3 py-1.5 bg-[#ded7ff] hover:bg-[#d0c6fa] dark:bg-indigo-600/20 dark:hover:bg-indigo-600/40 text-[#8f96fd] dark:text-indigo-300 text-xs font-medium rounded-xl border border-[#c4bdff] dark:border-indigo-500/30 transition-colors">📄 Cek Skor ATS</button>
                <button className="px-3 py-1.5 bg-[#ded7ff] hover:bg-[#d0c6fa] dark:bg-indigo-600/20 dark:hover:bg-indigo-600/40 text-[#8f96fd] dark:text-indigo-300 text-xs font-medium rounded-xl border border-[#c4bdff] dark:border-indigo-500/30 transition-colors">🔍 Cari Salah Ketik</button>
                <button className="px-3 py-1.5 bg-[#ded7ff] hover:bg-[#d0c6fa] dark:bg-indigo-600/20 dark:hover:bg-indigo-600/40 text-[#8f96fd] dark:text-indigo-300 text-xs font-medium rounded-xl border border-[#c4bdff] dark:border-indigo-500/30 transition-colors">🌐 Terjemahkan ke Bahasa Indonesia</button>
             </div>
          </div>
          
          {/* Input Area */}
          <div className="p-4 bg-slate-50 dark:bg-[#0B1221]/50 border-t border-indigo-200 dark:border-indigo-500/30 flex flex-col gap-2 relative">
            <div className="js-chat-attachments hidden flex flex-wrap gap-2 mb-1 px-1"></div>
            <div className="flex gap-3">
               <button type="button" className="js-capture-btn shrink-0 bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-indigo-600 hover:border-indigo-400 dark:hover:text-indigo-400 dark:hover:border-indigo-500 transition-all flex items-center justify-center focus:outline-none" title="Pilih Area Dokumen">
                 <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
               </button>
               <input type="text" placeholder="misal, Buat ringkasan lebih berdampak..." className="js-chat-input flex-1 bg-white/50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-5 py-3 text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-slate-500" />
               <button className="js-chat-send bg-indigo-600 text-white rounded-xl px-5 py-3 hover:bg-indigo-500 transition-all font-semibold text-sm flex items-center gap-2 shadow-[0_0_15px_rgba(79,70,229,0.3)]">
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
