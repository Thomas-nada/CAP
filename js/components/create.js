/**
 * Helper to render a consistent formatting toolbar for any textarea.
 * Maps to window.applyMarkdown in app.js.
 */
function renderToolbar(targetId) {
    const tools = [
        { id: 'bold', icon: 'bold', label: 'Bold' },
        { id: 'italic', icon: 'italic', label: 'Italic' },
        { id: 'heading', icon: 'heading', label: 'H3' },
        { id: 'list', icon: 'list', label: 'Bullets' },
        { id: 'numlist', icon: 'list-ordered', label: 'Numbered' },
        { id: 'link', icon: 'link', label: 'Link' }
    ];

    return `
        <div class="flex items-center gap-1 p-2 bg-slate-100 dark:bg-slate-800/50 rounded-2xl mb-2 w-fit border border-slate-200/50 dark:border-slate-700/50">
            ${tools.map(t => `
                <button type="button" onclick="window.applyMarkdown('${targetId}', '${t.id}')" 
                    class="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-all text-slate-500 hover:text-blue-600 focus:outline-none" title="${t.label}">
                    <i data-lucide="${t.icon}" class="w-4 h-4"></i>
                </button>
            `).join('')}
        </div>`;
}

/**
 * Create Component
 * Standardized intake for Constitutional Amendment Proposals (CAP) 
 * and Constitutional Issue Statements (CIS).
 */
export function renderCreate(state) {
    const isCIS = state.createType === 'CIS';
    const refs = state.selectedReferences || [];
    const draft = state.draft;

    const categories = [
        { id: 'Meta', label: 'Meta', desc: 'Adjustments to the CIP process or governance framework itself.' },
        { id: 'Constitution', label: 'Constitution', desc: 'Direct amendments to the text of the Cardano Constitution.' },
        { id: 'Guardrails', label: 'Guardrails', desc: 'Modifications to the technical and monetary guardrail systems.' },
        { id: 'Supporting', label: 'Supporting Documentation', desc: 'Providing technical guidance, evidence, or supporting documentation.' },
        { id: 'Other', label: 'Other', desc: 'Proposals that fall outside the defined institutional categories.' }
    ];

    return `
        <div class="max-w-4xl mx-auto pb-20 text-left fade-in">
            <!-- Header Section -->
            <header class="mb-16">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-slate-900 dark:bg-white rounded-2xl flex items-center justify-center shadow-lg text-white dark:text-slate-900">
                        <i data-lucide="${isCIS ? 'alert-octagon' : 'plus-square'}" class="w-6 h-6"></i>
                    </div>
                    <h1 class="text-6xl font-black italic tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
                        ${isCIS ? 'Flag Issue' : 'Initialize'}
                    </h1>
                </div>
                <p class="text-slate-500 text-xl font-medium">
                    ${isCIS ? 'Identify a structural problem within the institutional layer.' : 'Draft a formal amendment for the Cardano Constitution.'}
                </p>
            </header>

            <!-- Proposal Type Toggle -->
            <div class="flex p-2 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm mb-12 max-w-md">
                <button onclick="window.setCreateType('CAP')" 
                    class="flex-1 py-4 rounded-[2.5rem] text-sm font-black uppercase tracking-widest transition-all ${!isCIS ? 'bg-blue-600 text-white shadow-xl' : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
                    CAP
                </button>
                <button onclick="window.setCreateType('CIS')" 
                    class="flex-1 py-4 rounded-[2.5rem] text-sm font-black uppercase tracking-widest transition-all ${isCIS ? 'bg-amber-500 text-white shadow-xl' : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
                    CIS
                </button>
            </div>

            ${!isCIS && refs.length > 0 ? `
            <!-- CAP Constitution Preview Info -->
            <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-[2.5rem] border border-blue-100 dark:border-blue-800/30 mb-12">
                <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <i data-lucide="sparkles" class="w-6 h-6 text-white"></i>
                    </div>
                    <div class="flex-1">
                        <h3 class="text-lg font-black text-slate-900 dark:text-white mb-2">Constitution Preview Will Be Generated</h3>
                        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                            Since you're proposing changes to the constitution text, a preview version will be automatically created when you submit this CAP. This preview will:
                        </p>
                        <ul class="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                            <li class="flex items-start gap-2">
                                <i data-lucide="check" class="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0"></i>
                                <span>Apply your proposed changes to the current constitution</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <i data-lucide="check" class="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0"></i>
                                <span>Be saved in <code class="text-xs bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded font-mono">constitution/CAP Constitutions/</code></span>
                            </li>
                            <li class="flex items-start gap-2">
                                <i data-lucide="check" class="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0"></i>
                                <span>Appear in the Constitution diff viewer for side-by-side comparison</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <i data-lucide="check" class="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0"></i>
                                <span>Help reviewers visualize the exact changes you're proposing</span>
                            </li>
                        </ul>
                        <p class="text-xs text-blue-600 dark:text-blue-400 mt-4 font-bold">
                            💡 Tip: After submission, go to the Constitution page → Select your CAP preview from the dropdown → Compare it with the current version
                        </p>
                    </div>
                </div>
            </div>
            ` : ''}

            <form onsubmit="window.handleForm(event)" class="space-y-12">
                
                <!-- Section 1: Classification & Core Meta -->
                <div class="bg-white dark:bg-slate-900 p-10 sm:p-14 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-sm space-y-10">
                    <div class="space-y-10">
                        <!-- Proposal Title -->
                        <div class="space-y-3">
                            <label class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 ml-4">${isCIS ? 'Issue' : 'Proposal'} Title</label>
                            <input name="title" id="create-title" required value="${draft.title || ''}" 
                                oninput="window.updateDraftField('title', this.value)"
                                placeholder="Name your governance record..." 
                                class="w-full bg-slate-50 dark:bg-slate-950 p-6 rounded-3xl text-2xl font-black outline-none border-2 border-transparent focus:border-blue-600 transition-all text-slate-900 dark:text-white">
                        </div>

                        <!-- Category Selection -->
                        <div class="space-y-6">
                            <label class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Working Category</label>
                            <div class="relative">
                                <select id="category-select" name="category" required 
                                    onchange="window.updateDraftField('category', this.value); document.getElementById('cat-desc').innerText = this.options[this.selectedIndex].dataset.desc"
                                    class="w-full bg-slate-50 dark:bg-slate-950 p-6 rounded-3xl font-bold outline-none border-2 border-transparent focus:border-blue-600 appearance-none text-slate-900 dark:text-white cursor-pointer">
                                    <option value="" disabled ${!draft.category ? 'selected' : ''}>Select a classification...</option>
                                    ${categories.map(c => `<option value="${c.id}" data-desc="${c.desc}" ${draft.category === c.id ? 'selected' : ''}>${c.label}</option>`).join('')}
                                </select>
                                <i data-lucide="chevron-down" class="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none"></i>
                            </div>
                            <div class="mx-4 p-4 bg-slate-50 dark:bg-slate-950/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <p id="cat-desc" class="text-xs font-medium text-slate-400 italic leading-relaxed">
                                    ${draft.category ? categories.find(c => c.id === draft.category).desc : 'Select a category to see its institutional purpose.'}
                                </p>
                            </div>
                        </div>

                        <!-- Abstract -->
                        <div class="space-y-3">
                            <label class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Executive Abstract</label>
                            ${renderToolbar('create-abstract')}
                            <textarea name="abstract" id="create-abstract" required oninput="window.updateDraftField('abstract', this.value)"
                                placeholder="A high-level summary of the entry..." 
                                class="w-full bg-slate-50 dark:bg-slate-950 p-6 rounded-3xl min-h-[120px] font-medium text-lg outline-none border-2 border-transparent focus:border-blue-600 transition-all text-slate-900 dark:text-white resize-none">${draft.abstract || ''}</textarea>
                        </div>
                    </div>
                </div>

                <!-- Section 2: Structured Contextual Revisions (The Cards) -->
                <div class="space-y-6">
                    <div class="flex items-center justify-between px-8">
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-8 bg-blue-600 rounded-full"></div>
                            <h2 class="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Contextual Revisions</h2>
                        </div>
                        <button type="button" onclick="window.setView('constitution')" class="text-[10px] font-black uppercase tracking-widest text-blue-600 hover:underline">
                            + Reference Constitution
                        </button>
                    </div>

                    ${refs.length === 0 ? `
                        <div class="bg-white/50 dark:bg-slate-900/50 border-2 border-dashed border-slate-200 dark:border-slate-800 p-16 rounded-[4rem] text-center">
                            <p class="text-slate-400 font-bold text-sm italic">No segments selected. Highlight text in the Constitution to begin.</p>
                        </div>
                    ` : refs.map((ref, idx) => `
                        <div class="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-sm space-y-8 relative group">
                            <button type="button" onclick="window.removeReference('${ref.id}')" class="absolute top-8 right-8 text-red-400 opacity-0 group-hover:opacity-100 transition-all hover:bg-red-50 p-2 rounded-full">
                                <i data-lucide="x" class="w-6 h-6"></i>
                            </button>
                            <div class="space-y-4">
                                <span class="bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest">Source: ${ref.section}</span>
                                <div class="bg-slate-50 dark:bg-slate-950 p-6 rounded-3xl italic text-slate-500 text-lg leading-relaxed border border-slate-100 dark:border-slate-800 shadow-inner">"${ref.text}"</div>
                            </div>
                            <div class="space-y-3">
                                <label class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 ml-4">${isCIS ? 'Problem identification' : 'Proposed amendment'}</label>
                                ${renderToolbar(`ref-input-${ref.id}`)}
                                <textarea name="ref-input-${ref.id}" id="ref-input-${ref.id}" required oninput="window.updateDraftField('ref-input-${ref.id}', this.value)"
                                    class="w-full bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] min-h-[150px] font-medium text-lg outline-none border-2 border-blue-100 dark:border-blue-900/30 focus:border-blue-600 transition-all text-slate-900 dark:text-white shadow-inner">${draft.revisions[ref.id] || ''}</textarea>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Section 3: Motivation & Institutional Exhibits -->
                <div class="bg-white dark:bg-slate-900 p-10 sm:p-14 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-sm space-y-12">
                    <div class="space-y-3">
                        <label class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">${isCIS ? 'Statement of Problem' : 'Motivation'}</label>
                        ${renderToolbar('create-motivation')}
                        <textarea name="motivation" id="create-motivation" required oninput="window.updateDraftField('motivation', this.value)"
                            placeholder="The logic and necessity behind this record..."
                            class="w-full bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl min-h-[200px] font-medium text-lg outline-none border-2 border-transparent focus:border-blue-600 transition-all text-slate-900 dark:text-white">${draft.motivation || ''}</textarea>
                    </div>

                    <!-- Assets Block -->
                    <div class="pt-10 border-t border-slate-50 dark:border-slate-800 space-y-10">
                        <div class="flex items-center gap-3">
                            <i data-lucide="paperclip" class="w-4 h-4 text-blue-600"></i>
                            <h3 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Institutional Assets</h3>
                        </div>
                        
                        <!-- Links -->
                        <div class="space-y-3">
                            <label class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4 italic">External References & Links</label>
                            ${renderToolbar('create-exhibits')}
                            <textarea name="specification_extra" id="create-exhibits" oninput="window.updateDraftField('exhibits', this.value)"
                                placeholder="Paste relevant URLs (research, CIPs, datasets)..." class="w-full bg-slate-50 dark:bg-slate-950 p-6 rounded-3xl min-h-[120px] font-medium text-lg outline-none border-2 border-transparent focus:border-blue-600 text-slate-900 dark:text-white resize-none">${draft.exhibits || ''}</textarea>
                        </div>

                        <!-- Formal File Attachments -->
                        <div class="space-y-4">
                            <label class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4 italic">File Evidence (Archived Internal)</label>
                            <div class="relative group">
                                <input type="file" multiple class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    onchange="window.handleFileSelect(this.files)">
                                <div class="w-full bg-slate-50 dark:bg-slate-950 p-10 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-slate-800 group-hover:border-blue-400 transition-all text-center">
                                    <i data-lucide="upload-cloud" class="w-8 h-8 text-slate-300 mx-auto mb-4 group-hover:text-blue-600"></i>
                                    <p class="text-sm font-bold text-slate-400">Click or drag documents to upload</p>
                                    <p class="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-2">Will be synthesized into Hidden Metadata</p>
                                </div>
                            </div>
                            
                            <!-- Persisted File List with removal logic -->
                            <div class="space-y-2 mt-4 px-4">
                                ${draft.files.map((file, i) => `
                                    <div class="flex items-center justify-between p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30 animate-in fade-in slide-in-from-left-2">
                                        <div class="flex items-center gap-3 text-xs font-bold text-blue-600">
                                            <i data-lucide="file-text" class="w-4 h-4"></i> ${file.name}
                                            <span class="text-[9px] opacity-50 uppercase">${(file.type || 'document').split('/').pop()}</span>
                                        </div>
                                        <button type="button" onclick="window.removeDraftFile(${i})" class="text-red-400 hover:text-red-600 p-1 transition-colors">
                                            <i data-lucide="trash-2" class="w-4 h-4"></i>
                                        </button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section 4: Governance Acknowledgments -->
                <div class="bg-blue-50/50 dark:bg-blue-900/10 p-10 sm:p-14 rounded-[4rem] border border-blue-100 dark:border-blue-800/30 space-y-8">
                    <h3 class="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 ml-4 mb-4">Governance Acknowledgments</h3>
                    
                    <div class="space-y-6">
                        <label class="flex items-start gap-4 cursor-pointer group">
                            <div class="relative flex items-center justify-center mt-1">
                                <input type="checkbox" required class="peer appearance-none w-6 h-6 border-2 border-blue-200 dark:border-blue-800 rounded-lg checked:bg-blue-600 transition-all">
                                <i data-lucide="check" class="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"></i>
                            </div>
                            <span class="text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors leading-relaxed">
                                I understand this submission initiates a mandatory 30-day deliberation cycle as defined by the Constitution.
                            </span>
                        </label>

                        <label class="flex items-start gap-4 cursor-pointer group">
                            <div class="relative flex items-center justify-center mt-1">
                                <input type="checkbox" required class="peer appearance-none w-6 h-6 border-2 border-blue-200 dark:border-blue-800 rounded-lg checked:bg-blue-600 transition-all">
                                <i data-lucide="check" class="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"></i>
                            </div>
                            <span class="text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors leading-relaxed">
                                I agree to license this document and all associated exhibits under <span class="text-blue-600 underline decoration-2 underline-offset-4">CC-BY-4.0</span>.
                            </span>
                        </label>
                    </div>
                </div>

                <!-- Final Action -->
                <button type="submit" ${state.loading.submitting ? 'disabled' : ''} 
                    class="w-full group bg-slate-950 dark:bg-white text-white dark:text-slate-950 p-10 rounded-[3rem] text-3xl font-black shadow-2xl hover:-translate-y-2 active:scale-95 transition-all flex items-center justify-center gap-6 disabled:opacity-50">
                    ${state.loading.submitting ? 
                        `<div class="w-8 h-8 border-4 border-slate-400 border-t-white dark:border-slate-200 dark:border-t-slate-950 rounded-full animate-spin"></div> Syncing Entry...` : 
                        `Sync Governance Entry <i data-lucide="send" class="w-8 h-8 group-hover:translate-x-3 transition-transform"></i>`
                    }
                </button>
            </form>
        </div>`;
}