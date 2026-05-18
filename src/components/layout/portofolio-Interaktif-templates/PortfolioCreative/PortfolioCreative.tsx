/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import './PortfolioCreative.css';
import { Github, Linkedin, MapPin, Briefcase, GraduationCap, ChevronRight } from 'lucide-react';

export default function PortfolioCreative() {
  return (
    <div className="min-h-screen py-12 px-6 sm:px-12 md:px-20 lg:px-32 max-w-5xl mx-auto flex flex-col gap-16 text-neo-text pb-24">

      {/* Top Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center gap-6"
      >
        <div className="w-36 h-36 rounded-full neo-circle p-2 flex items-center justify-center mb-2">
          <img
            src="https://api.dicebear.com/7.x/notionists/svg?seed=Shafnat&backgroundColor=e2e8f0"
            alt="Shafnat Ramadhan"
            className="w-full h-full rounded-full object-cover bg-[#202326] border-4 border-[#1a1c1e]"
          />
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Shafnat Ramadhan</h1>
          <p className="text-xl text-neo-accent font-medium flex items-center justify-center gap-2">
            Full-Stack Developer & UI/UX Designer 🚀
          </p>
          <p className="flex items-center justify-center gap-2 text-neo-text-dim mt-2">
            <MapPin size={18} /> Bandung, Indonesia
          </p>
        </div>
      </motion.section>

      {/* Links */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex justify-center gap-6"
      >
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="neo-button rounded-full px-8 py-3.5 flex items-center gap-3 font-bold text-lg text-blue-400">
          <Github size={22} /> GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="neo-button rounded-full px-8 py-3.5 flex items-center gap-3 font-bold text-lg text-blue-400">
          <Linkedin size={22} /> LinkedIn
        </a>
      </motion.section>

      {/* About Me */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="neo-raised rounded-[40px] p-8 md:p-12 text-neo-text-dim leading-relaxed text-lg">
          <h2 className="text-lg font-bold text-white mb-6 uppercase tracking-widest opacity-40">About Me</h2>
          <p>
            I'm a passionate developer and designer focused on creating seamless,
            intuitive digital experiences. With a strong foundation in both front-end
            aesthetics and back-end logic, I bridge the gap between user needs and
            technical execution. Every pixel and line of code I write is aimed at
            delivering measurable impact and elegant usability.
          </p>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-lg font-bold text-white mb-8 pl-5 border-l-4 border-neo-accent uppercase tracking-widest opacity-40">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="neo-raised rounded-[32px] p-6 flex flex-col gap-6">
            <div className="neo-pressed-small h-56 rounded-2xl w-full flex items-center justify-center overflow-hidden p-2">
               <div className="w-full h-full rounded-xl overflow-hidden relative">
                 <div className="absolute inset-0 bg-neo-bg/30 z-10 mix-blend-overlay"></div>
                 <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" alt="CarbonSense IoT" className="w-full h-full object-cover mix-blend-luminosity opacity-80" />
               </div>
            </div>
            <div className="px-2 pb-2">
              <h3 className="text-2xl font-bold mb-3 text-neo-text">CarbonSense IoT</h3>
              <p className="text-neo-text-dim mb-6 leading-relaxed">
                An IoT-based dashboard for tracking real-time carbon emissions and air quality using deployed sensor networks.
              </p>
              <button className="text-neo-accent font-semibold flex items-center gap-1 hover:brightness-125 transition-all w-fit">
                View Project <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="neo-raised rounded-[32px] p-6 flex flex-col gap-6">
            <div className="neo-pressed-small h-56 rounded-2xl w-full flex items-center justify-center overflow-hidden p-2">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                 <div className="absolute inset-0 bg-neo-bg/30 z-10 mix-blend-overlay"></div>
                 <img src="https://images.unsplash.com/photo-1498837167169-ce05f52ce16d?auto=format&fit=crop&w=800&q=80" alt="Food AI Rescue" className="w-full h-full object-cover mix-blend-luminosity opacity-80" />
               </div>
            </div>
            <div className="px-2 pb-2">
              <h3 className="text-2xl font-bold mb-3 text-neo-text">Food AI Rescue</h3>
              <p className="text-neo-text-dim mb-6 leading-relaxed">
                A mobile application leveraging machine learning to connect surplus food from restaurants to local charities.
              </p>
              <button className="text-neo-accent font-semibold flex items-center gap-1 hover:brightness-125 transition-all w-fit">
                View Project <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-lg font-bold text-white mb-8 pl-5 border-l-4 border-neo-accent uppercase tracking-widest opacity-40">Experience</h2>
        <div className="relative border-l-2 border-[#25282c] ml-6 space-y-12 pl-10">
          {/* Role 1 */}
          <div className="relative">
            <div className="absolute -left-[57px] top-4 neo-circle bg-neo-bg w-10 h-10 rounded-full flex items-center justify-center text-blue-500 z-10">
              <Briefcase size={18} />
            </div>
            <div className="neo-pressed rounded-[40px] p-8">
              <h3 className="font-bold text-xl text-neo-text">Laboratory Assistant</h3>
              <p className="text-neo-accent font-medium mb-3">FIT (Faculty of Applied Science)</p>
              <span className="neo-inset-sm px-4 py-1.5 text-sm font-medium text-neo-text-dim rounded-full inline-block mb-4">Aug 2023 - Present</span>
              <p className="text-neo-text-dim leading-relaxed">
                Assisting students with practical programming sessions, grading assignments, and maintaining lab infrastructure for optimal learning environments.
              </p>
            </div>
          </div>

          {/* Role 2 */}
          <div className="relative">
            <div className="absolute -left-[57px] top-4 neo-circle bg-neo-bg w-10 h-10 rounded-full flex items-center justify-center text-blue-500 z-10">
              <GraduationCap size={18} />
            </div>
            <div className="neo-pressed rounded-[40px] p-8">
              <h3 className="font-bold text-xl text-neo-text">Freelance UI/UX Designer</h3>
              <p className="text-neo-accent font-medium mb-3">Self-Employed</p>
              <span className="neo-inset-sm px-4 py-1.5 text-sm font-medium text-neo-text-dim rounded-full inline-block mb-4">Jan 2022 - Present</span>
              <p className="text-neo-text-dim leading-relaxed">
                Collaborated with various startups to design intuitive mobile and web app interfaces, creating high-fidelity prototypes in Figma focused on enhancing user retention.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="text-lg font-bold text-white mb-8 pl-5 border-l-4 border-neo-accent uppercase tracking-widest opacity-40">Skills & Tools</h2>
        <div className="flex flex-wrap gap-5">
          {['Laravel', 'Flutter', 'Python', 'React', 'Tailwind CSS', 'Figma', 'Node.js', 'PostgreSQL', 'Git'].map(skill => (
            <span key={skill} className="neo-pressed-small px-6 py-3 rounded-xl font-bold text-slate-300 hover:text-neo-accent transition-colors select-none cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </motion.section>

    </div>
  );
}

