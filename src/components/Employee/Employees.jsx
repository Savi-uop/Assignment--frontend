// src/pages/Employees.jsx
import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import EmployeeForm from '../components/Employee/EmployeeForm';
import EmployeeList from '../components/Employee/EmployeeList';

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const response = await fetch('/api/employees');
        const data = await response.json();
        setEmployees(data);
    };

    const handleAddEmployee = async (employee) => {
        await fetch('/api/employees', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employee),
        });
        fetchEmployees();
    };

    const handleEditEmployee = (employee) => {
        setSelectedEmployee(employee);
        setIsEditing(true);
    };

    const handleUpdateEmployee = async (updatedEmployee) => {
        await fetch(`/api/employees/${selectedEmployee.employeeId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedEmployee),
        });
        setSelectedEmployee(null);
        setIsEditing(false);
        fetchEmployees();
    };

    const handleDeleteEmployee = async (id) => {
        await fetch(`/api/employees/${id}`, { method: 'DELETE' });
        fetchEmployees();
    };

    return (
        <Container>
            <h1>Employees</h1>
            {isEditing ? (
                <EmployeeForm onFormSubmit={handleUpdateEmployee} employee={selectedEmployee} />
            ) : (
                <EmployeeForm onFormSubmit={handleAddEmployee} />
            )}
            <Button className="mt-3" variant="primary" onClick={() => setIsEditing(false)}>
                Add New Employee
            </Button>
            <EmployeeList employees={employees} onEdit={handleEditEmployee} onDelete={handleDeleteEmployee} />
        </Container>
    );
};

export default Employees;
