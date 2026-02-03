
import Link from 'next/link';

export default function Logo({ className = '', textSize = 'text-2xl', iconSize = 'w-10 h-10', showText = true }) {
    return (
        <Link href="/" className={`flex items-center gap-3 group ${className}`}>

            {/* Text */}
            {showText && (
                <div className={`${textSize} font-bold font-unbounded tracking-tight`}>
                    <span className="text-pulsai-blue">Puls</span>
                    <span className="text-pulsai-blue">AI</span>
                </div>
            )}
        </Link>
    );
}
