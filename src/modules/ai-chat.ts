import { generateAiCompletion, AiMessage } from '../services/ai';

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

    // Chat history
    const chatHistory: AiMessage[] = [
      { role: 'system', content: 'Anda adalah asisten karir cerdas untuk platform jagoCV. Jawablah permintaan pengguna mengenai pembuatan CV/Resume dengan profesional.' }
    ];

    const addUserMessage = (text: string) => {
      chatHistory.push({ role: 'user', content: text });
      
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

    const addAiResponse = async () => {
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

      try {
        const reply = await generateAiCompletion(chatHistory);
        chatHistory.push({ role: 'assistant', content: reply });
        
        loadingDiv.remove();
        
        const responseDiv = document.createElement('div');
        responseDiv.className = 'flex items-start gap-4 mt-4 animate-[fadeIn_0.3s_ease_forwards]';
        responseDiv.innerHTML = `
           <div class="w-8 h-8 rounded-full ${themeColorClass} flex items-center justify-center shrink-0">
             <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
           </div>
           <div class="${bubbleClass} border p-4 rounded-2xl rounded-tl-none text-sm font-medium shadow-sm leading-relaxed max-w-2xl text-slate-900 dark:text-slate-100">
             ${reply.replace(/\n/g, '<br/>')}
           </div>
        `;
        messagesContainer.appendChild(responseDiv);
      } catch (err) {
        loadingDiv.remove();
        console.error(err);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'flex items-start gap-4 mt-4 animate-[fadeIn_0.3s_ease_forwards]';
        errorDiv.innerHTML = `
           <div class="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0">!</div>
           <div class="bg-red-950/50 border-red-500/20 border p-4 rounded-2xl rounded-tl-none text-sm text-red-400 font-semibold shadow-sm leading-relaxed max-w-2xl">
             Koneksi ke AI gagal. (XAMPP Server / API Key mungkin belum siap).
           </div>
        `;
        messagesContainer.appendChild(errorDiv);
      }
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
