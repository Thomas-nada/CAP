/**
 * Landing Component
 * Renders the initial entrance screen for unauthenticated users.
 * Updated to display the transparent CAP logo without background containers.
 */
export function renderLanding() {
    return `
        <div class="min-h-screen flex flex-col items-center justify-center p-6 text-center fade-in relative overflow-hidden">
            <!-- Background glow effect -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full"></div>
            
            <div class="relative z-10">
                <!-- Logo -->
                <div class="w-28 h-28 p-5 bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-800 mx-auto mb-10 flex items-center justify-center">
                    <img src="CAP.png" alt="CAP Logo" class="w-full h-full object-contain dark:invert">
                </div>

                <h1 class="text-6xl sm:text-8xl font-black tracking-tighter mb-6 italic text-slate-900 dark:text-white">
                    CAP Portal
                </h1>

                <p class="text-slate-400 font-black text-xs uppercase tracking-[0.3em] mb-8">
                    Cardano Amendment Process
                </p>

                <p class="text-slate-500 font-medium text-xl max-w-xl mx-auto mb-16 leading-relaxed">
                    Draft, deliberate, and ratify amendments to the Cardano Constitution — transparently, on-chain, and open to all.
                </p>

                <!-- Authentication Action -->
                <button onclick="window.login()" class="group bg-slate-950 dark:bg-white dark:text-slate-950 text-white px-16 py-7 rounded-3xl font-black text-2xl shadow-2xl flex items-center gap-6 hover:scale-105 active:scale-95 transition-all mx-auto">
                    <i data-lucide="github" class="w-8 h-8"></i>
                    Sign in with GitHub
                    <i data-lucide="arrow-right" class="w-6 h-6 group-hover:translate-x-2 transition-transform"></i>
                </button>

                <p class="mt-12 text-slate-300 dark:text-slate-600 font-bold text-xs uppercase tracking-[0.3em]">
                    Open Source · CC-BY-4.0 · Built on GitHub
                </p>
            </div>
        </div>`;
}