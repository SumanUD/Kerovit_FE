import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import "../styles/footer.scss";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
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
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Collection
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is
                            shown by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element.
                        </div>
                    </div>
                </div>

                <div className="p-3">
                    Customer Care
                </div>

                <div className="p-3">
                    Warranty
                </div>


                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            More
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is
                            hidden by default.
                        </div>
                    </div>
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
