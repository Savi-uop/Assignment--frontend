// src/pages/Departments.jsx
import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import DepartmentForm from '../components/Department/DepartmentForm';
import DepartmentList from '../components/Department/DepartmentList';

const Departments = () => {
    const [departments, setDepartments] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchDepartments();
    }, []);

    const fetchDepartments = async () => {
        // Fetch departments from API
        const response = await fetch('/api/departments');
        const data = await response.json();
        setDepartments(data);
    };

    const handleAddDepartment = async (department) => {
        // Add department to API
        await fetch('/api/departments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(department),
        });
        fetchDepartments();
    };

    const handleEditDepartment = (department) => {
        setSelectedDepartment(department);
        setIsEditing(true);
    };

    const handleUpdateDepartment = async (updatedDepartment) => {
        await fetch(`/api/departments/${selectedDepartment.departmentId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedDepartment),
        });
        setSelectedDepartment(null);
        setIsEditing(false);
        fetchDepartments();
    };

    const handleDeleteDepartment = async (id) => {
        await fetch(`/api/departments/${id}`, { method: 'DELETE' });
        fetchDepartments();
    };

    return (
        <Container>
            <h1>Departments</h1>
            {isEditing ? (
                <DepartmentForm onFormSubmit={handleUpdateDepartment} department={selectedDepartment} />
            ) : (
                <DepartmentForm onFormSubmit={handleAddDepartment} />
            )}
            <Button className="mt-3" variant="primary" onClick={() => setIsEditing(false)}>
                Add New Department
            </Button>
            <DepartmentList departments={departments} onEdit={handleEditDepartment} onDelete={handleDeleteDepartment} />
        </Container>
    );
};

export default Departments;
