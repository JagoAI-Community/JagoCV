import { CVData } from "./types";

export const CV_DATA: CVData = {
  fullName: "Shafnat Ramadhan",
  targetRole: "Full Stack Developer & AI Specialist",
  summary:
    "Professional Full Stack Developer and AI Specialist with a proven track record of architecting scalable web applications and integrating advanced artificial intelligence solutions. Adept at leading development teams, optimizing system architectures, and delivering impactful software products that meet dynamic business needs in fast-paced environments.",
  contactInfo: {
    email: "shafnatfuainiramadhan@gmail.com",
    phone: "+62 812-3456-7890",
    location: "Jakarta, Indonesia",
    linkedin: "linkedin.com/in/shafnatramadhan",
    portfolio: "github.com/shafnat",
  },
  experience: [
    {
      position: "AI Specialist & Full Stack Developer",
      company: "JagoAI",
      startDate: "Jan 2024",
      endDate: "Present",
      description: [
        "Architected and implemented AI-driven platform features utilizing advanced LLMs, improving platform capabilities and user engagement metrics by 40%.",
        "Developed and maintained highly scalable full-stack applications leveraging Next.js, Node.js, and Python-based microservices architecture.",
        "Integrated complex data pipelines for real-time model inference, analytics, and business intelligence reporting.",
      ],
    },
    {
      position: "Lead Full Stack Developer",
      company: "Ko+Lab",
      startDate: "Mar 2022",
      endDate: "Dec 2023",
      description: [
        "Led a cross-functional engineering team of 5 developers to create a robust collaborative workspace platform from initial concept to production.",
        "Reduced application initial load times by 35% through the implementation of advanced state management and optimized code-splitting techniques.",
        "Designed and maintained robust RESTful APIs alongside optimized PostgreSQL database schemas to support high concurrency and data integrity.",
      ],
    },
    {
      position: "Software Engineer",
      company: "Ngolab Express",
      startDate: "Jun 2020",
      endDate: "Feb 2022",
      description: [
        "Maintained and enhanced core enterprise logistics management systems, reliably serving over 10,000 daily active users.",
        "Engineered automated report generation modules, effectively reducing manual administrative workloads by 15 hours per week.",
        "Collaborated closely with Product Managers and UI/UX designers to implement scalable, pixel-perfect, and accessible frontend interfaces.",
      ],
    },
  ],
  education: [
    {
      institution: "Universitas Indonesia",
      degree: "Bachelor of Computer Science",
      major: "Software Engineering",
      startDate: "Aug 2016",
      endDate: "Jul 2020",
    },
  ],
  skills: [
    "TypeScript",
    "React.js",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "PostgreSQL",
    "Generative AI Integration",
    "Prompt Engineering",
    "System Architecture",
    "Agile Methodology",
  ],
};
