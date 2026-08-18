// components/Visualizers.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Smartphone, MonitorPlay, Cpu, Server, LayoutDashboard, Database, Activity, Mic, Globe, MessageSquare, QrCode, Camera, BarChart3, Users } from 'lucide-react';

export function AudiologyPipeline() {
    const [activeStep, setActiveStep] = useState(0);
    const [log, setLog] = useState('System ready. Awaiting test initiation...');
    const [isRunning, setIsRunning] = useState(false);

    const runTest = () => {
        if (isRunning) return;
        setIsRunning(true);

        setActiveStep(1);
        setLog('React UI: Sending Web BLE command { tone: 1000Hz, db: 40dB }');

        setTimeout(() => {
            setActiveStep(2);
            setLog('ESP32: Tone played. Patient pressed response button. Returning to UI...');
        }, 1800);

        setTimeout(() => {
            setActiveStep(3);
            setLog('React UI: Response received. Forwarding payload to Node.js backend...');
        }, 3600);

        setTimeout(() => {
            setActiveStep(4);
            setLog('Node.js: Processing audiogram data. Persisting to MongoDB...');
        }, 5400);

        setTimeout(() => {
            setActiveStep(5);
            setLog('Node.js: Hughson-Westlake algorithm calculated next step: 1000Hz @ 30dB.');
        }, 7200);

        setTimeout(() => {
            setActiveStep(6);
            setLog('React UI: Next command received. Sending to ESP32...');

            setTimeout(() => {
                setIsRunning(false);
                setActiveStep(0);
                setLog('System ready. Awaiting test initiation...');
            }, 2000);
        }, 9000);
    };

    return (
        <div className="bg-[#0a0a0a] border border-neutral-900 rounded-xl p-6 font-mono text-sm text-neutral-400 w-full overflow-hidden shadow-lg shadow-blue-900/5">
            <div className="flex justify-between items-center mb-8">
                <p className="text-neutral-500 text-xs uppercase tracking-wider">End-to-End Audiometry Flow</p>
                <button
                    onClick={runTest} disabled={isRunning}
                    className="px-4 py-2 bg-white text-black font-bold text-[10px] uppercase tracking-wider rounded hover:bg-neutral-200 transition-colors disabled:opacity-50"
                >
                    Run Hughson-Westlake Cycle
                </button>
            </div>

            <div className="flex flex-col xl:flex-row justify-between items-center gap-2 relative z-10 px-2">

                {/* ESP32 Hardware Node */}
                <div className={`flex flex-col items-center p-3 rounded-lg w-full xl:w-28 transition-all duration-300 ${[1, 2, 6].includes(activeStep) ? 'bg-purple-900/20 border-purple-500/50' : 'bg-black border-neutral-800'} border`}>
                    <Cpu className={`mb-2 transition-colors duration-300 ${[1, 2, 6].includes(activeStep) ? 'text-purple-400' : 'text-neutral-600'}`} />
                    <span className={`font-medium text-xs transition-colors duration-300 ${[1, 2, 6].includes(activeStep) ? 'text-purple-300' : 'text-neutral-400'}`}>ESP32/nRF</span>
                </div>

                {/* Line 1 */}
                <div className="hidden xl:flex flex-1 h-px bg-neutral-800 relative mx-2">
                    <motion.div
                        initial={{ left: '100%', opacity: 0 }}
                        animate={{
                            left: [1, 6].includes(activeStep) ? '0%' : activeStep === 2 ? '100%' : '100%',
                            opacity: [1, 2, 6].includes(activeStep) ? 1 : 0
                        }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_2px_rgba(96,165,250,0.5)]"
                    />
                </div>

                {/* React UI Node */}
                <div className={`flex flex-col items-center p-3 rounded-lg w-full xl:w-28 transition-all duration-300 ${[1, 2, 3, 5, 6].includes(activeStep) ? 'bg-blue-900/20 border-blue-500/50' : 'bg-black border-neutral-800'} border shadow-lg shadow-blue-900/10`}>
                    <LayoutDashboard className={`mb-2 transition-colors duration-300 ${[1, 2, 3, 5, 6].includes(activeStep) ? 'text-blue-400' : 'text-neutral-600'}`} />
                    <span className={`font-medium text-xs transition-colors duration-300 ${[1, 2, 3, 5, 6].includes(activeStep) ? 'text-blue-300' : 'text-neutral-400'}`}>React UI</span>
                </div>

                {/* Line 2 */}
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

                {/* Line 3 */}
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

            <div className="mt-8 bg-black p-4 rounded-lg border border-neutral-800 flex items-center gap-3 min-h-[60px]">
                <Activity size={16} className={isRunning ? "text-blue-400 animate-pulse shrink-0" : "text-neutral-600 shrink-0"} />
                <span className={isRunning ? "text-white text-xs leading-relaxed" : "text-neutral-500 text-xs leading-relaxed"}>
                    {log}
                </span>
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