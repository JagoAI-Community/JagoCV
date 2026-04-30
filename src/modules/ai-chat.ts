/**
 * Document-Level AI Chat Logic
 */
export function initAiChat(): void {
  const globalChatWidgets = document.querySelectorAll('.js-global-chat');
  globalChatWidgets.forEach(widget => {
    const input = widget.querySelector('.js-chat-input') as HTMLInputElement;
    const sendBtn = widget.querySelector('.js-chat-send') as HTMLButtonElement;
    const messagesContainer = widget.querySelector('.js-chat-messages') as HTMLDivElement;
    const quickActions = widget.querySelectorAll('.js-chat-messages button');

    if (!input || !sendBtn || !messagesContainer) return;

    const addUserMessage = (text: string) => {
      const msgDiv = document.createElement('div');
      msgDiv.className = 'flex items-start gap-4 justify-end mt-4 animate-[fadeIn_0.3s_ease_forwards]';
      
      const contentDiv = document.createElement('div');
      contentDiv.className = 'bg-slate-100 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600/30 p-4 rounded-2xl rounded-tr-none text-sm text-slate-800 dark:text-slate-200 shadow-sm leading-relaxed max-w-2xl';
      contentDiv.textContent = text;

      const avatarDiv = document.createElement('div');
      avatarDiv.className = 'w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center shrink-0 text-slate-900 dark:text-white font-bold text-xs';
      avatarDiv.textContent = 'YOU';

      msgDiv.appendChild(contentDiv);
      msgDiv.appendChild(avatarDiv);
      messagesContainer.appendChild(msgDiv);
    };

    const addAiResponse = () => {
      const loadingDiv = document.createElement('div');
      loadingDiv.className = 'flex items-start gap-4 mt-4 animate-[fadeIn_0.3s_ease_forwards]';
      
      const isPortfolio = widget.innerHTML.includes('Portfolio');
      const themeColorClass = isPortfolio ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]';
      const bubbleClass = isPortfolio ? 'bg-cyan-950/50 border-cyan-500/20' : 'bg-indigo-950/50 border-indigo-500/20';
      
      loadingDiv.innerHTML = `
         <div class="w-8 h-8 rounded-full ${themeColorClass} flex items-center justify-center shrink-0">
           <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
         </div>
         <div class="${bubbleClass} border p-4 rounded-2xl rounded-tl-none text-sm text-slate-800 dark:text-slate-200 shadow-sm leading-relaxed flex items-center gap-2">
           <div class="w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-slate-400 animate-bounce"></div>
           <div class="w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-slate-400 animate-bounce" style="animation-delay: 0.1s"></div>
           <div class="w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-slate-400 animate-bounce" style="animation-delay: 0.2s"></div>
         </div>
      `;
      messagesContainer.appendChild(loadingDiv);

      setTimeout(() => {
        loadingDiv.remove();
        
        const responseDiv = document.createElement('div');
        responseDiv.className = 'flex items-start gap-4 mt-4 animate-[fadeIn_0.3s_ease_forwards]';
        responseDiv.innerHTML = `
           <div class="w-8 h-8 rounded-full ${themeColorClass} flex items-center justify-center shrink-0">
             <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
           </div>
           <div class="${bubbleClass} border p-4 rounded-2xl rounded-tl-none text-sm text-emerald-400 font-semibold shadow-sm leading-relaxed max-w-2xl flex items-center gap-2">
             <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             Process Complete! I've updated the entire document for you.
           </div>
        `;
        messagesContainer.appendChild(responseDiv);
      }, 1500);
    };

    const handleSend = () => {
      const text = input.value.trim();
      if (!text) return;
      
      addUserMessage(text);
      input.value = '';
      addAiResponse();
    };

    sendBtn.addEventListener('click', handleSend);
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSend();
      }
    });

    quickActions.forEach(btn => {
      btn.addEventListener('click', () => {
        addUserMessage(btn.textContent || '');
        addAiResponse();
      });
    });
  });
}
