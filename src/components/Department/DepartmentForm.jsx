// src/components/Department/DepartmentForm.jsx
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const DepartmentForm = ({ onFormSubmit, department }) => {
    const [departmentCode, setDepartmentCode] = useState('');
    const [departmentName, setDepartmentName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (department) {
            setDepartmentCode(department.departmentCode);
            setDepartmentName(department.departmentName);
        }
    }, [department]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newDepartment = { departmentCode, departmentName };
        onFormSubmit(newDepartment);
        navigate('/departments'); // Navigate to departments list after submit
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formDepartmentCode">
                <Form.Label>Department Code</Form.Label>
                <Form.Control 
                    type="text" 
                    value={departmentCode} 
                    onChange={(e) => setDepartmentCode(e.target.value)} 
                    required 
                />
            </Form.Group>
            <Form.Group controlId="formDepartmentName">
                <Form.Label>Department Name</Form.Label>
                <Form.Control 
                    type="text" 
                    value={departmentName} 
                    onChange={(e) => setDepartmentName(e.target.value)} 
                    required 
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default DepartmentForm;
