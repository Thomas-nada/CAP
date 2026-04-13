/**
 * Landing Component
 * Shown when no token is configured in js/env.js.
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

                <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-3xl p-8 text-left">
                    <div class="flex items-center gap-3 mb-4">
                        <i data-lucide="key" class="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0"></i>
                        <span class="font-black text-amber-800 dark:text-amber-300 uppercase tracking-widest text-sm">Setup required</span>
                    </div>
                    <p class="text-slate-700 dark:text-slate-300 mb-5 leading-relaxed">
                        Open <code class="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-mono text-sm">.env</code> and set your GitHub Personal Access Token:
                    </p>
                    <pre class="bg-slate-950 text-green-400 rounded-2xl p-5 text-sm font-mono overflow-x-auto mb-5">GITHUB_TOKEN=ghp_your_token_here</pre>
                    <p class="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                        Generate a token at <span class="font-mono">github.com/settings/tokens</span> with <strong>repo</strong> scope, then reload this page.
                    </p>
                </div>

                <p class="mt-10 text-slate-300 dark:text-slate-600 font-bold text-xs uppercase tracking-[0.3em]">
                    Open Source · CC-BY-4.0 · Built on GitHub
                </p>
            </div>
        </div>`;
}
