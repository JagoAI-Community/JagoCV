import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { ResumeData } from '../../models/resume.types';

export const metadata = {
  name: 'Layout Klasik Ramah ATS',
  desc: 'Format satu halaman standar industri yang ramah sistem penyaringan ATS.'
};

interface Props {
  data: ResumeData;
}

export default function KlasikRamahAts({ data }: Props) {
  const skillsList = Object.entries(data.profile.skills || {}).map(([category, items]) => ({
    category,
    items
  }));

  return (
    <div className="min-h-screen bg-slate-200 flex items-center justify-center py-10 font-sans text-sm text-slate-900 overflow-auto">
      <main className="w-[210mm] min-h-[297mm] bg-white shadow-xl overflow-hidden flex flex-row shrink-0 transform origin-top md:scale-100 scale-75">
        
        {/* Left Sidebar */}
        <aside className="w-1/3 bg-primary-900 text-slate-100 flex flex-col p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white transform rotate-3 shadow-lg mb-4">
              <img
                src={data.profile.image || 'https://via.placeholder.com/150'}
                alt={data.profile.name}
                className="w-full h-full object-cover transform -rotate-3 scale-110"
              />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white mb-1 uppercase text-center">
              {data.profile.name}
            </h1>
            <h2 className="text-secondary-400 font-medium tracking-wider text-sm text-center">
              {data.profile.headline}
            </h2>
          </div>

          <div className="border-b border-primary-700 pb-5 mb-5 space-y-3">
            {data.profile.contact.website && (
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-primary-400" />
                <span>{data.profile.contact.website}</span>
              </div>
            )}
            {data.profile.contact.email && (
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>{data.profile.contact.email}</span>
              </div>
            )}
            {data.profile.contact.phone && (
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>{data.profile.contact.phone}</span>
              </div>
            )}
            {data.profile.contact.location && (
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span>{data.profile.contact.location}</span>
              </div>
            )}
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold border-b border-primary-700 pb-1 mb-2 text-primary-100">
              Professional Summary
            </h3>
            <p className="italic text-primary-100/90 leading-relaxed">
              {data.profile.summary}
            </p>
          </div>

          {skillsList.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold border-b border-primary-700 pb-1 mb-3 text-primary-100">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skillsList.map((group) => (
                  <div key={group.category}>
                    <h4 className="text-sm font-medium text-secondary-400 mb-1.5">{group.category}</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 bg-primary-800 text-primary-100 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.profile.languages && data.profile.languages.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold border-b border-primary-700 pb-1 mb-3 text-primary-100">
                Languages
              </h3>
              <ul className="list-disc list-inside space-y-1 text-primary-100/90">
                {data.profile.languages.map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            </div>
          )}

          {data.profile.interests && data.profile.interests.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold border-b border-primary-700 pb-1 mb-3 text-primary-100">
                Interests
              </h3>
              <ul className="list-disc list-inside space-y-1 text-primary-100/90">
                {data.profile.interests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </div>
          )}
        </aside>

        {/* Right Content */}
        <section className="w-2/3 p-8 flex flex-col gap-8 bg-white text-slate-800">
          
          {/* Experience */}
          {data.experience && data.experience.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-primary-950 mb-5 relative inline-block">
                Experience
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-secondary-500 rounded-full"></span>
              </h2>
              <div className="flex flex-col gap-5">
                {data.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-primary-200">
                    <div className="absolute w-3 h-3 bg-primary-600 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-base text-slate-900">
                        {exp.title} &mdash; <span className="font-semibold text-slate-700">{exp.company}</span>
                      </h4>
                      <span className="bg-primary-600 text-white px-2 py-0.5 rounded text-xs font-semibold whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-600 mt-2">
                      {exp.tasks.map((task, tIdx) => (
                        <li key={tIdx} className="pl-1">
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Featured Projects */}
          {data.projects && data.projects.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-primary-950 mb-4 relative inline-block">
                Featured Projects
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-secondary-500 rounded-full"></span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {data.projects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="border border-dashed border-primary-300 rounded-xl p-3 flex flex-col gap-2 hover:bg-primary-50 transition-colors"
                  >
                    {proj.image && (
                      <div className="w-full h-24 rounded-lg overflow-hidden bg-slate-100">
                        <img src={proj.image} alt={proj.name} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{proj.name}</h4>
                      <a href={proj.url.startsWith('http') ? proj.url : `https://${proj.url}`} target="_blank" rel="noreferrer" className="text-primary-600 font-medium text-xs hover:underline">
                        {proj.url.replace(/^https?:\/\//, '')}
                      </a>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 mb-1 line-clamp-2">
                      {proj.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-1">
                      {proj.techStack.map((tech) => (
                        <span key={tech} className="bg-slate-100 text-slate-600 border border-slate-200 px-1.5 py-0.5 rounded text-[10px] font-medium leading-none">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education & Availability Split or Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
            {/* Education */}
            {data.education && data.education.length > 0 && (
              <div>
                <h2 className="text-xl font-bold tracking-tight text-primary-950 mb-4 relative inline-block">
                  Education
                  <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-secondary-500 rounded-full"></span>
                </h2>
                <div className="flex flex-col gap-3">
                  {data.education.map((edu, idx) => (
                    <div key={idx}>
                      <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                      <h3 className="text-slate-600 text-sm mb-2">{edu.campus}</h3>
                      <div className="flex gap-2">
                        <span className="bg-primary-100 text-primary-800 px-2 py-0.5 rounded text-xs font-semibold">
                          {edu.year}
                        </span>
                        <span className="bg-primary-100 text-primary-800 px-2 py-0.5 rounded text-xs font-semibold">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Availability */}
            {data.availability && (
              <div className="flex flex-col justify-end">
                <div className="bg-secondary-50 border-l-4 border-secondary-500 p-4 rounded-r-lg shadow-sm">
                  <h4 className="text-sm font-bold text-secondary-600 mb-1 uppercase tracking-wider">
                    Availability
                  </h4>
                  <p className="text-slate-700 text-sm font-medium">
                    {data.availability}
                  </p>
                </div>
              </div>
            )}
          </div>

        </section>
      </main>
    </div>
  );
}
