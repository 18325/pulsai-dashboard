'use client';

import { useState, useRef, useEffect } from 'react';
import { Menu } from 'lucide-react';
import ThemeToggle from './topbar/ThemeToggle';
import NotificationDropdown from './topbar/NotificationDropdown';
import ProfileDropdown from './topbar/ProfileDropdown';

const TopBar = ({ onMenuClick }) => {
    const [isNotifOpen, setIsNotifOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const notifRef = useRef(null);
    const profileRef = useRef(null);

    // Close dropdowns on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notifRef.current && !notifRef.current.contains(event.target)) setIsNotifOpen(false);
            if (profileRef.current && !profileRef.current.contains(event.target)) setIsProfileOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Mock Notifications
    const notifications = [
        { id: 1, text: 'Nouvelle campagne envoyée', time: 'Il y a 2 min', unread: true },
        { id: 2, text: 'Ticket #428 résolu', time: 'Il y a 1h', unread: false },
        { id: 3, text: 'Nouveau lead détecté', time: 'Il y a 3h', unread: true },
    ];

    return (
        <header className="flex flex-col items-center py-4 px-4 sm:px-6 md:px-10 mb-6 z-40 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-sm border border-gray-100 dark:border-gray-700 rounded-2xl mx-4 mt-4 flex-shrink-0 transition-colors duration-300">
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center">
                    <button
                        onClick={onMenuClick}
                        className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer md:hidden"
                    >
                        <Menu size={24} />
                    </button>
                    <div className="hidden md:block flex-1"></div>
                </div>

                <div className="flex items-center gap-1 sm:gap-2">
                    <ThemeToggle />
                    <NotificationDropdown 
                        isOpen={isNotifOpen}
                        onToggle={() => setIsNotifOpen(!isNotifOpen)}
                        dropdownRef={notifRef}
                        notifications={notifications}
                    />
                    <ProfileDropdown
                        isOpen={isProfileOpen}
                        onToggle={() => setIsProfileOpen(!isProfileOpen)}
                        dropdownRef={profileRef}
                    />
                </div>
            </div>
        </header>
    );
};

export default TopBar;

    