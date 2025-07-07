'use client';

import { Calendar, Star } from 'lucide-react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/Store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchCarPosts } from '@/redux/slices/CarSlice';

function Card({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={`rounded-xl bg-white ${className}`} {...props}>{children}</div>;
}

function CardContent({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={`p-6 ${className}`} {...props}>{children}</div>;
}

function Avatar({
    src,
    alt,
    fallback,
    className = '',
    ...props
}: {
    src: string;
    alt: string;
    fallback: string;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
    const [imgError, setImgError] = useState(false);

    return (
        <div className={`rounded-full overflow-hidden bg-gray-200 ${className}`} {...props}>
            {!imgError ? (
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                />
            ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-600">
                    {fallback}
                </div>
            )}
        </div>
    );
}

function Badge({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${className}`}
            {...props}
        >
            {children}
        </span>
    );
}

export default function NewTechnologySection() {
    const dispatch = useAppDispatch();
    const { posts, loading, error } = useAppSelector((state) => state.posts);
    const router = useRouter();

    useEffect(() => {
        if (!posts || posts.length === 0) {
            dispatch(fetchCarPosts());
        }
    }, [dispatch, posts]);

    const getRandomPosts = (count: number) => {
        if (!Array.isArray(posts) || posts.length === 0) return [];
        const shuffled = [...posts].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const latestPosts = getRandomPosts(4);

    return (
        <section className="w-full pb-16">
            <div className="ml-9 mr-9 px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">New Technology</h2>
                    <Link
                        href="/blogs"
                        className="hover:text-red-600 font-medium text-sm transition-colors hidden sm:block"
                    >
                        See all
                    </Link>
                </div>

                {/* Loading, Error or Fallback State */}
                {loading ? (
                    <div className="text-center text-gray-500 text-lg py-12">Loading posts...</div>
                ) : error ? (
                    <div className="text-red-500 text-center text-lg py-12">
                        Failed to load posts. Please try again later.
                    </div>
                ) : latestPosts.length === 0 ? (
                    <div className="text-gray-500 text-center text-lg py-12 border rounded-lg bg-gray-50">
                        No posts available at the moment. Please check back later.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {latestPosts.map((post) => (
                            <Card
                                key={post.id}
                                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                                onClick={() => router.push(`/blogs/${post.id}`)}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={post.thumbnail}
                                        alt={post.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        onError={(e) => (e.currentTarget.style.display = 'none')}
                                    />
                                    {post.tag && (
                                        <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 hover:bg-white">
                                            {post.tag}
                                        </Badge>
                                    )}
                                </div>
                                <CardContent>
                                    <h3 className="font-semibold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                                        {post.title}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Avatar
                                                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
                                                alt={post.author}
                                                fallback={post.author?.charAt(0) || 'A'}
                                                className="w-8 h-8"
                                            />
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{post.author}</p>
                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                    <Calendar className="w-3 h-3" />
                                                    <span>
                                                        {post.date ? new Date(post.date).toLocaleDateString() : 'N/A'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-gray-500">
                                            <Star className="w-3 h-3 text-yellow-400" />
                                            <span>{post.ratings?.toFixed(1) ?? '0.0'} Rating</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
