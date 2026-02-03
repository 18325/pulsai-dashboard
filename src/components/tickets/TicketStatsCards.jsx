'use client';

import { Layers, Circle, Clock, AlertCircle, CheckCircle, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * TicketStatsCards - Cartes de statistiques cliquables avec style premium
 */
export default function TicketStatsCards({ stats }) {
    const statCards = [
        {
            label: 'Tous',
            value: stats.total,
            icon: Layers,
            status: 'all',
            theme: 'blue',
            trend: '+5%'
        },
        {
            label: 'Ouverts',
            value: stats.open,
            icon: Circle,
            status: 'open',
            theme: 'dark',
            trend: '+12%'
        },
        {
            label: 'En cours',
            value: stats.inProgress,
            icon: Clock,
            status: 'in-progress',
            theme: 'green',
            trend: '+8%'
        },
        {
            label: 'Résolus',
            value: stats.resolved,
            icon: CheckCircle,
            status: 'resolved',
            theme: 'gray',
            trend: '-2%'
        }
    ];

    // Card themes configuration
    const cardThemes = {
        blue: {
            wrapper: 'bg-gradient-to-br from-blue-50/20 to-transparent dark:from-blue-900/20 dark:to-transparent',
            border: 'border-blue-100 dark:border-blue-900/30',
            iconBg: 'bg-blue-500',
            shadow: 'shadow-blue-500/5 dark:shadow-none',
            glow: 'from-blue-500/20',
        },
        green: {
            wrapper: 'bg-gradient-to-br from-pulsai-green/10 to-transparent dark:from-pulsai-green/20 dark:to-transparent',
            border: 'border-pulsai-green/20 dark:border-pulsai-green/30',
            iconBg: 'bg-pulsai-green',
            shadow: 'shadow-pulsai-green/10 dark:shadow-none',
            glow: 'from-pulsai-green/20',
        },
        dark: {
            wrapper: 'bg-gradient-to-br from-gray-100/30 to-transparent dark:from-gray-800/30 dark:to-transparent',
            border: 'border-gray-200 dark:border-gray-700',
            iconBg: 'bg-gray-900 dark:bg-gray-700',
            shadow: 'shadow-gray-900/5 dark:shadow-none',
            glow: 'from-gray-900/20',
        },
        gray: {
            wrapper: 'bg-gradient-to-br from-gray-100/20 to-transparent dark:from-gray-800/20 dark:to-transparent',
            border: 'border-gray-200 dark:border-gray-800',
            iconBg: 'bg-gray-200 dark:bg-gray-800',
            shadow: 'shadow-gray-200/20 dark:shadow-none',
            glow: 'from-gray-400/20',
        },
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-shrink-0">
            {statCards.map((stat) => {
                const Icon = stat.icon;
                const theme = cardThemes[stat.theme] || cardThemes.gray;

                return (
                    <motion.div
                        key={stat.status}
                        whileHover={{ y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className={`relative p-6 rounded-[32px] border ${theme.border} ${theme.wrapper} ${theme.shadow} shadow-lg flex flex-col justify-between overflow-hidden group text-left`}
                    >
                        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${theme.glow} to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${theme.iconBg} opacity-[0.03]`} />

                        <div className='flex justify-between items-start mb-4 relative z-10'>
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${theme.iconBg} text-white shadow-md`}>
                                <Icon size={22} strokeWidth={2} />
                            </div>
                            <div className='flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border bg-pulsai-green/15 dark:bg-pulsai-green/20 text-pulsai-gray-dark dark:text-white border-pulsai-green/30 dark:border-pulsai-green/40 backdrop-blur-sm'>
                                <ArrowUpRight size={12} />
                                <span>{stat.trend}</span>
                            </div>
                        </div>

                        <div className='relative z-10'>
                            <h3 className='text-gray-500 dark:text-gray-400 font-bold text-xs mb-1 uppercase tracking-wider'>
                                {stat.label}
                            </h3>
                            <span className='text-3xl font-bold font-unbounded text-gray-900 dark:text-white tracking-tight'>
                                {stat.value}
                            </span>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
