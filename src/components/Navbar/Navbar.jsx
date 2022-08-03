import NavbarCss from './Navbar.module.css';
import { NavLink } from "react-router-dom";


const checkLink = ({isActive}) => isActive ? NavbarCss.active : '' ;


const Nav = () => {
  return (
    <nav className={NavbarCss.nav}>

      <div className={NavbarCss.item} ><NavLink className= {checkLink} to="/Profile">Profile</NavLink></div>
      <div  className={NavbarCss.item}><NavLink className= {checkLink} to="/Messages">Messages</NavLink></div>
      <div className={NavbarCss.item}><NavLink className= {checkLink} to="/News">News</NavLink></div>
      <div className={NavbarCss.item}><NavLink className= {checkLink} to="/Music">Music</NavLink></div>
      <div className={NavbarCss.item}><NavLink className= {checkLink} to="/Setting">Settings</NavLink></div>
    </nav>
  );

};

export default Nav;