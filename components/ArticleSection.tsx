// src/components/ArticleSection.tsx
import React from 'react';

interface Definition {
    term: string;
    description: string;
}

interface ArticleSectionProps {
    title: string;
    content: string;
    definitions: Definition[];
}

const ArticleSection: React.FC<ArticleSectionProps> = ({ title, content, definitions }) => {
    return (
        <section className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col">
            <h2 className="text-3xl font-bold text-secondary-gold mb-4">{title}</h2>
            <p className="mb-6 text-lg">{content}</p>
            <ul className="space-y-4 text-white">
                {definitions.map((def, index) => (
                    <li key={index}>
                        <strong className="text-secondary-gold">{def.term}:</strong> {def.description}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ArticleSection;