import React from 'react';
import Header from '../../components/shared/Header';
import Menu from '../../components/shared/Menu';
import Footer from '../../components/shared/Footer';

const QuestionManagement: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header />
            <div className="flex flex-1">
                <Menu />
                <main className="flex-1 p-6">
                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-900">Question Management</h1>
                        <p className="mt-1 text-sm text-gray-600">Manage and organize quiz questions</p>
                    </div>

                    {/* Search Panel */}
                    <div className="bg-white rounded-lg shadow mb-6">
                        <div className="p-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Search Questions</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label htmlFor="q-name" className="block text-sm font-medium text-gray-700 mb-1">Question Name</label>
                                    <input type="text" id="q-name" placeholder="Enter question name to search..." className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="q-type" className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                                    <select id="q-type" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                        <option value="">Select Type</option>
                                        <option value="multiple">Multiple Choice</option>
                                        <option value="single">Single Choice</option>
                                        <option value="text">Text Answer</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="q-active" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                    <div className="flex items-center h-10">
                                        <input type="checkbox" id="q-active" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                        <label htmlFor="q-active" className="ml-2 text-sm text-gray-700">Active</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-6">
                                <button type="button" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200">
                                    <i className="fas fa-plus mr-2"></i>Create
                                </button>
                                <div className="flex space-x-3">
                                    <button type="reset" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200">
                                        <i className="fas fa-rotate-left mr-2"></i>Clear
                                    </button>
                                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
                                        <i className="fas fa-search mr-2"></i>Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Question List */}
                    <div className="bg-white rounded-lg shadow">
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
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {/* Example rows, replace with map from data */}
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">Who is the inventor of the airplane?</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">MultipleChoice</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Yes</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex space-x-2">
                                                <button className="text-indigo-600 hover:text-indigo-900" title="Edit">
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button className="text-red-600 hover:text-red-900" title="Delete">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* ...other rows... */}
                                </tbody>
                            </table>
                        </div>
                        {/* Pagination */}
                        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-700">Entries per page:</span>
                                <select className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>10</option>
                                    <option>20</option>
                                    <option>50</option>
                                </select>
                            </div>
                            <div className="flex items-center space-x-1">
                                <button className="px-2 py-1 text-gray-400 hover:text-gray-600" title="First page">
                                    <i className="fas fa-angle-double-left"></i>
                                </button>
                                <button className="px-2 py-1 text-gray-400 hover:text-gray-600" title="Previous page">
                                    <i className="fas fa-angle-left"></i>
                                </button>
                                <button className="px-3 py-1 bg-blue-600 text-white rounded-md">1</button>
                                <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-md">2</button>
                                <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-md">3</button>
                                <button className="px-2 py-1 text-gray-400 hover:text-gray-600" title="Next page">
                                    <i className="fas fa-angle-right"></i>
                                </button>
                                <button className="px-2 py-1 text-gray-400 hover:text-gray-600" title="Last page">
                                    <i className="fas fa-angle-double-right"></i>
                                </button>
                            </div>
                            <div className="text-sm text-gray-700">1-10 of 32</div>
                        </div>
                    </div>

                    {/* Add Question Form */}
                    <div className="bg-white rounded-lg shadow mt-6">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900">Add Question</h3>
                        </div>
                        <div className="p-6">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label htmlFor="add-question-content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                                        <textarea id="add-question-content" rows={3} placeholder="Enter question content..." className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                                    </div>
                                    <div>
                                        <label htmlFor="add-question-type" className="block text-sm font-medium text-gray-700 mb-1">Question Type</label>
                                        <select id="add-question-type" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                            <option value="">Select Question Type</option>
                                            <option value="multiple">Multiple Choice</option>
                                            <option value="single">Single Choice</option>
                                            <option value="text">Text Answer</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="add-question-active" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                        <div className="flex items-center h-10">
                                            <input type="checkbox" id="add-question-active" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                            <label htmlFor="add-question-active" className="ml-2 text-sm text-gray-700">Active</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                                    <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
                                        <i className="fas fa-plus mr-2"></i>Show Answers
                                    </button>
                                    <div className="flex space-x-3">
                                        <button type="button" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200">
                                            <i className="fas fa-times mr-2"></i>Cancel
                                        </button>
                                        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200">
                                            <i className="fas fa-save mr-2"></i>Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Answer List */}
                    <div className="bg-white rounded-lg shadow mt-6">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900">Answer List</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Is Correct</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {/* Example rows, replace with map from data */}
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">Wright brothers</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">True</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Yes</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex space-x-2">
                                                <button className="text-indigo-600 hover:text-indigo-900" title="Edit">
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button className="text-red-600 hover:text-red-900" title="Delete">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* ...other rows... */}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-6 py-4 border-t border-gray-200">
                            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200">
                                <i className="fas fa-plus mr-2"></i>Add
                            </button>
                        </div>
                    </div>

                    {/* Add Answer Form */}
                    <div className="bg-white rounded-lg shadow mt-6">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900">Add Answer</h3>
                        </div>
                        <div className="p-6">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="answer-description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                    <textarea id="answer-description" rows={3} placeholder="Enter answer description..." className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="is-correct" className="block text-sm font-medium text-gray-700 mb-1">Is Correct?</label>
                                        <div className="flex items-center h-10">
                                            <input type="checkbox" id="is-correct" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                            <label htmlFor="is-correct" className="ml-2 text-sm text-gray-700">Correct Answer</label>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="answer-status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                        <div className="flex items-center h-10">
                                            <input type="checkbox" id="answer-status" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                            <label htmlFor="answer-status" className="ml-2 text-sm text-gray-700">Active</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                                    <button type="button" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200">Cancel</button>
                                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">Save Answer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Footer />
                </main>
            </div>
        </div>
    );
};

export default QuestionManagement;
