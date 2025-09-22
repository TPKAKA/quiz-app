import React from 'react';
import Header from '../../components/shared/Header';
import Menu from '../../components/shared/Menu';
import Footer from '../../components/shared/Footer';

const QuizManagement: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header />
            <div className="flex flex-1">
                <Menu />
                <main className="flex-1 p-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Search Panel */}
                        <div className="bg-white rounded-lg shadow mb-6">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900">Quiz Management</h3>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                                    <div>
                                        <label htmlFor="quiz-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input type="text" id="quiz-name" placeholder="Enter role name to search" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="active" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                            <label htmlFor="active" className="ml-2 text-sm text-gray-700">Active</label>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="button" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                                            <i className="fa fa-plus mr-1"></i> Create
                                        </button>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button type="reset" className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-200">
                                            <i className="fa fa-rotate-left mr-1"></i> Clear
                                        </button>
                                        <button type="submit" className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                                            <i className="fa fa-search mr-1"></i> Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quiz List */}
                        <div className="bg-white rounded-lg shadow mb-6">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900">Quiz List</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Questions</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <img src="../../assets/quiz-thumb1.jpg" className="w-12 h-12 rounded object-cover" alt="Quiz" />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Capitals of Country</td>
                                            <td className="px-6 py-4 text-sm text-gray-900">Test your knowledge of country capitals</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">15m</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">7</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Yes</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                                <button className="text-blue-600 hover:text-blue-800"><i className="fas fa-pen-to-square"></i></button>
                                                <button className="text-red-600 hover:text-red-800"><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <img src="../../assets/quiz-thumb2.jpg" className="w-12 h-12 rounded object-cover" alt="Quiz" />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Inventions and Inventors</td>
                                            <td className="px-6 py-4 text-sm text-gray-900">Test your knowledge of inventors and their inventions</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">20m</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Yes</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                                <button className="text-blue-600 hover:text-blue-800"><i className="fas fa-pen-to-square"></i></button>
                                                <button className="text-red-600 hover:text-red-800"><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm text-gray-700">Items per page:</span>
                                        <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                                            <option>10</option>
                                            <option>20</option>
                                            <option>50</option>
                                        </select>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <button className="px-2 py-1 text-gray-500 hover:text-gray-700"><i className="fas fa-angles-left"></i></button>
                                        <button className="px-2 py-1 text-gray-500 hover:text-gray-700"><i className="fas fa-angle-left"></i></button>
                                        <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
                                        <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded">2</button>
                                        <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded">3</button>
                                        <button className="px-2 py-1 text-gray-500 hover:text-gray-700"><i className="fas fa-angle-right"></i></button>
                                        <button className="px-2 py-1 text-gray-500 hover:text-gray-700"><i className="fas fa-angles-right"></i></button>
                                    </div>
                                    <div className="text-sm text-gray-700">1-10 of 32</div>
                                </div>
                            </div>
                        </div>

                        {/* Add Quiz form */}
                        <div className="bg-white rounded-lg shadow mb-6">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900">Add Quiz</h3>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div>
                                        <label htmlFor="quiz-title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                        <input id="quiz-title" type="text" placeholder="Enter quiz title" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="quiz-desc" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                        <textarea id="quiz-desc" placeholder="Enter quiz description" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 resize-vertical"></textarea>
                                    </div>
                                    <div>
                                        <label htmlFor="quiz-duration" className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                                        <input id="quiz-duration" type="text" placeholder="Enter quiz duration" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="quiz-thumb" className="block text-sm font-medium text-gray-700 mb-1">Thumbnail URL</label>
                                        <input id="quiz-thumb" type="text" placeholder="Enter quiz thumbnail URL" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                        <div className="flex items-center">
                                            <input id="quiz-status" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                            <label htmlFor="quiz-status" className="ml-2 text-sm text-gray-700">Active</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-between items-center">
                                    <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200">
                                        <i className="fa fa-plus mr-1"></i> Show Questions
                                    </button>
                                    <div className="flex space-x-3">
                                        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-200">
                                            <i className="fa fa-rotate-left mr-1"></i> Cancel
                                        </button>
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                                            <i className="fa fa-save mr-1"></i> Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Question List for Quiz */}
                        <div className="bg-white rounded-lg shadow mb-6">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900">Question List</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Answers</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 text-sm text-gray-900">Who is the inventor of the airplane?</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">MultipleChoice</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Yes</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button className="text-red-600 hover:text-red-800"><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm text-gray-900">Who is the inventor of the World Wide Web?</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">MultipleChoice</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Yes</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button className="text-red-600 hover:text-red-800"><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                                    <i className="fa fa-plus mr-1"></i> Add
                                </button>
                            </div>
                        </div>

                        {/* Add Question section */}
                        <div className="bg-white rounded-lg shadow mb-6">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900">Add Question to Quiz</h3>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">Question</label>
                                        <select id="question" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                                            <option>Select Question Type</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="order" className="block text-sm font-medium text-gray-700 mb-1">Order</label>
                                        <input id="order" type="text" placeholder="Enter order of question in quiz" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-end space-x-3">
                                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-200">Cancel</button>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                                        <i className="fa fa-save mr-1"></i> Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </main>
            </div>

        </div>
    );
};

export default QuizManagement;
