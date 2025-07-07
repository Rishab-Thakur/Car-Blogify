import React from 'react';
import { FiSend } from 'react-icons/fi';

function HeroSection() {
    return (
        <div className="relative overflow-hidden mt-18 ">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-75"
                style={{
                    backgroundImage:
                        "url('/Hero.jpg')",
                }}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 "></div>

            <div className="relative h-[70vh]  flex items-center mt-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl space-y-8">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            <span className="block">Your Journey</span>
                            <span className="block">Your Car</span>
                            <span className="block">
                                Your Way
                            </span>
                        </h1>

                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-md">
                            Welcome to Car Blogify — Embark on your automotive journey with us. Explore the latest car reviews, industry news, and expert tips—all designed to fuel your passion for driving. Discover your next ride and stay ahead of the curve with Car Blogify.
                        </p>

                        <div className="flex flex-col mb-20 sm:flex-row gap-4 pb-2">
                            <button className="group bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/25 flex items-center justify-center gap-2">
                                Subscribe
                                <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;