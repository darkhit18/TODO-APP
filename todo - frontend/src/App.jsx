import { useEffect, useState } from "react";
import TodoApp from "./components/TodoApp";
import {
  addItemToServer,
  fetchItemsFromServer,
  deleteItemFromServer,
} from "./Services/itemService";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  // Fetch items on load
  useEffect(() => {
    fetchItemsFromServer().then((items) => setTodoItems(items));
  }, []);

  // Add new item
  const handleNewItem = async (itemName, itemDueDate) => {
    if (!itemName.trim()) return;
    const item = await addItemToServer(itemName, itemDueDate);
    setTodoItems((prev) => [...prev, { ...item, completed: false }]);
  };

  // Delete item
  const handleDeleteItem = async (id) => {
    const deleteId = await deleteItemFromServer(id);
    setTodoItems((prev) => prev.filter((item) => item.id !== deleteId));
  };

  // Toggle complete/incomplete
  const handleToggleComplete = (id) => {
    setTodoItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-1/2 translate-x-1/2 w-[400px] h-[400px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Todo App Wrapper */}
      <div className="relative z-10 w-full max-w-4xl">
        <TodoApp
          todoItems={todoItems}
          onNewItem={handleNewItem}
          onDeleteClick={handleDeleteItem}
          onToggleComplete={handleToggleComplete}
        />
      </div>
    </div>
  );
}

export default App;
