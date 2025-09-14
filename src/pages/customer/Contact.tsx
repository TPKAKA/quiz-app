import React from 'react';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';

const Contact: React.FC = () => {
    return (
        <div className="bg-gray-100 text-gray-800 font-sans m-0 min-h-screen flex flex-col">
            <div className="max-w-6xl mx-auto bg-white shadow-lg flex-1">
                <Header />

                <main className="bg-gray-100">
                    <section className="max-w-6xl mx-auto py-8 px-4">
                        <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">CONTACT</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Contact Form */}
                            <form className="bg-white p-8 rounded-lg shadow-sm">
                                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Feedback</h2>
                                <p className="text-gray-600 mb-6">
                                    Please fill out the form below to send us your feedback. We will get back to you as soon as possible.
                                </p>

                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Enter your message"
                                        required
                                        rows={4}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-medium transition-colors duration-300 hover:bg-blue-600"
                                >
                                    Send
                                </button>
                            </form>

                            {/* Contact Information */}
                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Information</h3>
                                <p className="text-gray-600 mb-6">
                                    We are always here to help you. You can contact us through the following ways.
                                </p>

                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-gray-700">
                                        <i className="fa fa-envelope text-blue-500 mr-3 w-5"></i>
                                        <span>conglinh2021@gmail.com</span>
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fa fa-phone text-blue-500 mr-3 w-5"></i>
                                        <span>+84 944 551 356</span>
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <i className="fa fa-map-marker-alt text-blue-500 mr-3 w-5"></i>
                                        <span>123 Xuan Dinh, Bac Tu Liem, Ha Noi, Viet Nam</span>
                                    </li>
                                </ul>

                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        title="TikTok"
                                        className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                                    >
                                        <i className="fab fa-tiktok"></i>
                                    </a>
                                    <a
                                        href="#"
                                        title="Facebook"
                                        className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                                    >
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                    <a
                                        href="#"
                                        title="YouTube"
                                        className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                                    >
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a
                                        href="#"
                                        title="LinkedIn"
                                        className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                                    >
                                        <i className="fab fa-linkedin"></i>
                                    </a>
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

export default Contact;
