'use client';

import { Plus, Upload, Download } from 'lucide-react';

/**
 * Header component for Contacts page with title and action buttons
 * @param {Object} props - Component props
 * @param {Function} props.onImport - Import handler
 * @param {Function} props.onExport - Export handler
 * @param {Function} props.onAddContact - Add contact handler
 */
export default function ContactsHeader({ onImport, onExport, onAddContact }) {
    return (
        <div className='flex items-center justify-between gap-2 sm:gap-4'>
            <div className='flex-1 min-w-0'>
                <h1 className='text-xl sm:text-4xl font-bold font-unbounded text-gray-900 dark:text-white'>Contacts</h1>
                <p className='text-gray-500 dark:text-gray-400 mt-1 text-xs sm:text-base hidden sm:block'>Gérez votre base client et leads.</p>
            </div>

            <div className='flex items-center gap-1.5 sm:gap-2 flex-shrink-0'>
                <button
                    onClick={onImport}
                    className='p-2.5 sm:px-4 sm:py-2.5 bg-white dark:bg-card border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-xl font-medium text-xs sm:text-sm hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 transition-all flex items-center gap-2 shadow-sm'
                    title='Importer'
                >
                    <Upload className='w-4 h-4' />
                    <span className='hidden sm:inline'>Importer</span>
                </button>
                <button
                    onClick={onExport}
                    className='p-2.5 sm:px-4 sm:py-2.5 bg-white dark:bg-card border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-xl font-medium text-xs sm:text-sm hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 transition-all flex items-center gap-2 shadow-sm'
                    title='Exporter'
                >
                    <Download className='w-4 h-4' />
                    <span className='hidden sm:inline'>Exporter</span>
                </button>
                <button
                    onClick={onAddContact}
                    className='px-3 py-2.5 sm:px-5 bg-pulsai-blue text-white rounded-xl font-bold text-xs sm:text-sm hover:bg-pulsai-blue/90 transition-all flex items-center gap-2 shadow-md whitespace-nowrap'
                    title='Nouveau contact'
                >
                    <Plus className='w-4 h-4' />
                    <span className='hidden sm:inline'>Nouveau contact</span>
                </button>
            </div>
        </div>
    );
}
