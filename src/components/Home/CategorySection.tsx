'use client';

import React from 'react';
import { MdDirectionsCar } from 'react-icons/md';
import { FaWrench } from 'react-icons/fa';
import { FiSettings, FiNavigation } from 'react-icons/fi';
import Link from 'next/link';

interface FeatureCardProps {
    icon: React.ReactNode;
    heading: string;
    summary: string;
    className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, heading, summary, className = '' }) => (
    <article
        className={`group rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer p-6 text-center ${className}`}
        tabIndex={0}
        aria-label={heading}
    >
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-red-100 group-hover:to-red-200 transition-all duration-300">
            <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                {icon}
            </span>
        </div>
        <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
            {heading}
        </h3>
        <p className="text-gray-500 text-sm">{summary}</p>
    </article>
);

export const CategorySection: React.FC = () => {
    const features = [
        {
            icon: <MdDirectionsCar className="w-7 h-7" />,
            heading: 'Expert Car Reviews',
            summary: 'In-depth, unbiased reviews of the latest cars from trusted automotive experts.',
        },
        {
            icon: <FaWrench className="w-7 h-7" />,
            heading: 'DIY Maintenance',
            summary: 'Practical tips and guides to keep your vehicle in top shape—straight from the pros.',
        },
        {
            icon: <FiSettings className="w-7 h-7" />,
            heading: 'Customization Ideas',
            summary: 'Creative ways to personalize your car with the newest mods and accessories.',
        },
        {
            icon: <FiNavigation className="w-7 h-7" />,
            heading: 'Driving Mastery',
            summary: 'Expert guidance and safe driving strategies to level up your driving skills.',
        },
    ];

    return (
        <section className="w-full pb-16">
            <div className="ml-9 mr-9 px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">All Categories</h2>
                    <Link
                        href="/blogs"
                        className="hover:text-red-600 font-medium text-sm transition-colors"
                    >
                        See all
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <FeatureCard
                            key={idx}
                            icon={feature.icon}
                            heading={feature.heading}
                            summary={feature.summary}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
