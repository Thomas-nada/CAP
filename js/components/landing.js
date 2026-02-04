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
                <!-- Brand Identity: Transparent Logo Display -->
                <div class="w-32 h-32 mb-10 mx-auto flex items-center justify-center">
                    <img src="CAP.png" alt="CAP Logo" class="w-full h-full object-contain">
                </div>
                
                <h1 class="text-6xl sm:text-8xl font-black tracking-tighter mb-8 italic text-slate-900 dark:text-white">
                    Governance<br/>Portal
                </h1>
                
                <p class="text-slate-500 font-medium text-xl max-w-xl mx-auto mb-16 leading-relaxed">
                    Draft, refine, and ratify Constitution Amendment Proposals with full transparency and cryptographically secure versioning.
                </p>
                
                <!-- Authentication Action -->
                <button onclick="window.login()" class="group bg-slate-950 dark:bg-white dark:text-slate-950 text-white px-16 py-7 rounded-3xl font-black text-2xl shadow-2xl flex items-center gap-6 hover:scale-105 active:scale-95 transition-all">
                    <i data-lucide="github" class="w-8 h-8"></i> 
                    Authorize via GitHub
                    <i data-lucide="arrow-right" class="w-6 h-6 group-hover:translate-x-2 transition-transform"></i>
                </button>
                
                <p class="mt-12 text-slate-400 font-bold text-xs uppercase tracking-[0.3em]">
                    Institutional Grade Governance Layer
                </p>
            </div>
        </div>`;
}