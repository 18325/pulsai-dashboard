
import TicketCard from './TicketCard';
import { MoreHorizontal, Plus } from 'lucide-react';

const Column = ({ title, count, items, color }) => (
    <div className="flex-1 min-w-[300px]">
        <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${color === 'yellow' ? 'bg-amber-500' : `bg-${color}-500`}`} />
                <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-bold px-2 py-0.5 rounded-full">{count}</span>
            </div>
            <div className="flex gap-1">
                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-gray-400 dark:text-gray-500">
                    <Plus size={18} />
                </button>
                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-gray-400 dark:text-gray-500">
                    <MoreHorizontal size={18} />
                </button>
            </div>
        </div>

        <div className="bg-gray-50/50 dark:bg-gray-900/30 rounded-3xl p-3 min-h-[500px] border border-gray-100/50 dark:border-gray-800/50">
            {items.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} />
            ))}

            <button className={`w-full py-3 rounded-xl border-2 border-dashed ${color === 'yellow' ? 'border-amber-200 dark:border-amber-900/50 text-amber-500 dark:text-amber-400 hover:border-amber-300 hover:text-amber-600 dark:hover:border-amber-800 dark:hover:text-amber-300' : `border-${color}-200 dark:border-${color}-900/50 text-${color}-500 dark:text-${color}-400 hover:border-${color}-300 hover:text-${color}-600 dark:hover:border-${color}-800 dark:hover:text-${color}-300`} transition-colors flex items-center justify-center gap-2 mt-2`}>
                <Plus size={16} />
                Ajouter Ticket
            </button>
        </div>
    </div>
);

const KanbanBoard = () => {
    // Mock Data
    const tickets = {
        new: [
            { id: '1', title: 'Login Issue - User locked out', customer: 'Jean Dupont', tag: 'Urgent', priority: 'High', aiConfidence: 92, initials: 'JD' },
            { id: '2', title: 'Feature Request - Dashboard Export', customer: 'Acme Corp', tag: 'Sales', priority: 'Low', aiConfidence: 85, initials: 'AC' },
        ],
        progress: [
            { id: '3', title: 'Payment Failure - Transaction error', customer: 'Sophie Martin', tag: 'Support', priority: 'Medium', aiConfidence: 78, initials: 'SM' },
        ],
        resolved: [
            { id: '4', title: 'Bug Report - Fixed in v2.1', customer: 'Lucas Petit', tag: 'Product', priority: 'Low', aiConfidence: 96, initials: 'LP' },
            { id: '5', title: 'Billing Inquiry - Refund processed', customer: 'Marie Currie', tag: 'Finance', priority: 'Medium', aiConfidence: 94, initials: 'MC' },
        ]
    };

    return (
        <div className="flex flex-col gap-4 md:gap-6 overflow-x-auto pb-4 h-full">
            <Column title="Nouveaux" count={12} items={tickets.new} color="blue" />
            <Column title="En Cours" count={8} items={tickets.progress} color="yellow" />
            <Column title="Résolus" count={24} items={tickets.resolved} color="green" />
        </div>
    );
};

export default KanbanBoard;
