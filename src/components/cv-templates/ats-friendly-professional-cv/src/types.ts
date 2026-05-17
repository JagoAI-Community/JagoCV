export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
}

export interface CVData {
  fullName: string;
  targetRole: string;
  contactInfo: ContactInfo;
  summary: string;
  experiences: Experience[];
  educations: Education[];
  skills?: string[];
}
