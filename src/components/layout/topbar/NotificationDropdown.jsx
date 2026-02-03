'use client';

import { Bell } from 'lucide-react';

/**
 * Notification dropdown component with notification list
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Dropdown open state
 * @param {Function} props.onToggle - Toggle dropdown function
 * @param {React.RefObject} props.dropdownRef - Ref for click outside detection
 * @param {Array} props.notifications - Array of notification objects
 */
export default function NotificationDropdown({ isOpen, onToggle, dropdownRef, notifications }) {
    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={onToggle}
                className="relative p-2.5 text-gray-400 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                <Bell size={20} strokeWidth={2} />
                <span className="absolute top-2 right-2.5 h-2.5 w-2.5 bg-pulsai-blue border-2 border-[#F8FAFC] dark:border-gray-800 rounded-full" />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-3 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                        <h3 className="font-bold text-gray-900 dark:text-white">Notifications</h3>
                        <span className="text-xs text-pulsai-blue font-bold cursor-pointer">Tout marquer comme lu</span>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto">
                        {notifications.map(notif => (
                            <div key={notif.id} className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer flex gap-3 ${notif.unread ? 'bg-blue-50/30 dark:bg-blue-900/10' : ''}`}>
                                <div className="mt-1 h-2 w-2 rounded-full bg-pulsai-blue flex-shrink-0" style={{ opacity: notif.unread ? 1 : 0 }} />
                                <div>
                                    <p className="text-sm text-gray-800 dark:text-gray-200 font-medium leading-snug">{notif.text}</p>
                                    <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-3 border-t border-gray-100 dark:border-gray-700 text-center">
                        <span className="text-xs font-bold text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer">
                            Voir toutes les notifications
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
