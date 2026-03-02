export default function Certifications() {
    const certs = [
        { name: "ISO 27001", role: "Lead Auditor", color: "from-blue-500 to-indigo-600", accent: "text-blue-400" },
        { name: "AWS", role: "Certified Security - Specialty", color: "from-orange-500 to-amber-600", accent: "text-orange-400" },
        { name: "Azure", role: "AZ-500 Security Engineer", color: "from-sky-400 to-blue-600", accent: "text-sky-400" },
        { name: "CNSS", role: "Certified Network Security Specialist", color: "from-emerald-500 to-emerald-600", accent: "text-emerald-400" },
    ];

    return (
        <section id="certifications" className="py-32 relative border-t border-white/5 bg-slate-900/20">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Certifications</span>
                    </h2>
                    <p className="text-xl text-slate-400 font-medium">
                        Validated expertise across global frameworks and leading cloud providers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {certs.map((cert, idx) => (
                        <div
                            key={idx}
                            className="group relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-all duration-500 shadow-xl"
                        >
                            {/* Inner Card Container */}
                            <div className="h-full w-full bg-slate-950/80 backdrop-blur-xl rounded-[23px] p-8 flex flex-col items-center text-center justify-center min-h-[220px] relative z-10 overflow-hidden transform group-hover:-translate-y-1 transition-transform duration-500">
                                {/* Subtle top glow based on cert color */}
                                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r ${cert.color} blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity`}></div>
                                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-b ${cert.color} blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity`}></div>

                                <h3 className={`text-2xl font-bold mb-3 ${cert.accent}`}>{cert.name}</h3>
                                <p className="text-sm text-slate-300 font-medium leading-relaxed">{cert.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
