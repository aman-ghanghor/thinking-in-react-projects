import { useGlobalContext } from "./context";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { isSubmenuOpen, openSubmenu, openSidebar, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => { 
    const page = e.target.textContent ;
    const tempBtn = e.target.getBoundingClientRect() ;
    const center = (tempBtn.left + tempBtn.right) / 2 ;
    const bottom = tempBtn.bottom - 3 ;
    openSubmenu(page, {center, bottom} ) ;
  }

  const handleSubmenu = (e) => {
    if(!e.target.classList.contains("link-btn")) {
      closeSubmenu() ;
    }
  }

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="stripe" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu} >Products</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu} >Developers</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu} >Company</button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
