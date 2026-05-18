import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { exportToPdf, exportToPng } from '../../utils/export';
import PortfolioViewer from '../PortfolioViewer';

export default function PortfolioResultView() {
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
        <Link to="/portfolio/build" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white transition-colors font-medium text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Kembali ke Editor
        </Link>
          
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
              <button 
                onClick={() => exportToPng('portfolio-document-container', `Portfolio_${doc?.title || 'Document'}`)}
                className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold border border-slate-300 dark:border-slate-700 transition-all flex items-center gap-2 group"
              >
                <svg className="w-4 h-4 text-cyan-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0V20a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h10l4 4v10z"></path></svg>
                Export PNG
              </button>
              <button 
                onClick={() => exportToPdf('portfolio-document-container', `Portfolio_${doc?.title || 'Document'}`)}
                className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-bold shadow-lg shadow-cyan-500/30 transition-all flex items-center gap-2 group"
              >
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Export PDF
              </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-8 items-start w-full">
          {/* Left Col: Document */}
          <div className="w-full lg:w-2/3 flex flex-col transition-all duration-500" id="portfolio-document-wrapper">
          <div className="w-full min-h-[80vh] relative shadow-2xl rounded-[3rem] border-[8px] border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-500 ease-in-out bg-slate-900" id="portfolio-document-container">
             <PortfolioViewer templateId={doc?.templateId || 'BentoGelap'} data={doc?.content} />
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
  );
}
