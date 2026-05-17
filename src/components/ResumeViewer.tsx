import { ResumeData } from '../models/resume.types';

interface Props {
  templateId: string;
  data: ResumeData;
  fontFamily?: string;
}

// Dynamically scan and import all templates
const resumeTemplates = (import.meta as any).glob('./layout/resume-templates/*.tsx', { eager: true });
const cvAtsTemplates = (import.meta as any).glob('./layout/cv-ats-templates/*.tsx', { eager: true });

// Backward compatibility map for old hardcoded layout IDs stored in DB
const oldIdMap: Record<string, string> = {
  'a4-react-resume': 'ModernMinimalis',
  'cv-a4-satu-halaman': 'KreatifSatuHalaman',
  'single-page-resume': 'ModernDuaKolom',
  'a4-single-page-resume': 'MinimalisTeknologi',
  'a4-web-resume': 'KreatifHeaderTebal',
  'one-page-cv': 'KlasikRamahAts',
  'modern-interactive-resume': 'CorporateElegan',
  'modern-ats': 'AtsCompact', // Fallback for old hardcoded modern-ats
};

export default function ResumeViewer({ templateId, data, fontFamily }: Props) {
  // Deep clone and clean experience tasks to avoid double bullet points in lists
  // Also clean '@' characters from education
  const cleanedData = {
    ...data,
    experience: data.experience?.map(exp => ({
      ...exp,
      tasks: exp.tasks?.map(task => typeof task === 'string' ? task.replace(/^[•\-\*\s]+/, '') : task) || []
    })) || [],
    education: data.education?.map(edu => ({
      ...edu,
      degree: typeof edu.degree === 'string' ? edu.degree.replace(/\s*@\s*/g, ' ').trim() : edu.degree,
      campus: typeof edu.campus === 'string' ? edu.campus.replace(/\s*@\s*/g, ' ').trim() : edu.campus
    })) || []
  };

  // Resolve template name (handles old IDs and new IDs seamlessly)
  const resolvedName = oldIdMap[templateId] || templateId;
  
  const resumePath = `./layout/resume-templates/${resolvedName}.tsx`;
  const cvPath = `./layout/cv-ats-templates/${resolvedName}.tsx`;
  
  let module: any = null;
  if (resumeTemplates[resumePath]) {
    module = resumeTemplates[resumePath];
  } else if (cvAtsTemplates[cvPath]) {
    module = cvAtsTemplates[cvPath];
  } else {
    // Default fallback
    module = cvAtsTemplates['./layout/cv-ats-templates/AtsCompact.tsx'] || resumeTemplates['./layout/resume-templates/ModernMinimalis.tsx'];
  }

  if (module && module.default) {
    const TemplateComponent = module.default;
    return (
      <div style={{ fontFamily: fontFamily || 'Inter, sans-serif' }} className="w-full h-full flex justify-center">
        <TemplateComponent data={cleanedData} />
      </div>
    );
  }

  return (
    <div className="p-12 text-center text-rose-500 font-bold">
      Template "{templateId}" tidak ditemukan.
    </div>
  );
}
