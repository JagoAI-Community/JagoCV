import React from 'react';

export default function SettingsView() {
  return (
    <>
      <div id="view-settings" className="hidden animate-[fadeIn_0.5s_ease_forwards]">
        <div className="max-w-2xl mx-auto mt-10">
          <button id="btn-back-from-settings" className="mb-6 flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white px-3 py-2 rounded-xl transition-colors font-semibold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Kembali
          </button>
          
          <div className="bg-white dark:bg-[#0B1221] rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
             <div className="p-8 border-b border-slate-200 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Pengaturan Akun</h2>
                <p className="text-sm text-slate-500 mt-1">Kelola preferensi keamanan, notifikasi, dan berlangganan.</p>
             </div>
             
             <div className="p-8 space-y-8">
                {/* Security Section */}
                <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Keamanan</h3>
                    
                    <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <div>
                            <p className="font-semibold text-slate-900 dark:text-white text-sm">Ganti Kata Sandi</p>
                            <p className="text-xs text-slate-500 mt-0.5">Disarankan diganti secara berkala.</p>
                        </div>
                        <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition">Ubah</button>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <div>
                            <p className="font-semibold text-slate-900 dark:text-white text-sm">Autentikasi Dua Faktor (2FA)</p>
                            <p className="text-xs text-slate-500 mt-0.5">Tingkatkan keamanan akun dengan lapisan sekunder.</p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in text-slate-400">
                            <input type="checkbox" name="toggle" id="toggle-2fa" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none top-[1px] left-[1px] checked:right-[1px] checked:left-auto checked:border-blue-500 border-slate-300" />
                            <label htmlFor="toggle-2fa" className="toggle-label block overflow-hidden h-5.5 rounded-full bg-slate-200 dark:bg-slate-700 cursor-pointer"></label>
                        </div>
                    </div>
                </div>

                {/* Notifications Section */}
                <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Notifikasi</h3>
                    
                    <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <div>
                            <p className="font-semibold text-slate-900 dark:text-white text-sm">Email Promosi & Tips</p>
                            <p className="text-xs text-slate-500 mt-0.5">Dapatkan info pembaruan dan tips lamaran kerja.</p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in text-blue-500">
                            <input type="checkbox" name="toggle" id="toggle-notif" defaultChecked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none top-[1px] right-[1px] border-blue-500" />
                            <label htmlFor="toggle-notif" className="toggle-label block overflow-hidden h-5.5 rounded-full bg-blue-500 cursor-pointer"></label>
                        </div>
                    </div>
                </div>

                {/* Danger Zone */}
                <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-red-500 dark:text-red-400">Zona Bahaya</h3>
                    
                    <div className="flex items-center justify-between p-4 rounded-xl border border-red-200 dark:border-red-900/30 bg-red-50/50 dark:bg-red-900/10">
                        <div>
                            <p className="font-semibold text-red-700 dark:text-red-400 text-sm">Hapus Akun</p>
                            <p className="text-xs text-red-600/70 dark:text-red-400/70 mt-0.5">Hapus seluruh data CV dan portofolio Anda permanen.</p>
                        </div>
                        <button className="px-4 py-2 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-lg text-xs font-semibold hover:bg-red-200 dark:hover:bg-red-900 transition">Hapus Akun</button>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Required bit of CSS for generic toggles if not fully done by Tailwind via arbitrary values, but using arbitrary styling or plain tailwind structure usually suffices if carefully constructed. Here using a small style block just for the toggle positioning if needed. */}
      <style dangerouslySetInnerHTML={{__html: `
        .toggle-checkbox:checked { right: 0; border-color: #3b82f6; }
        .toggle-checkbox:checked + .toggle-label { background-color: #3b82f6; }
        .toggle-checkbox { transition: all 0.3s; }
      `}} />
    </>
  );
}
