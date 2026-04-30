import type { UserDashboardData } from '../types/user';
import { showToast } from '../utils/toast';

/**
 * Handles dashboard data population and filtering
 */
export async function initDashboard(data: UserDashboardData): Promise<void> {
  // Populate Nav & Profile headers
  const populateText = (id: string, text: string) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  
  const populateImg = (id: string, src: string) => {
    const el = document.getElementById(id) as HTMLImageElement;
    if (el) el.src = src;
  };

  populateText("nav-user-name", data.name);
  populateText("nav-user-role", data.role);
  populateImg("nav-profile-img", data.profileImageUrl);
  
  populateText("profile-page-name", data.name);
  populateText("profile-page-role", data.role);
  populateImg("profile-page-img", data.profileImageUrl);
  populateText("lbl-portfolio-views", data.portfolioViews.toString());

  // Fetch data from Backend
  let backendDocs: any[] = [];
  let backendTemplates: any[] = [];

  try {
     const [docsRes, tplRes] = await Promise.all([
        fetch('/api/documents'),
        fetch('/api/templates')
     ]);
     if (docsRes.ok) backendDocs = await docsRes.json();
     if (tplRes.ok) backendTemplates = await tplRes.json();
  } catch (err) {
     console.warn("Backend not available, falling back to mock data", err);
     backendDocs = data.recentDocs;
  }

  // Render recent documents list & grid
  const grid = document.getElementById("recent-docs-grid");
  const listBody = document.getElementById("recent-docs-list");

  function renderDocs(filter: string) {
    if (!grid || !listBody) return;
    
    // --- Render Generator Cards (Templates) dynamically ---
    const templatesContainer = document.getElementById("template-grid-container");
    if (templatesContainer && backendTemplates.length > 0) {
       templatesContainer.innerHTML = '';
       backendTemplates.forEach(tpl => {
          const article = document.createElement("article");
          const hoverBorder = tpl.theme_color === 'blue' ? 'hover:border-blue-500/50 dark:hover:border-blue-500/50' : 
                              tpl.theme_color === 'indigo' ? 'hover:border-indigo-500/50 dark:hover:border-indigo-500/50' : 
                              'hover:border-cyan-500/50 dark:hover:border-cyan-500/50';
          article.className = `bg-white/5 dark:bg-[#0a0f1c]/40 rounded-3xl p-7 flex flex-col group cursor-pointer relative overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-300 hover:-translate-y-1 ${hoverBorder}`;
          article.innerHTML = `
            <div class="absolute -top-16 -left-16 w-48 h-48 bg-${tpl.theme_color}-500/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div class="w-14 h-14 bg-${tpl.theme_color}-500/5 dark:bg-${tpl.theme_color}-500/10 rounded-2xl flex items-center justify-center border border-${tpl.theme_color}-200/50 dark:border-${tpl.theme_color}-500/30 mb-6 text-${tpl.theme_color}-600 dark:text-${tpl.theme_color}-400 relative z-10">
              ${tpl.icon_svg}
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">${tpl.name}</h3>
            <p class="text-[15px] text-slate-600 dark:text-slate-400 mb-8 flex-1 leading-relaxed relative z-10">${tpl.description}</p>
            <div class="flex items-center gap-3 mt-auto relative z-10 w-full">
              <button class="w-[46px] h-[46px] flex items-center justify-center bg-transparent hover:bg-slate-800/80 rounded-xl text-slate-400 hover:text-slate-300 transition-colors border border-slate-200/10 dark:border-slate-700/50" title="Pratinjau">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </button>
              <button class="flex-1 bg-${tpl.theme_color === 'blue' ? '[#1E5EFF] hover:bg-blue-600' : tpl.theme_color+'-600 hover:bg-'+tpl.theme_color+'-700'} text-white font-bold py-3 rounded-xl transition-all text-sm">Buat ${tpl.type}</button>
            </div>
          `;
          templatesContainer.appendChild(article);
       });
    }

    // Render Grid Create Card
    grid.innerHTML = `
      <div class="group relative bg-[#F8FAFC]/80 dark:bg-[#0a0f1c]/50 border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-2xl overflow-hidden aspect-[3/4] flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-blue-50/50 dark:hover:bg-blue-900/10" onclick="window.showToast('Membuat dokumen kosong baru...')">
        <div class="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
        </div>
        <span class="text-sm font-bold text-slate-700 dark:text-slate-300">Buat Kosong</span>
      </div>
    `;
    listBody.innerHTML = "";

    const filteredDocs = filter === "Semua" ? backendDocs : backendDocs.filter(d => {
       if (filter === "CV ATS") return d.type === "ATS CV";
       if (filter === "Resume" || filter === "Visual Resume") return d.type === "Visual Resume";
       if (filter === "Web Portfolio") return d.type === "Web Portfolio";
       if (filter === "Cover Letter") return d.type === "Cover Letter";
       return false;
    });

    filteredDocs.forEach(doc => {
      let typeLabel = "Dokumen";
      if (doc.type === "ATS CV") typeLabel = "ATS CV";
      if (doc.type === "Visual Resume") typeLabel = "Resume";
      if (doc.type === "Web Portfolio") typeLabel = "Web Portfolio";

      const div = document.createElement("div");
      div.className = "group relative bg-white dark:bg-[#0B1221]/80 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden aspect-[3/4] flex flex-col";
      div.innerHTML = `
        <div class="flex-1 bg-slate-50 dark:bg-[#070B19] p-4 relative overflow-hidden group-hover:bg-slate-100 dark:group-hover:bg-slate-800/30 transition-colors" onclick="window.showToast('Membuka ' + '${doc.title}')">
          <div class="w-full h-full bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 rounded px-3 py-4 flex flex-col gap-2 opacity-80 pointer-events-none">
             ${doc.type === 'Web Portfolio' ? '<div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 mb-2"></div>' : ''}
             <div class="w-1/2 h-2 ${doc.type === 'Web Portfolio' ? 'bg-slate-200 dark:bg-slate-700' : 'bg-slate-300 dark:bg-slate-600'} rounded-full ${doc.type !== 'Web Portfolio' ? 'mx-auto' : ''}"></div>
             ${doc.type !== 'Web Portfolio' ? '<div class="w-1/3 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-2"></div>' : ''}
             <div class="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
             <div class="w-[90%] h-1 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
             <div class="w-[80%] h-1 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
             ${doc.type !== 'Web Portfolio' ? `
             <div class="mt-4 w-1/3 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
             <div class="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full mt-1"></div>
             <div class="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
             ` : ''}
          </div>
        </div>
        <button class="absolute top-2 right-2 p-1.5 rounded-md bg-white/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:text-blue-600 backdrop-blur-sm z-10" onclick="event.stopPropagation(); window.showToast('Menampilkan opsi menu...')">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        </button>
        <div class="p-3 bg-white dark:bg-[#0B1221] border-t border-slate-100 dark:border-slate-800/80 shrink-0">
          <h3 class="text-sm font-bold text-slate-800 dark:text-white truncate">${doc.title}</h3>
          <p class="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center justify-between">
            <span>${typeLabel}</span>
            <span>${doc.date}</span>
          </p>
        </div>
      `;
      grid.appendChild(div);

      // List View Item
      let badgeColor = "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300";
      if (doc.status === "Selesai") badgeColor = "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20";
      if (doc.status === "Diterbitkan") badgeColor = "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20";
      if (doc.status === "Draf") badgeColor = "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20";

      const tr = document.createElement("tr");
      tr.className = "hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group cursor-pointer";
      tr.innerHTML = `
        <td class="py-4 px-8" onclick="window.showToast('Membuka ' + '${doc.title}')">
          <p class="font-bold text-slate-900 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">${doc.title}</p>
          <p class="text-xs text-slate-500 mt-1 font-medium">${doc.id}</p>
        </td>
        <td class="py-4 px-8" onclick="window.showToast('Membuka ' + '${doc.title}')">
          <span class="text-sm text-slate-600 dark:text-slate-400 font-medium">${doc.type}</span>
        </td>
        <td class="py-4 px-8" onclick="window.showToast('Membuka ' + '${doc.title}')">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${badgeColor}">
            ${doc.status}
          </span>
        </td>
        <td class="py-4 px-8 text-sm text-slate-600 dark:text-slate-400 font-medium" onclick="window.showToast('Membuka ' + '${doc.title}')">${doc.date}</td>
        <td class="py-4 px-8 text-right">
          <button class="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm" onclick="event.stopPropagation(); window.showToast('Mengedit ' + '${doc.title}')">Edit</button>
        </td>
      `;
      listBody.appendChild(tr);
    });
  }

  // Initial Render & Filter Handling
  if (grid && listBody) {
     renderDocs("Semua");
     
     const filterButtons = document.querySelectorAll(".hide-scrollbar button");
     filterButtons.forEach(btn => {
       btn.addEventListener("click", (e) => {
          const target = e.target as HTMLElement;
          filterButtons.forEach(b => {
             if (b === target || b.textContent === target.textContent) {
                b.className = "px-4 py-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium whitespace-nowrap transition-colors";
             } else if (b.className.includes("bg-slate-900") || b.className.includes("bg-white text-white")) {
                b.className = "px-4 py-1.5 rounded-full bg-white/60 dark:bg-[#0B1221]/60 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-sm font-medium whitespace-nowrap transition-colors";
             }
          });
          renderDocs(target.textContent?.trim() || "Semua");
       });
     });
  }

  // Grid/List View Toggles
  const btnGrid = document.getElementById("btn-view-grid");
  const btnList = document.getElementById("btn-view-list");
  const listContainer = document.getElementById("recent-docs-list-container");

  if (btnGrid && btnList && grid && listContainer) {
    btnGrid.addEventListener("click", () => {
      grid.classList.remove("hidden");
      listContainer.classList.add("hidden");
      btnGrid.className = "p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm transition-colors";
      btnList.className = "p-1.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors";
    });

    btnList.addEventListener("click", () => {
      listContainer.classList.remove("hidden");
      grid.classList.add("hidden");
      btnList.className = "p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm transition-colors";
      btnGrid.className = "p-1.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors";
    });
  }
}
