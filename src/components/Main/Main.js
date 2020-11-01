import React from 'react';
import Card from './Card/Card';
import styles from './Main.module.css';

const Main = ({ toDoList, toggleCard, deleteCard }) => {
  const toDos = toDoList.filter(element => element.status === 'toDo');
  const doneToDos = toDoList.filter(element => element.status === 'done');

  const toDoCards = toDos.map(toDo => (
    <Card
      id={toDo.id}
      title={toDo.title}
      description={toDo.description}
      isDeletable={false}
      toggleCard={toggleCard}
      deleteCard={deleteCard}
      key={toDo.id} />
  ));

  const doneCards = doneToDos.map(toDo => (
    <Card
      id={toDo.id}
      title={toDo.title}
      description={toDo.description}
      isDeletable={true}
      toggleCard={toggleCard}
      deleteCard={deleteCard}
      key={toDo.id} />
  ));

  return (
    <>
      <main className={styles.main}>
        <header className={styles.main__header}>
          <h2>
            {toDoCards.length > 0 || doneCards.length > 0 ? 'Your to-do list:' : 'Add new tasks to your to-do list'}
          </h2>
        </header>
        {toDoCards.length > 0 ? (
          <section className={styles.main__section___toDoTasks} >
            <header className="section__header"><h3>To do:</h3></header>
            {toDoCards}
          </section>
        ) : null}
        {doneCards.length > 0 ? (
          <section className={styles.main__section___doneTasks}>
            <header className="section__header"><h3>Done:</h3></header>
            {doneCards}
          </section>
        ) : null}
      </main>
    </>
  );
};

export default Main;
