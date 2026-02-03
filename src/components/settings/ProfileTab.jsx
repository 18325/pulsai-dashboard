'use client';

import { motion } from 'framer-motion';
import { User, Mail, Phone, Building2, Edit2, Save } from 'lucide-react';
import InputField from '@/components/forms/fields/InputField';
import TextareaField from '@/components/forms/fields/TextareaField';

export default function ProfileTab() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-2xl w-full"
        >
            <h3 className="text-2xl font-bold font-unbounded text-gray-900 dark:text-white mb-6">
                Informations Personnelles
            </h3>

            <div className="flex items-center gap-6 mb-8">
                <div className="relative group">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pulsai-blue to-pulsai-green flex items-center justify-center shadow-lg">
                        <User className="w-12 h-12 text-white" />
                    </div>
                    <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-pulsai-blue text-white rounded-full flex items-center justify-center shadow-lg hover:bg-pulsai-blue/90 transition-colors">
                        <Edit2 size={14} />
                    </button>
                </div>
                <div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white">Alexandre Dupont</h4>
                    <p className="text-gray-500 dark:text-gray-400">Admin Système</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Membre depuis Janvier 2024</p>
                </div>
            </div>

            <form className="space-y-6 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField
                        label="Prénom"
                        name="firstname"
                        defaultValue="Alexandre"
                    />
                    <InputField
                        label="Nom"
                        name="lastname"
                        defaultValue="Dupont"
                    />
                </div>

                <InputField
                    label="Email professionnel"
                    name="email"
                    type="email"
                    defaultValue="alex.dupont@pulsai.com"
                />

                <InputField
                    label="Téléphone"
                    name="phone"
                    type="tel"
                    defaultValue="+33 6 12 34 56 78"
                />

                <InputField
                    label="Entreprise"
                    name="company"
                    defaultValue="PulsAI Solutions"
                />

                <TextareaField
                    label="Bio"
                    name="bio"
                    rows={3}
                    defaultValue="Passionné par l'IA et l'automatisation. Spécialisé dans la gestion de relations clients et l'optimisation des processus métier."
                />

                <div className="pt-4 flex justify-end gap-3">
                    <button
                        type="button"
                        className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                    >
                        Annuler
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-3 bg-pulsai-blue text-white font-bold rounded-xl shadow-lg shadow-pulsai-blue/30 hover:bg-pulsai-blue/90 transition-all flex items-center gap-2"
                    >
                        <Save size={18} />
                        Enregistrer
                    </button>
                </div>
            </form>
        </motion.div>
    );
}
