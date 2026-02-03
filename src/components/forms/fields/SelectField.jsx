'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// SelectField - SRP: Custom styled dropdown select with label and validation
function SelectField({ label, name, value, onChange, error, required = false, options, placeholder = 'Sélectionnez une option' }) {
    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = options.find(option => option.value === value);
    
    const handleSelect = (optionValue) => {
        const event = { target: { name, value: optionValue } };
        onChange(event);
        setIsOpen(false);
    };
    
    return (
        <div className="mb-4 relative">
            <label htmlFor={name} className="block text-sm font-bold text-gray-700 dark:text-gray-200 mb-2">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            
            {/* Custom Select for better styling */}
            <div className="relative">
                <div 
                    className={`w-full px-4 py-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${error
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-gray-200 dark:border-border hover:border-gray-300 dark:hover:border-gray-600 focus:ring-pulsai-blue/20'
                    } bg-white dark:bg-card text-gray-900 dark:text-white focus:outline-none focus:ring-2`}
                    onClick={() => setIsOpen(!isOpen)}
                    tabIndex={0}
                    role="combobox"
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                >
                    <span className={`${value ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                    <ChevronDown 
                        size={20} 
                        className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                    />
                </div>
                
                {/* Dropdown menu with smart positioning */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl shadow-lg z-50 max-h-40 overflow-y-auto">
                        <div 
                            role="listbox"
                            className="py-1"
                        >
                            <div 
                                role="option"
                                className="px-4 py-2 text-gray-400 text-sm cursor-default hover:bg-gray-50 dark:hover:bg-gray-800"
                                onClick={() => handleSelect('')}
                            >
                                {placeholder}
                            </div>
                            {options.map((option) => (
                                <div
                                    key={option.value}
                                    role="option"
                                    className={`px-4 py-2 cursor-pointer transition-colors ${value === option.value 
                                        ? 'bg-pulsai-blue/10 text-pulsai-blue font-medium' 
                                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                                    onClick={() => handleSelect(option.value)}
                                >
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            
            {/* Hidden native select for form submission */}
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="hidden"
                aria-hidden="true"
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            
            {error && (
                <p id={`${name}-error`} className="mt-1.5 text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}

export default SelectField;
