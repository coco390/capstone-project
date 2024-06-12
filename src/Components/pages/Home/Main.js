import React from "react";
import { Link } from 'react-router-dom';
import styles from "./main.module.css";
import restaurantfood from "../Home/restauranfood.jpg";
import pages from "../../utilities/pages";

const Main = () => {
    return (

        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.information}>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                    We are a family owned Mediterranean restaurant,
                    focused on traditional recipes served with a modern twist.
                    </p>
                    <Link className={styles.button} to={pages.get('bookings').path}>
                     Reserve a table
                    </Link>
                </div>
                <img className={styles.heroimg} src={restaurantfood} alt="Restaurant Food" />
            </div>
        </section>
    );
}



export default Main;