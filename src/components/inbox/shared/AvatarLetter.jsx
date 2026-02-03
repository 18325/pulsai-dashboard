'use client';


const AvatarLetter = ({ letter = "A", name = "", size = "md" }) => {
    // Couleurs différentes par lettre
    const colors = {
        A: { bg: 'bg-pulsai-blue/10', text: 'text-pulsai-blue' },
        K: { bg: 'bg-pulsai-green/20', text: 'text-pulsai-blue' },
        Z: { bg: 'bg-pulsai-blue/10', text: 'text-pulsai-blue' },
        J: { bg: 'bg-pulsai-green/20', text: 'text-pulsai-blue' },
        F: { bg: 'bg-pulsai-blue/10', text: 'text-pulsai-blue' },
        M: { bg: 'bg-pulsai-blue/10', text: 'text-pulsai-blue' },
        D: { bg: 'bg-red-50', text: 'text-red-600' },
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
