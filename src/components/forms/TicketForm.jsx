'use client';

import { useState } from 'react';
import InputField from './fields/InputField';
import TextareaField from './fields/TextareaField';
import SelectField from './fields/SelectField';
import { PRIORITY_CONFIG, STATUS_CONFIG, CATEGORY_LABELS } from '@/config/ticketConfig';

// TicketForm - SRP: Compose fields to create/edit tickets
function TicketForm({ onSubmit, onCancel, initialData = {} }) {
    const [formData, setFormData] = useState({
        title: initialData.title || '',
        description: initialData.description || '',
        priority: initialData.priority || '',
        category: initialData.category || '',
        customerEmail: initialData.customer?.email || '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.title.trim()) newErrors.title = 'Le titre est requis';
        if (!formData.description.trim()) newErrors.description = 'La description est requise';
        if (!formData.priority) newErrors.priority = 'La priorité est requise';
        if (!formData.category) newErrors.category = 'La catégorie est requise';
        if (!formData.customerEmail.trim()) {
            newErrors.customerEmail = 'L\'email du client est requis';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customerEmail)) {
            newErrors.customerEmail = 'Format d\'email invalide';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(formData);
        }
    };

    const priorityOptions = Object.entries(PRIORITY_CONFIG).map(([value, config]) => ({
        value,
        label: config.label,
    }));

    const categoryOptions = Object.entries(CATEGORY_LABELS).map(([value, label]) => ({
        value,
        label,
    }));

    return (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-card rounded-[24px] p-4 sm:p-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-unbounded text-gray-900 dark:text-white">
                    Nouveau Ticket
                </h2>
                <button
                    type="button"
                    onClick={onCancel}
                    className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <InputField
                label="Titre du ticket"
                name="title"
                value={formData.title}
                onChange={handleChange}
                error={errors.title}
                required
                placeholder="Ex: Problème de connexion"
            />

            <TextareaField
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                error={errors.description}
                required
                placeholder="Décrivez le problème en détail..."
                rows={3}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SelectField
                    label="Priorité"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    error={errors.priority}
                    required
                    options={priorityOptions}
                />

                <SelectField
                    label="Catégorie"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    error={errors.category}
                    required
                    options={categoryOptions}
                />
            </div>

            <InputField
                label="Email du client"
                name="customerEmail"
                type="email"
                value={formData.customerEmail}
                onChange={handleChange}
                error={errors.customerEmail}
                required
                placeholder="client@example.com"
            />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                    type="button"
                    onClick={onCancel}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-border text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                    Annuler
                </button>
                <button
                    type="submit"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-pulsai-blue text-white font-bold hover:bg-pulsai-blue/90 transition-colors shadow-lg shadow-pulsai-blue/30"
                >
                    Créer le ticket
                </button>
            </div>
        </form>
    );
}

export default TicketForm;
