import { useState } from "react";
import { Plus } from "lucide-react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddButtonClicked = () => {
    if (!todoName.trim()) return;
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 p-6 bg-white rounded-2xl shadow-md border border-gray-100">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Enter a task..."
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-700"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-700"
        />
        <button
          onClick={handleAddButtonClicked}
          className="flex items-center justify-center gap-2 px-6 py-2 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 transition-all shadow-md"
        >
          <Plus size={18} /> Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
