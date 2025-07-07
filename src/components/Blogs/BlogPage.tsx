import { CarPost } from "@/Interface/CarSliceInterface";
import Layout from "@/layout/Layout";
import { Calendar, Star } from "lucide-react";
import NewTechnologySection from "../Home/NewTechnologySection";

type BlogPostProps = {
    post: CarPost;
};

export default function BlogPage({ post }: BlogPostProps) {
    const {
        title,
        description,
        thumbnail,
        author,
        date,
        ratings,
        tag,
        specifications,
        article,
    } = post;

    return (
        <Layout>
            <section className="max-w-5xl mx-auto px-6 py-12 mt-20">
                {/* Image */}
                <div className="mb-10 rounded-lg overflow-hidden">
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-slate-800 mb-4 leading-tight">
                        {title}
                    </h1>
                    <div className="flex items-center text-sm text-gray-500 gap-3 flex-wrap">
                        <img
                            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
                            alt="author avatar"
                            className="w-6 h-6 rounded-full"
                        />
                        <span className="font-medium">{author}</span>
                        <span>•</span>
                        <Calendar size={14} />
                        <span>{new Date(date).toLocaleDateString()}</span>
                        <span>•</span>
                        <Star size={14} className="text-yellow-400" />
                        <span>{ratings.toFixed(1)} rating</span>
                        <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs font-semibold ml-2">
                            {tag}
                        </span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                    {description}
                </p>

                {/* Article Body */}
                <article className="prose max-w-none prose-red prose-lg text-gray-800 mb-12">
                    {article?.split("\n").map((para: string, idx: number) => (
                        <p key={idx}>{para}</p>
                    ))}
                </article>

                {/* Specifications */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                        Specifications
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-sm">
                        {Object.entries(specifications).map(([key, value]) => (
                            <div key={key}>
                                <span className="font-semibold capitalize">
                                    {key.replace(/([A-Z])/g, " $1")}:
                                </span>{" "}
                                <span className="ml-1">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <NewTechnologySection />

        </Layout>
    );
}
