'use client';

import TicketCard from '../TicketCard';

const STATUSES = ['open', 'in-progress', 'resolved', 'closed'];

export default function KanbanView({
    getTicketsByStatus,
    statusConfig,
    selectedTicket,
    setSelectedTicket,
    priorityConfig,
    categoryLabels,
}) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {STATUSES.map((status) => {
                const tickets = getTicketsByStatus(status);
                const config = statusConfig[status];
                const Icon = config.icon;

                return (
                    <div key={status} className='w-full'>
                        <div className={`${config.bg} rounded-t-[20px] p-4 border-b-2 border-gray-100 dark:border-border`}>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <Icon className={`w-5 h-5 ${config.color}`} />
                                    <span className={`font-bold ${config.color}`}>{config.label}</span>
                                </div>
                                <span className='text-sm font-bold text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 px-2 py-1 rounded-lg shadow-sm'>
                                    {tickets.length}
                                </span>
                            </div>
                        </div>
                        <div className='bg-gray-50/50 dark:bg-gray-800/50 rounded-b-[20px] p-3 space-y-3 border border-t-0 border-gray-100 dark:border-border min-h-[200px] transition-colors'>
                            {tickets.map((ticket) => (
                                <TicketCard
                                    key={ticket.id}
                                    ticket={ticket}
                                    onClick={() => setSelectedTicket(ticket)}
                                    isSelected={selectedTicket?.id === ticket.id}
                                    priorityConfig={priorityConfig}
                                    categoryLabels={categoryLabels}
                                />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
