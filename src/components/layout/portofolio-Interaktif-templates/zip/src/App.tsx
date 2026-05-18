/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen p-6 md:p-12 lg:p-16 max-w-[1600px] mx-auto pb-24 font-sans selection:bg-pink-400 text-black">
      {/* Header Section */}
      <header className="bg-[#fef01e] brutal-border brutal-shadow p-6 md:p-10 mb-12">
        <h1 className="font-black text-6xl sm:text-8xl md:text-[9vw] leading-[0.85] uppercase tracking-tighter w-full max-w-[1200px]">
          Shafnat
          <br /> 
          Ramadhan
        </h1>
        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t-4 border-black pt-6">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-mono font-bold uppercase tracking-tight">
            Information Systems Developer
          </h2>
          <div className="flex gap-4 bg-white brutal-border p-3 brutal-shadow-sm">
            <div className="h-12 w-12 rounded-full border-4 border-black bg-[#ff00f5] flex items-center justify-center -rotate-12">
               <span className="text-2xl">👨‍💻</span>
            </div>
            <div className="h-12 w-12 rounded-full border-4 border-black bg-[#00f0ff] flex items-center justify-center rotate-6">
               <span className="text-2xl">💽</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Grid Content */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-8">
        
        {/* Left Column (Bio, Links, Skills) */}
        <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">
          
          {/* Bio Box */}
          <section className="bg-[#00f0ff] p-6 sm:p-8 brutal-border brutal-shadow">
            <div className="flex items-center gap-3 mb-4 border-b-4 border-black pb-2">
              <span className="text-3xl">🚀</span>
              <h3 className="font-mono text-2xl font-black uppercase underline decoration-black">Biography</h3>
            </div>
            <p className="font-mono text-lg font-bold leading-tight mb-6">
              I build robust, scalable information systems and dynamic applications. Turning raw data into solid, accessible, and fast digital experiences.
            </p>
            <div className="bg-white px-2 py-1 italic border-2 border-black w-max max-w-full font-mono font-bold text-sm sm:text-base">
              Bandung, Indonesia
            </div>
          </section>

          {/* Important Links */}
          <section className="flex flex-col gap-4">
            <a href="#" className="bg-[#ff00f5] text-black p-4 brutal-border brutal-shadow-md flex items-center justify-between group active:translate-x-1 active:translate-y-1 active:shadow-none transition-all hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <Github size={32} className="stroke-[3]" />
                <span className="text-xl font-black uppercase tracking-tight group-hover:underline">GitHub Profile ↗</span>
              </div>
            </a>
            
            <a href="#" className="bg-[#fef01e] text-black p-4 brutal-border brutal-shadow-md flex items-center justify-between group active:translate-x-1 active:translate-y-1 active:shadow-none transition-all hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <Linkedin size={32} className="stroke-[3]" />
                <span className="text-xl font-black uppercase tracking-tight group-hover:underline">LinkedIn Connect ↗</span>
              </div>
            </a>

            <a href="#" className="bg-[#00f0ff] text-black p-4 brutal-border brutal-shadow-md flex items-center justify-between group active:translate-x-1 active:translate-y-1 active:shadow-none transition-all hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <Mail size={32} className="stroke-[3]" />
                <span className="text-xl font-black uppercase tracking-tight group-hover:underline">Email Me ↗</span>
              </div>
            </a>
          </section>

          {/* Key Skills */}
          <section className="bg-white brutal-border brutal-shadow p-6 group">
            <h3 className="font-mono text-lg font-black uppercase border-b-4 border-black mb-6 pb-1 italic">Key_Skills.sys</h3>
            <div className="relative h-48 sm:h-40 flex items-center justify-center mt-6">
              <div className="absolute top-0 left-0 sm:left-4 bg-[#00f0ff] border-2 border-black px-4 py-2 font-black rotate-[-6deg] brutal-shadow-sm hover:-translate-y-2 transition-transform cursor-default">LARAVEL</div>
              <div className="absolute top-10 right-2 sm:right-6 bg-[#ff00f5] text-white border-2 border-black px-4 py-2 font-black rotate-[8deg] brutal-shadow-sm hover:-translate-y-2 transition-transform z-10 cursor-default">FLUTTER</div>
              <div className="absolute bottom-6 left-6 sm:left-12 bg-[#fef01e] border-2 border-black px-4 py-2 font-black rotate-[-12deg] brutal-shadow-sm hover:-translate-y-2 transition-transform z-20 cursor-default">PYTHON</div>
              <div className="absolute bottom-0 right-4 sm:right-10 bg-white border-2 border-black px-4 py-2 font-black rotate-[4deg] brutal-shadow-sm hover:-translate-y-2 transition-transform z-30 cursor-default">DART</div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000] text-white border-2 border-black px-4 py-2 font-black rotate-[-2deg] brutal-shadow-sm hover:-translate-y-2 transition-transform z-40 cursor-default">SQL</div>
            </div>
          </section>
        </div>

        {/* Right Column (Projects, Experince) */}
        <div className="lg:col-span-8 flex flex-col gap-6 md:gap-8">
          
          {/* Featured Projects */}
          <section className="brutal-border bg-white brutal-shadow p-6 flex-grow flex flex-col">
            <h2 className="text-3xl font-black uppercase mb-6 italic tracking-tight border-b-4 border-black pb-2">Featured Projects_</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
              {/* Project Card 1 */}
              <article className="border-4 border-black bg-white p-5 group flex flex-col transition-all hover:bg-gray-50">
                <div className="w-full aspect-video bg-[#ff00f5] border-4 border-black mb-4 flex items-center justify-center overflow-hidden">
                  <span className="text-white font-black text-4xl sm:text-5xl transform -rotate-12 group-hover:scale-110 transition-transform">CAKAP.AI</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-black text-2xl uppercase mb-1">Cakap Pro AI</h4>
                  <p className="font-mono text-sm font-bold opacity-80 mb-4">An advanced communicative learning platform integrating AI for personalized progression tracking and real-time feedback.</p>
                </div>
                <div className="mt-auto pt-4 flex gap-2 border-t-2 border-black border-dashed flex-wrap">
                  <span className="font-mono text-xs font-bold uppercase bg-[#00f0ff] border-2 border-black px-2 py-1">Python</span>
                  <span className="font-mono text-xs font-bold uppercase bg-white border-2 border-black px-2 py-1">React</span>
                  <span className="font-mono text-xs font-bold uppercase bg-black text-white border-2 border-black px-2 py-1">OpenAI API</span>
                </div>
              </article>

              {/* Project Card 2 */}
              <article className="border-4 border-black bg-white p-5 group flex flex-col transition-all hover:bg-gray-50">
                <div className="w-full aspect-video bg-[#fef01e] border-4 border-black mb-4 flex items-center justify-center overflow-hidden">
                  <span className="text-black font-black text-4xl sm:text-5xl transform rotate-12 group-hover:scale-110 transition-transform">RESCUE</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-black text-2xl uppercase mb-1">Food AI Rescue</h4>
                  <p className="font-mono text-sm font-bold opacity-80 mb-4">A smart distribution system reducing food waste by predicting demand and mapping surplus food locations via geo-services.</p>
                </div>
                <div className="mt-auto pt-4 flex gap-2 border-t-2 border-black border-dashed flex-wrap">
                  <span className="font-mono text-xs font-bold uppercase bg-[#ff00f5] text-white border-2 border-black px-2 py-1">Laravel</span>
                  <span className="font-mono text-xs font-bold uppercase bg-white border-2 border-black px-2 py-1">Flutter</span>
                  <span className="font-mono text-xs font-bold uppercase bg-black text-white border-2 border-black px-2 py-1">Maps API</span>
                </div>
              </article>
            </div>
          </section>

          {/* Timeline / Data Table */}
          <section className="brutal-border bg-white brutal-shadow p-6 flex-grow">
             <h2 className="font-mono font-black uppercase text-2xl border-b-4 border-black mb-6 pb-2 italic">History.log</h2>

             <div className="space-y-6 font-mono">
                <div className="border-b-4 border-black pb-4 hover:pl-2 sm:hover:pl-4 transition-all">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center font-black text-lg sm:text-xl uppercase mb-2">
                    <span className="text-[#ff00f5]">Full-Stack Dev Lead</span>
                    <span className="text-sm mt-1 sm:mt-0 font-bold sm:text-base">2024-Pres</span>
                  </div>
                  <div className="text-sm sm:text-base font-bold bg-[#fef01e] inline-block px-2 border-2 border-black">Tech Innovations Inc.</div>
                </div>
                
                <div className="border-b-4 border-black pb-4 hover:pl-2 sm:hover:pl-4 transition-all">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center font-black text-lg sm:text-xl uppercase mb-2">
                    <span className="text-[#00f0ff]">Systems Engineer</span>
                    <span className="text-sm mt-1 sm:mt-0 font-bold sm:text-base">2022-2024</span>
                  </div>
                  <div className="text-sm sm:text-base font-bold bg-black text-white inline-block px-2 border-2 border-black">Bandung Digital Agency</div>
                </div>

                <div className="pb-2 hover:pl-2 sm:hover:pl-4 transition-all">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center font-black text-lg sm:text-xl uppercase mb-2">
                    <span>B.S. Info Systems</span>
                    <span className="text-sm mt-1 sm:mt-0 font-bold sm:text-base">2021 Grad</span>
                  </div>
                  <div className="text-sm sm:text-base font-bold bg-white inline-block px-2 border-2 border-black">ITB - Summa Cum Laude</div>
                </div>
             </div>
          </section>

        </div>
      </main>
      
      {/* Footer Status Bar */}
      <footer className="mt-16 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs md:text-sm font-black uppercase border-t-4 border-black pt-4">
        <span>SYSTEM_READY: TRUE</span>
        <span>SHAFNAT_RAMADHAN // PORTFOLIO_V1</span>
        <span>BANDUNG, ID — 107.6191° E</span>
      </footer>
    </div>
  );
}
