
import React from 'react';
import { NavLink } from 'react-router-dom';
import brandImg from '../../assets/brand.png';
import avatarImg from '../../assets/profile-avatar.png';

const Header: React.FC = () => (
    <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                    <img src={brandImg} alt="Quizzes Logo" className="h-8 w-auto" />
                </div>
                <nav className="hidden md:flex space-x-8">
                    <NavLink to="/home" className={({ isActive }) => isActive ? "text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium" : "text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"}>Home</NavLink>
                    <NavLink to="/quizzes" className={({ isActive }) => isActive ? "text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium" : "text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"}>Quizzes</NavLink>
                    <NavLink to="/admin/question-management" className={({ isActive }) => isActive ? "text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium" : "text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"}>Management</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium" : "text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"}>About</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium" : "text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"}>Contact</NavLink>
                </nav>
                <div className="flex items-center">
                    <div className="relative group">
                        <div className="flex items-center space-x-2 cursor-pointer">
                            <img src={avatarImg} alt="Avatar" className="h-8 w-8 rounded-full" />
                            <span className="text-sm font-medium text-gray-700">Cong Dinh</span>
                        </div>
                        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-10">
                            <div className="py-1">
                                <p className="px-4 py-2 text-sm text-gray-700">Cong Dinh</p>
                                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Change Password</button>
                                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
