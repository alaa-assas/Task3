import { NavLink } from 'react-router-dom';
import './NavComponent.css'
import { useState } from 'react';

const NavComponent = ({logo , items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`px-50 ${isOpen ? 'open' : ''}`}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className={`nav-links`}>
          {
            items.map((item,index) => (
              <li key={index}>
                <NavLink to={item.link}  className={({ isActive }) => (isActive ? "fs-20 active" : "fs-20")}>
                  {item.name}
                </NavLink>
              </li>
            ))
          }
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <img src="/Task3/images/Navbar/hamburger.svg" alt="logo" />
        </div>
        <ul className={`nav-menu ${isOpen && "show"}`}>
          {
            items.map((item,index) => (
              <li key={index}>
                <NavLink to={item.link} className={({ isActive }) => (isActive ? "fs-18 active" : "fs-18")} >
                  {item.name}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default NavComponent