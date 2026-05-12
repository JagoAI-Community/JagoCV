import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { exportToPdf, exportToPng } from '../../utils/export';

export default function ResumeResultView() {
  const { idOrSlug } = useParams();
  const [doc, setDoc] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!idOrSlug) return;
    const fetchDoc = async () => {
      try {
        const data = await api.getDocument(idOrSlug);
        setDoc(data);
      } catch (err: any) {
        setError(err.message || 'Gagal mengambil data');
      } finally {
        setLoading(false);
      }
    };
    fetchDoc();
  }, [idOrSlug]);

  if (loading) return <div className="p-20 text-center">Memuat dokumen...</div>;
  if (error || !doc) return <div className="p-20 text-center text-red-500">{error || 'Dokumen tidak ditemukan'}</div>;

  return (
    <div className="animate-[fadeIn_0.5s_ease_forwards]">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <Link to="/resume/design" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white transition-colors font-medium text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Kembali ke Editor
        </Link>
          
          <div className="flex items-center gap-3">
             <button 
                onClick={() => exportToPng('resume-document-container', `Resume_${doc?.title || 'Document'}`)}
                className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold border border-slate-300 dark:border-slate-700 transition-all flex items-center gap-2 group"
             >
                <svg className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0V20a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h10l4 4v10z"></path></svg>
                Download PNG
             </button>
             <button 
                onClick={() => exportToPdf('resume-document-container', `Resume_${doc?.title || 'Document'}`)}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold shadow-lg shadow-indigo-500/30 transition-all flex items-center gap-2 group"
             >
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Download PDF
             </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-8 items-start w-full">
          {/* Left Col: Document */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <div className="w-full max-w-5xl mx-auto bg-slate-50 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row text-slate-900 font-sans leading-relaxed text-sm relative" id="resume-document-container">
              
              {/* Left Sidebar (Accent Color) */}
          <div className="w-full md:w-1/3 bg-indigo-900 text-white p-8 sm:p-10 flex flex-col gap-8 custom-resume-section relative group border border-transparent hover:border-indigo-400 transition-all cursor-pointer">
            <button className="btn-ask-ai absolute -right-4 top-4 opacity-0 group-hover:opacity-100 transition-all bg-white shadow-xl shadow-indigo-900/50 border border-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold flex items-center gap-1 hover:bg-indigo-50 z-20 hover:scale-105">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              Polish Detail
            </button>
            {/* Photo/Initials placeholder */}
            <div className="w-32 h-32 rounded-full bg-indigo-800 border-4 border-indigo-400/30 flex items-center justify-center text-4xl font-bold tracking-tighter shadow-lg mx-auto md:mx-0">
               SU
            </div>

            <div>
               <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-300 border-b border-indigo-700 pb-1 mb-4">Kontak</h2>
               <ul className="space-y-3 text-sm">
                  <li className="flex flex-col gap-0.5">
                     <span className="text-indigo-400 font-semibold text-xs">Email</span>
                     <span>salmanuyat25@gmail.com</span>
                  </li>
                  <li className="flex flex-col gap-0.5">
                     <span className="text-indigo-400 font-semibold text-xs">Phone</span>
                     <span>+62 812 3456 7890</span>
                  </li>
                  <li className="flex flex-col gap-0.5">
                     <span className="text-indigo-400 font-semibold text-xs">Location</span>
                     <span>Jakarta, Indonesia</span>
                  </li>
                  <li className="flex flex-col gap-0.5">
                     <span className="text-indigo-400 font-semibold text-xs">Website</span>
                     <span>jagocv.link/salmanuyat</span>
                  </li>
               </ul>
            </div>

            <div>
               <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-300 border-b border-indigo-700 pb-1 mb-4">Skills</h2>
               <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-800/80 rounded-lg text-xs font-medium border border-indigo-700">React.js</span>
                  <span className="px-3 py-1 bg-indigo-800/80 rounded-lg text-xs font-medium border border-indigo-700">TipeScript</span>
                  <span className="px-3 py-1 bg-indigo-800/80 rounded-lg text-xs font-medium border border-indigo-700">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-indigo-800/80 rounded-lg text-xs font-medium border border-indigo-700">UI/UX Design</span>
                  <span className="px-3 py-1 bg-indigo-800/80 rounded-lg text-xs font-medium border border-indigo-700">Figma</span>
               </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="w-full md:w-2/3 p-8 sm:p-12 bg-white">
            
            <header className="mb-10 text-center md:text-left relative group custom-resume-section p-4 -m-4 rounded-2xl border border-transparent hover:border-indigo-100 hover:bg-slate-50 transition-all cursor-pointer">
              <button className="btn-ask-ai absolute -right-0 -top-4 opacity-0 group-hover:opacity-100 transition-all bg-white shadow-xl shadow-indigo-200/50 border border-indigo-100 text-indigo-600 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold flex items-center gap-1 hover:bg-indigo-50 z-20 hover:scale-105">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                Tulis Ulang AI
              </button>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-2">Salman <span className="text-indigo-600">Uyat</span></h1>
              <h2 className="text-lg md:text-xl font-medium text-slate-500 tracking-wide uppercase">Creative Frontend Developer</h2>
              <div className="w-12 h-1 bg-indigo-500 mt-6 mx-auto md:mx-0"></div>
            </header>

            <section className="mb-8 relative group custom-resume-section p-4 -m-4 rounded-2xl border border-transparent hover:border-indigo-100 hover:bg-slate-50 transition-all cursor-pointer">
              <button className="btn-ask-ai absolute -right-0 -top-4 opacity-0 group-hover:opacity-100 transition-all bg-white shadow-xl shadow-indigo-200/50 border border-indigo-100 text-indigo-600 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold flex items-center gap-1 hover:bg-indigo-50 z-20 hover:scale-105">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                Tulis Ulang AI
              </button>
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-4 flex items-center gap-2">
                 <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                 Profil
              </h3>
              <p className="text-slate-900 leading-relaxed">
                Pengembang Frontend yang teliti dan bersemangat, memadukan implementasi teknis dan desain. Berpengalaman bekerja dalam tim yang bergerak cepat membangun antarmuka tingkat perusahaan yang modern dan ringan. Saya percaya pada penulisan kode yang bersih, membangun antarmuka responsif, dan selalu mengutamakan pengalaman pengguna.
              </p>
            </section>

            <section className="mb-8 relative group custom-resume-section p-4 -m-4 rounded-2xl border border-transparent hover:border-indigo-100 hover:bg-slate-50 transition-all cursor-pointer">
              <button className="btn-ask-ai absolute -right-0 -top-4 opacity-0 group-hover:opacity-100 transition-all bg-white shadow-xl shadow-indigo-200/50 border border-indigo-100 text-indigo-600 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold flex items-center gap-1 hover:bg-indigo-50 z-20 hover:scale-105">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                Tulis Ulang AI
              </button>
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-6 flex items-center gap-2">
                 <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                 Pengalaman
              </h3>
              
              <div className="relative pl-6 border-l-2 border-indigo-100">
                 {/* Timeline dot */}
                 <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                 <div className="mb-2">
                   <h4 className="font-bold text-slate-900 text-base">Pengembang Frontend Junior</h4>
                   <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-2">
                     <span>GoTo Group</span> • <span>Mei 2024 - Sekarang</span>
                   </div>
                 </div>
                 <p className="text-slate-900 text-sm">
                   Memimpin pengembangan dasbor pelaporan internal terpadu, mengoptimalkan komponen dan meningkatkan kecepatan rendering sebesar 20%. Mengintegrasikan library charting dengan API REST backend yang kompleks.
                 </p>
              </div>
            </section>

            <section className="relative group custom-resume-section p-4 -m-4 rounded-2xl border border-transparent hover:border-indigo-100 hover:bg-slate-50 transition-all cursor-pointer">
              <button className="btn-ask-ai absolute -right-0 -top-4 opacity-0 group-hover:opacity-100 transition-all bg-white shadow-xl shadow-indigo-200/50 border border-indigo-100 text-indigo-600 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold flex items-center gap-1 hover:bg-indigo-50 z-20 hover:scale-105">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                Tulis Ulang AI
              </button>
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-6 flex items-center gap-2">
                 <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-9-5m9 5l9-5"></path></svg>
                 Pendidikan
              </h3>
              <div className="relative pl-6 border-l-2 border-indigo-100">
                 {/* Timeline dot */}
                 <div className="absolute w-3 h-3 bg-indigo-300 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                 <h4 className="font-bold text-slate-900 text-base">B.S. Computer Science</h4>
                 <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                   <span>Telkom University</span> • <span>Class of 2024</span>
                 </div>
              </div>
            </section>

          </div>
          </div>
          </div>
        
          {/* Right Col: AI Chat */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-6 flex flex-col">
            {/* Dokumen-level AI Chat Widget (Resume) */}
            <div className="js-global-chat w-full bg-[#f4f5f9] border border-indigo-200 dark:bg-white/5 dark:border-indigo-500/30 rounded-2xl overflow-hidden backdrop-blur-sm shadow-xl">
              {/* Chat Header */}
          <div className="bg-[#d8dbff] dark:bg-indigo-600/20 px-6 py-4 border-b border-indigo-200 dark:border-indigo-500/30 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Asisten Resume</h3>
              <p className="text-xs text-[#8f96fd] dark:text-indigo-300">Minta AI untuk memodifikasi tata letak ruang, mengubah warna, atau menyesuaikan nuansa.</p>
            </div>
          </div>
          
          {/* Chat Context */}
          <div className="p-6 space-y-4">
             <div className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
               </div>
               <div className="bg-[#898eac] dark:bg-indigo-950/50 border-none dark:border-indigo-500/20 p-4 rounded-2xl rounded-tl-none text-[13.5px] text-white dark:text-slate-200 shadow-sm leading-relaxed max-w-2xl">
                 Resume visual Anda terlihat keren! Ingin mencoba tema yang lebih gelap, atau mungkin gaya bahasa yang lebih profesional?
               </div>
             </div>
             
             {/* Quick Aksi */}
             <div className="flex flex-wrap gap-2 pl-12">
                <button className="px-3 py-1.5 bg-[#ded7ff] hover:bg-[#d0c6fa] dark:bg-indigo-600/20 dark:hover:bg-indigo-600/40 text-[#8f96fd] dark:text-indigo-300 text-xs font-medium rounded-xl border border-[#c4bdff] dark:border-indigo-500/30 transition-colors">🎨 Ganti ke Tema Emerald</button>
                <button className="px-3 py-1.5 bg-[#ded7ff] hover:bg-[#d0c6fa] dark:bg-indigo-600/20 dark:hover:bg-indigo-600/40 text-[#8f96fd] dark:text-indigo-300 text-xs font-medium rounded-xl border border-[#c4bdff] dark:border-indigo-500/30 transition-colors">👔 Buat nada lebih formal</button>
                <button className="px-3 py-1.5 bg-[#ded7ff] hover:bg-[#d0c6fa] dark:bg-indigo-600/20 dark:hover:bg-indigo-600/40 text-[#8f96fd] dark:text-indigo-300 text-xs font-medium rounded-xl border border-[#c4bdff] dark:border-indigo-500/30 transition-colors">🌐 Terjemahkan ke Bahasa Inggris</button>
             </div>
          </div>
          
          {/* Input Area */}
          <div className="p-4 bg-slate-50 dark:bg-[#0B1221]/50 border-t border-indigo-200 dark:border-indigo-500/30 flex flex-col gap-2 relative">
            <div className="js-chat-attachments hidden flex flex-wrap gap-2 mb-1 px-1"></div>
            <div className="flex gap-3">
               <button type="button" className="js-capture-btn shrink-0 bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-indigo-600 hover:border-indigo-400 dark:hover:text-indigo-400 dark:hover:border-indigo-500 transition-all flex items-center justify-center focus:outline-none" title="Pilih Area Dokumen">
                 <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
               </button>
               <input type="text" placeholder="misal, Ubah templat ke tata letak 1-kolom..." className="js-chat-input flex-1 bg-white/50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-5 py-3 text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-slate-500" />
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
  );
}
