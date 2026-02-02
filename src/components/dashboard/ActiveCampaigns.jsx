"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const campaigns = [
    {
        id: "CAMP-451",
        title: "Offre spéciale février",
        type: "Email",
        status: "Active",
        stats: { reach: "24.5K", conversion: "18.7%", roi: "+245%" }
    },
    {
        id: "CAMP-450",
        title: "Relance panier abandonné",
        type: "SMS",
        status: "Active",
        stats: { reach: "18.2K", conversion: "12.3%", roi: "+180%" }
    }
];

export default function ActiveCampaigns() {
    return (
        <div className="bg-white rounded-[24px] border border-gray-100 p-6 shadow-sm h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold font-unbounded text-gray-900">Campagnes actives</h3>
                <Link href="/campaigns" className="text-pulsai-blue text-sm font-bold hover:underline">
                    Voir plus
                </Link>
            </div>

            <div className="flex-1 flex flex-col gap-0 divide-gray-100">
                {campaigns.map((camp, i) => (
                    <Link href={`/campaigns`} key={i} className="block group">
                        <div className={`py-4 ${i !== campaigns.length - 1 ? 'border-b border-gray-50' : ''} group-hover:bg-gray-50/50 rounded-xl transition-colors px-2 -mx-2`}>
                            {/* Header: ID, Status, Type */}
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-bold text-gray-900">{camp.id}</span>
                                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wide border border-green-200">
                                    {camp.status}
                                </span>
                                <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wide border border-blue-100">
                                    {camp.type}
                                </span>
                            </div>

                            {/* Title */}
                            <h4 className="text-base font-bold text-gray-800 mb-3 group-hover:text-pulsai-blue transition-colors">
                                {camp.title}
                            </h4>

                            {/* Stats Grid */}
                            <div className="flex items-center gap-8">
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Portée</p>
                                    <p className="text-sm font-bold text-gray-700">{camp.stats.reach}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Conversion</p>
                                    <p className="text-sm font-bold text-gray-700">{camp.stats.conversion}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">ROI</p>
                                    <p className="text-sm font-bold text-green-600">{camp.stats.roi}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
