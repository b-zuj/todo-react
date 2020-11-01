import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = ({ handleForm }) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setInputDescription] = useState('');

  const onTitleChange = e => {
    const { value } = e.target;
    setInputTitle(() => value);
  };

  const onDescriptionChange = e => {
    const { value } = e.target;
    setInputDescription(() => value);
  };

  return (
    <>
      <form className={styles.body__form}
      autoComplete="off"
      onSubmit={e => {
        handleForm(e);
        setInputTitle('');
        setInputDescription('');
      }}>
        <input type="text" value={inputTitle} className={styles.form__input} placeholder="Title" onChange={onTitleChange}/>
        <input type="text" value={inputDescription} className={styles.form__input} placeholder="Details" onChange={onDescriptionChange} />
        <button type="submit" className={styles.form__button}>Add</button>
      </form>
    </>
  );
};

export default Form;
