
"use client";

import React from 'react';
import FlowBuilder from '@/components/campaigns/FlowBuilder';

export default function CampaignsPage() {
    return (
        <div className="h-full flex flex-col">
            <div className="mb-6 flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold font-unbounded text-gray-900">Campagnes</h1>
                    <p className="text-gray-500">Automatisez vos parcours clients avec le visual builder.</p>
                </div>
                <div className="bg-white/50 backdrop-blur px-4 py-2 rounded-xl text-sm font-medium text-pulsai-blue border border-white/60">
                    Campagne: <span className="font-bold">Summer Sale 2026</span>
                </div>
            </div>

            <div className="flex-1 min-h-0 bg-white/40 rounded-3xl border border-white/50 p-2 shadow-xl">
                <FlowBuilder />
            </div>
        </div>
    );
}
