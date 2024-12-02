import { useState } from 'react';

export default function TaskInput({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 mb-4">
      <input
        type="text"
        placeholder="Añadir una tarea..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-grow p-2 border rounded text-gray-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Añadir
      </button>
    </form>
  );
}
