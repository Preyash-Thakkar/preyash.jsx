// components/deepdives/WeHear.tsx
import { Cloud, Settings2, Box, Mic, Server } from 'lucide-react';

export default function WeHear() {
    return (
        <div className="animate-in fade-in duration-500">

            {/* Cloud & Infrastructure */}
            <div className="mb-10">
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-3 border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <Cloud size={16} className="text-cyan-500" /> Azure Migration & Infrastructure
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    The company’s infrastructure originally relied on Railway, which lacked the necessary control for our scaling backend. I was tasked with migrating the entire ecosystem to Microsoft Azure from scratch. This was not a managed service migration; it involved manually provisioning Azure VMs, configuring Cloudflare for DNS and IP allocation, and managing automated Docker container builds.
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    A major part of this transition was writing and maintaining strict Nginx reverse proxy configurations to properly route traffic across our newly containerized microservices securely.
                </p>
            </div>

            {/* WeConfigPro */}
            <div className="mb-10">
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-3 border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <Settings2 size={16} className="text-cyan-500" /> WeConfigPro Development
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    Spent over six months heavily developing WeConfigPro, the core software ecosystem used for fitting and calibrating WeHear devices. Rather than relying on manual data entry, we built direct API integrations with Oscilla hardware, allowing the software to automatically ingest audiogram test results straight from the audio console.
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    Leveraged this direct data stream to engineer complex Auto-Fit algorithms. These algorithms instantly analyze the patient's Oscilla audiogram data and dynamically calculate the exact acoustic gain and frequency profiles needed to tune the device for their specific hearing loss parameters.
                </p>
            </div>

            {/* Inventory Management System */}
            <div className="mb-10">
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-3 border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <Box size={16} className="text-cyan-500" /> End-to-End Hardware Traceability (IMS)
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    Collaborated on a comprehensive Inventory Management System to guarantee strict medical-grade traceability. The backend pipeline logs the entire lifecycle of a device: processing incoming raw materials from vendors, enforcing IQC (Incoming Quality Control), structuring complex BOMs (Bill of Materials), and tracking the assembly state through SKD and SFG phases.
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    By the time a device reaches final QA, it is assigned a unique BoxID. If a hardware failure occurs in the field, the system can instantly backtrack the device to the exact technician, assembly batch, and original raw material vendor.
                </p>
            </div>

            {/* AI Speech & Notes */}
            <div className="mb-10">
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-3 border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <Mic size={16} className="text-cyan-500" /> AI Meeting Analysis
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    Expanded the core speech capabilities by integrating an AI-driven notes tool. The system processes long-form audio recordings from meetings, generating structured Minutes of Meeting (MoM), extracting the crux of the discussion, and highlighting final verdicts and action items.
                </p>
            </div>

            {/* Code Snippet - Nginx / Cloud Infrastructure */}
            <div>
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-4 border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <Server size={16} /> Azure VM Nginx Routing Configuration
                </h3>
                <div className="bg-[#0a0a0a] border border-neutral-800 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-[11px] font-mono leading-loose text-neutral-300">
                        <code className="text-neutral-500"># Reverse Proxy for Containerized Node.js Microservices</code>{'\n'}
                        <code className="text-blue-400">server</code> {'{\n'}
                        {'    '}<code className="text-cyan-400">listen</code> 80;{'\n'}
                        {'    '}<code className="text-cyan-400">server_name</code> api.weconfig.in;{'\n\n'}
                        {'    '}<code className="text-blue-400">location</code> / {'{\n'}
                        {'        '}<code className="text-cyan-400">proxy_pass</code> http://localhost:5000;{'\n'}
                        {'        '}<code className="text-cyan-400">proxy_http_version</code> 1.1;{'\n'}
                        {'        '}<code className="text-cyan-400">proxy_set_header</code> Upgrade $http_upgrade;{'\n'}
                        {'        '}<code className="text-cyan-400">proxy_set_header</code> Connection <code className="text-green-400">'upgrade'</code>;{'\n'}
                        {'        '}<code className="text-cyan-400">proxy_set_header</code> Host $host;{'\n'}
                        {'        '}<code className="text-cyan-400">proxy_set_header</code> X-Real-IP $remote_addr;{'\n'}
                        {'        '}<code className="text-cyan-400">proxy_set_header</code> X-Forwarded-For $proxy_add_x_forwarded_for;{'\n'}
                        {'        '}<code className="text-cyan-400">proxy_cache_bypass</code> $http_upgrade;{'\n'}
                        {'    }'}{'\n'}
                        {'}'}
                    </pre>
                </div>
            </div>
        </div>
    );
}