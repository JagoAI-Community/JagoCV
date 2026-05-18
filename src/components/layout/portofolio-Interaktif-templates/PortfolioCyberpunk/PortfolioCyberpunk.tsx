/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import './PortfolioCyberpunk.css';
import { 
  Terminal, 
  MapPin, 
  Rocket, 
  Github, 
  Linkedin, 
  Briefcase, 
  Code2, 
  ExternalLink,
  Cpu
} from 'lucide-react';

export default function PortfolioCyberpunk() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#e0e0e0] font-sans p-4 md:p-8 relative overflow-hidden">
      {/* Background Detail: Scanlines and Circuit Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }}></div>
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#06b6d4 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>


      <motion.div 
        className="max-w-6xl mx-auto space-y-6 relative z-10"
        variants={containerVars}
        initial="hidden"
        animate="show"
      >
        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Module 1: Profile (col-span-4) */}
          <motion.div variants={itemVars} className="md:col-span-4 bg-[#0a0a0f] border border-cyan-500/30 rounded-bl-3xl rounded-tr-3xl p-6 flex flex-col justify-center items-center md:items-start text-center md:text-left shadow-[0_0_20px_rgba(6,182,212,0.05)]">
            <div className="relative mb-4">
              <div className="absolute -inset-1 rounded-full border border-cyan-500/50 animate-[spin_10s_linear_infinite] border-dashed"></div>
              <img 
                src="https://api.dicebear.com/7.x/bottts/svg?seed=JohnDoe&backgroundColor=0a0a0f&colors=00f3ff,ff00ff" 
                alt="John Doe Avatar" 
                className="w-24 h-24 rounded-full relative z-10 border border-cyan-800 bg-[#050505]"
              />
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-1 tracking-tight flex items-center gap-2">
              John Doe <Rocket size={24} className="text-magenta-500" />
            </h1>
            <p className="text-lg neon-text-cyan font-mono mb-3">Software Engineer</p>
            
            <div className="flex items-center text-slate-400 text-sm mt-auto">
              <MapPin size={16} className="mr-1 text-cyan-500" />
              <span>Jakarta, Indonesia</span>
            </div>
          </motion.div>

          {/* Module 2: Terminal Bio (col-span-5) */}
          <motion.div variants={itemVars} className="md:col-span-6 bg-black border border-gray-800 rounded-lg p-0 flex flex-col relative overflow-hidden group">
            {/* Terminal Top Bar */}
            <div className="bg-[#050508] border-b border-gray-800 p-3 flex items-center justify-between">
              <div className="flex items-center text-cyan-600 font-mono text-xs">
                <Terminal size={14} className="mr-2" />
                <span>johndoe@cyber-sys: ~</span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              </div>
            </div>
            <div className="p-5 font-mono text-sm leading-relaxed flex-grow bg-black">
              <p className="text-green-400 mb-1"><span className="text-magenta-500 mr-2">❯</span>./load_bio.sh</p>
              <div className="text-slate-300 ml-4 mb-4 border-l border-cyan-900/40 pl-3 py-1">
                <p className="opacity-80">Loading Short Bio... <span className="text-green-400">[OK]</span></p>
                <p className="mt-1 font-sans text-[15px]">Software Engineer specializing in robust backend architectures, distributed systems, and cutting-edge web interfaces.</p>
              </div>

              <p className="text-green-400 mb-1"><span className="text-magenta-500 mr-2">❯</span>cat about_me.md</p>
              <div className="text-slate-300 ml-4 border-l border-magenta-900/40 pl-3 py-1">
                <p className="font-sans text-[15px]">I build dark, complex digital experiences and highly functional modules. Always pushing the limits of the browser and constantly shipping code into the void.</p>
              </div>
              <div className="mt-3 text-cyan-400 animate-pulse font-bold text-lg">_</div>
            </div>
          </motion.div>

          {/* Module 3: Essential Links (col-span-3) */}
          <motion.div variants={itemVars} className="md:col-span-2 bg-[#0a0a0f] border border-magenta-500/30 rounded-tl-3xl rounded-br-3xl p-6 flex flex-col justify-center gap-4 shadow-[0_0_20px_rgba(217,70,239,0.05)]">
            <h3 className="text-xs font-mono text-magenta-400 uppercase tracking-widest mb-1 border-b border-gray-800 pb-2 flex-grow-0">Essential Links</h3>
            <a href="#" className="flex items-center justify-between w-full py-2 px-3 bg-cyan-500/5 border border-cyan-500/50 hover:bg-cyan-500/10 rounded flex items-center justify-center gap-2 transition-colors">
              <div className="flex items-center text-cyan-400 text-xs font-bold">
                <span className="w-2 h-2 mr-2 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]"></span> GitHub
              </div>
              <ExternalLink size={14} className="text-cyan-600" />
            </a>
            <a href="#" className="flex items-center justify-between w-full py-2 px-3 bg-magenta-500/5 border border-magenta-500/50 hover:bg-magenta-500/10 rounded flex items-center justify-center gap-2 transition-colors">
              <div className="flex items-center text-magenta-400 text-xs font-bold">
                <span className="w-2 h-2 mr-2 rounded-full bg-magenta-500 shadow-[0_0_8px_#d946ef]"></span> LinkedIn
              </div>
              <ExternalLink size={14} className="text-magenta-600" />
            </a>
          </motion.div>
        </div>

        {/* MIDDLE ROW - Featured Projects */}
        <motion.div variants={itemVars} className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-white flex items-center">
              <Code2 className="mr-3 w-4 h-4 text-cyan-400" /> 
              Featured Projects
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent mx-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Project Card 1 */}
            <div className="group relative rounded-md overflow-hidden bg-[#0a0a0f] border border-gray-800 hover:border-cyan-500/40 transition-colors flex flex-col h-full">
              <div className="h-40 overflow-hidden relative border-b border-cyan-900/30">
                <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay group-hover:bg-transparent transition-all z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=600&q=80" 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
                  alt="Taskify App"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-xl text-white mb-2 group-hover:text-cyan-400 transition-colors">Taskify App</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-sans flex-grow">
                  A high-performance productivity tool with real-time sync, dark mode, and an AI-driven task prioritization matrix.
                </p>
                <div className="mt-4 pt-4 border-t border-cyan-900/20 flex gap-2 font-mono text-[10px] text-cyan-500 uppercase tracking-widest">
                  <span>React</span> • <span>Node.js</span> • <span>Redis</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative rounded-md overflow-hidden bg-[#0a0a0f] border border-gray-800 hover:border-magenta-500/40 transition-colors flex flex-col h-full">
              <div className="h-40 overflow-hidden relative border-b border-cyan-900/30">
                <div className="absolute inset-0 bg-magenta-500/10 mix-blend-overlay group-hover:bg-transparent transition-all z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
                  alt="CyberNet Dashboard"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-xl text-white mb-2 group-hover:text-magenta-400 transition-colors">CyberNet Dashboard</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-sans flex-grow">
                  A complex data visualization interface for network traffic analytics using WebSockets and large dataset rendering via Canvas.
                </p>
                <div className="mt-4 pt-4 border-t border-cyan-900/20 flex gap-2 font-mono text-[10px] text-magenta-500 uppercase tracking-widest">
                  <span>Vue</span> • <span>D3.js</span> • <span>Python</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group relative rounded-md overflow-hidden bg-[#0a0a0f] border border-gray-800 hover:border-cyan-500/40 transition-colors flex flex-col h-full">
              <div className="h-40 overflow-hidden relative border-b border-cyan-900/30">
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay group-hover:bg-transparent transition-all z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1618401471353-b98a520d9c44?auto=format&fit=crop&w=600&q=80" 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
                  alt="Neon Protocol"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-xl text-white mb-2 group-hover:text-cyan-400 transition-colors">Neon Protocol</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-sans flex-grow">
                  A decentralized identity verification system leveraging smart contracts and zero-knowledge proofs.
                </p>
                <div className="mt-4 pt-4 border-t border-cyan-900/20 flex gap-2 font-mono text-[10px] text-blue-400 uppercase tracking-widest">
                  <span>Solidity</span> • <span>Next.js</span> • <span>Web3</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* BOTTOM ROW - Experience & Skills */}
        <motion.div variants={itemVars} className="bg-[#0a0a0f] border-t border-cyan-500/20 p-6 md:p-8 rounded-t-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
           <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-white flex items-center">
              <Briefcase className="mr-3 w-4 h-4 text-cyan-500" /> 
              Professional Experience
            </h2>
            <div className="h-px bg-gradient-to-r from-gray-800 to-transparent flex-grow ml-6"></div>
          </div>

          <div className="relative border-l border-gray-800 ml-4 md:ml-6 space-y-10 pl-6 md:pl-10 pb-4">
            
            {/* Experience Item 1 */}
            <div className="relative">
              <div className="absolute -left-[29px] md:-left-[45px] top-1.5 w-[9px] h-[9px] bg-cyan-500 rounded-full"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Senior Software Engineer</h3>
                <span className="font-mono text-xs text-cyan-500 opacity-80 px-2 py-1 bg-cyan-950/30 rounded border border-cyan-900/50 mt-2 md:mt-0 inline-block w-fit">2023 - Present</span>
              </div>
              <div className="text-magenta-400 font-medium mb-3 flex items-center text-sm">
                <Cpu size={14} className="mr-2" /> Global Tech Solutions
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Leading the core platform team designing robust microservices architecture for real-time analytics. Optimized database queries reducing latency by 45%. Headed the migration of legacy interfaces into modern react-based SPAs.
              </p>
              <div className="font-mono text-xs bg-[#050508] inline-block p-3 rounded border border-slate-800">
                <span className="text-slate-500 mr-2">Key Skills:</span>
                <span className="neon-text-cyan">React</span>, <span className="neon-text-magenta">Node.js</span>, <span className="neon-text-cyan">TypeScript</span>, <span className="text-yellow-400">AWS</span>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="relative opacity-60">
              <div className="absolute -left-[29px] md:-left-[45px] top-1.5 w-[9px] h-[9px] bg-gray-700 rounded-full"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-200">Frontend Developer</h3>
                <span className="font-mono text-xs text-slate-400 opacity-80 px-2 py-1 bg-slate-900/50 rounded border border-slate-800 mt-2 md:mt-0 inline-block w-fit">2020 - 2023</span>
              </div>
              <div className="text-cyan-600 font-medium mb-3 flex items-center text-sm">
                 <Cpu size={14} className="mr-2" /> Creative Dev Agency
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Developed interactive user interfaces for high-profile clients focusing on accessibility and frame-perfect animations. Implemented custom WebGL experiences and design system libraries.
              </p>
              <div className="font-mono text-xs bg-[#050508] inline-block p-3 rounded border border-slate-800">
                <span className="text-slate-500 mr-2">Key Skills:</span>
                <span className="neon-text-cyan">Vue.js</span>, <span className="neon-text-magenta">Figma</span>, <span className="neon-text-cyan">Python</span>, <span className="text-yellow-400">Three.js</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Footer */}
        <div className="text-center py-6 font-mono text-xs text-cyan-900 uppercase tracking-widest">
          System Initialized • End of Portfolio
        </div>
      </motion.div>
    </div>
  );
}

