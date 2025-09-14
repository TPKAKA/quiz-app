import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/back_ground.png';

const Register: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle register logic here
        console.log('Register form submitted');
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-8 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0"></div>
            <main className="w-full max-w-lg relative z-10">
                <section className="bg-white rounded-lg shadow-lg p-8" aria-labelledby="register-title">
                    <form onSubmit={handleSubmit} noValidate>
                        <h2 id="register-title" className="text-2xl font-bold text-center text-gray-800 mb-6">
                            Register
                        </h2>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Enter your first name"
                                    required
                                    autoComplete="given-name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Enter your last name"
                                    required
                                    autoComplete="family-name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                autoComplete="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Enter your username"
                                    required
                                    autoComplete="username"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    autoComplete="tel"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                required
                                autoComplete="new-password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                required
                                autoComplete="new-password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <Link
                                to="/home"
                                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 no-underline"
                                role="button"
                            >
                                Back to Home
                            </Link>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                            >
                                Register
                            </button>
                        </div>

                        <div className="text-center text-sm text-gray-600">
                            Already have an account? {' '}
                            <Link
                                to="/login"
                                className="text-blue-500 hover:text-blue-600 no-underline"
                                aria-label="Sign in to existing account"
                            >
                                Login
                            </Link>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default Register;
