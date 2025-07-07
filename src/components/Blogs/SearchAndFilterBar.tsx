'use client';

import { useState } from "react";
import { Search } from 'lucide-react';

interface Props {
    onSearch: (value: string) => void;
    onFilterTag: (tag: string) => void;
    availableTags: string[];
}

export default function SearchFilterBar({ onSearch, onFilterTag, availableTags }: Props) {
    const [query, setQuery] = useState('');
    const [activeTag, setActiveTag] = useState('All');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };

    const handleTagClick = (tag: string) => {
        setActiveTag(tag);
        onFilterTag(tag);
    };

    return (
        <div className="w-full mb-10">
            {/* Search Bar */}
            <div className="relative w-full  mb-6">
                <input
                    type="text"
                    value={query}
                    onChange={handleSearchChange}
                    placeholder="Search blog posts..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            </div>

            {/* Filter Tags */}
            <div className="flex flex-wrap gap-3">
                {['All', ...availableTags].map((tag) => (
                    <button
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${activeTag === tag
                            ? 'bg-red-600 text-white border-red-600 shadow-md'
                            : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                            }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
}
