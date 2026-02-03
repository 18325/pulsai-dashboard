'use client';

import { Sparkles, TrendingUp, AlertCircle, Lightbulb } from 'lucide-react';
import MetricCard from '../performance/MetricCard';
import InsightCard from '../performance/InsightCard';

export default function PerformanceSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="flex flex-col gap-6">
                <div>
                    <h3 className="text-xl font-bold font-unbounded text-gray-900 dark:text-white mb-2">Performances</h3>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">Indicateurs clés de la semaine</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <MetricCard
                        title="Taux de conversion"
                        value="18.7%"
                        subtext="+2.4%"
                        trend="up"
                        color="blue"
                        delay={0.1}
                    />
                    <MetricCard
                        title="Tps de réponse moy."
                        value="1h 12m"
                        subtext="-15%"
                        trend="up"
                        color="green"
                        delay={0.2}
                    />
                    <div className="md:col-span-2">
                        <MetricCard
                            title="Taux de résolution"
                            value="94.2%"
                            subtext="+1.2%"
                            trend="up"
                            color="dark"
                            delay={0.3}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-card rounded-[32px] border border-gray-100 dark:border-border p-6 shadow-sm transition-colors">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pulsai-blue to-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                        <Sparkles size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold font-unbounded text-gray-900 dark:text-white">Insights IA</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-medium text-xs">Analyse en temps réel</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <InsightCard
                        icon={TrendingUp}
                        title="Performance en hausse"
                        desc="Le temps de réponse moyen a diminué de 23% cette semaine."
                        color="green"
                        delay={0.4}
                    />
                    <InsightCard
                        icon={AlertCircle}
                        title="Pic d'activité détecté"
                        desc="Prévoyez plus de ressources mardi entre 14h-17h."
                        color="blue"
                        delay={0.5}
                    />
                    <InsightCard
                        icon={Lightbulb}
                        title="Suggestion IA"
                        desc="3 réponses automatiques pourraient résoudre 40% des tickets."
                        color="dark"
                        delay={0.6}
                    />
                </div>
            </div>
        </div>
    );
}
