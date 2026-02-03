import { Circle, Clock, CheckCircle } from 'lucide-react';

export const PRIORITY_CONFIG = {
    urgent: { label: 'Urgent', color: 'bg-red-100 text-red-700', dot: 'bg-red-500' },
    medium: { label: 'Moyenne', color: 'bg-pulsai-blue/5 text-pulsai-blue', dot: 'bg-pulsai-blue' },
    low: { label: 'Faible', color: 'bg-gray-100 text-gray-600', dot: 'bg-gray-400' },
};

export const STATUS_CONFIG = {
    open: { label: 'Ouvert', icon: Circle, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    'in-progress': { label: 'En cours', icon: Clock, color: 'text-pulsai-blue', bg: 'bg-pulsai-blue/5 dark:bg-pulsai-blue/10' },
    resolved: { label: 'Résolu', icon: CheckCircle, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-900/20' },
    closed: { label: 'Fermé', icon: CheckCircle, color: 'text-gray-600 dark:text-gray-400', bg: 'bg-gray-50 dark:bg-gray-800' },
};

export const CATEGORY_LABELS = {
    bug: 'Bug',
    technical: 'Technique',
    'feature-request': 'Feature Request',
    billing: 'Facturation',
    support: 'Support',
};
