'use client';

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/Store";
import { fetchCarPosts } from "@/redux/slices/CarSlice";
import Layout from "@/layout/Layout";
import Loader from "@/app/loading";
import ErrorPage from "@/app/error";
import BlogPage from "@/components/Blogs/BlogPage";

export default function BlogDetailPage() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { posts, loading, error } = useAppSelector((state) => state.posts);

    useEffect(() => {
        if (!posts.length) dispatch(fetchCarPosts());
    }, [dispatch, posts.length]);

    if (loading) return <Loader scrolling={false} />;
    if (error) return <ErrorPage />;

    const blogPost = posts.find((post) => post.id === Number(id));

    if (!blogPost) {
        return (
            <Layout>
                <section className="max-w-4xl mx-auto px-6 py-20 text-center h-screen">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Article Not Found
                    </h2>
                    <p className="text-gray-500">
                        The article you are looking for does not exist or has been removed.
                    </p>
                    <button
                        onClick={() => router.push("/blogs")}
                        className="mt-6 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                        Back to Blogs
                    </button>
                </section>
            </Layout>
        );
    }

    return <BlogPage post={blogPost} />;
}
