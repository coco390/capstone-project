import React from "react";
import styles from './footer.module.css'
import logo from "../Images/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faInstagram,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope,
         faMap,
         faPhone, } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return(
        <footer className={styles.footercontainer}>
            <img src={logo} alt="Little Lemon Logo" />
                    <div className={styles.footerNav}>
                        <p className={styles.footerText}>Site Map</p>
                         <a href="/" className={styles.footerItem}>Home</a>
                         <a href="/" className={styles.footerItem}>About</a>
                         <a href="/" className={styles.footerItem}>Menu</a>
                         <a href="/" className={styles.footerItem}>Reservations</a>
                         <a href="/" className={styles.footerItem}>Order Online</a>
                         <a href="/" className={styles.footerItem}>Login</a>
                    </div>
                    <div className={styles.footerContact}>
                        <p className={styles.footerHead}>Contact</p>
                        <a href="/" className={styles.footerItem}>
                        <FontAwesomeIcon icon={faMap}/>Address</a>
                        <a href="/" className={styles.footerItem}>
                        <FontAwesomeIcon icon={faPhone}/>Phone Number</a>
                        <a href="mailto:customer@littlelemon.com" className={styles.footerItem} >
                        <FontAwesomeIcon icon={faEnvelope}/>Email</a>
                    </div>
                <div className="social-container">
                        <p className={styles.footerHead}>Connect With Us</p>
                        <a href="https://www.facebook.com" className={`${styles.social} ${styles.facebook}`}>
                            <FontAwesomeIcon icon={faFacebook} size="1x" />
                        </a>
                        <a href="https://www.x.com" className={`${styles.social} ${styles.instagram}`}>
                            <FontAwesomeIcon icon={faTwitter} size="1x" />
                        </a>
                        <a href="https://www.instagram.com" className={`${styles.social} ${styles.instagram}`}>
                            <FontAwesomeIcon icon={faInstagram} size="1x" />
                        </a>
                        <a href="https://www.youtube.com" className={`${styles.social} ${styles.youtube}`}>
                            <FontAwesomeIcon icon={faYoutube} size="1x" />
                        </a>
                 </div>
        </footer>
    );
}

export default Footer;