'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CHART_COLORS, createArcPath } from '@/utils/chartUtils';

/**
 * Renders a segmented donut chart with hover interactions
 * @param {Object} props - Component props
 * @param {string} props.title - Chart title
 * @param {Array} props.segments - Array of segment objects with label, value, color
 */
export default function DonutChart({ title, segments }) {
    const [hoveredSeg, setHoveredSeg] = useState(null);
    const total = segments.reduce((acc, curr) => acc + curr.value, 0);
    let startAngle = 0;

    return (
        <div className="bg-white dark:bg-card rounded-[24px] border border-gray-100 dark:border-border p-6 shadow-sm h-full flex flex-col justify-between relative transition-colors">
            <h3 className="text-xl font-bold font-unbounded text-gray-900 dark:text-white mb-6">{title}</h3>

            <div className="relative flex-1 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-full h-full transform -rotate-90 overflow-visible" suppressHydrationWarning>
                    {segments.map((seg, i) => {
                        const angle = (seg.value / total) * 2 * Math.PI;
                        const endAngle = startAngle + angle;
                        const isHovered = hoveredSeg === i;
                        const adjustedStart = startAngle + 0.05;
                        const adjustedEnd = endAngle - 0.05;
                        const path = createArcPath(adjustedStart, adjustedEnd, 16, 20, 20);
                        const color = CHART_COLORS[seg.color] || seg.color;

                        const el = (
                            <motion.path
                                key={`${seg.label}-${i}`}
                                d={path}
                                fill={color}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: hoveredSeg !== null && !isHovered ? 0.6 : 1,
                                    scale: isHovered ? 1.1 : 1
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.1,
                                    type: isHovered ? 'spring' : 'tween',
                                    stiffness: 300,
                                    damping: 20
                                }}
                                onMouseEnter={() => setHoveredSeg(i)}
                                onMouseLeave={() => setHoveredSeg(null)}
                                className="cursor-pointer origin-center"
                            />
                        );
                        startAngle = endAngle;
                        return el;
                    })}
                    <motion.circle
                        cx="20" cy="20" r="11" fill="currentColor"
                        className="text-white dark:text-card"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: 'spring' }}
                    />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <AnimatePresence mode="wait">
                        {hoveredSeg !== null ? (
                            <motion.div
                                key="hovered"
                                initial={{ opacity: 0, scale: 0.5, y: 5 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.5, y: -5 }}
                                className="text-center"
                            >
                                <span className="block text-3xl font-bold font-unbounded text-gray-900 dark:text-white">{segments[hoveredSeg].value}</span>
                                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">{segments[hoveredSeg].label}</span>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="total"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center"
                            >
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="block text-2xl font-bold font-unbounded text-gray-500 dark:text-gray-400"
                                >
                                    {total}
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase"
                                >
                                    Tickets
                                </motion.span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
                {segments.map((seg, i) => (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        key={seg.label}
                        className={`flex items-center gap-2 transition-opacity duration-200 ${hoveredSeg !== null && hoveredSeg !== i ? 'opacity-40' : 'opacity-100'}`}
                        onMouseEnter={() => setHoveredSeg(i)}
                        onMouseLeave={() => setHoveredSeg(null)}
                    >
                        <div className="w-3 h-3 rounded-full" style={{ background: CHART_COLORS[seg.color] || seg.color }} />
                        <span className="text-sm font-bold text-gray-600 dark:text-gray-300">{seg.label}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
