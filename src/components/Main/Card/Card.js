import React from 'react';
import styles from './Card.module.css';

const Card = ({
  id,
  title,
  description,
  isDeletable,
  toggleCard,
  deleteCard,
}) => (
  <>
    <article className={styles.section__card} id={id}>
      <section className={styles.card__content} onClick={toggleCard}>
        <h2 className={styles.card__title}>{title}</h2>
        <p className={styles.card__description}>{description}</p>
      </section>
      {isDeletable ? (
        <footer className={styles.card__footer}>
          <button className={styles.footer__button} onClick={deleteCard}>&#x274C;</button>
        </footer>
      ) : null}
    </article>
  </>
);

export default Card;
