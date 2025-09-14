import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/back_ground.png';

const Error403: React.FC = () => {
    return (
        <div
            className="min-h-screen bg-gray-100 flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0"></div>
            <div className="text-center relative z-10">
                <div className="bg-white rounded-lg shadow-lg p-12 max-w-md mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">403 - Forbidden</h1>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        You don't have permission to access this page.
                    </p>
                    <Link
                        to="/home"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 no-underline"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error403;
