/**
 * Enhanced Registry with Search and Filtering
 * GitHub API-based full-text search
 */

export function renderRegistry(state) {
    const searchQuery = state.searchQuery || '';
    const statusFilter = state.statusFilter || 'all';
    const typeFilter = state.docTypeFilter || 'ALL';
    
    // Apply filters
    let filtered = state.proposals.filter(p => {
        // Type filter
        if (typeFilter !== 'ALL' && p.type !== typeFilter) return false;
        
        // Status filter
        if (statusFilter === 'open' && p.state !== 'open') return false;
        if (statusFilter === 'closed' && p.state !== 'closed') return false;
        
        // Search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const titleMatch = p.title.toLowerCase().includes(query);
            const bodyMatch = p.body?.toLowerCase().includes(query) || false;
            const numberMatch = p.number.toString().includes(query);
            return titleMatch || bodyMatch || numberMatch;
        }
        
        return true;
    });

    // Sort by most recent
    filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    return `
        <div class="space-y-12 fade-in text-left">
            <!-- Header -->
            <header class="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                <div>
                    <h1 class="text-7xl font-black italic tracking-tighter text-slate-900 dark:text-white uppercase leading-none">Registry</h1>
                    <p class="text-slate-500 text-xl font-medium mt-4">Browse and search all governance proposals.</p>
                </div>
            </header>

            <!-- Search and Filters -->
            <div class="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Search -->
                    <div class="md:col-span-2">
                        <label class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 block">Search</label>
                        <div class="relative">
                            <i data-lucide="search" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"></i>
                            <input type="text" 
                                value="${searchQuery}"
                                oninput="state.searchQuery = this.value; updateUI(true);"
                                placeholder="Search by title, content, or number..."
                                class="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all">
                        </div>
                    </div>

                    <!-- Type Filter -->
                    <div>
                        <label class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 block">Type</label>
                        <div class="flex bg-white dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700">
                            ${['ALL', 'CAP', 'CIS'].map(t => `
                                <button onclick="state.docTypeFilter = '${t}'; updateUI(true)"
                                    class="flex-1 px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all 
                                    ${typeFilter === t ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
                                    ${t}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- Status Filters -->
                <div class="mt-6 flex items-center gap-2">
                    <button onclick="state.statusFilter = 'all'; updateUI(true)"
                        class="px-4 py-2 rounded-xl text-xs font-bold transition-all ${statusFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}">
                        All (${state.proposals.length})
                    </button>
                    <button onclick="state.statusFilter = 'open'; updateUI(true)"
                        class="px-4 py-2 rounded-xl text-xs font-bold transition-all ${statusFilter === 'open' ? 'bg-green-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}">
                        Open (${state.proposals.filter(p => p.state === 'open').length})
                    </button>
                    <button onclick="state.statusFilter = 'closed'; updateUI(true)"
                        class="px-4 py-2 rounded-xl text-xs font-bold transition-all ${statusFilter === 'closed' ? 'bg-slate-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}">
                        Closed (${state.proposals.filter(p => p.state === 'closed').length})
                    </button>
                </div>

                <!-- Results Count -->
                <div class="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <p class="text-sm text-slate-600 dark:text-slate-400">
                        <span class="font-black">${filtered.length}</span> result${filtered.length !== 1 ? 's' : ''}
                        ${searchQuery ? `for "<span class="font-bold">${searchQuery}</span>"` : ''}
                    </p>
                </div>
            </div>

            <!-- Results -->
            <div class="grid grid-cols-1 gap-4">
                ${filtered.length === 0 ? `
                    <div class="py-40 text-center bg-white dark:bg-slate-900 rounded-[3rem] border border-dashed border-slate-200 dark:border-slate-800">
                        <i data-lucide="search-x" class="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto mb-4"></i>
                        <p class="text-slate-400 font-bold uppercase tracking-widest text-sm mb-2">No results found</p>
                        <p class="text-slate-500 text-sm">Try adjusting your search or filters</p>
                    </div>
                ` : filtered.map(p => `
                    <div onclick="window.openProposal(${p.number})" 
                        class="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                        
                        <div class="space-y-3 flex-grow max-w-2xl">
                            <div class="flex items-center gap-3 flex-wrap">
                                <span class="text-[10px] font-black uppercase tracking-widest ${p.type === 'CIS' ? 'text-amber-500' : 'text-blue-600'}">
                                    ${p.type} #${p.number}
                                </span>
                                <span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    ${new Date(p.created_at).toLocaleDateString()}
                                </span>
                                <span class="text-[8px] font-black px-2 py-1 ${p.state === 'open' ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'} rounded-full uppercase tracking-wider">
                                    ${p.state}
                                </span>
                            </div>
                            <h3 class="text-2xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                ${highlightText(p.title, searchQuery)}
                            </h3>
                            <div class="flex items-center gap-2">
                                <img src="${p.user.avatar_url}" class="w-5 h-5 rounded-full border border-slate-200 dark:border-slate-800">
                                <span class="text-xs font-bold text-slate-500">${p.user.login}</span>
                            </div>
                        </div>

                        <div class="flex items-center gap-4">
                            <div class="text-right hidden sm:block">
                                <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">Comments</p>
                                <p class="text-xl font-black italic tracking-tighter text-slate-900 dark:text-white">${p.comments}</p>
                            </div>
                            <div class="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                                <i data-lucide="arrow-right" class="w-6 h-6"></i>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>`;
}

function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-900/50 px-1 rounded">$1</mark>');
}
