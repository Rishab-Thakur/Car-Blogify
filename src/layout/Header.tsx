'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const handleLinkClick = () => setMenuOpen(false);

    const isActive = (href: string) => pathname === href;

    return (
        <header className="bg-[#232536] text-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="/Logo.png"
                        alt="Logo"
                        className="h-10 w-10 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                    />
                    <h1 className="text-2xl font-bold">Car Blogify</h1>
                </Link>

                <nav className="hidden md:flex space-x-10 text-sm font-semibold sm:text-base">
                    <Link
                        href="/"
                        className={`hover:text-red-400 transition-colors ${isActive("/") ? "text-red-400" : ""}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/blogs"
                        className={`hover:text-red-400 transition-colors ${isActive("/blogs") ? "text-red-400" : ""}`}
                    >
                        Blogs
                    </Link>
                    <Link
                        href="/about"
                        className={`hover:text-red-400 transition-colors ${isActive("/about") ? "text-red-400" : ""}`}
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className={`hover:text-red-400 transition-colors ${isActive("/contact") ? "text-red-400 underline" : ""}`}
                    >
                        Contact
                    </Link>
                </nav>

                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-white my-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
                </button>
            </div>

            <nav
                className={`md:hidden bg-[#232536] w-full absolute left-0 top-full shadow-lg transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}
            >
                <ul className="flex flex-col items-center gap-6 py-6">
                    <li>
                        <Link
                            href="/"
                            className={`hover:text-red-400 transition-colors text-lg ${isActive("/") ? "text-red-400 underline" : ""}`}
                            onClick={handleLinkClick}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className={`hover:text-red-400 transition-colors text-lg ${isActive("/about") ? "text-red-400 underline" : ""}`}
                            onClick={handleLinkClick}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className={`hover:text-red-400 transition-colors text-lg ${isActive("/contact") ? "text-red-400 underline" : ""}`}
                            onClick={handleLinkClick}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
