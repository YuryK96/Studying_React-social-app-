import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = ({ isAuth, login }) => {
  return (
    <header className={s.header}>
      <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" />

      <div className={s.loginBlock}>
        {isAuth ? login : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
