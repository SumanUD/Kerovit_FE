import { useState } from "react";
import { Link } from "react-router-dom"; 
import "../styles/navbar.scss";

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

  
        <ul className={isOpen ? "open" : ""}>
  
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


          <li><Link to="/catalogue">E-Catalogue</Link></li>
          <li><Link to="/where-to-buy">Where to Buy</Link></li>
          

          <li className={`submenu ${activeIndex === 1 ? "active openSub" : ""}`} onClick={(e) => toggleSubmenu(1, e)}>
            <Link to="#">
              More <span className="submenu-button"></span>
            </Link>
            <ul style={{ display: activeIndex === 1 ? "block" : "none" }}>
              <li onClick={(e) => e.stopPropagation()}>
                <Link to="/whats-new">What's New</Link>
              </li>
              <li onClick={(e) => e.stopPropagation()}>
                <Link to="/career">Career</Link>
              </li>
              <li onClick={(e) => e.stopPropagation()}>
                <Link to="/resources">Resources</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
