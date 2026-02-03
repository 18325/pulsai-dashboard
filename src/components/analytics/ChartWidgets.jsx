'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CHART_COLORS, createAreaPath, createLinePath } from '@/utils/chartUtils';
import ChartTooltip from './ChartTooltip';

export const AreaChart = ({ title, data }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const max = Math.max(...data.map(d => d.total)) * 1.2;
    const width = 100;
    const height = 40;

    return (
        <div className="bg-white dark:bg-card rounded-[24px] border border-gray-100 dark:border-border p-6 shadow-sm h-full flex flex-col relative overflow-visible transition-colors">
            <h3 className="text-xl font-bold font-unbounded text-gray-900 dark:text-white mb-6">{title}</h3>

            <div className="flex-1 relative w-full h-48 group">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    {[0.25, 0.5, 0.75].map(p => (
                        <line key={p} x1="0" y1={height * p} x2="100" y2={height * p} stroke="#E5E7EB" strokeWidth="0.2" strokeDasharray="2" className="dark:stroke-gray-700" />
                    ))}

                    <motion.path
                        d={createAreaPath(data, 'total', max, width, height)}
                        fill="url(#gradTotal)"
                        opacity="0.4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 0.8 }}
                    />
                    <motion.path
                        d={createLinePath(data, 'total', max, width, height)}
                        fill="none"
                        stroke={CHART_COLORS.blue}
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                    />

                    <motion.path
                        d={createAreaPath(data, 'resolved', max, width, height)}
                        fill="url(#gradResolved)"
                        opacity="0.6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <motion.path
                        d={createLinePath(data, 'resolved', max, width, height)}
                        fill="none"
                        stroke={CHART_COLORS.green}
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
                    />

                    {data.map((d, i) => (
                        <rect
                            key={`hover-${d.label}-${i}`}
                            x={(i / (data.length - 1)) * width - 2}
                            y="0"
                            width="4"
                            height={height}
                            fill="transparent"
                            className="cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        />
                    ))}

                    {hoveredIndex !== null && (
                        <>
                            <motion.line
                                initial={{ opacity: 0, y2: 0 }}
                                animate={{ opacity: 1, y2: height }}
                                x1={(hoveredIndex / (data.length - 1)) * width}
                                y1="0"
                                x2={(hoveredIndex / (data.length - 1)) * width}
                                stroke={CHART_COLORS.dark}
                                strokeWidth="0.2"
                                strokeDasharray="1"
                                className="dark:stroke-gray-400"
                            />
                            <motion.circle
                                initial={{ scale: 0 }} animate={{ scale: 1 }}
                                cx={(hoveredIndex / (data.length - 1)) * width}
                                cy={height - (data[hoveredIndex].total / max) * height}
                                r="1.5" fill={CHART_COLORS.white} stroke={CHART_COLORS.blue} strokeWidth="0.5"
                            />
                            <motion.circle
                                initial={{ scale: 0 }} animate={{ scale: 1 }}
                                cx={(hoveredIndex / (data.length - 1)) * width}
                                cy={height - (data[hoveredIndex].resolved / max) * height}
                                r="1.5" fill={CHART_COLORS.white} stroke={CHART_COLORS.green} strokeWidth="0.5"
                            />
                        </>
                    )}

                    <defs>
                        <linearGradient id="gradTotal" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={CHART_COLORS.blue} stopOpacity="0.3" />
                            <stop offset="100%" stopColor={CHART_COLORS.blue} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="gradResolved" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={CHART_COLORS.green} stopOpacity="0.4" />
                            <stop offset="100%" stopColor={CHART_COLORS.green} stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>

                <AnimatePresence>
                    <ChartTooltip index={hoveredIndex} data={data} dataLength={data.length} />
                </AnimatePresence>
            </div>

            <div className="flex justify-between mt-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider relative z-10">
                {data.map((d, i) => (
                    <span key={d.label} className={`transition-colors duration-200 ${hoveredIndex === i ? 'text-pulsai-blue' : ''}`}>{d.label}</span>
                ))}
            </div>
        </div>
    );
};

// Re-export DonutChart for backward compatibility
export { default as SegmentedDonutChart } from './DonutChart';
