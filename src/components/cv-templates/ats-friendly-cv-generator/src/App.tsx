import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import { CV_DATA } from "./constants";

export default function App() {
  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="a4-container text-black font-sans">
        {/* Header Section */}
        <header className="mb-4">
          <h1 className="text-4xl font-extrabold uppercase mb-1 tracking-tight">
            {CV_DATA.fullName}
          </h1>
          <h2 className="text-lg font-medium tracking-[0.2em] mb-4">
            {CV_DATA.targetRole}
          </h2>

          <div className="flex flex-wrap gap-x-6 gap-y-2 contact-text mb-3">
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" strokeWidth={2} />
              <span>{CV_DATA.contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" strokeWidth={2} />
              <span>{CV_DATA.contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
              <span>{CV_DATA.contactInfo.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Linkedin className="w-3.5 h-3.5" strokeWidth={2} />
              <span>{CV_DATA.contactInfo.linkedin}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" strokeWidth={2} />
              <span>{CV_DATA.contactInfo.portfolio}</span>
            </div>
          </div>
        </header>

        <hr className="border-black border-[1.5px] mb-4" />

        {/* Summary Section */}
        <section className="mb-5">
          <h3 className="section-title">
            Professional Summary
          </h3>
          <p className="italic text-justify cv-text px-1">
            {CV_DATA.summary}
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-5">
          <h3 className="section-title">
            Work Experience
          </h3>
          <div className="flex flex-col gap-0">
            {CV_DATA.experience.map((exp, index) => (
              <div key={index} className={index === CV_DATA.experience.length - 1 ? "mb-2" : "mb-4"}>
                <div className="flex justify-between items-end mb-0.5">
                  <span className="font-semibold text-[11pt]">
                    {exp.position}
                  </span>
                  <span className="text-[9pt]">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <div className="font-bold text-[10pt] mb-1">
                  {exp.company}
                </div>
                <div className="exp-border">
                  <ul className="list-disc ml-4 cv-text">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-5">
          <h3 className="section-title">
            Education
          </h3>
          <div className="flex flex-col gap-3">
            {CV_DATA.education.map((edu, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-[10pt]">
                    {edu.institution}
                  </div>
                  <div className="cv-text">
                    {edu.degree}, {edu.major}
                  </div>
                </div>
                <div className="text-[9pt]">
                  {edu.startDate} – {edu.endDate}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h3 className="section-title">
            Core Skills
          </h3>
          <ul className="cv-text list-disc ml-4 columns-3 gap-6">
            {CV_DATA.skills.map((skill, index) => (
              <li key={index} className="break-inside-avoid mb-1">
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
