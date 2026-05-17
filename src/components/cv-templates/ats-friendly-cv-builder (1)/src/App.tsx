import { Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { CV_DATA } from "./constants";

export default function App() {
  const { fullName, targetRole, contactInfo, summary, experiences, educations, skills } = CV_DATA;

  return (
    <div className="bg-[#e5e5e5] min-h-screen py-10 flex justify-center text-black font-sans">
      <div className="a4-container bg-white shadow-2xl">
        {/* Header Section */}
        <header className="flex flex-col gap-1">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight leading-none">
            {fullName}
          </h1>
          <h2 className="text-lg font-medium tracking-[0.25em] text-black leading-tight uppercase">
            {targetRole}
          </h2>

          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-[10pt]">
            <div className="flex items-center gap-1.5">
              <Mail size={12} strokeWidth={2.5} />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone size={12} strokeWidth={2.5} />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={12} strokeWidth={2.5} />
              <span>{contactInfo.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Linkedin size={12} strokeWidth={2.5} />
              <span>{contactInfo.linkedin}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe size={12} strokeWidth={2.5} />
              <span>{contactInfo.portfolio}</span>
            </div>
          </div>

          <hr className="border-black border-t-[1.5px] w-full mt-4 mb-6" />
        </header>

        {/* Summary Section */}
        <section className="mb-6">
          <h3 className="font-bold uppercase text-sm border-b border-black w-fit mb-2">
            Professional Summary
          </h3>
          <p className="text-[10.5pt] italic text-justify leading-relaxed">
            {summary}
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-6">
          <h3 className="font-bold uppercase text-sm border-b border-black w-fit mb-3">
            Work Experience
          </h3>
          <div className="flex flex-col gap-5">
            {experiences.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="font-semibold text-[11pt]">{exp.title}</span>
                  <span className="text-[9pt]">{exp.date}</span>
                </div>
                <div className="font-bold text-[10pt] mb-2">
                  {exp.company}
                </div>
                {/* Deskripsi indent & bingkai kiri (border-l) */}
                <ul className="pl-5 border-l-2 border-neutral-200 ml-1 space-y-1.5 text-[10pt]">
                  {exp.descriptions.map((desc, idx) => (
                    <li
                      key={idx}
                      className="list-disc list-outside ml-3 text-justify leading-relaxed marker:text-black"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-6">
          <h3 className="font-bold uppercase text-sm border-b border-black w-fit mb-3">
            Education
          </h3>
          <div className="flex flex-col gap-5">
            {educations.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="font-bold text-[10.5pt]">{edu.institution}</span>
                  <span className="text-[9pt]">{edu.date}</span>
                </div>
                <div className="text-[10.5pt]">
                  {edu.degree}{edu.major ? ` - ${edu.major}` : ""}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section (Bonus ATS Content) */}
        {skills && skills.length > 0 && (
          <section className="mb-6">
            <h3 className="font-bold uppercase text-sm border-b border-black w-fit mb-3">
              Skills
            </h3>
            <div className="flex flex-col gap-1 text-[10.5pt]">
              {skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <strong className="font-bold">{skillGroup.category}:</strong>{" "}
                  {skillGroup.items.join(", ")}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
