import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa"; // Import icons
import subMenuIcon from "../../public/icons/down.png"; // Import your submenu icon
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [openMenuList, setOpenMenuList] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Toggle submenus
  const toggleSubmenu = (index, e) => {
    e.stopPropagation();
    if(activeIndex === index) {
      setActiveIndex(null);
      setOpenMenuList(false);
    }else{
      setActiveIndex(index);
      setOpenMenuList(true); 
    }
  };

  // Detect scrolling for background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const searchInputRef = useRef(null);
  //handleling search input
  const [openSearch, setOpenSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    console.log(e.target.value);
  };
  const handleOpenSearch = () => {
    console.log("cleicked")
    setOpenSearch(!openSearch);
    setSearchInput("");
  }
  const handleCloseSearch = () => {
    setOpenSearch(false);
    setSearchInput("");
  }

  return (
    <>      
      {isOpen && <div className="nav-overlay active" onClick={toggleMenu}></div>}
      
      <nav id="navbarMenu" className={`${scrolled ? "scrolled" : ""} ${openMenuList ? "scrolled" : ""} ${openSearch ? "scrolled" : ""}`}>         
        <div className="nav-contents">
          <div className="nav-left">
            <div className="toggleMenu" >
              <GiHamburgerMenu onClick={toggleMenu}/>
              <Link to="/">
              <img
                  src="/kerovit_logo.png"
                alt="Logo"
                className="kerovit_logo"
              />
              </Link>
            </div>
          </div>
          <div className="the_logo">
            <Link to="/">
              <img
                  src="/kerovit_logo.png"
                  alt="Logo"
                  className="kerovit_logo"
                />
            </Link>          
          </div>
          
          <div className="nav-right">
            {/* <FaMapMarkerAlt className="nav-icon" /> */}
            {/* <FaSearch className="nav-icon" /> */}
            <Link to="/locate-our-store">
              <img src="menu_location.png" alt="" className="menu_location" />
            </Link>
            <img src="menu_search.png" alt="" className="menu_search desktop" onClick={handleOpenSearch}/>
          </div>

          <div className={`search-desktop ${openSearch ? "open" : ""}`}>
            <div className="search-desktop-container">
              <input type="text" ref={searchInputRef} placeholder="Search" onChange={(e)=> handleSearchInputChange(e)} className="search-desktop-input" />
              {/* <img src="menu_search.png" alt="" className="menu_search" /> */}
              <IoClose className="close_icon" onClick={handleCloseSearch}/>              
            </div>
          </div>
          
          <ul className={isOpen ? "open" : ""}>
            {/* Products Submenu */}
            <li className={`submenu ${activeIndex === 0 ? "active openSub" : ""}`} onClick={(e) => toggleSubmenu(0, e)}>
              <Link to="#">
                Products <span className="submenu-icon">
                  <img src={subMenuIcon} alt="" />
                </span>
                <div className="submenu-button"></div>
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

            <li><Link to="#">E-Catalogue</Link></li>
            <li><Link to="/locate-our-store">Where to Buy</Link></li>

            {/* More Submenu */}
            <li className={`submenu ${activeIndex === 1 ? "active openSub" : ""}`} onClick={(e) => toggleSubmenu(1, e)}>
              <Link to="#">
                More <span className="submenu-icon">
                  <img src={subMenuIcon} alt="" />
                </span>
                <div className="submenu-button"></div>
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
