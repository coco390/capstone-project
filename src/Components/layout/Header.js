import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import styles from "./header.module.css"
import logo from "../layout/logolarge.PNG"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className={styles.headerContainer}>
        <div className={styles.navlogo}>
          <img src={logo} alt="Logo" />
        </div>
        <button className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={styles.navContainer}>
        <div className={styles.navLinks}>
          <a href="/" className={styles.navItem}>HOME</a>
          <a href="/about" className={styles.navItem}>ABOUT</a>
          <a href="/menu" className={styles.navItem}>MENU</a>
          <a href="/reservations" className={styles.navItem}>RESERVATIONS</a>
          <a href="/order-online" className={styles.navItem}>ONLINE ORDERS</a>
          <a href="/login" className={styles.navItem}>LOGIN</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;