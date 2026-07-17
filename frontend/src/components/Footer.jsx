import React from "react";
import { Link } from "react-router-dom";
import '../styles/footer.css';

const Footer = ()=>{
    return (
        <footer className="footer">
            <div className="footer-content">
                <p> &copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
                <ul className="footer-links">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/returnpolicy">Return Policy</Link></li>
                    <li><Link to="/disclaimer">Disclaimer</Link></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;