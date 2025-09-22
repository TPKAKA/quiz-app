
import React from 'react';
import { NavLink } from 'react-router-dom';
import brandImg from '../../assets/brand.png';

const Footer: React.FC = () => (
    <footer className="text-[rgba(56,182,255,1)] text-black py-6 mt-6">
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <div className="flex items-center mb-4">
                        <img src={brandImg} alt="Quizzes" className="h-8 w-auto mr-2" />
                    </div>
                    <p className="text-[rgba(33,37,41,1)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Menu</h4>
                    <ul className="space-y-2">
                        <li><NavLink to="/home" className="text-[rgba(56,182,255,1)] hover:text-white transition duration-200">Home</NavLink></li>
                        <li><NavLink to="/quizzes" className="text-[rgba(56,182,255,1)] hover:text-white transition duration-200">Quizzes</NavLink></li>
                        <li><NavLink to="/about" className="text-[rgba(56,182,255,1)] hover:text-white transition duration-200">About</NavLink></li>
                        <li><NavLink to="/contact" className="text-[rgba(56,182,255,1)] hover:text-white transition duration-200">Contact</NavLink></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact</h4>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <i className="fas fa-map-marker-alt mr-2 text-gray-400"></i>
                            <span className="text-[rgba(56,182,255,1)]">123 Main Street, City, Country</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-phone mr-2 text-gray-400"></i>
                            <span className="text-[rgba(56,182,255,1)]">+1 (555) 123-4567</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-envelope mr-2 text-gray-400"></i>
                            <span className="text-[rgba(56,182,255,1)]">info@quizzes.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-6 pt-6 text-center text-black">
                <p>&copy; 2023 Quizzes. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
