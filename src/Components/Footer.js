import React from "react";
import logo from "../Images/Logo.svg";

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
                        <a href="/" className="footer-item">Address</a>
                        <a href="/" className="footer-item">Phone Number</a>
                        <a href="/" className="footer-item">Email</a>
                    </div>
                <div className="footer-social">
                        <p className="footer-head">Social Media</p>
                        <a href="/" className="footer-item">Facebook</a>
                        <a href="/" className="footer-item">Twitter</a>
                        <a href="/" className="footer-item">Instagram</a>
                        <a href="/" className="footer-item">YouTube</a>
                 </div>
            </div>
        </footer>
    )
}

export default Footer;