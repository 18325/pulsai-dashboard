'use client';

import { Mail, Phone, MapPin, Tag, Clock, MoreHorizontal } from 'lucide-react';
import AvatarLetter from './shared/AvatarLetter';

const ContactPanel = ({ contact }) => {
    if (!contact) {
        return (
            <div className="h-full border-l border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm flex items-center justify-center min-w-[300px] transition-colors">
                <p className="text-gray-500 dark:text-gray-400 text-sm">Sélectionnez une conversation</p>
            </div>
        );
    }

    return (
        <div className="h-full border-l border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm flex flex-col min-w-[300px]">
            {/* Header */}
            <div className="p-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-white/50 dark:bg-gray-800/50 sticky top-0 z-10">
                <h3 className="font-bold text-gray-900 dark:text-white text-sm">Détails du contact</h3>
                <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-1.5 transition-all duration-200">
                    <MoreHorizontal size={18} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-6">
                {/* Profile Section */}
                <div className="flex flex-col items-center text-center pt-2">
                    <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-pulsai-blue to-pulsai-green mb-4 shadow-lg shadow-blue-500/20 flex items-center justify-center">
                        <AvatarLetter letter={contact.avatar} size="lg" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{contact.name}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{contact.role}</p>
                    <p className="text-xs text-pulsai-blue font-semibold mt-1">{contact.company}</p>
                </div>

                {/* Actions Row */}
                <div className="flex gap-3 justify-center">
                    <button className="p-2.5 rounded-xl bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-pulsai-blue hover:text-white transition-all duration-200 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-600">
                        <Mail size={16} />
                    </button>
                    <button className="p-2.5 rounded-xl bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-pulsai-blue hover:text-white transition-all duration-200 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-600">
                        <Phone size={16} />
                    </button>
                </div>

                {/* Info List */}
                <div className="space-y-5">
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Informations</h4>

                        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 p-3 rounded-lg bg-white dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
                            <Mail size={16} className="text-gray-500 flex-shrink-0" />
                            <span className="truncate">{contact.email}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 p-3 rounded-lg bg-white dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
                            <Phone size={16} className="text-gray-500 flex-shrink-0" />
                            <span>{contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 p-3 rounded-lg bg-white dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
                            <MapPin size={16} className="text-gray-500 flex-shrink-0" />
                            <span>{contact.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 p-3 rounded-lg bg-white dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
                            <Clock size={16} className="text-gray-500 flex-shrink-0" />
                            <span>Membre depuis le {contact.joined}</span>
                        </div>
                    </div>

                    {/* Tags */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {contact.tags.map((tag) => (
                                <span key={tag} className="px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium border border-blue-200 dark:border-blue-700/50 flex items-center gap-1 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-all duration-200">
                                    <Tag size={10} /> {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Past Tickets - Fusion Concept */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Derniers Tickets</h4>
                        <div className="space-y-2">
                            <div className="p-3 rounded-lg bg-white dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-bold text-gray-900 dark:text-white">#TKT-245</span>
                                    <span className="text-[10px] font-bold text-green-600 bg-pulsai-green/20 dark:bg-pulsai-green/30 px-1.5 py-0.5 rounded">Résolu</span>
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
