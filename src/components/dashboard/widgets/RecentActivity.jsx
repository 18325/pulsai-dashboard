
import { Mail, CheckCircle, UserPlus, FileText } from 'lucide-react';

const RecentActivity = () => {
    const activities = [
        {
            icon: FileText,
            color: 'blue',
            text: 'Contrat envoyé à Acme Corp.',
            time: '10:30'
        },
        {
            icon: Mail,
            color: 'purple',
            text: 'IA a rédigé une réponse pour Ticket #1208',
            time: '09:45'
        },
        {
            icon: UserPlus,
            color: 'green',
            text: 'Nouveau Lead: Sarah Jenkins (via Website)',
            time: '09:15'
        },
        {
            icon: CheckCircle,
            color: 'orange',
            text: 'Campagne "Summer Promo" lancée',
            time: '08:50'
        },
    ];

    return (
        <div className="bg-white/70 dark:bg-card/70 backdrop-blur-xl border border-white/50 dark:border-border rounded-3xl p-6 shadow-xl shadow-gray-100/50 dark:shadow-none h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">Activité Récente</h3>
                <button className="text-sm font-bold text-pulsai-blue hover:text-pulsai-blue/80 transition-colors">Tout voir</button>
            </div>

            <div className="flex-1 space-y-6">
                {activities.map((item, index) => (
                    <div key={`${item.text}-${item.time}`} className="flex gap-4 group">
                        <div className="relative flex flex-col items-center">
                            <div className={`w-10 h-10 rounded-full bg-${item.color}-100 flex items-center justify-center text-${item.color}-600 group-hover:scale-110 transition-transform`}>
                                <item.icon size={18} />
                            </div>
                            {index !== activities.length - 1 && (
                                <div className="w-0.5 flex-1 bg-gray-100 dark:bg-gray-800 my-1" />
                            )}
                        </div>
                        <div className="pb-2">
                            <p className="font-medium text-gray-800 dark:text-gray-200 text-sm group-hover:text-pulsai-blue transition-colors cursor-pointer">{item.text}</p>
                            <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentActivity;
