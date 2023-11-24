import axios from 'axios';



const API_BASE_URL = 'http://localhost:5200/api';


async function getTodos() {
    try {

        const response = await axios({
            method: 'get',
            url: `${API_BASE_URL}/todo`,
            headers: {
                'Content-Type': 'application/json',
            }
        });


        return response.data;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
}

async function getTodoById(id) {
    try {
        const response = await axios.get(`${API_BASE_URL}/todo/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching todo with ID ${id}:`, error);
        throw error;
    }
}

async function deleteTodo(id) {
    try {
        const response = await axios.delete(`${API_BASE_URL}/todo`, {
            params: { id },
        });
        return response.data;
    } catch (error) {
        console.error(`Error deleting todo with ID ${id}:`, error);
        throw error;
    }
}

async function addTodo(todo) {
    try {
        const response = await axios.post(`${API_BASE_URL}/todo/add`, todo);
        return response.data;
    } catch (error) {
        console.error('Error adding todo:', error);
        throw error;
    }
}

async function editTodo(todo) {
    try {
        const response = await axios.put(`${API_BASE_URL}/todo/edit`, todo);
        return response.data;
    } catch (error) {
        console.error(`Error editing todo with ID ${todo.id}:`, error);
        throw error;
    }
}

const TodoService = {
    addTodo,
    getTodos,
    getTodoById,
    deleteTodo,
    editTodo
}
export default TodoService;

