
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionManagement from './pages/admin/Question-Management';
import QuizManagement from './pages/admin/Quiz-Management';
import RoleManagement from './pages/admin/Role-Management';
import UserManagement from './pages/admin/User-Management';
import Home from './pages/customer/Home';
import About from './pages/customer/About';
import Contact from './pages/customer/Contact';
import Quizzes from './pages/customer/Quizzes';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Error403 from './pages/error/403';
import Error404 from './pages/error/404';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/403" element={<Error403 />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/admin/question-management" element={<QuestionManagement />} />
        <Route path="/admin/quiz-management" element={<QuizManagement />} />
        <Route path="/admin/role-management" element={<RoleManagement />} />
        <Route path="/admin/user-management" element={<UserManagement />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
