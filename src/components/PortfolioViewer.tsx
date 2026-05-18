import { PortfolioData } from '../models/portfolio';

// Dynamically scan and import all portfolio templates
const portfolioTemplates = (import.meta as any).glob(
  './layout/portofolio-Interaktif-templates/*/*.tsx',
  { eager: true }
);

interface Props {
  templateId: string;
  data?: PortfolioData;
}

export default function PortfolioViewer({ templateId, data }: Props) {
  // Build the expected path from the templateId
  // templateId is e.g. "BentoGelap" — folder and file share the same name
  const templatePath = `./layout/portofolio-Interaktif-templates/${templateId}/${templateId}.tsx`;

  let module: any = portfolioTemplates[templatePath] || null;

  // Fallback to BentoGelap if not found
  if (!module) {
    module = portfolioTemplates['./layout/portofolio-Interaktif-templates/BentoGelap/BentoGelap.tsx'];
  }

  if (module && module.default) {
    const TemplateComponent = module.default;
    return (
      <div className="w-full h-full">
        <TemplateComponent data={data} />
      </div>
    );
  }

  return (
    <div className="p-12 text-center text-rose-500 font-bold">
      Template "{templateId}" tidak ditemukan.
    </div>
  );
}
