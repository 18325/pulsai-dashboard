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
        <div className='flex items-center justify-between'>
            <div>
                <h1 className='text-4xl font-bold font-unbounded text-gray-900 dark:text-white'>Contacts</h1>
                <p className='text-gray-500 dark:text-gray-400 mt-1'>Gérez votre base client et leads.</p>
            </div>

            <div className='flex items-center gap-2'>
                <button
                    onClick={onImport}
                    className='px-4 py-2.5 bg-white dark:bg-card border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-xl font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 transition-all flex items-center gap-2 shadow-sm'
                >
                    <Upload className='w-4 h-4' />
                    Importer
                </button>
                <button
                    onClick={onExport}
                    className='px-4 py-2.5 bg-white dark:bg-card border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-xl font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 transition-all flex items-center gap-2 shadow-sm'
                >
                    <Download className='w-4 h-4' />
                    Exporter
                </button>
                <button
                    onClick={onAddContact}
                    className='px-5 py-2.5 bg-pulsai-blue text-white rounded-xl font-bold text-sm hover:bg-pulsai-blue/90 transition-all flex items-center gap-2 shadow-md hover:shadow-lg'
                >
                    <Plus className='w-4 h-4' />
                    Nouveau contact
                </button>
            </div>
        </div>
    );
}
