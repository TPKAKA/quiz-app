import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu: React.FC = () => (
    <aside className="w-64 bg-white shadow-sm h-screen sticky top-0">
        <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Menu</h2>
            <nav className="space-y-1">
                <NavLink to="/admin/quiz-management" className={({ isActive }) => isActive ? "flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md" : "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"}>
                    <i className="fas fa-clipboard-list mr-3 text-gray-400"></i>
                    Quiz Management
                </NavLink>
                <NavLink to="/admin/question-management" className={({ isActive }) => isActive ? "flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md" : "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"}>
                    <i className="fas fa-question-circle mr-3 text-blue-600"></i>
                    Question Management
                </NavLink>
                <NavLink to="/admin/user-management" className={({ isActive }) => isActive ? "flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md" : "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"}>
                    <i className="fas fa-user mr-3 text-gray-400"></i>
                    User Management
                </NavLink>
                <NavLink to="/admin/role-management" className={({ isActive }) => isActive ? "flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md" : "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"}>
                    <i className="fas fa-users-cog mr-3 text-gray-400"></i>
                    Role Management
                </NavLink>
            </nav>
        </div>
    </aside>
);

export default Menu;
