import BlogCard from "./BlogCard";
import { CarPost } from "@/Interface/CarSliceInterface";

type Props = {
    cards: CarPost[];
    visibleCount: number;
};

export default function CardList({ cards, visibleCount }: Props) {
    return (
        <section className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-8z">
                {cards.slice(0, visibleCount).map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
}
