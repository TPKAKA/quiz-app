import React from 'react';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import imageIllustration from '../../assets/image.png';
import profileAvatar from '../../assets/profile-avatar.png';

const About: React.FC = () => {
    return (
        <div className="bg-gray-100 text-gray-800 font-sans m-0 min-h-screen flex flex-col">
            <div className="max-w-6xl mx-auto bg-white shadow-lg flex-1">
                <Header />

                <main className="bg-gray-100">
                    <section className="max-w-6xl mx-auto my-8 px-4">
                        <div className="flex gap-8 flex-wrap">
                            <div className="flex-1 min-w-80 bg-white border-2 border-purple-500 rounded-xl p-8">
                                <h2 className="m-0 mb-2 text-gray-800 text-2xl">Quizzes</h2>
                                <p className="mb-4 text-gray-600">
                                    Quizzes là nền tảng trắc nghiệm trực tuyến giúp bạn học tập và giải trí với các chủ đề đa dạng.
                                    Chúng tôi tập trung vào trải nghiệm đơn giản, nhanh và đẹp.
                                </p>
                                <div className="my-2 font-semibold">Contact</div>
                                <div className="mb-2">
                                    <i className="fa fa-envelope text-blue-500 mr-2"></i>
                                    <a href="mailto:conglinh2021@gmail.com" className="text-blue-500 no-underline">
                                        conglinh2021@gmail.com
                                    </a>
                                </div>
                                <div className="mb-2">
                                    <i className="fa fa-phone text-blue-500 mr-2"></i>
                                    +84 944 551 356
                                </div>
                                <div className="mb-2">
                                    <i className="fa fa-map-marker-alt text-blue-500 mr-2"></i>
                                    123 Xuan Dinh, Bac Tu Liem, Ha Noi, Viet Nam
                                </div>
                            </div>
                            <div className="flex-1 min-w-80 bg-white border-2 border-purple-500 rounded-xl p-8 flex items-center justify-center">
                                <img
                                    src={imageIllustration}
                                    alt="Quiz"
                                    className="max-w-80 w-full h-auto"
                                />
                            </div>
                        </div>

                        <div className="bg-white border-2 border-purple-500 rounded-xl p-6 mt-8">
                            <h3 className="text-center m-0 mb-4 text-lg">Our Team</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center p-3">
                                    <img
                                        src={profileAvatar}
                                        alt="John Doe"
                                        className="w-30 h-30 rounded-full object-cover mb-3 mx-auto"
                                    />
                                    <div className="font-semibold">John Doe</div>
                                    <div className="text-gray-600 text-sm">Front End Developer</div>
                                </div>
                                <div className="text-center p-3">
                                    <img
                                        src={profileAvatar}
                                        alt="Jane Doe"
                                        className="w-30 h-30 rounded-full object-cover mb-3 mx-auto"
                                    />
                                    <div className="font-semibold">Jane Doe</div>
                                    <div className="text-gray-600 text-sm">Back End Developer</div>
                                </div>
                                <div className="text-center p-3">
                                    <img
                                        src={profileAvatar}
                                        alt="John Smith"
                                        className="w-30 h-30 rounded-full object-cover mb-3 mx-auto"
                                    />
                                    <div className="font-semibold">John Smith</div>
                                    <div className="text-gray-600 text-sm">Full Stack Developer</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default About;
