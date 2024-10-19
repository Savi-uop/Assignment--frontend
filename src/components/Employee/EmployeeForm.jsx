// src/components/Employee/EmployeeForm.jsx
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const EmployeeForm = ({ onFormSubmit, employee }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [salary, setSalary] = useState('');
    const [departmentId, setDepartmentId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (employee) {
            setFirstName(employee.firstName);
            setLastName(employee.lastName);
            setEmail(employee.email);
            setDateOfBirth(employee.dateOfBirth);
            setSalary(employee.salary);
            setDepartmentId(employee.departmentId);
        }
    }, [employee]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmployee = { firstName, lastName, email, dateOfBirth, salary, departmentId };
        onFormSubmit(newEmployee);
        navigate('/employees'); // Navigate to employees list after submit
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                    type="text" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                    required 
                />
            </Form.Group>
            <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                    type="text" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                    required 
                />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </Form.Group>
            <Form.Group controlId="formDateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control 
                    type="date" 
                    value={dateOfBirth} 
                    onChange={(e) => setDateOfBirth(e.target.value)} 
                    required 
                />
            </Form.Group>
            <Form.Group controlId="formSalary">
                <Form.Label>Salary</Form.Label>
                <Form.Control 
                    type="number" 
                    value={salary} 
                    onChange={(e) => setSalary(e.target.value)} 
                    required 
                />
            </Form.Group>
            <Form.Group controlId="formDepartmentId">
                <Form.Label>Department ID</Form.Label>
                <Form.Control 
                    type="number" 
                    value={departmentId} 
                    onChange={(e) => setDepartmentId(e.target.value)} 
                    required 
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default EmployeeForm;
