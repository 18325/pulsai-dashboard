'use client';

import { motion } from 'framer-motion';
import { CreditCard } from 'lucide-react';

const BILLING_HISTORY = [
    { id: 1, date: '15 Jan 2024', amount: '€99.00', plan: 'Pro', status: 'Payé' },
    { id: 2, date: '15 Déc 2023', amount: '€99.00', plan: 'Pro', status: 'Payé' },
    { id: 3, date: '15 Nov 2023', amount: '€99.00', plan: 'Pro', status: 'Payé' },
];

export default function BillingTab() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-3xl w-full"
        >
            <div className="mb-6">
                <h3 className="text-2xl font-bold font-unbounded text-gray-900 dark:text-white mb-2">
                    Facturation
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                    Gérez votre abonnement et vos factures
                </p>
            </div>

            <div className="space-y-6 w-full">
                <div className="p-6 bg-gradient-to-br from-pulsai-blue/10 to-pulsai-green/10 dark:from-pulsai-blue/20 dark:to-pulsai-green/20 rounded-2xl border border-pulsai-blue/20 dark:border-pulsai-blue/30">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Plan Pro</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Renouvellement le 15 Février 2024</p>
                        </div>
                        <div className="text-right">
                            <p className="text-3xl font-bold font-unbounded text-gray-900 dark:text-white">€99</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">/mois</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-6 py-3 bg-pulsai-blue text-white font-bold rounded-xl hover:bg-pulsai-blue/90 transition-all">
                            Changer de plan
                        </button>
                        <button className="px-6 py-3 bg-white dark:bg-card border border-gray-200 dark:border-border text-gray-700 dark:text-gray-300 font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                            Annuler l'abonnement
                        </button>
                    </div>
                </div>

                <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-border">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Méthode de paiement</h4>
                    <div className="flex items-center justify-between p-4 bg-white dark:bg-card rounded-xl border border-gray-200 dark:border-border">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                                <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 dark:text-white">•••• •••• •••• 4242</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Expire le 12/25</p>
                            </div>
                        </div>
                        <button className="px-4 py-2 bg-white dark:bg-card border border-gray-200 dark:border-border text-gray-700 dark:text-gray-300 font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                            Modifier
                        </button>
                    </div>
                </div>

                <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-border">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Historique de facturation</h4>
                    <div className="space-y-3">
                        {BILLING_HISTORY.map((invoice) => (
                            <div
                                key={invoice.id}
                                className="flex items-center justify-between p-4 bg-white dark:bg-card rounded-xl border border-gray-200 dark:border-border"
                            >
                                <div>
                                    <p className="font-bold text-gray-900 dark:text-white">{invoice.date}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{invoice.plan}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="font-bold text-gray-900 dark:text-white">{invoice.amount}</span>
                                    <span className="px-3 py-1 bg-pulsai-green/20 dark:bg-pulsai-green/20 text-pulsai-green dark:text-pulsai-green text-xs font-bold rounded-lg">
                                        {invoice.status}
                                    </span>
                                    <button className="text-pulsai-blue hover:text-pulsai-blue/80 dark:hover:text-blue-400 font-bold text-sm">
                                        Télécharger
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
