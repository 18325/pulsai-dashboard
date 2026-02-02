
import React from 'react';
import { Filter, ChevronDown, LayoutList, Kanban } from 'lucide-react';

const FilterBar = ({ view, setView }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-white/50 backdrop-blur-md p-2 rounded-2xl border border-white/60 shadow-sm">
            {/* Left Filters */}
            <div className="flex items-center gap-2 p-1 overflow-x-auto w-full md:w-auto text-sm">
                <button className="px-4 py-2 bg-white rounded-xl shadow-sm text-pulsai-gray-dark font-bold hover:bg-gray-50 transition-colors flex items-center gap-2 border border-gray-100">
                    <Filter size={16} />
                    Filtres
                </button>
                <div className="h-6 w-[1px] bg-gray-300 mx-2" />
                <button className="px-3 py-2 text-gray-500 hover:text-pulsai-blue hover:bg-white rounded-lg transition-colors whitespace-nowrap">
                    High Priority
                </button>
                <button className="px-3 py-2 text-pulsai-blue bg-blue-50 rounded-lg font-medium whitespace-nowrap border border-blue-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pulsai-blue" />
                    AI Suggested
                </button>
                <button className="px-3 py-2 text-gray-500 hover:text-pulsai-blue hover:bg-white rounded-lg transition-colors whitespace-nowrap">
                    Unassigned
                </button>
            </div>

            {/* View Toggle */}
            <div className="bg-gray-100/50 p-1 rounded-xl flex items-center gap-1">
                <button
                    onClick={() => setView('list')}
                    className={`p-2 rounded-lg transition-all ${view === 'list' ? 'bg-white shadow-sm text-pulsai-gray-dark' : 'text-gray-400 hover:text-gray-600'}`}
                >
                    <LayoutList size={20} />
                </button>
                <button
                    onClick={() => setView('kanban')}
                    className={`p-2 rounded-lg transition-all ${view === 'kanban' ? 'bg-white shadow-sm text-pulsai-gray-dark' : 'text-gray-400 hover:text-gray-600'}`}
                >
                    <Kanban size={20} />
                </button>
            </div>
        </div>
    );
};

export default FilterBar;
