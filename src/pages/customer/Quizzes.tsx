import React from 'react';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import capitalsImage from '../../assets/capitals..png';
import capitalsNo1Image from '../../assets/capitalsno1.png';
import capitalsNo2Image from '../../assets/capitalsno2.png';

const Quizzes: React.FC = () => {
    return (
        <div className="bg-gray-100 text-gray-800 leading-relaxed min-h-screen flex flex-col">
            <div className="max-w-6xl mx-auto bg-white shadow-lg flex-1">
                <Header />

                {/* Border under header */}
                <div className="h-px bg-gray-200"></div>

                {/* Main Content */}
                <div className="px-5 py-8">
                    {/* Take a Quiz Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Take a Quiz</h2>
                        <div className="flex justify-center items-center gap-4 max-w-md mx-auto">
                            <input
                                type="text"
                                placeholder="Enter quiz code to take a quiz"
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="bg-blue-500 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300 hover:bg-blue-600">
                                Take Quiz
                            </button>
                        </div>
                    </div>

                    {/* Quizzes Section */}
                    <div>
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-800">QUIZZES</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {/* Quiz Card 1 */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                                <div
                                    className="h-48 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${capitalsImage})` }}
                                ></div>
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold mb-2.5 text-gray-800">Capitals of Country</h3>
                                    <p className="text-gray-600 mb-4 text-sm">Test your knowledge of country capitals</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">15m</span>
                                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-blue-600">
                                            Start
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Quiz Card 2 */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                                <div
                                    className="h-48 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${capitalsNo1Image})` }}
                                ></div>
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold mb-2.5 text-gray-800">Capitals of Country</h3>
                                    <p className="text-gray-600 mb-4 text-sm">Test your knowledge of country capitals</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">15m</span>
                                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-blue-600">
                                            Start
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Quiz Card 3 */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                                <div
                                    className="h-48 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${capitalsNo2Image})` }}
                                ></div>
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold mb-2.5 text-gray-800">Capitals of Country</h3>
                                    <p className="text-gray-600 mb-4 text-sm">Test your knowledge of country capitals</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">15m</span>
                                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-blue-600">
                                            Start
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Quizzes;
