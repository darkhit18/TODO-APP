import AppName from "./AppName";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import WelcomeMessage from "./WelcomeMessage";

function TodoApp({ todoItems, onNewItem, onDeleteClick, onToggleComplete }) {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-black/10 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200">
      {/* Heading */}
      <AppName />

      {/* Input Section */}
      <AddTodo onNewItem={onNewItem} />

      {/* Task List / Welcome Message */}
      <div className="mt-8">
        {todoItems.length > 0 ? (
          <TodoItems
            todoItems={todoItems}
            onDeleteClick={onDeleteClick}
            onToggleComplete={onToggleComplete}
          />
        ) : (
          <WelcomeMessage />
        )}
      </div>
    </div>
  );
}

export default TodoApp;
