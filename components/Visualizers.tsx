// components/Visualizers.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Smartphone, MonitorPlay, Cpu, Server, LayoutDashboard, Activity, Database } from 'lucide-react';

export function AudiologyPipeline() {
    const [activeStep, setActiveStep] = useState(0);
    const [log, setLog] = useState('System ready. Awaiting test initiation...');
    const [isRunning, setIsRunning] = useState(false);

    const runTest = () => {
        if (isRunning) return;
        setIsRunning(true);

        // Step 1: React UI -> ESP32
        setActiveStep(1);
        setLog('React UI: Sending Web BLE command { tone: 1000Hz, db: 40dB }');

        // Step 2: ESP32 -> React UI
        setTimeout(() => {
            setActiveStep(2);
            setLog('ESP32: Tone played. Patient pressed response button. Returning to UI...');
        }, 1500);

        // Step 3: React UI -> Node.js
        setTimeout(() => {
            setActiveStep(3);
            setLog('React UI: Response received. Forwarding payload to Node.js backend...');
        }, 3000);

        // Step 4: Node.js -> MongoDB
        setTimeout(() => {
            setActiveStep(4);
            setLog('Node.js: Processing audiogram data. Persisting to MongoDB...');
        }, 4500);

        // Step 5: Node.js -> React UI
        setTimeout(() => {
            setActiveStep(5);
            setLog('Node.js: Hughson-Westlake algorithm calculated next step: 1000Hz @ 30dB.');
        }, 6000);

        // Step 6: React UI -> ESP32 (Looping behavior)
        setTimeout(() => {
            setActiveStep(6);
            setLog('React UI: Next command received. Sending to ESP32...');

            // Reset
            setTimeout(() => {
                setIsRunning(false);
                setActiveStep(0);
                setLog('System ready. Awaiting test initiation...');
            }, 2000);
        }, 7500);
    };

    return (
        <div className="bg-[#0a0a0a] border border-neutral-900 rounded-xl p-6 font-mono text-sm text-neutral-400 w-full overflow-hidden">
            <div className="flex justify-between items-center mb-8">
                <p className="text-neutral-500 text-xs uppercase tracking-wider">End-to-End Audiometry Flow</p>
                <button
                    onClick={runTest} disabled={isRunning}
                    className="px-3 py-1.5 bg-white text-black font-bold text-[10px] uppercase tracking-wider rounded hover:bg-neutral-200 transition-colors disabled:opacity-50"
                >
                    Run Hughson-Westlake Cycle
                </button>
            </div>

            <div className="flex flex-col xl:flex-row justify-between items-center gap-2 relative z-10 px-2">

                {/* ESP32 Hardware Node */}
                <div className={`flex flex-col items-center p-3 rounded-lg w-full xl:w-28 transition-all duration-300 ${activeStep === 1 || activeStep === 2 || activeStep === 6 ? 'bg-purple-900/20 border-purple-500/50' : 'bg-black border-neutral-800'} border`}>
                    <Cpu className={`mb-2 transition-colors duration-300 ${activeStep === 1 || activeStep === 2 || activeStep === 6 ? 'text-purple-400' : 'text-neutral-600'}`} />
                    <span className={`font-medium text-xs transition-colors duration-300 ${activeStep === 1 || activeStep === 2 || activeStep === 6 ? 'text-purple-300' : 'text-neutral-400'}`}>ESP32/nRF</span>
                </div>

                {/* Line 1 (ESP32 <-> React UI) */}
                <div className="hidden xl:flex flex-1 h-px bg-neutral-800 relative mx-2">
                    <motion.div
                        initial={{ left: '100%', opacity: 0 }}
                        animate={{
                            left: activeStep === 1 || activeStep === 6 ? '0%' : activeStep === 2 ? '100%' : '100%',
                            opacity: [1, 2, 6].includes(activeStep) ? 1 : 0
                        }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_2px_rgba(96,165,250,0.5)]"
                    />
                </div>

                {/* React UI Node */}
                <div className={`flex flex-col items-center p-3 rounded-lg w-full xl:w-28 transition-all duration-300 ${[1, 2, 3, 5, 6].includes(activeStep) ? 'bg-blue-900/20 border-blue-500/50' : 'bg-black border-neutral-800'} border`}>
                    <LayoutDashboard className={`mb-2 transition-colors duration-300 ${[1, 2, 3, 5, 6].includes(activeStep) ? 'text-blue-400' : 'text-neutral-600'}`} />
                    <span className={`font-medium text-xs transition-colors duration-300 ${[1, 2, 3, 5, 6].includes(activeStep) ? 'text-blue-300' : 'text-neutral-400'}`}>React UI</span>
                </div>

                {/* Line 2 (React UI <-> Node.js) */}
                <div className="hidden xl:flex flex-1 h-px bg-neutral-800 relative mx-2">
                    <motion.div
                        initial={{ left: '0%', opacity: 0 }}
                        animate={{
                            left: activeStep === 3 ? '100%' : activeStep === 5 ? '0%' : '0%',
                            opacity: [3, 5].includes(activeStep) ? 1 : 0
                        }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_2px_rgba(74,222,128,0.5)]"
                    />
                </div>

                {/* Node.js Server Node */}
                <div className={`flex flex-col items-center p-3 rounded-lg w-full xl:w-28 transition-all duration-300 ${[3, 4, 5].includes(activeStep) ? 'bg-green-900/20 border-green-500/50' : 'bg-black border-neutral-800'} border`}>
                    <Server className={`mb-2 transition-colors duration-300 ${[3, 4, 5].includes(activeStep) ? 'text-green-400' : 'text-neutral-600'}`} />
                    <span className={`font-medium text-xs transition-colors duration-300 ${[3, 4, 5].includes(activeStep) ? 'text-green-300' : 'text-neutral-400'}`}>Node.js</span>
                </div>

                {/* Line 3 (Node.js <-> MongoDB) */}
                <div className="hidden xl:flex flex-1 h-px bg-neutral-800 relative mx-2">
                    <motion.div
                        initial={{ left: '0%', opacity: 0 }}
                        animate={{
                            left: activeStep === 4 ? '100%' : '0%',
                            opacity: activeStep === 4 ? 1 : 0
                        }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_2px_rgba(16,185,129,0.5)]"
                    />
                </div>

                {/* MongoDB Node */}
                <div className={`flex flex-col items-center p-3 rounded-lg w-full xl:w-28 transition-all duration-300 ${activeStep === 4 ? 'bg-emerald-900/20 border-emerald-500/50' : 'bg-black border-neutral-800'} border`}>
                    <Database className={`mb-2 transition-colors duration-300 ${activeStep === 4 ? 'text-emerald-400' : 'text-neutral-600'}`} />
                    <span className={`font-medium text-xs transition-colors duration-300 ${activeStep === 4 ? 'text-emerald-300' : 'text-neutral-400'}`}>MongoDB</span>
                </div>

            </div>

            <div className="mt-8 bg-black p-4 rounded-lg border border-neutral-800 flex items-center gap-3">
                <Activity size={16} className={isRunning ? "text-blue-400 animate-pulse shrink-0" : "text-neutral-600 shrink-0"} />
                <span className={isRunning ? "text-white text-xs leading-relaxed" : "text-neutral-500 text-xs leading-relaxed"}>
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