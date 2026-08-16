// app/page.tsx
import Timeline from '../components/Timeline';
import { Mail, FileText } from 'lucide-react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

export default function Home() {
  return (
    <main className="min-h-screen bg-black font-sans selection:bg-cyan-900 selection:text-white relative">

      {/* GitHub-Style Soft Radial Glow */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 10% 0%, rgba(6, 182, 212, 0.12) 0%, transparent 50%)' }}
      />

      <div className="max-w-2xl mx-auto px-6 py-24 md:py-32 relative z-10">

        <header className="mb-20">
          {/* Professional Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/40 border border-neutral-800/80 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            <span className="text-xs text-neutral-400 font-mono tracking-wide">Backend Developer @ WeHear</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-medium text-white mb-5 tracking-tight">
            Preyash Thakkar
          </h1>

          {/* Enriched Description */}
          <p className="text-base md:text-lg text-neutral-400 leading-relaxed mb-8">
            Software Developer focused on backend engineering, scalable systems, and hardware-to-software communication. Specializing in the MERN stack, I architect complex data pipelines—from real-time WebSocket translation engines to Web Bluetooth (BLE) DSP workflows for medical hardware.
          </p>

          {/* Icon Row with Animated Tooltips */}
          <div className="flex items-center gap-6 text-neutral-500">

            {/* GitHub */}
            <a href="https://github.com/Preyash-Thakkar/" target="_blank" rel="noopener noreferrer" className="group relative hover:text-cyan-400 transition-colors">
              <FiGithub size={20} />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 text-[10px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap">
                GitHub
              </span>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/preyash-thakkar-08247a249/" target="_blank" rel="noopener noreferrer" className="group relative hover:text-cyan-400 transition-colors">
              <FiLinkedin size={20} />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 text-[10px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap">
                LinkedIn
              </span>
            </a>

            {/* Email */}
            <a href="mailto:preyashthakkar18@gmail.com" className="group relative hover:text-cyan-400 transition-colors">
              <Mail size={20} strokeWidth={1.5} />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 text-[10px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap">
                Email
              </span>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/preyash_83/" target="_blank" rel="noopener noreferrer" className="group relative hover:text-cyan-400 transition-colors">
              <FiInstagram size={20} />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 text-[10px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap">
                Instagram
              </span>
            </a>

            {/* Divider */}
            <div className="w-px h-5 bg-neutral-800 mx-1" />

            {/* Resume File */}
            <a href="/documents/Resume.pdf" target="_blank" rel="noopener noreferrer" className="group relative text-neutral-400 hover:text-cyan-400 transition-colors">
              <FileText size={20} strokeWidth={1.5} />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 text-[10px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap shadow-lg shadow-cyan-900/20">
                Resume
              </span>
            </a>

          </div>
        </header>

        <Timeline />

      </div>
    </main>
  );
}