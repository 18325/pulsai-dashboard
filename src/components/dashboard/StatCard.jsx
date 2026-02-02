"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatCard = ({ title, value, change, trend, icon: Icon, color }) => {
    const isPositive = trend === 'up';

    // Premium Theme Configurations
    const themes = {
        blue: {
            wrapper: "bg-gradient-to-br from-blue-50/50 to-white",
            border: "border-blue-100",
            iconBg: "bg-blue-500",
            iconColor: "text-white",
            shadow: "shadow-blue-500/10",
            glow: "from-blue-500/20"
        },
        green: {
            wrapper: "bg-gradient-to-br from-green-50/50 to-white",
            border: "border-green-100",
            iconBg: "bg-green-500",
            iconColor: "text-white",
            shadow: "shadow-green-500/10",
            glow: "from-green-500/20"
        },
        dark: {
            wrapper: "bg-gradient-to-br from-gray-50/80 to-white",
            border: "border-gray-200",
            iconBg: "bg-gray-900",
            iconColor: "text-white",
            shadow: "shadow-gray-900/10",
            glow: "from-gray-900/20"
        },
        gray: {
            wrapper: "bg-gradient-to-br from-gray-50/50 to-white",
            border: "border-gray-100",
            iconBg: "bg-gray-200",
            iconColor: "text-gray-700",
            shadow: "shadow-gray-200/50",
            glow: "from-gray-400/10"
        }
    };

    const theme = themes[color] || themes.blue;

    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`relative p-6 rounded-[32px] border ${theme.border} ${theme.wrapper} ${theme.shadow} shadow-lg flex flex-col justify-between h-full overflow-hidden group`}
        >
            {/* Decorative Background Glow */}
            <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${theme.glow} to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            {/* Subtle Texture Circle (Always visible) */}
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${theme.iconBg} opacity-[0.03]`} />

            <div className="flex justify-between items-start mb-6 relative z-10">
                {/* Icon Box with Premium Shadow */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${theme.iconBg} ${theme.iconColor} shadow-md`}>
                    <Icon size={26} strokeWidth={2} />
                </div>

                {/* Trend Badge */}
                <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border backdrop-blur-sm ${isPositive ? 'bg-green-100/50 text-green-700 border-green-200' : 'bg-red-100/50 text-red-700 border-red-200'}`}>
                    {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    <span>{change}</span>
                </div>
            </div>

            <div className="relative z-10">
                <h3 className="text-gray-500 font-bold text-sm mb-1 uppercase tracking-wider">{title}</h3>
                <span className="text-4xl font-bold font-unbounded text-gray-900 tracking-tight">{value}</span>
            </div>
        </motion.div>
    );
};

export default StatCard;
