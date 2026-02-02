"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Ticket, Megaphone, Users, BarChart3 } from 'lucide-react';

const PulsBotWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-12 right-12 z-[9999] flex flex-col items-end pointer-events-none">

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-white rounded-[24px] shadow-2xl border border-gray-100 w-[380px] mb-4 overflow-hidden pointer-events-auto flex flex-col font-sans"
                        style={{ maxHeight: 'calc(100vh - 150px)' }}
                    >
                        {/* Content Area */}
                        <div className="flex-1 p-6 bg-gray-50/30 overflow-y-auto custom-scrollbar">

                            {/* Bot Message Bubble */}
                            <div className="flex gap-3 items-start mb-1">
                                <div className="text-2xl mt-1">👋</div>
                                <div className="bg-white p-5 rounded-[24px] rounded-tl-sm shadow-sm border border-gray-100 text-[15px] text-gray-700 leading-relaxed max-w-[85%]">
                                    <p className="mb-2">Bonjour ! Je suis <span className="font-bold text-gray-900">PulsBot</span>, votre assistant IA.</p>
                                    <p>Comment puis-je vous aider aujourd'hui ?</p>
                                </div>
                            </div>
                            <span className="text-[11px] text-gray-400 font-medium ml-14 mb-8 block">14:37</span>

                            {/* FAQ Section */}
                            <div className="mt-8">
                                <h4 className="text-sm font-bold text-gray-500 mb-4 pl-1">Questions fréquentes :</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {/* Card 1 */}
                                    <button className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-pulsai-blue/30 hover:shadow-md transition-all text-left flex flex-col gap-3 group h-28 justify-between">
                                        <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600 group-hover:scale-110 transition-transform">
                                            <Ticket size={18} fill="currentColor" className="text-yellow-500" />
                                        </div>
                                        <span className="text-[13px] font-bold text-gray-700 leading-tight">Comment créer un ticket ?</span>
                                    </button>

                                    {/* Card 2 */}
                                    <button className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-pulsai-blue/30 hover:shadow-md transition-all text-left flex flex-col gap-3 group h-28 justify-between">
                                        <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600 group-hover:scale-110 transition-transform">
                                            <Megaphone size={18} fill="currentColor" className="text-pink-500" />
                                        </div>
                                        <span className="text-[13px] font-bold text-gray-700 leading-tight">Gérer mes campagnes</span>
                                    </button>

                                    {/* Card 3 */}
                                    <button className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-pulsai-blue/30 hover:shadow-md transition-all text-left flex flex-col gap-3 group h-28 justify-between">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                                            <Users size={18} fill="currentColor" className="text-indigo-600" />
                                        </div>
                                        <span className="text-[13px] font-bold text-gray-700 leading-tight">Voir mes contacts</span>
                                    </button>

                                    {/* Card 4 */}
                                    <button className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-pulsai-blue/30 hover:shadow-md transition-all text-left flex flex-col gap-3 group h-28 justify-between">
                                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                            <BarChart3 size={18} className="text-blue-500" />
                                        </div>
                                        <span className="text-[13px] font-bold text-gray-700 leading-tight">Exporter des données</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Footer Input Area - MATCHING IMAGE (Detached Button) */}
                        <div className="p-5 bg-white border-t border-gray-100">
                            <div className="flex gap-3 items-center">
                                <input
                                    type="text"
                                    placeholder="Posez votre question..."
                                    className="flex-1 px-4 py-3.5 bg-white border border-gray-200 rounded-[18px] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-[15px] text-gray-700 placeholder:text-gray-400 shadow-sm"
                                />
                                <button className="w-12 h-12 bg-blue-400 text-white rounded-[18px] flex items-center justify-center hover:bg-blue-500 transition-colors shadow-lg shadow-blue-400/30 flex-shrink-0">
                                    <Send size={20} className="ml-0.5" />
                                </button>
                            </div>
                            <div className="text-center mt-3">
                                <span className="text-[10px] font-medium text-gray-400 flex items-center justify-center gap-1">
                                    Propulsé par l'IA — Réponses instantanées
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white transition-colors duration-300 pointer-events-auto z-50 ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X size={24} strokeWidth={3} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                        >
                            <Sparkles size={24} strokeWidth={2.5} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
};

export default PulsBotWidget;
