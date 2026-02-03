'use client';

import { Users, Send, TrendingUp, Calendar, MoreVertical } from 'lucide-react';
import { STATUS_CONFIG, TEMPLATE_CONFIG } from '@/config/campaignConfig';

export default function CampaignCard({ campaign, onClick }) {
    const status = STATUS_CONFIG[campaign.status];
    const template = TEMPLATE_CONFIG[campaign.template];
    const TemplateIcon = template?.icon;

    const formatDate = (dateString) => {
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    return (
        <div
            onClick={onClick}
            className='relative bg-white dark:bg-card border border-gray-200 dark:border-border rounded-2xl p-5 hover:border-pulsai-blue/30 hover:shadow-xl hover:shadow-pulsai-blue/5 transition-all duration-300 cursor-pointer group flex flex-col overflow-hidden'
        >
            {/* Subtle gradient overlay on hover */}
            <div className='absolute inset-0 bg-gradient-to-br from-pulsai-blue/5 via-transparent to-pulsai-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
            <div className='relative z-10'>
            {/* Header avec icône, titre et menu */}
            <div className='flex items-start justify-between mb-2'>
                <div className='flex items-center gap-3 flex-1 min-w-0'>
                    <div className='bg-pulsai-green/20 p-2.5 rounded-xl flex-shrink-0'>
                        {TemplateIcon && <TemplateIcon className='w-5 h-5 text-gray-700 dark:text-gray-200' />}
                    </div>
                    <div className='flex-1 min-w-0'>
                        <h3 className='font-bold text-gray-900 dark:text-white text-base mb-0.5'>
                            {campaign.name}
                        </h3>
                    </div>
                </div>
                <button className='p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors'>
                    <MoreVertical className='w-5 h-5 text-gray-400 dark:text-gray-500' />
                </button>
            </div>

            {/* Type de campagne */}
            <div className='mb-3'>
                <span className='text-sm text-gray-500 dark:text-gray-400'>{campaign.type === 'email' ? 'Email' : 'Sms'}</span>
            </div>

            {/* Badge de statut */}
            <div className='mb-4'>
                <span
                    className={`inline-flex px-3 py-1.5 rounded-lg text-sm font-medium ${status.bg} ${status.color}`}
                >
                    {status.label}
                </span>
            </div>

            {/* Stats */}
            {campaign.status !== 'draft' && campaign.status !== 'scheduled' ? (
                <div className='flex items-start justify-between gap-3 mb-4'>
                    <div className='flex flex-col items-center flex-1'>
                        <Users className='w-5 h-5 text-gray-400 mb-2' />
                        <p className='text-xl font-bold text-gray-900 dark:text-white mb-0.5'>
                            {campaign.recipients >= 1000
                                ? `${(campaign.recipients / 1000).toFixed(1)}K`
                                : campaign.recipients}
                        </p>
                        <p className='text-xs text-gray-500 dark:text-gray-400'>Destinataires</p>
                    </div>
                    <div className='flex flex-col items-center flex-1 border-l border-r border-gray-100 dark:border-border'>
                        <Send className='w-5 h-5 text-gray-400 mb-2' />
                        <p className='text-xl font-bold text-gray-900 dark:text-white mb-0.5'>
                            {campaign.sent >= 1000
                                ? `${(campaign.sent / 1000).toFixed(1)}K`
                                : campaign.sent}
                        </p>
                        <p className='text-xs text-gray-500 dark:text-gray-400'>Envoyés</p>
                    </div>
                    <div className='flex flex-col items-center flex-1'>
                        <TrendingUp className='w-5 h-5 text-gray-400 mb-2' />
                        <p className='text-xl font-bold text-gray-900 dark:text-white mb-0.5'>{campaign.openRate}%</p>
                        <p className='text-xs text-gray-500 dark:text-gray-400'>Taux d&apos;ouverture</p>
                    </div>
                </div>
            ) : (
                <div className='py-6 flex items-center justify-center'>
                    <p className='text-sm text-gray-400 dark:text-gray-500'>
                        {campaign.status === 'scheduled' ? 'En attente de démarrage' : 'En cours de création'}
                    </p>
                </div>
            )}

            {/* Footer avec date et lien */}
            <div className='flex items-center justify-between pt-3 border-t border-gray-100 dark:border-border'>
                <div className='flex items-center gap-2 text-gray-500 dark:text-gray-400'>
                    <Calendar className='w-4 h-4' />
                    <span className='text-sm'>
                        {formatDate(campaign.startDate)}
                        {campaign.endDate && ` - ${formatDate(campaign.endDate)}`}
                    </span>
                </div>
                <button className='text-sm font-medium text-pulsai-blue hover:underline'>
                    Voir détails
                </button>
            </div>
            </div>
        </div>
    );
}
