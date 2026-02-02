"use client";

import React from 'react';

const InboxContainer = ({ children, contentWidth = 1630 }) => {
    return (
        <div className="h-full">
            <div className="h-full bg-white rounded-[24px] shadow-sm border border-gray-200 overflow-x-auto overflow-y-hidden custom-scrollbar">
                <div className="flex h-full" style={{ width: `${contentWidth}px` }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default InboxContainer;
