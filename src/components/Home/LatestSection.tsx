import React from 'react';
import { BlogCard } from './BlogCard';
import Link from 'next/link';

export const LatestSection: React.FC = () => {
    const featuredPost = {
        title: "The Electric Revolution: How EVs are Changing the Road Forever",
        author: "Rishab Thakur",
        date: "June 28, 2025",
        excerpt: "Electric vehicles are no longer a futuristic dream—they’re here, and they’re transforming the automotive industry. From zero emissions to instant torque, discover how EVs are driving innovation, reducing carbon footprints, and reshaping the way we think about transportation.",
    };

    const trendingPosts = [
        {
            title: "Top 5 Sports Cars to Watch in 2025",
            author: "Rishab Thakur",
            date: "June 20, 2025",
            variant: 'trending' as const
        },
        {
            title: "How Autonomous Cars are Making Highways Safer",
            author: "Ritesh Chauhan",
            date: "June 15, 2025",
            variant: 'highlight' as const
        },
        {
            title: "Classic Cars: Why Vintage Still Rules the Roads",
            author: "Shardul Singh",
            date: "June 10, 2025",
            variant: 'trending' as const
        },
        {
            title: "Hybrid vs. Electric: Which Car Should You Choose?",
            author: "Shubham Thakur",
            date: "June 5, 2025",
            variant: 'trending' as const
        },
        {
            title: "The Rise of Hydrogen Fuel Cell Cars: Pros and Cons",
            author: "Ansul Cahuhan",
            date: "June 2, 2025",
            variant: 'trending' as const
        },
        {
            title: "Top Safety Features to Look for in Your Next Car",
            author: "Akshit Chauhan",
            date: "May 30, 2025",
            variant: 'trending' as const
        }
    ];


    return (
        <div>
            <div className=" p-12 ">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Latest Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-3xl font-bold text-gray-900">Latest</h1>
                        </div>
                        <BlogCard
                            {...featuredPost}
                            variant="featured"
                            className="mb-6"
                        />
                    </div>

                    {/* Trending Blogs Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Trending Blogs</h2>
                            <Link
                                href="/blogs"
                                className="hover:text-red-600 font-medium text-sm transition-colors"
                            >
                                See all
                            </Link>
                        </div>
                        <div className="space-y-4">
                            {trendingPosts.map((post, index) => (
                                <BlogCard
                                    key={index}
                                    {...post}
                                    variant={post.variant}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};