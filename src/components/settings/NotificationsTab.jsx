'use client';

import { motion } from 'framer-motion';
import { Mail, Bell, Smartphone, Save } from 'lucide-react';
import ToggleSwitch from './ToggleSwitch';

const NOTIFICATION_CHANNELS = [
    { key: 'email', label: 'Email', description: 'Recevez des notifications par email', icon: Mail },
    { key: 'push', label: 'Notifications push', description: 'Notifications dans le navigateur', icon: Bell },
    { key: 'sms', label: 'SMS', description: 'Notifications par SMS', icon: Smartphone },
];

const NOTIFICATION_TYPES = [
    { key: 'tickets', label: 'Nouveaux tickets', description: 'Quand un nouveau ticket est créé' },
    { key: 'campaigns', label: 'Campagnes', description: 'Statut des campagnes marketing' },
    { key: 'contacts', label: 'Nouveaux contacts', description: 'Quand un nouveau contact est ajouté' },
    { key: 'weeklyReport', label: 'Rapport hebdomadaire', description: 'Résumé hebdomadaire des performances' },
];

export default function NotificationsTab({ notifications, onNotificationChange }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-2xl w-full"
        >
            <h3 className="text-2xl font-bold font-unbounded text-gray-900 dark:text-white mb-6">
                Préférences de Notifications
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
                Gérez comment et quand vous recevez des notifications
            </p>

            <div className="space-y-6 w-full">
                <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Canaux de notification</h4>
                    <div className="space-y-3">
                        {NOTIFICATION_CHANNELS.map(({ key, label, description, icon: Icon }) => (
                            <div key={key} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-border">
                                <div className="flex items-center gap-3 flex-1">
                                    <Icon className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                                    <div className="flex-1">
                                        <p className="font-bold text-gray-900 dark:text-white">{label}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => onNotificationChange(key)}
                                    className={`relative w-12 h-6 rounded-full transition-colors flex-shrink-0 ${
                                        notifications[key] ? 'bg-pulsai-blue' : 'bg-gray-300 dark:bg-gray-700'
                                    }`}
                                >
                                    <span
                                        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                                            notifications[key] ? 'translate-x-6' : ''
                                        }`}
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Types de notifications</h4>
                    <div className="space-y-3">
                        {NOTIFICATION_TYPES.map(({ key, label, description }) => (
                            <ToggleSwitch
                                key={key}
                                enabled={notifications[key]}
                                onChange={() => onNotificationChange(key)}
                                label={label}
                                description={description}
                            />
                        ))}
                    </div>
                </div>

                <div className="pt-4 flex justify-end">
                    <button className="px-6 py-3 bg-pulsai-blue text-white font-bold rounded-xl shadow-lg shadow-pulsai-blue/30 hover:bg-pulsai-blue/90 transition-all flex items-center gap-2">
                        <Save size={18} />
                        Enregistrer les préférences
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
