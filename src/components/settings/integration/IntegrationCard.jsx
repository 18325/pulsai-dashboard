'use client';

import { CheckCircle, Edit2, Trash2 } from 'lucide-react';

/**
 * Displays a single integration card with connection status and actions
 * @param {Object} props - Component props
 * @param {Object} props.integration - Integration data object
 * @param {string} props.integration.id - Integration ID
 * @param {string} props.integration.name - Integration name
 * @param {string} props.integration.icon - Integration icon emoji
 * @param {boolean} props.integration.connected - Connection status
 * @param {string} props.integration.description - Integration description
 */
export default function IntegrationCard({ integration }) {
    return (
        <div
            key={integration.id}
            className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-border hover:border-pulsai-blue/30 dark:hover:border-pulsai-blue/30 transition-all flex flex-col h-full"
        >
            <div className="flex items-start justify-between mb-4 flex-1">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-card flex items-center justify-center text-2xl border border-gray-200 dark:border-border flex-shrink-0">
                        {integration.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                            <h4 className="font-bold text-gray-900 dark:text-white">
                                {integration.name}
                            </h4>
                            {integration.connected && (
                                <span className="px-2 py-1 bg-pulsai-green/20 dark:bg-pulsai-green/20 text-pulsai-green dark:text-pulsai-green text-xs font-bold rounded-lg flex items-center gap-1 flex-shrink-0">
                                    <CheckCircle size={12} />
                                    Connecté
                                </span>
                            )}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            {integration.description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 mt-4">
                {integration.connected ? (
                    <>
                        <button className="flex-1 px-4 py-2 bg-white dark:bg-card border border-gray-200 dark:border-border text-gray-700 dark:text-gray-300 font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2">
                            <Edit2 size={16} />
                            Configurer
                        </button>
                        <button className="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-bold rounded-xl hover:bg-red-100 dark:hover:bg-red-900/30 transition-all">
                            <Trash2 size={16} />
                        </button>
                    </>
                ) : (
                    <button className="w-full px-4 py-2 bg-pulsai-blue text-white font-bold rounded-xl hover:bg-pulsai-blue/90 transition-all">
                        Connecter
                    </button>
                )}
            </div>
        </div>
    );
}
