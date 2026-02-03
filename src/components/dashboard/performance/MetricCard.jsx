'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Clock, CheckCircle, ArrowUp, ArrowDown } from 'lucide-react';

/**
 * Displays a performance metric card with trend indicator
 * @param {Object} props - Component props
 * @param {string} props.title - Metric title
 * @param {string} props.value - Metric value
 * @param {string} props.subtext - Change percentage text
 * @param {string} props.trend - Trend direction ('up' or 'down')
 * @param {string} props.color - Card color theme ('blue', 'green', 'dark')
 * @param {number} props.delay - Animation delay
 */
export default function MetricCard({ title, value, subtext, trend, color, delay }) {
    const isPositive = trend === 'up';
    const colors = {
        blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900/30',
        green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-100 dark:border-green-900/30',
        dark: 'bg-gray-800 dark:bg-gray-700 text-white border-gray-700 dark:border-gray-600',
    };

    const getIcon = () => {
        if (color === 'green') return <CheckCircle size={18} />;
        if (color === 'blue') return <TrendingUp size={18} />;
        return <Clock size={18} />;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="flex-1 p-5 rounded-3xl border border-gray-100 dark:border-border bg-white dark:bg-card shadow-sm flex flex-col justify-between min-h-[140px] transition-colors"
        >
            <div className="flex justify-between items-start">
                <span className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">{title}</span>
                <div className={`p-2 rounded-xl ${colors[color] || colors.blue}`}>
                    {getIcon()}
                </div>
            </div>
            <div>
                <h3 className="text-3xl font-bold font-unbounded text-gray-900 dark:text-white mb-1">{value}</h3>
                <div className="flex items-center gap-2">
                    <span className={`flex items-center text-xs font-bold ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
                        {isPositive ? <ArrowUp size={12} /> : <ArrowDown size={12} />} {subtext}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">vs semaine dernière</span>
                </div>
            </div>
        </motion.div>
    );
}
