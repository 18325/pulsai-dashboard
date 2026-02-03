'use client';

import Link from 'next/link';
import { recentTicketsList } from '@/data/recentTickets';

const StatusBadge = ({ status }) => {
    let styles = "";
    switch (status) {
        case "Ouvert": styles = "bg-red-50 text-red-600 border-red-100"; break;
        case "En attente": styles = "bg-pulsai-blue/5 text-pulsai-blue border-pulsai-blue/20"; break;
        case "Résolu": styles = "bg-green-50 text-green-600 border-green-100"; break;
        default: styles = "bg-gray-50 text-gray-600 border-gray-100";
    }
    return (
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${styles}`}>
            {status}
        </span>
    );
};

export default function RecentTickets() {
    return (
        <div className="bg-white dark:bg-card rounded-[24px] border border-gray-100 dark:border-border p-6 shadow-sm h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold font-unbounded text-gray-900 dark:text-white">Tickets Récents</h3>
                <Link href="/tickets" className="text-pulsai-blue text-sm font-bold hover:underline flex items-center gap-1">
                    Voir tout →
                </Link>
            </div>

            <div className="w-full overflow-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider border-b border-gray-100 dark:border-border">
                            <th className="py-4 pl-4 text-left">ID</th>
                            <th className="py-4 pl-8 text-left">Sujet</th>
                            <th className="py-4 pl-8 text-left">Statut</th>
                            <th className="py-4 pl-8 text-left hidden md:table-cell">Priorité</th>
                            <th className="py-4 pr-4 text-right">Temps</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {recentTicketsList.map((t) => (
                            <tr key={t.id} className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border-b border-gray-50 dark:border-border/50 last:border-0 cursor-pointer">
                                <td className="py-4 pl-4 font-bold text-gray-900 dark:text-white group-hover:text-pulsai-blue transition-colors">
                                    {t.id}
                                </td>
                                <td className="py-4 pl-8 font-medium text-gray-700 dark:text-gray-300">
                                    {t.subject}
                                </td>
                                <td className="py-4 pl-8">
                                    <StatusBadge status={t.status} />
                                </td>
                                <td className="py-4 pl-8 hidden md:table-cell">
                                    <span className={`text-xs font-bold ${t.priority === 'Élevée' ? 'text-red-500' :
                                        t.priority === 'Moyenne' ? 'text-gray-500' : 'text-blue-500'
                                        }`}>
                                        {t.priority}
                                    </span>
                                </td>
                                <td className="py-4 text-right pr-4 text-gray-400 font-medium">
                                    {t.time}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
