// components/Timeline.tsx
'use client';

import { motion } from 'framer-motion';
import { journeyData } from '../data/journey';
import { ExternalLink } from 'lucide-react';
import { AudiologyPipeline, SnapStreamDemo } from './Visualizers';
export default function Timeline() {
    return (
        <div className="relative">
            <div className="absolute left-0 top-2 bottom-0 w-px bg-neutral-800" />

            <div className="space-y-24">
                {journeyData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        <div className="absolute -left-[5px] top-2 w-3 h-3 bg-neutral-700 rounded-full ring-4 ring-black transition-colors duration-300 hover:bg-white" />

                        <div className="flex flex-col gap-1 mb-4">
                            <span className="text-sm font-mono text-neutral-500">{item.period}</span>
                            <h2 className="text-xl font-medium text-white tracking-tight">{item.role}</h2>
                            <h3 className="text-neutral-400">{item.entity} • {item.location}</h3>
                        </div>

                        <div className="space-y-3 mb-6">
                            {item.description.map((desc, i) => (
                                <p key={i} className="text-neutral-400 leading-relaxed text-sm md:text-base">
                                    {desc}
                                </p>
                            ))}
                        </div>
                        {/* --- INJECT INTERACTIVE VISUALIZERS HERE --- */}
                        {item.id === 'wehear-present' && (
                            <div className="mb-6">
                                <AudiologyPipeline />
                            </div>
                        )}

                        {item.id === 'pdeu-2024' && (
                            <div className="mb-6">
                                <SnapStreamDemo />
                            </div>
                        )}
                        {/* Tech Stack & Multiple Credentials */}
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mt-6 pt-6 border-t border-neutral-900/50">

                            {/* Left Side: Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {item.techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-2.5 py-1 text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Right Side: Credentials List */}
                            {item.credentials && item.credentials.length > 0 && (
                                <div className="flex flex-col gap-2 md:items-end shrink-0">
                                    {item.credentials.map((cred, idx) => (
                                        <a
                                            key={idx}
                                            href={cred.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white transition-colors"
                                        >
                                            <ExternalLink size={14} />
                                            <span>{cred.label}</span>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                    </motion.div>
                ))}
            </div>
        </div>
    );
}