'use client';

import { motion } from 'framer-motion';

/**
 * Displays an AI-generated insight card
 * @param {Object} props - Component props
 * @param {React.Component} props.icon - Lucide icon component
 * @param {string} props.title - Insight title
 * @param {string} props.desc - Insight description
 * @param {string} props.color - Card color theme ('green', 'blue', 'dark')
 * @param {number} props.delay - Animation delay
 */
export default function InsightCard({ icon: Icon, title, desc, color, delay }) {
    const themes = {
        green: {
            bg: 'bg-green-50 dark:bg-green-900/10',
            text: 'text-green-800 dark:text-green-300',
            iconBg: 'bg-green-100 dark:bg-green-900/30',
            iconColor: 'text-green-600 dark:text-green-400'
        },
        blue: {
            bg: 'bg-blue-50 dark:bg-blue-900/10',
            text: 'text-blue-800 dark:text-blue-300',
            iconBg: 'bg-blue-100 dark:bg-blue-900/30',
            iconColor: 'text-blue-600 dark:text-blue-400'
        },
        dark: {
            bg: 'bg-gray-50 dark:bg-gray-800/50',
            text: 'text-gray-800 dark:text-gray-200',
            iconBg: 'bg-gray-200 dark:bg-gray-700',
            iconColor: 'text-gray-700 dark:text-gray-300'
        }
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
                <p className="text-xs font-medium text-gray-600 dark:text-gray-300 leading-relaxed">{desc}</p>
            </div>
        </motion.div>
    );
}
