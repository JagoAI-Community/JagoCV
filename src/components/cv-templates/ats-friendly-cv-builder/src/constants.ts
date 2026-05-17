import { CVData } from './types';

export const DUMMY_CV_DATA: CVData = {
  fullName: "SHAFNAT RAMADHAN",
  targetRole: "FULL STACK DEVELOPER & AI SPECIALIST",
  summary: "A highly motivated and results-driven Full Stack Developer and AI Specialist with extensive experience in building scalable web applications and integrating advanced artificial intelligence models. Proven ability to lead development teams, architect robust systems, and deliver innovative solutions that drive business growth. Passionate about leveraging cutting-edge technologies to solve complex problems and create user-centric digital experiences.",
  contact: {
    email: "shafnatfuainiramadhan@gmail.com",
    phone: "+62 812-3456-7890",
    location: "Jakarta, Indonesia",
    linkedin: "linkedin.com/in/shafnatramadhan",
    portfolio: "shafnat.dev"
  },
  experience: [
    {
      id: "exp-1",
      role: "Lead Full Stack & AI Developer",
      company: "JagoAI",
      startDate: "Jan 2024",
      endDate: "Present",
      description: [
        "Architected and developed next-generation AI-powered enterprise workflow automation tools using React, Node.js, and Python.",
        "Integrated Large Language Models (LLMs) to enhance natural language processing capabilities within internal tools, reducing manual data entry by 40%.",
        "Led a team of 4 developers in migrating monolithic legacy systems to a microservices architecture deployed on Google Cloud Platform.",
        "Implemented CI/CD pipelines using GitHub Actions, ensuring zero-downtime deployments and improving release frequency by 3x."
      ]
    },
    {
      id: "exp-2",
      role: "Senior Software Engineer",
      company: "Ko+Lab",
      startDate: "Mar 2022",
      endDate: "Dec 2023",
      description: [
        "Developed and maintained a real-time collaborative workspace platform used by over 10,000 active users, utilizing React, WebSockets, and Redis.",
        "Optimized database queries and implemented caching strategies, reducing average page load times from 3.2s to 0.8s.",
        "Spearheaded the integration of a custom analytics dashboard, providing actionable insights for the product team.",
        "Mentored junior developers and established code review best practices across the engineering department."
      ]
    },
    {
      id: "exp-3",
      role: "Frontend Developer",
      company: "Ngolab Express",
      startDate: "Jun 2020",
      endDate: "Feb 2022",
      description: [
        "Built responsive and interactive user interfaces for a logistics tracking dashboard using Vue.js and Tailwind CSS.",
        "Collaborated closely with UX/UI designers to translate wireframes into high-fidelity prototypes.",
        "Developed reusable component libraries that were adopted across multiple internal projects.",
        "Integrated REST APIs to display real-time shipment status updates and geospatial data."
      ]
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "Universitas Indonesia",
      degree: "Bachelor of Computer Science (B.Comp.Sc.)",
      startDate: "2016",
      endDate: "2020"
    }
  ],
  skills: [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "Tailwind CSS",
    "PostgreSQL", "MongoDB", "Google Cloud Platform", "Docker", "LLM Integration", "Git"
  ]
};
