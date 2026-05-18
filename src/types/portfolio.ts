export interface PortfolioLink {
  id: string;
  title: string;
  url: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  url: string;
  description: string;
  imageUrl?: string;
}

export interface PortfolioExperience {
  id: string;
  role: string;
  company: string;
  years: string;
  description: string;
}

export interface PortfolioData {
  username: string;
  fullName: string;
  role: string;
  location: string;
  accentEmoji: string;
  shortBio: string;
  aboutMe: string;
  profileImageUrl: string;
  bannerImageUrl: string;
  links: PortfolioLink[];
  projects: PortfolioProject[];
  experiences: PortfolioExperience[];
  skills: string;
}

// Helper to create empty items
export const createEmptyPortfolioLink = (): PortfolioLink => ({
  id: crypto.randomUUID(),
  title: '',
  url: ''
});

export const createEmptyPortfolioProject = (): PortfolioProject => ({
  id: crypto.randomUUID(),
  title: '',
  url: '',
  description: ''
});

export const createEmptyPortfolioExperience = (): PortfolioExperience => ({
  id: crypto.randomUUID(),
  role: '',
  company: '',
  years: '',
  description: ''
});

export const defaultPortfolioData: PortfolioData = {
  username: '',
  fullName: '',
  role: '',
  location: '',
  accentEmoji: '🚀',
  shortBio: '',
  aboutMe: '',
  profileImageUrl: '',
  bannerImageUrl: '',
  links: [],
  projects: [],
  experiences: [],
  skills: ''
};
