import React, { useEffect, useState } from 'react';
import TodoService from '../service/TodoService';
import { generateRandomId } from '../util/Utils';

const initialState = {
  id: generateRandomId(),
  title: '',
  description: '',
  status: ''
};

const Home = () => {
  const [toDoItem, setToDoItem] = useState(initialState);
  const [toDoItems, setToDoItems] = useState([]);
  const handleChange = (e) => {
    setToDoItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddTask = async(e) => {
    e.preventDefault();
    if (toDoItem.title !== "") {
     await TodoService.addTodo(toDoItem)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });

      setToDoItem(initialState);
      loadData();
    }
  };

  useEffect(() => {
    loadData();

  }, [])
  const loadData = async() => {
    await TodoService.getTodos()
      .then((res) => {
        setToDoItems(res);
      })
      .catch((error) => {
        console.error(error);
      });

  }
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

    
      <List items={toDoItems} loadData={loadData}/>
    </div>
  )
}

export default Home