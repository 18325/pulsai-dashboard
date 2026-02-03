'use client';

import { MessageSquare } from 'lucide-react';

/**
 * TicketListItem - Affiche un ticket dans une liste
 * @param {Object} ticket - Données du ticket
 * @param {Function} onClick - Callback au clic
 * @param {boolean} isSelected - État de sélection
 * @param {Object} priorityConfig - Configuration des priorités
 * @param {Object} statusConfig - Configuration des statuts
 * @param {Object} categoryLabels - Labels des catégories
 * @param {boolean} isCondensed - Mode condensé
 */
export default function TicketListItem({
    ticket,
    onClick,
    isSelected,
    priorityConfig,
    statusConfig,
    categoryLabels,
    isCondensed = false,
}) {
    const priority = priorityConfig[ticket.priority];
    const status = statusConfig[ticket.status];
    const StatusIcon = status.icon;

    return (
        <div
            onClick={onClick}
            className={`flex items-center gap-3 p-3 border-b border-gray-100 dark:border-border hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-all ${isSelected ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-l-pulsai-blue' : ''
                }`}
        >
            <div className='flex-shrink-0'>
                <span className={`px-2 py-1 rounded-lg text-xs font-bold ${priority.color}`}>
                    {isCondensed ? priority.label.charAt(0) : priority.label.toUpperCase()}
                </span>
            </div>

            <div className='flex-1 min-w-0'>
                <div className='flex items-center gap-2 mb-1'>
                    <span className='text-xs font-bold text-gray-400 dark:text-gray-500'>#{ticket.number}</span>
                    {!isCondensed && (
                        <span className='text-xs text-gray-400 dark:text-gray-500'>{categoryLabels[ticket.category]}</span>
                    )}
                </div>
                <h3 className='font-bold text-gray-900 dark:text-white text-sm truncate'>{ticket.title}</h3>
            </div>

            {!isCondensed ? (
                <div className='flex items-center gap-4 flex-shrink-0'>
                    <div className='flex items-center gap-2'>
                        <div className='w-6 h-6 rounded-full bg-pulsai-blue text-white flex items-center justify-center text-xs font-bold'>
                            {ticket.customer.avatar}
                        </div>
                        <span className='text-xs text-gray-600 dark:text-gray-300'>{ticket.customer.name}</span>
                    </div>

                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${status.bg}`}>
                        <StatusIcon className={`w-4 h-4 ${status.color}`} />
                        <span className={`text-xs font-bold ${status.color}`}>{status.label}</span>
                    </div>

                    <div className='flex items-center gap-1 text-gray-400 dark:text-gray-500'>
                        <MessageSquare className='w-4 h-4' />
                        <span className='text-xs font-bold'>{ticket.messages}</span>
                    </div>

                    <span className='text-xs text-gray-400 dark:text-gray-500'>{ticket.timeAgo}</span>
                </div>
            ) : (
                <div className='flex items-center gap-2 flex-shrink-0'>
                    <div className='w-6 h-6 rounded-full bg-pulsai-blue text-white flex items-center justify-center text-xs font-bold'>
                        {ticket.customer.avatar}
                    </div>
                    <StatusIcon className={`w-4 h-4 ${status.color}`} />
                </div>
            )}
        </div>
    );
}
