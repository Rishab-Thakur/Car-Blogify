type LoaderProps = {
    scrolling?: boolean;
};

export default function Loader({ scrolling = false }: LoaderProps) {
    return (
        <div
            className={`w-full flex justify-center items-center ${scrolling ? "py-10" : "min-h-screen"
                }`}
        >
            <div className="w-12 h-12 border-4 border-red-500 border-dashed rounded-full animate-spin" />
        </div>
    );
}
