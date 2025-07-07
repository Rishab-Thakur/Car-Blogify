'use client';

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/Store";
import { fetchCarPosts } from "@/redux/slices/CarSlice";
import Layout from "@/layout/Layout";
import Loader from "@/app/loading";
import ErrorPage from "@/app/error";
import InfiniteScroll from "react-infinite-scroll-component";
import CardList from "@/components/Blogs/CardList";
import HeroSection from "@/components/Home/HeroSection";
import SearchFilterBar from "@/components/Blogs/SearchAndFilterBar";

export default function BlogsPage() {
    const dispatch = useAppDispatch();
    const { posts, loading, error } = useAppSelector((state) => state.posts);

    const [visibleCount, setVisibleCount] = useState(9);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState('All');

    useEffect(() => {
        if (!posts || posts.length === 0) {
            dispatch(fetchCarPosts());
        }
    }, [dispatch, posts]);

    const loadMore = () => {
        setTimeout(() => {
            setVisibleCount((prev) => prev + 9);
        }, 1000);
    };

    const filteredPosts = posts.filter((post) => {
        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesTag = selectedTag === 'All' || post.tag === selectedTag;

        return matchesSearch && matchesTag;
    });

    if (loading) return <Loader scrolling={false} />;
    if (error) return <ErrorPage />;

    return (
        <Layout>
            <HeroSection />
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                        All Posts
                    </h2>
                </div>

                <SearchFilterBar
                    onSearch={setSearchQuery}
                    onFilterTag={setSelectedTag}
                    availableTags={["EV", "Performance", "Supercar", "Hybrid", "EV SUV", "Adventure SUV", "Hybrid SUV", "EV Crossover", "GT", "Turbo SUV", "EV Truck"]}
                />

                {filteredPosts.length === 0 ? (
                    <div className="text-center py-16">
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No Articles Found</h3>
                        <p className="text-sm text-gray-400">
                            Please check back soon for new blog posts!
                        </p>
                    </div>
                ) : (
                    <InfiniteScroll
                        dataLength={Math.min(visibleCount, filteredPosts.length)}
                        next={loadMore}
                        hasMore={filteredPosts.length > visibleCount}
                        loader={<Loader scrolling={true} />}
                    >
                        <CardList cards={filteredPosts} visibleCount={visibleCount} />
                    </InfiniteScroll>
                )}
            </section>
        </Layout>
    );
}
