"use client";

import React, { useState, useMemo } from 'react';
import { Plus, Circle, Clock, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import mockTickets, { ticketStats } from '@/data/mockTickets';
import TicketCard from '@/components/tickets/TicketCard';
import TicketListItem from '@/components/tickets/TicketListItem';
import TicketDetailPanel from '@/components/tickets/TicketDetailPanel';
import TicketStatsCards from '@/components/tickets/TicketStatsCards';
import TicketToolbar from '@/components/tickets/TicketToolbar';

/**
 * TicketsPage - Page principale de gestion des tickets
 * Architecture: Séparation des responsabilités (SRP)
 * Performance: Filtrage O(n) avec useMemo pour éviter recalculs
 */
export default function TicketsPage() {
    // State management - Groupé par responsabilité
    const [view, setView] = useState('kanban');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPriority, setSelectedPriority] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [selectedTicket, setSelectedTicket] = useState(null);

    // Configuration - Extrait pour réutilisabilité (DRY)
    const priorityConfig = {
        urgent: { label: 'Urgent', color: 'bg-red-100 text-red-700', dot: 'bg-red-500' },
        medium: { label: 'Moyenne', color: 'bg-yellow-100 text-yellow-700', dot: 'bg-yellow-500' },
        low: { label: 'Faible', color: 'bg-gray-100 text-gray-600', dot: 'bg-gray-400' }
    };

    const statusConfig = {
        open: { label: 'Ouvert', icon: Circle, color: 'text-blue-600', bg: 'bg-blue-50' },
        'in-progress': { label: 'En cours', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
        resolved: { label: 'Résolu', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
        closed: { label: 'Fermé', icon: CheckCircle, color: 'text-gray-600', bg: 'bg-gray-50' }
    };

    const categoryLabels = {
        bug: 'Bug',
        technical: 'Technique',
        'feature-request': 'Feature Request',
        billing: 'Facturation',
        support: 'Support'
    };

    // Filtrage optimisé avec useMemo - O(n) complexité
    const filteredTickets = useMemo(() => {
        let filtered = mockTickets;

        if (selectedPriority !== 'all') {
            filtered = filtered.filter(t => t.priority === selectedPriority);
        }
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(t => t.category === selectedCategory);
        }
        if (selectedStatus !== 'all') {
            filtered = filtered.filter(t => t.status === selectedStatus);
        }
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(t =>
                t.title.toLowerCase().includes(query) ||
                t.number.includes(query) ||
                t.customer.name.toLowerCase().includes(query)
            );
        }

        return filtered;
    }, [selectedPriority, selectedCategory, selectedStatus, searchQuery]);

    // Helper pour Kanban - O(n) par status
    const getTicketsByStatus = (status) => {
        return filteredTickets.filter(t => t.status === status);
    };

    return (
        <div className="flex flex-col space-y-6 pb-10">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold font-unbounded text-gray-900">Tickets</h1>
                    <p className="text-gray-500 mt-1">Gérez vos demandes de support</p>
                </div>
                <button className="flex items-center gap-2 px-5 py-3 bg-pulsai-blue text-white rounded-xl font-bold hover:bg-pulsai-blue/90 transition-all shadow-md">
                    <Plus className="w-5 h-5" />
                    Nouveau ticket
                </button>
            </div>

            {/* Stats Cards Component */}
            <TicketStatsCards 
                stats={ticketStats}
                selectedStatus={selectedStatus}
                onStatusChange={setSelectedStatus}
            />

            {/* Toolbar Component */}
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

            {/* Main Content - Structure Page (Scroll Global) */}
            <div className="flex gap-6 items-start relative">
                {/* Tickets Display */}
                <div className={`${selectedTicket ? 'w-[450px] flex-shrink-0' : 'flex-1'} transition-all duration-300`}>
                    
                    {/* Kanban View */}
                    {view === 'kanban' && (
                        <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
                            {['open', 'in-progress', 'resolved', 'closed'].map((status) => {
                                const tickets = getTicketsByStatus(status);
                                const config = statusConfig[status];
                                const Icon = config.icon;

                                return (
                                    <div key={status} className="flex-shrink-0 w-[320px]">
                                        <div className={`${config.bg} rounded-t-[20px] p-4 border-b-2 border-gray-100`}>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Icon className={`w-5 h-5 ${config.color}`} />
                                                    <span className={`font-bold ${config.color}`}>{config.label}</span>
                                                </div>
                                                <span className="text-sm font-bold text-gray-600 bg-white px-2 py-1 rounded-lg shadow-sm">
                                                    {tickets.length}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50/50 rounded-b-[20px] p-3 space-y-3 border border-t-0 border-gray-100 min-h-[200px]">
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
                    )}

                    {/* List View */}
                    {view === 'list' && (
                        <div className="bg-white rounded-[20px] border border-gray-100 overflow-hidden">
                            {filteredTickets.map((ticket) => (
                                <TicketListItem
                                    key={ticket.id}
                                    ticket={ticket}
                                    onClick={() => setSelectedTicket(ticket)}
                                    isSelected={selectedTicket?.id === ticket.id}
                                    priorityConfig={priorityConfig}
                                    statusConfig={statusConfig}
                                    categoryLabels={categoryLabels}
                                />
                            ))}
                        </div>
                    )}

                    {/* Cards View */}
                    {view === 'cards' && (
                        <div className={`grid ${selectedTicket ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
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
                    )}
                </div>

                {/* Ticket Detail Panel - Sticky Right */}
                <AnimatePresence mode="wait">
                    {selectedTicket && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="flex-1 sticky top-6 bg-white rounded-[24px] border border-gray-100 shadow-xl overflow-hidden max-h-[calc(100vh-3rem)] overflow-y-auto custom-scrollbar"
                        >
                            <TicketDetailPanel
                                ticket={selectedTicket}
                                onClose={() => setSelectedTicket(null)}
                                priorityConfig={priorityConfig}
                                statusConfig={statusConfig}
                                categoryLabels={categoryLabels}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
        </div>
    );
}
