/**
 * Landing Component
 * Shown when no token is present. Offers GitHub OAuth login.
 */
export function renderLanding() {
    return `
        <div class="min-h-screen flex flex-col items-center justify-center p-6 text-center fade-in relative overflow-hidden">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full"></div>

            <div class="relative z-10 w-full max-w-sm">
                <div class="w-28 h-28 mx-auto mb-10 flex items-center justify-center">
                    <img src="CAP.png" alt="CAP Logo" class="w-28 h-28 object-contain dark:brightness-0 dark:invert">
                </div>

                <h1 class="text-6xl sm:text-8xl font-black tracking-tighter mb-6 italic text-slate-900 dark:text-white">
                    CAP Portal
                </h1>

                <p class="text-slate-400 font-black text-xs uppercase tracking-[0.3em] mb-12">
                    Constitutional Amendment Process
                </p>

                <button
                    onclick="window.loginWithGitHub()"
                    class="w-full flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-sm font-black uppercase tracking-widest hover:opacity-80 transition-opacity shadow-xl">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Login with GitHub
                </button>

                <p class="mt-8 text-slate-300 dark:text-slate-600 font-bold text-xs uppercase tracking-[0.3em]">
                    Open Source · CC-BY-4.0 · Built on GitHub
                </p>
            </div>
        </div>`;
}
