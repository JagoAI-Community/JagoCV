import { CVData } from "./types";

export const cvData: CVData = {
  fullName: "SHAFNAT RAMADHAN",
  targetRole: "Full Stack Developer & AI Specialist",
  contactInfo: {
    email: "shafnatfuainiramadhan@gmail.com",
    phone: "+62 812-3456-7890",
    location: "Jakarta, Indonesia",
    linkedin: "linkedin.com/in/shafnatramadhan",
    portfolio: "shafnat.dev"
  },
  summary: "Professional Full Stack Developer and AI Specialist with extensive experience in architecting scalable web applications and integrating advanced artificial intelligence solutions. Proven track record of optimizing system performance, developing robust APIs, and creating seamless user experiences. Adept at leveraging modern technologies to deliver high-impact digital products efficiently.",
  experiences: [
    {
      id: "exp-3",
      role: "AI Specialist & Lead Developer",
      company: "JagoAI",
      startDate: "Jan 2023",
      endDate: "Present",
      description: [
        "Architected scalable AI-powered systems, integrating Large Language Models (LLMs) into core product services that improved user productivity by 40%.",
        "Led a team of developers in establishing CI/CD pipelines and code review standards, reducing deployment failures and improving code quality.",
        "Optimized backend queries and data processing pipelines using Python and Node.js, ensuring high availability and minimal latency."
      ]
    },
    {
      id: "exp-2",
      role: "Full Stack Developer",
      company: "Ko+Lab",
      startDate: "Mar 2021",
      endDate: "Dec 2022",
      description: [
        "Constructed interactive and highly responsive web interfaces utilizing React, TypeScript, and Tailwind CSS.",
        "Developed and maintained robust RESTful APIs supporting distributed microservices and handling high-volume daily active users.",
        "Collaborated closely with product managers and UI/UX designers to implement scalable features and translate business requirements into technical reality."
      ]
    },
    {
      id: "exp-1",
      role: "Frontend Engineer",
      company: "Ngolab Express",
      startDate: "Jun 2019",
      endDate: "Feb 2021",
      description: [
        "Spearheaded the migration of legacy user interfaces to a modern React architecture, significantly boosting application performance.",
        "Implemented responsive UI designs with pixel-perfect accuracy, ensuring a consistent experience across all devices and browsers.",
        "Improved core Web Vitals and reduced initial load times by 30% through code splitting and efficient asset optimization."
      ]
    }
  ],
  educations: [
    {
      id: "edu-1",
      institution: "Universitas Indonesia",
      degree: "Bachelor of Computer Science",
      major: "Informatics",
      startDate: "Aug 2015",
      endDate: "Jul 2019"
    }
  ],
  skills: [
    "TypeScript", "React", "Node.js", "Python", "Tailwind CSS", "Artificial Intelligence", "LLM", "REST API"
  ]
};
