import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/footer.scss";
import plusIcon from "../../public/icons/plus.png";
import minusIcon from "../../public/icons/minus.png";

import logo from "../../public/kerovit_logo.png";
import googlePlay from "../../public/google_play.png";
import appStore from "../../public/app_store.png";
import facebook from "../../public/facebook.png";
import instagram from "../../public/instagram.png";
import twitter from "../../public/twitter.png";
import youtube from "../../public/youtube.png";
import linkedin from "../../public/linkedin.png";
import down from "../../public/icons/down.png";

const Footer = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [openDesktopAccordion, setOpenDesktopAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const toggleDesktopAccordion = (index) => {
    setOpenDesktopAccordion(openDesktopAccordion === index ? null : index);
  };

  return (
    <>
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
              <button className="accordion-button custom-accordion-btn" type="button" onClick={() => toggleAccordion(1)}>
                Collection
                <span className="accordion-icon">
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
                  <ul>
                    <li><Link to="/aurum"><p>Aurum</p></Link></li>
                    <li><Link to="/kerovit"><p>Kerovit</p></Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="p-3 non-accordian">Customer Care</div>
          <div className="p-3 non-accordian"><Link to="/warranty">Warranty</Link></div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button custom-accordion-btn" type="button" onClick={() => toggleAccordion(2)}>
                More
                <span className="accordion-icon">
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
                  <ul>
                    <li><Link to="/career"><p>Career</p></Link></li>
                    <li><Link to="/blog"><p>Resources</p></Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="footer">
          <p className="complaint-text">Register Your Complaint On Our Customer Care App. Download Now</p>
          <div className="app-buttons">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="app-button">
              <img src="/google_play.png" alt="Google Play" className="icon playstore" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="app-button">
              <img src="/app_store.png" alt="App Store" className="icon appstore" />
            </a>
          </div>
          <div className="footer-links">
            <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
            <Link to="/sitemap" className="footer-link">Sitemap</Link>
          </div>
        </div>
      </div>

      <div className="desktop-footer">
        <div className="the_footer">
          <div className="the_logo_section">
            <img src={logo} alt="Logo" />
          </div>
          <div className="quick_menu_section">
            <div className="footer_heading">Quick Menu</div>
            <div className="quick_menu">
              <p onClick={() => toggleDesktopAccordion(1)}>
                Collection <span className={openDesktopAccordion === 1 ? "flip" : ""}><img src={down} alt="toggle" /></span>
              </p>
              <div className={`${openDesktopAccordion === 1 ? "" : "hide"} footer_accordian`}>
                <ul>
                  <li><Link to="/aurum">Aurum</Link></li>
                  <li><Link to="/kerovit">Kerovit</Link></li>
                </ul>
              </div>

              <Link to="#">Customer Care</Link>
              <Link to="/warranty">Warranty</Link>

              <p onClick={() => toggleDesktopAccordion(2)}>
                More <span className={openDesktopAccordion === 2 ? "flip" : ""}><img src={down} alt="toggle" /></span>
              </p>
              <div className={`${openDesktopAccordion === 2 ? "" : "hide"} footer_accordian`}>
                <ul>
                <li><Link to="/career"><p>Career</p></Link></li>
                <li><Link to="/blog"><p>Resources</p></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="other_section">
            <div className="apps">
              <div className="appheading">Register your complaint on our customer care app. Download now</div>
              <div className="app-images">
                <img src={googlePlay} alt="Google Play" />
                <img src={appStore} alt="App Store" />
              </div>
            </div>
            <div className="underline"></div>
            <div className="socials_links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" className="icon facebook" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" className="icon instagram" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter" className="icon twitter" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img src={youtube} alt="YouTube" className="icon youtube" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="icon linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
