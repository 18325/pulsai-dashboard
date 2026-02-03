'use client';

import { MapPin, Phone, Mail, Tag, Calendar, MoreVertical } from 'lucide-react';

export default function ContactCard({ contact, onClick, onEmailClick }) {
    const statusColor = contact.status === 'active' ? 'bg-pulsai-green/20 text-pulsai-green border-pulsai-green/30' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700';
    const tagColor = contact.tag === 'Premium' ? 'bg-pulsai-blue/10 text-pulsai-blue border-pulsai-blue/20' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700';

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return "Aujourd'hui";
        if (diffDays === 1) return "Hier";
        if (diffDays < 7) return `Il y a ${diffDays} jours`;
        if (diffDays < 30) return `Il y a ${Math.floor(diffDays / 7)} semaines`;
        return `Il y a ${Math.floor(diffDays / 30)} mois`;
    };

    return (
        <div
            onClick={onClick}
            className='bg-white dark:bg-card rounded-2xl p-5 hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-border shadow-sm flex flex-col h-full'
        >
            {/* Header avec avatar, nom et menu */}
            <div className='flex items-start justify-between mb-4'>
                <div className='flex items-center gap-3 flex-1 min-w-0'>
                    <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-pulsai-blue to-pulsai-blue/70 flex items-center justify-center text-white font-bold text-lg flex-shrink-0'>
                        {contact.avatar}
                    </div>
                    <div className='flex-1 min-w-0'>
                        <h3 className='font-bold text-gray-900 dark:text-white text-base mb-0.5'>
                            {contact.name}
                        </h3>
                        <p className='text-xs text-gray-500 dark:text-gray-400 truncate'>{contact.role}</p>
                    </div>
                </div>
                <button className='p-1.5 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0'>
                    <MoreVertical className='w-4 h-4 text-gray-400' />
                </button>
            </div>

            {/* Badges statut et tag */}
            <div className='flex items-center gap-2 mb-4 flex-wrap'>
                <span className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium border ${statusColor}`}>
                    {contact.status === 'active' ? 'Actif' : 'Inactif'}
                </span>
                <span className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium border ${tagColor}`}>
                    {contact.tag}
                </span>
            </div>

            {/* Informations de contact */}
            <div className='space-y-2.5 mb-4 flex-1'>
                <div className='flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm'>
                    <Mail className='w-4 h-4 text-gray-400 flex-shrink-0' />
                    <span className='truncate'>{contact.email}</span>
                </div>
                <div className='flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm'>
                    <Phone className='w-4 h-4 text-gray-400 flex-shrink-0' />
                    <span className='truncate'>{contact.phone}</span>
                </div>
                <div className='flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm'>
                    <Tag className='w-4 h-4 text-gray-400 flex-shrink-0' />
                    <span className='truncate'>{contact.segment}</span>
                </div>
                <div className='flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm'>
                    <MapPin className='w-4 h-4 text-gray-400 flex-shrink-0' />
                    <span className='truncate'>{contact.location}</span>
                </div>
            </div>

            {/* Footer avec dernier contact et bouton email */}
            <div className='flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800'>
                <div className='flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-xs'>
                    <Calendar className='w-3.5 h-3.5' />
                    <span>{formatDate(contact.lastContact)}</span>
                </div>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onEmailClick(contact);
                    }}
                    className='p-2 bg-pulsai-blue text-white rounded-lg hover:bg-pulsai-blue/90 transition-colors'
                    title='Envoyer un email'
                >
                    <Mail className='w-4 h-4' />
                </button>
            </div>
        </div>
    );
}
