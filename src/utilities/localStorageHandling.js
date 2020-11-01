export const getFromLocalStorage = () => {
  const fromStorage = localStorage.getItem('toDoList');
  const toDoListStorage = fromStorage ? JSON.parse(fromStorage) : [];
  return toDoListStorage;
};

export const addToLocalStorage = list => localStorage.setItem('toDoList', JSON.stringify(list));
