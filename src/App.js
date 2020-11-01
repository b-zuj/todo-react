import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';
import { addToLocalStorage, getFromLocalStorage } from './utilities/localStorageHandling';

const App = () => {
  const [toDoList, setToDoList] = useState(getFromLocalStorage() ? getFromLocalStorage() : []);
  const [isActiveModal, setIsActiveModal] = useState(false);

  const idGenerator = () => Math.random().toString(36).substring(2);

  const formatCard = (title, description) => {
    const newId = idGenerator();
    const newCard = {
      id: newId,
      title,
      description,
      status: 'toDo',
    };
    return newCard;
  };

  const toggleModal = () => {
    const newModalState = isActiveModal !== true;
    setIsActiveModal(() => newModalState);
  };

  const handleForm = e => {
    e.preventDefault();
    const newTitle = e.target[0].value;
    if (newTitle === '') {
      return toggleModal();
    }
    const newDescription = e.target[1].value;
    const newToDo = formatCard(newTitle, newDescription);
    return setToDoList(oldToDoList => [...oldToDoList, newToDo]);
  };

  const toggleCard = e => {
    const toDoListFromStorage = getFromLocalStorage();
    const cardId = e.currentTarget.parentElement.id;
    const cardIndex = toDoListFromStorage.findIndex(card => card.id === cardId);
    const updatedCard = toDoListFromStorage[cardIndex];
    updatedCard.status = updatedCard.status === 'toDo' ? 'done' : 'toDo';
    toDoListFromStorage[cardIndex] = updatedCard;
    setToDoList(toDoListFromStorage);
  };

  const deleteCard = e => {
    let toDoListFromStorage = JSON.parse(localStorage.getItem('toDoList'));
    const cardId = e.currentTarget.parentElement.parentElement.id;
    const cardIndex = toDoListFromStorage.findIndex(el => el.id === cardId);
    if (toDoListFromStorage.length === 1) {
      toDoListFromStorage = [];
    } else {
      toDoListFromStorage.splice(cardIndex, 1);
    }
    setToDoList(toDoListFromStorage);
  };

  useEffect(() => {
    addToLocalStorage(toDoList);
  }, [toDoList]);

  let modal = null;

  if (isActiveModal) {
    modal = <Modal toggleModal={toggleModal} />;
  }

  return (
    <div className="App">
      <Header />
      <Form handleForm={handleForm} />
      <Main toDoList={toDoList} toggleCard={toggleCard} deleteCard={deleteCard} />
      {modal}
    </div>
  );
};

export default App;
