export default function CaseStudies() {
    const cases = [
        {
            title: "AI Security Framework",
            domain: "Strategic Governance",
            description: "Developed and aligned an enterprise-wide AI Security Framework in accordance with NIST AI RMF and ISO 42001 standards, proactively identifying threats in ML pipelines and GenAI implementations.",
            tags: ["NIST AI RMF", "ISO 42001", "Threat Modeling", "GenAI"],
        },
        {
            title: "Secure by Design (SbyD)",
            domain: "Application Security",
            description: "Orchestrated 'Secure by Design' principles for over 300+ applications across the enterprise. Acted as the primary Security Subject Matter Expert to drive shift-left security adoption in developer workflows.",
            tags: ["DevSecOps", "Shift-Left", "SAST/DAST", "Architecture Reviews"],
        },
        {
            title: "OT/ICS Incident Management",
            domain: "Industrial Operations",
            description: "Architected proactive incident management programs specifically for Operational Technology (OT) and Industrial Control Systems (ICS), drastically reducing response times for critical infrastructure environments.",
            tags: ["OT Security", "ICS", "Incident Response", "Purdue Model"],
        },
    ];

    return (
        <section id="case-studies" className="py-32 relative">
            {/* Decorative Orbs */}
            <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-purple-500/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-emerald-400 font-semibold text-xs mb-4 tracking-wider uppercase">
                        Proven Impact
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Case Studies</span>
                    </h2>
                    <p className="text-xl text-slate-400">
                        Highlighting STAR-based initiatives driving enterprise scaling and risk reduction.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {cases.map((study, idx) => (
                        <div
                            key={idx}
                            className="group flex flex-col bg-slate-900/50 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden shadow-2xl hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.1)]"
                        >
                            {/* Card internal glow on hover */}
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-emerald-500/20 blur-[60px] rounded-full group-hover:bg-emerald-500/30 transition-all duration-700 pointer-events-none"></div>

                            <span className="text-emerald-400 font-bold tracking-widest text-xs uppercase mb-4 opacity-80">
                                {study.domain}
                            </span>
                            <h3 className="text-2xl font-bold text-slate-100 mb-5 leading-snug">
                                {study.title}
                            </h3>
                            <p className="text-slate-400 mb-8 flex-grow leading-relaxed font-medium">
                                {study.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {study.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1.5 bg-white/5 text-slate-300 text-xs font-semibold rounded-lg border border-white/5 group-hover:border-white/10 transition-colors backdrop-blur-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
