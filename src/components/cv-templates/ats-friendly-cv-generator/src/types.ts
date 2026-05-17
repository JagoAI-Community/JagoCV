export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
}

export interface Experience {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
}

export interface CVData {
  fullName: string;
  targetRole: string;
  summary: string;
  contactInfo: ContactInfo;
  experience: Experience[];
  education: Education[];
  skills: string[];
}
