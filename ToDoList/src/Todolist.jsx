import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            📝 React Todo App
          </a>
        </div>
      </nav>
      <div className="container mt-5">
        {/* Input and Add Button */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="btn btn-primary"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>

        {/* Task List */}
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {task}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;
