
"use client";

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const MainLayout = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-[#F9FAFB] via-blue-50/20 to-[#EEF2FF]">
            {/* Sidebar - Passed state for mobile visibility */}
            <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

            {/* Overlay for mobile */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            <main className="flex-1 md:ml-72 relative w-full min-w-0 transition-all duration-300 ease-in-out overflow-x-hidden">
                {/* Background decorative blobs */}
                <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-pulsai-blue/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-pulsai-green/10 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 flex flex-col h-screen overflow-x-hidden min-w-0">
                    {/* TopBar - Passed setter for mobile toggle */}
                    <TopBar onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

                    <div className="flex-1 px-4 md:px-10 pb-6 overflow-y-auto">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
