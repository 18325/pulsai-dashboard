// Satisfaction Widget - SRP: Display customer satisfaction breakdown
function SatisfactionWidget({ data }) {
    return (
        <div className="w-full bg-white dark:bg-card rounded-[24px] border border-gray-100 dark:border-border p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold font-unbounded text-gray-900 dark:text-white">
                        Satisfaction client
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Répartition des avis sur la période sélectionnée.
                    </p>
                </div>
                <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <span
                            key={`star-${i}`}
                            className={`inline-block w-5 h-5 rounded-full ${i < 4 ? 'bg-pulsai-blue' : 'bg-gray-200 dark:bg-gray-700'
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className="space-y-3 mt-2">
                {data.map((item) => (
                    <div key={item.stars} className="flex items-center gap-3">
                        <div className="w-16 text-xs font-semibold text-gray-500 dark:text-gray-400">
                            {item.label}
                        </div>
                        <div className="flex-1 h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-pulsai-blue to-pulsai-green"
                                style={{ width: `${item.percent}%` }}
                            />
                        </div>
                        <div className="w-10 text-right text-xs font-bold text-gray-700 dark:text-gray-200">
                            {item.percent}%
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SatisfactionWidget;
