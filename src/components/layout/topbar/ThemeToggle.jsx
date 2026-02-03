'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

/**
 * Theme toggle button component with dark/light mode switching
 */
export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 text-gray-400 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            title={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
        >
            {theme === 'dark' ? <Sun size={22} strokeWidth={2} /> : <Moon size={22} strokeWidth={2} />}
        </button>
    );
}
