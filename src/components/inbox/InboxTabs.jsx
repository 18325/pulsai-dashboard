'use client';

import { useState } from 'react';

/**
 * Mobile tab navigation component
 * @param {Object} props - Component props
 * @param {string} props.activeTab - Currently active tab
 * @param {Function} props.onTabChange - Tab change handler
 */
export default function InboxTabs({ activeTab, onTabChange }) {
    const tabs = [
        { id: 'conversations', label: 'Conversations' },
        { id: 'chat', label: 'Discussion' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <div className="flex border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 sticky top-0 z-10">
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    className={`flex-1 py-4 text-center font-medium text-sm transition-all duration-200 ${
                        activeTab === tab.id
                            ? 'text-pulsai-blue border-b-2 border-pulsai-blue bg-blue-50 dark:bg-blue-900/20'
                            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/30'
                    }`}
                    onClick={() => onTabChange(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}
