export default function Stats() {
    const metrics = [
        {
            value: "300+",
            label: "Apps",
            description: "Led end-to-end security assessments.",
        },
        {
            value: "2,000+",
            label: "Apps",
            description: "Acted as Security SME for remediation.",
        },
        {
            value: "12-Member",
            label: "Team",
            description: "Led cross-functional security delivery specialists.",
        },
        {
            value: "8+",
            label: "Mentees",
            description: "Trained resources now delivering client value.",
        },
    ];

    return (
        <section className="py-24 relative z-10">
            <div className="container mx-auto px-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] flex flex-col justify-center hardware-accelerated"
                        >
                            <div className="flex items-baseline gap-3 mb-3">
                                <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-emerald-600 block">
                                    {metric.value}
                                </span>
                                <span className="text-xl font-bold text-slate-200">
                                    {metric.label}
                                </span>
                            </div>
                            <p className="text-slate-400 leading-relaxed font-medium">
                                {metric.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
