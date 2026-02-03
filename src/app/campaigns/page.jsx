'use client';

import { useState, useMemo } from 'react';
import { LayoutGrid, List } from 'lucide-react';
import CampaignStatsCards from '@/components/campaigns/CampaignStatsCards';
import CampaignToolbar from '@/components/campaigns/CampaignToolbar';
import CampaignCard from '@/components/campaigns/CampaignCard';
import CampaignListItem from '@/components/campaigns/CampaignListItem';
import CampaignDetailPanel from '@/components/campaigns/CampaignDetailPanel';
import Modal from '@/components/ui/Modal';
import CampaignForm from '@/components/forms/CampaignForm';
import { mockCampaigns, CAMPAIGN_STATS } from '@/data/mockCampaigns';

export default function CampaignsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [selectedTemplate, setSelectedTemplate] = useState('all');
    const [view, setView] = useState('cards');
    const [selectedCampaign, setSelectedCampaign] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const filteredCampaigns = useMemo(() => {
        return mockCampaigns.filter((campaign) => {
            const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesStatus = selectedStatus === 'all' || campaign.status === selectedStatus;
            const matchesTemplate = selectedTemplate === 'all' || campaign.template === selectedTemplate;

            return matchesSearch && matchesStatus && matchesTemplate;
        });
    }, [searchQuery, selectedStatus, selectedTemplate]);

    const handleExport = () => {
        // Export campaigns functionality
    };

    const handleNewCampaign = () => {
        setIsFormOpen(true);
    };

    const handleCampaignClick = (campaign) => {
        setSelectedCampaign(campaign);
    };

    return (
        <div className='flex flex-col space-y-6 pb-10'>
            <div className='flex items-center justify-between gap-2 sm:gap-4'>
                <div className='flex-1 min-w-0'>
                    <h1 className='text-xl sm:text-4xl font-bold font-unbounded text-gray-900 dark:text-white'>Campagnes</h1>
                    <p className='text-gray-500 dark:text-gray-400 mt-1 text-xs sm:text-base hidden sm:block'>Gérez et analysez vos campagnes marketing.</p>
                </div>
                <button
                    onClick={handleNewCampaign}
                    className='px-3 py-2.5 sm:px-6 sm:py-3 bg-pulsai-blue hover:bg-pulsai-blue/90 text-white rounded-xl font-bold transition-all shadow-lg shadow-pulsai-blue/20 flex items-center gap-2 whitespace-nowrap text-sm sm:text-base'
                    title='Nouvelle campagne'
                >
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
                    </svg>
                    <span className='hidden sm:inline'>Nouvelle campagne</span>
                </button>
            </div>

            <div className='p-2'>
                <CampaignStatsCards stats={CAMPAIGN_STATS} />
            </div>

            <div className='bg-white dark:bg-card border border-gray-100 dark:border-border rounded-2xl p-4 shadow-sm transition-colors'>
                <CampaignToolbar
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    selectedStatus={selectedStatus}
                    onStatusChange={setSelectedStatus}
                    selectedTemplate={selectedTemplate}
                    onTemplateChange={setSelectedTemplate}
                    onExport={handleExport}
                />
            </div>

            <div className='bg-white dark:bg-card border border-gray-100 dark:border-border rounded-2xl p-6 shadow-sm transition-colors'>
                <div className='flex items-center justify-between mb-4'>
                    <h2 className='text-lg font-bold text-gray-900 dark:text-white'>Campagnes</h2>
                    <div className='flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg'>
                        <button
                            onClick={() => setView('cards')}
                            className={`p-2 rounded-lg transition-all cursor-pointer ${view === 'cards'
                                ? 'bg-white dark:bg-card text-pulsai-blue shadow-sm'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                                }`}
                        >
                            <LayoutGrid className='w-4 h-4' />
                        </button>
                        <button
                            onClick={() => setView('list')}
                            className={`p-2 rounded-lg transition-all cursor-pointer ${view === 'list'
                                ? 'bg-white dark:bg-card text-pulsai-blue shadow-sm'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                                }`}
                        >
                            <List className='w-4 h-4' />
                        </button>
                    </div>
                </div>

                {view === 'cards' ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5'>
                        {filteredCampaigns.map((campaign) => (
                            <CampaignCard
                                key={campaign.id}
                                campaign={campaign}
                                onClick={() => handleCampaignClick(campaign)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className='overflow-x-auto'>
                        <div className='space-y-0 min-w-[700px]'>
                            {filteredCampaigns.map((campaign) => (
                                <CampaignListItem
                                    key={campaign.id}
                                    campaign={campaign}
                                    onClick={() => handleCampaignClick(campaign)}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {filteredCampaigns.length === 0 && (
                    <div className='text-center py-16'>
                        <p className='text-gray-400 dark:text-gray-500 text-lg'>Aucune campagne trouvée</p>
                    </div>
                )}
            </div>

            {/* Portal Modal - No stacking context issues */}
            <Modal isOpen={!!selectedCampaign} onClose={() => setSelectedCampaign(null)}>
                <CampaignDetailPanel
                    campaign={selectedCampaign}
                    onClose={() => setSelectedCampaign(null)}
                />
            </Modal>

            {/* Modal for creating new campaign */}
            <Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}>
                <CampaignForm
                    onSubmit={(data) => {
                        // TODO: Add to mock data or API call
                        setIsFormOpen(false);
                    }}
                    onCancel={() => setIsFormOpen(false)}
                />
            </Modal>
        </div>
    );
}
