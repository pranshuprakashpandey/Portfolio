import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Senior Security Specialist | Portfolio",
  description: "Securing Innovation through Governance & Risk Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased bg-slate-950 text-slate-50 relative min-h-screen bg-grid-pattern`}>
        {/* Global ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[150px] rounded-[100%] pointer-events-none -z-10"></div>
        {children}
      </body>
    </html>
  );
}
