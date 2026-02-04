/**
 * Amendment Wizard Component
 * Step-by-step CAP creation that outputs GitHub-compatible markdown
 * 
 * FIXED ISSUES:
 * 1. Input fields no longer lose focus after each keystroke
 * 2. Constitution text selection properly accumulates multiple selections
 * 3. "Return to Wizard" button appears when selecting text from constitution
 */

export function renderWizard(state) {
    const step = state.wizardStep || 1;
    const wizard = state.wizardData || {
        type: 'CAP',
        category: '',
        title: '',
        abstract: '',
        motivation: '',
        selectedText: [],
        revisions: {},
        exhibits: '',
        coAuthors: []
    };

    return `
        <div class="max-w-5xl mx-auto pb-20 fade-in text-left">
            <!-- Header -->
            <header class="mb-12">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg text-white">
                        <i data-lucide="wand-2" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h1 class="text-5xl font-black italic tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
                            Amendment Wizard
                        </h1>
                        <p class="text-slate-500 text-lg font-medium mt-2">Step-by-step CAP creation made easy</p>
                    </div>
                </div>
            </header>

            <!-- Progress Bar -->
            <div class="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm p-8 mb-12">
                <div class="flex items-center justify-between mb-6">
                    ${[1, 2, 3, 4, 5, 6].map(i => `
                        <div class="flex flex-col items-center gap-2 flex-1">
                            <div class="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all ${
                                i < step ? 'bg-green-500 text-white' : 
                                i === step ? 'bg-blue-600 text-white scale-110' : 
                                'bg-slate-200 dark:bg-slate-800 text-slate-400'
                            }">
                                ${i < step ? '<i data-lucide="check" class="w-5 h-5"></i>' : i}
                            </div>
                            <span class="text-[9px] font-black uppercase tracking-widest ${i === step ? 'text-blue-600' : 'text-slate-400'} hidden sm:block">
                                ${['Type', 'Select', 'Propose', 'Explain', 'Review', 'Submit'][i-1]}
                            </span>
                        </div>
                        ${i < 6 ? `<div class="h-0.5 flex-1 ${i < step ? 'bg-green-500' : 'bg-slate-200 dark:bg-slate-800'} mx-2"></div>` : ''}
                    `).join('')}
                </div>
            </div>

            <!-- Step Content -->
            ${renderWizardStep(step, wizard, state)}

            <!-- Navigation Buttons -->
            <div class="flex items-center justify-between mt-12">
                ${step > 1 ? `
                    <button onclick="window.wizardPrevStep()" 
                        class="px-8 py-4 rounded-2xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-black text-sm uppercase tracking-widest hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-2">
                        <i data-lucide="arrow-left" class="w-4 h-4"></i>
                        Back
                    </button>
                ` : '<div></div>'}
                
                ${step < 6 ? `
                    <button onclick="window.wizardNextStep()" 
                        class="px-8 py-4 rounded-2xl bg-blue-600 text-white font-black text-sm uppercase tracking-widest hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-2 shadow-xl">
                        Next
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                ` : `
                    <button onclick="window.wizardSubmit()" 
                        class="px-12 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black text-sm uppercase tracking-widest hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-3 shadow-xl">
                        <i data-lucide="send" class="w-5 h-5"></i>
                        Submit to GitHub
                    </button>
                `}
            </div>

            <!-- GitHub Compatibility Note -->
            <div class="mt-8 p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                <div class="flex items-start gap-3">
                    <i data-lucide="info" class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"></i>
                    <div class="text-sm text-slate-600 dark:text-slate-300">
                        <p class="font-bold mb-1">GitHub Compatible</p>
                        <p>This wizard generates standard GitHub Issue markdown. Everything created here can be manually replicated in GitHub Issues using the same format.</p>
                    </div>
                </div>
            </div>
        </div>`;
}

function renderWizardStep(step, wizard, state) {
    switch(step) {
        case 1:
            return renderStep1Type(wizard);
        case 2:
            return renderStep2Select(wizard, state);
        case 3:
            return renderStep3Propose(wizard);
        case 4:
            return renderStep4Explain(wizard);
        case 5:
            return renderStep5Review(wizard);
        case 6:
            return renderStep6Submit(wizard);
        default:
            return '';
    }
}

function renderStep1Type(wizard) {
    const categories = [
        { id: 'Constitution', label: 'Constitution', desc: 'Direct amendments to the text of the Cardano Constitution.' },
        { id: 'Meta', label: 'Meta', desc: 'Adjustments to the CAP/CIS process or governance framework itself.' },
        { id: 'Guardrails', label: 'Guardrails', desc: 'Modifications to the technical and monetary guardrail systems.' },
        { id: 'Supporting', label: 'Supporting Documentation', desc: 'Providing technical guidance, evidence, or supporting documentation.' },
        { id: 'Other', label: 'Other', desc: 'Proposals that don\'t fit other categories.' }
    ];

    return `
        <div class="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm p-12">
            <h2 class="text-3xl font-black italic tracking-tighter text-slate-900 dark:text-white uppercase mb-8">Step 1: Choose Type</h2>
            
            <!-- CAP vs CIS Toggle -->
            <div class="mb-12">
                <label class="text-sm font-black text-slate-400 uppercase tracking-widest mb-4 block">Proposal Type</label>
                <div class="flex p-2 bg-slate-100 dark:bg-slate-800 rounded-2xl max-w-md">
                    <button onclick="window.updateWizard({type: 'CAP'}); window.updateUI(true);" 
                        class="flex-1 py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${wizard.type === 'CAP' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
                        CAP
                    </button>
                    <button onclick="window.updateWizard({type: 'CIS'}); window.updateUI(true);" 
                        class="flex-1 py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${wizard.type === 'CIS' ? 'bg-amber-500 text-white shadow-lg' : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
                        CIS
                    </button>
                </div>
                <p class="text-sm text-slate-500 mt-3">
                    ${wizard.type === 'CAP' ? 
                        '<strong>CAP (Constitution Amendment Proposal):</strong> Proposes specific changes to the constitution text.' : 
                        '<strong>CIS (Constitutional Issue Statement):</strong> Identifies a problem without proposing specific changes.'}
                </p>
            </div>

            <!-- Category Selection -->
            <div>
                <label class="text-sm font-black text-slate-400 uppercase tracking-widest mb-4 block">Category</label>
                <div class="grid grid-cols-1 gap-4">
                    ${categories.map(cat => `
                        <button onclick="window.updateWizard({category: '${cat.id}'}); window.updateUI(true);" 
                            class="p-6 rounded-2xl border-2 transition-all text-left ${
                                wizard.category === cat.id ? 
                                'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 
                                'border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-800'
                            }">
                            <div class="flex items-start gap-4">
                                <div class="w-10 h-10 rounded-xl ${wizard.category === cat.id ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-800'} flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="check" class="w-5 h-5 ${wizard.category === cat.id ? 'text-white' : 'text-slate-400'}"></i>
                                </div>
                                <div class="flex-1">
                                    <h3 class="font-black text-lg text-slate-900 dark:text-white mb-2">${cat.label}</h3>
                                    <p class="text-sm text-slate-600 dark:text-slate-400">${cat.desc}</p>
                                </div>
                            </div>
                        </button>
                    `).join('')}
                </div>
            </div>

            <!-- Title Input - FIXED: Uses oninput without immediate re-render -->
            <div class="mt-12">
                <label class="text-sm font-black text-slate-400 uppercase tracking-widest mb-4 block">Proposal Title</label>
                <input type="text" value="${wizard.title || ''}" 
                    oninput="state.wizardData.title = this.value;"
                    placeholder="Give your ${wizard.type} a clear, descriptive title..."
                    class="w-full p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-bold text-xl focus:border-blue-600 outline-none transition-all">
            </div>
        </div>`;
}

function renderStep2Select(wizard, state) {
    if (wizard.type === 'CIS') {
        // CIS doesn't need text selection
        return renderStep4Explain(wizard);
    }

    return `
        <div class="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm p-12">
            <h2 class="text-3xl font-black italic tracking-tighter text-slate-900 dark:text-white uppercase mb-4">Step 2: Select Text</h2>
            <p class="text-slate-500 mb-8">Choose the exact text from the constitution you want to change</p>
            
            <div class="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/30 mb-8">
                <div class="flex items-start gap-3">
                    <i data-lucide="lightbulb" class="w-5 h-5 text-blue-600 mt-1 flex-shrink-0"></i>
                    <div>
                        <p class="font-bold text-slate-900 dark:text-white mb-2">How to select text:</p>
                        <ol class="text-sm text-slate-600 dark:text-slate-300 space-y-1 list-decimal list-inside">
                            <li>Click "Browse Constitution" below</li>
                            <li>Highlight the text you want to change</li>
                            <li>Click "Add to CAP" in the popup that appears</li>
                            <li>Repeat steps 2-3 to add more selections</li>
                            <li>Click "Return to Wizard" when done selecting</li>
                        </ol>
                    </div>
                </div>
            </div>

            ${wizard.selectedText && wizard.selectedText.length > 0 ? `
                <div class="space-y-4 mb-8">
                    <label class="text-sm font-black text-slate-400 uppercase tracking-widest block">Selected Text (${wizard.selectedText.length})</label>
                    ${wizard.selectedText.map((sel, idx) => `
                        <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                            <div class="flex items-start justify-between gap-4 mb-3">
                                <div class="flex items-center gap-2">
                                    <span class="text-xs font-black px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full uppercase tracking-wider">Selection ${idx + 1}</span>
                                    <span class="text-xs text-slate-500">${sel.section || 'General'}</span>
                                </div>
                                <button onclick="window.removeWizardSelection(${idx})" class="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-lg transition-all">
                                    <i data-lucide="x" class="w-4 h-4"></i>
                                </button>
                            </div>
                            <p class="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">"${sel.text}"</p>
                        </div>
                    `).join('')}
                </div>
            ` : `
                <div class="text-center py-12 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
                    <i data-lucide="mouse-pointer-click" class="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto mb-4"></i>
                    <p class="text-slate-400 font-bold mb-4">No text selected yet</p>
                </div>
            `}

            <div class="flex gap-4">
                <button onclick="window.openConstitutionForWizard()" 
                    class="flex-1 px-8 py-5 rounded-2xl bg-blue-600 text-white font-black uppercase text-sm tracking-widest hover:-translate-y-1 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3">
                    <i data-lucide="book-open" class="w-5 h-5"></i>
                    Browse Constitution
                </button>
                
                <button onclick="window.manualTextEntry()" 
                    class="px-8 py-5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-black uppercase text-sm tracking-widest hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-2">
                    <i data-lucide="type" class="w-4 h-4"></i>
                    Add Manually
                </button>
            </div>
        </div>`;
}

function renderStep3Propose(wizard) {
    if (wizard.type === 'CIS') return renderStep4Explain(wizard);

    return `
        <div class="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm p-12">
            <h2 class="text-3xl font-black italic tracking-tighter text-slate-900 dark:text-white uppercase mb-4">Step 3: Propose Changes</h2>
            <p class="text-slate-500 mb-8">Write your proposed text for each selection</p>

            ${wizard.selectedText && wizard.selectedText.length > 0 ? `
                <div class="space-y-8">
                    ${wizard.selectedText.map((sel, idx) => `
                        <div class="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                            <div class="mb-6">
                                <div class="flex items-center gap-2 mb-4">
                                    <span class="text-xs font-black px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full uppercase tracking-wider">Revision ${idx + 1}</span>
                                    <span class="text-xs text-slate-500">${sel.section || 'General'}</span>
                                </div>
                                
                                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Original Text:</label>
                                <div class="p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border-l-4 border-red-500">
                                    <p class="text-sm text-slate-600 dark:text-slate-300 italic">"${sel.text}"</p>
                                </div>
                            </div>

                            <div>
                                <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Your Proposed Text:</label>
                                <textarea 
                                    oninput="state.wizardData.revisions[${idx}] = this.value;"
                                    placeholder="Write your proposed replacement text here..."
                                    class="w-full p-4 rounded-xl border-2 border-green-300 dark:border-green-800 bg-green-50 dark:bg-green-900/10 text-slate-900 dark:text-white focus:border-green-500 outline-none transition-all min-h-32 font-mono text-sm"
                                >${wizard.revisions[idx] || ''}</textarea>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : `
                <div class="text-center py-20 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
                    <i data-lucide="alert-circle" class="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto mb-4"></i>
                    <p class="text-slate-400 font-bold mb-2">No text selections yet</p>
                    <p class="text-sm text-slate-500">Go back to Step 2 to select constitution text</p>
                </div>
            `}
        </div>`;
}

function renderStep4Explain(wizard) {
    return `
        <div class="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm p-12">
            <h2 class="text-3xl font-black italic tracking-tighter text-slate-900 dark:text-white uppercase mb-4">Step ${wizard.type === 'CIS' ? '2' : '4'}: Explain Your ${wizard.type}</h2>
            <p class="text-slate-500 mb-8">Provide context and reasoning</p>

            <div class="space-y-8">
                <!-- Abstract -->
                <div>
                    <label class="text-sm font-black text-slate-400 uppercase tracking-widest mb-3 block">Abstract</label>
                    <p class="text-xs text-slate-500 mb-3">Brief summary of your proposal (2-3 sentences)</p>
                    <textarea 
                        oninput="state.wizardData.abstract = this.value;"
                        placeholder="Summarize the core idea of your ${wizard.type}..."
                        class="w-full p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:border-blue-600 outline-none transition-all min-h-32"
                    >${wizard.abstract || ''}</textarea>
                </div>

                <!-- Motivation -->
                <div>
                    <label class="text-sm font-black text-slate-400 uppercase tracking-widest mb-3 block">${wizard.type === 'CAP' ? 'Motivation' : 'Problem Statement'}</label>
                    <p class="text-xs text-slate-500 mb-3">${wizard.type === 'CAP' ? 'Why is this change necessary?' : 'Describe the issue in detail'}</p>
                    <textarea 
                        oninput="state.wizardData.motivation = this.value;"
                        placeholder="${wizard.type === 'CAP' ? 'Explain why the constitution should be changed...' : 'Describe the problem you\'ve identified...'}"
                        class="w-full p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:border-blue-600 outline-none transition-all min-h-48"
                    >${wizard.motivation || ''}</textarea>
                </div>

                <!-- Supporting Exhibits -->
                <div>
                    <label class="text-sm font-black text-slate-400 uppercase tracking-widest mb-3 block">Supporting Links (Optional)</label>
                    <p class="text-xs text-slate-500 mb-3">Links to research, discussions, or related documents</p>
                    <textarea 
                        oninput="state.wizardData.exhibits = this.value;"
                        placeholder="- Link 1
- Link 2"
                        class="w-full p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:border-blue-600 outline-none transition-all min-h-24"
                    >${wizard.exhibits || ''}</textarea>
                </div>

                <!-- Co-Authors -->
                <div>
                    <label class="text-sm font-black text-slate-400 uppercase tracking-widest mb-3 block">Co-Authors (Optional)</label>
                    <p class="text-xs text-slate-500 mb-3">GitHub usernames of co-authors (comma separated)</p>
                    <input type="text" 
                        oninput="state.wizardData.coAuthors = this.value.split(',').map(s => s.trim()).filter(Boolean);"
                        value="${wizard.coAuthors ? wizard.coAuthors.join(', ') : ''}"
                        placeholder="@username1, @username2"
                        class="w-full p-4 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:border-blue-600 outline-none transition-all">
                </div>
            </div>
        </div>`;
}

function renderStep5Review(wizard) {
    const preview = generateGitHubMarkdown(wizard);
    
    return `
        <div class="space-y-8">
            <div class="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm p-12">
                <h2 class="text-3xl font-black italic tracking-tighter text-slate-900 dark:text-white uppercase mb-4">Step ${wizard.type === 'CIS' ? '3' : '5'}: Review</h2>
                <p class="text-slate-500 mb-8">Check everything before submitting</p>

                <!-- Summary -->
                <div class="grid grid-cols-2 gap-6 mb-8">
                    <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                        <p class="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Type</p>
                        <p class="text-xl font-black text-slate-900 dark:text-white">${wizard.type}</p>
                    </div>
                    <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                        <p class="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Category</p>
                        <p class="text-xl font-black text-slate-900 dark:text-white">${wizard.category}</p>
                    </div>
                </div>

                <div class="mb-8">
                    <p class="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Title</p>
                    <p class="text-2xl font-black text-slate-900 dark:text-white">${wizard.title}</p>
                </div>

                ${wizard.type === 'CAP' && wizard.selectedText && wizard.selectedText.length > 0 ? `
                    <div class="mb-8">
                        <p class="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Proposed Changes</p>
                        <p class="text-lg font-bold text-blue-600">${wizard.selectedText.length} revision${wizard.selectedText.length !== 1 ? 's' : ''}</p>
                    </div>
                ` : ''}

                <div class="flex items-center gap-4">
                    <button onclick="window.copyGitHubMarkdown()" 
                        class="px-8 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black uppercase text-sm tracking-widest hover:-translate-y-1 active:scale-95 transition-all shadow-xl flex items-center gap-3">
                        <i data-lucide="clipboard" class="w-5 h-5"></i>
                        Copy for GitHub
                    </button>
                    <p class="text-xs text-slate-500">You can paste this directly into a GitHub Issue</p>
                </div>
            </div>

            <!-- Markdown Preview -->
            <div class="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm p-12">
                <div class="flex items-center justify-between mb-6">
                    <h3 class="text-xl font-black text-slate-900 dark:text-white uppercase">GitHub Markdown Preview</h3>
                    <span class="text-xs font-black px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full uppercase tracking-wider">Read-Only</span>
                </div>
                <pre class="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl overflow-x-auto text-xs font-mono text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 max-h-96">${escapeHtml(preview)}</pre>
            </div>
        </div>`;
}

function renderStep6Submit(wizard) {
    return `
        <div class="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm p-12 text-center">
            <div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i data-lucide="check" class="w-10 h-10 text-white"></i>
            </div>
            <h2 class="text-4xl font-black italic tracking-tighter text-slate-900 dark:text-white uppercase mb-4">Ready to Submit!</h2>
            <p class="text-slate-500 text-lg mb-8 max-w-2xl mx-auto">Your ${wizard.type} is ready to be posted to GitHub. Clicking submit will create a new GitHub Issue.</p>

            <div class="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-2xl border border-blue-100 dark:border-blue-900/30 max-w-2xl mx-auto mb-8">
                <div class="flex items-start gap-4 text-left">
                    <i data-lucide="info" class="w-6 h-6 text-blue-600 mt-1 flex-shrink-0"></i>
                    <div class="text-sm text-slate-600 dark:text-slate-300">
                        <p class="font-bold mb-3">What happens next:</p>
                        <ul class="space-y-2">
                            <li class="flex items-start gap-2">
                                <span class="text-blue-600 font-bold">1.</span>
                                <span>Your ${wizard.type} will be created as a GitHub Issue</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <span class="text-blue-600 font-bold">2.</span>
                                <span>The proposal will be open for discussion for 30 days</span>
                            </li>
                            ${wizard.type === 'CAP' && wizard.selectedText && wizard.selectedText.length > 0 ? `
                                <li class="flex items-start gap-2">
                                    <span class="text-blue-600 font-bold">3.</span>
                                    <span>A constitution preview will be automatically generated</span>
                                </li>
                            ` : ''}
                            <li class="flex items-start gap-2">
                                <span class="text-blue-600 font-bold">${wizard.type === 'CAP' && wizard.selectedText && wizard.selectedText.length > 0 ? '4' : '3'}.</span>
                                <span>Community can comment and discuss</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center gap-4">
                <button onclick="window.wizardReset()" 
                    class="px-8 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-black uppercase text-sm tracking-widest hover:-translate-y-1 active:scale-95 transition-all">
                    Start Over
                </button>
            </div>
        </div>`;
}

function generateGitHubMarkdown(wizard) {
    let markdown = `### Abstract\n${wizard.abstract || 'Not provided'}\n\n`;
    markdown += `### ${wizard.type === 'CAP' ? 'Motivation' : 'Statement of Problem'}\n${wizard.motivation || 'Not provided'}\n\n`;
    
    if (wizard.type === 'CAP' && wizard.selectedText && wizard.selectedText.length > 0) {
        markdown += `### Structured Revisions (Contextual)\n\n`;
        wizard.selectedText.forEach((sel, idx) => {
            markdown += `#### Revision #${idx + 1}: ${sel.section || 'General'}\n`;
            markdown += `**Original Text:**\n> ${sel.text}\n\n`;
            markdown += `**Proposed Revision:**\n${wizard.revisions[idx] || 'Not provided'}\n\n`;
        });
    }
    
    markdown += `### Supporting Exhibits (Links)\n${wizard.exhibits || 'None provided.'}\n\n`;
    
    if (wizard.coAuthors && wizard.coAuthors.length > 0) {
        markdown += `### Co-Authors\n${wizard.coAuthors.map(a => `- @${a.replace('@', '')}`).join('\n')}\n\n`;
    }
    
    markdown += `### Attached Files\nPending upload...\n\n`;
    const expiry = new Date(Date.now() + (30 * 24 * 60 * 60 * 1000)).toISOString();
    markdown += `### Proposal Details\n- **License:** CC-BY-4.0\n- **Review Ends:** ${new Date(expiry).toLocaleDateString()}\n\n`;
    markdown += `<!-- DELIBERATION_END: ${expiry} -->`;
    
    return markdown;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
