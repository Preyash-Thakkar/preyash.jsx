// components/deepdives/PDEU.tsx
import { ExternalLink, Database, Cpu } from 'lucide-react';

export default function PDEU() {
    return (
        <div className="animate-in fade-in duration-500">
            <div className="flex flex-wrap gap-3 mb-10">
                <a href="https://www.scribd.com/presentation/633345229/Patient-Mortality-Prediction-using-machine-learning-and-Artificial-pptx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 text-cyan-400 text-xs font-mono rounded hover:bg-neutral-800 transition-colors">
                    <ExternalLink size={14} /> View ML Project Report (Scribd)
                </a>
            </div>

            {/* Project 1 */}
            <div className="mb-10">
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-3 border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <Cpu size={16} className="text-cyan-500" /> Patient Disease & Mortality Prediction System
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    Developed an end-to-end predictive healthcare pipeline in Python. The system ingested raw, multi-variable patient records, handled missing value imputations, and performed rigorous feature scaling. Built using ensemble classifiers (Random Forest) optimized via hyperparameter tuning to accurately evaluate risk factors and predict patient mortality outcomes with high statistical precision.
                </p>
            </div>

            {/* Project 2 */}
            <div className="mb-10">
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-3 border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <Database size={16} className="text-cyan-500" /> Car Rental Service Platform (Full-Stack)
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    Engineered a comprehensive full-stack CRUD application for vehicle fleet and reservation management. Designed normalized relational database schemas to handle concurrent booking requests, implemented secure session-based authentication middleware, and built administrative controllers for dynamic inventory tracking.
                </p>
            </div>

            {/* Code Snippet */}
            <div>
                <h3 className="text-white text-sm font-medium tracking-wide uppercase mb-4 border-b border-neutral-800 pb-2 flex items-center gap-2">
                    <Database size={16} /> ML Classification Pipeline Snippet
                </h3>
                <div className="bg-[#0a0a0a] border border-neutral-800 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-[11px] font-mono leading-loose text-neutral-300">
                        <code className="text-neutral-500"># Predictive Health Data Processing Pipeline</code>{'\n'}
                        <code className="text-purple-400">from</code> sklearn.ensemble <code className="text-purple-400">import</code> RandomForestClassifier{'\n'}
                        <code className="text-purple-400">from</code> sklearn.model_selection <code className="text-purple-400">import</code> train_test_split{'\n'}
                        <code className="text-purple-400">from</code> sklearn.metrics <code className="text-purple-400">import</code> classification_report{'\n\n'}
                        <code className="text-blue-400">def</code> <code className="text-green-400">evaluate_mortality_risk</code>(features, targets):{'\n'}
                        {'    '}X_train, X_test, y_train, y_test = train_test_split(features, targets, test_size=<code className="text-orange-400">0.2</code>, random_state=<code className="text-orange-400">42</code>){'\n'}
                        {'    '}clf = RandomForestClassifier(n_estimators=<code className="text-orange-400">150</code>, max_depth=<code className="text-orange-400">12</code>, n_jobs=-<code className="text-orange-400">1</code>){'\n'}
                        {'    '}clf.fit(X_train, y_train){'\n'}
                        {'    '}predictions = clf.predict(X_test){'\n'}
                        {'    '}<code className="text-purple-400">return</code> classification_report(y_test, predictions){'\n'}
                    </pre>
                </div>
            </div>
        </div>
    );
}