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
      
      {/* Dashboard Link */}
      <div className="mb-4">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white transition-colors font-medium text-sm px-3 py-2 rounded-lg">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Kembali ke Dashboard
        </Link>
      </div>

      {/* Premium Switch Navigation */}
      <div className="flex justify-center mb-12 relative z-50">
        <div className="bg-slate-200/50 dark:bg-slate-800/50 p-1 rounded-2xl flex items-center gap-1 border border-slate-300 dark:border-slate-700 shadow-xl backdrop-blur-md">
          <Link to={`/portfolio/build?id=${doc?.id || idOrSlug}`} className="px-8 py-2.5 rounded-xl text-sm font-bold transition-all text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-white/50 dark:hover:bg-white/5">
            Editor Portofolio
          </Link>
          <div className="px-8 py-2.5 rounded-xl text-sm font-bold bg-white dark:bg-cyan-600 text-cyan-600 dark:text-white shadow-lg border border-slate-200 dark:border-cyan-500/30 transition-all">
            Hasil Akhir
          </div>
        </div>
      </div>

        {/* PC View Container */}
        <div className="w-full min-h-[80vh] relative shadow-lg rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-500 ease-in-out bg-slate-900" id="portfolio-document-container">
           <PortfolioViewer templateId={doc?.templateId || 'BentoGelap'} data={doc?.content} />
        </div>

    </div>
  );
}
