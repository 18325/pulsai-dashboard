'use client';

export default function ToggleSwitch({ enabled, onChange, label, description }) {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-border">
            <div className="flex items-center gap-3 flex-1">
                {label && (
                    <div className="flex-1">
                        <p className="font-bold text-gray-900 dark:text-white">{label}</p>
                        {description && (
                            <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
                        )}
                    </div>
                )}
            </div>
            <button
                onClick={onChange}
                className={`relative w-12 h-6 rounded-full transition-colors flex-shrink-0 ${
                    enabled ? 'bg-pulsai-blue' : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={label || 'Toggle'}
            >
                <span
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        enabled ? 'translate-x-6' : ''
                    }`}
                />
            </button>
        </div>
    );
}
