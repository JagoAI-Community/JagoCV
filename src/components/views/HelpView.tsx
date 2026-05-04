import React from 'react';

export default function HelpView() {
  return (
    <>
      <div id="view-help" className="hidden animate-[fadeIn_0.5s_ease_forwards]">
        <div className="max-w-3xl mx-auto mt-10">
          <button id="btn-back-from-help" className="mb-6 flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white px-3 py-2 rounded-xl transition-colors font-semibold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Kembali
          </button>
          
          <div className="bg-white dark:bg-[#0B1221] rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
             
             {/* Header */}
             <div className="p-8 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-900 dark:to-slate-900/50">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Pusat Bantuan</h2>
                <p className="text-sm text-slate-500 mt-1">FAQ dan panduan cepat jagoCV.</p>
                
                <div className="mt-6 relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="text" className="w-full bg-white dark:bg-[#0B1221] border border-slate-300 dark:border-slate-700 shadow-sm rounded-xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white" placeholder="Cari masalah (misal, cara unduh pdf)..." />
                </div>
             </div>
             
             {/* Body */}
             <div className="p-8 space-y-8">
                
                {/* Popular FAQ */}
                <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">FAQ Populer</h3>
                    
                    <div className="space-y-3">
                        <details className="group border border-slate-200 dark:border-slate-700/50 rounded-xl bg-slate-50 dark:bg-slate-800/30 open:bg-white dark:open:bg-[#0B1221] transition-colors">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-slate-900 dark:text-white text-sm">
                                <span>Bagaimana cara mengunduh CV sebagai PDF?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="w-5 h-5 text-slate-400"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="p-4 pt-0 text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/50 mt-2">
                                Setelah Anda selesai mengisi form atau membuat CV secara otomatis dengan AI, Anda akan diarahkan ke halaman pratinjau. Di bagian atas kanan profil pratinjau Anda, klik tombol "Unduh PDF" untuk menyimpannya ke perangkat Anda. 
                            </div>
                        </details>
                        
                        <details className="group border border-slate-200 dark:border-slate-700/50 rounded-xl bg-slate-50 dark:bg-slate-800/30 open:bg-white dark:open:bg-[#0B1221] transition-colors">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-slate-900 dark:text-white text-sm">
                                <span>Apakah data saya aman jika menggunakan fitur AI?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="w-5 h-5 text-slate-400"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="p-4 pt-0 text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/50 mt-2">
                                Ya. Data yang Anda masukkan diproses oleh AI solely untuk membangun struktur profil dan paragraf deskripsi Anda. Kami tidak menyimpan atau melatih model data dari file cv/resume pribadi yang Anda kirim ke sistem.
                            </div>
                        </details>

                        <details className="group border border-slate-200 dark:border-slate-700/50 rounded-xl bg-slate-50 dark:bg-slate-800/30 open:bg-white dark:open:bg-[#0B1221] transition-colors">
                            <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold text-slate-900 dark:text-white text-sm">
                                <span>Perbedaan Layout ATS dan Kreatif?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" className="w-5 h-5 text-slate-400"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="p-4 pt-0 text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/50 mt-2">
                                Layout ATS dirancang khusus minimalis agar mudah dibaca oleh software perekrutan bot, sangat cocok untuk melamar di perusahaan korporat besar. Layout kreatif menonjolkan estetika desain (seperti foto dan icon), lebih cocok untuk profil presentasi atau melamar kerja industri kreatif/startup.
                            </div>
                        </details>
                    </div>
                </div>
                
                {/* Contact Sub */}
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 border border-indigo-100 dark:border-indigo-800/50 flex flex-col sm:flex-row items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-800 flex items-center justify-center shrink-0">
                        <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div className="text-center sm:text-left">
                        <h4 className="font-bold text-slate-900 dark:text-white text-base">Masih Butuh Bantuan?</h4>
                        <p className="text-sm text-slate-600 dark:text-indigo-200/80 mt-1 mb-3">Tim dukungan kami siap membalas dalam waktu kurang dari 24 jam di hari kerja.</p>
                        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-indigo-500/30">Hubungi Kami via Email</button>
                    </div>
                </div>

             </div>
          </div>
        </div>
      </div>
    </>
  );
}
