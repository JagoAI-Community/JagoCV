import { ResumeData } from '../models/resume.types';

interface Props {
  templateId: string;
  data: ResumeData;
}

// Dynamically scan and import all resume templates
const templates = (import.meta as any).glob('./resume-templates/*.tsx', { eager: true });

// Backward compatibility map for old hardcoded layout IDs stored in DB
const oldIdMap: Record<string, string> = {
  'a4-react-resume': 'ModernMinimalis',
  'cv-a4-satu-halaman': 'KreatifSatuHalaman',
  'single-page-resume': 'ModernDuaKolom',
  'a4-single-page-resume': 'MinimalisTeknologi',
  'a4-web-resume': 'KreatifHeaderTebal',
  'one-page-cv': 'KlasikRamahAts',
  'modern-interactive-resume': 'CorporateElegan'
};

export default function ResumeViewer({ templateId, data }: Props) {
  // Deep clone and clean experience tasks to avoid double bullet points in lists
  const cleanedData = {
    ...data,
    experience: data.experience?.map(exp => ({
      ...exp,
      tasks: exp.tasks?.map(task => task.replace(/^[•\-\*\s]+/, '')) || []
    })) || []
  };

  // Resolve template name (handles old IDs and new IDs seamlessly)
  const resolvedName = oldIdMap[templateId] || templateId;
  const path = `./resume-templates/${resolvedName}.tsx`;
  const module: any = templates[path] || templates['./resume-templates/ModernMinimalis.tsx'];

  if (module && module.default) {
    const TemplateComponent = module.default;
    return <TemplateComponent data={cleanedData} />;
  }

  return (
    <div className="p-12 text-center text-rose-500 font-bold">
      Template "{templateId}" tidak ditemukan.
    </div>
  );
}
