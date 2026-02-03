'use client';

import { useState } from 'react';
import { MoreVertical, Eye, Pencil, Trash2 } from 'lucide-react';

export default function ContactListItem({ contact, onClick, onEdit, onDelete, onView }) {
    const [showMenu, setShowMenu] = useState(false);

    const tagColor =
        contact.tag === 'Hot'
            ? 'bg-red-50 text-red-700 border-red-200'
            : contact.tag === 'Warm'
                ? 'bg-pulsai-blue/5 text-pulsai-blue border-pulsai-blue/20'
                : 'bg-pulsai-blue/5 text-pulsai-blue border-pulsai-blue/20';

    const statusColor =
        contact.status === 'active'
            ? 'bg-pulsai-green/10 text-pulsai-green border-pulsai-green/20'
            : 'bg-gray-50 text-gray-700 border-gray-200';

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    return (
        <div className='flex items-center gap-3 p-3 border-b border-gray-100 hover:bg-gray-50 transition-all'>
            {/* Nom */}
            <div className='flex items-center gap-2 w-[180px]'>
                <div className='w-7 h-7 rounded-lg bg-gradient-to-br from-pulsai-blue to-pulsai-blue/70 flex items-center justify-center text-white font-bold text-[10px] flex-shrink-0'>
                    {contact.avatar}
                </div>
                <span className='font-bold text-gray-900 text-xs truncate'>{contact.name}</span>
            </div>

            {/* Email */}
            <div className='w-[200px] text-gray-600 text-xs truncate'>{contact.email}</div>

            {/* Téléphone */}
            <div className='w-[130px] text-gray-600 text-xs'>{contact.phone}</div>

            {/* Segment */}
            <div className='w-[100px] text-gray-600 text-xs truncate'>{contact.segment}</div>

            {/* Location */}
            <div className='w-[130px] text-gray-600 text-xs truncate'>{contact.location}</div>

            {/* Statut */}
            <div className='w-[100px]'>
                <span className={`inline-flex px-2 py-0.5 rounded-lg text-[10px] font-medium border ${statusColor}`}>
                    {contact.status === 'active' ? 'Actif' : 'Inactif'}
                </span>
            </div>

            {/* Dernier contact */}
            <div className='w-[110px] text-gray-500 text-[10px]'>{formatDate(contact.lastContact)}</div>

            {/* Actions - Menu trois points */}
            <div className='w-[80px] flex items-center justify-end relative'>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowMenu(!showMenu);
                    }}
                    className='p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all cursor-pointer'
                    title='Actions'
                >
                    <MoreVertical className='w-5 h-5' />
                </button>

                {/* Menu dropdown */}
                {showMenu && (
                    <>
                        <div
                            className='fixed inset-0 z-10'
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowMenu(false);
                            }}
                        />
                        <div className='absolute right-0 top-full mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-1 z-20'>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowMenu(false);
                                    onView(contact);
                                }}
                                className='w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 cursor-pointer'
                            >
                                <Eye className='w-4 h-4' />
                                Voir les détails
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowMenu(false);
                                    onEdit(contact);
                                }}
                                className='w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 cursor-pointer'
                            >
                                <Pencil className='w-4 h-4' />
                                Modifier
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowMenu(false);
                                    onDelete(contact.id);
                                }}
                                className='w-full px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 cursor-pointer border-t border-gray-100'
                            >
                                <Trash2 className='w-4 h-4' />
                                Supprimer
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
