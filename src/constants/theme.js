export const theme = {
    colors: {
        pulsai: {
            blue: 'var(--color-pulsai-blue)',
            green: 'var(--color-pulsai-green)',
            gray: {
                dark: 'var(--color-pulsai-gray-dark)',
            },
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        cardForeground: 'var(--card-foreground)',
        border: 'var(--border)',
    },
    // Helper to join classes conditionally (lightweight clsx)
    cn: (...classes) => classes.filter(Boolean).join(' '),

    // Common component styles
    components: {
        card: "bg-white dark:bg-card border border-gray-100 dark:border-border shadow-sm rounded-2xl transition-colors",
        input: "bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-pulsai-blue/20 transition-all text-gray-900 dark:text-white placeholder:text-gray-400",
        button: {
            primary: "bg-pulsai-blue hover:bg-pulsai-blue/90 text-white transition-colors",
            ghost: "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors",
        },
        text: {
            primary: "text-gray-900 dark:text-white",
            secondary: "text-gray-500 dark:text-gray-400",
        }
    }
};
