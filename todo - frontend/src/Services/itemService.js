export const addItemToServer = async (task, date) => {
  const response = await fetch("http://localhost:3005/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, date }),
  });

  if (!response.ok) {
    throw new Error("Failed to add item to server");
  }

  const data = await response.json();   // wait for JSON data
  return mapServerItemToLocalItem(data);
};

export const fetchItemsFromServer = async () => {
  const response = await fetch("http://localhost:3005/api/todo");
  const data = await response.json();   // wait for JSON data
  return data.map(mapServerItemToLocalItem);
}

export const updateItemOnServer = async (id, updates) => {
  const response = await fetch(`http://localhost:3005/api/todo/${id}/completed`, {
    method: "PUT",
  });
  const data = await response.json();   // wait for JSON data
  return mapServerItemToLocalItem(data);
}

export const deleteItemFromServer = async (id) => {
  await fetch(`http://localhost:3005/api/todo/${id}`, {
    method: "DELETE",
  }); 
  return id;  // return the id of the deleted item
}


const mapServerItemToLocalItem = (serverItem) => {
  return {
    id: serverItem._id,
    name: serverItem.task,
    dueDate: serverItem.date,
    completed: serverItem.completed,
    createdAt: serverItem.createdAt,
    updatedAt: serverItem.updatedAt,
  };
};
