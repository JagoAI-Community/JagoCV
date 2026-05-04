export function initPopovers() {
  const aiEditPopover = document.getElementById("ai-edit-popover");
  const btnCancelAi = document.getElementById("btn-cancel-ai");
  const cvDocumentContainer = document.getElementById("cv-document-container");
  const resumeDocumentContainer = document.getElementById("resume-document-container");
  const portfolioDocumentContainer = document.getElementById("portfolio-document-container");
  
  if (aiEditPopover && btnCancelAi) {
    let activeSection: HTMLElement | null = null;
    let activeContainer: HTMLElement | null = null;

    const setupAiButtons = (container: HTMLElement | null) => {
        if (!container) return;
        const aiButtons = container.querySelectorAll(".btn-ask-ai");
        aiButtons.forEach(btn => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            
            // Find the parent section that this button belongs to
            const section = (e.target as HTMLElement).closest("section, header, div.custom-resume-section") as HTMLElement;
            if (!section) return;

            // Position the Popover relative to the document container
            const containerRect = container.getBoundingClientRect();
            const sectionRect = section.getBoundingClientRect();

            // Calculate position (centered over the section horizontally, just below the button vertically)
            let top = sectionRect.top - containerRect.top + 30; // 30px offset from top of section
            let left = (sectionRect.width / 2) - 160; // 160 is half of popover width (w-80 = 320px)

            // Adjust horizontal position if it's on the left sidebar
            if (section.classList.contains("md:w-1/3")) {
              left = sectionRect.left - containerRect.left + 20; 
            }

            // Adjust horizontal position if it's in the mobile viewport
            if (container === portfolioDocumentContainer) {
              left = (containerRect.width / 2) - 160;
            }

            aiEditPopover.style.top = `${top}px`;
            aiEditPopover.style.left = `${left}px`;
            
            // Move popover into the correct container
            if (activeContainer !== container) {
                container.appendChild(aiEditPopover);
                activeContainer = container;
            }

            // Remove active state from previous
            if (activeSection) {
                activeSection.classList.remove("ring-2", "ring-indigo-400", "bg-indigo-50/10", "bg-white/10", "ring-cyan-500", "bg-cyan-900/40");
            }
            
            // Add active state to current
            activeSection = section;
            
            // If it's a dark background (sidebar), use slightly different highlight
            if (section.classList.contains("bg-indigo-900")) {
               activeSection.classList.add("ring-2", "ring-indigo-400", "bg-white/10");
            } else if (container === portfolioDocumentContainer) {
               activeSection.classList.add("ring-2", "ring-cyan-500", "bg-cyan-900/40");
            } else {
               activeSection.classList.add("ring-2", "ring-indigo-400", "bg-indigo-50/10");
            }
            
            // Show popover
            aiEditPopover.classList.remove("hidden");
            
            // Focus the input
            const input = document.getElementById("ai-edit-prompt") as HTMLTextAreaElement;
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

  // Layout preview model
  // Functionality removed per user request
}
