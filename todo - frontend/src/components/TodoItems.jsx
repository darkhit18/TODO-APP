import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick, onToggleComplete }) => {
  // Sort: incomplete first, completed last
  const sortedItems = [...todoItems].sort((a, b) => a.completed - b.completed);

  return (
    <div className="max-w-2xl mx-auto mt-8 space-y-4">
      {sortedItems.length > 0 ? (
        sortedItems.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            todoDate={item.dueDate}
            todoName={item.name}
            completed={item.completed}
            onDeleteClick={onDeleteClick}
            onToggleComplete={onToggleComplete}
          />
        ))
      ) : (
        <p className="text-center text-gray-400 italic mt-8">
          🎉 No tasks yet. Add your first one!
        </p>
      )}
    </div>
  );
};

export default TodoItems;
