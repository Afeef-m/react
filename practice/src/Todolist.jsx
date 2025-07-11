import React from "react";
import { useState } from "react";


function Todolist(){
    let [task, setTask]=useState('')
    let [taskList,setTaskList]=useState([])
    const addTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const newList = taskList.filter((_, i) => i !== index);
    setTaskList(newList);
  };

  return (
    <div className="container mt-4">
      {/* NavBar (Just UI) */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <a className="navbar-brand" href="#">My TodoList</a>
      </nav>

      {/* Input and Add Button */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-success" onClick={addTask}>Add Task</button>
      </div>

      {/* Task List */}
      <ul className="list-group">
        {taskList.map((item, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {item}
            <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    )
}
export default Todolist;