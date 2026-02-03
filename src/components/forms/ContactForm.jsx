'use client';

import { useState } from 'react';
import InputField from './fields/InputField';
import SelectField from './fields/SelectField';

// ContactForm - SRP: Compose fields to create/edit contacts
function ContactForm({ onSubmit, onCancel, initialData = {} }) {
    const [formData, setFormData] = useState({
        name: initialData.name || '',
        email: initialData.email || '',
        phone: initialData.phone || '',
        company: initialData.company || '',
        role: initialData.role || '',
        segment: initialData.segment || '',
        tag: initialData.tag || '',
        location: initialData.location || '',
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
        if (!formData.email.trim()) {
            newErrors.email = 'L\'email est requis';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Format d\'email invalide';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Le téléphone est requis';
        } else if (!/^\+?\d[\d\s-]{8,}$/.test(formData.phone)) {
            newErrors.phone = 'Format de téléphone invalide';
        }
        if (!formData.segment) newErrors.segment = 'Le segment est requis';
        if (!formData.tag) newErrors.tag = 'Le tag est requis';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit({ ...formData, status: 'active', lastContact: new Date().toISOString().split('T')[0] });
        }
    };

    const segmentOptions = [
        { value: 'Entreprise', label: 'Entreprise' },
        { value: 'PME', label: 'PME' },
        { value: 'Startup', label: 'Startup' },
    ];

    const tagOptions = [
        { value: 'Premium', label: 'Premium' },
        { value: 'Standard', label: 'Standard' },
        { value: 'VIP', label: 'VIP' },
    ];

    const locationOptions = [
        { value: 'Dakar, Sénégal', label: 'Dakar, Sénégal' },
        { value: 'Abidjan, Côte d\'Ivoire', label: 'Abidjan, Côte d\'Ivoire' },
        { value: 'Lagos, Nigeria', label: 'Lagos, Nigeria' },
        { value: 'Accra, Ghana', label: 'Accra, Ghana' },
        { value: 'Nairobi, Kenya', label: 'Nairobi, Kenya' },
        { value: 'Casablanca, Maroc', label: 'Casablanca, Maroc' },
        { value: 'Tunis, Tunisie', label: 'Tunis, Tunisie' },
        { value: 'Johannesburg, South Africa', label: 'Johannesburg, South Africa' },
    ];

    return (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-card rounded-[24px] p-4 sm:p-6 max-h-[85vh] overflow-y-auto">
            <h2 className="text-2xl font-bold font-unbounded text-gray-900 dark:text-white mb-6">
                {initialData.id ? 'Modifier Contact' : 'Nouveau Contact'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                    label="Nom complet"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                    placeholder="Ex: Amara Diallo"
                />

                <InputField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                    placeholder="Ex: amara@example.com"
                />

                <InputField
                    label="Téléphone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    required
                    placeholder="Ex: +221 77 123 45 67"
                />

                <InputField
                    label="Entreprise"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Ex: TechSolutions IO"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <InputField
                    label="Poste"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Ex: Directrice Marketing"
                />

                <SelectField
                    label="Segment"
                    name="segment"
                    value={formData.segment}
                    onChange={handleChange}
                    error={errors.segment}
                    required
                    options={segmentOptions}
                />

                <SelectField
                    label="Tag"
                    name="tag"
                    value={formData.tag}
                    onChange={handleChange}
                    error={errors.tag}
                    required
                    options={tagOptions}
                />

                <SelectField
                    label="Localisation"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    options={locationOptions}
                    placeholder="Sélectionnez une ville"
                />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                    type="button"
                    onClick={onCancel}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-border text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors active:scale-95"
                >
                    Annuler
                </button>
                <button
                    type="submit"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-pulsai-blue text-white font-bold hover:bg-pulsai-blue/90 transition-colors shadow-lg shadow-pulsai-blue/30 active:scale-95"
                >
                    {initialData.id ? 'Mettre à jour' : 'Créer le contact'}
                </button>
            </div>
        </form>
    );
}

export default ContactForm;