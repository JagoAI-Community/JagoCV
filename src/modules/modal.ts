import { getEl } from '../utils/dom';

/**
 * Layout Selection Preview Modal Logic
 */
export function initModal(): void {
  const layoutLabels = document.querySelectorAll('label.cursor-pointer');
  layoutLabels.forEach(label => {
    if (label.closest('#view-create-cv') || label.closest('#view-design-resume')) {
      if (label.querySelector('.h-14')) { 
        const previewBtn = document.createElement('button');
        previewBtn.type = 'button';
        previewBtn.className = 'absolute top-3 right-8 p-1.5 rounded-lg bg-slate-900/10 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-white hover:shadow dark:hover:bg-slate-700 transition-all opacity-0 group-hover:opacity-100 js-preview-layout-btn ring-1 ring-slate-900/5 dark:ring-white/10';
        previewBtn.innerHTML = '<svg class="w-4 h-4 text-slate-800 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>';
        
        label.classList.add('group');
        label.appendChild(previewBtn);

        previewBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          
          const modal = getEl('layout-preview-modal');
          if (modal) {
            modal.classList.remove('hidden');
            setTimeout(() => {
              modal.classList.remove('opacity-0');
              const contentBox = getEl('layout-preview-modal-content');
              if (contentBox) {
                 contentBox.classList.remove('scale-95');
                 contentBox.classList.add('scale-100');
              }
            }, 10);
          }
        });
      }
    }
  });

  const btnCloseModal = getEl('close-preview-modal');
  const btnSelectModal = getEl('select-preview-modal');
  const viewModal = getEl('layout-preview-modal');
  
  const closeModal = () => {
    if(!viewModal) return;
    viewModal.classList.add('opacity-0');
    const contentBox = getEl('layout-preview-modal-content');
    if (contentBox) {
       contentBox.classList.add('scale-95');
       contentBox.classList.remove('scale-100');
    }
    setTimeout(() => {
       viewModal.classList.add('hidden');
    }, 300);
  }

  if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
  if (btnSelectModal) btnSelectModal.addEventListener('click', closeModal);
}
