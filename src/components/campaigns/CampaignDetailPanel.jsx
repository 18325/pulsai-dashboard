'use client';

import { X, Play, Pause, Edit, Copy, Trash2, BarChart3, Users, Calendar, Target, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { mockCampaigns } from '@/data/mockCampaigns';

const CampaignDetailPanel = ({ campaign, campaignId, onClose, onEdit, onDuplicate, onDelete }) => {
    // Handle both scenarios: when campaign object is passed directly or when campaignId is passed
    const resolvedCampaign = campaign || (campaignId !== undefined ? mockCampaigns[campaignId] : null);
    
    if (!resolvedCampaign) {
        return (
            <div className="h-full bg-white dark:bg-card rounded-2xl border border-gray-200 dark:border-border shadow-lg flex items-center justify-center p-8">
                <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BarChart3 className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Campagne non trouvée</h3>
                    <p className="text-gray-500 dark:text-gray-400">La campagne sélectionnée n'existe pas ou a été supprimée.</p>
                </div>
            </div>
        );
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'active': return 'bg-pulsai-green/20 text-pulsai-green border-pulsai-green/30';
            case 'draft': return 'bg-gray-100 text-gray-800 border-gray-200';
            case 'paused': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'completed': return 'bg-blue-100 text-blue-800 border-blue-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'email': return 'bg-pulsai-blue/10 text-pulsai-blue border-pulsai-blue/20';
            case 'sms': return 'bg-orange-100 text-orange-800 border-orange-200';
            case 'push': return 'bg-orange-100 text-orange-800 border-orange-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    return (
        <div className="max-h-[90vh] bg-white dark:bg-card rounded-2xl border border-gray-200 dark:border-border shadow-lg flex flex-col overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-gray-200 dark:border-border flex justify-between items-start flex-shrink-0">
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white truncate">{resolvedCampaign.name}</h2>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(resolvedCampaign.status)}`}>
                            {resolvedCampaign.status === 'active' ? 'Active' : 
                             resolvedCampaign.status === 'draft' ? 'Brouillon' :
                             resolvedCampaign.status === 'paused' ? 'En pause' : 'Terminée'}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(resolvedCampaign.type)}`}>
                            {resolvedCampaign.type.toUpperCase()}
                        </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{resolvedCampaign.description}</p>
                </div>
                <div className="flex items-center gap-2 ml-4">
                    <button 
                        onClick={() => onEdit(resolvedCampaign)}
                        className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                        <Edit size={18} />
                    </button>
                    <button 
                        onClick={() => onDuplicate(resolvedCampaign)}
                        className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                        <Copy size={18} />
                    </button>
                    <button 
                        onClick={() => onDelete(resolvedCampaign)}
                        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                        <Trash2 size={18} />
                    </button>
                    <button 
                        onClick={onClose}
                        className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors ml-2"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="p-6 space-y-8">
                    {/* Stats Overview */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Statistiques</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-border">
                                <div className="flex items-center gap-2 mb-1">
                                    <Users className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Destinataires</span>
                                </div>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">{resolvedCampaign.sent ? resolvedCampaign.sent.toLocaleString() : resolvedCampaign.sent || 0}</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-border">
                                <div className="flex items-center gap-2 mb-1">
                                    <BarChart3 className="w-5 h-5 text-pulsai-green" />
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Ouvertures</span>
                                </div>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">{resolvedCampaign.opened ? resolvedCampaign.opened.toLocaleString() : resolvedCampaign.opened || 0}</p>
                                <p className="text-xs text-pulsai-green font-medium mt-1">
                                    {resolvedCampaign.sent && resolvedCampaign.sent > 0 ? ((resolvedCampaign.opened / resolvedCampaign.sent) * 100).toFixed(1) + '%' : '0%'}
                                </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-border">
                                <div className="flex items-center gap-2 mb-1">
                                    <Target className="w-5 h-5 text-pulsai-blue" />
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Clics</span>
                                </div>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">{resolvedCampaign.clicked ? resolvedCampaign.clicked.toLocaleString() : resolvedCampaign.clicked || 0}</p>
                                <p className="text-xs text-pulsai-blue font-medium mt-1">
                                    {resolvedCampaign.sent && resolvedCampaign.sent > 0 ? ((resolvedCampaign.clicked / resolvedCampaign.sent) * 100).toFixed(1) + '%' : '0%'}
                                </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-border">
                                <div className="flex items-center gap-2 mb-1">
                                    <TrendingUp className="w-5 h-5 text-orange-600" />
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Conversion</span>
                                </div>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">{resolvedCampaign.converted ? resolvedCampaign.converted.toLocaleString() : resolvedCampaign.converted || 0}</p>
                                <p className="text-xs text-orange-600 font-medium mt-1">
                                    {resolvedCampaign.sent && resolvedCampaign.sent > 0 ? ((resolvedCampaign.converted / resolvedCampaign.sent) * 100).toFixed(1) + '%' : '0%'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Campaign Details */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Détails de la campagne</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Date de création</h4>
                                    <p className="text-gray-900 dark:text-white">{resolvedCampaign.createdAt || 'N/A'}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Dernière modification</h4>
                                    <p className="text-gray-900 dark:text-white">{resolvedCampaign.updatedAt || 'N/A'}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Segment cible</h4>
                                    <p className="text-gray-900 dark:text-white">{resolvedCampaign.audience || 'Non spécifié'}</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Fréquence</h4>
                                    <p className="text-gray-900 dark:text-white capitalize">{resolvedCampaign.frequency || 'N/A'}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Budget</h4>
                                    <p className="text-gray-900 dark:text-white">{resolvedCampaign.budget || '$0'}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">ROI estimé</h4>
                                    <p className="text-pulsai-green font-semibold">{resolvedCampaign.roi || 0}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Chronologie</h3>
                        <div className="space-y-4">
                            {(resolvedCampaign.timeline || []).map((event, idx) => (
                                <div key={event?.timestamp || `timeline-${idx}`} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                    <div className="flex-1">
                                        <p className="text-gray-900 dark:text-white font-medium">{event?.action}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{event?.timestamp}</p>
                                        {event?.details ? (
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{event.details}</p>
                                        ) : null}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-gray-200 dark:border-border bg-gray-50 dark:bg-gray-800/30">
                <div className="flex justify-end gap-3">
                    {resolvedCampaign.status === 'active' ? (
                        <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
                            <Pause size={16} />
                            Mettre en pause
                        </button>
                    ) : (
                        <button className="px-4 py-2 bg-pulsai-green hover:bg-pulsai-green/90 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
                            <Play size={16} />
                            Démarrer
                        </button>
                    )}
                    <button 
                        onClick={() => onEdit(resolvedCampaign)}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white rounded-lg font-medium transition-colors"
                    >
                        Modifier
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetailPanel;