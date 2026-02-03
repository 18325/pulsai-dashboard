// TextareaField - SRP: Multi-line text input with label and validation
function TextareaField({ 
    label, 
    name, 
    value, 
    onChange, 
    error, 
    required = false, 
    placeholder = '', 
    rows = 4 
}) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                className={`w-full px-4 py-2.5 rounded-xl border ${error
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-gray-200 dark:border-border focus:ring-pulsai-blue/20'
                    } bg-white dark:bg-card text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all resize-none`}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? `${name}-error` : undefined}
            />
            {error && (
                <p id={`${name}-error`} className="mt-1.5 text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}

export default TextareaField;
