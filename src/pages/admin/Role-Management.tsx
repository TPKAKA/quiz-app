import React from 'react';
import Header from '../../components/shared/Header';
import Menu from '../../components/shared/Menu';
import Footer from '../../components/shared/Footer';

const RoleManagement: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header />
            <div className="flex flex-1">
                <Menu />
                <main className="flex-1 p-6">
                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-900">Role Management</h1>
                        <p className="mt-1 text-sm text-gray-600">Manage user roles and permissions</p>
                    </div>

                    {/* Search Panel */}
                    <div className="bg-white rounded-lg shadow mb-6">
                        <div className="p-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Role Management</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="role-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input type="text" id="role-name" placeholder="Enter role name to search..." className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="role-active" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                    <div className="flex items-center h-10">
                                        <input type="checkbox" id="role-active" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                        <label htmlFor="role-active" className="ml-2 text-sm text-gray-700">Active</label>
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

                    {/* Role List */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900">Role List</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">Admin</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">Full Access</div>
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
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">Editor</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">Editable</div>
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
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">User</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">Customer</div>
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default RoleManagement;
