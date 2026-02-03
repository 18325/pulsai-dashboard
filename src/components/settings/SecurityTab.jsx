'use client';

import { motion } from 'framer-motion';
import { Key, Shield, Monitor, Smartphone, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function SecurityTab({ twoFactorEnabled, onTwoFactorToggle }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-2xl w-full"
        >
            <h3 className="text-2xl font-bold font-unbounded text-gray-900 dark:text-white mb-6">
                Sécurité du compte
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
                Gérez votre mot de passe et les paramètres de sécurité
            </p>

            <div className="space-y-6 w-full">
                <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-border">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <Key className="w-5 h-5" />
                        Changer le mot de passe
                    </h4>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Mot de passe actuel</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full p-3 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pulsai-blue/20 focus:border-pulsai-blue dark:text-white transition-all pr-10"
                                    placeholder="••••••••"
                                />
                                <button
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Nouveau mot de passe</label>
                            <input
                                type="password"
                                className="w-full p-3 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pulsai-blue/20 focus:border-pulsai-blue dark:text-white transition-all"
                                placeholder="Minimum 8 caractères"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Confirmer le mot de passe</label>
                            <input
                                type="password"
                                className="w-full p-3 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pulsai-blue/20 focus:border-pulsai-blue dark:text-white transition-all"
                                placeholder="Répétez le nouveau mot de passe"
                            />
                        </div>
                        <button className="px-6 py-3 bg-pulsai-blue text-white font-bold rounded-xl hover:bg-pulsai-blue/90 transition-all">
                            Mettre à jour le mot de passe
                        </button>
                    </div>
                </div>

                <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-border">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <Shield className="w-5 h-5" />
                                Authentification à deux facteurs (2FA)
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                Ajoutez une couche de sécurité supplémentaire à votre compte
                            </p>
                        </div>
                        <button
                            onClick={onTwoFactorToggle}
                            className={`relative w-12 h-6 rounded-full transition-colors ${
                                twoFactorEnabled ? 'bg-pulsai-blue' : 'bg-gray-300 dark:bg-gray-700'
                            }`}
                        >
                            <span
                                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                                    twoFactorEnabled ? 'translate-x-6' : ''
                                }`}
                            />
                        </button>
                    </div>
                    {twoFactorEnabled && (
                        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900/30 rounded-xl">
                            <p className="text-sm text-blue-800 dark:text-blue-300">
                                Scannez le QR code avec votre application d'authentification (Google Authenticator, Authy, etc.)
                            </p>
                        </div>
                    )}
                </div>

                <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-border">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <Monitor className="w-5 h-5" />
                        Sessions actives
                    </h4>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-card rounded-xl border border-gray-200 dark:border-border">
                            <div className="flex items-center gap-3">
                                <Monitor className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                                <div>
                                    <p className="font-bold text-gray-900 dark:text-white">Windows • Chrome</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Paris, France • Actif maintenant</p>
                                </div>
                            </div>
                            <span className="px-2 py-1 bg-pulsai-green/20 dark:bg-pulsai-green/20 text-pulsai-green dark:text-pulsai-green text-xs font-bold rounded-lg">
                                Actif
                            </span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-card rounded-xl border border-gray-200 dark:border-border">
                            <div className="flex items-center gap-3">
                                <Smartphone className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                                <div>
                                    <p className="font-bold text-gray-900 dark:text-white">iPhone • Safari</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Lyon, France • Il y a 2 heures</p>
                                </div>
                            </div>
                            <button className="text-red-500 hover:text-red-600 dark:hover:text-red-400 text-sm font-bold">
                                Déconnecter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
