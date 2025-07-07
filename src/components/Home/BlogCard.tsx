import React from 'react';
import { FiCalendar, FiUser } from "react-icons/fi";

interface BlogCardProps {
    title: string;
    author: string;
    date: string;
    excerpt?: string;
    variant?: 'featured' | 'trending' | 'highlight';
    className?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
    title,
    author,
    date,
    excerpt,
    variant = 'trending',
    className = ''
}) => {
    const baseClasses = "rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg";

    if (variant === 'featured') {
        return (
            <article className={`${baseClasses} bg-white shadow-md ${className}`}>
                <div className="relative h-90 overflow-hidden">
                    <img
                        src={'/YellowCar.jpg'}
                        alt={title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                        <FiUser className="w-4 h-4 mr-1" />
                        <span className="text-red-600 font-medium mr-3">By {author}</span>
                        <FiCalendar className="w-4 h-4 mr-1" />
                        <span>{date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors">
                        {title}
                    </h2>
                    {excerpt && (
                        <p className="text-gray-600 mb-4 leading-relaxed">{excerpt}</p>
                    )}
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200">
                        Read more
                    </button>
                </div>
            </article>
        );
    }

    if (variant === 'highlight') {
        return (
            <article className={`${baseClasses}  bg-red-500 text-white p-4 ${className}`}>
                <div className="flex items-center text-sm mb-2 opacity-90">
                    <span className="mr-3">By {author}</span>
                    <span>{date}</span>
                </div>
                <h3 className="font-bold text-lg leading-tight">{title}</h3>
            </article>
        );
    }

    return (
        <article className={`${baseClasses} bg-white border border-gray-100 p-4 hover:border-blue-200 ${className}`}>
            <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="text-red-600 font-medium mr-3">By {author}</span>
                <span>{date}</span>
            </div>
            <h3 className="font-bold text-gray-900 leading-tight hover:text-blue-600 transition-colors">{title}</h3>
        </article>
    );
};