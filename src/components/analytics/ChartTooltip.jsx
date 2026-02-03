'use client';

import { motion } from 'framer-motion';

/**
 * Chart tooltip component that displays on hover
 * @param {Object} props - Component props
 * @param {number} props.index - Hovered data index
 * @param {Array} props.data - Chart data
 * @param {number} props.dataLength - Total data points
 */
export default function ChartTooltip({ index, data, dataLength }) {
    if (index === null) return null;

    const point = data[index];
    const leftPosition = `${(index / (dataLength - 1)) * 100}%`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute pointer-events-none bg-gray-900/95 dark:bg-gray-700/95 text-white text-xs p-3 rounded-xl shadow-xl backdrop-blur-md z-20 flex flex-col gap-1 min-w-[120px]"
            style={{
                left: leftPosition,
                top: '10%',
                transform: 'translateX(-50%)'
            }}
        >
            <span className="font-bold text-gray-300 border-b border-gray-700 pb-1 mb-1">
                {point.label}
            </span>
            <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-pulsai-blue" />
                    Total
                </div>
                <span className="font-bold font-mono">{point.total}</span>
            </div>
            <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-pulsai-green" />
                    Résolues
                </div>
                <span className="font-bold font-mono">{point.resolved}</span>
            </div>
        </motion.div>
    );
}
