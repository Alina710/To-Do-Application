'use client';

import { useState } from 'react';

    export default function Home() {
 
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]); 

  
        const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]); 
      setTask(''); 
       }
  }

  
  const deleteTask = (taskToDelete: string) => {
        setTasks(tasks.filter(t => t !== taskToDelete));
  }

  return (
         <div className="max-w-lg mx-auto p-6 bg-white shadow-xl rounded-lg mt-8">
  <h1 className="text-3xl font-semibold text-center text-green-600 mb-6">To-Do App</h1>

      
      <div className="flex mb-4">
  <input
          type="text"
               value={task}
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Enter a new task"
         
          className="w-full p-3 border-2 border-green-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={addTask}
          className="p-3 bg-green-600 text-white rounded-r-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Add Task
        </button>
      </div>

      
      <ul className="space-y-3">
   {tasks.map((taskItem, index) => (
          <li key={index} className="flex justify-between items-center p-3 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200">
            <span className="text-lg">{taskItem}</span>
  <button
              onClick={() => deleteTask(taskItem)}
      className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Delete
     </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
