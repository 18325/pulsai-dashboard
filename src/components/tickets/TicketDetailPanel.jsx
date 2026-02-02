"use client";

import React from 'react';
import { Sparkles } from 'lucide-react';

/**
 * TicketDetailPanel - Panel latéral pour afficher les détails complets d'un ticket
 * Inclut formulaire de réponse et suggestions IA
 */
export default function TicketDetailPanel({ ticket, onClose, priorityConfig, statusConfig, categoryLabels }) {
    const priority = priorityConfig[ticket.priority];
    const status = statusConfig[ticket.status];
    const StatusIcon = status.icon;

    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex-shrink-0">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-1">#{ticket.number}</h2>
                        <span className={`px-2 py-1 rounded-lg text-xs font-bold ${priority.color}`}>
                            {priority.label.toUpperCase()}
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                    >
                        ×
                    </button>
                </div>

                <h3 className="font-bold text-gray-900 mb-2">{ticket.title}</h3>
                <p className="text-sm text-gray-600">{ticket.description}</p>
            </div>

            {/* Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                {/* Status */}
                <div>
                    <p className="text-xs font-bold text-gray-500 mb-2">Statut</p>
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${status.bg} w-fit`}>
                        <StatusIcon className={`w-4 h-4 ${status.color}`} />
                        <span className={`text-sm font-bold ${status.color}`}>{status.label}</span>
                    </div>
                </div>

                {/* Category */}
                <div>
                    <p className="text-xs font-bold text-gray-500 mb-2">Catégorie</p>
                    <span className="text-sm font-bold text-gray-700 bg-gray-100 px-3 py-2 rounded-lg inline-block">
                        {categoryLabels[ticket.category]}
                    </span>
                </div>

                {/* Customer */}
                <div>
                    <p className="text-xs font-bold text-gray-500 mb-2">Client</p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-pulsai-blue text-white flex items-center justify-center text-sm font-bold">
                            {ticket.customer.avatar}
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">{ticket.customer.name}</p>
                            <p className="text-xs text-gray-500">{ticket.customer.email}</p>
                        </div>
                    </div>
                </div>

                {/* Assigned To */}
                {ticket.assignedTo && (
                    <div>
                        <p className="text-xs font-bold text-gray-500 mb-2">Assigné à</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-sm font-bold">
                                {ticket.assignedTo.avatar}
                            </div>
                            <p className="font-bold text-gray-900">{ticket.assignedTo.name}</p>
                        </div>
                    </div>
                )}

                {/* AI Suggestion */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-[16px] p-4 border border-indigo-100">
                    <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-indigo-600" />
                        <span className="text-xs font-bold text-indigo-700">Suggestion IA</span>
                    </div>
                    <p className="text-sm text-indigo-900">
                        Ce ticket peut être résolu en vérifiant les logs d'authentification et en réinitialisant le cache de l'application.
                    </p>
                </div>

                {/* Response Input */}
                <div>
                    <p className="text-xs font-bold text-gray-500 mb-2">Écrire une réponse...</p>
                    <textarea
                        placeholder="Votre réponse..."
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pulsai-blue/20 text-sm resize-none"
                        rows={4}
                    />
                    <button className="mt-2 w-full bg-pulsai-blue text-white font-bold py-3 rounded-xl hover:bg-pulsai-blue/90 transition-all">
                        Envoyer
                    </button>
                </div>
            </div>
        </div>
    );
}
