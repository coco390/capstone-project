import React from "react";
import styles from "./footer.module.css"
import logo from "../layout/logowhite.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faInstagram,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope,
         faMapMarkerAlt,
         faPhone, } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerlogo}>
                <img src={logo} alt="Little Lemon Logo" />
            </div>
            <nav className={styles.footerNav}>
                <p className={styles.footerHead}>Site Map</p>
                <ul className={styles.footerList}>
                    <li><a href="/" className={styles.footerItem}>Home</a></li>
                    <li><a href="/about" className={styles.footerItem}>About</a></li>
                    <li><a href="/menu" className={styles.footerItem}>Menu</a></li>
                    <li><a href="/reservations" className={styles.footerItem}>Reservations</a></li>
                    <li><a href="/order-online" className={styles.footerItem}>Order Online</a></li>
                    <li><a href="/login" className={styles.footerItem}>Login</a></li>
                </ul>
            </nav>
            <address iv className={styles.footerContact}>
                <p className={styles.footerHead}>Contact Us</p>
                <ul className={styles.footerList}>
                    <li><a href="/" className={styles.footerItem}><FontAwesomeIcon icon={faMapMarkerAlt} />123 Lemon, Chicago, IL 60611</a></li>
                    <li><a href="/" className={styles.footerItem}><FontAwesomeIcon icon={faPhone} /> (888)123-4567</a></li>
                    <li><a href="mailto:customer@littlelemon.com" className={styles.footerItem}><FontAwesomeIcon icon={faEnvelope} /> customer@littlelemon.com</a></li>
                </ul>
            </address>
            <div className={styles.footerSocial}>
                <p className={styles.footerHead}>Connect With Us</p>
                <ul className={styles.footerMedia}>
                    <li><a href="https://www.facebook.com" className={`${styles.social} ${styles.facebook}`}><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="https://www.twitter.com" className={`${styles.social} ${styles.twitter}`}><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://www.instagram.com" className={`${styles.social} ${styles.instagram}`}><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="https://www.youtube.com" className={`${styles.social} ${styles.youtube}`}><FontAwesomeIcon icon={faYoutube} /></a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
