"use client";

import React from 'react';
import { Search, List, LayoutGrid, Layers, Filter, ChevronDown } from 'lucide-react';

/**
 * TicketToolbar - Barre d'outils avec recherche, filtres et toggle de vue
 * Design moderne et épuré respectant la charte graphique
 */
export default function TicketToolbar({ 
    searchQuery, 
    onSearchChange, 
    selectedPriority, 
    onPriorityChange,
    selectedCategory,
    onCategoryChange,
    view,
    onViewChange
}) {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm">
            {/* Search */}
            <div className="relative flex-[2] min-w-[300px]">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Rechercher un ticket..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-pulsai-blue/10 focus:border-pulsai-blue/50 text-sm font-medium transition-all hover:bg-white"
                />
            </div>

            <div className="flex items-center gap-3">
                {/* Priority Filter */}
                <div className="relative group">
                    <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover:text-pulsai-blue transition-colors" />
                    <select
                        value={selectedPriority}
                        onChange={(e) => onPriorityChange(e.target.value)}
                        className="appearance-none pl-10 pr-10 py-3 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-600 focus:outline-none focus:ring-2 focus:ring-pulsai-blue/10 hover:border-pulsai-blue/30 cursor-pointer transition-all shadow-sm min-w-[180px]"
                    >
                        <option value="all">Priorité : Toutes</option>
                        <option value="urgent">Urgent</option>
                        <option value="medium">Moyenne</option>
                        <option value="low">Faible</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Category Filter */}
                <div className="relative group">
                    <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover:text-pulsai-blue transition-colors" />
                    <select
                        value={selectedCategory}
                        onChange={(e) => onCategoryChange(e.target.value)}
                        className="appearance-none pl-10 pr-10 py-3 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-600 focus:outline-none focus:ring-2 focus:ring-pulsai-blue/10 hover:border-pulsai-blue/30 cursor-pointer transition-all shadow-sm min-w-[180px]"
                    >
                        <option value="all">Catégorie : Toutes</option>
                        <option value="bug">Bug</option>
                        <option value="technical">Technique</option>
                        <option value="feature-request">Feature Request</option>
                        <option value="billing">Facturation</option>
                        <option value="support">Support</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* View Toggle */}
                <div className="flex items-center p-1.5 bg-gray-50 rounded-xl border border-gray-100">
                    {[
                        { id: 'list', icon: List, label: 'Liste' },
                        { id: 'kanban', icon: Layers, label: 'Kanban' },
                        { id: 'cards', icon: LayoutGrid, label: 'Cartes' }
                    ].map(({ id, icon: Icon, label }) => (
                        <button
                            key={id}
                            onClick={() => onViewChange(id)}
                            className={`p-2.5 rounded-lg transition-all duration-200 ${
                                view === id 
                                    ? 'bg-white text-pulsai-blue shadow-lg shadow-gray-100 scale-100' 
                                    : 'text-gray-400 hover:text-gray-600 hover:bg-white/50'
                            }`}
                            title={`Vue ${label}`}
                        >
                            <Icon className="w-5 h-5" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
