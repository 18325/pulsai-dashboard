
"use client";

import React, { useState } from 'react';
import ConversationList from '@/components/inbox/ConversationList';
import ChatWindow from '@/components/inbox/ChatWindow';
import ContactPanel from '@/components/inbox/ContactPanel';
import { mockContacts } from '@/data/mockContacts';

export default function InboxPage() {
    const [activeId, setActiveId] = useState(2);
    const activeContact = mockContacts[activeId];

    return (
        <div className="h-[calc(100vh-140px)] overflow-x-auto overflow-y-hidden custom-scrollbar">
            <div className="flex bg-white rounded-[24px] shadow-sm border border-gray-200 h-full" style={{ minWidth: '1200px' }}>
                {/* Left Col: List */}
                <div className="w-[320px] flex-shrink-0 border-r border-gray-100">
                    <ConversationList activeId={activeId} setActiveId={setActiveId} />
                </div>

                {/* Center Col: Chat */}
                <div className="flex-1 flex flex-col bg-[#F9FAFB] min-w-0">
                    <ChatWindow contact={activeContact} />
                </div>

                {/* Right Col: Contact Info (Fusion) */}
                <div className="w-[300px] flex-shrink-0">
                    <ContactPanel contact={activeContact} />
                </div>
            </div>
        </div>
    );
}
