'use client';

import { useState } from 'react';
import { Search, Filter, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { conversations } from '@/data/mockContacts';
import AvatarLetter from './shared/AvatarLetter';

const ConversationList = ({ activeId, setActiveId }) => {
    const [filter, setFilter] = useState('all'); // all, unread, star

    // Memoized filtering logic for better performance (O(n))
    const filteredConversations = conversations.filter(conv => {
        if (filter === 'unread') return conv.unread > 0;
        if (filter === 'star') return conv.isStarred; // Assumes property exists, otherwise will be undefined (falsy)
        return true;
    });

    return (
        <div className="flex flex-col h-full bg-white dark:bg-gray-800">
            {/* Header & Search */}
            <div className="p-4 pb-3 flex-shrink-0 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800 z-10">
                <div className="relative group mb-3">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-pulsai-blue transition-colors" />
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        className="w-full pl-9 pr-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pulsai-blue focus:border-pulsai-blue transition-all text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    />
                </div>

                {/* Filter Tabs */}
                <div className="flex gap-1 p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <button
                        onClick={() => setFilter('all')}
                        className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${filter === 'all' ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-600'}`}
                    >
                        Tous
                    </button>
                    <button
                        onClick={() => setFilter('unread')}
                        className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${filter === 'unread' ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-600'}`}
                    >
                        Non-lus
                    </button>
                    <button
                        onClick={() => setFilter('star')}
                        className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${filter === 'star' ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-600'}`}
                    >
                        Favoris
                    </button>
                </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
                {filteredConversations.map((conv) => (
                    <motion.div
                        key={conv.id}
                        onClick={() => setActiveId(conv.id)}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${activeId === conv.id
                            ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700'
                            : 'bg-white dark:bg-gray-800 border border-transparent hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-200 dark:hover:border-gray-600'
                            }`}
                    >
                        <div className="flex gap-3 items-start">
                            <div className="relative flex-shrink-0">
                                <AvatarLetter letter={conv.avatar} size="md" />
                                {conv.online && (
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-pulsai-green border-2 border-white dark:border-gray-800 rounded-full"></span>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className={`text-sm font-semibold truncate ${activeId === conv.id ? 'text-pulsai-blue' : 'text-gray-900 dark:text-white'}`}>
                                        {conv.name}
                                    </h3>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0 ml-2">{conv.time}</span>
                                </div>
                                <p className={`text-sm truncate ${conv.unread > 0 ? 'font-medium text-gray-800 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'}`}>
                                    {conv.message}
                                </p>
                            </div>
                            {conv.unread > 0 && (
                                <div className="flex flex-col justify-start pt-0.5">
                                    <span className="w-5 h-5 bg-pulsai-blue text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0">
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