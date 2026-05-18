/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import "./PortfolioBento.css";
import { MapPin, Github, Linkedin, ExternalLink, Mail, Briefcase, GraduationCap } from "lucide-react";

export default function PortfolioBento() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-indigo-bg p-4 md:p-8 lg:p-12 font-sans selection:bg-electric-blue/30 selection:text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]"
      >
        {/* HERO SECTION - 2x2 */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-indigo-card border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl group"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-electric-blue/20 overflow-hidden bg-indigo-card-hover">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop"
                  alt="John Doe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-1 right-1 bg-electric-blue p-2 rounded-full border-4 border-indigo-card text-xl">
                <span className="block">🚀</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-electric-blue font-mono text-sm uppercase tracking-tighter mb-1 flex items-center gap-1 justify-end">
                <MapPin size={14} /> Location
              </p>
              <p className="text-lg font-medium text-warm-white">Jakarta, Indonesia</p>
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-extrabold tracking-tighter leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-electric-blue/50">
              John Doe <br className="hidden md:block" />
              <span className="text-3xl font-light text-electric-blue tracking-normal">Software Developer</span>
            </h1>
            <p className="text-muted-text text-lg max-w-sm font-medium leading-relaxed">
              Building high-performance web applications and mastering the art of AI integration.
            </p>
          </div>
        </motion.div>

        {/* ABOUT ME - 2x1 */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 md:col-span-2 row-span-1 bg-indigo-card border border-white/5 rounded-[2rem] p-7 flex flex-col justify-center"
        >
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">About Me</h3>
          <p className="text-slate-300 text-sm leading-relaxed font-normal">
            I'm a passionate developer who bridges the gap between design and engineering. I specialize in building robust single-page applications and responsive, design-system-driven web experiences.
          </p>
          <div className="mt-auto pt-6">
            <div className="h-1 w-12 bg-electric-blue rounded-full mb-2"></div>
            <p className="italic text-xs text-slate-500">"Logic will get you from A to B. Imagination will take you everywhere."</p>
          </div>
        </motion.div>

        {/* LINKS / SOCIAL - 1x1 */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 bg-indigo-card border border-white/5 rounded-[2rem] p-7 flex flex-col"
        >
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Important Links</h3>
          <div className="space-y-3 flex flex-col flex-1 justify-center">
            <a
              href="#"
              className="flex items-center justify-between w-full p-4 bg-white/5 hover:bg-electric-blue transition-colors border border-white/10 rounded-2xl group"
            >
              <div className="flex items-center gap-4">
                <Github className="text-warm-white transition-colors" size={20} />
                <span className="font-semibold text-warm-white">GitHub</span>
              </div>
              <ExternalLink size={18} className="text-electric-blue group-hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="flex items-center justify-between w-full p-4 bg-white/5 hover:bg-electric-blue transition-colors border border-white/10 rounded-2xl group"
            >
              <div className="flex items-center gap-4">
                <Linkedin className="text-warm-white transition-colors" size={20} />
                <span className="font-semibold text-warm-white">LinkedIn</span>
              </div>
              <ExternalLink size={18} className="text-electric-blue group-hover:text-white transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* KEY SKILLS - 1x1 */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 bg-electric-blue rounded-[2rem] p-6 flex flex-col justify-center shadow-lg shadow-electric-blue/20"
        >
          <h3 className="uppercase tracking-widest text-xs font-bold text-white/70 mb-3">Main Stack</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "Node.js", "Figma", "Python", "Tailwind"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-lg cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* PROJECTS - 2x2 */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-indigo-card border border-white/5 rounded-[2rem] p-8 flex flex-col"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Featured Projects</h3>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">←</div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">→</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            {/* Project 1 */}
            <a href="#" className="bg-white/5 rounded-3xl p-5 border border-white/5 flex flex-col group hover:border-electric-blue/30 transition-colors">
              <div className="w-full h-24 bg-indigo-card-hover rounded-2xl mb-4 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-electric-blue opacity-20 text-4xl group-hover:scale-110 transition-transform">⬢</div>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <div>
                  <h4 className="font-bold text-base text-warm-white">Taskify App</h4>
                  <p className="text-xs text-slate-500">AI-powered productivity</p>
                </div>
                <div className="text-electric-blue mr-1">🔗</div>
              </div>
            </a>
            
            {/* Project 2 */}
            <a href="#" className="bg-white/5 rounded-3xl p-5 border border-white/5 flex flex-col group opacity-60 hover:opacity-100 transition-all hover:border-electric-blue/30">
              <div className="w-full h-24 bg-indigo-card-hover rounded-2xl mb-4 relative overflow-hidden">
                 <div className="absolute inset-0 flex items-center justify-center text-slate-500 opacity-20 text-4xl group-hover:scale-110 transition-transform">◆</div>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <div>
                  <h4 className="font-bold text-base text-warm-white">CryptoNix</h4>
                  <p className="text-xs text-slate-500">DeFi Portfolio Tracker</p>
                </div>
                <div className="text-slate-600 group-hover:text-electric-blue mr-1">🔗</div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* EXPERIENCE & ED - 2x2 */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-indigo-card border border-white/5 rounded-[2rem] p-8"
        >
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Experience & Education</h3>
          
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="relative pl-8 border-l-2 border-electric-blue/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-electric-blue"></div>
              <p className="text-sm text-electric-blue font-mono mb-1">2022 - Present</p>
              <h4 className="text-lg font-bold text-warm-white">Software Engineer</h4>
              <ul className="text-sm text-slate-400 mt-2 list-disc list-inside">
                <li>Led frontend development for core SaaS product</li>
                <li>Improved performance by 40% through lazy loading and caching</li>
              </ul>
            </div>

            {/* Item 2 */}
            <div className="relative pl-8 border-l-2 border-slate-700/50">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-700"></div>
              <p className="text-sm text-slate-500 font-mono mb-1">2018 - 2022</p>
              <h4 className="text-lg font-bold text-warm-white">BSc Computer Science</h4>
              <p className="text-sm text-slate-400 mt-1">
                University of Technology
              </p>
            </div>
          </div>
          
        </motion.div>
      </motion.div>
    </div>
  );
}


