import { Link as LinkIcon, ExternalLink, Code2 } from 'lucide-react';

export default function WeConverse() {
    return (
        <div className="animate-in fade-in duration-500">
            <div className="flex flex-wrap gap-3 mb-10">
                <a href="https://weconverse.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 text-cyan-400 text-xs font-mono rounded hover:bg-neutral-800 transition-colors">
                    <LinkIcon size={14} /> weconverse.in
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-mono rounded hover:bg-neutral-800 hover:text-white transition-colors">
                    <ExternalLink size={14} /> LinkedIn Event Details
                </a>
            </div>

            <div className="mb-10">
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-4 border-b border-neutral-800 pb-2">Real-Time Translation Architecture</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    Built to support global conferences, this system routes raw audio through Google Cloud Speech-to-Text and Azure Translator. Using socket.io, the processed text is multiplexed and broadcasted in 72 different languages simultaneously with sub-second latency.
                </p>
            </div>

            <div>
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-4 border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <Code2 size={16} /> Stream Multiplexer
                </h3>
                <div className="bg-[#0a0a0a] border border-neutral-800 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-[11px] font-mono leading-loose text-neutral-300">
                        <code className="text-purple-400">async function</code> <code className="text-blue-400">handleTranslationStream</code>(payload) {'{\n'}
                        {'  '}const {'{'} audioData, targetLangs {'}'} = payload;{'\n'}
                        {'  '}try {'{\n'}
                        {'    '}const transcription = <code className="text-purple-400">await</code> GCP.SpeechToText(audioData);{'\n'}
                        {'    '}const translations = <code className="text-purple-400">await</code> Azure.translate(transcription, targetLangs);{'\n'}
                        {'    '}socket.broadcast(translations);{'\n'}
                        {'  }'} catch (err) {'{\n'}
                        {'    '}logger.error(<code className="text-green-400">'Translation failure'</code>, err);{'\n'}
                        {'  }'}{'\n'}
                        {'}'}
                    </pre>
                </div>
            </div>
        </div>
    );
}