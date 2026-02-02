"use client";

import React from 'react';
import { Mail, Phone, MapPin, Tag, Clock, MoreHorizontal } from 'lucide-react';
import AvatarLetter from './AvatarLetter';

const ContactPanel = ({ contact }) => {
    if (!contact) {
        return (
            <div className="h-full border-l border-gray-100 bg-white flex items-center justify-center min-w-[300px] w-[300px]">
                <p className="text-gray-400 text-sm">Sélectionnez une conversation</p>
            </div>
        );
    }

    return (
        <div className="h-full border-l border-gray-100 bg-white flex flex-col min-w-[300px] w-[300px]">
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-bold text-gray-900 font-unbounded text-sm">Détails du contact</h3>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreHorizontal size={20} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                {/* Profile Section */}
                <div className="flex flex-col items-center text-center mb-8">
                    <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-pulsai-blue to-green-400 mb-4 shadow-lg shadow-blue-500/10 flex items-center justify-center">
                        <AvatarLetter letter={contact.avatar} size="lg" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{contact.name}</h2>
                    <p className="text-sm text-gray-500 font-medium">{contact.role}</p>
                    <p className="text-xs text-pulsai-blue font-bold mt-1">{contact.company}</p>
                </div>

                {/* Actions Row */}
                <div className="flex gap-4 mb-8 justify-center">
                    <button className="p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-pulsai-blue hover:text-white transition-all shadow-sm hover:shadow-md">
                        <Mail size={18} />
                    </button>
                    <button className="p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-pulsai-blue hover:text-white transition-all shadow-sm hover:shadow-md">
                        <Phone size={18} />
                    </button>
                </div>

                {/* Info List */}
                <div className="space-y-6">
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Informations</h4>

                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <Mail size={16} className="text-gray-400" />
                            <span className="truncate">{contact.email}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <Phone size={16} className="text-gray-400" />
                            <span>{contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <MapPin size={16} className="text-gray-400" />
                            <span>{contact.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <Clock size={16} className="text-gray-400" />
                            <span>Membre depuis le {contact.joined}</span>
                        </div>
                    </div>

                    {/* Tags */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {contact.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold border border-blue-100 flex items-center gap-1">
                                    <Tag size={10} /> {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Past Tickets - Fusion Concept */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Derniers Tickets</h4>
                        <div className="space-y-3">
                            <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-sm transition-all cursor-pointer">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-bold text-gray-900">#TKT-245</span>
                                    <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">Résolu</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPanel;
