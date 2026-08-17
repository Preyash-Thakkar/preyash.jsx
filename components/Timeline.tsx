// components/Timeline.tsx
'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { journeyData } from '../data/journey';
import { ExternalLink, ArrowRight, X, Network } from 'lucide-react';
import { AudiologyPipeline, DynamicAdDemo, SnapStreamDemo, WeConverseDemo } from './Visualizers';

// Import Deep Dive components
import WeHear from './deepdives/WeHear';
import WeConverse from './deepdives/WeConverse';
import SnapStream from './deepdives/SnapStream';
import PDEU from './deepdives/PDEU';
import MarwizIntern from './deepdives/MarwizIntern';

export default function Timeline() {
    const [activeProject, setActiveProject] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    if (typeof window !== 'undefined') {
        document.body.style.overflow = activeProject ? 'hidden' : 'auto';
    }

    // Which nodes should have a "Deep Dive" button?
    const deepDiveNodes = ['wehear-present', 'marwiz-ft', 'marwiz-intern-long', 'marwiz-summer-23', 'pdeu-2024'];

    return (
        <>
            <div className="relative" ref={containerRef}>

                <div className="absolute left-0 top-2 bottom-0 w-px bg-neutral-800" />

                <motion.div
                    className="absolute left-0 top-2 bottom-0 w-px bg-cyan-500 origin-top shadow-[0_0_12px_2px_rgba(6,182,212,0.6)]"
                    style={{ scaleY }}
                />

                <div className="space-y-16">
                    {journeyData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12 group"
                        >
                            <motion.div
                                initial={{ backgroundColor: '#171717', borderColor: '#404040', boxShadow: 'none' }}
                                whileInView={{ backgroundColor: '#06b6d4', borderColor: '#06b6d4', boxShadow: '0 0 12px 2px rgba(6,182,212,0.6)' }}
                                viewport={{ once: false, margin: "-20% 0px -40% 0px" }}
                                transition={{ duration: 0.2 }}
                                className="absolute -left-[5px] top-6 w-3 h-3 rounded-full ring-4 ring-black border z-10"
                            />

                            <div className="p-6 rounded-2xl bg-neutral-900/20 border border-neutral-800/50 hover:border-cyan-900/50 transition-colors duration-500 relative z-10 backdrop-blur-sm">

                                <div className="flex flex-col gap-1 mb-6">
                                    <span className="text-xs font-mono text-cyan-600 mb-1">{item.period}</span>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h2 className="text-xl font-medium text-white tracking-tight">{item.role}</h2>
                                            <h3 className="text-sm text-neutral-400">{item.entity} • {item.location}</h3>
                                        </div>

                                        {deepDiveNodes.includes(item.id) && (
                                            <button
                                                onClick={() => setActiveProject(item.id)}
                                                className="hidden md:flex items-center gap-2 text-xs font-mono text-cyan-500 hover:text-cyan-300 transition-colors group/btn"
                                            >
                                                Deep Dive <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {item.description.map((desc, i) => (
                                        <p key={i} className="text-neutral-400 leading-relaxed text-sm">
                                            {desc}
                                        </p>
                                    ))}
                                </div>

                                {/* Inject Visualizers into correct spots */}
                                {item.id === 'wehear-present' && <div className="mb-8"><AudiologyPipeline /></div>}
                                {item.id === 'marwiz-ft' && <div className="mb-8"><WeConverseDemo /></div>}
                                {item.id === 'marwiz-intern-long' && <div className="mb-8"><DynamicAdDemo /></div>}
                                {item.id === 'marwiz-summer-23' && <div className="mb-8"><SnapStreamDemo /></div>}

                                {deepDiveNodes.includes(item.id) && (
                                    <button
                                        onClick={() => setActiveProject(item.id)}
                                        className="md:hidden w-full mb-6 py-2 flex items-center justify-center gap-2 text-xs font-mono text-cyan-500 border border-cyan-900/30 rounded-lg hover:bg-cyan-900/10 transition-colors"
                                    >
                                        Deep Dive Architecture <ArrowRight size={14} />
                                    </button>
                                )}

                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pt-6 border-t border-neutral-800/50">
                                    <div className="flex flex-wrap gap-2">
                                        {item.techStack.map((tech, i) => (
                                            <span key={i} className="px-2.5 py-1 text-[10px] font-mono bg-black border border-neutral-800 text-neutral-400 rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    {item.credentials && item.credentials.length > 0 && (
                                        <div className="flex flex-col gap-2 md:items-end shrink-0">
                                            {item.credentials.map((cred, idx) => (
                                                <a key={idx} href={cred.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-cyan-400 transition-colors">
                                                    <ExternalLink size={14} />
                                                    <span>{cred.label}</span>
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* SIDE DRAWER */}
            <AnimatePresence>
                {activeProject && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveProject(null)}
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-full md:w-[600px] bg-[#050505] border-l border-neutral-800 z-50 overflow-y-auto shadow-2xl"
                        >
                            <div className="p-6 md:p-10">
                                <div className="flex justify-between items-center mb-10">
                                    <h2 className="text-xl text-white font-medium flex items-center gap-2">
                                        <Network size={20} className="text-cyan-500" />
                                        Architecture Overview
                                    </h2>
                                    <button onClick={() => setActiveProject(null)} className="text-neutral-500 hover:text-white transition-colors p-2 bg-neutral-900 rounded-full hover:bg-neutral-800">
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Dynamically Load Deep Dive Content */}
                                {activeProject === 'wehear-present' && <WeHear />}
                                {activeProject === 'marwiz-ft' && <WeConverse />}
                                {activeProject === 'marwiz-intern-long' && <MarwizIntern />}
                                {activeProject === 'marwiz-summer-23' && <SnapStream />}
                                {activeProject === 'pdeu-2024' && <PDEU />}

                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}