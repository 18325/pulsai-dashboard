'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { activeCampaignsList } from '@/data/activeCampaigns';

export default function ActiveCampaigns() {
    return (
        <div className="bg-white dark:bg-card rounded-[24px] border border-gray-100 dark:border-border p-6 shadow-sm h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold font-unbounded text-gray-900 dark:text-white">Campagnes actives</h3>
                <Link href="/campaigns" className="text-pulsai-blue text-sm font-bold hover:underline">
                    Voir plus
                </Link>
            </div>

            <div className="flex-1 flex flex-col gap-0 divide-gray-100">
                {activeCampaignsList.map((camp, i) => (
                    <Link href={`/campaigns`} key={camp.id} className="block group">
                        <div className={`py-4 ${i !== activeCampaignsList.length - 1 ? 'border-b border-gray-50 dark:border-gray-800' : ''} group-hover:bg-gray-50/50 dark:group-hover:bg-gray-800/30 rounded-xl transition-colors px-2 -mx-2`}>
                            {/* Header: ID, Status, Type */}
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-bold text-gray-900 dark:text-white">{camp.id}</span>
                                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wide border border-green-200 transition-colors">
                                    {camp.status}
                                </span>
                                <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wide border border-blue-100">
                                    {camp.type}
                                </span>
                            </div>

                            {/* Title */}
                            <h4 className="text-base font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-pulsai-blue transition-colors">
                                {camp.title}
                            </h4>

                            {/* Stats Grid */}
                            <div className="flex items-center gap-8">
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Portée</p>
                                    <p className="text-sm font-bold text-gray-700 dark:text-gray-300">{camp.stats.reach}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Conversion</p>
                                    <p className="text-sm font-bold text-gray-700 dark:text-gray-300">{camp.stats.conversion}</p>
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
