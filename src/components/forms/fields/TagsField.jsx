import { X } from 'lucide-react';

// TagsField - SRP: Multi-select tags with add/remove
function TagsField({ label, selectedTags, availableTags, onToggle, error }) {
    return (
        <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2">
                {label}
            </label>
            <div className="flex flex-wrap gap-2">
                {availableTags.map((tag) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                        <button
                            key={tag}
                            type="button"
                            onClick={() => onToggle(tag)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${isSelected
                                    ? 'bg-pulsai-blue text-white hover:bg-pulsai-blue/90'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {tag}
                            {isSelected && <X size={14} />}
                        </button>
                    );
                })}
            </div>
            {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
        </div>
    );
}

export default TagsField;
