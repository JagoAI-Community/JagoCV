/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import './PortfolioMinimalist.css';

export default function PortfolioMinimalist() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white selection:bg-cyan-400/30 selection:text-white font-sans overflow-x-hidden flex flex-col">
      <main className="w-full max-w-5xl mx-auto px-8 md:px-16 py-16 flex flex-col flex-1">
        
        {/* Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:justify-between items-start gap-8"
        >
          <div>
            <h1 className="text-6xl md:text-8xl font-black font-serif tracking-tighter leading-none">
              JOHN DOE
            </h1>
            <p className="mt-4 text-xs tracking-[0.4em] text-cyan-400 font-semibold uppercase">
              Innovative Solutions Developer
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-4 mt-6 md:mt-0">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#E5E5E5] overflow-hidden grayscale border border-white/10 hover:grayscale-0 transition-all duration-700 relative">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&h=256&auto=format&fit=crop" 
                alt="John Doe Profile"
                className="w-full h-full object-cover relative z-10"
              />
              <div className="absolute inset-0 bg-[#D4D4D4] flex items-center justify-center text-[10px] text-black/40 italic font-serif z-0">PORTRAIT</div>
            </div>
            <div className="text-left md:text-right">
              <p className="text-[11px] text-gray-500 uppercase tracking-widest flex items-center md:justify-end gap-1">
                Stockholm, SE <span className="text-xs">🚀</span>
              </p>
            </div>
          </div>
        </motion.header>

        {/* Bio Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mt-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif max-w-2xl leading-[1.1] text-gray-100">
            Building cool web apps and learning <span className="text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.3)] italic">AI</span> to solve human problems at scale.
          </h2>
        </motion.section>

        {/* Main Content Grid */}
        <div className="mt-16 flex flex-col md:flex-row flex-1 gap-16 md:gap-20">
          
          {/* Experience Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex-1"
          >
            <h3 className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-8 font-bold">Selected Experience</h3>
            <div className="space-y-8 border-l border-white/10 pl-6">
              {experiences.map((exp, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[27px] top-1 w-2 h-2 bg-cyan-400/50 group-hover:bg-cyan-400 rounded-full transition-colors duration-300"></div>
                  <p className="text-xs text-cyan-400 font-mono mb-1">{exp.dates}</p>
                  <p className="text-lg font-serif text-white/90 group-hover:text-cyan-400 transition-colors duration-300">{exp.role}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{exp.company}</p>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Projects & Connect */}
          <div className="md:w-80 flex flex-col gap-12 justify-between">
            
            {/* Projects Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <h3 className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-8 font-bold">Latest Projects</h3>
              <div className="space-y-6">
                {projects.map((project, i) => (
                  <a 
                    href={project.url} 
                    key={i} 
                    className="group block relative no-underline hover:opacity-100 opacity-90 transition-opacity"
                  >
                    <div className="flex items-start gap-4">
                      {/* Tiny clean square image */}
                      <div className="w-8 h-8 shrink-0 bg-white/5 border border-white/10 group-hover:border-cyan-400/50 transition-colors duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                        />
                      </div>
                      
                      <div>
                        <p className="text-sm font-serif tracking-wide text-white/90 group-hover:text-cyan-400 transition-colors duration-500">
                          {project.name}
                        </p>
                        <p className="text-[10px] text-gray-500 tracking-wide mt-0.5 line-clamp-1">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.section>

            {/* Connect Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="mb-4"
            >
              <h3 className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-4 font-bold">Connect</h3>
              <div className="flex flex-col gap-2">
                {[
                  { label: 'GITHUB.COM/JDOE', url: '#' },
                  { label: 'LINKEDIN.COM/IN/JDOE', url: '#' },
                ].map((link, i) => (
                  <a 
                    key={i}
                    href={link.url} 
                    className="text-sm text-gray-300 hover:text-cyan-400 transition-colors w-fit font-sans"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.section>
          </div>
        </div>

        {/* Footer / Skills */}
        <motion.footer 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mt-16 md:mt-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <div className="flex flex-wrap gap-4 md:gap-6">
            {['React', 'TypeScript', 'Next.js', 'LLM Ops', 'Python'].map(skill => (
              <span key={skill} className="text-[10px] font-light text-gray-500 tracking-widest uppercase">
                {skill}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-gray-700 font-mono tracking-tighter shrink-0">
            ©2024 J_DOE PORTFOLIO v1.0.2
          </p>
        </motion.footer>

      </main>
    </div>
  );
}

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "TECH CORP INC.",
    dates: "2023 — PRESENT",
    description: "Leading the development of highly scalable microservices and crafting minimalist user interfaces for next-generation AI tools."
  },
  {
    role: "Frontend Developer",
    company: "CREATIVE STUDIO",
    dates: "2020 — 2023",
    description: "Designed and implemented award-winning interactive web applications with a focus on web performance and smooth animations."
  },
  {
    role: "Junior Web Developer",
    company: "STARTUP HUB",
    dates: "2018 — 2020",
    description: "Contributed to multiple fast-paced startup projects, building robust full-stack features and learning modern frameworks."
  }
];

const projects = [
  {
    name: "TASKIFY APP",
    description: "A radically minimalist task management application built with React and Rust, focusing on local-first architecture.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=200&h=200&auto=format&fit=crop",
    url: "#"
  },
  {
    name: "CYAN OS",
    description: "An experimental web-based operating system interface exploring the boundaries of browser capabilities and aesthetic calm.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=200&h=200&auto=format&fit=crop",
    url: "#"
  },
  {
    name: "NEURAL CANVAS",
    description: "AI-powered drawing tool that integrates generative models with a pristine, distraction-free creative workspace.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=200&h=200&auto=format&fit=crop",
    url: "#"
  }
];

