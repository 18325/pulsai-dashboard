'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, Download, Plus, ChevronDown, Check, Filter } from 'lucide-react';
import { STATUS_FILTERS, TEMPLATE_OPTIONS } from '@/config/campaignConfig';

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
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-pulsai-blue transition-colors flex-shrink-0" />
                    <span className="truncate">{selectedOption?.label || placeholder}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
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

export default function CampaignToolbar({
    searchQuery,
    onSearchChange,
    selectedStatus,
    onStatusChange,
    selectedTemplate,
    onTemplateChange,
    onExport,
    view,
    onViewChange
})

{
    const statusOptions = STATUS_FILTERS.map(f => ({ value: f.value, label: f.label }));
    const templateOptionsWithAll = [
        { value: 'all', label: 'Modèle : Tous' },
        ...TEMPLATE_OPTIONS.map(t => ({ value: t.value, label: t.label }))
    ];

    return (
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-card p-2 rounded-2xl border border-gray-100 dark:border-border shadow-sm transition-colors">
            <div className="relative flex-[2] min-w-[300px]">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Rechercher une campagne..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50/50 dark:bg-gray-800/50 border border-gray-100 dark:border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pulsai-blue/10 focus:border-pulsai-blue/50 text-sm font-medium text-gray-900 dark:text-white transition-all hover:bg-white dark:hover:bg-gray-800"
                />
            </div>

            <div className="flex items-center gap-3">
                <CustomSelect
                    value={selectedStatus}
                    onChange={onStatusChange}
                    icon={Filter}
                    placeholder="Statut : Toutes"
                    options={statusOptions}
                />

                <CustomSelect
                    value={selectedTemplate}
                    onChange={onTemplateChange}
                    icon={Filter}
                    placeholder="Modèle : Tous"
                    options={templateOptionsWithAll}
                />

                <button
                    onClick={onExport}
                    className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-card border border-gray-100 dark:border-border rounded-xl text-sm font-bold text-gray-600 dark:text-gray-300 hover:border-pulsai-blue/30 transition-all shadow-sm"
                >
                    <Download className="w-4 h-4" />
                    Exporter
                </button>
            </div>
        </div>
    );
}
