'use client';

import { X, Mail, Phone, MapPin, Building2, Tag, Calendar, User } from 'lucide-react';

export default function ContactDetailPanel({ contact, onClose }) {
    const statusColor = contact.status === 'active' ? 'bg-pulsai-green/20 text-pulsai-green border-pulsai-green/30' : 'bg-gray-100 text-gray-600 border-gray-200';
    const tagColor = contact.tag === 'Premium' ? 'bg-pulsai-blue/10 text-pulsai-blue border-pulsai-blue/20' : 'bg-gray-100 text-gray-600 border-gray-200';

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    return (
        <div className='bg-white dark:bg-card rounded-3xl w-full shadow-2xl flex flex-col transition-colors'>
            {/* Header */}
            <div className='p-6 border-b border-gray-100 dark:border-border bg-white dark:bg-card flex-shrink-0 rounded-t-3xl'>
                <div className='flex items-start justify-between'>
                    <div className='flex items-center gap-4 flex-1'>
                        <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-pulsai-blue to-pulsai-blue/70 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0'>
                            {contact.avatar}
                        </div>
                        <div>
                            <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-1'>{contact.name}</h2>
                            <p className='text-sm text-gray-500 dark:text-gray-400'>{contact.role} • {contact.company}</p>
                            <div className='flex items-center gap-2 mt-2'>
                                <span className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium border ${statusColor}`}>
                                    {contact.status === 'active' ? 'Actif' : 'Inactif'}
                                </span>
                                <span className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium border ${tagColor}`}>
                                    {contact.tag}
                                </span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className='p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer'
                    >
                        <X className='w-5 h-5' />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className='p-6 space-y-5'>
                {/* Coordonnées */}
                <div>
                    <p className='text-xs font-bold text-gray-500 mb-3 uppercase'>Coordonnées</p>
                    <div className='space-y-3'>
                        <div className='flex items-center gap-3 text-gray-700 dark:text-gray-300'>
                            <div className='w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0'>
                                <Mail className='w-5 h-5 text-gray-500 dark:text-gray-400' />
                            </div>
                            <div>
                                <p className='text-xs text-gray-500 dark:text-gray-400'>Email</p>
                                <p className='font-medium dark:text-white'>{contact.email}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 text-gray-700 dark:text-gray-300'>
                            <div className='w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0'>
                                <Phone className='w-5 h-5 text-gray-500 dark:text-gray-400' />
                            </div>
                            <div>
                                <p className='text-xs text-gray-500 dark:text-gray-400'>Téléphone</p>
                                <p className='font-medium dark:text-white'>{contact.phone}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 text-gray-700 dark:text-gray-300'>
                            <div className='w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0'>
                                <MapPin className='w-5 h-5 text-gray-500 dark:text-gray-400' />
                            </div>
                            <div>
                                <p className='text-xs text-gray-500 dark:text-gray-400'>Localisation</p>
                                <p className='font-medium dark:text-white'>{contact.location}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Informations entreprise */}
                <div className='pt-5 border-t border-gray-100 dark:border-border'>
                    <p className='text-xs font-bold text-gray-500 dark:text-gray-400 mb-3 uppercase'>Informations</p>
                    <div className='grid grid-cols-2 gap-3'>
                        <div className='bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl'>
                            <div className='flex items-center gap-2 mb-1'>
                                <Building2 className='w-4 h-4 text-gray-400 dark:text-gray-500' />
                                <span className='text-xs text-gray-500 dark:text-gray-400'>Segment</span>
                            </div>
                            <p className='font-bold text-gray-900 dark:text-white'>{contact.segment}</p>
                        </div>
                        <div className='bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl'>
                            <div className='flex items-center gap-2 mb-1'>
                                <Calendar className='w-4 h-4 text-gray-400 dark:text-gray-500' />
                                <span className='text-xs text-gray-500 dark:text-gray-400'>Dernier contact</span>
                            </div>
                            <p className='font-bold text-gray-900 dark:text-white'>{formatDate(contact.lastContact)}</p>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className='pt-5 border-t border-gray-100 dark:border-border flex gap-3'>
                    <button className='flex-1 px-4 py-2.5 bg-pulsai-blue text-white rounded-xl font-medium hover:bg-pulsai-blue/90 transition-all flex items-center justify-center gap-2'>
                        <Mail className='w-4 h-4' />
                        Envoyer un email
                    </button>
                    <button className='flex-1 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all'>
                        Modifier
                    </button>
                </div>
            </div>
        </div>
    );
}
