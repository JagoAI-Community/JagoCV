import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { LayoutSelection } from './LayoutSelection';
import { useWizard } from '../../controllers/useWizard';
import { useAuth } from '../../controllers/useAuth';
import { api } from '../../services/api';
import { CvFormData, createEmptyExperience, createEmptyEducation } from '../../models/document';

export default function CreateCvView() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const { user } = useAuth();
  const [isAiMode, setIsAiMode] = useState(false);
  const [aiStep, setAiStep] = useState(1);
  const { currentStep, nextStep, prevStep } = useWizard(1, 5);
  const [isSaving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState<CvFormData>({
    fullName: '',
    targetRole: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    portfolio: '',
    summary: '',
    experiences: [createEmptyExperience()],
    educations: [createEmptyEducation()],
    skills: '',
  });

  // Load user profile data (only for new document)
  useEffect(() => {
    if (user && !id) {
      setFormData(prev => ({
        ...prev,
        fullName: user.name || '',
        targetRole: user.headline || '',
        email: user.email || '',
        location: user.location || '',
        phone: user.phones?.[0]?.number || '',
        linkedin: user.socialLinks?.find(l => l.platform.toLowerCase() === 'linkedin')?.url || '',
        portfolio: user.socialLinks?.find(l => ['portfolio', 'website', 'personal website'].includes(l.platform.toLowerCase()))?.url || '',
        summary: user.bio || '',
        photoUrl: user.profileImageUrl || '',
      }));
    }
  }, [user, id]);

  const [doc, setDoc] = useState<any>(null);

  // Load existing document data if editing
  useEffect(() => {
    if (id) {
      const fetchDoc = async () => {
        try {
          const data = await api.getDocument(id);
          setDoc(data);
          if (data && data.content) {
            setFormData(data.content as CvFormData);
          }
        } catch (err) {
          console.error("Gagal memuat dokumen:", err);
        }
      };
      fetchDoc();
    }
  }, [id]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1024 * 1024 * 2) {
        alert("File terlalu besar. Maksimal 2MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        updateField('photoUrl', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateField = (field: keyof CvFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveDocument = async (status: 'SELESAI' | 'DRAF' = 'SELESAI') => {
    setIsSaving(true);
    try {
      const payload = {
        title: `${formData.fullName} - ${formData.targetRole} CV`,
        type: 'ATS_CV',
        content: formData as any,
        status,
        templateId: 'modern-ats',
        isAiGenerated: isAiMode // Pass flag to backend
      };

      if (id) {
        const res = await api.updateDocument(id, payload as any);
        if (status === 'SELESAI') {
          navigate(`/cv/result/${res?.slug || id}`);
        } else {
          navigate('/dashboard');
        }
      } else {
        const res = await api.saveDocument(payload as any);
        if (status === 'SELESAI' && res?.id) {
          navigate(`/cv/result/${res?.slug || res.id}`);
        } else {
          navigate('/dashboard');
        }
      }
    } catch (err: any) {
      console.error(err);
      alert(err.message || 'Gagal menyimpan CV');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="animate-[fadeIn_0.5s_ease_forwards]">

      {/* Premium Switch Navigation */}
      <div className="flex justify-center mb-12 relative z-50">
        <div className="bg-slate-200/50 dark:bg-slate-800/50 p-1 rounded-2xl flex items-center gap-1 border border-slate-300 dark:border-slate-700 shadow-xl backdrop-blur-md">
          <div className="px-8 py-2.5 rounded-xl text-sm font-bold bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-lg border border-slate-200 dark:border-blue-500/30 transition-all">
            Editor CV
          </div>
          <button 
            onClick={() => {
              const identifier = doc?.slug || id;
              if (identifier) navigate(`/cv/result/${identifier}`);
              else handleSaveDocument('SELESAI');
            }}
            className="px-8 py-2.5 rounded-xl text-sm font-bold transition-all text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-white/50 dark:hover:bg-white/5"
          >
            Hasil Akhir
          </button>
        </div>
      </div>

      {/* Back Link */}
      <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors mb-6 group w-fit">
        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Kembali ke Dasbor
      </Link>

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
                <div id="cv-progress-bar" className={`absolute left-0 top-5 -translate-y-1/2 h-1.5 bg-[#1E5EFF] shadow-[0_0_10px_rgba(37,99,235,0.5)] rounded-full z-0 transition-all duration-700 ease-out`} style={{width: `${(currentStep - 1) * 25}%`}}></div>
                
                <div className={`relative z-10 flex flex-col items-center gap-2 group cv-step-indicator ${currentStep >= 1 ? 'active' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${currentStep >= 1 ? 'bg-[#1E5EFF] text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] scale-110' : 'bg-white dark:bg-[#070B19] border-2 border-slate-200 dark:border-[#2A3143] text-slate-400'}`}>1</div>
                  <span className={`text-[11px] font-bold mt-1 transition-colors uppercase tracking-wider ${currentStep >= 1 ? 'text-[#1E5EFF] dark:text-blue-400' : 'text-slate-400 hidden sm:block'}`}>Pribadi</span>
                </div>
                <div className={`relative z-10 flex flex-col items-center gap-2 group cv-step-indicator ${currentStep >= 2 ? 'active' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${currentStep >= 2 ? 'bg-[#1E5EFF] text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] scale-110' : 'bg-white dark:bg-[#070B19] border-2 border-slate-200 dark:border-[#2A3143] text-slate-400'}`}>2</div>
                  <span className={`text-[11px] font-bold mt-1 transition-colors uppercase tracking-wider ${currentStep >= 2 ? 'text-[#1E5EFF] dark:text-blue-400' : 'text-slate-400 hidden sm:block'}`}>Pengalaman</span>
                </div>
                <div className={`relative z-10 flex flex-col items-center gap-2 group cv-step-indicator ${currentStep >= 3 ? 'active' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${currentStep >= 3 ? 'bg-[#1E5EFF] text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] scale-110' : 'bg-white dark:bg-[#070B19] border-2 border-slate-200 dark:border-[#2A3143] text-slate-400'}`}>3</div>
                  <span className={`text-[11px] font-bold mt-1 transition-colors uppercase tracking-wider ${currentStep >= 3 ? 'text-[#1E5EFF] dark:text-blue-400' : 'text-slate-400 hidden sm:block'}`}>Pendidikan</span>
                </div>
                <div className={`relative z-10 flex flex-col items-center gap-2 group cv-step-indicator ${currentStep >= 4 ? 'active' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${currentStep >= 4 ? 'bg-[#1E5EFF] text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] scale-110' : 'bg-white dark:bg-[#070B19] border-2 border-slate-200 dark:border-[#2A3143] text-slate-400'}`}>4</div>
                  <span className={`text-[11px] font-bold mt-1 transition-colors uppercase tracking-wider ${currentStep >= 4 ? 'text-[#1E5EFF] dark:text-blue-400' : 'text-slate-400 hidden sm:block'}`}>Keahlian</span>
                </div>
                <div className={`relative z-10 flex flex-col items-center gap-2 group cv-step-indicator ${currentStep >= 5 ? 'active' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${currentStep >= 5 ? 'bg-[#1E5EFF] text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] scale-110' : 'bg-white dark:bg-[#070B19] border-2 border-slate-200 dark:border-[#2A3143] text-slate-400'}`}>5</div>
                  <span className={`text-[11px] font-bold mt-1 transition-colors uppercase tracking-wider ${currentStep >= 5 ? 'text-[#1E5EFF] dark:text-blue-400' : 'text-slate-400 hidden sm:block'}`}>Selesai</span>
                </div>
              </div>
            </div>
            <div className="rounded-[14px] p-1.5 flex items-center mb-6 border border-slate-200 dark:border-[#2A3143] bg-transparent">
              <button onClick={() => setIsAiMode(false)} className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${!isAiMode ? 'bg-[#1E5EFF] text-white' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}>Form Manual</button>
              <button onClick={() => setIsAiMode(true)} className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 group ${isAiMode ? 'bg-[#1E5EFF] text-white' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}>
                <svg className={`w-4 h-4 group-hover:animate-pulse ${isAiMode ? 'text-white' : 'text-[#1E5EFF]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                Otomatis Buat via AI
              </button>
            </div>

            {/* CONTAINER: MANUAL FORMS */}
            {!isAiMode && (
              <div className="space-y-6 block animate-[fadeIn_0.3s_ease_forwards]">
              {/* Personal Info */}
              {currentStep === 1 && (
            <div className="cv-step block rounded-[24px] p-6 md:p-8 border border-slate-200 dark:border-[#2A3143] bg-transparent">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-blue-100 dark:bg-[#1E5EFF]/20 flex items-center justify-center text-blue-600 dark:text-[#88A4E6] text-xs">1</span>
                Data Pribadi
              </h2>
              
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                {/* Photo Upload Handler */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <label className="flex flex-col items-center justify-center w-32 h-32 rounded-full border-2 border-dashed border-slate-300 dark:border-[#2A3143] bg-slate-50 dark:bg-transparent hover:bg-slate-100 dark:hover:bg-white/5 hover:border-[#1E5EFF] cursor-pointer transition-all group relative overflow-hidden">
                    {formData.photoUrl ? (
                      <img src={formData.photoUrl} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <>
                        <svg className="w-8 h-8 text-slate-400 group-hover:text-[#1E5EFF] mb-2 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span className="text-[10px] text-slate-500 font-medium">Tambah Foto</span>
                      </>
                    )}
                    <input type="file" accept="image/*" onChange={handlePhotoUpload} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" title="Unggah Foto" />
                  </label>
                  {formData.photoUrl && (
                    <button onClick={() => updateField('photoUrl', '')} className="text-[10px] font-bold text-red-500 hover:underline">Hapus Foto</button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Nama Lengkap *</label>
                    <input type="text" value={formData.fullName} onChange={e => updateField('fullName', e.target.value)} placeholder="John Doe" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Peran Target *</label>
                    <input type="text" value={formData.targetRole} onChange={e => updateField('targetRole', e.target.value)} placeholder="e.g. Frontend Developer" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Alamat Email *</label>
                  <input type="email" value={formData.email} onChange={e => updateField('email', e.target.value)} placeholder="john@example.com" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Nomor Telepon</label>
                    {user?.phones && user.phones.length > 0 && (
                      <select 
                        onChange={(e) => updateField('phone', e.target.value)}
                        className="bg-transparent text-[10px] text-blue-500 font-bold outline-none cursor-pointer border-none p-0 h-auto"
                      >
                        <option value="">Pilih dari Profil</option>
                        {user.phones.map((p, idx) => (
                          <option key={idx} value={p.number}>{p.label}: {p.number}</option>
                        ))}
                      </select>
                    )}
                  </div>
                  <input type="tel" value={formData.phone} onChange={e => updateField('phone', e.target.value)} placeholder="+1 (555) 000-0000" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Lokasi (Kota, Negara)</label>
                  <input type="text" value={formData.location} onChange={e => updateField('location', e.target.value)} placeholder="Jakarta, Indonesia" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">LinkedIn URL</label>
                  <input type="url" value={formData.linkedin} onChange={e => updateField('linkedin', e.target.value)} placeholder="linkedin.com/in/johndoe" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Portfolio / Website URL</label>
                  <input type="url" value={formData.portfolio} onChange={e => updateField('portfolio', e.target.value)} placeholder="johndoe.com" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                </div>
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Ringkasan Profesional</label>
                  <textarea rows={3} value={formData.summary} onChange={e => updateField('summary', e.target.value)} placeholder="Gambaran singkat karir dan pencapaian utama Anda..." className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all resize-none"></textarea>
                </div>
              </div>
              <div className="flex justify-end mt-8 pt-6 border-t border-slate-100 dark:border-[#2A3143]"><button type="button" onClick={nextStep} className="bg-[#1E5EFF] hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 active:scale-95">Selanjutnya <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button></div>
            </div>
            )}

            {/* Pengalaman Kerja dummy block */}
            {currentStep === 2 && (
            <div className="cv-step rounded-[24px] p-6 md:p-8 border border-slate-200 dark:border-[#2A3143] bg-transparent">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-blue-100 dark:bg-[#1E5EFF]/20 flex items-center justify-center text-blue-600 dark:text-[#88A4E6] text-xs">2</span>
                  Pengalaman Kerja
                </h2>
                <button onClick={() => updateField('experiences', [...formData.experiences, createEmptyExperience()])} className="text-xs font-semibold text-blue-600 dark:text-[#88A4E6] hover:text-blue-700 dark:hover:text-white flex items-center gap-1 bg-blue-100 dark:bg-transparent border dark:border-[#2A3143] px-3 py-1.5 rounded-lg transition-colors hover:bg-blue-200 dark:hover:bg-white/5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  Tambah Peran
                </button>
              </div>
              {formData.experiences.map((exp, idx) => (
                <div key={exp.id} className="border border-slate-300/50 dark:border-[#2A3143] rounded-2xl p-5 bg-slate-100 dark:bg-transparent mb-4 relative">
                   {formData.experiences.length > 1 && (
                     <button onClick={() => {
                        const newExps = [...formData.experiences];
                        newExps.splice(idx, 1);
                        updateField('experiences', newExps);
                     }} className="absolute top-4 right-4 text-slate-400 hover:text-red-500">✕</button>
                   )}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Nama Perusahaan</label>
                        <input type="text" value={exp.company} onChange={e => { const updated = [...formData.experiences]; updated[idx].company = e.target.value; updateField('experiences', updated); }} placeholder="GoTo" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Jabatan</label>
                        <input type="text" value={exp.title} onChange={e => { const updated = [...formData.experiences]; updated[idx].title = e.target.value; updateField('experiences', updated); }} placeholder="Frontend Developer" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Bulan / Tahun Mulai</label>
                        <input type="month" value={exp.startDate} onChange={e => { const updated = [...formData.experiences]; updated[idx].startDate = e.target.value; updateField('experiences', updated); }} className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Bulan / Tahun Selesai</label>
                        <input type="month" value={exp.endDate} onChange={e => { const updated = [...formData.experiences]; updated[idx].endDate = e.target.value; updateField('experiences', updated); }} disabled={exp.isCurrent} className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all disabled:opacity-50" />
                      </div>
                   </div>
                   <div className="flex items-center gap-2 mb-4">
                     <input type="checkbox" id={`current_job_${idx}`} checked={exp.isCurrent} onChange={e => { const updated = [...formData.experiences]; updated[idx].isCurrent = e.target.checked; if(e.target.checked) updated[idx].endDate = ''; updateField('experiences', updated); }} className="w-4 h-4 rounded border-slate-300 text-[#1E5EFF] focus:ring-[#1E5EFF] bg-transparent" />
                     <label htmlFor={`current_job_${idx}`} className="text-xs text-slate-600 dark:text-slate-400">Saya masih bekerja di sini</label>
                   </div>
                   <div className="space-y-1.5">
                     <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Deskripsi & Pencapaian</label>
                     <textarea rows={4} value={exp.description} onChange={e => { const updated = [...formData.experiences]; updated[idx].description = e.target.value; updateField('experiences', updated); }} placeholder="Jelaskan pencapaian menggunakan kata kerja aktif (mis. Mengembangkan X dengan Y dan menghasilkan Z)" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all resize-none"></textarea>
                   </div>
                </div>
              ))}
              <div className="flex justify-between mt-8 pt-6 border-t border-slate-100 dark:border-[#2A3143]">
                 <button type="button" onClick={prevStep} className="bg-slate-100 dark:bg-[#1A2133] hover:bg-slate-200 dark:hover:bg-[#2A3143] text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 active:scale-95"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> Sebelumnya</button>
                 <button type="button" onClick={nextStep} className="bg-[#1E5EFF] hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 active:scale-95">Selanjutnya <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
              </div>
            </div>
            )}

            {/* Pendidikan block */}
            {currentStep === 3 && (
            <div className="cv-step rounded-[24px] p-6 md:p-8 border border-slate-200 dark:border-[#2A3143] bg-transparent">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-blue-100 dark:bg-[#1E5EFF]/20 flex items-center justify-center text-blue-600 dark:text-[#88A4E6] text-xs">3</span>
                  Pendidikan
                </h2>
                <button onClick={() => updateField('educations', [...formData.educations, createEmptyEducation()])} className="text-xs font-semibold text-blue-600 dark:text-[#88A4E6] hover:text-blue-700 dark:hover:text-white flex items-center gap-1 bg-blue-100 dark:bg-transparent border dark:border-[#2A3143] px-3 py-1.5 rounded-lg transition-colors hover:bg-blue-200 dark:hover:bg-white/5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  Tambah Pendidikan
                </button>
              </div>
              {formData.educations.map((edu, idx) => (
                <div key={edu.id} className="border border-slate-300/50 dark:border-[#2A3143] rounded-2xl p-5 bg-slate-100 dark:bg-transparent mb-4 relative">
                   {formData.educations.length > 1 && (
                     <button onClick={() => {
                        const newEdus = [...formData.educations];
                        newEdus.splice(idx, 1);
                        updateField('educations', newEdus);
                     }} className="absolute top-4 right-4 text-slate-400 hover:text-red-500">✕</button>
                   )}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Nama Institusi / Universitas</label>
                        <input type="text" value={edu.institution} onChange={e => { const updated = [...formData.educations]; updated[idx].institution = e.target.value; updateField('educations', updated); }} placeholder="Universitas Telkom" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Gelar</label>
                        <input type="text" value={edu.degree} onChange={e => { const updated = [...formData.educations]; updated[idx].degree = e.target.value; updateField('educations', updated); }} placeholder="Sarjana Komputer (S.Kom)" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Bidang Studi</label>
                        <input type="text" value={edu.fieldOfStudy} onChange={e => { const updated = [...formData.educations]; updated[idx].fieldOfStudy = e.target.value; updateField('educations', updated); }} placeholder="Informatika" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tahun Mulai</label>
                        <input type="text" value={edu.startYear} onChange={e => { const updated = [...formData.educations]; updated[idx].startYear = e.target.value; updateField('educations', updated); }} placeholder="2018" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tahun Lulus</label>
                        <input type="text" value={edu.endYear} onChange={e => { const updated = [...formData.educations]; updated[idx].endYear = e.target.value; updateField('educations', updated); }} placeholder="2022" className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all" />
                      </div>
                   </div>
                </div>
              ))}
              <div className="flex justify-between mt-8 pt-6 border-t border-slate-100 dark:border-[#2A3143]">
                 <button type="button" onClick={prevStep} className="bg-slate-100 dark:bg-[#1A2133] hover:bg-slate-200 dark:hover:bg-[#2A3143] text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 active:scale-95"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> Sebelumnya</button>
                 <button type="button" onClick={nextStep} className="bg-[#1E5EFF] hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 active:scale-95">Selanjutnya <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
              </div>
            </div>
            )}

            {/* Keterampilan block */}
            {currentStep === 4 && (
            <div className="cv-step rounded-[24px] p-6 md:p-8 border border-slate-200 dark:border-[#2A3143] bg-transparent">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-blue-100 dark:bg-[#1E5EFF]/20 flex items-center justify-center text-blue-600 dark:text-[#88A4E6] text-xs">4</span>
                Keterampilan
              </h2>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Keterampilan Relevan (Pisahkan dengan koma)</label>
                <textarea rows={3} value={formData.skills} onChange={e => updateField('skills', e.target.value)} placeholder="React, TypeScript, Node.js, Project Management, Agile..." className="w-full bg-white dark:bg-[#1A2133] border border-slate-300 dark:border-[#2A3143] rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-600 focus:border-[#1E5EFF] focus:ring-1 focus:ring-[#1E5EFF] outline-none transition-all resize-none"></textarea>
              </div>
              <div className="flex justify-between mt-8 pt-6 border-t border-slate-100 dark:border-[#2A3143]">
                 <button type="button" onClick={prevStep} className="bg-slate-100 dark:bg-[#1A2133] hover:bg-slate-200 dark:hover:bg-[#2A3143] text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 active:scale-95"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg> Sebelumnya</button>
                 <button type="button" onClick={nextStep} className="bg-[#1E5EFF] hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 active:scale-95">Pilih Layout <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
              </div>
            </div> 
            )}

            {/* Section 2: Template Select & Generate */}
            {currentStep === 5 && (
            <div className="cv-step w-full">
              <div className="grid grid-cols-1 gap-6">
                
                <LayoutSelection theme="blue" stepNumber={5} />

                {/* Aksi Button */}
                <div className="rounded-[24px] p-6 border border-slate-200 dark:border-[#2A3143] bg-transparent mt-6">
                   <div className="flex items-center gap-4">
                      <button type="button" onClick={prevStep} className="shrink-0 bg-slate-100 dark:bg-[#1A2133] hover:bg-slate-200 dark:hover:bg-[#2A3143] text-slate-700 dark:text-slate-300 px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer" title="Kembali ke Keterampilan">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                      </button>
                      <button onClick={() => handleSaveDocument('SELESAI')} disabled={isSaving} className="flex-1 bg-[#5A45FF] hover:bg-[#4C3BDE] disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(90,69,255,0.4)] flex items-center justify-center gap-2 group">
                        <svg className={`w-5 h-5 ${isSaving ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isSaving ? "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" : "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"}></path></svg>
                        {isSaving ? 'Memproses...' : 'Selesaikan & Lihat Hasil'}
                      </button>
                   </div>
                   <button onClick={() => handleSaveDocument('DRAF')} disabled={isSaving} className="w-full mt-3 py-3 border border-slate-300 dark:border-[#2A3143] text-slate-600 dark:text-slate-400 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-xs">
                     Simpan ke Draf (Lanjutkan Nanti)
                   </button>
                  <p className="text-center text-[9px] text-slate-500 mt-4 px-4 leading-relaxed">
                    Dengan menekan buat, Anda setuju untuk memformat data Anda mengikuti pedoman parser ATS global melalui jagoCV Engine.
                  </p>
                </div>
              
              </div>
            </div>
            )}
              </div>
            )} {/* END CONTAINER: MANUAL FORMS */}

            {/* CONTAINER: AI MAGIC STORY */}
            {isAiMode && (
            <div className="animate-[fadeIn_0.3s_ease_forwards]">
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
                  <textarea rows={6} placeholder="Ketik prompt Anda di sini... (misal: Hai, saya Salman, lulusan Telkom Uni 2024. Pengalaman 2 tahun sebagai Junior Frontend di GoTo. Buatkan CV yang fokus pada keahlian React dan Tailwind)" className="w-full bg-transparent p-5 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 outline-none resize-none leading-relaxed"></textarea>
                  
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
                       <button onClick={() => handleSaveDocument('SELESAI')} className="bg-[#1E5EFF] hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 group">
                          Buat CV AI
                          <svg className="w-5 h-5 group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                       </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            )} {/* END CONTAINER: AI MAGIC STORY */}

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
               
               {/* Live Preview State */}
               <div className="flex flex-col gap-6 font-sans">
                 
                 {/* Auto-Sort Badge */}
                 <div className="flex justify-end">
                   <div className="flex items-center gap-1.5 px-2 py-1 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-md">
                     <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path></svg>
                     <span className="text-[9px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tight">Terurut Otomatis (Terbaru di Atas)</span>
                   </div>
                 </div>
                 
                 {/* Header */}
                 <div className="flex flex-col items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-6 text-center">
                    {formData.photoUrl && (
                      <img src={formData.photoUrl} alt="Avatar" className="w-16 h-16 rounded-full object-cover mb-2 border-2 border-[#1E5EFF]" />
                    )}
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-wider">{formData.fullName || 'NAMA LENGKAP'}</h1>
                   <p className="text-sm font-semibold text-[#1E5EFF]">{formData.targetRole || 'Peran Target'}</p>
                   <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-2 text-[11px] text-slate-600 dark:text-slate-400">
                     {formData.email && <span>{formData.email}</span>}
                     {formData.phone && <span>• {formData.phone}</span>}
                     {formData.location && <span>• {formData.location}</span>}
                     {formData.linkedin && <span>• {formData.linkedin.replace('https://', '')}</span>}
                     {formData.portfolio && <span>• {formData.portfolio.replace('https://', '')}</span>}
                   </div>
                 </div>

                 {/* Summary */}
                 {formData.summary && (
                   <div>
                     <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">Ringkasan</h3>
                     <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed text-justify whitespace-pre-wrap">{formData.summary}</p>
                   </div>
                 )}

                 {/* Experience */}
                 {formData.experiences.some(e => e.company || e.title) && (
                   <div>
                     <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest border-b border-slate-200 dark:border-slate-800 pb-1 mb-4">Pengalaman Kerja</h3>
                     <div className="space-y-5">
                        {[...formData.experiences]
                          .filter(e => e.company || e.title)
                          .sort((a, b) => {
                            if (a.isCurrent && !b.isCurrent) return -1;
                            if (!a.isCurrent && b.isCurrent) return 1;
                            const dateA = a.endDate || a.startDate || '';
                            const dateB = b.endDate || b.startDate || '';
                            return dateB.localeCompare(dateA);
                          })
                          .map((exp, i) => (
                         <div key={exp.id || i}>
                           <div className="flex justify-between items-start mb-1.5">
                             <div className="flex flex-col">
                               <span className="text-sm font-bold text-slate-900 dark:text-white">{exp.title || 'Jabatan'}</span>
                               <span className="text-xs font-medium text-[#1E5EFF]">{exp.company || 'Nama Perusahaan'}</span>
                             </div>
                             <span className="text-[11px] font-medium text-slate-500 whitespace-nowrap">
                               {exp.startDate ? new Date(exp.startDate).toLocaleDateString('id-ID', { month: 'short', year: 'numeric' }) : 'Mulai'} - {exp.isCurrent ? 'Sekarang' : (exp.endDate ? new Date(exp.endDate).toLocaleDateString('id-ID', { month: 'short', year: 'numeric' }) : 'Selesai')}
                             </span>
                           </div>
                           <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap ml-3 pl-3 border-l-2 border-slate-200 dark:border-slate-800">{exp.description || 'Deskripsi pekerjaan dan pencapaian akan tampil di sini.'}</p>
                         </div>
                       ))}
                     </div>
                   </div>
                 )}

                 {/* Education */}
                 {formData.educations.some(e => e.institution || e.degree) && (
                   <div>
                     <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest border-b border-slate-200 dark:border-slate-800 pb-1 mb-4">Pendidikan</h3>
                     <div className="space-y-4">
                        {[...formData.educations]
                          .filter(e => e.institution || e.degree)
                          .sort((a, b) => {
                            const dateA = a.endYear || a.startYear || '';
                            const dateB = b.endYear || b.startYear || '';
                            return dateB.localeCompare(dateA);
                          })
                          .map((edu, i) => (
                         <div key={edu.id || i} className="flex justify-between items-start">
                           <div className="flex flex-col">
                             <span className="text-sm font-bold text-slate-900 dark:text-white">{edu.institution || 'Nama Institusi'}</span>
                             <span className="text-xs text-slate-600 dark:text-slate-400">{edu.degree || 'Gelar'}{edu.fieldOfStudy ? `, ${edu.fieldOfStudy}` : ''}</span>
                           </div>
                           <span className="text-[11px] font-medium text-slate-500">
                             {edu.startYear || 'Tahun'} - {edu.endYear || 'Tahun'}
                           </span>
                         </div>
                       ))}
                     </div>
                   </div>
                 )}

                 {/* Skills */}
                 {formData.skills && (
                   <div>
                     <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">Keterampilan</h3>
                     <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{formData.skills}</p>
                   </div>
                 )}

               </div>

             </div>
          </div>

        </div>

      </div>
  );
}
