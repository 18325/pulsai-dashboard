'use client';

import { User, Settings, Bell, LogOut } from 'lucide-react';

/**
 * User profile dropdown with account actions
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Dropdown open state
 * @param {Function} props.onToggle - Toggle dropdown function
 * @param {React.RefObject} props.dropdownRef - Ref for click outside detection
 */
export default function ProfileDropdown({ isOpen, onToggle, dropdownRef }) {
    return (
        <div className="relative pl-2" ref={dropdownRef}>
            <button
                onClick={onToggle}
                className="flex items-center gap-3 group cursor-pointer"
            >
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#3ea8ff] to-[#88e47d] flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                    <div className="text-white">
                        <User size={20} strokeWidth={2} />
                    </div>
                </div>
                <div className="text-left hidden md:block">
                    <p className="text-[15px] font-bold text-gray-900 dark:text-white leading-tight mb-0.5 group-hover:text-pulsai-blue transition-colors">Admin</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-tight">admin@pulsai.com</p>
                </div>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-3 w-60 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Connecté en tant que</p>
                        <p className="font-bold text-gray-900 dark:text-white truncate">admin@pulsai.com</p>
                    </div>
                    <div className="p-2">
                        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <Settings size={18} className="text-gray-400" />
                            Paramètres du compte
                        </button>
                        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <Bell size={18} className="text-gray-400" />
                            Préférences notifications
                        </button>
                    </div>
                    <div className="p-2 border-t border-gray-100 dark:border-gray-700">
                        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                            <LogOut size={18} />
                            Déconnexion
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
