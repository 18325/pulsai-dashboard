
"use client";

import React from 'react';
import ContactTable from '@/components/contacts/ContactTable';
import { Plus, Download, Filter } from 'lucide-react';

export default function ContactsPage() {
    return (
        <div className="h-full flex flex-col space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold font-unbounded text-gray-900">Contacts</h1>
                    <p className="text-gray-500">Gérez votre base client et leads.</p>
                </div>

                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-xl font-bold text-sm shadow-sm hover:bg-gray-50 flex items-center gap-2">
                        <Filter size={16} /> Filtres
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-xl font-bold text-sm shadow-sm hover:bg-gray-50 flex items-center gap-2">
                        <Download size={16} /> Exporter
                    </button>
                    <button className="px-4 py-2 bg-pulsai-blue text-white rounded-xl font-bold text-sm shadow-lg shadow-pulsai-blue/30 hover:bg-pulsai-blue/90 flex items-center gap-2">
                        <Plus size={18} /> Nouveau Contact
                    </button>
                </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-xl shadow-gray-100/50 flex-1 overflow-hidden">
                <ContactTable />
            </div>
        </div>
    );
}
