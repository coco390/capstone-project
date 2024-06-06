import React from "react";
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
        <footer>
            <img src={logo} alt="Little Lemon Logo" />
            <div className="footer-content">
                    <div className="footer-nav">
                        <p className="footer-head">Site Map</p>
                        <a href="/" className="footer-item">Home</a>
                        <a href="/" className="footer-item">About</a>
                        <a href="/" className="footer-item" >Menu</a>
                        <a href="/" className="footer-item">Reservations</a>
                        <a href="/" className="footer-item">Order Online</a>
                        <a href="/"  className="footer-item">Login</a>
                    </div>
                    <div className="footer-contact">
                        <p className="footer-head">Contact</p>
                        <a href="/" className="footer-item">
                        <FontAwesomeIcon icon={faMap}/>Address</a>
                        <a href="/" className="footer-item">
                        <FontAwesomeIcon icon={faPhone}/>Phone Number</a>
                        <a href="/" className="footer-item">
                        <FontAwesomeIcon icon={faEnvelope}/>Email</a>
                    </div>
                <div className="social-container">
                        <p className="footer-head">Connect With Us</p>
                        <a href="https://www.facebook.com" className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="1x" />
                        </a>
                        <a href="https://www.x.com" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="1x" />
                        </a>
                        <a href="https://www.instagram.com" className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="1x" />
                        </a>
                        <a href="https://www.youtube.com" className="youtube social">
                        <FontAwesomeIcon icon={faYoutube} size="1x" />
                        </a>
                 </div>
            </div>
        </footer>
    )
}

export default Footer;