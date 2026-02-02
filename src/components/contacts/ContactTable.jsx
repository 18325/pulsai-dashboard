
"use client";

import React from 'react';
import { MoreHorizontal, Mail, Phone, ExternalLink } from 'lucide-react';

const ContactTable = () => {
    const contacts = [
        { id: 1, name: "Jean Dupont", role: "CEO @ TechSols", email: "jean@techsols.com", status: "Active", lastContact: "2 jours", value: "$12,500" },
        { id: 2, name: "Sophie Martin", role: "Marketing Dir @ AgencyX", email: "sophie@agencyx.com", status: "Lead", lastContact: "1 jour", value: "$4,200" },
        { id: 3, name: "Lucas Petit", role: "Freelance Dev", email: "lucas@dev.io", status: "Inactive", lastContact: "1 mois", value: "$850" },
        { id: 4, name: "Marie Currie", role: "Science Lead @ LabCorp", email: "marie@labcorp.com", status: "Active", lastContact: "5 jours", value: "$25,000" },
        { id: 5, name: "Alex Térieur", role: "Outdoor Specialist", email: "alex@nature.com", status: "Lead", lastContact: "3 heures", value: "$1,200" },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="text-gray-400 text-xs uppercase tracking-wider border-b border-gray-100">
                        <th className="p-4 font-medium">Nom</th>
                        <th className="p-4 font-medium">Role</th>
                        <th className="p-4 font-medium">Status</th>
                        <th className="p-4 font-medium">Dernier Contact</th>
                        <th className="p-4 font-medium">Valeur (CLV)</th>
                        <th className="p-4 font-medium text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {contacts.map((contact) => (
                        <tr key={contact.id} className="group hover:bg-white/50 transition-colors border-b border-gray-50 last:border-0">
                            <td className="p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-gray-100 to-gray-50 flex items-center justify-center text-gray-500 font-bold border border-white shadow-sm">
                                        {contact.name.charAt(0)}
                                    </div>
                                    <span className="font-bold text-gray-800">{contact.name}</span>
                                </div>
                            </td>
                            <td className="p-4 text-gray-600">{contact.role}</td>
                            <td className="p-4">
                                <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${contact.status === 'Active' ? 'bg-green-50 text-green-600 border-green-100' :
                                        contact.status === 'Lead' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                            'bg-gray-50 text-gray-500 border-gray-100'
                                    }`}>
                                    {contact.status}
                                </span>
                            </td>
                            <td className="p-4 text-gray-500">{contact.lastContact}</td>
                            <td className="p-4 font-bold font-unbounded text-gray-800">{contact.value}</td>
                            <td className="p-4">
                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-2 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"><Mail size={16} /></button>
                                    <button className="p-2 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"><Phone size={16} /></button>
                                    <button className="p-2 hover:bg-gray-100 text-gray-400 rounded-lg transition-colors"><MoreHorizontal size={16} /></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactTable;
