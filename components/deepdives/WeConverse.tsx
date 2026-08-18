// components/deepdives/WeConverse.tsx
import { Link as LinkIcon, Globe, AudioLines, Code2, CheckCircle2 } from 'lucide-react';

export default function WeConverse() {
    return (
        <div className="animate-in fade-in duration-500">

            <div className="flex flex-wrap gap-3 mb-10">
                <a href="https://weconverse.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 text-cyan-400 text-xs font-mono rounded hover:bg-neutral-800 transition-colors">
                    <LinkIcon size={14} /> weconverse.in
                </a>
            </div>

            {/* Origin & Evolution - UPDATED FOR COLLABORATIVE TONE */}
            <div className="mb-10">
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-3 border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <AudioLines size={16} className="text-cyan-500" /> The Pivot: From Hardware to Enterprise
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    WeConverse began as a backend support infrastructure intended to provide 1-to-1 live translation features for WeHear hearing aids via a mobile app. However, a requirement for real-time event translation sparked a massive architectural pivot for our team. I played a crucial role in re-engineering the backend from a singular client-server model into a highly concurrent event multiplexer capable of capturing a speaker's audio and broadcasting it in 72 native languages simultaneously.
                </p>
            </div>

            {/* Scale & Deployments */}
            <div className="mb-10">
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-3 border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <Globe size={16} className="text-cyan-500" /> Global Scale & Hallmark Deployments
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    The breakthrough launch occurred at the <strong>BNI Global Convention 2024 (Hawaii)</strong>, serving over 200 participants from 13+ countries. The overwhelming success cemented WeConverse as a flagship product, leading our team to deploy it at massive international and state-level summits:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-lg">
                        <h4 className="text-white text-xs font-bold mb-2 flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                            National Urban Conclave 2025
                        </h4>
                        <p className="text-neutral-500 text-[11px] leading-relaxed">
                            Attended by the Hon’ble Chief Minister of Gujarat and 150+ national mayors. Ensured seamless multilingual communication for critical urban transformation policies.
                        </p>
                    </div>

                    <div className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-lg">
                        <h4 className="text-white text-xs font-bold mb-2 flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                            ICEVI World Conference (BPA) 2024
                        </h4>
                        <p className="text-neutral-500 text-[11px] leading-relaxed">
                            Global meet for the Blind People Association, requiring hyper-reliable, low-latency audio stream processing for visually impaired delegates.
                        </p>
                    </div>

                    <div className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-lg">
                        <h4 className="text-white text-xs font-bold mb-2 flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                            Business Networking Zirvesi 2025
                        </h4>
                        <p className="text-neutral-500 text-[11px] leading-relaxed">
                            High-stakes corporate networking summit utilizing the platform for cross-border business negotiations.
                        </p>
                    </div>

                    <div className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-lg">
                        <h4 className="text-white text-xs font-bold mb-2 flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                            BNI Convention Turkey
                        </h4>
                        <p className="text-neutral-500 text-[11px] leading-relaxed">
                            Continued global expansion, handling rapid, multi-dialect Turkish/English cross-translations.
                        </p>
                    </div>
                </div>
            </div>

            {/* Code Snippet */}
            <div>
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-4 border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <Code2 size={16} /> Audio Stream Multiplexing Core
                </h3>
                <div className="bg-[#0a0a0a] border border-neutral-800 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-[11px] font-mono leading-loose text-neutral-300">
                        <code className="text-neutral-500">// Abstracted Event Audio Router</code>{'\n'}
                        <code className="text-blue-400">class</code> <code className="text-green-400">AudioStreamMultiplexer</code> {'{\n'}
                        {'  '}<code className="text-blue-400">async</code> <code className="text-green-400">processLiveStream</code>(audioChunk, activeRooms) {'{\n'}
                        {'    '}try {'{\n'}
                        {'      '}<code className="text-neutral-500">// 1. Pipe chunk to high-speed STT inference layer</code>{'\n'}
                        {'      '}const transcript = <code className="text-purple-400">await</code> SpeechInferenceEngine.decode(audioChunk);{'\n\n'}
                        {'      '}<code className="text-neutral-500">// 2. Concurrent Neural Machine Translation (NMT)</code>{'\n'}
                        {'      '}const translations = <code className="text-purple-400">await</code> Promise.all({' \n'}
                        {'        '}activeRooms.map(room {'=>'} NMT_Pipeline.translate(transcript, room.targetLang)){'\n'}
                        {'      '});{'\n\n'}
                        {'      '}<code className="text-neutral-500">// 3. WebSocket Broadcast to isolated language channels</code>{'\n'}
                        {'      '}translations.forEach((text, index) {'=>'} {'{\n'}
                        {'        '}const targetChannel = activeRooms[index].channelId;{'\n'}
                        {'        '}socketServer.to(targetChannel).emit(<code className="text-green-400">'live_captions'</code>, text);{'\n'}
                        {'      }'});{'\n'}
                        {'    '}  catch (err) {'{\n'}
                        {'      '}logger.error(<code className="text-green-400">'Stream processing degraded'</code>, err);{'\n'}
                        {'    }'}{'\n'}
                        {'  }'}{'\n'}
                        {'}'}
                    </pre>
                </div>
            </div>
        </div>
    );
}