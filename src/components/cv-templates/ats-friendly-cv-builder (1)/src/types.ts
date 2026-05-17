export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  date: string;
  descriptions: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  major: string;
  date: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface CVData {
  fullName: string;
  targetRole: string;
  contactInfo: ContactInfo;
  summary: string;
  experiences: Experience[];
  educations: Education[];
  skills: SkillCategory[];
}
