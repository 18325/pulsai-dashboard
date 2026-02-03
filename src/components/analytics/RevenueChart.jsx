'use client';

import { useState } from 'react';

// Revenue Chart Widget - SRP: Display monthly revenue bar chart with interactive tooltips
function RevenueChart({ data }) {
    const [hoveredMonth, setHoveredMonth] = useState(null);
    const maxRevenue = Math.max(...data.map((m) => m.value));

    // Données simulées supplémentaires pour l'interaction
    const simulatedData = {
        'Jan': { growth: '+12%', tickets: 142, customers: 89 },
        'Fév': { growth: '+15%', tickets: 156, customers: 94 },
        'Mar': { growth: '+8%', tickets: 163, customers: 102 },
        'Avr': { growth: '+18%', tickets: 178, customers: 115 },
        'Mai': { growth: '+14%', tickets: 192, customers: 128 },
        'Jun': { growth: '+9%', tickets: 198, customers: 134 },
        'Jui': { growth: '+11%', tickets: 205, customers: 142 },
        'Aoû': { growth: '-3%', tickets: 189, customers: 138 },
        'Sep': { growth: '+16%', tickets: 215, customers: 156 },
        'Oct': { growth: '+13%', tickets: 223, customers: 163 },
        'Nov': { growth: '+19%', tickets: 238, customers: 178 },
        'Déc': { growth: '+22%', tickets: 254, customers: 192 }
    };

    return (
        <div className="relative bg-white dark:bg-card rounded-[24px] border border-gray-100 dark:border-border p-6 shadow-sm flex flex-col gap-4">
            <h3 className="text-xl font-bold font-unbounded text-gray-900 dark:text-white">
                Revenus mensuels
            </h3>

            {/* Tooltip interactif */}
            {hoveredMonth && (
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-xl z-10 min-w-[200px]">
                    <div className="text-sm font-bold text-gray-900 dark:text-white mb-2">
                        {hoveredMonth.label} {new Date().getFullYear()}
                    </div>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-500 dark:text-gray-400">Revenus:</span>
                            <span className="font-bold text-pulsai-blue">{hoveredMonth.value.toLocaleString('fr-FR')}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500 dark:text-gray-400">Croissance:</span>
                            <span className="font-bold text-pulsai-green">{simulatedData[hoveredMonth.label]?.growth || 'N/A'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500 dark:text-gray-400">Tickets:</span>
                            <span className="font-medium">{simulatedData[hoveredMonth.label]?.tickets || 'N/A'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500 dark:text-gray-400">Clients:</span>
                            <span className="font-medium">{simulatedData[hoveredMonth.label]?.customers || 'N/A'}</span>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex-1 flex items-end gap-2 mt-4 relative">
                {data.map((month) => (
                    <div
                        key={month.label}
                        className="flex-1 flex flex-col items-center gap-1 relative cursor-pointer"
                        onMouseEnter={() => setHoveredMonth(month)}
                        onMouseLeave={() => setHoveredMonth(null)}
                    >
                        <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden h-32 flex items-end relative">
                            <div
                                className="w-full bg-gradient-to-t from-pulsai-blue to-pulsai-green rounded-full transition-all duration-300 hover:opacity-80"
                                style={{ height: `${(month.value / maxRevenue) * 100}%` }}
                            />
                            {/* Indicateur de valeur au survol */}
                            {hoveredMonth?.label === month.label && (
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-pulsai-blue text-white text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap">
                                    {month.value.toLocaleString('fr-FR')} €
                                </div>
                            )}
                        </div>
                        <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">
                            {month.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RevenueChart;
