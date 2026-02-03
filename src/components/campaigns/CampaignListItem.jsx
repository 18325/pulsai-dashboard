'use client';

import { Users, Send, Eye, Calendar } from 'lucide-react';
import { STATUS_CONFIG, TYPE_CONFIG } from '@/config/campaignConfig';

export default function CampaignListItem({ campaign, onClick }) {
    const status = STATUS_CONFIG[campaign.status];
    const type = TYPE_CONFIG[campaign.type];
    const TypeIcon = type.icon;

    const formatDate = (dateString) => {
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
    };

    return (
        <div
            onClick={onClick}
            className='flex items-center gap-4 p-4 border-b border-gray-100 dark:border-border hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-all'
        >
            <div className='flex-shrink-0'>
                <div className='bg-gray-50 dark:bg-gray-800 p-2 rounded-lg'>
                    <TypeIcon className='w-5 h-5 text-pulsai-blue' />
                </div>
            </div>

            <div className='flex-1 min-w-0'>
                <h3 className='font-bold text-gray-900 dark:text-white text-sm mb-0.5 truncate'>{campaign.name}</h3>
                <span className='text-xs text-gray-500 dark:text-gray-400'>{type.label}</span>
            </div>

            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${status.bg} border ${status.border}`}>
                <span className={`text-xs font-bold ${status.color}`}>{status.label}</span>
            </div>

            {campaign.startDate && (
                <div className='flex items-center gap-1.5 text-gray-500 dark:text-gray-400'>
                    <Calendar className='w-4 h-4' />
                    <span className='text-xs whitespace-nowrap'>
                        {formatDate(campaign.startDate)}
                        {campaign.endDate && ` - ${formatDate(campaign.endDate)}`}
                    </span>
                </div>
            )}

            {campaign.status !== 'draft' && campaign.status !== 'scheduled' && (
                <>
                    <div className='flex items-center gap-2 text-gray-900 dark:text-white'>
                        <Users className='w-4 h-4 text-gray-400 dark:text-gray-500' />
                        <span className='text-sm font-bold'>{campaign.recipients.toLocaleString('fr-FR')}</span>
                    </div>
                    <div className='flex items-center gap-2 text-gray-900 dark:text-white'>
                        <Send className='w-4 h-4 text-gray-400 dark:text-gray-500' />
                        <span className='text-sm font-bold'>{campaign.sent.toLocaleString('fr-FR')}</span>
                    </div>
                    <div className='flex items-center gap-2 text-gray-900 dark:text-white'>
                        <Eye className='w-4 h-4 text-gray-400 dark:text-gray-500' />
                        <span className='text-sm font-bold'>{campaign.openRate}%</span>
                    </div>
                </>
            )}
        </div>
    );
}
