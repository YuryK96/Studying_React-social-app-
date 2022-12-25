import NavbarCss from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const checkLink = ({ isActive }: isActiveType): string => {
  return isActive ? NavbarCss.active : "";
};

const Nav: React.FC = () => {
  return (
    <nav className={NavbarCss.nav}>
      <div className={NavbarCss.item}>
        <NavLink className={checkLink} to="/Profile">
          Profile
        </NavLink>
      </div>
      <div className={NavbarCss.item}>
        <NavLink className={checkLink} to="/Messages">
          Messages
        </NavLink>
      </div>
      <div className={NavbarCss.item}>
        <NavLink className={checkLink} to="/Users">
          Friends
        </NavLink>
      </div>
      <div className={NavbarCss.item}>
        <NavLink className={checkLink} to="/News">
          News
        </NavLink>
      </div>
      <div className={NavbarCss.item}>
        <NavLink className={checkLink} to="/Music">
          Music
        </NavLink>
      </div>
      <div className={NavbarCss.item}>
        <NavLink className={checkLink} to="/Setting">
          Setting
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;

type isActiveType = {
  isActive: boolean;
};
