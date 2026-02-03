'use client';

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
            <div className="p-6 border-b border-gray-100 dark:border-border flex-shrink-0">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">#{ticket.number}</h2>
                        <span className={`px-2 py-1 rounded-lg text-xs font-bold ${priority.color}`}>
                            {priority.label.toUpperCase()}
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 text-2xl leading-none cursor-pointer"
                    >
                        ×
                    </button>
                </div>

                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{ticket.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{ticket.description}</p>
            </div>

            {/* Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                {/* Status */}
                <div>
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">Statut</p>
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${status.bg} w-fit`}>
                        <StatusIcon className={`w-4 h-4 ${status.color}`} />
                        <span className={`text-sm font-bold ${status.color}`}>{status.label}</span>
                    </div>
                </div>

                {/* Category */}
                <div>
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">Catégorie</p>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg inline-block">
                        {categoryLabels[ticket.category]}
                    </span>
                </div>

                {/* Customer */}
                <div>
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">Client</p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-pulsai-blue text-white flex items-center justify-center text-sm font-bold">
                            {ticket.customer.avatar}
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 dark:text-white">{ticket.customer.name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{ticket.customer.email}</p>
                        </div>
                    </div>
                </div>

                {/* Assigned To */}
                {ticket.assignedTo && (
                    <div>
                        <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">Assigné à</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center justify-center text-sm font-bold">
                                {ticket.assignedTo.avatar}
                            </div>
                            <p className="font-bold text-gray-900 dark:text-white">{ticket.assignedTo.name}</p>
                        </div>
                    </div>
                )}

                {/* AI Suggestion */}
                <div className="bg-gradient-to-r from-pulsai-blue/5 via-pulsai-blue/10 to-pulsai-green/10 dark:from-pulsai-blue/10 dark:via-pulsai-blue/20 dark:to-pulsai-green/20 rounded-[16px] p-4 border border-pulsai-blue/20 dark:border-pulsai-blue/30">
                    <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-pulsai-blue" />
                        <span className="text-xs font-bold text-pulsai-blue">Suggestion IA</span>
                    </div>
                    <p className="text-sm text-gray-800 dark:text-gray-100">
                        Ce ticket peut être résolu en vérifiant les logs d'authentification et en réinitialisant le cache de l'application.
                    </p>
                </div>

                {/* Response Input */}
                <div>
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">Écrire une réponse...</p>
                    <textarea
                        placeholder="Votre réponse..."
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pulsai-blue/20 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none"
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
