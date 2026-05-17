import { Globe, Mail, MapPin, Phone } from 'lucide-react';
import { ResumeData } from '../../models/resume.types';

export const metadata = {
  name: 'Layout Modern Standar (A4)',
  desc: 'Bersih, minimalis, dan sangat profesional untuk semua industri.'
};

interface Props {
  data: ResumeData;
}

export default function ModernMinimalis({ data }: Props) {
  // Determine if sections are empty to show placeholders
  const isWebsitePlaceholder = !data.profile.contact.website;
  const isEmailPlaceholder = !data.profile.contact.email;
  const isPhonePlaceholder = !data.profile.contact.phone;
  const isLocationPlaceholder = !data.profile.contact.location;
  const isSummaryPlaceholder = !data.profile.summary;

  const isSkillsPlaceholder = !data.profile.skills || Object.keys(data.profile.skills).length === 0;
  const skillsData = !isSkillsPlaceholder 
    ? data.profile.skills 
    : { "Keahlian": ["[Keahlian Teknis 1]", "[Keahlian Teknis 2]", "[Keahlian Teknis 3]"] };

  const isLangPlaceholder = !data.profile.languages || data.profile.languages.length === 0;
  const languagesData = !isLangPlaceholder 
    ? data.profile.languages 
    : ["[Bahasa 1]", "[Bahasa 2]"];

  const isInterestPlaceholder = !data.profile.interests || data.profile.interests.length === 0;
  const interestsData = !isInterestPlaceholder 
    ? data.profile.interests 
    : ["[Minat / Hobi 1]", "[Minat / Hobi 2]"];

  const isExpPlaceholder = !data.experience || data.experience.length === 0;
  const experiences = !isExpPlaceholder 
    ? data.experience 
    : [
        {
          title: "[Jabatan Pekerjaan]",
          company: "[Nama Perusahaan]",
          period: "[Periode Kerja]",
          tasks: [
            "[Deskripsikan tugas dan tanggung jawab utama Anda di sini]",
            "[Tuliskan pencapaian terbaik atau metrik yang berhasil Anda raih]"
          ]
        }
      ];

  const isEduPlaceholder = !data.education || data.education.length === 0;
  const educations = !isEduPlaceholder 
    ? data.education 
    : [
        {
          degree: "[Gelar / Program Studi]",
          campus: "[Nama Kampus / Institusi]",
          year: "[Tahun Mulai - Lulus]",
          gpa: "[IPK]"
        }
      ];

  const isProjPlaceholder = !data.projects || data.projects.length === 0;
  const projects = !isProjPlaceholder 
    ? data.projects 
    : [
        {
          name: "[Nama Proyek Unggulan]",
          url: "[tautan-proyek.com]",
          description: "[Jelaskan secara singkat mengenai proyek yang pernah Anda kerjakan, solusi yang Anda tawarkan, dan kontribusi Anda...]",
          techStack: ["[Teknologi 1]", "[Teknologi 2]"]
        }
      ];

  return (
    <div className="bg-slate-200 flex items-center justify-center py-10 px-4 print:p-0 print:bg-white w-full h-full overflow-auto hide-scrollbar">
      {/* A4 Canvas */}
      <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl flex shrink-0 overflow-hidden print:shadow-none mx-auto relative transform origin-top md:scale-100 scale-75">
        
        {/* Left Sidebar */}
        <div className="w-[33%] bg-indigo-950 text-white p-6 flex flex-col gap-6 shrink-0 overflow-hidden">
          
          <div className="relative self-center mt-2 flex flex-col items-center">
            <div className="w-28 h-28 bg-slate-300 border-4 border-white rotate-3 shadow-lg flex items-center justify-center overflow-hidden mb-4">
              <img 
                src={data.profile.image || 'https://via.placeholder.com/150'} 
                alt={data.profile.name || "Foto Profil"} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1 text-center">
              <h1 className="text-3xl font-extrabold uppercase tracking-tight leading-none">
                {data.profile.name || <span className="opacity-50 italic text-2xl font-bold">[Nama Anda]</span>}
              </h1>
              <h2 className="text-[11px] font-semibold text-indigo-400 uppercase tracking-widest mt-1.5">
                {data.profile.headline || <span className="opacity-60 italic">[Headline Pekerjaan]</span>}
              </h2>
            </div>
          </div>

          <div className="space-y-3 py-4 border-b border-indigo-800/50">
            <ul className="flex flex-col gap-2.5 text-[11px] font-medium text-white/90">
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 shrink-0" />
                <span className={isWebsitePlaceholder ? "opacity-50 italic" : ""}>
                  {data.profile.contact.website || "[Website / Portofolio]"}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0" />
                <span className={isEmailPlaceholder ? "opacity-50 italic" : ""}>
                  {data.profile.contact.email || "[Email Anda]"}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0" />
                <span className={isPhonePlaceholder ? "opacity-50 italic" : ""}>
                  {data.profile.contact.phone || "[Nomor Telepon]"}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className={isLocationPlaceholder ? "opacity-50 italic" : ""}>
                  {data.profile.contact.location || "[Lokasi / Domisili]"}
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-[13px] font-bold uppercase border-l-2 border-indigo-400 pl-2">Ringkasan Profil</h3>
            <p className={`text-[11px] leading-relaxed ${isSummaryPlaceholder ? "opacity-50 italic" : "text-indigo-100/80"}`}>
              {data.profile.summary || "[Tulis ringkasan profil profesional singkat Anda di sini untuk menjelaskan keahlian utama, pengalaman terbaik, dan apa yang bisa Anda tawarkan kepada perusahaan...]"}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-[13px] font-bold uppercase border-l-2 border-indigo-400 pl-2">Keterampilan Teknis</h3>
            <div className={`space-y-3 ${isSkillsPlaceholder ? "opacity-50 italic" : ""}`}>
              {Object.entries(skillsData || {}).map(([category, skills]) => (
                <div key={category} className="space-y-1.5">
                  <h4 className="text-[11px] font-semibold text-indigo-300">{category}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map(skill => (
                      <span key={skill} className="px-1.5 py-0.5 bg-indigo-800 text-[10px] rounded font-normal">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-1.5 pb-2">
            <h3 className="text-[13px] font-bold uppercase border-l-2 border-indigo-400 pl-2">Bahasa & Hobi</h3>
            <ul className={`text-[11px] space-y-1.5 flex flex-col mt-2 ${isLangPlaceholder && isInterestPlaceholder ? "opacity-50 italic" : ""}`}>
              {languagesData.map(val => (
                <li key={val} className="flex items-center gap-2 flex-wrap">
                  <span className="w-1 h-1 shrink-0 bg-indigo-400 rounded-full"></span>
                  <span>{val}</span>
                </li>
              ))}
              {interestsData.map(val => (
                <li key={val} className="flex items-center gap-2 flex-wrap">
                  <span className="w-1 h-1 shrink-0 bg-indigo-400 rounded-full"></span>
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-[67%] bg-white p-8 flex flex-col gap-6 shrink-0 overflow-hidden text-slate-800">
          
          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-[15px] font-black text-indigo-950 uppercase tracking-tighter flex items-center gap-2">
              <span className="w-5 h-1 bg-indigo-600"></span> Pengalaman
            </h2>
            <div className={`space-y-5 ${isExpPlaceholder ? "opacity-50 italic" : ""}`}>
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-5 border-l border-indigo-100 space-y-1">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {exp.title} &mdash; <span className="font-medium text-slate-600">{exp.company}</span>
                    </h4>
                    <span className="px-2 py-0.5 mt-0.5 bg-indigo-600 text-white text-[9px] font-bold rounded-full uppercase shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="text-[11px] list-disc list-outside ml-3 text-slate-600 flex flex-col gap-1.5 mt-2 marker:text-primary-400">
                    {exp.tasks.map((task, i) => <li key={i}>{task}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="text-[15px] font-black text-indigo-950 uppercase tracking-tighter flex items-center gap-2">
              <span className="w-5 h-1 bg-indigo-600"></span> Proyek Unggulan
            </h2>
            <div className={`grid grid-cols-2 gap-4 ${isProjPlaceholder ? "opacity-50 italic" : ""}`}>
              {projects.map((proj, idx) => {
                const isAmber = idx % 2 !== 0;
                const borderClass = isAmber ? "border-indigo-300" : "border-indigo-300";
                const bgClass = isAmber ? "bg-indigo-50/40" : "bg-slate-50/40";
                const textTitle = isAmber ? "text-indigo-900" : "text-primary-900";
                const badgeBorder = isAmber ? "border-indigo-200" : "border-slate-200";
                const badgeText = isAmber ? "text-indigo-600" : "text-indigo-600";

                return (
                  <div key={idx} className={`p-4 border border-dashed rounded-sm space-y-2 flex flex-col ${borderClass} ${bgClass}`}>
                    <div className="space-y-0.5">
                      <h4 className={`text-[13px] font-bold leading-tight ${textTitle}`}>{proj.name}</h4>
                      <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                        <Globe className="w-3 h-3 shrink-0" /> {proj.url}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed flex-1">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.techStack.map(ts => (
                        <span key={ts} className={`px-1.5 py-0.5 border text-[10px] bg-white font-medium rounded ${badgeBorder} ${badgeText}`}>
                          {ts}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-[15px] font-black text-indigo-950 uppercase tracking-tighter flex items-center gap-2">
              <span className="w-5 h-1 bg-indigo-600"></span> Pendidikan
            </h2>
            <div className={`space-y-3 ${isEduPlaceholder ? "opacity-50 italic" : ""}`}>
              {educations.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-center bg-slate-50 p-3 border-r-2 border-slate-200">
                  <div className="space-y-0.5">
                    <h3 className="text-[13px] font-bold text-slate-900">{edu.degree}</h3>
                    <p className="text-[11px] text-slate-500">{edu.campus}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0 ml-4">
                    <span className="px-2 py-0.5 bg-indigo-600 text-white text-[9px] rounded uppercase">{edu.year}</span>
                    {edu.gpa && (
                      <span className="px-2 py-0.5 bg-indigo-100 text-indigo-600 text-[9px] font-bold rounded">
                        IPK: {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
