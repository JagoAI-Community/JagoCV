import { RESUME_DATA } from './constants';

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-2">
      <h2 className="text-[0.875rem] font-bold uppercase border-b border-black block pb-1 text-black">
        {title}
      </h2>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen py-10 flex justify-center items-start lg:px-4 bg-neutral-200">
      <div className="a4-container bg-white shadow-xl text-black font-sans box-border overflow-hidden">
        {/* Header Section */}
        <header className="mb-4">
          <h1 className="text-4xl font-extrabold uppercase leading-tight text-black mb-1">
            {RESUME_DATA.fullName}
          </h1>
          <p className="text-lg font-medium tracking-[0.25em] text-black uppercase mt-1 mb-3">
            {RESUME_DATA.targetRole}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[10pt] text-black items-center mb-4">
            {RESUME_DATA.contacts.map((contact, index) => (
              <div key={index} className="flex items-center gap-1.5">
                {contact.icon}
                <span>{contact.text}</span>
              </div>
            ))}
          </div>
          <hr className="border-t-[1.5px] border-black my-4" />
        </header>

        {/* Summary Section */}
        <section className="mb-6">
          <SectionTitle title="Professional Summary" />
          <p className="italic text-justify text-[10.5pt] leading-relaxed text-black">
            {RESUME_DATA.summary}
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-6">
          <SectionTitle title="Work Experience" />
          <div className="flex flex-col gap-4">
            {RESUME_DATA.experiences.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-end mb-0.5">
                  <h3 className="font-semibold text-[11pt] text-black">
                    {exp.role}
                  </h3>
                  <span className="text-[9pt] font-medium uppercase text-black">{exp.date}</span>
                </div>
                <div className="font-bold text-[10pt] text-black mb-2">
                  {exp.company}
                </div>
                <div className="pl-4 ml-1 border-l border-neutral-300">
                  <ul className="list-disc list-outside ml-3 flex flex-col space-y-1 text-[10pt] text-black">
                    {exp.descriptions.map((desc, i) => (
                      <li key={i} className="pl-1">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-6">
          <SectionTitle title="Education" />
          <div className="flex flex-col gap-4">
            {RESUME_DATA.educations.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-0.5">
                  <h3 className="font-bold text-[10pt] text-black">
                    {edu.institution}
                  </h3>
                  <span className="text-[10pt] font-medium text-black">{edu.year}</span>
                </div>
                <div className="text-[10pt] text-black">{edu.degree}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
