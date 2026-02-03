'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, List, LayoutGrid, Layers, Filter, ChevronDown, Check } from 'lucide-react';

function CustomSelect({ value, onChange, options, placeholder, icon: Icon }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-card border border-gray-100 dark:border-border rounded-xl text-sm font-bold text-gray-600 dark:text-gray-300 hover:border-pulsai-blue/30 focus:outline-none focus:ring-2 focus:ring-pulsai-blue/10 transition-all shadow-sm w-[220px] justify-between group"
            >
                <div className="flex items-center gap-2 truncate flex-1">
                    <Icon className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-pulsai-blue transition-colors flex-shrink-0" />
                    <span className="truncate">{selectedOption?.label || placeholder}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 dark:text-gray-500 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div
                    className="absolute top-full left-0 mt-2 bg-white dark:bg-card border border-gray-100 dark:border-border rounded-xl shadow-xl z-50 overflow-hidden min-w-max animate-in fade-in slide-in-from-top-2 duration-200"
                    style={{ minWidth: '220px' }}
                >
                    {options.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors flex items-center justify-between group whitespace-nowrap ${value === option.value
                                    ? 'bg-pulsai-blue/5 dark:bg-pulsai-blue/10 text-pulsai-blue dark:text-blue-400'
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                                }`}
                        >
                            <span>{option.label}</span>
                            {value === option.value && (
                                <Check className="w-4 h-4 text-pulsai-blue ml-3 flex-shrink-0" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

/**
 * TicketToolbar - Barre d'outils avec recherche, filtres et toggle de vue
 * Design moderne et épuré respectant la charte graphique
 * @param {Object} searchProps - { query, onChange }
 * @param {Object} filters - { priority: { selected, onChange }, category: { selected, onChange } }
 * @param {Object} viewProps - { current, onChange }
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
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-3 sm:gap-4 bg-white dark:bg-card p-3 sm:p-4 rounded-2xl border border-gray-100 dark:border-border shadow-sm transition-colors">
            {/* Search - Full width on mobile */}
            <div className="relative w-full sm:flex-[2] sm:min-w-[250px]">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                <input
                    type="text"
                    placeholder="Rechercher un ticket..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50/50 dark:bg-gray-800/50 border border-gray-100 dark:border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pulsai-blue/10 focus:border-pulsai-blue/50 text-sm font-medium text-gray-900 dark:text-white transition-all hover:bg-white dark:hover:bg-gray-800"
                />
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
                {/* Priority Filter */}
                <CustomSelect
                    value={selectedPriority}
                    onChange={onPriorityChange}
                    icon={Filter}
                    placeholder="Priorité"
                    options={[
                        { value: 'all', label: 'Toutes' },
                        { value: 'urgent', label: 'Urgent' },
                        { value: 'medium', label: 'Moyenne' },
                        { value: 'low', label: 'Faible' }
                    ]}
                />

                {/* Category Filter */}
                <CustomSelect
                    value={selectedCategory}
                    onChange={onCategoryChange}
                    icon={Filter}
                    placeholder="Catégorie"
                    options={[
                        { value: 'all', label: 'Toutes' },
                        { value: 'bug', label: 'Bug' },
                        { value: 'technical', label: 'Technique' },
                        { value: 'feature-request', label: 'Feature Request' },
                        { value: 'billing', label: 'Facturation' },
                        { value: 'support', label: 'Support' }
                    ]}
                />

                {/* View Toggle - Compact on mobile */}
                <div className="flex items-center p-1 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-border">
                    {[
                        { id: 'list', icon: List, label: 'Liste' },
                        { id: 'kanban', icon: Layers, label: 'Kanban' },
                        { id: 'cards', icon: LayoutGrid, label: 'Cartes' }
                    ].map(({ id, icon: Icon, label }) => (
                        <button
                            key={id}
                            onClick={() => onViewChange(id)}
                            className={`p-2 rounded-lg transition-all duration-200 ${view === id
                                    ? 'bg-white dark:bg-card text-pulsai-blue shadow-md scale-100'
                                    : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'
                                }`}
                            title={`Vue ${label}`}
                        >
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
