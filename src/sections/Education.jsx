import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2, Award } from "lucide-react";

const educationData = [
    {
        id: "stuttgart",
        degree: "Master of Science in Computer Science",
        track: "Specialization Track: Autonomous Systems",
        institution: "University of Stuttgart",
        location: "Stuttgart, Baden-Württemberg, Germany",
        period: "Oct 2026 – Present",
        status: "Enrolled · Winter Intake",
        highlights: [
            "Curriculum focusing on Autonomous Systems, AI/ML foundations, and multi-agent coordination.",
            "Research interests in real-time neural perception, autonomous control, and verified reasoning.",
            "Active search for Werkstudent / HiWi research student positions in the Stuttgart region."
        ]
    },
    {
        id: "fcrit",
        degree: "Bachelor of Engineering in Computer Engineering",
        track: "Honors in Artificial Intelligence and Machine Learning",
        institution: "Fr. C. Rodrigues Institute of Technology (FCRIT)",
        location: "Navi Mumbai, India",
        period: "Jul 2022 – Jun 2026",
        status: "Rank #1 in Class · 9.77 / 10 CGPA",
        highlights: [
            "Ranked #1 in graduating cohort with a 9.77/10 CGPA.",
            "Achieved perfect 10.0 / 10.0 Semester GPAs across both pre-final and final engineering years.",
            "Completed specialized Honors track in AI/ML (Deep Learning, NLP, and Computer Vision).",
            "Head of AI & Deep Learning Club, organizing 20+ technical events and hackathons."
        ]
    }
];

const Education = () => {
    return (
        <section id="education" className="py-20 sm:py-28 px-5 sm:px-8 border-t border-[#dedbd2]">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    
                    {/* Left Column */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="text-xs font-mono uppercase tracking-widest text-stone-500">
                            03 // Academic Foundations
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-stone-950 font-sans leading-[1.08]">
                            Academic <br />
                            <span className="font-serif italic font-normal lowercase tracking-normal text-stone-800 text-3xl sm:text-4xl lg:text-[2.75rem]">
                                excellence & degrees
                            </span>
                        </h2>
                        <p className="text-stone-600 text-sm leading-relaxed">
                            Graduated ranked #1 in computer engineering with consecutive 10/10 semester GPAs, continuing into Master of Science studies at University of Stuttgart.
                        </p>
                    </div>

                    {/* Right Column: Cards */}
                    <div className="lg:col-span-7 space-y-6">
                        {educationData.map((edu) => (
                            <div
                                key={edu.id}
                                className="p-6 sm:p-8 rounded-2xl bg-white border border-[#dedbd2] shadow-sm space-y-4"
                            >
                                <div className="flex flex-wrap items-start justify-between gap-2">
                                    <div className="space-y-0.5">
                                        <div className="text-xs font-mono text-stone-500 flex items-center gap-1.5">
                                            <Calendar size={13} />
                                            <span>{edu.period}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-stone-950 font-sans">
                                            {edu.degree}
                                        </h3>
                                        <div className="text-xs sm:text-sm font-mono text-stone-700">
                                            {edu.track}
                                        </div>
                                    </div>

                                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-stone-100 text-stone-800 border border-stone-200">
                                        {edu.status}
                                    </span>
                                </div>

                                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500 pt-1 pb-3 border-b border-[#dedbd2]">
                                    <span className="text-stone-900 font-semibold">{edu.institution}</span>
                                    <span>•</span>
                                    <span>{edu.location}</span>
                                </div>

                                <div className="space-y-2 pt-1">
                                    {edu.highlights.map((h, idx) => (
                                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                                            <span className="text-stone-900 font-mono mt-0.5">▸</span>
                                            <span>{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;