// WeekSpecials.js
import React from "react";
import { Link } from "react-router-dom";
import bruschetta from "./bruchetta.svg";
import greeksalad from "./greeksalad.jpg";
import lemondessert from "./lemondessert.jpg";
import styles from "./specials.module.css";
import pages from "../../utilities/pages";
import MealCard from "./MealCard";

const meals = [
  {
    name: 'Greek Salad',
    image: greeksalad,
    price: '$12.99',
    description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
  },
  {
    name: 'Bruschetta',
    image: bruschetta,
    price: '$5.99',
    description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: 'Lemon Dessert',
    image: lemondessert,
    price: '$5.00',
    description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>This week specials!</h2>
        <Link className={styles.button} to={pages.get('orderOnline').path}>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => 
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;
