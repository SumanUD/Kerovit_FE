import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import "../styles/footer.scss";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from 'react';


const Footer = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };


    return (
        <div className="above-accordian">
            <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="icon facebook" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="icon instagram" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="icon youtube" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon linkedin" />
                </a>
            </div>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button
                        className="accordion-button custom-accordion-btn"
                        type="button"
                        onClick={() => toggleAccordion(1)}
                    >
                        Collection <span className="accordion-icon">{openAccordion === 1 ? '-' : '+'}</span>
                    </button>
                    </h2>
                    {openAccordion === 1 && (
                        <div className="accordion-collapse">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong>
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-3">Customer Care</div>
                <div className="p-3">Warranty</div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button
                        className="accordion-button custom-accordion-btn"
                        type="button"
                        onClick={() => toggleAccordion(2)}
                    >
                        More <span className="accordion-icon">{openAccordion === 1 ? '-' : '+'}</span>
                    </button>
                    </h2>
                    {openAccordion === 2 && (
                        <div className="accordion-collapse">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="footer">
                <p className="complaint-text">
                    Register Your Complaint On Our Customer Care App. Download Now
                </p>

                <div className="app-buttons">
                    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="app-button">
                        <FaGooglePlay className="icon playstore" />
                        Get it on <br /> <strong>Google Play</strong>
                    </a>
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="app-button">
                        <FaApple className="icon appstore" />
                        Download on the <br /> <strong>App Store</strong>
                    </a>
                </div>

                <div className="footer-links">
                    <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
                    <Link to="/sitemap" className="footer-link">Sitemap</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
