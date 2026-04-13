/**
 * Landing Component
 * Shown when no token is configured. Lets users paste their GitHub PAT directly.
 */
export function renderLanding() {
    return `
        <div class="min-h-screen flex flex-col items-center justify-center p-6 text-center fade-in relative overflow-hidden">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full"></div>

            <div class="relative z-10 w-full max-w-lg">
                <div class="w-28 h-28 mx-auto mb-10 flex items-center justify-center">
                    <img src="CAP.png" alt="CAP Logo" class="w-28 h-28 object-contain dark:brightness-0 dark:invert">
                </div>

                <h1 class="text-6xl sm:text-8xl font-black tracking-tighter mb-6 italic text-slate-900 dark:text-white">
                    CAP Portal
                </h1>

                <p class="text-slate-400 font-black text-xs uppercase tracking-[0.3em] mb-12">
                    Cardano Amendment Process
                </p>

                <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 text-left shadow-xl">
                    <div class="flex items-center gap-3 mb-2">
                        <i data-lucide="github" class="w-5 h-5 text-slate-700 dark:text-slate-300 flex-shrink-0"></i>
                        <span class="font-black text-slate-800 dark:text-slate-200 uppercase tracking-widest text-sm">Sign in with GitHub</span>
                    </div>
                    <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                        Enter a GitHub Personal Access Token with <strong>repo</strong> scope.
                        <a href="https://github.com/settings/tokens/new?scopes=repo&description=CAP+Portal" target="_blank"
                           class="text-blue-600 hover:underline ml-1">Generate one here →</a>
                    </p>

                    <div class="flex gap-2">
                        <input
                            id="token-input"
                            type="password"
                            placeholder="ghp_••••••••••••••••••••••"
                            class="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-sm font-mono text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onkeydown="if(event.key==='Enter') window.submitToken()"
                        />
                        <button
                            onclick="window.submitToken()"
                            class="px-5 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-sm font-black uppercase tracking-wider hover:opacity-80 transition-opacity flex items-center gap-2 flex-shrink-0">
                            <i data-lucide="log-in" class="w-4 h-4"></i>
                            Enter
                        </button>
                    </div>

                    <p id="token-error" class="hidden mt-3 text-red-500 text-xs font-bold"></p>
                </div>

                <p class="mt-10 text-slate-300 dark:text-slate-600 font-bold text-xs uppercase tracking-[0.3em]">
                    Open Source · CC-BY-4.0 · Built on GitHub
                </p>
            </div>
        </div>`;
}
