import { useState, useEffect } from 'react';

// Dynamically import all templates
const resumeTemplates = (import.meta as any).glob('../templates/resume/*.tsx', { eager: true });
const cvAtsTemplates = (import.meta as any).glob('../templates/cv/*.tsx', { eager: true });

const FONTS = [
  { value: "Inter", label: "Inter", desc: "Modern & Bersih" },
  { value: "Georgia", label: "Georgia", desc: "Elegan & Klasik" },
  { value: "Roboto", label: "Roboto", desc: "Netral & Profesional" },
  { value: "Playfair Display", label: "Playfair", desc: "Mewah & Kreatif" },
];

const LayoutPreview = ({ value }: { value: string }) => {
  const cls = "bg-slate-400/30 rounded-sm";
  return (
    <div className="w-10 h-14 bg-white/50 dark:bg-[#1A2133] rounded border border-slate-300 dark:border-slate-700 flex flex-col gap-1 p-1.5 overflow-hidden shrink-0">
      <div className="w-2/3 h-0.5 bg-current rounded-sm mx-auto opacity-50"></div>
      <div className="w-1/2 h-[1px] bg-slate-400/50 rounded-sm mx-auto"></div>
      <div className={`w-full h-[1px] ${cls} mt-0.5`}></div>
      <div className={`w-4/5 h-[1px] ${cls}`}></div>
      <div className={`w-full h-[1px] ${cls}`}></div>
    </div>
  );
};

export const LayoutSelection = ({
  theme = "blue",
  stepNumber = 5,
  templateType = "resume",
  onChange
}: {
  theme?: "blue" | "indigo" | "cyan",
  stepNumber?: number | string,
  templateType?: "resume" | "cv",
  onChange?: (layoutId: string, fontId: string) => void
}) => {
  const t = theme === "indigo" ? "indigo" : theme === "cyan" ? "cyan" : "blue";
  
  const templates = templateType === "cv" ? cvAtsTemplates : resumeTemplates;
  const LAYOUTS = Object.entries(templates).map(([path, module]: any) => {
    const id = path.split('/').pop()?.replace('.tsx', '') || '';
    return {
      value: id,
      label: module.metadata?.name || id,
      desc: module.metadata?.desc || 'Desain layout premium.'
    };
  });

  const defaultLayout = templateType === "cv" ? "AtsCompact" : (LAYOUTS[0]?.value || "");
  const [selectedLayout, setSelectedLayout] = useState(defaultLayout);
  const [selectedFont, setSelectedFont] = useState(FONTS[0]?.value || "Inter");

  // Call onChange initially if provided
  useEffect(() => {
    if (onChange) onChange(selectedLayout, selectedFont);
  }, [selectedLayout, selectedFont, onChange]);

  return (
    <div className="rounded-[24px] p-6 border border-slate-200 dark:border-[#2A3143] bg-transparent flex flex-col mt-6 space-y-8">
      
      {/* --- PILIH TEMPLATE --- */}
      <div>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
          <span className={`w-6 h-6 rounded-md bg-${t}-100 dark:bg-${t}-900/30 flex items-center justify-center text-${t}-600 dark:text-${t}-400 text-xs`}>
            {stepNumber}
          </span>
          Pilih Template Layout
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {LAYOUTS.map((layout) => {
            const isSelected = selectedLayout === layout.value;
            return (
              <label
                key={layout.value}
                onClick={() => setSelectedLayout(layout.value)}
                className={`relative flex items-center justify-between p-4 border rounded-2xl cursor-pointer transition-all
                  ${isSelected
                    ? `border-${t}-500 bg-${t}-50 dark:bg-${t}-500/10 filter hover:brightness-110`
                    : 'border-slate-300 dark:border-[#2A3143] hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 bg-transparent'
                  }`}
              >
                <input
                  type="radio"
                  name="layout"
                  value={layout.value}
                  checked={isSelected}
                  readOnly
                  className="sr-only"
                />
                <div className="flex items-center gap-4">
                  <LayoutPreview value={layout.value} />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm">{layout.label}</p>
                    <p className={`text-[10px] mt-0.5 ${isSelected ? `text-${t}-600 dark:text-${t}-400` : 'text-slate-500'}`}>{layout.desc}</p>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${isSelected ? `border-${t}-500` : 'border-slate-400 dark:border-slate-600'}`}>
                  {isSelected && <div className={`w-2.5 h-2.5 bg-${t}-500 rounded-full`}></div>}
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* --- PILIH FONT --- */}
      <div>
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
          Pilih Font Dokumen
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {FONTS.map((font) => {
            const isSelected = selectedFont === font.value;
            return (
              <label
                key={font.value}
                onClick={() => setSelectedFont(font.value)}
                className={`flex flex-col items-center p-3 border rounded-xl cursor-pointer transition-all
                  ${isSelected
                    ? `border-${t}-500 bg-${t}-50 dark:bg-${t}-500/10`
                    : 'border-slate-300 dark:border-[#2A3143] hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-white/5'
                  }`}
              >
                <input
                  type="radio"
                  name="font"
                  value={font.value}
                  checked={isSelected}
                  readOnly
                  className="sr-only"
                />
                <span className="text-sm font-bold text-slate-800 dark:text-white mb-0.5" style={{ fontFamily: font.value }}>
                  Aa
                </span>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{font.label}</span>
                <span className="text-[10px] text-slate-400 mt-0.5">{font.desc}</span>
              </label>
            );
          })}
        </div>
      </div>

    </div>
  );
};
