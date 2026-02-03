'use client';

import { useState } from 'react';
import InputField from './fields/InputField';
import SelectField from './fields/SelectField';
import DateRangeField from './fields/DateRangeField';

// CampaignForm - SRP: Compose fields to create/edit campaigns
function CampaignForm({ onSubmit, onCancel, initialData = {} }) {
    const [formData, setFormData] = useState({
        name: initialData.name || '',
        type: initialData.type || '',
        template: initialData.template || '',
        recipients: initialData.recipients || '',
        startDate: initialData.startDate || '',
        endDate: initialData.endDate || '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
        if (!formData.type) newErrors.type = 'Le type est requis';
        if (!formData.template) newErrors.template = 'Le template est requis';
        if (!formData.recipients) {
            newErrors.recipients = 'Le nombre de destinataires est requis';
        } else if (parseInt(formData.recipients) <= 0) {
            newErrors.recipients = 'Le nombre doit être supérieur à 0';
        }
        if (!formData.startDate) newErrors.startDate = 'La date de début est requise';
        if (!formData.endDate) newErrors.endDate = 'La date de fin est requise';

        // Validate end date is after start date
        if (formData.startDate && formData.endDate && formData.endDate < formData.startDate) {
            newErrors.endDate = 'La date de fin doit être après la date de début';
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

    const typeOptions = [
        { value: 'email', label: 'Email' },
        { value: 'sms', label: 'SMS' },
        { value: 'social', label: 'Réseaux Sociaux' },
    ];

    const templateOptions = [
        { value: 'newsletter', label: 'Newsletter' },
        { value: 'promotion', label: 'Promotion' },
        { value: 'announcement', label: 'Annonce' },
        { value: 'welcome', label: 'Bienvenue' },
        { value: 'cart-reminder', label: 'Rappel Panier' },
        { value: 'survey', label: 'Enquête' },
        { value: 'loyalty', label: 'Fidélité' },
        { value: 'reactivation', label: 'Réactivation' },
        { value: 'event', label: 'Événement' },
    ];

    return (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-card rounded-[24px] p-4 sm:p-6 max-h-[85vh] overflow-y-auto">
            <h2 className="text-2xl font-bold font-unbounded text-gray-900 dark:text-white mb-6">
                Nouvelle Campagne
            </h2>

            <InputField
                label="Nom de la campagne"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
                placeholder="Ex: Newsletter Janvier"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SelectField
                    label="Type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    error={errors.type}
                    required
                    options={typeOptions}
                />

                <SelectField
                    label="Template"
                    name="template"
                    value={formData.template}
                    onChange={handleChange}
                    error={errors.template}
                    required
                    options={templateOptions}
                />
            </div>

            <DateRangeField
                startDate={formData.startDate}
                endDate={formData.endDate}
                onStartChange={(value) => {
                    setFormData((prev) => ({ ...prev, startDate: value }));
                    if (errors.startDate) setErrors((prev) => ({ ...prev, startDate: '' }));
                }}
                onEndChange={(value) => {
                    setFormData((prev) => ({ ...prev, endDate: value }));
                    if (errors.endDate) setErrors((prev) => ({ ...prev, endDate: '' }));
                }}
                startError={errors.startDate}
                endError={errors.endDate}
                required
            />

            <InputField
                label="Nombre de destinataires"
                name="recipients"
                type="number"
                value={formData.recipients}
                onChange={handleChange}
                error={errors.recipients}
                required
                placeholder="Ex: 2400"
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
                    Créer la campagne
                </button>
            </div>
        </form>
    );
}

export default CampaignForm;
