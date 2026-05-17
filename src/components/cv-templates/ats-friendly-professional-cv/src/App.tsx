import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';
import { cvData } from './constants';

export default function App() {
  return (
    <div className="bg-neutral-200 min-h-screen py-10 w-full flex items-start justify-center overflow-auto font-sans">
      {/* Container Kertas (A4) */}
      <div className="a4-container shrink-0">
        
        {/* 1. Header Section */}
        <header className="mb-6">
          <h1 className="text-5xl font-extrabold uppercase leading-none mb-1">
            {cvData.fullName}
          </h1>
          <p className="text-lg font-medium tracking-[0.3em] uppercase mb-4">
            {cvData.targetRole}
          </p>
          <div className="flex flex-wrap gap-y-2 gap-x-6 text-[10pt] mb-4">
            <div className="flex items-center gap-1.5">
              <Mail size={14} className="stroke-[2]" />
              <span>{cvData.contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone size={14} className="stroke-[2]" />
              <span>{cvData.contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="stroke-[2]" />
              <span>{cvData.contactInfo.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Linkedin size={14} className="stroke-[2]" />
              <span>{cvData.contactInfo.linkedin}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe size={14} className="stroke-[2]" />
              <span>{cvData.contactInfo.portfolio}</span>
            </div>
          </div>
          <div className="border-b-[1.5px] border-black w-full" />
        </header>

        {/* 2. Summary Section */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase border-b border-black inline-block mb-2">
            Professional Summary
          </h2>
          <p className="italic text-justify text-[10.5pt] leading-relaxed">
            {cvData.summary}
          </p>
        </section>

        {/* 3. Experience Section */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase border-b border-black inline-block mb-3">
            Work Experience
          </h2>
          <div>
            {cvData.experiences.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="font-semibold text-[11pt]">
                    {exp.role}
                  </span>
                  <span className="text-[9pt]">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <div className="font-bold text-[10pt] mb-2">
                  {exp.company}
                </div>
                <ul className="bullet-list text-[10pt] space-y-1 list-disc list-outside">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="text-justify">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Education Section */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase border-b border-black inline-block mb-3">
            Education
          </h2>
          <div className="flex flex-col gap-4">
            {cvData.educations.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="font-bold text-[10pt]">
                    {edu.institution}
                  </span>
                  <span className="text-[9pt]">
                    {edu.startDate} – {edu.endDate}
                  </span>
                </div>
                <div className="text-[10pt]">
                  {edu.degree} in {edu.major}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Technical Skills Section */}
        {cvData.skills && cvData.skills.length > 0 && (
          <section className="mt-2">
            <h2 className="text-sm font-bold uppercase border-b border-black inline-block mb-3">
              Technical Skills
            </h2>
            <p className="text-[10pt]">
              {cvData.skills.join(", ")}
            </p>
          </section>
        )}
      </div>
    </div>
  );
}

