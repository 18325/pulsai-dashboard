'use client';

import { LayoutGrid, List } from 'lucide-react';

/**
 * View toggle component for switching between card and list views
 * @param {Object} props - Component props
 * @param {string} props.view - Current view ('cards' or 'list')
 * @param {Function} props.onViewChange - View change handler
 */
export default function ViewToggle({ view, onViewChange }) {
    return (
        <div className='flex items-center p-1 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700'>
            <button
                onClick={() => onViewChange('cards')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    view === 'cards'
                        ? 'bg-white dark:bg-card text-pulsai-blue shadow-sm'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
            >
                <LayoutGrid className='w-4 h-4' />
                Cartes
            </button>
            <button
                onClick={() => onViewChange('list')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    view === 'list'
                        ? 'bg-white dark:bg-card text-pulsai-blue shadow-sm'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
            >
                <List className='w-4 h-4' />
                Liste
            </button>
        </div>
    );
}
