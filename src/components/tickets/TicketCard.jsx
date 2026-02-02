
"use client";

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * TicketCard - Composant réutilisable pour afficher un ticket en mode carte
 * @param {Object} ticket - Données du ticket
 * @param {Function} onClick - Callback au clic
 * @param {boolean} isSelected - Indicateur de sélection
 * @param {Object} priorityConfig - Configuration des priorités
 * @param {Object} categoryLabels - Labels des catégories
 */
export default function TicketCard({ ticket, onClick, isSelected, priorityConfig, categoryLabels }) {
    const priority = priorityConfig[ticket.priority];

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`bg-white rounded-[16px] p-4 cursor-pointer transition-all border-2 ${
                isSelected ? 'border-pulsai-blue shadow-lg' : 'border-gray-100 hover:border-gray-200 hover:shadow-md'
            }`}
        >
            {/* Priority Badge */}
            <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-1 rounded-lg text-xs font-bold ${priority.color}`}>
                    {priority.label.toUpperCase()}
                </span>
                <span className="text-xs font-bold text-gray-400">#{ticket.number}</span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-gray-900 text-sm mb-2 line-clamp-2">{ticket.title}</h3>

            {/* Description */}
            <p className="text-xs text-gray-500 mb-3 line-clamp-2">{ticket.description}</p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-pulsai-blue text-white flex items-center justify-center text-xs font-bold">
                        {ticket.customer.avatar}
                    </div>
                    <span className="text-xs text-gray-600 truncate">{ticket.customer.name}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-400">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span className="text-xs font-bold">{ticket.messages}</span>
                </div>
            </div>
        </motion.div>
    );
}

const SparklesIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
);
