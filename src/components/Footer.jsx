import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10 mt-10">
            <div className="container mx-auto px-6 sm:px-4 lg:px-8">

                {/* Footer Grid */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">

                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Basic Store</h3>
                        <p>123 Bosundhora, Dhaka, BD</p>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Useful Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="hover:text-gray-400">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-gray-400">About Us</Link>
                            </li>
                            <li>
                                <Link to="/products" className="hover:text-gray-400">Products</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media & Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="mb-2">Phone: +123 456 789</p>
                        <p className="mb-4">Email: info@basicstore.com</p>

                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                <i className="fab fa-facebook-f"></i> Facebook
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                <i className="fab fa-twitter"></i> Twitter
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="bg-gray-900 text-center py-4 mt-10">
                    <p>&copy; {new Date().getFullYear()} Basic Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;