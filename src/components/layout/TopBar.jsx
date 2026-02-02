"use client";

import React from 'react';
import { Bell, Menu, Moon } from 'lucide-react';

const TopBar = ({ onMenuClick }) => {
    return (
        <header className="flex flex-col md:flex-row items-center justify-between py-4 px-6 md:px-10 mb-6 z-40 bg-white/95 backdrop-blur-md shadow-sm border border-gray-100 rounded-2xl mx-4 mt-4 flex-shrink-0">

            {/* Mobile Menu Button (Only visible on mobile) */}
            <div className="md:hidden w-full flex justify-between items-center mb-4 md:mb-0">
                <button
                    onClick={onMenuClick}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Spacer to push actions to right since Search is gone */}
            <div className="hidden md:block flex-1"></div>

            {/* Right Actions */}
            <div className="flex items-center gap-6 w-full md:w-auto justify-end">

                {/* Moon Icon (Dark Mode) */}
                <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
                    <Moon size={22} strokeWidth={2} />
                </button>

                {/* Notifications */}
                <button className="relative p-2 text-gray-400 hover:text-gray-900 transition-colors">
                    <Bell size={22} strokeWidth={2} />
                    <span className="absolute top-2 right-2.5 h-2.5 w-2.5 bg-pulsai-blue border-2 border-[#F8FAFC] rounded-full" />
                </button>

                {/* User Profile - Matching Image Exact Style */}
                <div className="flex items-center gap-3 pl-4">
                    {/* Gradient Circle with Icon */}
                    <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#3ea8ff] to-[#88e47d] flex items-center justify-center shadow-sm">
                        <div className="text-white">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                    </div>

                    <div className="text-left">
                        <p className="text-[15px] font-bold text-gray-900 leading-tight mb-0.5">Admin</p>
                        <p className="text-sm text-gray-500 font-medium leading-tight">admin@pulsai.com</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopBar;
