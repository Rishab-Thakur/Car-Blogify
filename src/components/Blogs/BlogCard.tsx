import Link from "next/link";
import { CarPost } from "@/Interface/CarSliceInterface";
import { Calendar, Star } from "lucide-react";

export default function BlogCard({ post }: { post: CarPost }) {
  const {
    id,
    title,
    description,
    thumbnail,
    date,
    author,
    ratings,
  } = post;

  return (
    <div className="bg-white w-full shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row mb-8 border border-gray-100">
      {/* Image Section */}
      <div className="w-full md:w-2/5 h-56 md:h-auto">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-3/5 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
            {title}
          </h3>
          <div className="flex items-center text-sm text-gray-500 mb-4 gap-2">
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="author avatar"
              className="w-6 h-6 rounded-full"
            />
            <span className="font-medium">{author}</span>
            <span className="mx-2">•</span>
            <Calendar size={14} className="inline-block" />
            <span>{new Date(date).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <Star size={14} className="text-yellow-400 inline-block" />
            <span>{ratings.toFixed(1)} rating</span>
          </div>
          <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>
        </div>
        <div>
          <Link href={`/blogs/${id}`}>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md text-base font-semibold transition-all duration-300 shadow-md">
              Read full article...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
