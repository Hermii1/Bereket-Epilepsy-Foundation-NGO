import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from '../Assets/Bereket Epilepsy Foundation Logo.jpg';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-400 w-full py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Logo */}
                    <div>
                        <img 
                            src={Logo}
                            alt="Bereket Epilepsy Foundation Logo" 
                            className="h-8 w-auto mb-2"
                        />
                        <span className="text-white font-bold text-lg">Bereket Epilepsy Foundation</span>
                        <p className="text-gray-400 text-sm mt-2">
                            Dedicated to improving lives affected by epilepsy through awareness, support, and research initiatives.
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
                                <span>info@bereketepilepsy.org</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">📞</span>
                                <span>(+251) 911 234 567</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">📞</span>
                                <span>(+251) 987 654 321 (Emergency)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                            <li><a href="/programs" className="hover:text-white transition">Programs</a></li>
                            <li><a href="/events" className="hover:text-white transition">Events</a></li>
                            <li><a href="/donate" className="hover:text-white transition">Donate</a></li>
                            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
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
                    <p>© {new Date().getFullYear()} Bereket Epilepsy Foundation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;