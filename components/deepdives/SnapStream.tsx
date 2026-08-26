// components/deepdives/SnapStream.tsx
import { Smartphone, MonitorPlay, QrCode, Code2, Camera } from 'lucide-react';

export default function SnapStream() {
    return (
        <div className="animate-in fade-in duration-500">
            <div className="mb-10">
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-4 border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <QrCode size={16} className="text-cyan-500" /> Session-Based AR Remote Control
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    Snap Stream was designed to transform passive digital signage into interactive Augmented Reality experiences. The architecture relies on dynamic QR codes displayed on the main signage screen. When a customer scans the QR code, their mobile device connects via WebSockets and instantly becomes a dedicated remote console for that specific screen session.
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    Through this web-based remote, users can trigger specific AR assets mapped to unique IDs. These assets range from facial overlays (virtual jewelry, Snapchat-style filters) to complex apparel tracking (jackets, shirts, and full-body suits). The remote also features an execution trigger, allowing users to capture a snapshot on the digital display and immediately download the rendered image directly to their mobile device.
                </p>
            </div>

            <div>
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-4 border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <Code2 size={16} /> Remote Command Socket Handler
                </h3>
                <div className="bg-[#0a0a0a] border border-neutral-800 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-[11px] font-mono leading-loose text-neutral-300">
                        <code className="text-purple-400">const</code> <code className="text-blue-400">handleRemoteCommand</code> = (socket) {'=> {\n'}
                        {'  '}socket.on(<code className="text-green-400">'asset_select'</code>, (payload) {'=> {\n'}
                        {'    '}<code className="text-neutral-500">// payload: {'{'} sessionId, assetId: 'full_body_suit_01' {'}'}</code>{'\n'}
                        {'    '}signageNamespace.to(payload.sessionId).emit(<code className="text-green-400">'render_ar_asset'</code>, payload.assetId);{'\n'}
                        {'  }'});{'\n\n'}
                        {'  '}socket.on(<code className="text-green-400">'trigger_capture'</code>, (sessionId) {'=> {\n'}
                        {'    '}signageNamespace.to(sessionId).emit(<code className="text-green-400">'execute_snapshot'</code>);{'\n'}
                        {'    '}<code className="text-neutral-500">// Signage responds with base64 payload for mobile download</code>{'\n'}
                        {'  }'});{'\n'}
                        {'}'}
                    </pre>
                </div>
            </div>
        </div>
    );
}