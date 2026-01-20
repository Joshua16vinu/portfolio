import { motion } from "framer-motion";
import { Users, Mic, Presentation, Terminal, Minimize, Maximize, X } from "lucide-react";

const leadership = [
    {
        id: "chairperson.tsx",
        role: "Chairperson",
        org: "AIDL Club",
        icon: <Users size={16} />,
        context: "Leading 150+ members & 500+ participants",
        code: [
            { key: "impact", value: "\"Orchestrated national-level hackathons\"" },
            { key: "initiative", value: "\"Mentored student projects\"" },
            { key: "status", value: "\"Executed WebRush'24\"" }
        ]
    },
    {
        id: "tech_coord.config",
        role: "Tech_Coordinator",
        org: "FCRIT",
        icon: <Mic size={16} />,
        context: "Managed digital presence & technical sessions",
        code: [
            { key: "focus", value: "[\"ML\", \"Deep Learning\"]" },
            { key: "events", value: "hands_on_workshops()" }
        ]
    },
    {
        id: "speaker_log.json",
        role: "Guest_Speaker",
        org: "Cryptex'24",
        icon: <Presentation size={16} />,
        context: "Training 30+ students in AI concepts",
        code: [
            { key: "topic", value: "\"Foundational ML\"" },
            { key: "audience", value: "30_students" }
        ]
    }
];

const EditorWindow = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`group relative flex flex-col bg-surface border border-border rounded-lg overflow-hidden shadow-2xl hover:border-vscode-blue/50 transition-colors h-full ${index === 0 ? "md:col-span-2" : ""}`}
        >
            {/* Window Chrome / Tab Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-surfaceLight border-b border-border">
                <div className="flex items-center gap-2">
                    {/* Tab */}
                    <div className="flex items-center gap-2 text-xs font-mono text-primary bg-surface px-3 py-1.5 rounded-t-md border-t-2 border-vscode-blue">
                        <span className="text-vscode-blue">{item.icon}</span>
                        {item.id}
                        <X size={12} className="ml-2 opacity-50 hover:opacity-100 cursor-pointer" />
                    </div>
                </div>
                {/* Window Controls */}
                <div className="flex items-center gap-2 opacity-50">
                    <Minimize size={12} />
                    <Maximize size={12} />
                    <X size={12} />
                </div>
            </div>

            {/* Editor Content */}
            <div className="p-4 md:p-6 font-mono text-xs md:text-sm overflow-x-auto flex-1">
                <div className="flex gap-4 min-w-max">
                    {/* Line Numbers */}
                    <div className="flex flex-col text-right text-gray-600 select-none border-r border-border pr-4">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <span key={i}>{i + 1}</span>
                        ))}
                    </div>

                    {/* Code */}
                    <div className="flex-1 space-y-1">
                        <div>
                            <span className="text-vscode-purple">const</span> <span className="text-vscode-blue">{item.role}</span> <span className="text-primary">=</span> <span className="text-vscode-yellow">{"{"}</span>
                        </div>
                        <div className="pl-4">
                            <span className="text-vscode-teal">organization</span>: <span className="text-vscode-orange">"{item.org}"</span>,
                        </div>
                        <div className="pl-4">
                            <span className="text-vscode-teal">context</span>: <span className="text-vscode-green">/* {item.context} */</span>,
                        </div>

                        {item.code.map((line, i) => (
                            <div key={i} className="pl-4">
                                <span className="text-vscode-teal">{line.key}</span>: <span className="text-vscode-orange">{line.value}</span>,
                            </div>
                        ))}

                        <div>
                            <span className="text-vscode-yellow">{"}"}</span>;
                        </div>
                    </div>
                </div>
            </div>

            {/* Status Bar style footer */}
            <div className="px-4 py-1 bg-vscode-blue text-[10px] text-white font-mono flex justify-between items-center">
                <span>TS REACT</span>
                <span>Ln 6, Col 1</span>
            </div>
        </motion.div>
    );
};

const Leadership = () => {
    return (
        <section id="leadership" className="py-32 px-6">
            <div className="container-width grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-sm font-mono text-secondary sticky top-32 uppercase tracking-widest">
                        06 // Leadership
                    </h2>
                </div>

                <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {leadership.map((item, index) => (
                        <EditorWindow
                            key={index}
                            item={item}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
