"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Chart Colors
const COLORS = {
    blue: '#3590E3',
    green: '#BAF09D',
    dark: '#1F2937',
    gray: '#F3F4F6',
    white: '#FFFFFF'
};

export const AreaChart = ({ title, data }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const max = Math.max(...data.map(d => d.total)) * 1.2;
    const width = 100;
    const height = 40;

    // SVG Path Generation
    const createPath = (key) => {
        let path = `M 0,${height} `;
        data.forEach((d, i) => {
            const x = (i / (data.length - 1)) * width;
            const y = height - (d[key] / max) * height;
            path += `L ${x},${y} `;
        });
        path += `L ${width},${height} Z`;
        return path;
    };

    const createLine = (key) => {
        let path = "";
        data.forEach((d, i) => {
            const x = (i / (data.length - 1)) * width;
            const y = height - (d[key] / max) * height;
            path += i === 0 ? `M ${x},${y} ` : `L ${x},${y} `;
        });
        return path;
    }

    return (
        <div className="bg-white rounded-[24px] border border-gray-100 p-6 shadow-sm h-full flex flex-col relative overflow-visible">
            <h3 className="text-xl font-bold font-unbounded text-gray-900 mb-6">{title}</h3>

            <div className="flex-1 relative w-full h-48 group">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    {/* Grids */}
                    {[0.25, 0.5, 0.75].map(p => (
                        <line key={p} x1="0" y1={height * p} x2="100" y2={height * p} stroke="#F3F4F6" strokeWidth="0.2" strokeDasharray="2" />
                    ))}

                    {/* Areas & Lines with Entrance Animation */}
                    <motion.path
                        d={createPath('total')}
                        fill="url(#gradTotal)"
                        opacity="0.4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 0.8 }}
                    />
                    <motion.path
                        d={createLine('total')}
                        fill="none"
                        stroke={COLORS.blue}
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />

                    <motion.path
                        d={createPath('resolved')}
                        fill="url(#gradResolved)"
                        opacity="0.6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <motion.path
                        d={createLine('resolved')}
                        fill="none"
                        stroke={COLORS.green}
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                    />

                    {/* Hover Overlay Columns */}
                    {data.map((d, i) => (
                        <rect
                            key={i}
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

                    {/* Interactive Indicator Line & Dot */}
                    {hoveredIndex !== null && (
                        <>
                            <motion.line
                                initial={{ opacity: 0, y2: 0 }}
                                animate={{ opacity: 1, y2: height }}
                                x1={(hoveredIndex / (data.length - 1)) * width}
                                y1="0"
                                x2={(hoveredIndex / (data.length - 1)) * width}
                                stroke={COLORS.dark}
                                strokeWidth="0.2"
                                strokeDasharray="1"
                            />
                            {/* Points on the line */}
                            <motion.circle
                                initial={{ scale: 0 }} animate={{ scale: 1 }}
                                cx={(hoveredIndex / (data.length - 1)) * width} cy={height - (data[hoveredIndex].total / max) * height} r="1.5" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="0.5"
                            />
                            <motion.circle
                                initial={{ scale: 0 }} animate={{ scale: 1 }}
                                cx={(hoveredIndex / (data.length - 1)) * width} cy={height - (data[hoveredIndex].resolved / max) * height} r="1.5" fill={COLORS.white} stroke={COLORS.green} strokeWidth="0.5"
                            />
                        </>
                    )}

                    <defs>
                        <linearGradient id="gradTotal" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={COLORS.blue} stopOpacity="0.3" />
                            <stop offset="100%" stopColor={COLORS.blue} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="gradResolved" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={COLORS.green} stopOpacity="0.4" />
                            <stop offset="100%" stopColor={COLORS.green} stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Floating Tooltip */}
                <AnimatePresence>
                    {hoveredIndex !== null && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="absolute pointer-events-none bg-gray-900/95 text-white text-xs p-3 rounded-xl shadow-xl backdrop-blur-md z-20 flex flex-col gap-1 min-w-[120px]"
                            style={{
                                left: `${(hoveredIndex / (data.length - 1)) * 100}%`,
                                top: '10%',
                                transform: 'translateX(-50%)'
                            }}
                        >
                            <span className="font-bold text-gray-300 border-b border-gray-700 pb-1 mb-1">{data[hoveredIndex].label}</span>
                            <div className="flex justify-between items-center gap-3">
                                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-pulsai-blue" />Total</div>
                                <span className="font-bold font-mono">{data[hoveredIndex].total}</span>
                            </div>
                            <div className="flex justify-between items-center gap-3">
                                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-pulsai-green" />Résolues</div>
                                <span className="font-bold font-mono">{data[hoveredIndex].resolved}</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="flex justify-between mt-4 text-xs font-bold text-gray-400 uppercase tracking-wider relative z-10">
                {data.map((d, i) => (
                    <span key={i} className={`transition-colors duration-200 ${hoveredIndex === i ? 'text-pulsai-blue' : ''}`}>{d.label}</span>
                ))}
            </div>
        </div>
    );
};

export const SegmentedDonutChart = ({ title, segments }) => {
    const [hoveredSeg, setHoveredSeg] = useState(null);
    const total = segments.reduce((acc, curr) => acc + curr.value, 0);
    let startAngle = 0;

    const createArc = (start, end) => {
        const radius = 16;
        const x1 = 20 + radius * Math.cos(start);
        const y1 = 20 + radius * Math.sin(start);
        const x2 = 20 + radius * Math.cos(end);
        const y2 = 20 + radius * Math.sin(end);
        const largeArc = end - start > Math.PI ? 1 : 0;
        return `M 20 20 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
    };

    return (
        <div className="bg-white rounded-[24px] border border-gray-100 p-6 shadow-sm h-full flex flex-col justify-between relative">
            <h3 className="text-xl font-bold font-unbounded text-gray-900 mb-6">{title}</h3>

            <div className="relative flex-1 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-full h-full transform -rotate-90 overflow-visible">
                    {segments.map((seg, i) => {
                        const angle = (seg.value / total) * 2 * Math.PI;
                        const endAngle = startAngle + angle;

                        const isHovered = hoveredSeg === i;
                        const path = createArc(startAngle + 0.05, endAngle - 0.05);
                        const color = COLORS[seg.color] || seg.color;

                        const el = (
                            <motion.path
                                key={i}
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
                                    type: isHovered ? "spring" : "tween",
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
                    {/* Inner White Circle (Donut Hole) */}
                    <motion.circle
                        cx="20" cy="20" r="11" fill="white"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                    />
                </svg>

                {/* Center Label (Dynamic on Hover) */}
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
                                <span className="block text-3xl font-bold font-unbounded text-gray-900">{segments[hoveredSeg].value}</span>
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{segments[hoveredSeg].label}</span>
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
                                    className="block text-2xl font-bold font-unbounded text-gray-400"
                                >
                                    {total}
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="text-[10px] font-bold text-gray-400 uppercase"
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
                        key={i}
                        className={`flex items-center gap-2 transition-opacity duration-200 ${hoveredSeg !== null && hoveredSeg !== i ? 'opacity-40' : 'opacity-100'}`}
                        onMouseEnter={() => setHoveredSeg(i)}
                        onMouseLeave={() => setHoveredSeg(null)}
                    >
                        <div className={`w-3 h-3 rounded-full`} style={{ background: COLORS[seg.color] || seg.color }} />
                        <span className="text-sm font-bold text-gray-500">{seg.label}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
