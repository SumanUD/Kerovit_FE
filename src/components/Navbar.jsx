import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "../styles/navbar.scss";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa"; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Toggle submenus
  const toggleSubmenu = (index, e) => {
    e.stopPropagation();
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Detect scrolling for background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background Blur Overlay */}
      <div className={`nav-overlay ${isOpen ? "active" : ""}`} onClick={toggleMenu}></div>

      <nav id="navbarMenu" className={scrolled ? "scrolled" : ""}>
        {/* Hamburger Menu */}
        <div className="toggleMenu" onClick={toggleMenu}>
          <img src="https://www.kerovit.com/images/new-logo-blue.png" alt="Logo" height="32px" />
        </div>

        <ul className={isOpen ? "open" : ""}>
          {/* Products Submenu */}
          <li className={`submenu ${activeIndex === 0 ? "active openSub" : ""}`} onClick={(e) => toggleSubmenu(0, e)}>
            <Link to="#">Products <span className="submenu-button"></span></Link>
            <ul className="dropdown" style={{ display: activeIndex === 0 ? "block" : "none" }}>
              {[
                { img: "https://www.kerovit.com/images/faucet-icons.png", name: "Faucet" },
                { img: "https://www.kerovit.com/images/bathroom-icons.png", name: "Shower" },
                { img: "https://www.kerovit.com/images/basin-icons.png", name: "Basin" },
                { img: "https://www.kerovit.com/images/sanitaryware-icons.png", name: "Toilet" },
                { img: "https://www.kerovit.com/images/bathroom-icons.png", name: "Bathroom Furniture" },
                { img: "https://www.kerovit.com/images/accessories-icons.png", name: "Accessories" }
              ].map((item, index) => (
                <li key={index} onClick={(e) => e.stopPropagation()}>
                  <img src={item.img} alt={item.name} />
                  <Link to="/single_product">{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>

          <li><Link to="/catalogue">E-Catalogue</Link></li>
          <li><Link to="/where-to-buy">Where to Buy</Link></li>

          {/* More Submenu */}
          <li className={`submenu ${activeIndex === 1 ? "active openSub" : ""}`} onClick={(e) => toggleSubmenu(1, e)}>
            <Link to="#">More <span className="submenu-button"></span></Link>
            <ul className="dropdown" style={{ display: activeIndex === 1 ? "block" : "none" }}>
              {["What's New", "Career", "Resources"].map((item, index) => (
                <li key={index} onClick={(e) => e.stopPropagation()}>
                  <Link to={`/${item.toLowerCase().replace(/\s/g, "-")}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
