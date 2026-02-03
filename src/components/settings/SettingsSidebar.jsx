'use client';

import { User, Bell, Lock, Globe, CreditCard, ChevronRight } from 'lucide-react';

const TABS = [
    { id: 'profile', label: 'Mon Profil', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Sécurité', icon: Lock },
    { id: 'integrations', label: 'Intégrations', icon: Globe },
    { id: 'billing', label: 'Facturation', icon: CreditCard },
];

export default function SettingsSidebar({ activeTab, onTabChange }) {
    return (
        <div className="w-full md:w-64 bg-white dark:bg-card border border-gray-100 dark:border-border rounded-3xl p-4 shadow-xl flex flex-col h-fit transition-colors">
            <h2 className="text-xl font-bold font-unbounded text-gray-800 dark:text-white mb-6 px-2">
                Paramètres
            </h2>
            <nav className="space-y-1">
                {TABS.map(tab => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    
                    return (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                                isActive
                                    ? 'bg-pulsai-blue text-white shadow-lg shadow-pulsai-blue/30'
                                    : 'text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800 hover:text-pulsai-blue dark:hover:text-white'
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                <Icon size={18} />
                                {tab.label}
                            </div>
                            {isActive && <ChevronRight size={16} />}
                        </button>
                    );
                })}
            </nav>
        </div>
    );
}
