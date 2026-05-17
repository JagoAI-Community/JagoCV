import { Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  fullName: "SHAFNAT RAMADHAN",
  targetRole: "FULL STACK DEVELOPER & AI SPECIALIST",
  summary:
    "A passionate and results-driven Full Stack Developer and AI Specialist with extensive experience in designing, developing, and deploying scalable web applications and artificial intelligence solutions. Proven track record of leveraging modern frameworks and machine learning algorithms to solve complex business problems. Adept at collaborating with cross-functional teams to deliver high-quality software products on time and within budget.",
  contacts: [
    {
      icon: <Mail className="w-3.5 h-3.5" />,
      text: "shafnatfuainiramadhan@gmail.com",
    },
    {
      icon: <Phone className="w-3.5 h-3.5" />,
      text: "+62 812 3456 7890",
    },
    {
      icon: <MapPin className="w-3.5 h-3.5" />,
      text: "Jakarta, Indonesia",
    },
    {
      icon: <Linkedin className="w-3.5 h-3.5" />,
      text: "linkedin.com/in/shafnatramadhan",
    },
    {
      icon: <Globe className="w-3.5 h-3.5" />,
      text: "shafnat.dev",
    },
  ],
  experiences: [
    {
      role: "AI Specialist & Backend Developer",
      date: "Jan 2024 - Present",
      company: "JagoAI",
      descriptions: [
        "Architected and implemented machine learning models for predictive analytics, increasing forecasting accuracy by 25%.",
        "Developed robust RESTful APIs using Node.js and Express to integrate AI models with frontend applications.",
        "Optimized database queries and infrastructure, reducing data retrieval latency by 40%.",
      ],
    },
    {
      role: "Full Stack Developer",
      date: "Mar 2022 - Dec 2023",
      company: "Ko+Lab",
      descriptions: [
        "Led the development of a collaborative workspace platform using React, TypeScript, and Tailwind CSS.",
        "Implemented real-time features using WebSockets, enhancing user engagement and collaboration efficiency.",
        "Mentored junior developers and established coding standards and code review processes.",
      ],
    },
    {
      role: "Software Engineer",
      date: "Jun 2020 - Feb 2022",
      company: "Ngolab Express",
      descriptions: [
        "Built responsive and user-friendly web interfaces for a logistics management system.",
        "Integrated third-party payment gateways and mapping services.",
        "Participated in Agile ceremonies and contributed to sprint planning and retrospective meetings.",
      ],
    },
  ],
  educations: [
    {
      institution: "Universitas Indonesia",
      year: "2016 - 2020",
      degree: "Bachelor of Computer Science",
    },
  ],
};
