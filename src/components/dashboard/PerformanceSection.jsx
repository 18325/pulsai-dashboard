"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, CheckCircle, Sparkles, AlertCircle, Lightbulb, ArrowUp, ArrowDown } from 'lucide-react';

const MetricCard = ({ title, value, subtext, trend, color, delay }) => {
    const isPositive = trend === 'up';
    const colors = {
        blue: "bg-blue-50 text-blue-600 border-blue-100",
        green: "bg-green-50 text-green-600 border-green-100",
        dark: "bg-gray-800 text-white border-gray-700",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className={`flex-1 p-5 rounded-3xl border border-gray-100 bg-white shadow-sm flex flex-col justify-between min-h-[140px]`}
        >
            <div className="flex justify-between items-start">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">{title}</span>
                <div className={`p-2 rounded-xl ${colors[color] || colors.blue}`}>
                    {color === 'green' ? <CheckCircle size={18} /> : color === 'blue' ? <TrendingUp size={18} /> : <Clock size={18} />}
                </div>
            </div>
            <div>
                <h3 className="text-3xl font-bold font-unbounded text-gray-900 mb-1">{value}</h3>
                <div className="flex items-center gap-2">
                    <span className={`flex items-center text-xs font-bold ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
                        {isPositive ? <ArrowUp size={12} /> : <ArrowDown size={12} />} {subtext}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">vs semaine dernière</span>
                </div>
            </div>
        </motion.div>
    );
};

const InsightCard = ({ icon: Icon, title, desc, color, delay }) => {
    // strict palette mapping
    const themes = {
        green: { bg: "bg-green-50", text: "text-green-800", iconBg: "bg-green-100", iconColor: "text-green-600" },
        blue: { bg: "bg-blue-50", text: "text-blue-800", iconBg: "bg-blue-100", iconColor: "text-blue-600" }, // Replaces Orange
        dark: { bg: "bg-gray-50", text: "text-gray-800", iconBg: "bg-gray-200", iconColor: "text-gray-700" } // Replaces Purple
    };
    const theme = themes[color];

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.5 }}
            className={`p-4 rounded-2xl flex gap-4 items-start ${theme.bg}`}
        >
            <div className={`p-2 rounded-xl flex-shrink-0 ${theme.iconBg} ${theme.iconColor}`}>
                <Icon size={20} strokeWidth={2.5} />
            </div>
            <div>
                <h4 className={`text-sm font-bold mb-1 ${theme.text}`}>{title}</h4>
                <p className="text-xs font-medium text-gray-600 leading-relaxed">{desc}</p>
            </div>
        </motion.div>
    );
};

export default function PerformanceSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Left: Metrics */}
            <div className="flex flex-col gap-6">
                <div>
                    <h3 className="text-xl font-bold font-unbounded text-gray-900 mb-2">Performances</h3>
                    <p className="text-gray-500 font-medium text-sm">Indicateurs clés de la semaine</p>
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

            {/* Right: AI Insights */}
            <div className="bg-white rounded-[32px] border border-gray-100 p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pulsai-blue to-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                        <Sparkles size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold font-unbounded text-gray-900">Insights IA</h3>
                        <p className="text-gray-500 font-medium text-xs">Analyse en temps réel</p>
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
                        color="blue" // Replaces Orange
                        delay={0.5}
                    />
                    <InsightCard
                        icon={Lightbulb}
                        title="Suggestion IA"
                        desc="3 réponses automatiques pourraient résoudre 40% des tickets."
                        color="dark" // Replaces Purple
                        delay={0.6}
                    />
                </div>
            </div>
        </div>
    );
}
