import { CVData } from "./types";

export const CV_DATA: CVData = {
  fullName: "SHAFNAT RAMADHAN",
  targetRole: "FULL STACK DEVELOPER & AI SPECIALIST",
  contactInfo: {
    email: "shafnatfuainiramadhan@gmail.com",
    phone: "+62 812 3456 7890",
    location: "Jakarta, Indonesia",
    linkedin: "linkedin.com/in/shafnatramadhan",
    portfolio: "shafnat.dev"
  },
  summary: "A passionate and driven Full Stack Developer & AI Specialist with extensive experience in building scalable web applications and integrating advanced artificial intelligence solutions. Proven track record of optimizing system architecture, leading technical teams, and delivering high-quality products. Adept at navigating complex technical challenges and collaborating across functions to drive business-centric technological innovations.",
  experiences: [
    {
      id: "exp-1",
      title: "Senior Full Stack & AI Engineer",
      company: "JagoAI",
      date: "Feb 2023 - Present",
      descriptions: [
        "Architected and deployed scalable AI-powered microservices using Node.js, Python, and React, increasing platform efficiency by 40%.",
        "Fine-tuned state-of-the-art LLMs to automate core business workflows, reducing manual processing time by over 60%.",
        "Spearheaded the integration of RAG (Retrieval-Augmented Generation) systems, enhancing search capabilities and data reasoning accuracy.",
        "Mentored junior developers and established CI/CD pipelines to streamline deployment cycles."
      ]
    },
    {
      id: "exp-2",
      title: "Full Stack Developer",
      company: "Ko+Lab",
      date: "Jul 2021 - Jan 2023",
      descriptions: [
        "Developed comprehensive web platforms facilitating collaborative workspaces for remote teams using React, TypeScript, and Tailwind CSS.",
        "Implemented secure and robust RESTful APIs with Express and PostgreSQL, ensuring 99.9% uptime and zero data breaches.",
        "Optimized frontend bundle sizes through code splitting and tree-shaking, improving initial page load speeds by 35%."
      ]
    },
    {
      id: "exp-3",
      title: "Frontend Web Developer",
      company: "Ngolab Express",
      date: "Jan 2020 - Jun 2021",
      descriptions: [
        "Revamped the main customer portal UI/UX, directly contributing to a 25% increase in user retention.",
        "Created an internal design system that standardized UI components across all company applications.",
        "Collaborated closely with PMs and designers in an agile environment to consistently deliver features ahead of schedule."
      ]
    }
  ],
  educations: [
    {
      id: "edu-1",
      institution: "University of Indonesia",
      degree: "Bachelor of Computer Science",
      major: "Software Engineering",
      date: "2016 - 2020"
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"]
    },
    {
      category: "Frameworks & Tools",
      items: ["React", "Node.js", "Express", "Tailwind CSS", "Docker", "Git", "AWS"]
    },
    {
      category: "AI & Machine Learning",
      items: ["LLM Fine-tuning", "RAG Systems", "OpenAI API", "PyTorch", "Hugging Face"]
    }
  ]
};
