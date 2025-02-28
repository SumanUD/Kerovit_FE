import { useState } from "react";
import { Link } from "react-router-dom"; 
import "../styles/Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleSubmenu = (index, e) => {
    e.stopPropagation();
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <nav id="navbarMenu">
        {/* Hamburger Menu */}
        <div className="toggleMenu" onClick={toggleMenu}>
          <img
            src="https://www.kerovit.com/images/new-logo-blue.png"
            alt="Logo"
            height="32px"
          />
        </div>

        {/* Navigation Menu */}
        <ul className={isOpen ? "open" : ""}>
          {/* Products Dropdown */}
          <li className={`submenu ${activeIndex === 0 ? "active openSub" : ""}`} onClick={(e) => toggleSubmenu(0, e)}>
            <Link to="#">
              Products <span className="submenu-button"></span>
            </Link>
            <ul style={{ display: activeIndex === 0 ? "block" : "none" }}>
              <li onClick={(e) => e.stopPropagation()}>
                <img src="https://www.kerovit.com/images/faucet-icons.png" alt="Faucet" />
                <Link to="/single_product">Faucet</Link>
              </li>
              <li onClick={(e) => e.stopPropagation()}>
                <img src="https://www.kerovit.com/images/bathroom-icons.png" alt="Shower" />
                <Link to="/single_product">Shower</Link>
              </li>
              <li onClick={(e) => e.stopPropagation()}>
                <img src="https://www.kerovit.com/images/basin-icons.png" alt="Basin" />
                <Link to="/single_product">Basin</Link>
              </li>
              <li onClick={(e) => e.stopPropagation()}>
                <img src="https://www.kerovit.com/images/sanitaryware-icons.png" alt="Toilet" />
                <Link to="/single_product">Toilet</Link>
              </li>
              <li onClick={(e) => e.stopPropagation()}>
                <img src="https://www.kerovit.com/images/bathroom-icons.png" alt="Bathroom Furniture" />
                <Link to="/single_product">Bathroom Furniture</Link>
              </li>
              <li onClick={(e) => e.stopPropagation()}>
                <img src="https://www.kerovit.com/images/accessories-icons.png" alt="Accessories" />
                <Link to="/single_product">Accessories</Link>
              </li>
            </ul>
          </li>

          {/* Other Menu Items */}
          <li><Link to="/collection">Collection</Link></li>
          <li><Link to="/catalogue">E-Catalogue</Link></li>
          <li><Link to="/where-to-buy">Where to Buy</Link></li>
          <li><Link to="/customer">Customer Care</Link></li>
          <li><Link to="/more">More</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
