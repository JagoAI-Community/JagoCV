import { Globe, Mail, MapPin, Phone } from 'lucide-react';
import { ResumeData } from '../../models/resume.types';

interface Props {
  data: ResumeData;
}

export default function A4ReactResume({ data }: Props) {
  return (
    <div className="bg-slate-200 flex items-center justify-center py-10 px-4 print:p-0 print:bg-white w-full h-full overflow-auto">
      {/* A4 Canvas */}
      <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl flex shrink-0 overflow-hidden print:shadow-none mx-auto relative relative transform origin-top md:scale-100 scale-75">
        {/* Left Sidebar */}
        <div className="w-[33%] bg-primary-950 text-white p-6 flex flex-col gap-6 shrink-0 overflow-hidden">
          
          <div className="relative self-center mt-2 flex flex-col items-center">
            <div className="w-28 h-28 bg-slate-300 border-4 border-white rotate-3 shadow-lg flex items-center justify-center overflow-hidden mb-4">
              <img 
                src={data.profile.image || 'https://via.placeholder.com/150'} 
                alt={data.profile.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1 text-center">
              <h1 className="text-3xl font-extrabold uppercase tracking-tight leading-none">{data.profile.name}</h1>
              <h2 className="text-[11px] font-semibold text-secondary-500 uppercase tracking-widest mt-1.5">{data.profile.headline}</h2>
            </div>
          </div>

          <div className="space-y-3 py-4 border-b border-primary-800/50">
            <ul className="flex flex-col gap-2.5 text-[11px] font-medium text-white/90">
                <li className="flex items-center gap-2.5"><Globe className="w-4 h-4"/><span>{data.profile.contact.website}</span></li>
                <li className="flex items-center gap-2.5"><Mail className="w-4 h-4"/><span>{data.profile.contact.email}</span></li>
                <li className="flex items-center gap-2.5"><Phone className="w-4 h-4"/><span>{data.profile.contact.phone}</span></li>
                <li className="flex items-center gap-2.5"><MapPin className="w-4 h-4"/><span>{data.profile.contact.location}</span></li>
            </ul>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-[13px] font-bold uppercase border-l-2 border-secondary-500 pl-2">Ringkasan Profil</h3>
            <p className="text-[11px] italic text-primary-100/80 leading-relaxed">
              {data.profile.summary}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-[13px] font-bold uppercase border-l-2 border-secondary-500 pl-2">Keterampilan Teknis</h3>
            <div className="space-y-3">
              {Object.entries(data.profile.skills || {}).map(([category, skills]) => (
                <div key={category} className="space-y-1.5">
                  <h4 className="text-[11px] font-semibold text-primary-300">{category}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map(skill => (
                      <span key={skill} className="px-1.5 py-0.5 bg-primary-800 text-[10px] rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-1.5 pb-2">
            <h3 className="text-[13px] font-bold uppercase border-l-2 border-secondary-500 pl-2">Bahasa & Ketertarikan</h3>
            <ul className="text-[11px] space-y-1.5 flex flex-col mt-2">
              {(data.profile.languages || []).map(val => (
                <li key={val} className="flex items-center gap-2 flex-wrap">
                  <span className="w-1 h-1 shrink-0 bg-secondary-500 rounded-full"></span>
                  <span>{val}</span>
                </li>
              ))}
              {(data.profile.interests || []).map(val => (
                <li key={val} className="flex items-center gap-2 flex-wrap">
                  <span className="w-1 h-1 shrink-0 bg-secondary-500 rounded-full"></span>
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-[67%] bg-white p-8 flex flex-col gap-6 shrink-0 overflow-hidden text-slate-800">
          
          {/* Experience */}
          {data.experience && data.experience.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-[15px] font-black text-primary-950 uppercase tracking-tighter flex items-center gap-2">
                <span className="w-5 h-1 bg-primary-600"></span> Pengalaman
              </h2>
              <div className="space-y-5">
                {data.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-5 border-l border-primary-100 space-y-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">{exp.title} &mdash; <span className="font-medium text-slate-600">{exp.company}</span></h4>
                      <span className="px-2 py-0.5 mt-0.5 bg-primary-600 text-white text-[9px] font-bold rounded-full uppercase shrink-0">{exp.period}</span>
                    </div>
                    <ul className="text-[11px] list-disc list-outside ml-3 text-slate-600 flex flex-col gap-1.5 mt-2 marker:text-primary-400">
                      {exp.tasks.map((task, i) => <li key={i}>{task}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Featured Projects */}
          {data.projects && data.projects.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-[15px] font-black text-primary-950 uppercase tracking-tighter flex items-center gap-2">
                <span className="w-5 h-1 bg-primary-600"></span> Proyek Unggulan
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {data.projects.map((proj, idx) => {
                  const isAmber = idx % 2 !== 0;
                  const borderClass = isAmber ? "border-secondary-300" : "border-primary-300";
                  const bgClass = isAmber ? "bg-secondary-50/40" : "bg-primary-50/40";
                  const textTitle = isAmber ? "text-secondary-900" : "text-primary-900";
                  const badgeBorder = isAmber ? "border-secondary-200" : "border-primary-200";
                  const badgeText = isAmber ? "text-secondary-600" : "text-primary-600";

                  return (
                  <div key={idx} className={`p-4 border border-dashed rounded-sm space-y-2 flex flex-col ${borderClass} ${bgClass}`}>
                    {proj.image && (
                      <img src={proj.image} alt={proj.name} className="w-full h-24 object-cover rounded shadow-sm border border-black/5" />
                    )}
                    <div className="space-y-0.5">
                      <h4 className={`text-[13px] font-bold leading-tight ${textTitle}`}>{proj.name}</h4>
                      <a href={proj.url.startsWith('http') ? proj.url : `https://${proj.url}`} className="text-[10px] text-slate-500 font-medium hover:underline flex items-center gap-1"><Globe className="w-3 h-3" /> {proj.url.replace(/^https?:\/\//, '')}</a>
                    </div>
                    <p className="text-[11px] text-slate-600 italic leading-relaxed flex-1">
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
          )}

          {/* Education */}
          {data.education && data.education.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-[15px] font-black text-primary-950 uppercase tracking-tighter flex items-center gap-2">
                <span className="w-5 h-1 bg-primary-600"></span> Pendidikan
              </h2>
              <div className="space-y-3">
                {data.education.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-slate-50 p-3 border-r-2 border-primary-200">
                    <div className="space-y-0.5">
                      <h3 className="text-[13px] font-bold text-slate-900">{edu.degree}</h3>
                      <p className="text-[11px] text-slate-500">{edu.campus}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 shrink-0 ml-4">
                      <span className="px-2 py-0.5 bg-primary-600 text-white text-[9px] rounded uppercase">{edu.year}</span>
                      <span className="px-2 py-0.5 bg-primary-100 text-primary-600 text-[9px] font-bold rounded">IPK: {edu.gpa}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Availability */}
          {data.availability && (
            <div className="mt-auto p-5 bg-primary-50 border-l-4 border-primary-600">
              <h4 className="text-xs font-bold text-primary-950 mb-1.5">Ketersediaan</h4>
              <p className="text-[11px] text-primary-900/70 font-medium leading-relaxed">
                {data.availability}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
