import { Calendar } from 'lucide-react';

// DateRangeField - SRP: Start and end date picker
function DateRangeField({ startDate, endDate, onStartChange, onEndChange, startError, endError, required = false }) {
    return (
        <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2">
                Période de la campagne
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <div className="grid grid-cols-2 gap-3">
                {/* Start Date */}
                <div>
                    <div className="relative">
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => onStartChange(e.target.value)}
                            className={`w-full px-4 py-2.5 rounded-xl border ${startError
                                    ? 'border-red-500 focus:ring-red-500/20'
                                    : 'border-gray-200 dark:border-border focus:ring-puls ai-blue/20'
                                } bg-white dark:bg-card text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-all`}
                            aria-invalid={startError ? 'true' : 'false'}
                        />
                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                    {startError && <p className="mt-1.5 text-sm text-red-500">{startError}</p>}
                </div>

                {/* End Date */}
                <div>
                    <div className="relative">
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => onEndChange(e.target.value)}
                            className={`w-full px-4 py-2.5 rounded-xl border ${endError
                                    ? 'border-red-500 focus:ring-red-500/20'
                                    : 'border-gray-200 dark:border-border focus:ring-pulsai-blue/20'
                                } bg-white dark:bg-card text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-all`}
                            aria-invalid={endError ? 'true' : 'false'}
                        />
                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                    {endError && <p className="mt-1.5 text-sm text-red-500">{endError}</p>}
                </div>
            </div>
        </div>
    );
}

export default DateRangeField;
