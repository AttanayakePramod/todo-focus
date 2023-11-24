import axios from 'axios';
const API_BASE_URL = 'http://localhost:5200/api';

async function register(todo) {
    try {
        const response = await axios.post(`${API_BASE_URL}/User/signup`, todo);
        return response.data;
    } catch (error) {
        console.error(`Error editing todo with ID ${todo.id}:`, error);
        throw error;
    }
}


async function login(todo) {
    try {
        const response = await axios.post(`${API_BASE_URL}/User/login`, todo);
        return response.data;
    } catch (error) {
        console.error(`Error editing todo with ID ${todo.id}:`, error);
        throw error;
    }
}
const UserService = {
    register,
    login
}
export default UserService;

