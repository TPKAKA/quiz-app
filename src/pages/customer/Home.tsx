import React from 'react';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import imageIllustration from '../../assets/image.png';
import capitalsImage from '../../assets/capitals..png';
import capitalsNo1Image from '../../assets/capitalsno1.png';
import capitalsNo2Image from '../../assets/capitalsno2.png';

const Home: React.FC = () => {
    return (
        <div className="bg-gray-100 text-gray-800 leading-relaxed min-h-screen flex flex-col">
            <div className="max-w-6xl mx-auto bg-white shadow-lg flex-1">
                <Header />

                {/* Main Content */}
                <div className="px-5">
                    {/* Hero Section */}
                    <div className="flex items-center max-w-5xl mx-auto my-10 px-5 border border-gray-300 rounded-lg overflow-hidden">
                        <div className="flex-1 py-10 px-10">
                            <h1 className="text-3xl font-bold mb-3.5 text-gray-800">Welcome to Quiz App</h1>
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestiae turpis magna,
                                nunc sapien vehicula sapien, nec scelerisque nunc tunc hac lectus. Nullam nec volutpatum turpis.
                                Nullam nec scelerisque nunc.
                            </p>
                            <a
                                href="#"
                                className="inline-block bg-blue-500 text-white py-2.5 px-6 rounded-md no-underline font-medium text-sm transition-colors duration-300 hover:bg-blue-600"
                            >
                                Take a Quiz
                            </a>
                        </div>
                        <div className="flex-1 flex justify-center items-center">
                            <img
                                src={imageIllustration}
                                alt="Quiz App Illustration"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Quizzes Section */}
                    <h2 className="text-center text-2xl font-bold my-10 text-gray-800">QUIZZES</h2>

                    <div className="flex flex-wrap justify-between gap-5 px-5 max-w-5xl mx-auto">
                        {/* Quiz Card 1 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex-1 min-w-80 max-w-sm">
                            <img
                                src={capitalsImage}
                                alt="Quiz 1"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-lg font-semibold mb-2.5 text-gray-800">Capitals of Country</h3>
                                <p className="text-gray-600 mb-4 text-sm">Test your knowledge of country capitals</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">15m</span>
                                    <a
                                        href="#"
                                        className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm font-medium no-underline transition-colors duration-300 hover:bg-blue-600"
                                    >
                                        Start
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Quiz Card 2 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex-1 min-w-80 max-w-sm">
                            <img
                                src={capitalsNo1Image}
                                alt="Quiz 2"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-lg font-semibold mb-2.5 text-gray-800">Capitals of Country</h3>
                                <p className="text-gray-600 mb-4 text-sm">Test your knowledge of country capitals</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">15m</span>
                                    <a
                                        href="#"
                                        className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm font-medium no-underline transition-colors duration-300 hover:bg-blue-600"
                                    >
                                        Start
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Quiz Card 3 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex-1 min-w-80 max-w-sm">
                            <img
                                src={capitalsNo2Image}
                                alt="Quiz 3"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-lg font-semibold mb-2.5 text-gray-800">Capitals of Country</h3>
                                <p className="text-gray-600 mb-4 text-sm">Test your knowledge of country capitals</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">15m</span>
                                    <a
                                        href="#"
                                        className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm font-medium no-underline transition-colors duration-300 hover:bg-blue-600"
                                    >
                                        Start
                                    </a>
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

export default Home;
