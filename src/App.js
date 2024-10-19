// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Departments from './pages/Departments';
import Employees from './pages/Employees';
import DepartmentForm from './components/Department/DepartmentForm';
import EmployeeForm from './components/Employee/EmployeeForm';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/departments" element={<Departments />} />
                    <Route path="/departments/add" element={<DepartmentForm onFormSubmit={() => {}} />} />
                    <Route path="/departments/edit/:id" element={<DepartmentForm onFormSubmit={() => {}} />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/employees/add" element={<EmployeeForm onFormSubmit={() => {}} />} />
                    <Route path="/employees/edit/:id" element={<EmployeeForm onFormSubmit={() => {}} />} />
                </Routes>
            </div>
        </Router>
    );
};

// export default App;
