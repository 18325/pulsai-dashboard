import { Play, Clock, CheckCircle2, FileText, Mail, MessageSquare, UserPlus, Gift, Newspaper, ShoppingCart, RefreshCw, Star, BarChart3, PartyPopper } from 'lucide-react';

export const STATUS_CONFIG = {
    active: {
        label: 'Active',
        color: 'text-pulsai-blue',
        bg: 'bg-gray-50',
        border: 'border-gray-200',
        icon: Play,
    },
    scheduled: {
        label: 'Planifiée',
        color: 'text-pulsai-blue',
        bg: 'bg-gray-50',
        border: 'border-gray-200',
        icon: Clock,
    },
    completed: {
        label: 'Terminée',
        color: 'text-gray-600',
        bg: 'bg-gray-50',
        border: 'border-gray-200',
        icon: CheckCircle2,
    },
    draft: {
        label: 'Brouillon',
        color: 'text-gray-600',
        bg: 'bg-gray-50',
        border: 'border-gray-200',
        icon: FileText,
    },
};

export const TEMPLATE_CONFIG = {
    welcome: { label: 'Bienvenue', icon: UserPlus },
    promotion: { label: 'Promotion', icon: Gift },
    newsletter: { label: 'Newsletter', icon: Newspaper },
    'cart-reminder': { label: 'Panier abandonné', icon: ShoppingCart },
    reactivation: { label: 'Réactivation', icon: RefreshCw },
    loyalty: { label: 'Fidélité', icon: Star },
    survey: { label: 'Enquête', icon: BarChart3 },
    event: { label: 'Événement', icon: PartyPopper },
};

export const TYPE_CONFIG = {
    email: {
        label: 'Email',
        icon: Mail,
        color: 'text-pulsai-blue',
        bg: 'bg-gray-50',
    },
    sms: {
        label: 'SMS',
        icon: MessageSquare,
        color: 'text-pulsai-blue',
        bg: 'bg-gray-50',
    },
};

export const STATUS_FILTERS = [
    { value: 'all', label: 'Toutes' },
    { value: 'active', label: 'Actives' },
    { value: 'scheduled', label: 'Planifiées' },
    { value: 'completed', label: 'Terminées' },
    { value: 'draft', label: 'Brouillons' },
];

export const TEMPLATE_OPTIONS = Object.entries(TEMPLATE_CONFIG).map(([value, config]) => ({
    value,
    label: config.label,
}));
