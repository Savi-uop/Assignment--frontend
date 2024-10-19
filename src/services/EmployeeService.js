import axios from 'axios';

const BASE_URL = 'https://localhost:5001/api/employees'; // Change to your backend API URL

const EmployeeService = {
    getEmployees: async () => {
        const response = await axios.get(BASE_URL);
        return response.data;
    },
    addEmployee: async (employee) => {
        const response = await axios.post(BASE_URL, employee);
        return response.data;
    },
    updateEmployee: async (id, employee) => {
        const response = await axios.put(`${BASE_URL}/${id}`, employee);
        return response.data;
    },
    deleteEmployee: async (id) => {
        await axios.delete(`${BASE_URL}/${id}`);
    },
};

export default EmployeeService;
