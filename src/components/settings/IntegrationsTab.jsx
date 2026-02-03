'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import IntegrationCard from './integration/IntegrationCard';

const INTEGRATIONS = [
    { id: 'slack', name: 'Slack', icon: '💬', connected: true, description: 'Recevez les notifications dans vos canaux Slack' },
    { id: 'zapier', name: 'Zapier', icon: '⚡', connected: true, description: 'Automatisez vos workflows' },
    { id: 'hubspot', name: 'HubSpot', icon: '🔄', connected: false, description: 'Synchronisez vos contacts' },
    { id: 'mailchimp', name: 'Mailchimp', icon: '📧', connected: false, description: 'Importez vos listes de diffusion' },
];

export default function IntegrationsTab() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-3xl w-full"
        >
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-2xl font-bold font-unbounded text-gray-900 dark:text-white mb-2">
                        Intégrations
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        Connectez vos outils préférés pour automatiser vos workflows
                    </p>
                </div>
                <button className="px-4 py-2 bg-pulsai-blue text-white font-bold rounded-xl hover:bg-pulsai-blue/90 transition-all flex items-center gap-2">
                    <Plus size={18} />
                    Nouvelle intégration
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {INTEGRATIONS.map((integration) => (
                    <IntegrationCard key={integration.id} integration={integration} />
                ))}
            </div>
        </motion.div>
    );
}
