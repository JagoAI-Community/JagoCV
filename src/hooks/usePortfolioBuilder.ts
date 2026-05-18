import { useState, useCallback } from 'react';
import type { PortfolioFormData } from '../types/document';
import { createEmptyExperience, createEmptyProject, createEmptyLink } from '../types/document';

const INITIAL_PORTFOLIO_DATA: PortfolioFormData = {
  customLink: '',
  profileTitle: '',
  location: '',
  accentEmoji: '🚀',
  shortBio: '',
  aboutMe: '',
  links: [createEmptyLink()],
  projects: [createEmptyProject()],
  experiences: [createEmptyExperience()],
  skills: '',
  accentColor: '#06B6D4',
  fontFamily: 'Inter',
};

export function usePortfolioBuilder() {
  const [formData, setFormData] = useState<PortfolioFormData>(INITIAL_PORTFOLIO_DATA);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('modern');

  const updateField = useCallback(<K extends keyof PortfolioFormData>(field: K, value: PortfolioFormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  // --- Links ---
  const addLink = useCallback(() => {
    setFormData(prev => ({ ...prev, links: [...prev.links, createEmptyLink()] }));
  }, []);
  const updateLink = useCallback((id: string, field: string, value: any) => {
    setFormData(prev => ({ ...prev, links: prev.links.map(l => l.id === id ? { ...l, [field]: value } : l) }));
  }, []);
  const removeLink = useCallback((id: string) => {
    setFormData(prev => ({ ...prev, links: prev.links.filter(l => l.id !== id) }));
  }, []);

  // --- Projects ---
  const addProject = useCallback(() => {
    setFormData(prev => ({ ...prev, projects: [...prev.projects, createEmptyProject()] }));
  }, []);
  const updateProject = useCallback((id: string, field: string, value: any) => {
    setFormData(prev => ({ ...prev, projects: prev.projects.map(p => p.id === id ? { ...p, [field]: value } : p) }));
  }, []);
  const removeProject = useCallback((id: string) => {
    setFormData(prev => ({ ...prev, projects: prev.projects.filter(p => p.id !== id) }));
  }, []);

  // --- Experiences ---
  const addExperience = useCallback(() => {
    setFormData(prev => ({ ...prev, experiences: [...prev.experiences, createEmptyExperience()] }));
  }, []);
  const updateExperience = useCallback((id: string, field: string, value: any) => {
    setFormData(prev => ({ ...prev, experiences: prev.experiences.map(e => e.id === id ? { ...e, [field]: value } : e) }));
  }, []);
  const removeExperience = useCallback((id: string) => {
    setFormData(prev => ({ ...prev, experiences: prev.experiences.filter(e => e.id !== id) }));
  }, []);

  const reset = useCallback(() => {
    setFormData(INITIAL_PORTFOLIO_DATA);
    setSelectedTemplate('modern');
  }, []);

  return {
    formData, selectedTemplate,
    setSelectedTemplate, updateField,
    addLink, updateLink, removeLink,
    addProject, updateProject, removeProject,
    addExperience, updateExperience, removeExperience,
    reset,
  };
}
