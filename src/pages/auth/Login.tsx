import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/back_ground.png';

const Login: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login form submitted');
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0"></div>
            <main className="w-full max-w-md relative z-10">
                <section className="bg-white rounded-lg shadow-lg p-8" aria-labelledby="login-title">
                    <form onSubmit={handleSubmit} noValidate>
                        <h2 id="login-title" className="text-2xl font-bold text-center text-gray-800 mb-6">
                            Login
                        </h2>

                        <div className="mb-4">
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

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                required
                                autoComplete="current-password"
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
                                Login
                            </button>
                        </div>

                        <div className="text-center text-sm text-gray-600">
                            <a
                                href="#"
                                className="text-blue-500 hover:text-blue-600 no-underline"
                                aria-label="Forgot your password?"
                            >
                                Forgot password?
                            </a>
                            <br />
                            <span className="mt-2 block">
                                Don't have an account? {' '}
                                <Link
                                    to="/register"
                                    className="text-blue-500 hover:text-blue-600 no-underline"
                                    aria-label="Create a new account"
                                >
                                    Register
                                </Link>
                            </span>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default Login;
