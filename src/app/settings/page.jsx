'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SettingsSidebar from '@/components/settings/SettingsSidebar';
import ProfileTab from '@/components/settings/ProfileTab';
import NotificationsTab from '@/components/settings/NotificationsTab';
import SecurityTab from '@/components/settings/SecurityTab';
import IntegrationsTab from '@/components/settings/IntegrationsTab';
import BillingTab from '@/components/settings/BillingTab';

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('profile');
    const [notifications, setNotifications] = useState({
        email: true,
        push: true,
        sms: false,
        tickets: true,
        campaigns: true,
        contacts: false,
        weeklyReport: true
    });
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

    const handleNotificationChange = (key) => {
        setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'profile':
                return <ProfileTab />;
            case 'notifications':
                return (
                    <NotificationsTab
                        notifications={notifications}
                        onNotificationChange={handleNotificationChange}
                    />
                );
            case 'security':
                return (
                    <SecurityTab
                        twoFactorEnabled={twoFactorEnabled}
                        onTwoFactorToggle={() => setTwoFactorEnabled(!twoFactorEnabled)}
                    />
                );
            case 'integrations':
                return <IntegrationsTab />;
            case 'billing':
                return <BillingTab />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-8">
            <SettingsSidebar activeTab={activeTab} onTabChange={setActiveTab} />
            
            <div className="flex-1 bg-white dark:bg-card border border-gray-100 dark:border-border rounded-3xl p-8 shadow-xl transition-colors">
                <AnimatePresence mode="wait">
                    {renderTabContent()}
                </AnimatePresence>
            </div>
        </div>
    );
}
