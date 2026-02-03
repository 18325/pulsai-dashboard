
'use client';

import { useState, useMemo } from 'react';
import ContactStatsCards from '@/components/contacts/ContactStatsCards';
import ContactFilters from '@/components/contacts/ContactFilters';
import ContactCard from '@/components/contacts/ContactCard';
import ContactListItem from '@/components/contacts/ContactListItem';
import ContactDetailPanel from '@/components/contacts/ContactDetailPanel';
import ContactsHeader from '@/components/contacts/ContactsHeader';
import ViewToggle from '@/components/contacts/ViewToggle';
import Modal from '@/components/ui/Modal';
import ContactForm from '@/components/forms/ContactForm';
import { mockContacts, CONTACT_STATS } from '@/data/mockContactsData';

export default function ContactsPage() {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState('all');
    const [view, setView] = useState('cards');
    const [selectedContact, setSelectedContact] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const filteredContacts = useMemo(() => {
        let result = mockContacts;

        if (searchQuery) {
            result = result.filter((contact) =>
                contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                contact.email.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedFilter !== 'all') {
            result = result.filter((contact) => {
                if (selectedFilter === 'enterprise') return contact.segment === 'Entreprise';
                if (selectedFilter === 'premium') return contact.tag === 'Premium';
                if (selectedFilter === 'active') return contact.status === 'active';
                return true;
            });
        }

        if (selectedTag && selectedTag !== 'all') {
            result = result.filter((contact) =>
                contact.tag.toLowerCase() === selectedTag.toLowerCase()
            );
        }

        return result;
    }, [selectedFilter, searchQuery, selectedTag]);

    const handleEmailClick = (contact) => {
        window.location.href = `mailto:${contact.email}`;
    };

    return (
        <div className='flex flex-col space-y-6 pb-10'>
            <ContactsHeader
                onImport={() => {}}
                onExport={() => {}}
                onAddContact={() => setIsFormOpen(true)}
            />

            <div className='p-2'>
                <ContactStatsCards stats={CONTACT_STATS} />
            </div>

            <div className='bg-white dark:bg-card border border-gray-100 dark:border-border rounded-2xl p-4 shadow-sm relative z-20 transition-colors'>
                <ContactFilters
                    selectedFilter={selectedFilter}
                    onFilterChange={setSelectedFilter}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    selectedTag={selectedTag}
                    onTagChange={setSelectedTag}
                />
            </div>

            <div className='bg-white dark:bg-card border border-gray-100 dark:border-border rounded-2xl p-6 shadow-sm transition-colors'>
                <div className='flex items-center justify-between mb-4'>
                    <h2 className='text-lg font-bold text-gray-900 dark:text-white'>Contacts ({filteredContacts.length})</h2>
                    <ViewToggle view={view} onViewChange={setView} />
                </div>

                {view === 'cards' ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5'>
                        {filteredContacts.map((contact) => (
                            <ContactCard
                                key={contact.id}
                                contact={contact}
                                onClick={() => setSelectedContact(contact)}
                                onEmailClick={handleEmailClick}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <div className='min-w-[900px]'>
                            <div className='hidden md:flex items-center gap-3 px-4 py-2.5 bg-gray-50 dark:bg-gray-800 rounded-xl mb-2 text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide'>
                                <div className='w-[180px]'>Nom</div>
                                <div className='w-[200px]'>Email</div>
                                <div className='w-[130px]'>Téléphone</div>
                                <div className='w-[100px]'>Segment</div>
                                <div className='w-[130px]'>Localisation</div>
                                <div className='w-[100px]'>Statut</div>
                                <div className='w-[110px]'>Dernier contact</div>
                                <div className='w-[80px] text-right'>Actions</div>
                            </div>
                            <div className="md:hidden text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 px-4 py-2.5 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                Contacts
                            </div>
                            <div className='space-y-0'>
                                {filteredContacts.map((contact) => (
                                    <ContactListItem
                                        key={contact.id}
                                        contact={contact}
                                        onClick={() => setSelectedContact(contact)}
                                        onEdit={() => {}}
                                        onDelete={() => {}}
                                        onView={setSelectedContact}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {filteredContacts.length === 0 && (
                    <div className='text-center py-16'>
                        <p className='text-gray-400 dark:text-gray-500 text-lg'>Aucun contact trouvé</p>
                    </div>
                )}
            </div>

            <Modal isOpen={!!selectedContact} onClose={() => setSelectedContact(null)}>
                <ContactDetailPanel contact={selectedContact} onClose={() => setSelectedContact(null)} />
            </Modal>

            <Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}>
                <ContactForm
                    onSubmit={() => setIsFormOpen(false)}
                    onCancel={() => setIsFormOpen(false)}
                />
            </Modal>
        </div>
    );
}

