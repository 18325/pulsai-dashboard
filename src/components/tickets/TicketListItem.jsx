"use client";

import React from 'react';
import { MessageSquare } from 'lucide-react';

/**
 * TicketListItem - Composant pour afficher un ticket en mode liste
 * Optimisé pour affichage tabulaire avec toutes les infos sur une ligne
 */
export default function TicketListItem({ ticket, onClick, isSelected, priorityConfig, statusConfig, categoryLabels }) {
    const priority = priorityConfig[ticket.priority];
    const status = statusConfig[ticket.status];
    const StatusIcon = status.icon;

    return (
        <div
            onClick={onClick}
            className={`flex items-center gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-all ${
                isSelected ? 'bg-blue-50 border-l-4 border-l-pulsai-blue' : ''
            }`}
        >
            <div className="flex-shrink-0">
                <span className={`px-2 py-1 rounded-lg text-xs font-bold ${priority.color}`}>
                    {priority.label.toUpperCase()}
                </span>
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-gray-400">#{ticket.number}</span>
                    <span className="text-xs text-gray-400">{categoryLabels[ticket.category]}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm truncate">{ticket.title}</h3>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-pulsai-blue text-white flex items-center justify-center text-xs font-bold">
                        {ticket.customer.avatar}
                    </div>
                    <span className="text-xs text-gray-600">{ticket.customer.name}</span>
                </div>

                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${status.bg}`}>
                    <StatusIcon className={`w-4 h-4 ${status.color}`} />
                    <span className={`text-xs font-bold ${status.color}`}>{status.label}</span>
                </div>

                <div className="flex items-center gap-1 text-gray-400">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-xs font-bold">{ticket.messages}</span>
                </div>

                <span className="text-xs text-gray-400">{ticket.timeAgo}</span>
            </div>
        </div>
    );
}
