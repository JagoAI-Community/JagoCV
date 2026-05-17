export interface ResumeData {
  profile: {
    name: string;
    headline: string;
    image: string;
    summary: string;
    contact: {
      email: string;
      phone: string;
      website: string;
      location: string;
    };
    skills: Record<string, string[]>;
    languages: string[];
    interests: string[];
  };
  experience: {
    title: string;
    company: string;
    period: string;
    tasks: string[];
  }[];
  education: {
    degree: string;
    campus: string;
    year: string;
    gpa: string;
  }[];
  projects: {
    name: string;
    url: string;
    description: string;
    techStack: string[];
    image?: string;
  }[];
  availability?: string;
  design?: {
    entityStyle?: {
      isBold: boolean;
      color: string;
      hasBadge: boolean;
    };
  };
}
