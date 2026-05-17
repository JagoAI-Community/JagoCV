import { ReactNode } from 'react';

export interface ContactInfo {
  icon: ReactNode;
  text: string;
}

export interface Experience {
  role: string;
  date: string;
  company: string;
  descriptions: string[];
}

export interface Education {
  institution: string;
  year: string;
  degree: string;
}

export interface ResumeData {
  fullName: string;
  targetRole: string;
  summary: string;
  contacts: ContactInfo[];
  experiences: Experience[];
  educations: Education[];
}
