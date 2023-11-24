import React, { useState } from 'react';
import TodoService from '../service/TodoService';
import { generateRandomId } from '../util/Utils';

const initialState = {
  id:generateRandomId(),
  title: '',
  description: '',
  status:''
};

const Home = () => {
    const [toDoItem, setToDoItem] = useState(initialState);

    const handleChange = (e) => {
      setToDoItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleAddTask = (e) => {
      e.preventDefault();
      if (toDoItem.title.trim() !== "") {
        
  
        // Assuming TodoService.addTodo is an API call to add a todo
        TodoService.addTodo(toDoItem)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.error(error);
          });
  
        setToDoItem(initialState); // Reset the form state
      }
    };
  return (
    <div>
      <h2 className="bg-purple-600 text-white text-center max-w-2xl text-5xl shadow-xl font-mono-medium m-auto mt-5 mb-5 p-5 border-gray-400 rounded-lg">Todo List</h2>

      <div className="flex justify-center">
        <form onSubmit={handleAddTask}>
          <div className="space-x-5">
            <input
              className="rounded p-1 m-1"
              type="text"
              placeholder="Add Task"
              value={toDoItem.title}
              name="title"
              onChange={handleChange}
            />
            <input
              className="rounded p-1 m-1"
              type="text"
              placeholder="Add Description"
              value={toDoItem.description}
              name="description"
              onChange={handleChange}
            />

            <select
              className="rounded p-1 m-1"
              value={toDoItem.status}
              name="status"
              onChange={handleChange}
            >
              <option value="todo">Todo</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>


            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-900 rounded-md text-white px-5 text-xl py-1"
            >
              Add
            </button>
          </div>
        </form>
      </div>

      {/* Assuming List component is used to display the added tasks */}
      {/* <List items={toDoItem} /> */}
    </div>
  )
}

export default Home