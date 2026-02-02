
"use client";

import React, { useState } from 'react';
import { User, Bell, Lock, Globe, Moon, CreditCard, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'Mon Profil', icon: User },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'security', label: 'Sécurité', icon: Lock },
        { id: 'integrations', label: 'Intégrations', icon: Globe },
        { id: 'billing', label: 'Facturation', icon: CreditCard },
    ];

    return (
        <div className="h-full flex flex-col md:flex-row gap-8">
            {/* Sidebar Settings */}
            <div className="w-full md:w-64 bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-4 shadow-xl shadow-gray-100/50 flex flex-col h-fit">
                <h2 className="text-xl font-bold font-unbounded text-gray-800 mb-6 px-2">Paramètres</h2>
                <nav className="space-y-1">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id
                                    ? 'bg-pulsai-blue text-white shadow-lg shadow-pulsai-blue/30'
                                    : 'text-gray-500 hover:bg-white hover:text-pulsai-blue'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <tab.icon size={18} />
                                {tab.label}
                            </div>
                            {activeTab === tab.id && <ChevronRight size={16} />}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-xl shadow-gray-100/50">
                {activeTab === 'profile' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-xl">
                        <h3 className="text-2xl font-bold font-unbounded text-gray-900 mb-6">Informations Personnelles</h3>

                        <div className="flex items-center gap-6 mb-8">
                            <div className="relative group">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4" className="w-24 h-24 rounded-2xl bg-gray-100" alt="Profile" />
                                <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold cursor-pointer">
                                    Modifier
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Alexandre D.</h4>
                                <p className="text-gray-500">Admin Système</p>
                                <button className="text-pulsai-blue text-sm font-bold mt-1">Changer l'avatar</button>
                            </div>
                        </div>

                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Prénom</label>
                                    <input type="text" defaultValue="Alexandre" className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-pulsai-blue" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Nom</label>
                                    <input type="text" defaultValue="Dupont" className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-pulsai-blue" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Email</label>
                                <input type="email" defaultValue="alex.dupont@pulsai.com" className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-pulsai-blue" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Bio</label>
                                <textarea className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-pulsai-blue" rows="3" defaultValue="Passionné par l'IA et l'automatisation."></textarea>
                            </div>

                            <div className="pt-4 flex justify-end">
                                <button className="px-6 py-3 bg-pulsai-blue text-white font-bold rounded-xl shadow-lg shadow-pulsai-blue/30 hover:bg-pulsai-blue/90 transition-all">
                                    Enregistrer
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}

                {activeTab === 'notifications' && (
                    <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
                        <Bell size={48} className="mb-4 text-gray-200" />
                        <h3 className="text-lg font-bold">Paramètres de Notifications</h3>
                        <p>Bientôt disponible...</p>
                    </div>
                )}
            </div>
        </div>
    );
}
