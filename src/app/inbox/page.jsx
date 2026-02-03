
'use client';

import React, { useState } from 'react';
import ConversationList from '@/components/inbox/ConversationList';
import ChatWindow from '@/components/inbox/ChatWindow';
import ContactPanel from '@/components/inbox/ContactPanel';
import InboxTabs from '@/components/inbox/InboxTabs';
import ContactModal from '@/components/inbox/ContactModal';
import { mockContacts } from '@/data/mockContacts';

export default function InboxPage() {
    const [activeId, setActiveId] = useState(2);
    const [activeTab, setActiveTab] = useState('chat');
    const [showContactPanel, setShowContactPanel] = useState(false);
    const activeContact = mockContacts[activeId];

    return (
        <div className="h-[calc(100vh-140px)] flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Conversations</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Gérez vos conversations avec les clients</p>
                </div>
            </div>

            <div className="flex-1 flex flex-col md:hidden h-full">
                <InboxTabs activeTab={activeTab} onTabChange={setActiveTab} />
                
                <div className="flex-1 overflow-hidden">
                    {activeTab === 'conversations' && (
                        <div className="h-full overflow-y-auto bg-white dark:bg-gray-900">
                            <ConversationList activeId={activeId} setActiveId={setActiveId} />
                        </div>
                    )}
                    {activeTab === 'chat' && (
                        <div className="h-full flex flex-col">
                            <ChatWindow contact={activeContact} />
                        </div>
                    )}
                    {activeTab === 'contact' && (
                        <div className="h-full overflow-y-auto bg-white dark:bg-gray-900">
                            <ContactPanel contact={activeContact} />
                        </div>
                    )}
                </div>
            </div>

            <div className="hidden md:flex flex-1 overflow-hidden">
                <div className="w-80 flex-shrink-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col">
                    <ConversationList activeId={activeId} setActiveId={setActiveId} />
                </div>

                <div className="flex-1 flex flex-col min-w-0 max-w-4xl mx-auto bg-white dark:bg-gray-900">
                    <ChatWindow contact={activeContact} onShowContact={() => setShowContactPanel(true)} />
                </div>

                <ContactModal
                    isOpen={showContactPanel}
                    onClose={() => setShowContactPanel(false)}
                    contact={activeContact}
                />
            </div>
        </div>
    );
}
