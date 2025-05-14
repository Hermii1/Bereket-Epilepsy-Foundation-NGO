import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from '../assets/Bereket Epilepsy Foundation Logo.jpg';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-400 w-full py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Logo */}
                    <div>
                        <img 
                            src={Logo}
                            alt="Company Logo" 
                            className="h-8 w-auto mb-2"
                        />
                        <span className="text-white font-bold text-lg">ReuniteHub</span>
                        <p className="text-gray-400 text-sm mt-2">
                            Connecting people through technology. Our platform helps you find and reunite with loved ones.
                        </p>
                    </div>

                    {/* Column 2: Contact Us */}
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-3">Contact Us</h2>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start">
                                <span className="mr-2">📍</span>
                                <span>Addis Ababa, Ethiopia</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">✉️</span>
                                <span>805#(free service)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">📞</span>
                                <span>(+251)911234567</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">✉️</span>
                                <span>help@reunitehub.et</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                            <li><a href="/services" className="hover:text-white transition">Services</a></li>
                            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
                            <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
                            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Follow Us */}
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-3">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
                    <p>© {new Date().getFullYear()} ReuniteHub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;