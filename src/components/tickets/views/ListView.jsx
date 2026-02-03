'use client';

import TicketListItem from '../TicketListItem';

export default function ListView({
    filteredTickets,
    selectedTicket,
    setSelectedTicket,
    priorityConfig,
    statusConfig,
    categoryLabels,
    isCondensed = false,
}) {
    return (
        <div className='bg-white dark:bg-card rounded-[20px] border border-gray-100 dark:border-border overflow-hidden transition-colors'>
            {filteredTickets.map((ticket) => (
                <TicketListItem
                    key={ticket.id}
                    ticket={ticket}
                    onClick={() => setSelectedTicket(ticket)}
                    isSelected={selectedTicket?.id === ticket.id}
                    priorityConfig={priorityConfig}
                    statusConfig={statusConfig}
                    categoryLabels={categoryLabels}
                    isCondensed={isCondensed}
                />
            ))}
        </div>
    );
}
