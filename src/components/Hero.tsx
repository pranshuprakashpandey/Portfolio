export default function Hero() {
    return (
        <section className="relative w-full pt-40 pb-32 overflow-hidden flex flex-col items-center text-center">
            {/* Background ambient glow specific to hero */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
                <div className="max-w-5xl">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-emerald-400 font-semibold text-sm mb-8 tracking-wide uppercase">
                        Senior GRC Security Engineer
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] text-white mb-8">
                        Securing <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Innovation</span><br />
                        through Governance.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
                        Team Lead specializing in{" "}
                        <span className="text-slate-200 font-semibold">Secure by Design</span>,{" "}
                        <span className="text-slate-200 font-semibold">AI Security</span>, and{" "}
                        <span className="text-slate-200 font-semibold">Cloud Compliance</span>.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="#case-studies" className="px-8 py-4 bg-emerald-500 text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transform hover:-translate-y-1">
                            View Case Studies
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-white/5 backdrop-blur-md text-white font-semibold rounded-xl border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
