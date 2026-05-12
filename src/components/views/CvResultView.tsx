import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { CvFormData } from '../../models/document';
import { exportToPdf, exportToPng } from '../../utils/export';

export default function CvResultView() {
  const { idOrSlug } = useParams();
  const [doc, setDoc] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isCompiling, setIsCompiling] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!idOrSlug) {
      setError('ID Dokumen tidak ditemukan');
      setLoading(false);
      setIsCompiling(false);
      return;
    }

    const fetchDoc = async () => {
      try {
        const data = await api.getDocument(idOrSlug);
        setDoc(data);
        // Artificial delay for "compilation" effect
        setTimeout(() => {
          setIsCompiling(false);
        }, 2500);
      } catch (err: any) {
        setError(err.message || 'Gagal mengambil data dokumen');
        setIsCompiling(false);
      } finally {
        setLoading(false);
      }
    };

    fetchDoc();
  }, [idOrSlug]);

  if (!loading && (error || !doc)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-6">
        <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center text-red-600">
           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{error || 'Dokumen tidak ditemukan'}</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6">Pastikan link yang Anda gunakan benar atau dokumen tidak dihapus.</p>
          <Link to="/dashboard" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20">
            Kembali ke Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const content = (doc?.content as CvFormData) || { 
    fullName: '', 
    email: '', 
    phone: '', 
    linkedin: '', 
    summary: '', 
    experiences: [], 
    educations: [], 
    skills: '' 
  };

  return (
    <div className="animate-[fadeIn_0.5s_ease_forwards] max-w-6xl mx-auto px-4 py-8">
      {/* Premium Switch Navigation */}
      <div className="flex justify-center mb-12 relative z-50">
        <div className="bg-slate-200/50 dark:bg-slate-800/50 p-1 rounded-2xl flex items-center gap-1 border border-slate-300 dark:border-slate-700 shadow-xl backdrop-blur-md">
          <Link to={`/cv/build?id=${doc?.id || idOrSlug}`} className="px-8 py-2.5 rounded-xl text-sm font-bold transition-all text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-white/50 dark:hover:bg-white/5">
            Editor CV
          </Link>
          <div className="px-8 py-2.5 rounded-xl text-sm font-bold bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-lg border border-slate-200 dark:border-blue-500/30 transition-all">
            Hasil Akhir
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Hasil Final CV Anda</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Dokumen telah dioptimalkan untuk sistem ATS. Silakan tinjau sebelum mengunduh.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button 
            onClick={() => {
              console.log('PNG button clicked');
              exportToPng('cv-document-container', `CV_${content.fullName.replace(/\s+/g, '_')}`);
            }}
            className="px-6 py-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold border border-slate-300 dark:border-slate-700 transition-all flex items-center gap-2 group"
          >
            <svg className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0V20a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h10l4 4v10z"></path></svg>
            Unduh PNG
          </button>
          <button 
            onClick={() => {
              console.log('PDF button clicked');
              exportToPdf('cv-document-container', `CV_${content.fullName.replace(/\s+/g, '_')}`);
            }}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2 group"
          >
            <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Unduh PDF
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse gap-8 items-start w-full relative">
        {/* Compilation Indicator (Floating) */}
        {isCompiling && (
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[60] animate-[fadeIn_0.3s_ease_out]">
            <div className="bg-slate-900/90 backdrop-blur-md text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-0.5">Processing</span>
                <span className="text-sm font-medium text-slate-200">Menyusun struktur dokumen...</span>
              </div>
            </div>
          </div>
        )}

        {/* Left Col: Document Area */}
        <div className="w-full lg:w-2/3 flex flex-col relative min-h-[800px]">
          {/* Placeholder Overlay */}
          <div className={`absolute inset-0 z-50 transition-all duration-700 pointer-events-none ${isCompiling ? 'opacity-100' : 'opacity-0 scale-[0.98]'}`}>
            <div className="w-full max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md shadow-2xl p-8 sm:p-12 h-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100/50 dark:via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
              <div className="flex flex-col items-center gap-6 mb-12 animate-pulse">
                <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-800"></div>
                <div className="w-64 h-10 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
                <div className="w-96 h-4 bg-slate-100 dark:bg-slate-800/50 rounded-full"></div>
              </div>
              <div className="space-y-12 animate-pulse">
                {[1, 2, 3].map(i => (
                  <div key={i} className="space-y-4">
                    <div className="w-32 h-6 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
                    <div className="space-y-3">
                      <div className="w-full h-3 bg-slate-100 dark:bg-slate-800/50 rounded-full"></div>
                      <div className="w-full h-3 bg-slate-100 dark:bg-slate-800/50 rounded-full"></div>
                      <div className="w-3/4 h-3 bg-slate-100 dark:bg-slate-800/50 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 ${isCompiling ? 'opacity-0 blur-md scale-105' : 'opacity-100 blur-0 scale-100'}`}>
            <div className="w-full max-w-4xl mx-auto bg-white border border-slate-200 rounded-md shadow-2xl p-8 sm:p-12 text-slate-900 font-sans leading-relaxed text-sm relative" id="cv-document-container">
              {/* AI Editor Popover */}
              <div id="ai-edit-popover" className="hidden absolute z-50 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-indigo-100 w-80 p-4 animate-[zoomIn_0.2s_ease_out]">
                <div className="flex flex-col relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-indigo-100 transform rotate-45"></div>
                  <div className="flex items-center gap-2 mb-3 text-indigo-600 font-bold text-sm tracking-tight">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                    AI Editor
                  </div>
                  <textarea id="ai-edit-prompt" rows={3} placeholder="Beri tahu AI apa yang perlu diubah..." className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-700 outline-none resize-none mb-3 shadow-inner"></textarea>
                  <div className="flex justify-end gap-2">
                    <button id="btn-cancel-ai" className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500 hover:bg-slate-100">Cancel</button>
                    <button className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-colors flex items-center gap-1">
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
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2 uppercase">{content.fullName}</h1>
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-slate-900 font-medium">
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z"></path></svg> {content.email}</span>
                  {content.phone && (
                    <>
                      <span className="text-slate-400">|</span>
                      <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg> {content.phone}</span>
                    </>
                  )}
                  {content.linkedin && (
                    <>
                      <span className="text-slate-400">|</span>
                      <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg> {content.linkedin.replace(/^https?:\/\//, '')}</span>
                    </>
                  )}
                </div>
              </header>

              {/* Ringkasan Profesional */}
              {content.summary && (
                <section className="mb-6 relative group p-4 -m-4 rounded-xl border border-transparent hover:border-indigo-100 hover:bg-indigo-50/30 transition-all cursor-pointer">
                  <button className="btn-ask-ai absolute -right-4 -top-4 opacity-0 group-hover:opacity-100 transition-all bg-white shadow-xl shadow-indigo-200/50 border border-indigo-100 text-indigo-600 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold flex items-center gap-1 hover:bg-indigo-50 z-10 hover:scale-105">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                    Sempurnakan dengan AI
                  </button>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-800 pb-1 mb-3">Ringkasan Profesional</h2>
                  <p className="text-slate-900 text-justify whitespace-pre-wrap">{content.summary}</p>
                </section>
              )}

              {/* Experiences */}
              {content.experiences && content.experiences.length > 0 && (
                <section className="mb-6 relative group p-4 -m-4 rounded-xl border border-transparent hover:border-indigo-100 hover:bg-indigo-50/30 transition-all cursor-pointer">
                  <button className="btn-ask-ai absolute -right-4 -top-4 opacity-0 group-hover:opacity-100 transition-all bg-white shadow-xl shadow-indigo-200/50 border border-indigo-100 text-indigo-600 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold flex items-center gap-1 hover:bg-indigo-50 z-10 hover:scale-105">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                    Sempurnakan dengan AI
                  </button>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-800 pb-1 mb-3">Pengalaman Kerja</h2>
                  {content.experiences.filter(e => e.company).map((exp, idx) => (
                    <div key={exp.id || idx} className="mb-5 last:mb-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                        <h3 className="font-bold text-slate-900 text-base">{exp.company}</h3>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-900 italic">{exp.title}</h4>
                        <span className="text-slate-900 text-sm font-medium">
                          {exp.startDate ? new Date(exp.startDate).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }) : ''} &ndash; {exp.isCurrent ? 'Sekarang' : (exp.endDate ? new Date(exp.endDate).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }) : '')}
                        </span>
                      </div>
                      <p className="text-slate-900 text-justify whitespace-pre-wrap pl-2">{exp.description}</p>
                    </div>
                  ))}
                </section>
              )}

              {/* Education */}
              {content.educations && content.educations.length > 0 && (
                <section className="mb-6 relative group p-4 -m-4 rounded-xl border border-transparent hover:border-indigo-100 hover:bg-indigo-50/30 transition-all cursor-pointer">
                  <button className="btn-ask-ai absolute -right-4 -top-4 opacity-0 group-hover:opacity-100 transition-all bg-white shadow-xl shadow-indigo-200/50 border border-indigo-100 text-indigo-600 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold flex items-center gap-1 hover:bg-indigo-50 z-10 hover:scale-105">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                    Sempurnakan dengan AI
                  </button>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-800 pb-1 mb-3">Pendidikan</h2>
                  {content.educations.filter(e => e.institution).map((edu, idx) => (
                    <div key={edu.id || idx} className="mb-4 last:mb-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                        <h3 className="font-bold text-slate-900 text-base">{edu.institution}</h3>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <h4 className="font-semibold text-slate-900 italic">{edu.degree}{edu.fieldOfStudy ? `, ${edu.fieldOfStudy}` : ''}</h4>
                        <span className="text-slate-900 text-sm font-medium">{edu.startYear} &ndash; {edu.endYear || 'Sekarang'}</span>
                      </div>
                    </div>
                  ))}
                </section>
              )}

              {/* Skills */}
              {content.skills && (
                <section className="relative group p-4 -m-4 rounded-xl border border-transparent hover:border-indigo-100 hover:bg-indigo-50/30 transition-all cursor-pointer">
                  <button className="btn-ask-ai absolute -right-4 -top-4 opacity-0 group-hover:opacity-100 transition-all bg-white shadow-xl shadow-indigo-200/50 border border-indigo-100 text-indigo-600 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold flex items-center gap-1 hover:bg-indigo-50 z-10 hover:scale-105">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                    Sempurnakan dengan AI
                  </button>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-800 pb-1 mb-3">Keahlian</h2>
                  <p className="text-slate-900 whitespace-pre-wrap">{content.skills}</p>
                </section>
              )}
            </div>
          </div>
        </div>

        {/* Right Col: AI Chat */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-6 flex flex-col">
          <div className="js-global-chat w-full bg-[#f4f5f9] border border-indigo-200 dark:bg-white/5 dark:border-indigo-500/30 rounded-2xl overflow-hidden backdrop-blur-sm shadow-xl">
            <div className="bg-[#d8dbff] dark:bg-indigo-600/20 px-6 py-4 border-b border-indigo-200 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">Asisten Dokumen</h3>
                <p className="text-xs text-[#8f96fd] dark:text-indigo-300">Minta AI untuk mengulas dokumen Anda.</p>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div className="bg-[#898eac] dark:bg-indigo-950/50 p-4 rounded-2xl rounded-tl-none text-[13.5px] text-white">
                  Hai! Saya dapat membantu menyesuaikan CV Anda.
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-slate-50 dark:bg-[#0B1221]/50 border-t border-indigo-200 flex flex-col gap-2 relative">
              <div className="flex gap-3">
                <input type="text" placeholder="Tanya AI..." className="flex-1 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-5 py-3 text-sm" />
                <button className="bg-indigo-600 text-white rounded-xl px-5 py-3">Kirim</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
