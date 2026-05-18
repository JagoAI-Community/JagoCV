import { useState, useCallback } from 'react';
import type { ResumeFormData } from '../types/document';
import { createEmptyExperience, createEmptyEducation, createEmptyProject, createEmptySoftSkill } from '../types/document';

const INITIAL_RESUME_DATA: ResumeFormData = {
  displayName: '',
  headline: '',
  websiteUrl: '',
  email: '',
  phone: '',
  location: '',
  bio: '',
  technicalSkills: '',
  softSkills: [createEmptySoftSkill()],
  experiences: [createEmptyExperience()],
  educations: [createEmptyEducation()],
  projects: [createEmptyProject()],
  languages: '',
  hobbies: '',
};

export function useResumeBuilder() {
  const [formData, setFormData] = useState<ResumeFormData>(INITIAL_RESUME_DATA);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('modern');
  const [selectedFont, setSelectedFont] = useState<string>('Inter');

  const updateField = useCallback(<K extends keyof ResumeFormData>(field: K, value: ResumeFormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  // --- Experience ---
  const addExperience = useCallback(() => {
    setFormData(prev => ({ ...prev, experiences: [...prev.experiences, createEmptyExperience()] }));
  }, []);
  const updateExperience = useCallback((id: string, field: string, value: any) => {
    setFormData(prev => ({ ...prev, experiences: prev.experiences.map(e => e.id === id ? { ...e, [field]: value } : e) }));
  }, []);
  const removeExperience = useCallback((id: string) => {
    setFormData(prev => ({ ...prev, experiences: prev.experiences.filter(e => e.id !== id) }));
  }, []);

  // --- Education ---
  const addEducation = useCallback(() => {
    setFormData(prev => ({ ...prev, educations: [...prev.educations, createEmptyEducation()] }));
  }, []);
  const updateEducation = useCallback((id: string, field: string, value: any) => {
    setFormData(prev => ({ ...prev, educations: prev.educations.map(e => e.id === id ? { ...e, [field]: value } : e) }));
  }, []);
  const removeEducation = useCallback((id: string) => {
    setFormData(prev => ({ ...prev, educations: prev.educations.filter(e => e.id !== id) }));
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

  // --- Soft Skills ---
  const addSoftSkill = useCallback(() => {
    setFormData(prev => ({ ...prev, softSkills: [...prev.softSkills, createEmptySoftSkill()] }));
  }, []);
  const updateSoftSkill = useCallback((id: string, field: string, value: any) => {
    setFormData(prev => ({ ...prev, softSkills: prev.softSkills.map(s => s.id === id ? { ...s, [field]: value } : s) }));
  }, []);
  const removeSoftSkill = useCallback((id: string) => {
    setFormData(prev => ({ ...prev, softSkills: prev.softSkills.filter(s => s.id !== id) }));
  }, []);

  const reset = useCallback(() => {
    setFormData(INITIAL_RESUME_DATA);
    setSelectedTemplate('modern');
    setSelectedFont('Inter');
  }, []);

  return {
    formData, selectedTemplate, selectedFont,
    setSelectedTemplate, setSelectedFont, updateField,
    addExperience, updateExperience, removeExperience,
    addEducation, updateEducation, removeEducation,
    addProject, updateProject, removeProject,
    addSoftSkill, updateSoftSkill, removeSoftSkill,
    reset,
  };
}
