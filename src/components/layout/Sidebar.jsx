
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Ticket,
    Megaphone,
    Users,
    BarChart2,
    Settings,
    Inbox,
    LogOut,
    X
} from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Sidebar = ({ isOpen, setIsOpen }) => {
    const pathname = usePathname();

    const menuItems = [
        { icon: <LayoutDashboard size={22} />, label: 'Dashboard', path: '/' },
        { icon: <Inbox size={22} />, label: 'Inbox', path: '/inbox' },
        { icon: <Ticket size={22} />, label: 'Tickets', path: '/tickets' },
        { icon: <Megaphone size={22} />, label: 'Campagnes', path: '/campaigns' },
        { icon: <Users size={22} />, label: 'Contacts', path: '/contacts' },
        { icon: <BarChart2 size={22} />, label: 'Analytiques', path: '/analytics' },
    ];

    return (
        <aside
            className={`fixed inset-y-0 left-0 z-50 w-72 bg-white/80 dark:bg-card backdrop-blur-xl border-r border-white/20 dark:border-border shadow-2xl flex flex-col p-6 transition-all duration-300 ease-in-out md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            {/* Logo & Close Button */}
            <div className="flex items-center justify-between mb-12">
                <Logo />
                {/* Close Button (Mobile Only) */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Menu */}
            <nav className="flex-1 space-y-2 overflow-y-auto px-2">
                {menuItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link key={item.path} href={item.path} onClick={() => setIsOpen(false)}>
                            <div className="relative px-4 py-3 cursor-pointer group">
                                {/* Sliding Background */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-pulsai-blue rounded-xl shadow-lg shadow-pulsai-blue/30"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}

                                <div className="relative z-10 flex items-center gap-4">
                                    <span className={`transition-colors duration-200 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-pulsai-blue dark:text-gray-400 dark:group-hover:text-blue-400'}`}>
                                        {item.icon}
                                    </span>
                                    <span className={`font-medium tracking-wide transition-colors duration-200 ${isActive ? 'text-white font-bold' : 'text-pulsai-gray-dark group-hover:text-pulsai-blue dark:text-gray-200 dark:group-hover:text-white'}`}>
                                        {item.label}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </nav>

            {/* Settings / Bottom */}
            <div className="mt-auto space-y-2 pt-6 border-t border-gray-100/50 dark:border-border/50">
                <Link href="/settings" onClick={() => setIsOpen(false)}>
                    <div className="flex items-center gap-4 px-4 py-3 rounded-2xl text-pulsai-gray-dark dark:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-800/50 hover:text-pulsai-blue dark:hover:text-white transition-all cursor-pointer">
                        <Settings size={22} className="text-gray-400 dark:text-gray-500 group-hover:text-pulsai-blue dark:group-hover:text-blue-400" />
                        <span className="font-medium">Paramètres</span>
                    </div>
                </Link>
                <button className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 hover:text-red-500 transition-all cursor-pointer">
                    <LogOut size={22} />
                    <span className="font-medium">Déconnexion</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
