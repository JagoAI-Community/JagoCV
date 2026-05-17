import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';
import { DUMMY_CV_DATA } from './constants';

export default function App() {
  const data = DUMMY_CV_DATA;

  return (
    <div className="min-h-screen bg-[#E5E7EB] py-8 flex justify-center text-black">
      <div className="a4-container shadow-2xl">
        {/* HEADER SECTION */}
        <header className="mb-6">
          <h1 className="text-4xl font-extrabold uppercase text-black mb-1">
            {data.fullName}
          </h1>
          <h2 className="text-sm font-medium tracking-[0.25em] text-black mb-4 uppercase">
            {data.targetRole}
          </h2>
          
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-black items-center text-[10pt]">
            <div className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" strokeWidth={2} />
              <span>{data.contact.email}</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" strokeWidth={2} />
              <span>{data.contact.phone}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
              <span>{data.contact.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Linkedin className="w-3.5 h-3.5" strokeWidth={2} />
              <span>{data.contact.linkedin}</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" strokeWidth={2} />
              <span>{data.contact.portfolio}</span>
            </div>
          </div>
          <hr className="mt-4 border-black border-[1.5px]" />
        </header>

        {/* SUMMARY SECTION */}
        <section className="mb-6">
          <h3 className="text-sm font-bold uppercase text-black border-b border-black w-fit mb-2">
            Professional Summary
          </h3>
          <p className="text-[10.5pt] italic text-justify text-black leading-relaxed">
            {data.summary}
          </p>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="mb-6">
          <h3 className="text-sm font-bold uppercase text-black border-b border-black w-fit mb-4">
            Work Experience
          </h3>
          <div className="space-y-6 text-black">
            {data.experience.map((exp) => (
              <div key={exp.id} className="relative">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h4 className="text-[11pt] font-semibold">{exp.role}</h4>
                  <span className="text-[9pt]">{exp.startDate} – {exp.endDate}</span>
                </div>
                <div className="text-[10pt] font-bold mb-2">{exp.company}</div>
                <ul className="list-disc pl-6 border-l-2 border-neutral-300 ml-1 space-y-1 text-[10pt]">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="mb-6">
          <h3 className="text-sm font-bold uppercase text-black border-b border-black w-fit mb-4">
            Education
          </h3>
          <div className="space-y-4 text-black">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline mb-0.5">
                  <h4 className="text-[11pt] font-bold">{edu.institution}</h4>
                  <span className="text-[9pt]">{edu.startDate} – {edu.endDate}</span>
                </div>
                <p className="text-[10pt] text-black">{edu.degree}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section>
          <h3 className="text-sm font-bold uppercase text-black border-b border-black w-fit mb-3">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2 text-black text-[10pt]">
            <span>{data.skills.join(', ')}</span>
          </div>
        </section>
      </div>
    </div>
  );
}
