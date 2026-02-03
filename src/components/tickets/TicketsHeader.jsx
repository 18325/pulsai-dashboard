'use client';

import { Plus } from 'lucide-react';

/**
 * Header component for Tickets page
 * @param {Object} props - Component props
 * @param {Function} props.onNewTicket - Handler for creating new ticket
 */
export default function TicketsHeader({ onNewTicket }) {
    return (
        <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6'>
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold font-unbounded text-gray-900 dark:text-white'>Tickets</h1>
                <p className='text-gray-500 dark:text-gray-400 mt-1'>Gérez vos demandes de support</p>
            </div>
            <button
                onClick={onNewTicket}
                className='flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-pulsai-blue text-white rounded-xl font-bold hover:bg-pulsai-blue/90 transition-all shadow-md active:scale-95 whitespace-nowrap'
            >
                <Plus className='w-4 sm:w-5 h-4 sm:h-5' />
                <span>Nouveau ticket</span>
            </button>
        </div>
    );
}
