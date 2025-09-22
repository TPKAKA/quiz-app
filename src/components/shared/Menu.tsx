import React from 'react';
import { NavLink } from 'react-router-dom';
import pathImg from '../../assets/path.png';
import questionImg from '../../assets/question-solid.svg.png';
import userManagementImg from '../../assets/UserManagement.png';
import roleManagementImg from '../../assets/RoleManagement.png';

const Menu: React.FC = () => (
    <aside className="w-64 bg-white shadow-sm h-screen sticky top-0">
        <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Menu</h2>
            <nav className="space-y-1">
                <NavLink to="/admin/quiz-management" className={({ isActive }) => isActive ? "flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md" : "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"}>
                    <img src={pathImg} alt="Quiz Management" className="w-5 h-5 mr-3" />
                    Quiz Management
                </NavLink>
                <NavLink to="/admin/question-management" className={({ isActive }) => isActive ? "flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md" : "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"}>
                    <img src={questionImg} alt="Question Management" className="w-5 h-5 mr-3" />
                    Question Management
                </NavLink>
                <NavLink to="/admin/user-management" className={({ isActive }) => isActive ? "flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md" : "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"}>
                    <img src={userManagementImg} alt="User Management" className="w-5 h-5 mr-3" />
                    User Management
                </NavLink>
                <NavLink to="/admin/role-management" className={({ isActive }) => isActive ? "flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md" : "flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"}>
                    <img src={roleManagementImg} alt="Role Management" className="w-5 h-5 mr-3" />
                    Role Management
                </NavLink>
            </nav>
        </div>
    </aside>
);

export default Menu;
