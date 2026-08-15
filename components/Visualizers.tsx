// components/Visualizers.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Smartphone, MonitorPlay, Cpu, Server, LayoutDashboard, Activity } from 'lucide-react';

export function AudiologyPipeline() {
    const [activeStep, setActiveStep] = useState(0); // 0: Idle, 1: React, 2: Node, 3: HW, 4: Node Return, 5: UI Update
    const [log, setLog] = useState('System ready. Awaiting command...');
    const [isRunning, setIsRunning] = useState(false);

    const runTest = (type: 'tone' | 'fit') => {
        if (isRunning) return;
        setIsRunning(true);

        // Step 1: UI sends command
        setActiveStep(1);
        setLog(type === 'tone'
            ? 'React UI: Sent { freq: 1000Hz, db: 40dB, duration: 2s }'
            : 'React UI: Requesting FIG 6 Auto-fit calculation...'
        );

        // Step 2: Node processes and forwards via BLE
        setTimeout(() => {
            setActiveStep(2);
            setLog(type === 'tone'
                ? 'Node.js: Applying Hughson-Westlake logic. Writing to BLE...'
                : 'Node.js: Processing DSL v5.0/FIG 6 EQ values. Writing to BLE...'
            );
        }, 1200);

        // Step 3: Hardware executes
        setTimeout(() => {
            setActiveStep(3);
            setLog(type === 'tone'
                ? 'ESP32/nRF: Playing 1000Hz tone. Awaiting patient response...'
                : 'ESP32/nRF: Applying EQ parameters to hearing aid chipset.'
            );
        }, 2800);

        // Step 4: Hardware sends back data to Node
        setTimeout(() => {
            setActiveStep(4);
            setLog(type === 'tone'
                ? 'Node.js: Received patient response. Saving to MongoDB.'
                : 'Node.js: Verified EQ write success. Logging transaction.'
            );
        }, 4500);

        // Step 5: UI reflects changes
        setTimeout(() => {
            setActiveStep(5);
            setLog(type === 'tone'
                ? 'React UI: Audiogram graph updated successfully.'
                : 'React UI: Fitting saved. Device ready.'
            );

            // Reset after completion
            setTimeout(() => {
                setIsRunning(false);
                setActiveStep(0);
                setLog('System ready. Awaiting command...');
            }, 2000);
        }, 6000);
    };

    return (
        <div className="bg-[#0a0a0a] border border-neutral-900 rounded-xl p-6 font-mono text-sm text-neutral-400 w-full overflow-hidden">
            <div className="flex justify-between items-center mb-8">
                <p className="text-neutral-500 text-xs uppercase tracking-wider">Audiometer & Fitting Pipeline</p>
                <div className="flex gap-2">
                    <button
                        onClick={() => runTest('tone')} disabled={isRunning}
                        className="px-3 py-1 bg-neutral-800 text-white text-[10px] uppercase tracking-wider rounded hover:bg-neutral-700 transition-colors disabled:opacity-50"
                    >
                        Run Tone Test
                    </button>
                    <button
                        onClick={() => runTest('fit')} disabled={isRunning}
                        className="px-3 py-1 bg-neutral-800 text-white text-[10px] uppercase tracking-wider rounded hover:bg-neutral-700 transition-colors disabled:opacity-50"
                    >
                        Apply Auto-Fit
                    </button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-2 relative z-10 px-4">

                {/* React UI Node */}
                <div className={`flex flex-col items-center p-4 rounded-lg w-full md:w-32 transition-all duration-500 ${activeStep === 1 || activeStep === 5 ? 'bg-blue-900/20 border-blue-500/50' : 'bg-black border-neutral-800'} border`}>
                    <LayoutDashboard className={`mb-2 transition-colors duration-500 ${activeStep === 1 || activeStep === 5 ? 'text-blue-400' : 'text-neutral-600'}`} />
                    <span className={`font-medium transition-colors duration-500 ${activeStep === 1 || activeStep === 5 ? 'text-blue-300' : 'text-neutral-400'}`}>React UI</span>
                </div>

                {/* Line 1 (UI to Node) */}
                <div className="hidden md:flex flex-1 h-px bg-neutral-800 relative mx-2">
                    <motion.div
                        initial={{ left: '0%', opacity: 0 }}
                        animate={{
                            left: activeStep === 1 ? '100%' : activeStep === 4 ? '0%' : activeStep === 0 ? '0%' : '100%',
                            opacity: activeStep === 1 || activeStep === 4 ? 1 : 0
                        }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_2px_rgba(96,165,250,0.5)]"
                    />
                </div>

                {/* Node.js Server Node */}
                <div className={`flex flex-col items-center p-4 rounded-lg w-full md:w-32 transition-all duration-500 ${activeStep === 2 || activeStep === 4 ? 'bg-green-900/20 border-green-500/50' : 'bg-black border-neutral-800'} border`}>
                    <Server className={`mb-2 transition-colors duration-500 ${activeStep === 2 || activeStep === 4 ? 'text-green-400' : 'text-neutral-600'}`} />
                    <span className={`font-medium transition-colors duration-500 ${activeStep === 2 || activeStep === 4 ? 'text-green-300' : 'text-neutral-400'}`}>Node.js</span>
                </div>

                {/* Line 2 (Node to Hardware) */}
                <div className="hidden md:flex flex-1 h-px bg-neutral-800 relative mx-2">
                    <motion.div
                        initial={{ left: '0%', opacity: 0 }}
                        animate={{
                            left: activeStep === 2 ? '100%' : activeStep === 3 ? '0%' : activeStep === 0 ? '0%' : '100%',
                            opacity: activeStep === 2 || activeStep === 3 ? 1 : 0
                        }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_2px_rgba(192,132,252,0.5)]"
                    />
                </div>

                {/* ESP32 Hardware Node */}
                <div className={`flex flex-col items-center p-4 rounded-lg w-full md:w-32 transition-all duration-500 ${activeStep === 3 ? 'bg-purple-900/20 border-purple-500/50' : 'bg-black border-neutral-800'} border`}>
                    <Cpu className={`mb-2 transition-colors duration-500 ${activeStep === 3 ? 'text-purple-400' : 'text-neutral-600'}`} />
                    <span className={`font-medium transition-colors duration-500 ${activeStep === 3 ? 'text-purple-300' : 'text-neutral-400'}`}>ESP32/nRF</span>
                </div>

            </div>

            <div className="mt-8 bg-black p-4 rounded-lg border border-neutral-800 flex items-center gap-3">
                <Activity size={16} className={isRunning ? "text-green-400 animate-pulse" : "text-neutral-600"} />
                <span className={isRunning ? "text-white" : "text-neutral-500"}>
                    {log}
                </span>
            </div>
        </div>
    );
}

// ... [Leave SnapStreamDemo here exactly as it was] ...
export function SnapStreamDemo() {
    const [isSending, setIsSending] = useState(false);
    const [log, setLog] = useState('Awaiting client input...');

    const triggerWebSocket = () => {
        if (isSending) return;
        setIsSending(true);
        setLog('Broadcasting via WebSocket...');
        setTimeout(() => setLog('Status: 200 OK - Latency: 12ms'), 700);
        setTimeout(() => setIsSending(false), 2200);
    };

    return (
        <div className="bg-[#0a0a0a] border border-neutral-900 rounded-xl p-6 font-mono text-sm text-neutral-400 w-full">
            <p className="mb-6 text-neutral-500 text-xs uppercase tracking-wider">WebSocket Sync Simulation</p>

            <div className="flex justify-between items-center mb-8 relative px-4">
                {/* Mobile Device */}
                <div className="flex flex-col items-center gap-2 z-10 bg-[#0a0a0a] px-2">
                    <Smartphone size={28} className={isSending ? "text-white" : "text-neutral-600"} />
                    <span className="text-xs">Client</span>
                </div>

                {/* WebSocket Line & Animated Packet */}
                <div className="absolute left-10 right-10 top-3 border-t border-dashed border-neutral-800">
                    {isSending && (
                        <motion.div
                            initial={{ left: '0%' }}
                            animate={{ left: '100%' }}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                            className="absolute -top-1 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"
                        />
                    )}
                </div>

                {/* Display Screen */}
                <div className="flex flex-col items-center gap-2 z-10 bg-[#0a0a0a] px-2">
                    <MonitorPlay size={28} className={isSending ? "text-white" : "text-neutral-600"} />
                    <span className="text-xs">Signage</span>
                </div>
            </div>

            <div className="flex justify-between items-center bg-black p-4 rounded-lg border border-neutral-800">
                <button
                    onClick={triggerWebSocket}
                    disabled={isSending}
                    className="px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider rounded hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Send Input
                </button>
                <span className={isSending ? "text-white" : "text-neutral-600"}>
                    {log}
                </span>
            </div>
        </div>
    );
}