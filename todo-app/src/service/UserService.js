import axios from 'axios';
const API_BASE_URL = 'http://localhost:5200/api';

async function register(data) {
    try {
        const response = await axios.post(`${API_BASE_URL}/User/signup`, data);
        return response.data;
    } catch (error) {

        throw error;
    }
}


async function login(data) {
    try {
        const response = await axios.post(`${API_BASE_URL}/User/login`, data);
        return response.data;
    } catch (error) {

        throw error;
    }
}
const UserService = {
    register,
    login
}
export default UserService;

