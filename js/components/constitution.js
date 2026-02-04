/**
 * Constitution Component with Version Diff Viewer
 * Enables users to compare different versions of the constitution
 * and select text from the current version to add to proposals.
 * 
 * IMPROVEMENTS:
 * - Sticky action panel that stays visible during text selection
 * - Inline toast notifications instead of popup alerts
 */

export function renderConstitution(state) {
    if (state.loading.constitution) {
        return `
            <div class="flex items-center justify-center py-40">
                <div class="flex flex-col items-center gap-6">
                    <div class="w-16 h-16 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
                    <p class="text-slate-400 font-bold uppercase tracking-widest text-xs text-center">Loading Constitution Versions...</p>
                </div>
            </div>`;
    }

    if (!state.constitutionVersions || state.constitutionVersions.length === 0) {
        return `
            <div class="max-w-7xl mx-auto pb-20 fade-in text-center">
                <div class="bg-white dark:bg-slate-900 p-20 rounded-[4rem] border border-dashed border-slate-200 dark:border-slate-800">
                    <i data-lucide="alert-circle" class="w-16 h-16 text-slate-400 mx-auto mb-6"></i>
                    <p class="text-slate-400 font-bold uppercase tracking-widest text-xs mb-4">No Constitution Versions Available</p>
                    <p class="text-slate-500 text-sm">Unable to load constitution versions. Please try refreshing the page.</p>
                    <button onclick="window.reloadConstitution()"
                        class="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-all">
                        Retry
                    </button>
                </div>
            </div>`;
    }

    // Determine if we're in diff mode
    const isDiffMode = state.constitutionCompareVersion !== null;
    const currentVersion = state.constitutionVersions.find(v => v.name === state.constitutionCurrentVersion);
    const compareVersion = isDiffMode ? state.constitutionVersions.find(v => v.name === state.constitutionCompareVersion) : null;

    // Check if wizard is in progress (kept for backward compatibility)
    const wizardInProgress = localStorage.getItem('wizard_in_progress');

    // --- Text Selection System ---
    // Initialize selection handler once globally. It now captures selections
    // made inside the constitution view regardless of wizard state (but
    // still disabled in diff mode). This ensures the Add buttons always work.
    if (!window.selectionHandlerInitialized) {
        window.selectionHandlerInitialized = true;
        document.addEventListener('mouseup', () => {
            try {
                const selection = window.getSelection();
                const text = selection.toString().trim();
                const isDiffModeActive = window.state?.constitutionCompareVersion !== null;

                // Only capture selections when not in diff mode
                if (text.length > 3 && !isDiffModeActive) {
                    // Ensure the selection occurred inside the rendered constitution
                    let node = selection.anchorNode;
                    let insideConstitution = false;
                    while (node && node !== document.body) {
                        const el = node.nodeType === 1 ? node : node.parentElement;
                        if (!el) break;
                        if (el.id === 'constitution-content') { insideConstitution = true; break; }
                        node = el.parentElement;
                    }

                    if (!insideConstitution) return;

                    // Determine a reasonable section/context id for the selection
                    node = selection.anchorNode;
                    let contextId = 'General';
                    while (node && node !== document.body) {
                        const target = node.nodeType === 1 ? node : node.parentElement;
                        if (target && target.id) {
                            contextId = target.id;
                            break;
                        }
                        let sib = target?.previousElementSibling;
                        while (sib) {
                            if (sib.id) {
                                contextId = sib.id;
                                break;
                            }
                            sib = sib.previousElementSibling;
                        }
                        if (contextId !== 'General') break;
                        node = target.parentElement;
                    }

                    const sectionId = contextId.split('-')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ');

                    // Store in window for buttons to access
                    window.currentSelection = { text, sectionId };

                    // Update the sidebar UI if present
                    try {
                        const summaryEl = document.getElementById('constitution-selection-summary');
                        if (summaryEl) {
                            summaryEl.textContent = `${text.length} chars selected`;
                        }
                    } catch (e) {
                        // ignore
                    }
                }
            } catch (e) {
                console.warn('Selection handler error:', e);
            }
        });
    }

    const sections = [
        { id: 'preamble', label: 'Preamble' },
        { id: 'article-i-cardano-blockchain-tenets-and-guardrails', label: 'Art I: Tenets' },
        { id: 'article-ii-the-cardano-blockchain-community', label: 'Art II: Community' },
        { id: 'article-iii-participatory-and-decentralized-governance', label: 'Art III: Governance' },
        { id: 'article-iv-the-cardano-blockchain-ecosystem-budget', label: 'Art IV: Budget' },
        { id: 'article-v-delegated-representatives', label: 'Art V: DReps' },
        { id: 'article-vi-stake-pool-operators', label: 'Art VI: SPOs' },
        { id: 'article-vii-constitutional-committee', label: 'Art VII: Committee' },
        { id: 'article-viii-amendment-process', label: 'Art VIII: Amendment' },
        { id: 'appendix-i-cardano-blockchain-guardrails', label: 'App I: Guardrails' },
        { id: 'appendix-ii-supporting-guidance', label: 'App II: Guidance' }
    ];

    return `
        <div class="max-w-7xl mx-auto pb-20 fade-in text-left relative">
            
            <!-- Header -->
            <header class="mb-12">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg text-white">
                        <i data-lucide="book-open" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h1 class="text-6xl font-black italic tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
                            Constitution
                        </h1>
                        <p class="text-slate-500 text-xl font-medium mt-2">Foundational governance document</p>
                    </div>
                </div>
            </header>

            <!-- Main Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <!-- Sidebar -->
                <aside class="lg:col-span-1 space-y-6 sticky top-8 h-fit">
                    <!-- Version Selector -->
                    <div class="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                        <h3 class="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Version</h3>
                        <select onchange="window.switchConstitutionVersion(this.value)" 
                            class="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all">
                            ${state.constitutionVersions.map(v => `
                                <option value="${v.name}" ${v.name === state.constitutionCurrentVersion ? 'selected' : ''}>
                                    ${v.name} ${v.isCurrent ? '(Current)' : ''} ${v.isOfficial ? '' : '(CAP Preview)'}
                                </option>
                            `).join('')}
                        </select>
                    </div>

                    <!-- Diff Mode Toggle -->
                    <div class="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                        <h3 class="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Compare Mode</h3>
                        ${!isDiffMode ? `
                            <button onclick="window.enableDiffMode()" 
                                class="w-full px-4 py-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                                <i data-lucide="git-compare" class="w-4 h-4"></i>
                                Enable Diff View
                            </button>
                        ` : `
                            <select onchange="window.setCompareVersion(this.value)" 
                                class="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all mb-3">
                                ${state.constitutionVersions.filter(v => v.name !== state.constitutionCurrentVersion).map(v => `
                                    <option value="${v.name}" ${v.name === state.constitutionCompareVersion ? 'selected' : ''}>
                                        ${v.name}
                                    </option>
                                `).join('')}
                            </select>
                            <button onclick="window.disableDiffMode()" 
                                class="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
                                <i data-lucide="x" class="w-4 h-4"></i>
                                Exit Diff Mode
                            </button>
                        `}
                    </div>

                    <!-- Quick Navigation -->
                    <div class="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                        <h3 class="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Jump To</h3>
                        <div class="space-y-1 max-h-96 overflow-y-auto no-scrollbar">
                            ${sections.map(s => `
                                <a href="#${s.id}" 
                                    class="block px-3 py-2 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                                    ${s.label}
                                </a>
                            `).join('')}
                        </div>
                    </div>

                    ${!isDiffMode ? `
                    <!-- Action Panel: always visible when viewing constitution (except diff mode) -->
                    <div class="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                        <h3 class="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Text Selection</h3>
                        <p id="constitution-selection-summary" class="text-xs text-slate-500 dark:text-slate-400 mb-4">${window.currentSelection && window.currentSelection.text ? `${window.currentSelection.text.length} chars selected` : 'No text selected'}</p>
                        <button onclick="window.addTextToCAP()" 
                            class="w-full px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 font-bold text-sm mb-2">
                            <i data-lucide="plus" class="w-4 h-4 inline-block mr-2"></i>
                            Add to CAP
                        </button>
                        <button onclick="window.addTextToCIS()" 
                            class="w-full px-4 py-2 rounded-xl bg-purple-50 dark:bg-purple-900/10 text-purple-600 dark:text-purple-400 font-bold text-sm mb-2">
                            <i data-lucide="plus" class="w-4 h-4 inline-block mr-2"></i>
                            Add to CIS
                        </button>
                        <button onclick="window.returnToWizard()" 
                            class="w-full px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-sm">
                            <i data-lucide="arrow-left" class="w-4 h-4 inline-block mr-2"></i>
                            Return to Wizard
                        </button>
                    </div>
                    ` : ''}

                    ${isDiffMode ? `
                    <!-- Diff Legend -->
                    <div class="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                        <h3 class="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Legend</h3>
                        <div class="space-y-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                            <div class="flex items-center gap-2">
                                <div class="w-4 h-4 bg-red-400 rounded"></div>
                                <span>Removed from current</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="w-4 h-4 bg-green-400 rounded"></div>
                                <span>Added in proposed</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="w-4 h-4 bg-blue-400 rounded"></div>
                                <span>Modified</span>
                            </div>
                        </div>
                    </div>
                    ` : ''}
                </aside>

                <!-- Constitution Display -->
                <div class="lg:col-span-3">
                    ${isDiffMode ? renderDiffView(currentVersion, compareVersion) : renderSingleView(currentVersion)}
                </div>
            </div>
        </div>`;
}

/**
 * Renders a single version of the constitution
 */
/**
 * Normalizes constitution content to standard markdown format with consistent headers
 */
function normalizeConstitutionMarkdown(content) {
    let normalized = content;
    
    // Define section patterns and their corresponding standard headers
    const sections = [
        {
            patterns: [/PREAMBLE/i],
            standardHeader: '## PREAMBLE',
            id: 'preamble'
        },
        {
            patterns: [/ARTICLE\s+I(?:\s|:|$)/i, /ARTICLE\s+1(?:\s|:|$)/i],
            standardHeader: '## ARTICLE I: CARDANO BLOCKCHAIN TENETS AND GUARDRAILS',
            id: 'article-i'
        },
        {
            patterns: [/ARTICLE\s+II(?:\s|:|$)/i, /ARTICLE\s+2(?:\s|:|$)/i],
            standardHeader: '## ARTICLE II: THE CARDANO BLOCKCHAIN COMMUNITY',
            id: 'article-ii'
        },
        {
            patterns: [/ARTICLE\s+III(?:\s|:|$)/i, /ARTICLE\s+3(?:\s|:|$)/i],
            standardHeader: '## ARTICLE III: PARTICIPATORY AND DECENTRALIZED GOVERNANCE',
            id: 'article-iii'
        },
        {
            patterns: [/ARTICLE\s+IV(?:\s|:|$)/i, /ARTICLE\s+4(?:\s|:|$)/i],
            standardHeader: '## ARTICLE IV: THE CARDANO BLOCKCHAIN ECOSYSTEM BUDGET',
            id: 'article-iv'
        },
        {
            patterns: [/ARTICLE\s+V(?:\s|:|$)/i, /ARTICLE\s+5(?:\s|:|$)/i],
            standardHeader: '## ARTICLE V: DELEGATED REPRESENTATIVES',
            id: 'article-v'
        },
        {
            patterns: [/ARTICLE\s+VI(?:\s|:|$)/i, /ARTICLE\s+6(?:\s|:|$)/i],
            standardHeader: '## ARTICLE VI: STAKE POOL OPERATORS',
            id: 'article-vi'
        },
        {
            patterns: [/ARTICLE\s+VII(?:\s|:|$)/i, /ARTICLE\s+7(?:\s|:|$)/i],
            standardHeader: '## ARTICLE VII: CONSTITUTIONAL COMMITTEE',
            id: 'article-vii'
        },
        {
            patterns: [/ARTICLE\s+VIII(?:\s|:|$)/i, /ARTICLE\s+8(?:\s|:|$)/i],
            standardHeader: '## ARTICLE VIII: AMENDMENT PROCESS',
            id: 'article-viii'
        },
        {
            patterns: [/APPENDIX\s+I(?:\s|:|$)/i],
            standardHeader: '## APPENDIX I: CARDANO BLOCKCHAIN GUARDRAILS',
            id: 'appendix-i'
        },
        {
            patterns: [/APPENDIX\s+II(?:\s|:|$)/i],
            standardHeader: '## APPENDIX II: SUPPORTING GUIDANCE',
            id: 'appendix-ii'
        }
    ];
    
    // Replace headers with standard format - replace any number of # at the start of lines
    for (const section of sections) {
        for (const pattern of section.patterns) {
            // Match lines that start with any number of # or just the text
            const linePattern = new RegExp(`^#+\\s*${pattern.source}|^${pattern.source}`, 'gmi');
            normalized = normalized.replace(linePattern, section.standardHeader);
        }
    }
    
    return normalized;
}

function renderSingleView(version) {
    if (!version) return '<p class="text-slate-400">Version not found.</p>';
    
    // Clean CAP preview metadata before processing
    let cleanedContent = version.content;
    // Remove the CAP preview header comment
    cleanedContent = cleanedContent.replace(/<!--\s*CAP-\d+\s+PREVIEW.*?-->/is, '');
    // Remove the Changes Summary section and footer comment
    cleanedContent = cleanedContent.replace(/\n*---\n*##\s+CAP-\d+\s+Changes Summary[\s\S]*?<!--\s*GENERATION SUMMARY[\s\S]*?-->/i, '');
    // Remove trailing markdown separators
    cleanedContent = cleanedContent.replace(/\n*---\s*$/i, '');
    
    // Normalize the content to standard markdown format
    const normalizedContent = normalizeConstitutionMarkdown(cleanedContent);
    
    // Define the section IDs and their matching patterns (using regex for precise matching)
    const sectionMappings = [
        { id: 'preamble', patterns: [/preamble/i] },
        { id: 'defined-terms', patterns: [/defined\s+terms/i] },
        { id: 'article-i-cardano-blockchain-tenets-and-guardrails', patterns: [/article\s+i(?:[^v]|$)/i, /article\s+1(?:\.|:|\s|$)/i] },
        { id: 'article-ii-the-cardano-blockchain-community', patterns: [/article\s+ii(?:[^i]|$)/i, /article\s+2(?:\.|:|\s|$)/i] },
        { id: 'article-iii-participatory-and-decentralized-governance', patterns: [/article\s+iii(?:[^i]|$)/i, /article\s+3(?:\.|:|\s|$)/i] },
        { id: 'article-iv-the-cardano-blockchain-ecosystem-budget', patterns: [/article\s+iv(?:[^v]|$)/i, /article\s+4(?:\.|:|\s|$)/i] },
        { id: 'article-v-delegated-representatives', patterns: [/article\s+v(?:[^i]|$)/i, /article\s+5(?:\.|:|\s|$)/i] },
        { id: 'article-vi-stake-pool-operators', patterns: [/article\s+vi(?:[^i]|$)/i, /article\s+6(?:\.|:|\s|$)/i] },
        { id: 'article-vii-constitutional-committee', patterns: [/article\s+vii(?:[^i]|$)/i, /article\s+7(?:\.|:|\s|$)/i] },
        { id: 'article-viii-amendment-process', patterns: [/article\s+viii(?:[^i]|$)/i, /article\s+8(?:\.|:|\s|$)/i] },
        { id: 'appendix-i-cardano-blockchain-guardrails', patterns: [/appendix\s+i(?:[^i]|$)/i] },
        { id: 'appendix-ii-supporting-guidance', patterns: [/appendix\s+ii(?:[^i]|$)/i] }
    ];
    
    // Parse the normalized markdown to HTML
    let htmlContent = window.marked.parse(normalizedContent);
    
    // Inject IDs into all h2 headers
    htmlContent = htmlContent.replace(/<h2[^>]*>(.*?)<\/h2>/gi, (match, headerText) => {
        const textLower = headerText.toLowerCase();
        
        // Find the best matching section using regex patterns
        for (const mapping of sectionMappings) {
            for (const pattern of mapping.patterns) {
                if (pattern.test(headerText)) {
                    return `<h2 id="${mapping.id}" class="scroll-mt-32 font-black italic tracking-tighter text-3xl uppercase text-slate-900 dark:text-white mt-16 mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">${headerText}</h2>`;
                }
            }
        }

        // If no mapping found, generate an ID from the header text
        const defaultId = headerText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        return `<h2 id="${defaultId}" class="scroll-mt-32 font-black italic tracking-tighter text-3xl uppercase text-slate-900 dark:text-white mt-16 mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">${headerText}</h2>`;
    });

    return `
        <article id="constitution-content" class="bg-white dark:bg-slate-900 p-10 sm:p-20 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-sm prose dark:prose-invert max-w-none text-left leading-relaxed selection:bg-blue-600 selection:text-white">
            ${htmlContent}
        </article>`;
}

/**
 * Renders a side-by-side diff comparison.
 * Default: currentVersion = current constitution (left/baseline),
 *          compareVersion = proposed CAP changes (right/proposed).
 * Diff direction: old = currentVersion, new = compareVersion
 *   → Red  = removed from current constitution
 *   → Green = added by the proposal
 */
function renderDiffView(currentVersion, compareVersion) {
    if (!currentVersion || !compareVersion) {
        return '<p class="text-slate-400">Please select both versions to compare.</p>';
    }

    // Diff: old = current constitution (baseline), new = proposed changes
    const diff = generateDiff(currentVersion.content, compareVersion.content);

    // Dynamic labels: detect if the compare version is a CAP preview
    const isCapComparison = compareVersion.isOfficial === false;
    const leftLabel = currentVersion.isCurrent ? 'Current Constitution' : currentVersion.name;
    const rightLabel = isCapComparison ? `Proposed — ${compareVersion.name}` : compareVersion.name;

    return `
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <!-- Baseline (Current Constitution) -->
            <div class="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
                <div class="p-6 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">${currentVersion.isCurrent ? 'Current Constitution' : 'Base Version'}</p>
                    <p class="text-xl font-black tracking-tight text-slate-900 dark:text-white">${leftLabel}</p>
                </div>
                <div class="p-10 prose dark:prose-invert max-w-none text-left leading-relaxed overflow-auto max-h-[800px] no-scrollbar">
                    ${window.marked.parse(diff.oldContent)}
                </div>
            </div>

            <!-- Proposed Changes -->
            <div class="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
                <div class="p-6 bg-blue-50 dark:bg-blue-900/20 border-b border-blue-100 dark:border-blue-900/30">
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-1">${isCapComparison ? 'Proposed Changes' : 'Compare Version'}</p>
                    <p class="text-xl font-black tracking-tight text-slate-900 dark:text-white">${rightLabel}</p>
                </div>
                <div class="p-10 prose dark:prose-invert max-w-none text-left leading-relaxed overflow-auto max-h-[800px] no-scrollbar">
                    ${window.marked.parse(diff.newContent)}
                </div>
            </div>
        </div>

        <!-- Unified Diff View -->
        <div class="mt-6 bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm">
            <div class="flex items-center gap-4 mb-8">
                <div class="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-white">
                    <i data-lucide="list" class="w-5 h-5"></i>
                </div>
                <h3 class="text-2xl font-black italic tracking-tighter text-slate-900 dark:text-white uppercase">Unified Changes</h3>
            </div>
            <div class="prose dark:prose-invert max-w-none text-left leading-relaxed">
                ${diff.unified}
            </div>
        </div>`;
}

/**
 * Generates a smart diff between two texts using a sequence matching algorithm
 */
function generateDiff(oldText, newText) {
    // Remove CAP preview headers and footers before diffing
    const cleanText = (text) => {
        // Remove the CAP preview header comment
        text = text.replace(/<!--\s*CAP-\d+\s+PREVIEW.*?-->/is, '');
        
        // Remove the Changes Summary section and footer comment
        text = text.replace(/##\s+CAP-\d+\s+Changes Summary[\s\S]*?<!--\s*GENERATION SUMMARY[\s\S]*?-->/i, '');
        
        // Clean up any extra whitespace at start/end
        return text.trim();
    };
    
    const cleanOldText = cleanText(oldText);
    const cleanNewText = cleanText(newText);
    
    const oldLines = cleanOldText.split('\n');
    const newLines = cleanNewText.split('\n');
    
    // Use a simple longest common subsequence approach to find matching lines
    const diff = computeLineDiff(oldLines, newLines);
    
    let oldContent = '';
    let newContent = '';
    let unified = '';
    
    for (const change of diff) {
        if (change.type === 'equal') {
            // Unchanged line - show in both
            const line = change.value;
            oldContent += line + '\n';
            newContent += line + '\n';
            unified += `<div class="p-2 my-1 rounded">${escapeHtml(line || ' ')}</div>`;
        } else if (change.type === 'delete') {
            // Removed line
            const line = change.value;
            if (change.isPartial) {
                // Character-level diff - line contains HTML markup
                oldContent += `<span style="background-color: rgba(239, 68, 68, 0.2); padding: 2px 4px; border-radius: 4px; text-decoration: line-through;">${line}</span>\n`;
            } else {
                oldContent += `<span style="background-color: rgba(239, 68, 68, 0.2); padding: 2px 4px; border-radius: 4px; text-decoration: line-through;">${escapeHtml(line)}</span>\n`;
            }
            if (!change.isPartial) {
                unified += `<div class="p-2 my-1 rounded bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500"><span class="text-red-600 dark:text-red-400 line-through">− ${escapeHtml(line)}</span></div>`;
            }
        } else if (change.type === 'insert') {
            // Added line
            const line = change.value;
            if (change.isPartial) {
                // Character-level diff - line contains HTML markup
                newContent += `<span style="background-color: rgba(34, 197, 94, 0.2); padding: 2px 4px; border-radius: 4px;">${line}</span>\n`;
            } else {
                newContent += `<span style="background-color: rgba(34, 197, 94, 0.2); padding: 2px 4px; border-radius: 4px;">${escapeHtml(line)}</span>\n`;
            }
            if (!change.isPartial) {
                unified += `<div class="p-2 my-1 rounded bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500"><span class="text-green-600 dark:text-green-400">+ ${escapeHtml(line)}</span></div>`;
            }
        }
    }
    
    return { oldContent, newContent, unified };
}

/**
 * Computes line-by-line diff using a smarter matching algorithm
 * Matches lines that appear in both documents to handle additions/deletions better
 */
function computeLineDiff(oldLines, newLines) {
    // Create maps of line content to indices for faster matching
    const oldLineMap = {};
    const newLineMap = {};
    
    oldLines.forEach((line, idx) => {
        if (!oldLineMap[line]) oldLineMap[line] = [];
        oldLineMap[line].push(idx);
    });
    
    newLines.forEach((line, idx) => {
        if (!newLineMap[line]) newLineMap[line] = [];
        newLineMap[line].push(idx);
    });
    
    const result = [];
    const matchedOldIndices = new Set();
    const matchedNewIndices = new Set();
    
    // First pass: mark all exact matches
    for (let i = 0; i < oldLines.length; i++) {
        const line = oldLines[i];
        if (newLineMap[line] && newLineMap[line].length > 0) {
            // Find an unmatched occurrence in newLines
            const newIdx = newLineMap[line].find(idx => !matchedNewIndices.has(idx));
            if (newIdx !== undefined) {
                matchedOldIndices.add(i);
                matchedNewIndices.add(newIdx);
            }
        }
    }
    
    // Second pass: build the diff result
    let oldIdx = 0;
    let newIdx = 0;
    
    while (oldIdx < oldLines.length || newIdx < newLines.length) {
        if (oldIdx < oldLines.length && newIdx < newLines.length && 
            oldLines[oldIdx] === newLines[newIdx]) {
            // Exact match - no highlighting needed
            result.push({ type: 'equal', value: oldLines[oldIdx] });
            oldIdx++;
            newIdx++;
        } else if (oldIdx < oldLines.length && newIdx < newLines.length && 
                   matchedOldIndices.has(oldIdx) && matchedNewIndices.has(newIdx) &&
                   oldLines[oldIdx] !== newLines[newIdx]) {
            // Both are marked as having matches elsewhere, but different here
            // This is a modified line - do character-level diff
            const delLine = oldLines[oldIdx];
            const insLine = newLines[newIdx];
            const charDiff = getCharacterDiff(delLine, insLine);
            result.push({ type: 'delete', value: charDiff.old, isPartial: true });
            result.push({ type: 'insert', value: charDiff.new, isPartial: true });
            oldIdx++;
            newIdx++;
        } else if (oldIdx < oldLines.length && newIdx < newLines.length &&
                   !matchedOldIndices.has(oldIdx) && !matchedNewIndices.has(newIdx)) {
            // Both have unmatched lines at same position - might be a modification
            const delLine = oldLines[oldIdx];
            const insLine = newLines[newIdx];
            const similarity = getLineSimilarity(delLine, insLine);
            
            if (similarity > 0.6) {
                // Similar enough to show character-level diff
                const charDiff = getCharacterDiff(delLine, insLine);
                result.push({ type: 'delete', value: charDiff.old, isPartial: true });
                result.push({ type: 'insert', value: charDiff.new, isPartial: true });
            } else {
                result.push({ type: 'delete', value: delLine });
                result.push({ type: 'insert', value: insLine });
            }
            oldIdx++;
            newIdx++;
        } else if (oldIdx < oldLines.length && 
                   (!matchedOldIndices.has(oldIdx) || newIdx >= newLines.length)) {
            // Unmatched old line (deletion)
            result.push({ type: 'delete', value: oldLines[oldIdx] });
            oldIdx++;
        } else if (newIdx < newLines.length &&
                   (!matchedNewIndices.has(newIdx) || oldIdx >= oldLines.length)) {
            // Unmatched new line (insertion)
            result.push({ type: 'insert', value: newLines[newIdx] });
            newIdx++;
        } else {
            // Shouldn't reach here, but safety check
            oldIdx++;
            newIdx++;
        }
    }
    
    return result;
}

/**
 * Calculates similarity between two lines (0-1)
 */
function getLineSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const editDistance = getEditDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
}

/**
 * Calculates Levenshtein distance between two strings
 */
function getEditDistance(s1, s2) {
    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0) {
                costs[j] = j;
            } else if (j > 0) {
                let newValue = costs[j - 1];
                if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                    newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                }
                costs[j - 1] = lastValue;
                lastValue = newValue;
            }
        }
        if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

/**
 * Performs character-level diff between two similar lines
 */
function getCharacterDiff(oldLine, newLine) {
    const oldChars = oldLine.split('');
    const newChars = newLine.split('');
    
    // Simple character-level diff using LCS
    let oldDiffStr = '';
    let newDiffStr = '';
    
    let i = 0, j = 0;
    while (i < oldChars.length || j < newChars.length) {
        if (i < oldChars.length && j < newChars.length && oldChars[i] === newChars[j]) {
            oldDiffStr += oldChars[i];
            newDiffStr += newChars[j];
            i++;
            j++;
        } else if (i < oldChars.length && j < newChars.length) {
            // Look ahead to find better matches
            let foundMatch = false;
            for (let ii = i + 1; ii < Math.min(i + 20, oldChars.length); ii++) {
                for (let jj = j + 1; jj < Math.min(j + 20, newChars.length); jj++) {
                    if (oldChars[ii] === newChars[jj]) {
                        // Found a match ahead
                        while (i < ii) {
                            oldDiffStr += `<span style="background-color: rgba(239, 68, 68, 0.3);">${escapeHtml(oldChars[i])}</span>`;
                            i++;
                        }
                        while (j < jj) {
                            newDiffStr += `<span style="background-color: rgba(34, 197, 94, 0.3);">${escapeHtml(newChars[j])}</span>`;
                            j++;
                        }
                        foundMatch = true;
                        break;
                    }
                }
                if (foundMatch) break;
            }
            if (!foundMatch) {
                if (i < oldChars.length) {
                    oldDiffStr += `<span style="background-color: rgba(239, 68, 68, 0.5);">${escapeHtml(oldChars[i])}</span>`;
                    i++;
                }
                if (j < newChars.length) {
                    newDiffStr += `<span style="background-color: rgba(34, 197, 94, 0.5);">${escapeHtml(newChars[j])}</span>`;
                    j++;
                }
            }
        } else if (i < oldChars.length) {
            oldDiffStr += `<span style="background-color: rgba(239, 68, 68, 0.5);">${escapeHtml(oldChars[i])}</span>`;
            i++;
        } else {
            newDiffStr += `<span style="background-color: rgba(34, 197, 94, 0.5);">${escapeHtml(newChars[j])}</span>`;
            j++;
        }
    }
    
    return { old: oldDiffStr, new: newDiffStr };
}

/**
 * Simple longest common subsequence algorithm
 */
function getLCS(oldLines, newLines) {
    // Create a map of line values to indices in newLines
    const newLineMap = {};
    newLines.forEach((line, idx) => {
        if (!newLineMap[line]) newLineMap[line] = [];
        newLineMap[line].push(idx);
    });
    
    // Find longest subsequence
    const lcs = [];
    let lastNewIdx = -1;
    
    for (let oldIdx = 0; oldIdx < oldLines.length; oldIdx++) {
        const oldLine = oldLines[oldIdx];
        const newIndices = newLineMap[oldLine] || [];
        
        // Find the closest matching line in newLines after the last match
        for (const newIdx of newIndices) {
            if (newIdx > lastNewIdx) {
                lcs.push(oldLine);
                lastNewIdx = newIdx;
                break;
            }
        }
    }
    
    return lcs;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
