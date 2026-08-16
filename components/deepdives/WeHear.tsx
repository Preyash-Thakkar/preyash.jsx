import { Link as LinkIcon, ExternalLink, Code2, Network } from 'lucide-react';

export default function WeHear() {
    return (
        <div className="animate-in fade-in duration-500">
            <div className="flex flex-wrap gap-3 mb-10">
                <a href="#" className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 text-cyan-400 text-xs font-mono rounded hover:bg-neutral-800 transition-colors">
                    <LinkIcon size={14} /> Live Application
                </a>
            </div>

            <div className="mb-10">
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-4 border-b border-neutral-800 pb-2">Hardware & DSP Integration</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    This system bridges modern web architecture with low-level medical hardware. By utilizing Web Bluetooth (BLE) through a Node.js intermediary, the React frontend can directly orchestrate Hughson-Westlake pure-tone audiometry tests on the ESP32 chipset.
                </p>
            </div>

            <div>
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-4 border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <Code2 size={16} /> BLE Command Controller
                </h3>
                <div className="bg-[#0a0a0a] border border-neutral-800 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-[11px] font-mono leading-loose text-neutral-300">
                        <code className="text-purple-400">const</code> writeAudiometryCommand = <code className="text-blue-400">async</code> (frequency, dbLevel) {"=> {"}{'\n'}
                        {'  '}const payload = Buffer.from([0x01, frequency, dbLevel]);{'\n'}
                        {'  '}<code className="text-purple-400">await</code> esp32Characteristic.writeAsync(payload, false);{'\n'}
                        {'  '}logger.info(<code className="text-green-400">{"`Command sent: ${frequency}Hz @ ${dbLevel}dB`"}</code>);{'\n'}
                        {"}"}
                    </pre>
                </div>
            </div>
        </div>
    );
}