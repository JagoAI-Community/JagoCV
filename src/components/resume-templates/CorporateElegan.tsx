import React from 'react';
import { motion } from 'motion/react';
import { ResumeData } from '../../models/resume.types';

export const metadata = {
  name: 'Layout Dua Kolom Modern',
  desc: 'Desain dual-column yang modern dan efisien memaksimalkan penggunaan ruang.'
};

interface Props {
  data: ResumeData;
}

export default function CorporateElegan({ data }: Props) {
  const skillsList = Object.entries(data.profile.skills || {}).map(([category, items]) => ({
    category,
    items
  }));

  return (
    <div className="min-h-screen w-full bg-slate-200 py-10 overflow-x-auto flex justify-center items-start selection:bg-primary-200 selection:text-primary-900">
      
      {/* A4 Document Container */}
      <div className="w-[210mm] min-h-[297mm] flex flex-row shrink-0 bg-white shadow-2xl font-sans text-slate-900 print:shadow-none print:w-[210mm] print:min-h-[297mm] print:m-0 print:py-0 overflow-hidden transform origin-top md:scale-100 scale-75">
        
        {/* LEFT SIDEBAR: PROFILE */}
        <motion.aside 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-[33%] bg-primary-600 p-6 sm:p-8 text-white flex flex-col shrink-0"
        >
        <div className="flex flex-col h-full">
          <div>
            <div className="w-32 h-32 bg-secondary-400 rounded-2xl mb-8 shadow-lg transform rotate-3 flex items-center justify-center border-4 border-white overflow-hidden">
              <img 
                src={data.profile.image || 'https://via.placeholder.com/150'} 
                alt={data.profile.name} 
                className="w-full h-full object-cover transform -rotate-3 scale-110"
              />
            </div>

            <h1 className="text-4xl font-black leading-none mb-3 uppercase tracking-tighter">
              {data.profile.name.split(' ').map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i < data.profile.name.split(' ').length - 1 && <br/>}
                </React.Fragment>
              ))}
            </h1>
            <h2 className="text-secondary-300 font-semibold tracking-widest text-xs uppercase mb-8 text-left">
              {data.profile.headline}
            </h2>

            <div className="space-y-4 text-sm mb-10">
              <div className="grid grid-cols-1 gap-2.5 pb-5 border-b border-primary-400">
                {data.profile.contact.website && (
                  <a href={data.profile.contact.website.startsWith('http') ? data.profile.contact.website : `https://${data.profile.contact.website}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[13px] hover:text-secondary-300 transition-colors">
                    <span className="text-secondary-300 text-xs">●</span> {data.profile.contact.website}
                  </a>
                )}
                {data.profile.contact.email && (
                  <a href={`mailto:${data.profile.contact.email}`} className="flex items-center gap-3 text-[13px] hover:text-secondary-300 transition-colors">
                    <span className="text-secondary-300 text-xs">●</span> {data.profile.contact.email}
                  </a>
                )}
                {data.profile.contact.phone && (
                  <a href={`tel:${data.profile.contact.phone}`} className="flex items-center gap-3 text-[13px] hover:text-secondary-300 transition-colors">
                    <span className="text-secondary-300 text-xs">●</span> {data.profile.contact.phone}
                  </a>
                )}
                {data.profile.contact.location && (
                  <div className="flex items-center gap-3 text-[13px]">
                    <span className="text-secondary-300 text-xs">●</span> {data.profile.contact.location}
                  </div>
                )}
              </div>
              <div className="opacity-90 mt-5">
                <h3 className="font-bold text-secondary-300 uppercase text-[10px] mb-1.5 tracking-widest text-left">Ringkasan Profil Profesional</h3>
                <p className="leading-relaxed italic text-[13px]">{data.profile.summary}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8 mt-8">
            {skillsList.length > 0 && (
              <section>
                <h3 className="text-secondary-300 font-black uppercase text-xs tracking-widest mb-4 text-left">Keterampilan Teknis</h3>
                <div className="space-y-4">
                  {skillsList.map((skillGroup, idx) => (
                    <div key={idx}>
                      <h4 className="text-[10px] font-bold text-primary-200 uppercase mb-1.5">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((item, i) => (
                          <span key={i} className="px-2 py-1 bg-primary-700 text-[10px] rounded border border-primary-400 leading-none">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <div className="grid grid-cols-2 gap-4">
              {data.profile.languages && data.profile.languages.length > 0 && (
                <section>
                  <h3 className="text-secondary-300 font-black uppercase text-[10px] tracking-widest mb-2">Bahasa</h3>
                  <div className="flex flex-col gap-1.5 list-none">
                    {data.profile.languages.map((lang, idx) => (
                      <div key={idx} className="text-[11px] leading-tight flex items-start gap-2">
                        <span className="text-secondary-300 text-[8px] mt-0.5">●</span>
                        <span>{lang}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
              
              {data.profile.interests && data.profile.interests.length > 0 && (
                <section>
                  <h3 className="text-secondary-300 font-black uppercase text-[10px] tracking-widest mb-2">Ketertarikan</h3>
                  <div className="flex flex-col gap-1.5 list-none">
                    {data.profile.interests.map((hobby, idx) => (
                      <div key={idx} className="text-[11px] leading-tight flex items-start gap-2">
                        <span className="text-secondary-300 text-[8px] mt-0.5">●</span>
                        <span>{hobby}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </motion.aside>

      {/* RIGHT CONTENT */}
      <main className="flex-1 p-6 sm:p-8 flex flex-col bg-white overflow-hidden">
        <div className="w-full">
          
          <div className="flex flex-col gap-10">
            {/* WORK EXPERIENCE */}
            {data.experience && data.experience.length > 0 && (
              <div className="w-full">
                <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-200 pb-2">Experience</h2>
                
                <div className="space-y-8">
                  {data.experience.map((exp, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="w-1 bg-secondary-400 shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-1 xl:gap-4 mb-2">
                          <h4 className="font-bold text-lg leading-tight text-slate-900">{exp.title} — {exp.company}</h4>
                          <span className="text-[10px] bg-primary-600 text-white rounded px-2 py-1 font-bold whitespace-nowrap self-start">
                            {exp.period}
                          </span>
                        </div>
                        <div className="space-y-1.5 mt-2">
                          {exp.tasks.map((task, i) => (
                            <div key={i} className="flex gap-2">
                              <span className="text-slate-300 text-[10px] mt-1 shrink-0">■</span>
                              <p className="text-xs text-slate-600 italic leading-relaxed">{task}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PROJECTS & EDUCATION */}
            <div className="w-full grid grid-cols-2 gap-6 shrink-0">
              
              {/* FEATURED PROJECTS */}
              {data.projects && data.projects.length > 0 && (
                <section>
                  <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-200 pb-2">Featured Projects</h2>
                  <div className="space-y-4">
                    {data.projects.map((proj, idx) => (
                      <a 
                        key={idx} 
                        href={proj.url.startsWith('http') ? proj.url : `https://${proj.url}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="block p-4 border-2 border-dashed border-primary-200 rounded-lg group hover:border-secondary-400 hover:bg-slate-50 transition-all flex flex-col items-start"
                      >
                        {proj.image && (
                           <div className="w-full h-24 mb-3 rounded overflow-hidden">
                              <img src={proj.image} alt={proj.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                           </div>
                        )}
                        <h3 className="text-[11px] font-bold text-primary-600 uppercase mb-1 underline group-hover:text-secondary-600 transition-colors">
                          {proj.name}
                        </h3>
                        <p className="text-[12px] font-medium leading-snug text-slate-700 mb-2">
                          {proj.description}
                        </p>
                        
                        <div className="flex gap-1.5 flex-wrap mt-auto">
                          {proj.techStack.map((tech, i) => (
                            <span key={i} className="text-slate-500 font-bold uppercase tracking-wider text-[8px] bg-slate-100 px-1.5 py-0.5 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </a>
                    ))}
                  </div>
                </section>
              )}

              {/* EDUCATION */}
              {data.education && data.education.length > 0 && (
                <section>
                  <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-200 pb-2">Education</h2>
                  <div className="space-y-4">
                    {data.education.map((edu, idx) => (
                      <div key={idx}>
                        <h3 className="font-bold text-sm text-slate-900 text-left">{edu.degree} @ {edu.campus}</h3>
                        <p className="text-[11px] text-white mt-1 font-medium bg-primary-600 inline-block px-2 py-0.5 rounded text-left">{edu.year} • {edu.gpa}</p>
                      </div>
                    ))}
                  </div>
                  
                  {data.availability && (
                    <div className="mt-6">
                      <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-600">
                        <h3 className="text-[10px] font-bold uppercase text-primary-600 mb-1 tracking-widest">Availability</h3>
                        <p className="text-[12px] text-primary-900 italic font-medium">{data.availability}</p>
                      </div>
                    </div>
                  )}
                </section>
              )}

            </div>
          </div>
          
        </div>
      </main>
      </div>
    </div>
  );
}
