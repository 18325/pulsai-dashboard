'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mockTickets, { ticketStats } from '@/data/mockTickets';
import TicketDetailPanel from '@/components/tickets/TicketDetailPanel';
import TicketStatsCards from '@/components/tickets/TicketStatsCards';
import TicketToolbar from '@/components/tickets/TicketToolbar';
import TicketsHeader from '@/components/tickets/TicketsHeader';
import KanbanView from '@/components/tickets/views/KanbanView';
import ListView from '@/components/tickets/views/ListView';
import CardsView from '@/components/tickets/views/CardsView';
import { PRIORITY_CONFIG, STATUS_CONFIG, CATEGORY_LABELS } from '@/config/ticketConfig';
import Modal from '@/components/ui/Modal';
import TicketForm from '@/components/forms/TicketForm';

export default function TicketsPage() {
    const [view, setView] = useState('kanban');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPriority, setSelectedPriority] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const filteredTickets = useMemo(() => {
        let filtered = mockTickets;

        if (selectedPriority !== 'all') {
            filtered = filtered.filter((t) => t.priority === selectedPriority);
        }
        if (selectedCategory !== 'all') {
            filtered = filtered.filter((t) => t.category === selectedCategory);
        }
        if (selectedStatus !== 'all') {
            filtered = filtered.filter((t) => t.status === selectedStatus);
        }
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (t) =>
                    t.title.toLowerCase().includes(query) ||
                    t.number.includes(query) ||
                    t.customer.name.toLowerCase().includes(query)
            );
        }

        return filtered;
    }, [selectedPriority, selectedCategory, selectedStatus, searchQuery]);

    const getTicketsByStatus = (status) => filteredTickets.filter((t) => t.status === status);

    const viewProps = {
        filteredTickets,
        getTicketsByStatus,
        selectedTicket,
        setSelectedTicket,
        priorityConfig: PRIORITY_CONFIG,
        statusConfig: STATUS_CONFIG,
        categoryLabels: CATEGORY_LABELS,
    };

    return (
        <div className='flex flex-col pb-10'>
            <TicketsHeader onNewTicket={() => setIsFormOpen(true)} />
            <div className='mb-6'>
                <TicketStatsCards stats={ticketStats} />
            </div>

            {/* Toolbar - Stacked on Mobile */}
            <div className='mb-6'>
                <TicketToolbar
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    selectedPriority={selectedPriority}
                    onPriorityChange={setSelectedPriority}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    view={view}
                    onViewChange={setView}
                />
            </div>

            {/* Mobile Layout - Vertical Stack */}
            <div className='md:hidden flex flex-col gap-6'>
                {selectedTicket && (
                    <div className='bg-white dark:bg-card rounded-[24px] border border-gray-100 dark:border-border shadow-xl overflow-hidden'>
                        <div className='p-4 border-b border-gray-100 dark:border-border flex justify-between items-center'>
                            <h3 className='font-bold text-gray-900 dark:text-white'>Détails du ticket</h3>
                            <button
                                onClick={() => setSelectedTicket(null)}
                                className='p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className='max-h-[50vh] overflow-y-auto'>
                            <TicketDetailPanel
                                ticket={selectedTicket}
                                onClose={() => setSelectedTicket(null)}
                                priorityConfig={PRIORITY_CONFIG}
                                statusConfig={STATUS_CONFIG}
                                categoryLabels={CATEGORY_LABELS}
                            />
                        </div>
                    </div>
                )}

                <div className='bg-white dark:bg-card rounded-[24px] border border-gray-100 dark:border-border shadow-sm p-4'>
                    <h3 className='font-bold text-gray-900 dark:text-white mb-4'>Liste des tickets</h3>
                    {view === 'kanban' && <KanbanView {...viewProps} />}
                    {view === 'list' && <ListView {...viewProps} isCondensed={!!selectedTicket} />}
                    {view === 'cards' && <CardsView {...viewProps} />}
                </div>
            </div>

            {/* Desktop Layout - Side by Side */}
            <div className='hidden md:flex flex-col md:flex-row gap-6 items-start relative'>
                <div
                    className={`${selectedTicket ? 'w-full md:w-[450px] flex-shrink-0' : 'w-full'
                        } transition-all duration-300`}
                >
                    {view === 'kanban' && <KanbanView {...viewProps} />}
                    {view === 'list' && <ListView {...viewProps} isCondensed={!!selectedTicket} />}
                    {view === 'cards' && <CardsView {...viewProps} />}
                </div>

                <AnimatePresence mode='wait'>
                    {selectedTicket && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className='w-full md:flex-1 sticky top-6 bg-white dark:bg-card rounded-[24px] border border-gray-100 dark:border-border shadow-xl overflow-hidden max-h-[calc(100vh-3rem)] overflow-y-auto custom-scrollbar'
                        >
                            <TicketDetailPanel
                                ticket={selectedTicket}
                                onClose={() => setSelectedTicket(null)}
                                priorityConfig={PRIORITY_CONFIG}
                                statusConfig={STATUS_CONFIG}
                                categoryLabels={CATEGORY_LABELS}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Modal for creating new ticket */}
            <Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}>
                <TicketForm
                    onSubmit={(data) => {
                        // TODO: Add to mock data or API call
                        setIsFormOpen(false);
                    }}
                    onCancel={() => setIsFormOpen(false)}
                />
            </Modal>
        </div>
    );
}
