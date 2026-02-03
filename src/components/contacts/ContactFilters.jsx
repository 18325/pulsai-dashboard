'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Check, Tag } from 'lucide-react';
import { Z_INDEX } from '@/constants/numbers';

export default function ContactFilters({ 
    selectedFilter, 
    onFilterChange, 
    searchQuery, 
    onSearchChange, 
    selectedTag, 
    onTagChange 
}) {
    const [isTagDropdownOpen, setIsTagDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const filters = [
        { value: 'all', label: 'All Contacts' },
        { value: 'enterprise', label: 'Enterprise' },
        { value: 'premium', label: 'Premium' },
        { value: 'active', label: 'Active' },
    ];

    const tags = [
        { value: 'all', label: 'Tous' },
        { value: 'premium', label: 'Premium' },
        { value: 'standard', label: 'Standard' },
        { value: 'vip', label: 'VIP' },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsTagDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedTagOption = tags.find(t => t.value === (selectedTag || 'all'));

    return (
        <div className='flex items-center justify-between w-full gap-4'>
            {/* Barre de recherche à gauche */}
            <div className='relative flex-1 max-w-md'>
                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                <input
                    type='text'
                    placeholder='Rechercher un contact...'
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className='w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-border bg-white dark:bg-card text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-pulsai-blue/20 focus:border-pulsai-blue transition-all'
                />
            </div>

            {/* Select Tag - Style moderne compact */}
            <div className='relative z-50' ref={dropdownRef}>
                <button
                    type='button'
                    onClick={() => setIsTagDropdownOpen(!isTagDropdownOpen)}
                    className='flex items-center gap-2 px-2 py-3 bg-white dark:bg-card border border-gray-100 dark:border-border rounded-xl text-sm font-bold text-gray-600 dark:text-gray-300 hover:border-pulsai-blue/30 focus:outline-none focus:ring-2 focus:ring-pulsai-blue/10 transition-all shadow-sm w-[100px] justify-between group'
                >
                    <div className='flex items-center gap-2 truncate flex-1'>
                        <Tag className='w-4 h-4 text-gray-400 group-hover:text-pulsai-blue transition-colors flex-shrink-0' />
                        <span className='truncate'>{selectedTagOption?.label || 'Tous'}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${isTagDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isTagDropdownOpen && (
                    <div
                        className='absolute top-full left-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden min-w-max animate-in fade-in slide-in-from-top-2 duration-200'
                        style={{ minWidth: '100px', zIndex: Z_INDEX.DROPDOWN }}
                    >
                        {tags.map((tag) => (
                            <button
                                key={tag.value}
                                type='button'
                                onClick={() => {
                                    onTagChange(tag.value);
                                    setIsTagDropdownOpen(false);
                                }}
                                className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors flex items-center justify-between group whitespace-nowrap ${(selectedTag || 'all') === tag.value
                                        ? 'bg-pulsai-blue/5 dark:bg-pulsai-blue/10 text-pulsai-blue dark:text-blue-400'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                                    }`}
                            >
                                <span>{tag.label}</span>
                                {(selectedTag || 'all') === tag.value && (
                                    <Check className='w-4 h-4 text-pulsai-blue ml-3 flex-shrink-0' />
                                )}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Filtres à droite */}
            <div className='flex gap-2'>
                {filters.map((filter) => (
                    <button
                        key={filter.value}
                        onClick={() => onFilterChange(filter.value)}
                        className={`px-6 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${selectedFilter === filter.value
                                ? 'bg-pulsai-green/5 dark:bg-pulsai-green/10 backdrop-blur-sm text-gray-900 dark:text-white border border-pulsai-green/20 dark:border-pulsai-green/30'
                                : 'bg-transparent text-gray-600 dark:text-gray-400 border border-transparent hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-200 dark:hover:border-gray-700'
                            }`}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
