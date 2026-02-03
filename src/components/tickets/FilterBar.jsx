
import { Filter, ChevronDown, LayoutList, Kanban } from 'lucide-react';

const FilterBar = ({ view, setView }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-white/50 dark:bg-card/50 backdrop-blur-md p-2 rounded-2xl border border-white/60 dark:border-border/60 shadow-sm transition-colors">
            {/* Left Filters */}
            <div className="flex items-center gap-2 p-1 overflow-x-auto w-full md:w-auto text-sm">
                <button className="px-4 py-2 bg-white dark:bg-card rounded-xl shadow-sm text-pulsai-gray-dark dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2 border border-gray-100 dark:border-border">
                    <Filter size={16} />
                    Filtres
                </button>
                <div className="h-6 w-[1px] bg-gray-300 mx-2" />
                <button className="px-3 py-2 text-gray-500 dark:text-gray-400 hover:text-pulsai-blue dark:hover:text-blue-400 hover:bg-white dark:hover:bg-gray-800 rounded-lg transition-colors whitespace-nowrap">
                    High Priority
                </button>
                <button className="px-3 py-2 text-pulsai-blue dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg font-medium whitespace-nowrap border border-blue-100 dark:border-blue-900/30 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pulsai-blue" />
                    AI Suggested
                </button>
                <button className="px-3 py-2 text-gray-500 dark:text-gray-400 hover:text-pulsai-blue dark:hover:text-blue-400 hover:bg-white dark:hover:bg-gray-800 rounded-lg transition-colors whitespace-nowrap">
                    Unassigned
                </button>
            </div>

            {/* View Toggle */}
            <div className="bg-gray-100/50 dark:bg-gray-800/50 p-1 rounded-xl flex items-center gap-1">
                <button
                    onClick={() => setView('list')}
                    className={`p-2 rounded-lg transition-all ${view === 'list' ? 'bg-white dark:bg-card shadow-sm text-pulsai-gray-dark dark:text-white' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'}`}
                >
                    <LayoutList size={20} />
                </button>
                <button
                    onClick={() => setView('kanban')}
                    className={`p-2 rounded-lg transition-all ${view === 'kanban' ? 'bg-white dark:bg-card shadow-sm text-pulsai-gray-dark dark:text-white' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'}`}
                >
                    <Kanban size={20} />
                </button>
            </div>
        </div>
    );
};

export default FilterBar;
