import { getEl } from '../utils/dom';

/**
 * AI Contextual Popover and Annotate Mode
 */
export function initAiPopover(): void {
  const aiEditPopover = getEl("ai-edit-popover");
  const btnCancelAi = getEl("btn-cancel-ai");
  const cvDocumentContainer = getEl("cv-document-container");
  const resumeDocumentContainer = getEl("resume-document-container");
  const portfolioDocumentContainer = getEl("portfolio-document-container");
  
  if (aiEditPopover && btnCancelAi) {
    let activeSection: HTMLElement | null = null;
    let activeContainer: HTMLElement | null = null;

    const setupAiButtons = (container: HTMLElement | null) => {
        if (!container) return;
        const aiButtons = container.querySelectorAll(".btn-ask-ai");
        aiButtons.forEach(btn => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            
            const section = (e.target as HTMLElement).closest("section, header, div.custom-resume-section") as HTMLElement;
            if (!section) return;

            const containerRect = container.getBoundingClientRect();
            const sectionRect = section.getBoundingClientRect();

            let top = sectionRect.top - containerRect.top + 30; 
            let left = (sectionRect.width / 2) - 160; 

            if (section.classList.contains("md:w-1/3")) {
              left = sectionRect.left - containerRect.left + 20; 
            }

            if (container === portfolioDocumentContainer) {
              left = (containerRect.width / 2) - 160;
            }

            aiEditPopover.style.top = `${top}px`;
            aiEditPopover.style.left = `${left}px`;
            
            if (activeContainer !== container) {
                container.appendChild(aiEditPopover);
                activeContainer = container;
            }

            if (activeSection) {
                activeSection.classList.remove("ring-2", "ring-indigo-400", "bg-indigo-50/10", "bg-white/10", "ring-cyan-500", "bg-cyan-900/40");
            }
            
            activeSection = section;
            
            if (section.classList.contains("bg-indigo-900")) {
               activeSection.classList.add("ring-2", "ring-indigo-400", "bg-white/10");
            } else if (container === portfolioDocumentContainer) {
               activeSection.classList.add("ring-2", "ring-cyan-500", "bg-cyan-900/40");
            } else {
               activeSection.classList.add("ring-2", "ring-indigo-400", "bg-indigo-50/10");
            }
            
            aiEditPopover.classList.remove("hidden");
            
            const input = getEl("ai-edit-prompt") as HTMLTextAreaElement;
            if (input) input.focus();
          });
        });
    };

    setupAiButtons(cvDocumentContainer);
    setupAiButtons(resumeDocumentContainer);
    setupAiButtons(portfolioDocumentContainer);

    btnCancelAi.addEventListener("click", () => {
      aiEditPopover.classList.add("hidden");
      if (activeSection) {
          activeSection.classList.remove("ring-2", "ring-indigo-400", "bg-indigo-50/10", "bg-white/10", "ring-cyan-500", "bg-cyan-900/40");
          activeSection = null;
      }
    });
  }

  // --- Capture / Annotate Mode Logic ---
  const globalChatWidgets = document.querySelectorAll('.js-global-chat');
  globalChatWidgets.forEach(widget => {
    const captureBtn = widget.querySelector('.js-capture-btn') as HTMLButtonElement;
    const attachmentsDiv = widget.querySelector('.js-chat-attachments') as HTMLDivElement;
    const input = widget.querySelector('.js-chat-input') as HTMLInputElement;
    
    if (captureBtn && attachmentsDiv) {
      let isAnnotating = false;
      let boxSize = 150;
      let mouseX = 0;
      let mouseY = 0;
      
      const isPortfolio = widget.innerHTML.includes('Portfolio');
      const themeColor = isPortfolio ? 'cyan' : 'indigo';
      
      let annotateHighlighter = getEl('annotate-highlighter');
      if (!annotateHighlighter) {
         annotateHighlighter = document.createElement('div');
         annotateHighlighter.id = 'annotate-highlighter';
         document.body.appendChild(annotateHighlighter);
      }
      
      const docContainer = widget.parentElement?.querySelector('[id$="-document-container"]') as HTMLElement;

      const stopAnnotating = () => {
         isAnnotating = false;
         captureBtn.classList.remove(`bg-${themeColor}-600`, 'text-white', 'ring-2', `ring-${themeColor}-500`);
         captureBtn.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
         document.body.classList.remove('cursor-none');
         
         if (annotateHighlighter) {
             annotateHighlighter.classList.add('hidden');
         }
         
         document.removeEventListener('mousemove', handleMouseMove, true);
         document.removeEventListener('wheel', handleWheel, { capture: true });
         document.removeEventListener('click', handleCaptureClick, true);

         if(docContainer) {
            docContainer.classList.remove('pointer-events-none');
            docContainer.style.userSelect = '';
         }
      };

      const updateBoxPosition = () => {
         if (!annotateHighlighter || !isAnnotating) return;
         
         annotateHighlighter.style.width = `${boxSize}px`;
         annotateHighlighter.style.height = `${boxSize}px`;
         annotateHighlighter.style.left = `${mouseX - boxSize / 2}px`;
         annotateHighlighter.style.top = `${mouseY - boxSize / 2}px`;
      };

      const handleMouseMove = (e: MouseEvent) => {
         if (!isAnnotating) return;
         mouseX = e.clientX;
         mouseY = e.clientY;
         updateBoxPosition();
      };

      const handleWheel = (e: WheelEvent) => {
         if (!isAnnotating) return;
         e.preventDefault(); 
         
         const delta = e.deltaY > 0 ? -15 : 15;
         
         boxSize = Math.max(40, Math.min(600, boxSize + delta));
         updateBoxPosition();
      };

      const handleCaptureClick = (e: MouseEvent) => {
         if (!isAnnotating) return;
         if (widget.contains(e.target as Node)) {
            return;
         }
         
         e.preventDefault();
         e.stopPropagation();

         const attachment = document.createElement('div');
         attachment.className = `inline-flex items-center gap-1.5 px-3 py-1 bg-${themeColor}-900/50 border border-${themeColor}-500/30 text-${themeColor}-300 text-xs font-medium rounded-lg animate-[fadeIn_0.2s_ease_forwards]`;
         attachment.innerHTML = `
            <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10V5a2 2 0 012-2h5m4 0h5a2 2 0 012 2v5m0 4v5a2 2 0 01-2 2h-5m-4 0H5a2 2 0 01-2-2v-5M8 8h8v8H8z"></path></svg>
            Area Terpilih [${boxSize}x${boxSize}]
            <button type="button" class="hover:text-white ml-2 shrink-0 hover:bg-${themeColor}-800 rounded-full p-0.5 transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
         `;
         
         attachment.querySelector('button')?.addEventListener('click', (ev) => {
            ev.preventDefault();
            attachment.remove();
            if (attachmentsDiv.children.length === 0) {
                attachmentsDiv.classList.add('hidden');
            }
         });

         attachmentsDiv.classList.remove('hidden');
         attachmentsDiv.appendChild(attachment);
         
         if(input) {
            input.focus();
            input.placeholder = "Apa yang harus saya ubah di area ini?";
         }
         stopAnnotating();
      };

      captureBtn.addEventListener('click', () => {
         isAnnotating = !isAnnotating;
         if (isAnnotating) {
            captureBtn.classList.add(`bg-${themeColor}-600`, 'text-white', 'ring-2', `ring-${themeColor}-500`);
            captureBtn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
            document.body.classList.add('cursor-none'); 
            
            if (annotateHighlighter) {
               annotateHighlighter.className = `fixed border-[3px] border-${themeColor}-500 bg-${themeColor}-500/10 z-[100] transition-none pointer-events-none shadow-[0_0_15px_rgba(var(--tw-colors-${themeColor}-500),0.4)] backdrop-blur-[2px] rounded-lg`;
               mouseX = window.innerWidth / 2;
               mouseY = window.innerHeight / 2;
               updateBoxPosition();
               annotateHighlighter.classList.remove('hidden');
            }

            document.addEventListener('mousemove', handleMouseMove, true);
            document.addEventListener('wheel', handleWheel, { capture: true, passive: false });
            document.addEventListener('click', handleCaptureClick, true);
            
            if(docContainer) {
               docContainer.style.userSelect = 'none';
               docContainer.classList.add('pointer-events-none');
            }
         } else {
            stopAnnotating();
         }
      });
    }
  });
}
