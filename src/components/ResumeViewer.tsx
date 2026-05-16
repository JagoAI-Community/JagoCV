import A4ReactResume from './resume-templates/A4ReactResume';
import SinglePageResume from './resume-templates/SinglePageResume';
import A4SinglePageResume from './resume-templates/A4SinglePageResume';
import A4WebResume from './resume-templates/A4WebResume';
import CvA4SatuHalaman from './resume-templates/CvA4SatuHalaman';
import ModernInteractiveResume from './resume-templates/ModernInteractiveResume';
import OnePageCV from './resume-templates/OnePageCV';
import { ResumeData } from '../models/resume.types';

interface Props {
  templateId: string;
  data: ResumeData;
}

export default function ResumeViewer({ templateId, data }: Props) {
  switch (templateId) {
    case 'a4-react-resume':
      return <A4ReactResume data={data} />;
    case 'single-page-resume':
      return <SinglePageResume data={data} />;
    case 'a4-single-page-resume':
      return <A4SinglePageResume data={data} />;
    case 'a4-web-resume':
      return <A4WebResume data={data} />;
    case 'cv-a4-satu-halaman':
      return <CvA4SatuHalaman data={data} />;
    case 'modern-interactive-resume':
      return <ModernInteractiveResume data={data} />;
    case 'one-page-cv':
      return <OnePageCV data={data} />;
    default:
      return (
        <div className="flex items-center justify-center p-10 bg-red-50 text-red-500 rounded border border-red-200">
          Template "{templateId}" tidak ditemukan.
        </div>
      );
  }
}
