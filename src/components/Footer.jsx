import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaGooglePlay, FaApple, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/footer.scss";
import plusIcon from "../../public/icons/plus.png";
import minusIcon from "../../public/icons/minus.png";


const Footer = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <div className="above-accordian">
            <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/facebook.png" alt="Facebook" className="icon facebook" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/instagram.png" alt="Instagram" className="icon instagram" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="/twitter.png" alt="Twitter" className="icon twitter" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src="/youtube.png" alt="YouTube" className="icon youtube" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="/linkedin.png" alt="LinkedIn" className="icon linkedin" />
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
                            Collection   <span className="accordion-icon">
                                <img
                                    src={openAccordion === 1 ? minusIcon : plusIcon}
                                    alt={openAccordion === 1 ? "Collapse" : "Expand"}
                                    width="16"
                                    height="16"
                                />
                            </span>
                        </button>
                    </h2>
                    {openAccordion === 1 && (
                        <div className="accordion-collapse">
                            <div className="accordion-body">
                                <p>This is the first item's accordion body.</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-3 non-accordian">Customer Care</div>
                <div className="p-3 non-accordian"><Link to="/warranty">Warranty</Link></div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button custom-accordion-btn"
                            type="button"
                            onClick={() => toggleAccordion(2)}
                        >
                            More  <span className="accordion-icon">
                                <img
                                    src={openAccordion === 2 ? minusIcon : plusIcon}
                                    alt={openAccordion === 2 ? "Collapse" : "Expand"}
                                    width="16"
                                    height="16"
                                />
                            </span>
                        </button>
                    </h2>
                    {openAccordion === 2 && (
                        <div className="accordion-collapse">
                            <div className="accordion-body">
                                <p>This is the second item's accordion body.</p>

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
                        <img src="/google_play.png" alt="Google Play" className="icon playstore" />
                        {/* Get it on <br /> <strong>Google Play</strong> */}
                    </a>
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="app-button">
                        <img src="/app_store.png" alt="App Store" className="icon appstore" />
                        {/* Download on the <br /> <strong>App Store</strong> */}
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
