import React from "react";
import styles from "./hero.module.css";
import restaurantfood from "../Images/restauranfood.jpg";

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
                </div>
                <img className={styles.heroimg} src={restaurantfood} alt="Restaurant Food" />
            </div>
        </section>

    );
}



export default Main;