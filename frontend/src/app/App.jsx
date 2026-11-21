import React from "react";

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl border border-neutral-800 p-8 rounded-lg bg-neutral-950">
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
          [SYS.LOC] NEW DELHI, INDIA // STATUS: OPERATIONAL
        </p>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Abu Fazal
        </h1>
        <p className="text-sm font-mono text-neutral-400 mb-6">
          Full Stack Developer | MERN Stack Specialist | Tech Educator
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-700 rounded text-xs font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Phase 0 Boilerplate Ready
        </div>
      </div>
    </main>
  );
}
