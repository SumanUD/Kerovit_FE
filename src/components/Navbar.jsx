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
      {isOpen && <div className="nav-overlay active" onClick={toggleMenu}></div>}

      <nav id="navbarMenu" className={scrolled ? "scrolled" : ""}>
        {/* Left Side - Logo */}
        <div className="nav-left">
          <div className="toggleMenu" onClick={toggleMenu}>
            <img
              src="/kerovit_logo.png"
              alt="Logo"
              className="kerovit_logo"
            />
          </div>
        </div>

        {/* Right Side - Search & Location Icons */}
        <div className="nav-right">
          {/* <FaMapMarkerAlt className="nav-icon" /> */}
          {/* <FaSearch className="nav-icon" /> */}
          <img src="menu_location.png" alt="" className="menu_location" />
          <img src="menu_search.png" alt="" className="menu_search" />

        </div>

        {/* Menu Items */}
        <ul className={isOpen ? "open" : ""}>
          {/* Products Submenu */}
          <li className={`submenu ${activeIndex === 0 ? "active openSub" : ""}`} onClick={(e) => toggleSubmenu(0, e)}>
            <Link to="#">
              Products <span className="submenu-button"></span>
            </Link>
            <ul className="dropdown" style={{ display: activeIndex === 0 ? "block" : "none" }}>
              {[
                { img: "/icons/faucet.png", name: "Faucet", link: "/faucet" },
                { img: "/icons/shower.png", name: "Shower", link: "/shower" },
                { img: "/icons/basin.png", name: "Basin", link: "/basin" },
                { img: "/icons/toilet.png", name: "Toilet", link: "/toilet" },
                { img: "/icons/bathroom_furniture.png", name: "Bathroom Furniture", link: "/bathroomFurniture" },
                { img: "/icons/accessories.png", name: "Accessories", link: "/accessories" }
              ].map((item, index) => (
                <li key={index} onClick={(e) => e.stopPropagation()}>
                  <img src={item.img} alt={item.name} />
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>

          <li><Link to="/catalogue">E-Catalogue</Link></li>
          <li><Link to="/where-to-buy">Where to Buy</Link></li>

          {/* More Submenu */}
          <li className={`submenu ${activeIndex === 1 ? "active openSub" : ""}`} onClick={(e) => toggleSubmenu(1, e)}>
            <Link to="#">
              More <span className="submenu-button"></span>
            </Link>
            <ul className="dropdown" style={{ display: activeIndex === 1 ? "block" : "none" }}>
              {[
                { label: "What's New", link: "#" },
                { label: "Career", link: "/career" },
                { label: "Resources", link: "/blog" }
              ].map((item, index) => (
                <li key={index} onClick={(e) => e.stopPropagation()}>
                  <Link to={item.link}>{item.label}</Link>
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
