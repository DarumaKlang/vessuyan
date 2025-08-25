// src/components/BackButton.tsx
import Link from 'next/link';
import React from 'react';

interface BackButtonProps {
    href: string;
    label: string;
}

const BackButton: React.FC<BackButtonProps> = ({ href, label }) => {
    return (
        <div className="mt-12 text-center">
            <Link href={href} passHref legacyBehavior>
                <a className="inline-block bg-secondary-gold text-primary-purple font-bold py-3 px-8 rounded-lg shadow-2xl hover:bg-yellow-400 transition-colors text-lg uppercase tracking-wider">
                    {label}
                </a>
            </Link>
        </div>
    );
};

export default BackButton;