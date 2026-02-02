"use client";

import React from 'react';
import { Layers, Circle, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * TicketStatsCards - Cartes de statistiques cliquables
 * Performance: O(1) - Nombre fixe de cartes (5)
 */
export default function TicketStatsCards({ stats, selectedStatus, onStatusChange }) {
    const statCards = [
        { label: 'Tous', value: stats.total, icon: Layers, status: 'all' },
        { label: 'Ouverts', value: stats.open, icon: Circle, color: 'text-blue-600', status: 'open' },
        { label: 'En cours', value: stats.inProgress, icon: Clock, color: 'text-orange-600', status: 'in-progress' },
        { label: 'En attente', value: stats.pending, icon: AlertCircle, color: 'text-yellow-600', status: 'pending' },
        { label: 'Résolus', value: stats.resolved, icon: CheckCircle, color: 'text-green-600', status: 'resolved' }
    ];

    return (
        <div className="grid grid-cols-5 gap-4 flex-shrink-0">
            {statCards.map((stat, idx) => {
                const Icon = stat.icon;
                const isActive = selectedStatus === stat.status;
                
                return (
                    <motion.button
                        key={stat.status}
                        onClick={() => onStatusChange(stat.status)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`bg-white rounded-[20px] p-5 border-2 transition-all text-left ${
                            isActive ? 'border-pulsai-blue shadow-lg' : 'border-gray-100 hover:border-gray-200'
                        }`}
                    >
                        <div className="flex items-center justify-between mb-3">
                            <Icon className={`w-5 h-5 ${stat.color || 'text-gray-600'}`} />
                            <span className={`text-3xl font-bold ${isActive ? 'text-pulsai-blue' : 'text-gray-900'}`}>
                                {stat.value}
                            </span>
                        </div>
                        <p className="text-sm font-bold text-gray-600">{stat.label}</p>
                    </motion.button>
                );
            })}
        </div>
    );
}
