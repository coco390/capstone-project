import React from 'react';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './mealcard.module.css';
import pages from '../../utilities/pages';

const MealCard = ({ meal }) => {
  return (
    <article className={styles.card}>
      <div className={styles.mealimg}>
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className={styles.mealheader}>
        <h3>{meal.name}</h3>
        <span>{meal.price}</span>
      </div>
      <div className={styles.mealfooter}>
        <p>{meal.description}</p>
        <Link to={pages.get('orderOnline').path}>
          Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
        </Link>
      </div>
    </article>
  );
};

export default MealCard;
