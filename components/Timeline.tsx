// components/Timeline.tsx
'use client';

import { motion } from 'framer-motion';
import { journeyData } from '../data/journey';
import { ExternalLink } from 'lucide-react';
import { AudiologyPipeline, SnapStreamDemo, WeConverseDemo } from './Visualizers';

export default function Timeline() {
    return (
        <div className="relative">
            <div className="absolute left-0 top-2 bottom-0 w-px bg-neutral-800" />

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
                        {/* Timeline Dot */}
                        <div className="absolute -left-[5px] top-6 w-3 h-3 bg-neutral-700 rounded-full ring-4 ring-black transition-colors duration-300 group-hover:bg-cyan-400" />

                        {/* Bento Card Wrapper */}
                        <div className="p-6 rounded-2xl bg-neutral-900/20 border border-neutral-800/50 hover:border-cyan-900/50 transition-colors duration-500 relative z-10 backdrop-blur-sm">

                            <div className="flex flex-col gap-1 mb-6">
                                <span className="text-xs font-mono text-cyan-600 mb-1">{item.period}</span>
                                <h2 className="text-xl font-medium text-white tracking-tight">{item.role}</h2>
                                <h3 className="text-sm text-neutral-400">{item.entity} • {item.location}</h3>
                            </div>

                            <div className="space-y-4 mb-8">
                                {item.description.map((desc, i) => (
                                    <p key={i} className="text-neutral-400 leading-relaxed text-sm">
                                        {desc}
                                    </p>
                                ))}
                            </div>

                            {/* --- INJECT INTERACTIVE VISUALIZERS HERE --- */}
                            {item.id === 'wehear-present' && (
                                <div className="mb-8">
                                    <AudiologyPipeline />
                                </div>
                            )}

                            {item.id === 'marwiz-ft' && (
                                <div className="mb-8">
                                    <WeConverseDemo />
                                </div>
                            )}

                            {item.id === 'pdeu-2024' && (
                                <div className="mb-8">
                                    <SnapStreamDemo />
                                </div>
                            )}
                            {/* ------------------------------------------- */}

                            {/* Tech Stack & Multiple Credentials */}
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pt-6 border-t border-neutral-800/50">

                                <div className="flex flex-wrap gap-2">
                                    {item.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 text-[10px] font-mono bg-black border border-neutral-800 text-neutral-400 rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {item.credentials && item.credentials.length > 0 && (
                                    <div className="flex flex-col gap-2 md:items-end shrink-0">
                                        {item.credentials.map((cred, idx) => (
                                            <a
                                                key={idx}
                                                href={cred.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-cyan-400 transition-colors"
                                            >
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
    );
}