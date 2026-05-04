import React from 'react';

export default function EditProfileView() {
  return (
    <>
      <div id="view-edit-profile" className="hidden animate-[fadeIn_0.5s_ease_forwards]">
        <div className="max-w-2xl mx-auto mt-10">
          <button id="btn-back-from-edit-profile" className="mb-6 flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-white/5 dark:hover:text-white px-3 py-2 rounded-xl transition-colors font-semibold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Kembali ke Profil
          </button>
          
          <div className="bg-white dark:bg-[#0B1221] rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
             <div className="p-8 border-b border-slate-200 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Edit Profil</h2>
                <p className="text-sm text-slate-500 mt-1">Perbarui informasi profil dan personalisasi akun Anda.</p>
             </div>
             
             <div className="p-8 space-y-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                   <div className="relative group shrink-0">
                      <div className="p-1 bg-white dark:bg-[#0B1221] rounded-full border border-slate-200 dark:border-slate-700">
                         <img id="edit-profile-img-preview" src="https://ui-avatars.com/api/?name=User&background=eff6ff&color=3b82f6" alt="Profile" className="w-24 h-24 rounded-full object-cover" />
                      </div>
                      <button className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition-colors" title="Ubah Foto">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      </button>
                   </div>
                   <div className="flex-1 w-full text-center sm:text-left">
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Foto Profil</h3>
                      <p className="text-xs text-slate-500 mb-4">Disarankan rasio 1:1, ukuran maksimal 2MB. Format .jpg atau .png.</p>
                      <div className="flex gap-2 justify-center sm:justify-start">
                         <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition">Unggah Foto</button>
                         <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition">Hapus</button>
                      </div>
                   </div>
                </div>

                <div className="space-y-5">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                         <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Nama Depan</label>
                         <input type="text" id="edit-profile-fname" className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white" placeholder="Masukkan nama depan" />
                      </div>
                      <div>
                         <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Nama Belakang</label>
                         <input type="text" id="edit-profile-lname" className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white" placeholder="Masukkan nama belakang" />
                      </div>
                   </div>
                   
                   <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Pekerjaan / Peran</label>
                      <input type="text" id="edit-profile-role" className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white" placeholder="misal. Senior Frontend Engineer" />
                   </div>

                   <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Lokasi / Kota</label>
                      <div className="relative">
                         <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                         </div>
                         <input type="text" id="edit-profile-location" className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white" placeholder="misal. Jakarta, Indonesia" />
                      </div>
                   </div>
                   
                   <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Akun (Tidak bisa diubah)</label>
                      <div className="relative">
                         <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                         </div>
                         <input type="text" disabled className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-500 cursor-not-allowed" value="salmanuyat25@gmail.com" />
                      </div>
                   </div>
                </div>
             </div>

             <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex justify-end gap-3">
                <button id="btn-cancel-edit-profile" className="px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-semibold transition-colors">Batal</button>
                <button id="btn-save-profile" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-blue-500/30">Simpan Perubahan</button>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}
