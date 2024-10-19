// src/components/Employee/EmployeeList.jsx
import React from 'react';
import { Table, Button } from 'react-bootstrap';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th>Salary</th>
                    <th>Department ID</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.employeeId}>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>{employee.dateOfBirth}</td>
                        <td>{employee.salary}</td>
                        <td>{employee.departmentId}</td>
                        <td>
                            <Button variant="warning" onClick={() => onEdit(employee)}>Edit</Button>
                            <Button variant="danger" onClick={() => onDelete(employee.employeeId)}>Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default EmployeeList;
