"use client";

import React, { useState } from 'react';
import { Search, Filter, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { conversations } from '@/data/mockContacts';
import AvatarLetter from './AvatarLetter';

const ConversationList = ({ activeId, setActiveId }) => {
    const [filter, setFilter] = useState('all'); // all, unread, star

    return (
        <div className="flex flex-col bg-white h-full">
            {/* Header & Search */}
            <div className="p-5 pb-2 flex-shrink-0">
                <h2 className="text-xl font-bold font-unbounded text-gray-900 mb-4">Messages</h2>

                <div className="relative group mb-4">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-pulsai-blue transition-colors" />
                    <input
                        type="text"
                        placeholder="Rechercher une discussion..."
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-sm font-medium"
                    />
                </div>

                {/* Filter Tabs */}
                <div className="flex gap-1 p-1 bg-gray-50 rounded-lg mb-2">
                    <button
                        onClick={() => setFilter('all')}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${filter === 'all' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Tous
                    </button>
                    <button
                        onClick={() => setFilter('unread')}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${filter === 'unread' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Non-lus
                    </button>
                    <button
                        onClick={() => setFilter('star')}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${filter === 'star' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Favoris
                    </button>
                </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto custom-scrollbar px-3 pb-4 space-y-1 min-h-0">
                {conversations.map((conv) => (
                    <motion.div
                        key={conv.id}
                        onClick={() => setActiveId(conv.id)}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className={`p-3 rounded-2xl cursor-pointer transition-all border ${activeId === conv.id
                                ? 'bg-blue-50/50 border-blue-100 shadow-sm'
                                : 'bg-transparent border-transparent hover:bg-gray-50'
                            }`}
                    >
                        <div className="flex gap-3">
                            <div className="relative">
                                <AvatarLetter letter={conv.avatar} size="md" />
                                {conv.online && (
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <h3 className={`text-sm truncate ${activeId === conv.id ? 'font-bold text-pulsai-blue' : 'font-bold text-gray-900'}`}>
                                        {conv.name}
                                    </h3>
                                    <span className="text-[10px] font-medium text-gray-400 flex-shrink-0">{conv.time}</span>
                                </div>
                                <p className={`text-xs truncate ${conv.unread > 0 ? 'font-bold text-gray-800' : 'text-gray-500'}`}>
                                    {conv.message}
                                </p>
                            </div>
                            {conv.unread > 0 && (
                                <div className="flex flex-col justify-center items-end">
                                    <span className="w-5 h-5 bg-pulsai-blue text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                                        {conv.unread}
                                    </span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ConversationList;
