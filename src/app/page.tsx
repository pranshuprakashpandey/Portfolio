import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CaseStudies from "@/components/CaseStudies";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main className="flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      {/* Header/Nav */}
      <header className="fixed top-0 w-full bg-slate-950/70 backdrop-blur-xl border-b border-white/5 z-50 transition-all">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-extrabold text-2xl tracking-tighter text-white">
            Pranshu <span className="text-emerald-400">Security</span>
          </div>
          <nav className="hidden md:flex gap-10 text-sm font-bold text-slate-300 tracking-wide uppercase">
            <a href="#case-studies" className="hover:text-emerald-400 transition-colors">Case Studies</a>
            <a href="#certifications" className="hover:text-emerald-400 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow pt-20">
        <Hero />
        <Stats />
        <CaseStudies />
        <Certifications />
      </div>

      {/* Footer */}
      <footer id="contact" className="py-20 relative overflow-hidden border-t border-white/5 bg-slate-900/50">
        {/* Footer Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-emerald-400 font-semibold text-sm mb-6 tracking-wide uppercase">
            Collaborate
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 tracking-tight">
            Ready to secure your future?
          </h2>
          <a href="mailto:contact@example.com" className="inline-block px-10 py-5 bg-emerald-500 text-slate-950 font-extrabold text-lg rounded-2xl hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transform hover:-translate-y-1">
            Let's Connect
          </a>
          <p className="mt-20 text-sm text-slate-500 font-semibold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Pranshu | Senior GRC Security Engineer
          </p>
        </div>
      </footer>
    </main>
  );
}
