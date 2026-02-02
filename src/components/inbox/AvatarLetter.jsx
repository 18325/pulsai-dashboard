"use client";

import React from 'react';

const AvatarLetter = ({ letter = "A", name = "", size = "md" }) => {
    // Couleurs différentes par lettre
    const colors = {
        'A': { bg: 'bg-orange-100', text: 'text-orange-600' },
        'K': { bg: 'bg-blue-100', text: 'text-blue-600' },
        'Z': { bg: 'bg-pink-100', text: 'text-pink-600' },
        'J': { bg: 'bg-green-100', text: 'text-green-600' },
        'F': { bg: 'bg-purple-100', text: 'text-purple-600' },
        'M': { bg: 'bg-indigo-100', text: 'text-indigo-600' },
        'D': { bg: 'bg-red-100', text: 'text-red-600' },
    };

    const color = colors[letter.toUpperCase()] || { bg: 'bg-gray-100', text: 'text-gray-600' };

    const sizeClasses = {
        'sm': 'w-8 h-8 text-xs',
        'md': 'w-10 h-10 text-sm',
        'lg': 'w-12 h-12 text-base',
    };

    return (
        <div className={`${sizeClasses[size]} ${color.bg} ${color.text} rounded-full flex items-center justify-center font-bold`}>
            {letter.toUpperCase().charAt(0)}
        </div>
    );
};

export default AvatarLetter;
