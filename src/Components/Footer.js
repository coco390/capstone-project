import React from "react";
import styles from './footer.module.css'
import logo from "../Images/logowhite.PNG";
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
            return (
                <footer className={styles.footerContainer}>
                        <div className={styles.footerlogo}>
                             <img src={logo} alt="Little Lemon Logo" />
                         </div>
                        <div className={styles.footerNav}>
                            <p className={styles.footerHead}>SITE MAP</p>
                            <a href="/" className={styles.footerItem}>Home</a>
                            <a href="/about" className={styles.footerItem}>About</a>
                            <a href="/menu" className={styles.footerItem}>Menu</a>
                            <a href="/reservations" className={styles.footerItem}>Reservations</a>
                            <a href="/order-online" className={styles.footerItem}>Order Online</a>
                            <a href="/login" className={styles.footerItem}>Login</a>
                        </div>
                        <div className={styles.footerContact}>
                            <p className={styles.footerHead}>CONTACT US</p>
                            <a href="/" className={styles.footerItem}>
                                <FontAwesomeIcon icon={faMap}  />123 Lemon, Chicago, IL 60611
                            </a>
                            <a href="/" className={styles.footerItem}>
                                <FontAwesomeIcon icon={faPhone} /> (888)123-4567
                            </a>
                            <a href="mailto:customer@littlelemon.com" className={styles.footerItem}>
                                <FontAwesomeIcon icon={faEnvelope} /> customer@littlelemon.com
                            </a>
                        </div>
                        <div className={styles.footerSocial}>
                            <p className={styles.footerHead}>CONNECT WITH US</p>
                            <a href="https://www.facebook.com" className={`${styles.social} ${styles.facebook}`}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://www.twitter.com" className={`${styles.social} ${styles.twitter}`}>
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                            <a href="https://www.instagram.com" className={`${styles.social} ${styles.instagram}`}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.youtube.com" className={`${styles.social} ${styles.youtube}`}>
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                </footer>
            );
        }
        
export default Footer;