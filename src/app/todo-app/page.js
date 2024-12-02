'use client';
import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-blue-400">To-Do App</h1>
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
}
