import React, { useState } from 'react';

const ToDo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (
        t.id === id ? { ...t, done: !t.done } : t
      ))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='bg-gray-300 shadow-lg rounded-xl p-6 w-full max-w-md'>
        <h1 className='font-bold text-2xl mb-6 text-center text-indigo-600'>
          To-Do List
        </h1>

        <div className='flex mb-4'>
          <input
            type='text'
            placeholder='Enter the task!'
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className='flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400'
          />

          <button
            onClick={addTask}
            className='px-4 py-2 bg-indigo-500 text-white rounded-r hover:bg-indigo-600 transition'
          >
            Add Task
          </button>
        </div>

        <ul>
          {tasks.map((t, index) => (
            <li
              key={t.id}
              className='flex justify-between items-center mb-2 min-w-0'
            >
              <span
                onClick={() => toggleTask(t.id)}
                className="text-black font-semibold"
              >
                {index + 1}
              </span>

              <span
                onClick={() => toggleTask(t.id)}
                className={`cursor-pointer flex-1 min-w-0 px-2 break-words ${t.done ? "line-through text-gray-400" : ""}`}
              >
                {t.text}
              </span>

              <button
                onClick={() => deleteTask(t.id)}
                className='text-red-500 hover:text-red-700'
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default ToDo;
