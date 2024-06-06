import React from "react";
import logo from "../Images/Logo.svg";

const Footer = () => {
    return(
        <footer>
            <section>
                <div className="footer-logo">
                    <img src={logo} alt="Little Lemon Logo" />
                </div>
                <div>
                    <h3>Site Map</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>123 Chicago, IL</li>
                        <li>800-123-4567</li>
                        <li>Customer@littlelemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>CONNECT WITH US</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">X</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;