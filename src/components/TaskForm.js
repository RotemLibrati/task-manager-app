import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
    const [title, setTitle] = useState("");
    const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);
    const handleChange = e => {
        setTitle(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        if(!editItem){
            addTask(title);
        setTitle("");
        } else {
            editTask(title, editItem.id);
        }
        
    };

    useEffect(() => {
        if(editItem !== null){
            setTitle(editItem.title);
            console.log(editItem);
        } else {
            setTitle("");
        }
    }, [editItem]);
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text"
            className="task-input"
            placeholder="Add Task" 
            value={title}
            required
            onChange={handleChange}
            />
            <div className="buttons">
            <button type="submit" className="btn add-task-btn">
                {editItem ? 'Edit Task' : 'Add Task'}
            </button>
            <button onClick={clearList} className="btn clear-btn">
                Clear
            </button>
            </div>
        </form>
    );
};

export default TaskForm
