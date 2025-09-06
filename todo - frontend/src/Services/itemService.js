const API_URL = import.meta.env.VITE_API_URL;

export const addItemToServer = async (task, date) => {
  const response = await fetch(`${API_URL}/todo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, date }),
  });

  if (!response.ok) {
    throw new Error("Failed to add item to server");
  }

  const data = await response.json();
  return mapServerItemToLocalItem(data);
};

export const fetchItemsFromServer = async () => {
  const response = await fetch(`${API_URL}/todo`);
  const data = await response.json();
  return data.map(mapServerItemToLocalItem);
};

export const updateItemOnServer = async (id, updates) => {
  const response = await fetch(`${API_URL}/todo/${id}/completed`, {
    method: "PUT",
  });
  const data = await response.json();
  return mapServerItemToLocalItem(data);
};

export const deleteItemFromServer = async (id) => {
  await fetch(`${API_URL}/todo/${id}`, {
    method: "DELETE",
  });
  return id;
};

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
