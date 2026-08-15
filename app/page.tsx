// app/page.tsx
import Timeline from '../components/Timeline';
import { Mail } from 'lucide-react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

export default function Home() {
  return (
    <main className="min-h-screen bg-black font-sans selection:bg-white selection:text-black">
      <div className="max-w-2xl mx-auto px-6 py-24 md:py-32">

        {/* Intro Header */}
        <header className="mb-20">
          <h1 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
            Preyash Thakkar
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed mb-6">
            Software Developer focused on backend engineering, scalable systems, and hardware-to-software communication.
          </p>

          {/* Social Links Row */}
          <div className="flex items-center gap-5 text-neutral-500">
            <a href="https://github.com/Preyash-Thakkar/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/preyash-thakkar-08247a249/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:preyashthakkar18@gmail.com" className="hover:text-white transition-colors">
              <Mail size={20} strokeWidth={1.5} />
            </a>
            <a href="https://www.instagram.com/preyash_83/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FiInstagram size={20} />
            </a>
          </div>
        </header>

        {/* Timeline Injection */}
        <Timeline />

      </div>
    </main>
  );
}