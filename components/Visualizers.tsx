// components/Visualizers.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Smartphone, MonitorPlay, Cpu, Server, LayoutDashboard, Database, Activity, Mic, Globe, MessageSquare, QrCode, Camera, BarChart3, Users, Settings2, Headphones, CheckCircle, CheckCircle2, Ear, Bluetooth, Stethoscope, ShieldCheck, CloudFog, Volume2, Wifi, SlidersHorizontal, CircleDashed, CircleDot, Headset } from 'lucide-react';

// export function AudiologyPipeline() {
//     const [activeStep, setActiveStep] = useState(0);
//     const [log, setLog] = useState('Audiometer Module [WIP]: Awaiting initialization...');
//     const [isRunning, setIsRunning] = useState(false);
//     const [patientResponse, setPatientResponse] = useState<boolean | null>(null);

//     const runTest = () => {
//         if (isRunning) return;
//         setIsRunning(true);
//         setPatientResponse(null);

//         // Step 1: React -> ESP32
//         setActiveStep(1);
//         setLog('React UI: Transmitting BLE payload { freq: 1000Hz, db: 40dB } to ESP32');

//         // Step 2: ESP32 -> Patient
//         setTimeout(() => {
//             setActiveStep(2);
//             setLog('ESP32: Driving headphones. Pure-tone stimulated in patient ear.');
//         }, 2000);

//         // Step 3: Patient Response (Yes)
//         setTimeout(() => {
//             setActiveStep(3);
//             setPatientResponse(true);
//             setLog('Patient: Clicker pressed (YES). ESP32 capturing physical interrupt.');
//         }, 4000);

//         // Step 4: ESP32 -> React -> Node
//         setTimeout(() => {
//             setActiveStep(4);
//             setPatientResponse(null);
//             setLog('React UI: Acknowledged response. Forwarding to Node.js for Hughson-Westlake calc.');
//         }, 6000);

//         // Step 5: Node -> MongoDB
//         setTimeout(() => {
//             setActiveStep(5);
//             setLog('Node.js: Calculated next threshold (1000Hz @ 30dB). Persisting log to MongoDB.');
//         }, 8000);

//         // Reset
//         setTimeout(() => {
//             setIsRunning(false);
//             setActiveStep(0);
//             setLog('Audiometer Module [WIP]: Ready for next threshold cycle.');
//         }, 10500);
//     };

//     return (
//         <div className="bg-[#0a0a0a] border border-neutral-900 rounded-xl p-6 font-mono text-sm text-neutral-400 w-full overflow-hidden shadow-lg shadow-blue-900/5">
//             <div className="flex justify-between items-center mb-8">
//                 <p className="text-neutral-500 text-xs uppercase tracking-wider flex items-center gap-2">
//                     <Settings2 size={14} /> Audiometer BLE Pipeline (In Progress)
//                 </p>
//                 <button
//                     onClick={runTest} disabled={isRunning}
//                     className="px-4 py-2 bg-neutral-800 text-white font-bold text-[10px] uppercase tracking-wider rounded hover:bg-neutral-700 transition-colors disabled:opacity-50"
//                 >
//                     Run Test Cycle
//                 </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">

//                 {/* Node 1: React UI */}
//                 <div className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all duration-300 ${[1, 4].includes(activeStep) ? 'bg-blue-900/20 border-blue-500/50' : 'bg-black border-neutral-800'} shadow-lg`}>
//                     <LayoutDashboard className={`mb-2 transition-colors duration-300 ${[1, 4].includes(activeStep) ? 'text-blue-400' : 'text-neutral-600'}`} />
//                     <span className={`font-medium text-[10px] uppercase tracking-widest ${[1, 4].includes(activeStep) ? 'text-blue-300' : 'text-neutral-500'}`}>React UI</span>
//                 </div>

//                 {/* Node 2: ESP32 */}
//                 <div className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all duration-300 ${[1, 2, 3].includes(activeStep) ? 'bg-purple-900/20 border-purple-500/50' : 'bg-black border-neutral-800'}`}>
//                     <Cpu className={`mb-2 transition-colors duration-300 ${[1, 2, 3].includes(activeStep) ? 'text-purple-400' : 'text-neutral-600'}`} />
//                     <span className={`font-medium text-[10px] uppercase tracking-widest ${[1, 2, 3].includes(activeStep) ? 'text-purple-300' : 'text-neutral-500'}`}>ESP32 / BLE</span>
//                 </div>

//                 {/* Node 3: Patient */}
//                 <div className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all duration-300 ${[2, 3].includes(activeStep) ? 'bg-cyan-900/20 border-cyan-500/50' : 'bg-black border-neutral-800'}`}>
//                     <div className="relative mb-2">
//                         <Headphones className={`transition-colors duration-300 ${[2, 3].includes(activeStep) ? 'text-cyan-400' : 'text-neutral-600'}`} />
//                         {patientResponse === true && (
//                             <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-2 -right-3 bg-black rounded-full">
//                                 <CheckCircle2 size={14} className="text-green-500" />
//                             </motion.div>
//                         )}
//                     </div>
//                     <span className={`font-medium text-[10px] uppercase tracking-widest ${[2, 3].includes(activeStep) ? 'text-cyan-300' : 'text-neutral-500'}`}>Patient</span>
//                 </div>

//                 {/* Node 4: Node.js */}
//                 <div className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all duration-300 ${[4, 5].includes(activeStep) ? 'bg-green-900/20 border-green-500/50' : 'bg-black border-neutral-800'}`}>
//                     <Server className={`mb-2 transition-colors duration-300 ${[4, 5].includes(activeStep) ? 'text-green-400' : 'text-neutral-600'}`} />
//                     <span className={`font-medium text-[10px] uppercase tracking-widest ${[4, 5].includes(activeStep) ? 'text-green-300' : 'text-neutral-500'}`}>Node.js</span>
//                 </div>

//                 {/* Node 5: MongoDB */}
//                 <div className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all duration-300 ${activeStep === 5 ? 'bg-emerald-900/20 border-emerald-500/50' : 'bg-black border-neutral-800'}`}>
//                     <Database className={`mb-2 transition-colors duration-300 ${activeStep === 5 ? 'text-emerald-400' : 'text-neutral-600'}`} />
//                     <span className={`font-medium text-[10px] uppercase tracking-widest ${activeStep === 5 ? 'text-emerald-300' : 'text-neutral-500'}`}>MongoDB</span>
//                 </div>

//             </div>

//             <div className="mt-6 bg-black p-4 rounded-lg border border-neutral-800 flex items-center gap-3 min-h-[60px]">
//                 <Activity size={16} className={isRunning ? "text-cyan-400 animate-pulse shrink-0" : "text-neutral-600 shrink-0"} />
//                 <span className={isRunning ? "text-cyan-200 text-[11px] leading-relaxed" : "text-neutral-500 text-[11px] leading-relaxed"}>
//                     {log}
//                 </span>
//             </div>
//         </div>
//     );
// }

export function WeConfigProDemo() {
    const [step, setStep] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [log, setLog] = useState('WeConfigPro: Idle. Awaiting patient profile initialization.');

    const runFullLifecycle = () => {
        if (isRunning) return;
        setIsRunning(true);

        // Phase 1: Profile & Oscilla
        setStep(1);
        setLog('Phase 1: Oscilla test data imported. Rendering Right/Left Ear Air (AC) & Bone (BC) Conduction plots.');

        // Phase 2: Hardware Suggestions
        setTimeout(() => {
            setStep(2);
            setLog('Phase 2: Analyzing audiogram. System evaluating hardware... Suggesting: Device [RIC], Receiver [Size S], Dome [Open].');
        }, 3500);

        // Phase 3: Fine Tuning
        setTimeout(() => {
            setStep(3);
            setLog('Phase 3: Fine Tuning dashboard. Adjusting channel-wise EQ, wind noise, and output parameters.');
        }, 7500);

        // Phase 4: Direct Web BLE Flash
        setTimeout(() => {
            setStep(4);
            setLog('Phase 4: Direct Web BLE Sync. Flashing parameters directly from WeConfig Web to the Hearing Aid.');
        }, 11500);

        // Phase 5: Mobile Config Assist
        setTimeout(() => {
            setStep(5);
            setLog('Phase 5: Mobile Config Assist. Patient running self-check [Mic/Receiver OK]. Remote fitting fallback available.');
        }, 15000);

        // Reset
        setTimeout(() => {
            setIsRunning(false);
            setStep(0);
            setLog('Lifecycle complete. WeConfigPro: Idle.');
        }, 19000);
    };

    const frequencies = ['125', '250', '500', '1k', '2k', '4k', '8k'];
    const targetGains = [20, 35, 60, 75, 85, 45, 15];

    return (
        <div className="bg-[#0a0a0a] border border-neutral-900 rounded-xl p-6 font-mono text-sm text-neutral-400 w-full overflow-hidden shadow-lg shadow-cyan-900/5">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <p className="text-neutral-500 text-xs uppercase tracking-wider flex items-center gap-2">
                    <Settings2 size={14} className="text-cyan-500" /> WeConfigPro: Direct Fitting Architecture
                </p>
                <button
                    onClick={runFullLifecycle} disabled={isRunning}
                    className="px-3 py-1.5 bg-neutral-800 text-white font-bold text-[10px] uppercase tracking-wider rounded hover:bg-neutral-700 transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                    Execute Workflow
                </button>
            </div>

            {/* Main Dashboard Display Area */}
            <div className="bg-[#050505] border border-neutral-800 rounded-lg p-4 h-56 relative overflow-hidden mb-6 flex items-center justify-center shadow-inner">

                {step === 0 && (
                    <div className="text-neutral-600 text-xs uppercase tracking-widest flex flex-col items-center gap-2">
                        <LayoutDashboard size={24} />
                        <span>Select Patient to Begin</span>
                    </div>
                )}

                {/* Phase 1: Oscilla Audiogram */}
                {step === 1 && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full h-full flex flex-col">
                        <div className="flex justify-between items-center border-b border-neutral-800 pb-3 mb-3">
                            <span className="text-xs text-cyan-500 font-bold flex items-center gap-2"><Stethoscope size={14} /> Oscilla Import Active</span>
                            <span className="text-[10px] text-neutral-500 tracking-widest uppercase">PATIENT: #8492</span>
                        </div>

                        <div className="flex-1 flex gap-4 w-full">
                            {/* RIGHT EAR GRAPH (Red) */}
                            <div className="w-1/2 h-full border border-neutral-800 rounded relative p-3 bg-neutral-900/30 overflow-hidden flex flex-col">
                                <div className="flex justify-between items-center mb-1 relative z-20">
                                    <span className="text-[9px] text-red-500 font-bold uppercase tracking-widest flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> RIGHT</span>
                                    <div className="flex gap-2 text-[8px] uppercase tracking-widest text-neutral-500">
                                        <span className="flex items-center gap-1"><div className="w-3 h-0.5 bg-red-500" /> AC</span>
                                        <span className="flex items-center gap-1"><div className="w-3 h-0.5 bg-transparent border-t-2 border-dashed border-red-500" /> BC</span>
                                    </div>
                                </div>
                                <div className="absolute inset-0 top-8 grid grid-cols-4 grid-rows-3 gap-0 opacity-10 pointer-events-none">
                                    {[...Array(12)].map((_, i) => <div key={i} className="border-l border-t border-neutral-400" />)}
                                </div>
                                <svg className="w-full h-full absolute inset-0 top-4 z-10" viewBox="0 0 100 40" preserveAspectRatio="none">
                                    <motion.polyline initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} fill="none" stroke="#ef4444" strokeWidth="1.2" points="5,15 25,20 50,18 75,35 95,32" />
                                    <motion.polyline initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }} fill="none" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="3,3" points="5,5 25,12 50,15 75,25 95,22" />
                                </svg>
                            </div>

                            {/* LEFT EAR GRAPH (Blue) */}
                            <div className="w-1/2 h-full border border-neutral-800 rounded relative p-3 bg-neutral-900/30 overflow-hidden flex flex-col">
                                <div className="flex justify-between items-center mb-1 relative z-20">
                                    <span className="text-[9px] text-blue-500 font-bold uppercase tracking-widest flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> LEFT</span>
                                    <div className="flex gap-2 text-[8px] uppercase tracking-widest text-neutral-500">
                                        <span className="flex items-center gap-1"><div className="w-3 h-0.5 bg-blue-500" /> AC</span>
                                        <span className="flex items-center gap-1"><div className="w-3 h-0.5 bg-transparent border-t-2 border-dashed border-blue-500" /> BC</span>
                                    </div>
                                </div>
                                <div className="absolute inset-0 top-8 grid grid-cols-4 grid-rows-3 gap-0 opacity-10 pointer-events-none">
                                    {[...Array(12)].map((_, i) => <div key={i} className="border-l border-t border-neutral-400" />)}
                                </div>
                                <svg className="w-full h-full absolute inset-0 top-4 z-10" viewBox="0 0 100 40" preserveAspectRatio="none">
                                    <motion.polyline initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} fill="none" stroke="#3b82f6" strokeWidth="1.2" points="5,10 25,15 50,22 75,22 95,35" />
                                    <motion.polyline initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }} fill="none" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3,3" points="5,5 25,8 50,15 75,12 95,28" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Phase 2: Algorithmic Suggestions */}
                {step === 2 && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full h-full flex flex-col justify-center">
                        <h4 className="text-[10px] text-cyan-500 mb-6 text-center uppercase tracking-widest font-bold">Hardware Recommendation Engine</h4>

                        <div className="flex justify-center gap-6">

                            {/* Device Slider */}
                            <div className="bg-[#111] border border-neutral-800 rounded-lg w-28 h-24 flex flex-col overflow-hidden shadow-inner">
                                <div className="w-full text-center py-1.5 bg-neutral-900/80 border-b border-neutral-800/50 shrink-0 relative z-20">
                                    <span className="text-[8px] text-neutral-400 font-bold uppercase tracking-widest">Device</span>
                                </div>
                                <div className="w-full flex-1 flex items-center justify-center relative overflow-hidden">
                                    <motion.div
                                        initial={{ x: 70 }}
                                        animate={{ x: [70, 0, -70] }}
                                        transition={{ times: [0, 0.4, 1], duration: 2.2, ease: "easeInOut", delay: 0.5 }}
                                        className="flex items-center gap-8 absolute z-10 px-4"
                                    >
                                        <div className="flex flex-col items-center justify-center opacity-30 min-w-[24px]">
                                            <Headset size={18} className="text-neutral-500 mb-1" />
                                            <span className="text-[9px] font-bold text-neutral-500">BTE</span>
                                        </div>
                                        <div className="flex flex-col items-center justify-center opacity-30 min-w-[24px]">
                                            <CircleDot size={18} className="text-neutral-500 mb-1" />
                                            <span className="text-[9px] font-bold text-neutral-500">ITE</span>
                                        </div>
                                        <div className="flex flex-col items-center justify-center min-w-[24px]">
                                            <Ear size={24} className="text-cyan-400 mb-1 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                                            <span className="text-[11px] font-bold text-white tracking-widest">RIC</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Receiver Block */}
                            <div className="bg-[#111] border border-neutral-800 rounded-lg w-28 h-24 flex flex-col overflow-hidden shadow-inner">
                                <div className="w-full text-center py-1.5 bg-neutral-900/80 border-b border-neutral-800/50 shrink-0 relative z-20">
                                    <span className="text-[8px] text-neutral-400 font-bold uppercase tracking-widest">Receiver</span>
                                </div>
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="w-full flex-1 flex flex-col items-center justify-center relative">
                                    <Volume2 size={22} className="text-cyan-400 mb-1" />
                                    <span className="text-[11px] font-bold text-white tracking-widest">Size S</span>
                                </motion.div>
                            </div>

                            {/* Dome Block */}
                            <div className="bg-[#111] border border-neutral-800 rounded-lg w-28 h-24 flex flex-col overflow-hidden shadow-inner">
                                <div className="w-full text-center py-1.5 bg-neutral-900/80 border-b border-neutral-800/50 shrink-0 relative z-20">
                                    <span className="text-[8px] text-neutral-400 font-bold uppercase tracking-widest">Dome</span>
                                </div>
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.7 }} className="w-full flex-1 flex flex-col items-center justify-center relative">
                                    <CircleDashed size={22} className="text-cyan-400 mb-1" />
                                    <span className="text-[11px] font-bold text-white tracking-widest">Open</span>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Phase 3: Fine Tuning Dashboard */}
                {step === 3 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full flex flex-col">
                        <div className="flex justify-between items-center mb-2 pb-2 border-b border-neutral-800">
                            <span className="text-[10px] font-bold text-cyan-400 flex items-center gap-2">
                                <SlidersHorizontal size={12} className="text-cyan-400" /> Fine Tuning
                            </span>
                            <span className="text-[9px] text-neutral-500 uppercase tracking-widest">2CC Output (dB SPL)</span>
                        </div>

                        <div className="flex gap-4 h-full">
                            <div className="w-1/4 border-r border-neutral-800 flex flex-col gap-1 pr-2">
                                <div className="text-[9px] text-neutral-500 py-1.5 px-2">Basic Fitting</div>
                                <div className="text-[9px] text-cyan-300 bg-cyan-900/20 border border-cyan-900/50 py-1.5 px-2 rounded">Fine Tuning</div>
                                <div className="text-[9px] text-neutral-500 py-1.5 px-2">Config Assistant</div>
                            </div>

                            <div className="w-3/4 flex flex-col justify-end pb-1">
                                <div className="flex justify-between items-end h-24 mb-2 border-b border-neutral-800/50 pb-2">
                                    {frequencies.map((freq, idx) => (
                                        <div key={freq} className="flex flex-col items-center gap-1 h-full justify-end w-4">
                                            <div className="w-1 bg-neutral-800 h-full relative rounded-full flex items-end justify-center">
                                                <motion.div initial={{ height: '10%' }} animate={{ height: `${targetGains[idx]}%` }} transition={{ duration: 1, delay: idx * 0.1, type: 'spring' }} className="w-full bg-cyan-500 rounded-full relative">
                                                    <div className="w-2.5 h-2.5 bg-white rounded-full absolute -top-1 left-1/2 -translate-x-1/2 shadow-[0_0_5px_rgba(6,182,212,0.8)]" />
                                                </motion.div>
                                            </div>
                                            <span className="text-[8px] text-neutral-500 mt-1">{freq}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between text-[8px] text-neutral-500 uppercase tracking-widest">
                                    <span>Frequency Shaping</span>
                                    <span className="flex items-center gap-1">Wind Noise <span className="w-2 h-2 rounded-full bg-emerald-500" /></span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Phase 4: Direct Web BLE Flash (FIXED: Perfectly aligned center line) */}
                {step === 4 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full flex flex-col items-center justify-center">
                        <span className="text-[10px] text-cyan-400 font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
                            Writing Directly to Hardware
                        </span>

                        <div className="w-full flex items-start px-8">

                            {/* Left Node */}
                            <div className="flex flex-col items-center gap-3 w-28">
                                <div className="h-10 flex items-center justify-center">
                                    <LayoutDashboard size={32} className="text-cyan-500" />
                                </div>
                                <span className="text-[9px] text-neutral-400 uppercase text-center tracking-widest leading-relaxed">WeConfig Web<br />(Clinic)</span>
                            </div>

                            {/* Center Line Box (Locked to identical h-10 height as the icons) */}
                            <div className="flex-1 relative h-10 mx-2">
                                <div className="w-full h-px border-t border-dashed border-neutral-700 absolute top-1/2 -translate-y-1/2 left-0" />
                                <motion.div
                                    initial={{ left: '0%' }}
                                    animate={{ left: '100%' }}
                                    transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                                    className="absolute top-1/2 -translate-y-1/2 -ml-3 z-10"
                                >
                                    <Bluetooth size={18} className="text-blue-500 bg-[#050505] p-0.5 rounded-full drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                                </motion.div>
                            </div>

                            {/* Right Node */}
                            <div className="flex flex-col items-center gap-3 w-28">
                                <div className="h-10 flex items-center justify-center">
                                    <Ear size={32} className="text-blue-400" />
                                </div>
                                <span className="text-[9px] text-neutral-400 uppercase text-center tracking-widest leading-relaxed">Hearing Aid<br />Device</span>
                            </div>

                        </div>
                    </motion.div>
                )}

                {/* Phase 5: Mobile Config Assist */}
                {step === 5 && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full flex flex-col items-center justify-center h-full">
                        <Smartphone size={32} className="text-emerald-500 mb-3" />
                        <span className="text-xs text-white font-medium mb-3">Mobile App: Config Assist (Remote Use)</span>
                        <div className="flex gap-4 mb-4">
                            <span className="text-[10px] text-neutral-400 flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-500" /> Mic: OK</span>
                            <span className="text-[10px] text-neutral-400 flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-500" /> Receiver: OK</span>
                        </div>
                        <motion.div
                            initial={{ backgroundColor: '#171717' }} animate={{ backgroundColor: '#064e3b' }} transition={{ delay: 1 }}
                            className="px-4 py-1.5 border border-emerald-900 rounded text-[10px] text-emerald-400 uppercase tracking-widest"
                        >
                            Diagnostic Cleared / Remote Fit Fallback Active
                        </motion.div>
                    </motion.div>
                )}

            </div>

            {/* Unified Progress & Logging Footer */}
            <div className="bg-[#050505] p-3 rounded-lg border border-neutral-800 flex items-start gap-3 min-h-[60px]">
                <Activity size={14} className={isRunning ? "text-cyan-400 animate-pulse shrink-0 mt-0.5" : "text-neutral-600 shrink-0 mt-0.5"} />
                <div className="flex flex-col w-full">
                    {/* Progress Bar */}
                    <div className="w-full h-0.5 bg-neutral-900 mb-2 rounded overflow-hidden relative">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-cyan-500"
                            initial={{ width: '0%' }}
                            animate={{ width: `${(step / 5) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                    <span className={isRunning ? "text-cyan-200 text-xs leading-relaxed" : "text-neutral-500 text-xs leading-relaxed"}>
                        {log}
                    </span>
                </div>
            </div>
        </div>
    );
}

export function WeConverseDemo() {
    const [isTranslating, setIsTranslating] = useState(false);
    const [step, setStep] = useState(0);
    const [transcript, setTranscript] = useState('');
    const [translations, setTranslations] = useState({ ja: '', fr: '', gu: '' });

    const runTranslation = () => {
        if (isTranslating) return;
        setIsTranslating(true);
        setStep(1);
        setTranscript('');
        setTranslations({ ja: '', fr: '', gu: '' });

        setTimeout(() => {
            setStep(2);
            setTranscript("Welcome to the global technology summit.");
        }, 1500);

        setTimeout(() => {
            setStep(3);
        }, 3001);

        setTimeout(() => {
            setStep(4);
            setTranslations({
                ja: "グローバルテクノロジーサミットへようこそ。",
                fr: "Bienvenue au sommet mondial de la technologie.",
                gu: "વૈશ્વિક ટેક્નોલોજી સમિટમાં આપનું સ્વાગત છે."
            });
        }, 4500);

        setTimeout(() => {
            setIsTranslating(false);
            setStep(0);
        }, 8500);
    };

    return (
        <div className="bg-[#0a0a0a] border border-neutral-900 rounded-xl p-6 font-mono text-sm text-neutral-400 w-full relative overflow-hidden shadow-lg shadow-cyan-900/5">
            <div className="flex justify-between items-center mb-6">
                <p className="text-neutral-500 text-xs uppercase tracking-wider">WeConverse: Real-Time Translation</p>
                <button
                    onClick={runTranslation} disabled={isTranslating}
                    className="px-3 py-1.5 bg-neutral-800 text-white text-[10px] uppercase tracking-wider rounded hover:bg-neutral-700 transition-colors disabled:opacity-50"
                >
                    Simulate Live Speech
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 relative z-10">

                {/* Source Speaker (Left) */}
                <div className={`lg:col-span-4 p-4 rounded-lg border flex flex-col gap-3 transition-colors duration-300 ${step >= 1 ? 'bg-cyan-900/10 border-cyan-500/30' : 'bg-black border-neutral-800'}`}>
                    <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-500">Speaker (English)</span>
                        <Mic size={14} className={step === 1 ? 'text-cyan-400 animate-pulse' : 'text-neutral-600'} />
                    </div>
                    <div className="h-10 text-cyan-300 text-xs italic flex items-center">
                        {transcript || (step === 1 ? 'Listening...' : '')}
                    </div>
                </div>

                {/* Cloud Engine (Center) */}
                <div className={`lg:col-span-4 p-4 rounded-lg border flex flex-col justify-center items-center gap-2 transition-colors duration-300 ${step >= 2 ? 'bg-blue-900/10 border-blue-500/30' : 'bg-black border-neutral-800'}`}>
                    <Globe size={20} className={step === 3 ? 'text-blue-400 animate-spin' : 'text-neutral-600'} />
                    <span className="text-[10px] text-neutral-500 text-center leading-relaxed">STT Inference Layer<br />+ NMT Translation Engine</span>
                    {step === 3 && <span className="text-blue-400 text-[9px] uppercase tracking-widest mt-1">Routing 72 Channels</span>}
                </div>

                {/* 3 Receiver Nodes (Right) */}
                <div className="lg:col-span-4 flex flex-col gap-2">

                    {/* Japanese Node */}
                    <div className={`p-2 rounded border flex flex-col gap-1 transition-colors duration-300 ${step >= 4 ? 'bg-cyan-900/10 border-cyan-500/30' : 'bg-black border-neutral-800'}`}>
                        <div className="flex justify-between items-center text-[10px]">
                            <span className="text-neutral-500">Attendee (Japanese)</span>
                            <MessageSquare size={12} className={step === 4 ? 'text-cyan-400' : 'text-neutral-600'} />
                        </div>
                        <div className="h-4 text-cyan-300 text-[10px] flex items-center overflow-hidden whitespace-nowrap text-ellipsis">
                            {translations.ja}
                        </div>
                    </div>

                    {/* French Node */}
                    <div className={`p-2 rounded border flex flex-col gap-1 transition-colors duration-300 ${step >= 4 ? 'bg-cyan-900/10 border-cyan-500/30' : 'bg-black border-neutral-800'}`}>
                        <div className="flex justify-between items-center text-[10px]">
                            <span className="text-neutral-500">Attendee (French)</span>
                            <MessageSquare size={12} className={step === 4 ? 'text-cyan-400' : 'text-neutral-600'} />
                        </div>
                        <div className="h-4 text-cyan-300 text-[10px] flex items-center overflow-hidden whitespace-nowrap text-ellipsis">
                            {translations.fr}
                        </div>
                    </div>

                    {/* Gujarati Node */}
                    <div className={`p-2 rounded border flex flex-col gap-1 transition-colors duration-300 ${step >= 4 ? 'bg-cyan-900/10 border-cyan-500/30' : 'bg-black border-neutral-800'}`}>
                        <div className="flex justify-between items-center text-[10px]">
                            <span className="text-neutral-500">Attendee (Gujarati)</span>
                            <MessageSquare size={12} className={step === 4 ? 'text-cyan-400' : 'text-neutral-600'} />
                        </div>
                        <div className="h-4 text-cyan-300 text-[10px] flex items-center overflow-hidden whitespace-nowrap text-ellipsis">
                            {translations.gu}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export function SnapStreamDemo() {
    const [sessionState, setSessionState] = useState<'idle' | 'connected'>('idle');
    const [activeFilter, setActiveFilter] = useState<string>('none');
    const [isSending, setIsSending] = useState(false);
    const [isCapturing, setIsCapturing] = useState(false);
    const [log, setLog] = useState('Signage active. Awaiting QR scan for session init...');

    const simulateScan = () => {
        setLog('Mobile client scanned QR. Establishing WebSocket handshake...');
        setTimeout(() => {
            setSessionState('connected');
            setLog('Socket connected. Mobile device assigned as session remote.');
        }, 1200);
    };

    const applyAsset = (assetId: string, logName: string) => {
        if (isSending || isCapturing) return;
        setIsSending(true);
        setLog(`Remote emitting { event: 'asset_select', id: '${assetId}' }`);

        setTimeout(() => {
            setActiveFilter(assetId);
            setLog(`Signage acknowledged. Rendering ${logName} overlay.`);
            setIsSending(false);
        }, 800);
    };

    const triggerCapture = () => {
        if (isSending || isCapturing) return;
        setIsCapturing(true);
        setLog(`Remote emitting { event: 'trigger_capture' }.`);

        setTimeout(() => {
            setLog(`Signage captured image. Payload downloaded to mobile client.`);
            setIsCapturing(false);
        }, 1500);
    }

    return (
        <div className="bg-[#0a0a0a] border border-neutral-900 rounded-xl p-6 font-mono text-sm text-neutral-400 w-full relative overflow-hidden shadow-lg shadow-cyan-900/5">
            <div className="flex justify-between items-center mb-6">
                <p className="text-neutral-500 text-xs uppercase tracking-wider">Snap Stream: Remote Architecture</p>
                {sessionState === 'connected' && (
                    <button onClick={() => { setSessionState('idle'); setActiveFilter('none'); setLog('Session terminated. Awaiting new QR scan...'); }} className="text-[10px] text-neutral-500 hover:text-red-400 uppercase tracking-widest">
                        End Session
                    </button>
                )}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10 px-4 mb-6">

                {/* Mobile Client (Remote Console) */}
                <div className="flex flex-col items-center gap-4 w-full md:w-auto">
                    <div className="flex items-center gap-2 text-cyan-500 mb-2">
                        <Smartphone size={20} />
                        <span className="font-medium text-xs">Mobile Console</span>
                    </div>

                    {sessionState === 'idle' ? (
                        <button onClick={simulateScan} className="px-4 py-3 bg-cyan-900/20 border border-cyan-800 text-cyan-400 text-[10px] uppercase tracking-widest rounded hover:bg-cyan-900/40 transition-colors flex items-center gap-2">
                            <QrCode size={14} /> Scan Signage QR
                        </button>
                    ) : (
                        <div className="flex flex-col gap-2 p-3 border border-neutral-800 rounded bg-neutral-900/30">
                            <div className="flex gap-2">
                                <button
                                    onClick={() => applyAsset('id_jewelry_01', 'Jewelry')}
                                    className={`px-3 py-1.5 text-[10px] uppercase tracking-wider rounded border transition-colors ${activeFilter === 'id_jewelry_01' ? 'bg-cyan-900/30 border-cyan-500 text-cyan-300' : 'bg-black border-neutral-800 text-neutral-500 hover:border-neutral-600'}`}
                                >
                                    Jewelry
                                </button>
                                <button
                                    onClick={() => applyAsset('id_suit_04', 'Full Body Suit')}
                                    className={`px-3 py-1.5 text-[10px] uppercase tracking-wider rounded border transition-colors ${activeFilter === 'id_suit_04' ? 'bg-cyan-900/30 border-cyan-500 text-cyan-300' : 'bg-black border-neutral-800 text-neutral-500 hover:border-neutral-600'}`}
                                >
                                    Apparel
                                </button>
                            </div>
                            <button
                                onClick={triggerCapture}
                                className="mt-2 w-full py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-[10px] uppercase tracking-widest rounded transition-colors flex items-center justify-center gap-2"
                            >
                                <Camera size={12} /> Capture & Download
                            </button>
                        </div>
                    )}
                </div>

                {/* WebSocket Line */}
                <div className="hidden md:flex flex-1 h-px bg-neutral-800 relative mx-4">
                    {(isSending || isCapturing) && (
                        <motion.div
                            initial={{ left: '0%' }}
                            animate={{ left: '100%' }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_3px_rgba(34,211,238,0.6)]"
                        />
                    )}
                </div>

                {/* Digital Signage */}
                <div className="flex flex-col items-center gap-4 w-full md:w-auto">
                    <div className="flex items-center gap-2 text-cyan-500 mb-2">
                        <MonitorPlay size={20} />
                        <span className="font-medium text-xs">Digital Signage</span>
                    </div>

                    <div className="w-24 h-28 rounded-lg bg-black border border-neutral-800 flex items-center justify-center relative overflow-hidden">
                        {sessionState === 'idle' ? (
                            <QrCode size={40} className="text-neutral-700" />
                        ) : (
                            <>
                                {/* Silhouette */}
                                <div className="w-10 h-16 bg-neutral-800 rounded-t-full rounded-b-md absolute bottom-0" />

                                {/* Flash Overlay for Capture */}
                                {isCapturing && (
                                    <motion.div
                                        initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 1 }}
                                        className="absolute inset-0 bg-white z-20"
                                    />
                                )}

                                {/* Overlays */}
                                {activeFilter === 'id_jewelry_01' && (
                                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-6 h-6 border-2 border-yellow-500/80 rounded-full absolute top-6 z-10" />
                                )}
                                {activeFilter === 'id_suit_04' && (
                                    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="w-14 h-12 bg-cyan-800/80 absolute bottom-0 rounded-t-xl z-10 border-t border-cyan-500" />
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="bg-black p-3 rounded-lg border border-neutral-800 flex items-center gap-3">
                <Activity size={14} className={(isSending || isCapturing) ? "text-cyan-400 animate-pulse shrink-0" : "text-neutral-600 shrink-0"} />
                <span className={(isSending || isCapturing) ? "text-cyan-200 text-xs" : "text-neutral-500 text-xs"}>
                    {log}
                </span>
            </div>
        </div>
    );
}
export function DynamicAdDemo() {
    const [step, setStep] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [log, setLog] = useState('Edge device offline. Awaiting morning RabbitMQ sync...');
    const [stats, setStats] = useState({ headCount: 1240, male: 58, female: 42 });
    const [detected, setDetected] = useState('');

    const runSimulation = () => {
        if (isRunning) return;
        setIsRunning(true);
        setStep(1);
        setLog('RabbitMQ: Dispatching daily ad manifest & targeting rules to edge device...');
        setDetected('');

        // Step 2: Detection
        setTimeout(() => {
            setStep(2);
            setDetected('Male, 28-35');
            setLog('Camera Vision: Detected demographic [Male, 28-35]. Evaluating rules...');
        }, 2500);

        // Step 3: Playback
        setTimeout(() => {
            setStep(3);
            setLog('Edge Player: Rules matched. Playing "Sports_Apparel_Campaign.mp4"');
        }, 4500);

        // Step 4: Sync to Redis
        setTimeout(() => {
            setStep(4);
            setLog('Playback complete. Logging impression. Flushing telemetry to Redis dashboard...');
            setStats(prev => ({ ...prev, headCount: prev.headCount + 1, male: 59, female: 41 }));
        }, 7000);

        // Reset
        setTimeout(() => {
            setIsRunning(false);
            setStep(0);
            setLog('System idle. Ready for next audience detection.');
        }, 10000);
    };

    return (
        <div className="bg-[#0a0a0a] border border-neutral-900 rounded-xl p-6 font-mono text-sm text-neutral-400 w-full relative overflow-hidden shadow-lg shadow-purple-900/5">
            <div className="flex justify-between items-center mb-6">
                <p className="text-neutral-500 text-xs uppercase tracking-wider">Dynamic Ad Delivery & Analytics</p>
                <button
                    onClick={runSimulation} disabled={isRunning}
                    className="px-3 py-1.5 bg-neutral-800 text-white text-[10px] uppercase tracking-wider rounded hover:bg-neutral-700 transition-colors disabled:opacity-50"
                >
                    Simulate Edge Playback
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10 mb-6">

                {/* Node 1: RabbitMQ Server */}
                <div className={`p-4 rounded-lg border flex flex-col justify-center items-center gap-3 transition-colors duration-300 ${step === 1 ? 'bg-purple-900/20 border-purple-500/50' : 'bg-black border-neutral-800'}`}>
                    <Server size={24} className={step === 1 ? 'text-purple-400' : 'text-neutral-600'} />
                    <div className="text-center">
                        <span className="block text-xs font-medium text-neutral-300">RabbitMQ Cluster</span>
                        <span className="block text-[10px] text-neutral-500 mt-1">Manifests & Schedules</span>
                    </div>
                    {step === 1 && (
                        <div className="w-full bg-purple-900/30 rounded border border-purple-500/30 p-2 mt-2">
                            <span className="text-purple-300 text-[9px] uppercase tracking-widest block text-center animate-pulse">Pushing 42MB Payload</span>
                        </div>
                    )}
                </div>

                {/* Node 2: Edge Device + Camera */}
                <div className={`p-4 rounded-lg border flex flex-col gap-3 transition-colors duration-300 ${(step === 2 || step === 3) ? 'bg-cyan-900/20 border-cyan-500/50' : 'bg-black border-neutral-800'}`}>
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-neutral-300 flex items-center gap-2">
                            <MonitorPlay size={14} className="text-cyan-500" /> Edge Display
                        </span>
                        <Camera size={14} className={step === 2 ? 'text-cyan-400 animate-pulse' : 'text-neutral-600'} />
                    </div>

                    <div className="h-20 bg-neutral-900 rounded border border-neutral-800 flex flex-col items-center justify-center relative overflow-hidden">
                        {step === 0 || step === 1 ? (
                            <span className="text-[10px] text-neutral-600 uppercase tracking-widest">Awaiting Audience</span>
                        ) : step === 2 ? (
                            <div className="text-center">
                                <div className="w-16 h-16 border-2 border-cyan-500/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ping" />
                                <span className="text-cyan-400 text-[10px] uppercase tracking-widest relative z-10">{detected}</span>
                            </div>
                        ) : (
                            <div className="w-full h-full bg-cyan-900/30 flex items-center justify-center">
                                <span className="text-cyan-300 text-[10px] uppercase tracking-widest animate-pulse">Playing Ad Video...</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Node 3: Redis Dashboard */}
                <div className={`p-4 rounded-lg border flex flex-col gap-3 transition-colors duration-300 ${step === 4 ? 'bg-emerald-900/20 border-emerald-500/50' : 'bg-black border-neutral-800'}`}>
                    <div className="flex items-center gap-2 mb-1">
                        <Database size={14} className="text-emerald-500" />
                        <span className="text-xs font-medium text-neutral-300">Redis Analytics</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-neutral-900 rounded border border-neutral-800 p-2 flex flex-col items-center justify-center">
                            <Users size={12} className="text-neutral-500 mb-1" />
                            <span className={`text-sm font-bold ${step === 4 ? 'text-emerald-400' : 'text-neutral-300'}`}>{stats.headCount}</span>
                            <span className="text-[8px] text-neutral-500 uppercase tracking-widest mt-1">Total Heads</span>
                        </div>
                        <div className="bg-neutral-900 rounded border border-neutral-800 p-2 flex flex-col items-center justify-center">
                            <BarChart3 size={12} className="text-neutral-500 mb-1" />
                            <div className="flex gap-2 text-xs font-bold mt-1">
                                <span className="text-blue-400">{stats.male}%</span>
                                <span className="text-pink-400">{stats.female}%</span>
                            </div>
                            <span className="text-[8px] text-neutral-500 uppercase tracking-widest mt-1">M / F Split</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Console Log */}
            <div className="bg-black p-3 rounded-lg border border-neutral-800 flex items-center gap-3">
                <Activity size={14} className={isRunning ? "text-cyan-400 animate-pulse shrink-0" : "text-neutral-600 shrink-0"} />
                <span className={isRunning ? "text-cyan-200 text-xs" : "text-neutral-500 text-xs"}>
                    {log}
                </span>
            </div>
        </div>
    );
}