import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#232536] text-gray-300 py-12 px-6 ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-14">
                {/* Logo & About */}
                <div className="space-y-4">
                    <img
                        src="/Logo.png"
                        alt="Logo"
                        className="h-12 w-12 rounded-full shadow-lg"
                    />
                    <h2 className="text-white text-2xl font-bold tracking-wide">Car Blogify</h2>
                    <p className="text-gray-400 text-sm">
                        Discover expert car reviews, breaking automotive news, and practical tips to keep you informed and ahead on the road.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" aria-label="Facebook" className="hover:text-red-400 transition">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-red-400 transition">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-red-400 transition">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-red-400 transition">
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:text-red-400 transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-red-400 transition">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-red-400 transition">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>
                    <address className="not-italic space-y-2 text-gray-400 text-sm">
                        <p>Car Market</p>
                        <p>Shimla, HP 171206</p>
                        <p>Phone: <a href="tel:+918580838847" className="hover:text-red-400">8580838847</a></p>
                        <p>Email: <a href="mailto:info@carblog.com" className="hover:text-red-400">rishab@gmail.com</a></p>
                    </address>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white text-xl font-semibold mb-4">Newsletter</h3>
                    <p className="text-gray-400 text-sm mb-4">
                        Never miss a beat—subscribe now for up-to-date car news and insights, sent right to your email.
                    </p>

                </div>
            </div>

            {/* Bottom copyright */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm select-none">
                &copy; {new Date().getFullYear()} Car Blogify. All rights reserved.
            </div>
        </footer>
    );
}