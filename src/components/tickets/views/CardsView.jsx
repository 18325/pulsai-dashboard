'use client';

import TicketCard from '../TicketCard';

export default function CardsView({
    filteredTickets,
    selectedTicket,
    setSelectedTicket,
    priorityConfig,
    categoryLabels,
}) {
    const gridCols = selectedTicket ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2';

    return (
        <div className={`grid ${gridCols} gap-4`}>
            {filteredTickets.map((ticket) => (
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
    );
}
