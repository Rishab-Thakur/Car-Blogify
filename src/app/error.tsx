'use client'

export default function ErrorPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <div className="w-20 h-20 text-red-500 mb-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.702-1.14 1.204-2.047l-6.928-12c-.53-.918-1.878-.918-2.408 0l-6.928 12c-.498.907.15 2.047 1.204 2.047z"
                    />
                </svg>
            </div>
            <h2 className="text-2xl font-bold text-red-600 mb-2">Something went wrong</h2>
            <p className="text-gray-500">
                We couldn’t load the content. Please contact Rishab Thakur for more information.
            </p>
            <p className="text-gray-500">Phone: 8580838847</p>
            <p className="text-gray-500">Mail: rishab.thakur@appinventiv.com</p>
        </div>
    );
}
