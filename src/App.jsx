import { useState } from 'react'
import "./index.css";

function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if(newTask.trim() === "") return;
    const task = {
      text: newTask,
      completed:false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
    
    console.log(newTask);
    console.log(task);
    console.log(tasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_,i) => i !== index);
    setTasks(updatedTasks);
  };

  //update

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Task Manager</h1>
      <input className="flex-1 p-2 border rounded" type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder='Enter a new task...' />
      <button className="px-4 py-2 bg-blue-500 text-white rounded ml-2" onClick={addTask}>Add Task</button>
      <div>
        {tasks.map((task, index) => (
          <div key={index} className="flex justify-between items-center p-3 mb-2 bg-gray-100 rounded">
            <span className={`flex-1 cursor-pointer" ${task.completed ? "line-through text-gray-400" : ""}`} onClick={() => toggleTask(index)}>{task.text}</span>
            <button className='ml-2 px-3 py-1 bg-red-500 text-white rounded' onClick={() => deleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>

  );
}

export default App
