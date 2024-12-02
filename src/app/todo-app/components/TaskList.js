export default function TaskList({ tasks, toggleTask, deleteTask }) {
    return (
      <ul className="space-y-2">
        {tasks.map(task => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-2 rounded ${
              task.completed ? 'bg-green-100 line-through' : 'bg-gray-200'
            }`}
          >
            <span onClick={() => toggleTask(task.id)} className="cursor-pointer flex-grow text-black">
              {task.text} 
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 font-bold"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    );
  }
  