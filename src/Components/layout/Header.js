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
        <nav className={`${styles.navContainer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.navLinks}>
          <a href="/" className={styles.navItem}>Home</a>
          <a href="/about" className={styles.navItem}>About</a>
          <a href="/menu" className={styles.navItem}>Menu</a>
          <a href="/reservations" className={styles.navItem}>Reservations</a>
          <a href="/order-online" className={styles.navItem}>Online Orders</a>
          <a href="/login" className={styles.navItem}>Login</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;