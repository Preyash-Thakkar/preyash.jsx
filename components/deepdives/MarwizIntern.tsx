// components/deepdives/MarwizIntern.tsx
import { Database, Server, Users, Activity } from 'lucide-react';

export default function MarwizIntern() {
    return (
        <div className="animate-in fade-in duration-500">

            {/* Core Architecture */}
            <div className="mb-10">
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-3 border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <Server size={16} className="text-cyan-500" /> Edge-Resilient Dynamic Ad Network
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    Architected a fault-tolerant advertisement delivery network for distributed edge devices. To combat unreliable internet connectivity at client locations, I designed an offline-first sync mechanism. Instead of relying on fragile WebSockets, the system uses RabbitMQ message queues. Upon morning boot, devices securely consume their daily manifest—including ad video payloads, strict scheduling limits, and demographic targeting parameters (age, gender, and facial emotion triggers).
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    This ensured 100% playback reliability throughout the day, operating entirely independent of network latency or drops.
                </p>
            </div>

            {/* Analytics & Caching */}
            <div className="mb-10">
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-3 border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <Activity size={16} className="text-cyan-500" /> High-Volume Analytics Dashboard
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    Engineered the administrative dashboard tracking real-time ad performance. As edge devices reconnected and flushed their daily playback logs, the database handled massive ingestion spikes. I implemented Redis caching to aggregate these heavy queries, allowing administrators to instantly filter playback telemetry by location, device ID, brand, and target demographic without bottlenecking the primary database.
                </p>
            </div>

            {/* Client Facing Systems */}
            <div className="mb-10">
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-3 border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <Users size={16} className="text-cyan-500" /> B2B Product Ownership (Uma Inc. & Pushti Shangar)
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    Stepped beyond purely backend development to handle direct client interactions. Gathered requirements and spearheaded the full-stack development of an Employee Task Management System for Uma Inc., alongside architectural contributions to the Pushti Shangar e-commerce platform.
                </p>
            </div>

            {/* Code Snippet */}
            <div>
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-4 border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <Database size={16} /> RabbitMQ Edge Sync Logic
                </h3>
                <div className="bg-[#0a0a0a] border border-neutral-800 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-[11px] font-mono leading-loose text-neutral-300">
                        <code className="text-neutral-500">// Edge Device: Morning Initialization Routine</code>{'\n'}
                        <code className="text-blue-400">async function</code> <code className="text-green-400">syncDailyManifest</code>(deviceId) {'{\n'}
                        {'  '}const channel = <code className="text-purple-400">await</code> mqConnection.createChannel();{'\n'}
                        {'  '}<code className="text-purple-400">await</code> channel.assertQueue(<code className="text-green-400">`manifest_queue_${'{'}deviceId{'}'}`</code>, {'{'} durable: <code className="text-orange-400">true</code> {'}'});{'\n\n'}
                        {'  '}channel.consume(<code className="text-green-400">`manifest_queue_${'{'}deviceId{'}'}`</code>, <code className="text-blue-400">async</code> (msg) {'=> {\n'}
                        {'    '}const {'{'} schedule, demographics {'}'} = JSON.parse(msg.content.toString());{'\n'}
                        {'    \n'}
                        {'    '}<code className="text-neutral-500">// Cache payloads locally for offline-first resilience</code>{'\n'}
                        {'    '}<code className="text-purple-400">await</code> localEdgeCache.store(<code className="text-green-400">'daily_ads'</code>, schedule);{'\n'}
                        {'    '}<code className="text-purple-400">await</code> localEdgeCache.store(<code className="text-green-400">'targeting_rules'</code>, demographics);{'\n\n'}
                        {'    '}logger.info(<code className="text-green-400">`Sync complete for ${'{'}deviceId{'}'}. Ready for offline playback.`</code>);{'\n'}
                        {'    '}channel.ack(msg);{'\n'}
                        {'  }'});{'\n'}
                        {'}'}
                    </pre>
                </div>
            </div>

        </div>
    );
}