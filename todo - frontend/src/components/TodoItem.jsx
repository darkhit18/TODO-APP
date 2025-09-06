function TodoItem({ id, todoName, todoDate, completed, onDeleteClick, onToggleComplete }) {
  return (
    <div
      className={`flex items-center justify-between p-5 mb-4 rounded-2xl shadow-md border transition-all duration-300 ${
        completed
          ? "bg-gray-100 border-gray-200 opacity-70"
          : "bg-gradient-to-r from-blue-50 via-white to-pink-50 border-gray-100"
      }`}
    >
      {/* Left Section */}
      <div className="flex-1">
        <h3
          className={`text-xl font-semibold tracking-wide ${
            completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {todoName}
        </h3>
        <p className="mt-1 inline-block px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full shadow-sm">
          📅 {todoDate}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleComplete(id)}
          className="w-5 h-5 accent-green-600 cursor-pointer"
        />
        <button
          onClick={() => onDeleteClick(id)}
          className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl shadow hover:scale-105 hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition-all"
        >
          ❌ Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
