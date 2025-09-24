import { useState } from "react";
// import logo from "../../../public/assets/logo.png";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <Link to="/">
          <img src="./assets/logo.png" alt="logo" />
        </Link>
      </div>

      {/* Navigation items */}
      <div className={`navbar-items ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li> <Link to="/people">People</Link> </li>
          <li>
            <Link to="/searchPage">Search</Link>
          </li>
          <li>More</li>
          <Link to="/searchPage">
            <FaSearch className="search-icon" />
          </Link>
        </ul>
      </div>

      {/* Hamburger icon */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </div>
  );
};

export default Navbar;


















// import logo from "../../../public/assets/logo.png";
// import { FaSearch } from "react-icons/fa";
// import "./navbar.css";
// import { Link } from "react-router-dom";
// const Navbar = () => {
//   return (
//     <div>
//         <div className='navbar'>
//             <div className="logo-container">
//                 <Link to="/"><  img src={logo} alt='logo'/> </Link>
//             </div>
//             <div className="navbar-items">
//                   <ul>
//                     <li>Movies</li>
//                     <li>Tv Shows</li>
//                     <li><Link to="/searchPage">Search</Link></li>
//                     <li>More</li>
//                     <Link to="/searchpage"><FaSearch className="search-icon"/></Link>
//                   </ul>
//                 </div>
//                 {/* <div className="search-container">
//                   <input className="search-box" type="text" placeholder="Search for Movie, Tv Show or Person..." />
//                   <button className="search-btn">Search</button> 
//                   <FaSearch className="search-icon"/>
//                 </div> */}
                
//         </div>
//     </div>
//   )
// }

// export default Navbar