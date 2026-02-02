
"use client";

import React from 'react';
import { AreaChart, SegmentedDonutChart } from '@/components/analytics/ChartWidgets';
import { TrendingUp, Users, Clock, ThumbsUp } from 'lucide-react';

export default function AnalyticsPage() {
    const weeklyTickets = [
        { label: 'Lun', value: 45 },
        { label: 'Mar', value: 52 },
        { label: 'Mer', value: 38 },
        { label: 'Jeu', value: 65 },
        { label: 'Ven', value: 48 },
        { label: 'Sam', value: 20 },
        { label: 'Dim', value: 15 },
    ];

    const kpiCards = [
        { title: 'Temps Moyen Réponse', value: '1h 45m', trend: '-15%', icon: Clock, color: 'blue' },
        { title: 'Taux Satisfaction', value: '4.8/5', trend: '+2%', icon: ThumbsUp, color: 'green' },
        { title: 'Nouveaux Utilisateurs', value: '1,240', trend: '+12%', icon: Users, color: 'purple' },
        { title: 'Taux de Churn', value: '1.2%', trend: '-0.5%', icon: TrendingUp, color: 'red' },
    ];

    return (
        <div className="h-full flex flex-col space-y-6">
            <div className="mb-2">
                <h1 className="text-3xl font-bold font-unbounded text-gray-900">Analytics</h1>
                <p className="text-gray-500">Performances détaillées de votre équipe et de l'IA.</p>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {kpiCards.map((kpi, index) => (
                    <div key={index} className="bg-white/60 p-5 rounded-2xl border border-white/60 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wide">{kpi.title}</p>
                            <h3 className="text-2xl font-bold font-unbounded mt-1">{kpi.value}</h3>
                            <span className={`text-xs font-bold ${kpi.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{kpi.trend} vs dernier mois</span>
                        </div>
                        <div className={`p-3 bg-${kpi.color}-50 text-${kpi.color}-500 rounded-xl`}>
                            <kpi.icon size={24} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
                <div className="lg:col-span-2">
                    <AreaChart title="Volume de Tickets (Semaine)" data={weeklyTickets} />
                </div>
                <div className="lg:col-span-1">
                    <SegmentedDonutChart title="Résolution IA" segments={[
                        { label: 'Automatisé', value: 82, color: 'blue' },
                        { label: 'Manuel', value: 18, color: 'gray' }
                    ]} />
                </div>
            </div>

            {/* Sources Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-48">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 text-white flex flex-col justify-between shadow-lg shadow-blue-500/20">
                    <h3 className="font-bold opacity-80">Canal Principal</h3>
                    <div>
                        <p className="text-4xl font-unbounded font-bold">WhatsApp</p>
                        <p className="text-sm opacity-70 mt-1">45% du volume total</p>
                    </div>
                </div>

                <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-sm md:col-span-2 flex items-center justify-between px-10">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">Objectif Mensuel</h3>
                        <p className="text-gray-500 text-sm">Tickets résolus par l'équipe</p>
                    </div>
                    <div className="text-right">
                        <p className="text-4xl font-bold font-unbounded text-pulsai-green">94%</p>
                        <p className="text-xs text-green-600 font-bold">Excellent travail !</p>
                    </div>
                    {/* Simple Progress Bar */}
                    <div className="w-48 h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-pulsai-green w-[94%]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
