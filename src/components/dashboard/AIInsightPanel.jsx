
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, AlertCircle, ArrowRight } from 'lucide-react';

const AIInsightPanel = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-3xl p-1 bg-gradient-to-r from-pulsai-blue via-purple-500 to-pulsai-green shadow-2xl shadow-pulsai-blue/20"
        >
            <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-[20px] p-6 text-white">
                {/* Glow Effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-pulsai-blue/30 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex gap-5">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-white/20 to-transparent rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
                            <Sparkles className="w-7 h-7 text-yellow-300 animate-pulse" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-unbounded mb-1 flex items-center gap-2">
                                AI Insights Detected
                                <span className="px-2 py-0.5 rounded-md bg-red-500/20 text-red-300 text-xs border border-red-500/30">3 Urgent</span>
                            </h3>
                            <p className="text-gray-300 max-w-xl">
                                PulsAI a détecté des anomalies dans 3 tickets critiques nécessitant une intervention immédiate pour éviter un churn client.
                            </p>
                        </div>
                    </div>

                    <button className="group relative px-6 py-3 rounded-xl bg-white text-gray-900 font-bold overflow-hidden transition-all hover:scale-105 active:scale-95">
                        <div className="absolute inset-0 bg-gradient-to-r from-pulsai-blue to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                        <span className="relative flex items-center gap-2">
                            Voir les Actions
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </div>

                {/* Mini List */}
                <div className="mt-6 space-y-3 relative z-10">
                    {[1, 2].map((_, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                            <AlertCircle size={18} className="text-red-400" />
                            <span className="text-sm font-medium text-gray-200">Ticket #120{i} : Panne serveur signalée par Client Premium (Probabilité Churn: 85%)</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default AIInsightPanel;
