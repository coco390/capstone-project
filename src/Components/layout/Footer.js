import React from "react";
import { Link } from 'react-router-dom';
import styles from "./footer.module.css";
import logo from "../layout/logowhite.PNG";
import pages from "../utilities/pages";
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

const contacts = [
    {icon: faMapMarkerAlt, info: "123 Ave, Chicago, IL 60611", },
    {icon: faPhone, info: "(123) 456-7890", },
    {icon: faEnvelope, info: "customer@littlelemon.com", },
];

const socials = [
    { icon: faFacebook, name: 'facebook', },
    { icon: faTwitter, name: 'twitter', },
    { icon: faInstagram, name: 'instagram', },
    { icon: faYoutube, name: 'youtube', },
  ];

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.grid}>
                <img className={styles.footerimg}src={logo} alt="Little Lemon Logo" />
            </div>
            <nav className={styles.footerNav}>
                <h4>Site Map</h4>
                <ul>
                    {navLinks.map((navLink, index) =>
                        <li key={index}>
                         <Link to={navLink.path}>{navLink.name}</Link>
                         </li>
                    )}
                </ul>
            </nav>
            <div className={styles.footerContact}>
                <h4>Contact Us</h4>
                <ul className={styles.footerList}>
                    <address>
                    {contacts.map((contact, index) =>
                        <p key={index}>
                         <FontAwesomeIcon icon={contact.icon} /> {contact.info}
                        </p>
                    )}
                    </address>
                </ul>

                <div className={styles.footerSocial}>
                    <h4>Connect With Us</h4>
                    {socials.map((social, index) =>
                    <a
                        key={index}
                        href={`https://www.${social.name}.com`}
                        target="_blank"
                        rel="noreferrer"
                            >
                        <FontAwesomeIcon icon={social.icon} size="lg" />
                     </a>
                     )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
