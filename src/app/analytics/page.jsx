'use client';

import { SegmentedDonutChart } from '@/components/analytics/ChartWidgets';
import KPICard from '@/components/analytics/KPICard';
import SatisfactionWidget from '@/components/analytics/SatisfactionWidget';
import RevenueChart from '@/components/analytics/RevenueChart';
import TeamPerformanceTable from '@/components/analytics/TeamPerformanceTable';
import { Clock, ThumbsUp, CheckCircle2, TrendingDown, Download } from 'lucide-react';
import { useState } from 'react';
import { kpiCardsList, satisfactionByStars, revenueByMonth, ticketChannels } from '@/data/analyticsData';

export default function AnalyticsPage() {
    const [period, setPeriod] = useState('7j');

    const kpiCardsWithIcons = kpiCardsList.map((card, i) => ({
        ...card,
        icon: [Clock, ThumbsUp, CheckCircle2, TrendingDown][i]
    }));

    const teamPerformance = [
        { agent: 'Alexandre D.', resolved: 124, satisfaction: '96%', responseTime: '1h 10m' },
        { agent: 'Sophie M.', resolved: 98, satisfaction: '93%', responseTime: '1h 32m' },
        { agent: 'Kevin L.', resolved: 87, satisfaction: '91%', responseTime: '1h 48m' },
        { agent: 'Fatou S.', resolved: 76, satisfaction: '89%', responseTime: '2h 05m' },
    ];

    const maxRevenue = Math.max(...revenueByMonth.map((m) => m.value));

    const getTrendColor = (tone) => (tone === 'good' ? 'text-pulsai-green' : 'text-red-500');

    return (
        <div className="min-h-full flex flex-col space-y-6 pb-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <div>
                    <h1 className="text-3xl font-bold font-unbounded text-gray-900 dark:text-white">Analytiques</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Vue d'ensemble des performances clients, tickets et revenus.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <select
                            value={period}
                            onChange={(e) => setPeriod(e.target.value)}
                            className="appearance-none px-4 py-3 pr-10 rounded-2xl border border-gray-200 dark:border-border bg-white dark:bg-gray-800 text-sm font-bold text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-pulsai-blue/30 focus:border-pulsai-blue shadow-sm transition-all duration-200 pl-4 h-12"
                        >
                            <option value="7j">7 derniers jours</option>
                            <option value="30j">30 derniers jours</option>
                            <option value="90j">90 jours</option>
                            <option value="year">Cette année</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 dark:text-gray-400">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pulsai-blue text-white text-sm font-bold shadow-lg shadow-pulsai-blue/30 hover:bg-pulsai-blue/90 transition-colors">
                        <Download size={16} />
                        Exporter
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {kpiCardsWithIcons.map((kpi) => (
                    <KPICard key={kpi.title} {...kpi} />
                ))}
            </div>

            {/* Satisfaction + Répartition tickets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                {/* Satisfaction client (étoiles) */}
                <div className="h-full flex">
                    <SatisfactionWidget data={satisfactionByStars} />
                </div>

                {/* Répartition des tickets par canal */}
                <div className="h-full flex">
                    <SegmentedDonutChart
                        title="Répartition des tickets par canal"
                        segments={ticketChannels}
                        height={200}
                    />
                </div>
            </div>

            {/* Revenus mensuels - Version interactive */}
            <div className="bg-white dark:bg-card rounded-[24px] border border-gray-100 dark:border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold font-unbounded text-gray-900 dark:text-white mb-6">Revenus mensuels</h3>
                <div className="h-64">
                    <RevenueChart data={revenueByMonth} />
                </div>
            </div>

            {/* Performance de l'équipe - Stylisé */}
            <div className="bg-white dark:bg-card rounded-[24px] border border-gray-100 dark:border-border p-6 shadow-sm">
                <h3 className="text-lg font-bold font-unbounded text-gray-900 dark:text-white mb-6">Performance de l'équipe</h3>
                <TeamPerformanceTable data={teamPerformance} />
            </div>
        </div>
    );
}
