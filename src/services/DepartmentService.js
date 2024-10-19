import axios from 'axios';

const API_URL = 'https://your-api-url.com/api/departments'; // Adjust the API URL as needed

const DepartmentService = {
    getDepartments: async () => {
        const response = await axios.get(API_URL);
        return response.data;
    },
    addDepartment: async (department) => {
        await axios.post(API_URL, department);
    },
    updateDepartment: async (department) => {
        await axios.put(`${API_URL}/${department.departmentId}`, department);
    },
    deleteDepartment: async (id) => {
        await axios.delete(`${API_URL}/${id}`);
    },
};

export default DepartmentService;
