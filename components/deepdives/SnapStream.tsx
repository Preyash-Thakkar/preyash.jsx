import { Link as LinkIcon, ExternalLink, Code2 } from 'lucide-react';

export default function SnapStream() {
    return (
        <div className="animate-in fade-in duration-500">
            <div className="mb-10">
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-4 border-b border-neutral-800 pb-2">AR Try-On Sync</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    A high-engagement application designed for live events. The architecture relies on WebSocket connections to instantly bridge interactions from a user's mobile device directly to public digital signage, creating a seamless Augmented Reality experience.
                </p>
            </div>

            <div>
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-4 border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <Code2 size={16} /> Socket Payload Emitter
                </h3>
                <div className="bg-[#0a0a0a] border border-neutral-800 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-[11px] font-mono leading-loose text-neutral-300">
                        <code className="text-purple-400">const</code> emitFilterChange = <code className="text-blue-400">function</code>(filterId, screenId) {'{\n'}
                        {'  '}const payload = {'{'} filter: filterId, timestamp: Date.now() {'}'};{'\n'}
                        {'  '}wss.to(screenId).emit(<code className="text-green-400">'apply_filter'</code>, payload);{'\n'}
                        {'}'}
                    </pre>
                </div>
            </div>
        </div>
    );
}