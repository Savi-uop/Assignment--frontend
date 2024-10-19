// src/components/Department/DepartmentList.jsx
import React from 'react';
import { Table, Button } from 'react-bootstrap';

const DepartmentList = ({ departments, onEdit, onDelete }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Department Code</th>
                    <th>Department Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {departments.map((department) => (
                    <tr key={department.departmentId}>
                        <td>{department.departmentCode}</td>
                        <td>{department.departmentName}</td>
                        <td>
                            <Button variant="warning" onClick={() => onEdit(department)}>Edit</Button>
                            <Button variant="danger" onClick={() => onDelete(department.departmentId)}>Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default DepartmentList;
