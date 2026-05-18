import { useState, useCallback } from 'react';
import type { CvFormData } from '../types/document';
import { createEmptyExperience, createEmptyEducation, createId } from '../types/document';

const INITIAL_CV_DATA: CvFormData = {
  fullName: '',
  targetRole: '',
  email: '',
  phone: '',
  location: '',
  linkedin: '',
  portfolio: '',
  summary: '',
  experiences: [createEmptyExperience()],
  educations: [createEmptyEducation()],
  skills: '',
};

export function useCvBuilder() {
  const [formData, setFormData] = useState<CvFormData>(INITIAL_CV_DATA);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('modern');
  const [selectedFont, setSelectedFont] = useState<string>('Inter');

  const updateField = useCallback(<K extends keyof CvFormData>(field: K, value: CvFormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  // --- Experience CRUD ---
  const addExperience = useCallback(() => {
    setFormData(prev => ({ ...prev, experiences: [...prev.experiences, createEmptyExperience()] }));
  }, []);

  const updateExperience = useCallback((id: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      experiences: prev.experiences.map(exp => exp.id === id ? { ...exp, [field]: value } : exp),
    }));
  }, []);

  const removeExperience = useCallback((id: string) => {
    setFormData(prev => ({
      ...prev,
      experiences: prev.experiences.filter(exp => exp.id !== id),
    }));
  }, []);

  // --- Education CRUD ---
  const addEducation = useCallback(() => {
    setFormData(prev => ({ ...prev, educations: [...prev.educations, createEmptyEducation()] }));
  }, []);

  const updateEducation = useCallback((id: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      educations: prev.educations.map(edu => edu.id === id ? { ...edu, [field]: value } : edu),
    }));
  }, []);

  const removeEducation = useCallback((id: string) => {
    setFormData(prev => ({
      ...prev,
      educations: prev.educations.filter(edu => edu.id !== id),
    }));
  }, []);

  const reset = useCallback(() => {
    setFormData(INITIAL_CV_DATA);
    setSelectedTemplate('modern');
    setSelectedFont('Inter');
  }, []);

  return {
    formData,
    selectedTemplate,
    selectedFont,
    setSelectedTemplate,
    setSelectedFont,
    updateField,
    addExperience, updateExperience, removeExperience,
    addEducation, updateEducation, removeEducation,
    reset,
  };
}
