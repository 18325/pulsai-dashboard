// Team Performance Table - SRP: Display team member performance metrics
function TeamPerformanceTable({ data }) {
    // Fonction pour déterminer la couleur selon la satisfaction
    const getSatisfactionColor = (satisfaction) => {
        const value = parseInt(satisfaction);
        if (value >= 95) return 'text-pulsai-green bg-pulsai-green/10 dark:bg-pulsai-green/20';
        if (value >= 90) return 'text-blue-500 bg-blue-50 dark:bg-blue-900/20';
        if (value >= 85) return 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
        return 'text-red-500 bg-red-50 dark:bg-red-900/20';
    };

    // Fonction pour déterminer la couleur selon le temps de réponse
    const getResponseTimeColor = (time) => {
        const minutes = parseInt(time);
        if (minutes <= 60) return 'text-pulsai-green';
        if (minutes <= 120) return 'text-yellow-500';
        return 'text-red-500';
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead>
                    <tr className="text-left text-gray-900 dark:text-white border-b border-gray-100 dark:border-border">
                        <th className="pb-3 font-semibold">Agent</th>
                        <th className="pb-3 font-semibold">Tickets résolus</th>
                        <th className="pb-3 font-semibold">Satisfaction</th>
                        <th className="pb-3 font-semibold">Temps moyen de réponse</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, idx) => {
                        const satisfactionClass = getSatisfactionColor(row.satisfaction);
                        const responseTimeClass = getResponseTimeColor(row.responseTime);

                        return (
                            <tr
                                key={row.agent}
                                className={`border-b border-gray-50 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors ${idx % 2 === 1 ? 'bg-gray-50/30 dark:bg-gray-900/10' : 'bg-transparent'}`}
                            >
                                <td className="py-3 pr-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pulsai-blue to-pulsai-green flex items-center justify-center text-white text-xs font-bold">
                                            {row.agent.split(' ').map(n => n[0]).join('').toUpperCase()}
                                        </div>
                                        <span className="text-gray-900 dark:text-gray-100 font-medium">{row.agent}</span>
                                    </div>
                                </td>
                                <td className="py-3 pr-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-pulsai-blue"></div>
                                        <span className="text-gray-700 dark:text-gray-200 font-medium">{row.resolved}</span>
                                    </div>
                                </td>
                                <td className="py-3 pr-4">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${satisfactionClass}`}>
                                        {row.satisfaction}
                                    </span>
                                </td>
                                <td className="py-3 pr-4">
                                    <span className={`font-medium ${responseTimeClass}`}>
                                        {row.responseTime}
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TeamPerformanceTable;
