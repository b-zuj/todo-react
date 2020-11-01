import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ toggleModal }) => (
  <div className={styles.modal}>
    <div className={styles.modal__content}>
      <p className={styles.modal__p}>Your new to-do must have a title!</p> <br></br>
      <button className={styles.modal__button} onClick={toggleModal}>Close</button>
    </div>
  </div>
);

export default Modal;
