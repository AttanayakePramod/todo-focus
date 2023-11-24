import React from 'react'
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import TodoService from '../service/TodoService';
import { Modal } from 'antd';
const options = ["TODO", "In Progress", "Done", "High Priority", "Low", "Medium"];
const Item = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskSelected, setTaskSeleted] = useState();
    const deleteTask = () => {
        TodoService.deleteTodo(props.id);
    }
    const showModal = () => {
        setIsModalOpen(true);
        setTaskSeleted(props)
    };

    const handleOk = () => {
        setIsModalOpen(false);
        console.log(taskSelected)
        TodoService.editTodo(taskSelected).then((res) => {
            if (res.data) {
                loadData();
            }
        })
        setTaskSeleted(null)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setTaskSeleted(null)
    };
    return (
        <><div className="bg-white  flex  items-center h-[100px] rounded-lg w-[400px] p-3 mt-5">
            <div className="flex justify-between w-[100%]">
                <div>
                    <h5 className="font-sans font-semibold text-lg">{props.name}</h5>
                    <p className="font-sans font-semibold text-lg">{props.description}</p>
                </div>

                {/* <button className="bg-red-500 text-white font-medium px-2 py-1 rounded-xl hover:bg-red-900">Remove</button> */}
                <HiOutlinePencilAlt className="mx-1 w-5 h-5 cursor-pointer" onClick={showModal} />
                <HiOutlineTrash className="mx-1 w-5 h-5 cursor-pointer" onClick={deleteTask} />
            </div>
        </div>
        
        
        
        <Modal title={`Edit ${props.title}`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <form className="flex">
                    <div>
                        <input
                            type="text"
                            id="title"
                            className="rounded p-1 m-1  text-gray-300"
                            name="title"
                            value={taskSelected?.title}
                            onChange={handleUpdateChange}
                            required
                        />
                         <input
                            type="text"
                            id="description"
                            className="rounded p-1 m-1  text-gray-300"
                            name="description"
                            value={taskSelected?.description}
                            onChange={handleUpdateChange}
                            required
                        />
                    </div>

                    
                    <div>
                        <select id="select" value={taskSelected?.status} onChange={handleUpdateChange} className="rounded-md p-1 text-gray-300">
                            {options.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                </form>
            </Modal>
        
        </>
    )
}

export default Item